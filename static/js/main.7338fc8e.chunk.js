(this.webpackJsonptodoapp_react=this.webpackJsonptodoapp_react||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(2),i=n.n(a),s=n(5),c=n.n(s),r=(n(20),n(13)),d=n(8),u=n(9),o=n(3),l=n(15),h=n(14),j=(n(21),n(22),n(10)),m=n(11),b=n(1);var p=function(t){var e=t.items.map((function(e){return Object(b.jsx)("div",{className:"list",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{type:"text",id:e.key,value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(b.jsx)("span",{children:Object(b.jsx)(j.a,{className:"faicons",icon:"trash",onClick:function(){return t.deleteItem(e.key)}})})]})},e.key)}));return Object(b.jsx)("div",{children:Object(b.jsx)(m.a,{duration:100,easing:"ease-in-out",children:e})})},f=n(4),x=n(12);f.b.add(x.a);var v=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={items:[],currentItem:{text:"",key:""}},a.handleInput=a.handleInput.bind(Object(o.a)(a)),a.addItem=a.addItem.bind(Object(o.a)(a)),a.deleteItem=a.deleteItem.bind(Object(o.a)(a)),a.setUpdate=a.setUpdate.bind(Object(o.a)(a)),a}return Object(u.a)(n,[{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(console.log(e),""!==e.text){var n=[].concat(Object(r.a)(this.state.items),[e]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"setUpdate",value:function(t,e){var n=this.state.items;n.map((function(n){n.key===e&&(n.text=t)})),this.setState({items:n})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{children:Object(b.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem,children:[Object(b.jsx)("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),Object(b.jsx)("button",{type:"submit",children:"Add"})]})}),Object(b.jsx)(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]})}}]),n}(i.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),s(t),c(t)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),O()}},[[29,1,2]]]);
//# sourceMappingURL=main.7338fc8e.chunk.js.map