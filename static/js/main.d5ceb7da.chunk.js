(this["webpackJsonpfullstack-app"]=this["webpackJsonpfullstack-app"]||[]).push([[0],[,,,,,,,,,function(t,c,e){},function(t,c,e){},function(t,c,e){},,function(t,c,e){"use strict";e.r(c);var a=e(1),n=e.n(a),s=e(4),i=e.n(s),r=(e(9),e(10),e(2)),j=(e(11),e(0)),o=function(t){var c=t.url,e=t.data;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{src:c,alt:"img"}),Object(j.jsx)("h1",{children:"Random advice"}),Object(j.jsx)("p",{children:e})]})},l=function(){var t=Object(a.useState)(!1),c=Object(r.a)(t,2),e=c[0],n=c[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),l=i[0],d=i[1],u=Object(a.useState)(""),b=Object(r.a)(u,2),h=b[0],p=b[1];return fetch("https://api.adviceslip.com/advice").then((function(t){return t.json()})).then((function(t){return p(t.slip.advice)})),Object(a.useEffect)((function(){!function(){var t=Math.floor(9999*Math.random());d("https://avatars.dicebear.com/api/male/".concat(t,".svg?b=%23000000&mood[]=happy"))}()}),[e]),console.log(l),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"card ".concat(e?"flip":""),onClick:function(){return n(!e)},children:[Object(j.jsx)("div",{className:"front",children:Object(j.jsx)(o,{url:l,data:h})}),Object(j.jsx)("div",{className:"back",children:Object(j.jsx)(o,{url:l,data:h})})]})})};var d=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(l,{})})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.d5ceb7da.chunk.js.map