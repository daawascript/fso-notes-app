(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),r=n(15),a=n.n(r),u=(n(20),n(6)),i=n(3),l=n(4),s=n.n(l),d="/api/notes",j={getAll:function(){return s.a.get(d).then((function(t){return t.data}))},create:function(t){return s.a.post(d,t).then((function(t){return t.data}))},deleteNote:function(t){return s.a.delete("".concat(d,"/").concat(t)).then((function(t){return t.data}))},update:function(t,e){var n=s.a.put("".concat(d,"/").concat(e),t);return console.log("id:",e,"obj:",t),n.then((function(t){return t.data}))}},b=n(0),h=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(b.jsxs)("li",{style:{color:e.important?"red":"grey"},children:[e.content," - written on ",e.date,Object(b.jsx)("button",{onClick:function(){return n(e.id)},children:c})]})},f=function(t){var e=t.addNote,n=t.newNote,c=t.isImportant,o=t.handleChange;return Object(b.jsxs)("form",{onSubmit:e,children:[Object(b.jsxs)("label",{children:["New Note:",Object(b.jsx)("input",{type:"text",name:"newNote",value:n,onChange:o})]}),Object(b.jsxs)("label",{children:["Important",Object(b.jsx)("input",{type:"checkbox",name:"important",value:c,onChange:o})]}),Object(b.jsx)("button",{children:"Add"})]})},p=function(t){var e=t.message,n=e.includes("error")?{border:"3px solid hsla(9, 87%, 47%, 1)",background:"hsla(9, 87%, 47%, 0.6)",color:"red"}:{border:"3px solid hsla(110, 66%, 47%, 1)",background:"hsla(100, 66%, 47%, 0.6)",color:"green"};return Object(b.jsx)("div",{style:n,children:Object(b.jsx)("p",{children:e})})},O=function(t){var e=t.showAll,n=t.toggleShowAll,c=e?"Show Important":"Show All";return Object(b.jsx)("button",{onClick:n,children:c})};var m=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),l=a[0],s=a[1],d=Object(c.useState)(!1),m=Object(i.a)(d,2),g=m[0],x=m[1],v=Object(c.useState)(!0),w=Object(i.a)(v,2),k=w[0],S=w[1],N=Object(c.useState)(null),y=Object(i.a)(N,2),A=y[0],I=y[1];Object(c.useEffect)((function(){j.getAll().then((function(t){return o(t)}))}),[]);var C=function(t){var e=n.find((function(e){return e.id===t})),c=Object(u.a)(Object(u.a)({},e),{},{important:!e.important});j.update(c,t).then((function(e){o(n.map((function(n){return n.id!==t?n:e}))),I("Note Updated"),setTimeout((function(){return I(null)}),5e3)})).catch((function(t){I("The following error occured: ".concat(t)),setTimeout((function(){return I(null)}),5e3)}))},T=k?n:n.filter((function(t){return t.important}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Bestest note app you can find"}),A&&Object(b.jsx)(p,{message:A}),Object(b.jsx)(O,{toggleShowAll:function(){S(!k)},showAll:k}),Object(b.jsx)("ul",{children:T.map((function(t){return Object(b.jsx)(h,{note:t,toggleImportance:C},t.id)}))}),Object(b.jsx)(f,{newNote:l,isImportant:g,handleChange:function(t){var e=t.target,n=e.value,c=e.type,o=e.checked;"checkbox"===c?x(o):s(n)},addNote:function(t){t.preventDefault();var e={content:l,date:new Date,important:g};j.create(e).then((function(t){o(n.concat(t)),I("Note added"),setTimeout((function(){return I(null)}),5e3),s(""),x(!1)})).catch((function(t){I("The following error occured: ".concat(t)),setTimeout((function(){return I(null)}),5e3)}))}})]})};a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8496b6be.chunk.js.map