(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{12:function(e,t,n){e.exports={wrapper:"Error404_wrapper__3v6it",inner:"Error404_inner__2CWBI",number:"Error404_number__3zgs2",page:"Error404_page__19vFZ",cat:"Error404_cat__1KnCf"}},15:function(e,t,n){e.exports={input:"SuperInputText_input__1DMT3",superInput:"SuperInputText_superInput__1Wcln",errorInput:"SuperInputText_errorInput__1pyN5",error:"SuperInputText_error__lB14a"}},17:function(e,t,n){e.exports={someClass:"Greeting_someClass__3pY4J",error:"Greeting_error__2L1Ta"}},18:function(e,t,n){e.exports={default:"SuperButton_default__1J8fb",red:"SuperButton_red__Ayu-_",button:"SuperButton_button__3H6MB",blink:"SuperButton_blink__22DNA"}},21:function(e,t,n){e.exports={blue:"HW4_blue__3KmxB",column:"HW4_column__3Mejl",testSpanError:"HW4_testSpanError__43kmP"}},22:function(e,t,n){e.exports={label:"SuperCheckbox_label__1JFHJ",checkbox:"SuperCheckbox_checkbox__Aa9Gm",spanClassName:"SuperCheckbox_spanClassName__AdGvI"}},29:function(e,t,n){e.exports={App:"App_App__2dZ8_"}},38:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(28),s=n.n(c),i=(n(38),n(29)),o=n.n(i),j=n(7),l=n(8),u=n.n(l),b=n(2),d=n(9),h=n.n(d),x=n(0);var O=function(e){return Object(x.jsxs)("div",{className:h.a.container,children:[Object(x.jsx)("div",{className:h.a.imageContainer,children:Object(x.jsx)("img",{src:e.avatar,alt:""})}),Object(x.jsxs)("div",{className:h.a.textContainer,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:h.a.name,children:e.name}),Object(x.jsx)("p",{className:h.a.message,children:e.message})]}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{className:h.a.time,children:e.time})})]})]})},m="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN65A44jiNLG-uaNMKeid1T7CXgZZRxiPDfw&usqp=CAU",_="Andrey Savchenkov",f="\u043f\u043e\u043b\u0435\u0442\u0435\u043b\u0438! \u0431\u043e\u043c\u0431\u0438\u043c!",p="22:00";var v=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),"homeworks 1",Object(x.jsx)(O,{avatar:m,name:_,message:f,time:p}),Object(x.jsx)("hr",{}),Object(x.jsx)("hr",{})]})},N=n(5),C=n(6),k=n.n(C);var g=function(e){return Object(x.jsxs)("div",{className:k.a.affair,children:[Object(x.jsx)("div",{className:k.a.affairName,children:e.affair.name}),Object(x.jsx)("div",{className:k.a.affairPriority,children:e.affair.priority}),Object(x.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var w=function(e){var t=e.data.map((function(t){return Object(x.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(x.jsxs)("div",{children:[t,Object(x.jsx)("button",{className:k.a.button,onClick:function(){e.setFilter("all")},children:"All"}),Object(x.jsx)("button",{className:k.a.button,onClick:function(){e.setFilter("high")},children:"High"}),Object(x.jsx)("button",{className:k.a.button,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(x.jsx)("button",{className:k.a.button,onClick:function(){e.setFilter("low")},children:"Low"})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(r.useState)(y),t=Object(N.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(N.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(x.jsxs)("div",{className:k.a.wrapper,children:["homeworks 2",Object(x.jsx)(w,{data:j,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},A=n(33),E=n(17),T=n.n(E),I=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=e.onEnter;T.a.error?T.a.errorInput:T.a.input;return Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{value:t,onChange:n,onKeyDown:s}),Object(x.jsx)("span",{children:a}),Object(x.jsx)("button",{onClick:r,children:"add"}),Object(x.jsx)("span",{children:c})]})},P=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(N.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),j=Object(N.a)(o,2),l=j[0],u=j[1],b=function(){n(s),alert("Hello ".concat(s,"!")),i("")},d=t.length;return Object(x.jsx)(I,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),l&&u("")):(s&&i(""),u("name is require!"))},addUser:b,error:l,totalUsers:d,onEnter:function(e){"Enter"===e.key&&s&&b()}})},B=n(30);var J=function(){var e=Object(r.useState)([]),t=Object(N.a)(e,2),n=t[0],a=t[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),"homeworks 3",Object(x.jsx)(P,{users:n,addUserCallback:function(e){var t={_id:Object(B.v1)(),name:e};a([].concat(Object(A.a)(n),[t]))}}),Object(x.jsx)("hr",{}),Object(x.jsx)("hr",{})]})},M=n(10),H=n(11),F=n(15),U=n.n(F),K=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(H.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(U.a.error," ").concat(i||""),l="".concat(U.a.input," ").concat(c?U.a.errorInput:U.a.superInput," ").concat(s);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},o)),c&&Object(x.jsx)("span",{className:j,children:c})]})},W=n(21),G=n.n(W),X=n(18),Z=n.n(X),q=function(e){var t=e.red,n=e.className,r=Object(H.a)(e,["red","className"]),a="".concat(Z.a.button," ").concat(t?Z.a.red:Z.a.default," ").concat(n);return Object(x.jsx)("button",Object(M.a)({className:a},r))},D=n(22),L=n.n(D),Q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(L.a.checkbox," ").concat(r||"");return Object(x.jsxs)("label",{children:[Object(x.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(x.jsx)("span",{className:L.a.spanClassName,children:a})]})};var R=function(){var e=Object(r.useState)(""),t=Object(N.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(N.a)(i,2),j=o[0],l=o[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),"homeworks 4",Object(x.jsxs)("div",{className:G.a.column,children:[Object(x.jsx)(K,{value:n,onChangeText:a,onEnter:s,error:c}),Object(x.jsx)(K,{className:G.a.blue}),Object(x.jsx)(q,{children:"default"}),Object(x.jsx)(q,{red:!0,onClick:s,children:"delete "}),Object(x.jsx)(q,{disabled:!0,children:"disabled"}),Object(x.jsx)(Q,{checked:j,onChangeChecked:l,children:"some text "}),Object(x.jsx)(Q,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(x.jsx)("hr",{}),Object(x.jsx)("hr",{})]})};var z=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(S,{}),Object(x.jsx)(J,{}),Object(x.jsx)(R,{})]})},Y=n(12),$=n.n(Y);var V=function(){return Object(x.jsx)("div",{className:$.a.wrapper,children:Object(x.jsxs)("div",{className:$.a.inner,children:[Object(x.jsx)("div",{className:$.a.number,children:"404"}),Object(x.jsx)("div",{className:$.a.page,children:"Page not found!"}),Object(x.jsx)("div",{className:$.a.cat,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})})},ee=function(){return Object(x.jsx)("div",{children:"JuniorPlus"})},te=function(){return Object(x.jsx)("div",{children:"Junior"})},ne="/pre-junior",re="/junior",ae="/junior-plus";var ce=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(j.a,{children:Object(x.jsxs)(b.d,{children:[Object(x.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(x.jsx)(b.a,{to:ne})}}),Object(x.jsx)(b.b,{path:ne,render:function(){return Object(x.jsx)(z,{})}}),Object(x.jsx)(b.b,{path:re,render:function(){return Object(x.jsx)(te,{})}}),Object(x.jsx)(b.b,{path:ae,render:function(){return Object(x.jsx)(ee,{})}}),Object(x.jsx)(b.b,{render:function(){return Object(x.jsx)(V,{})}})]})})})};var se=function(){return Object(x.jsx)("div",{className:u.a.header,children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(j.b,{className:u.a.link,activeClassName:u.a.active,to:ne,children:"PreJunior"}),Object(x.jsx)(j.b,{className:u.a.link,activeClassName:u.a.active,to:re,children:"Junior"}),Object(x.jsx)(j.b,{className:u.a.link,activeClassName:u.a.active,to:ae,children:"JuniorPlus"})]})})};var ie=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(se,{}),Object(x.jsx)(ce,{})]})})};var oe=function(){return Object(x.jsxs)("div",{className:o.a.App,children:[Object(x.jsx)("div",{children:"react homeworks:"}),Object(x.jsx)(ie,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(oe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports={wrapper:"Affairs_wrapper__2Xwwo",affair:"Affairs_affair__1PeoB",affairName:"Affairs_affairName__3XkSk",affairPriority:"Affairs_affairPriority__w5X2d",button:"Affairs_button__ZmQvu"}},8:function(e,t,n){e.exports={header:"Header_header__1Th1S",link:"Header_link__3ktqu",active:"Header_active__2g3Pu"}},9:function(e,t,n){e.exports={container:"Message_container__3QcLs",textContainer:"Message_textContainer__3CX9O",name:"Message_name__3epgh",message:"Message_message__1Cc7r",time:"Message_time__3iUEO"}}},[[47,1,2]]]);
//# sourceMappingURL=main.8478d793.chunk.js.map