window.dom = {
  create(strg) {
    let tmp = document.createElement("template");
    //tmp.innerHTML = strg;
    //return tmp.content.children;
    tmp.innerHTML = strg.trim();
    return tmp.content.firstChild;
  },
  after(node, node2) {
    //console.log(node.parentNode);
    return node.parentNode.insertBefore(node2, node.nextSibling);
  },
  before(node, node2) {
    return node.parentNode.insertBefore(node2, node);
  },
  append(pnode, cnode) {
    return pnode.appendChild(cnode);
  },
  wrap(pnode, cnode) {
    dom.after(cnode, pnode);
    dom.append(pnode, cnode);
  },
  remove(node) {
    //因为remove部分IE不支持，所以使用removeChild的方法
    return node.parentNode.removeChild(node);
  },
  empty(pnode) {
    //pnode.innerHTML = '';//这个太简单粗暴
    let cnode = pnode.firstChild; //也可以换为pnode.childNodes[0]，pnode.children[0]
    let res = [];
    while (cnode) {
      //dom.remove(cnode);
      pnode.removeChild(cnode);
      res.push(cnode);
      cnode = pnode.firstChild;
    }
    return res;
  },
  attr(node, att, value) {
    if (arguments.length === 3) {
      node[att] = value;
      //node.setAttribute(att,value);
    } else if (arguments.length === 2) {
      //return node[att];//只会获取标签内部设置的style样式
      return node.getAttribute(att); //这个也是，只会获取直接设置在标签里的属性，若为style，那么就只会获取在标签里设置的style
    }
  },
  text(node, stri) {
    if (arguments.length === 2) {
      if ("innerText" in node) {
        node.innerText = stri;
      } else {
        node.textContent = stri;
      }
    } else if (arguments.length === 1) {
      if ("innerText" in node) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    }
  },
  html(node, stri) {
    if (arguments.length === 2) {
      node.innerHTML = stri;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  style(node, name, value) {
    if (arguments.length === 2) {
      if (typeof name === "string") {
        return node.style[name];
      } else if (name instanceof Object) {
        for (let key in name) {
          node.style[key] = name[key];
        }
      }
    } else if (arguments.length === 3) {
      node.style[name] = value;
    }
  }, //没有重新设置的话，不会把之前设置的其他样式吃掉
  class: {
    add(node, clsn) {
      node.classList.add(clsn);
      //node.className
      //node.className+=" "+clsn;
    },
    remove(node, clsn) {
      node.classList.remove(clsn);
    },
    hs(node, clsn) {
      return node.classList.contains(clsn);
    }
  },
  on(node, eve, fn) {
    node.addEventListener(eve, fn);
  },
  off(node, eve, fn) {
    node.removeEventListener(eve, fn);
  },
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  parent(node) {
    return node.parentNode;
  },
  children(node) {
    return node.children; //不会获取文本节点
    //return node.childNodes;
  },
  siblings(node) {
    return Array.from(node.parentNode.children).filter(n => n !== node);
  },
  next(node) {
    let nnode = node.nextSibling; //
    while (nnode && nnode.nodeType === 3) {
      //console.log(nnode);
      nnode = nnode.nextSibling;
    }
    return nnode;
  },
  previous(node) {
    let nnode = node.previousSibling; //
    while (nnode && nnode.nodeType === 3) {
      //console.log(nnode);
      nnode = nnode.previousSibling;
    }
    return nnode;
  },
  each(nodes, fn) {
    for (let i = 0; i < nodes.length; i++) {
      fn.call(null, nodes[i]);
    }
  },
  index(node) {
    let cnodes = node.parentNode.children;
    let index = 0;
    for (index; index < cnodes.length; index++) {
      if (cnodes[index] === node) {
        break;
      }
    }
    return index;
  }
};
