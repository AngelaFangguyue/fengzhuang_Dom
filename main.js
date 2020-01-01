let newE = dom.create(
  "<div style='border:2px solid red'><span>create：新创建的div父元素及其子元素</span><ul><li>春</li><li>夏</li><li>秋</li><li>冬</li></ul></div>"
);
//console.log(newE[0]);
//document.body.appendChild(newE[0]);
//console.log(window.test1);
window.test3.appendChild(newE); //

let newS1 = dom.create(
  "<span style='color:green'>after：新创建的span标签，将其放在p2元素的后面</span>"
);

let p2 = document.querySelector("#p2");
dom.after(p2, newS1);
let newS2 = dom.create(
  "<span style='color:green'>before：新创建的span标签，将其放在p2元素的前面</span>"
);
dom.before(p2, newS2);
let newS3 = dom.create(
  "<span style='color:green'>append：新创建的span标签，将其放在div:test1元素的里面，成为子元素</span>"
);
dom.append(window.test1, newS3);
dom.wrap(window.test2, window.hh2);
dom.remove(window.sp3);
dom.empty(window.test4);
console.log(dom.attr(window.test1, "id"));
console.log(dom.attr(window.test1, "style"));
dom.attr(window.test1, "title", "tset");
dom.text(
  window.sp2,
  "'使用text更改文本内容，将原先span中的内容“ss2”更改为当前的文字。'"
);
dom.html(
  window.p1,
  "<strong>使用html更改了div#test的第一个div#p1标签中的html内容</strong>"
);
console.log(dom.style(window.test1, "color"));
dom.style(window.test1, "background", "gray");
dom.style(window.test4, {
  width: "100px",
  height: "100px",
  background: "pink",
  border: "2px solid green"
});
dom.style(window.test1, {
  width: "400px",
  height: "500px"
  //border: "2px solid green"
});
dom.class.add(window.test2, "t2b");
dom.class.add(window.test1, "t2a");
dom.class.add(window.test2, "t2a");
dom.class.remove(window.test2, "t2b");
console.log(dom.class.hs(window.test1, "t2b"));

let fun1 = () => {
  console.log("on封装，用于添加或者删除事件监听");
};

dom.on(window.test1, "click", fun1);
dom.off(window.test1, "click", fun1);

console.log(dom.find("span"));
console.log(dom.find("#test2"));
console.log(dom.find("span", dom.find("#test2")[0]));
console.log(dom.children(window.test1));
console.log(dom.children(window.test5));
console.log(dom.siblings(window.p51));
console.log(dom.next(window.p51));
console.log(dom.previous(window.p52));
console.log(dom.index(window.p52));
dom.class.add(window.test5, "t5");
dom.attr(window.test5, "style", "color:yellow;font-weight:bold;padding:40px;");
console.log("window.test5.firstChild");
console.log(window.test5.firstChild);
console.log(window.test5.children[0]);
console.log(window.test5.childNodes[0]);
//each
let fun2 = x => {
  console.log(x);
};
console.log("window.test1");
console.log(window.test1);
console.log('dom.find("span", window.test1)');
console.log(dom.find("span", window.test1));
dom.each(dom.find("span", window.test1), fun2);
