(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(8),c=n.n(r),i=n(2),u=n(10),s=n(0),o=function(t){var e=t.setCategories,n=Object(a.useState)("Hola Mundo"),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(u.a)(t))})),o(""))},children:Object(s.jsx)("input",{type:"text",value:c,onChange:function(t){o(t.target.value)}})})},j=n(7),d=n(6),l=n.n(d),b=n(9),p=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,a,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"OaIouHJxZGv3uYo6uqmeL1IS379zIC73",n="https://api.giphy.com/v1/gifs/search?q=".concat(e,"&api_key=").concat("OaIouHJxZGv3uYo6uqmeL1IS379zIC73","&limit=10"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:return r=t.sent,c=r.data,i=c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.title,n=t.url;return Object(s.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(s.jsx)("img",{src:n,alt:e}),Object(s.jsx)("p",{children:e})]})},O=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){c({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("h3",{children:[" ",e," "]}),c&&"Cargando.....",Object(s.jsx)("div",{className:"card-grid",children:Object(s.jsx)("ol",{children:r.map((function(t){return Object(a.createElement)(f,Object(j.a)(Object(j.a)({},t),{},{key:t.id}))}))})})]})};var h=function(){var t=Object(a.useState)(["Dragon ball"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(o,{setCategories:r}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(t){return Object(s.jsx)(O,{category:t},t)}))})]})};n(17);c.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.206aebb3.chunk.js.map