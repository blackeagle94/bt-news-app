(this.webpackJsonpbt_newsapp=this.webpackJsonpbt_newsapp||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(5),a=c.n(r),i=(c(11),c(4)),o=c.n(i),l=c(6),u=c(2),j=(c(13),c(0));function h(){return Object(j.jsx)("div",{className:"fixed-footer",children:"\xa9 All rigths reserved | Mursel AYSAN News App"})}var b=function(e){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("a",{href:"/",children:Object(j.jsx)("img",{src:"https://img01.bt.co.uk/s/assets/040221/images/logo/logo-2018.svg",alt:"logo"})})}),Object(j.jsx)("div",{className:"search",children:Object(j.jsxs)("form",{onSubmit:e.getSearch,children:[Object(j.jsx)("input",{className:"search-input",type:"text",value:e.search,onChange:e.updateSearch,placeholder:"Enter news title..."}),Object(j.jsx)("button",{className:"submit-btn",type:"submit",children:"Search"})]})})]})};c(15);function d(e){var t=e.title,c=e.author,n=e.content,s=e.url,r=e.urlToImage;return Object(j.jsxs)("div",{className:"news",children:[Object(j.jsx)("img",{className:"news-image",src:r,alt:""}),Object(j.jsx)("h1",{className:"news-title",children:t}),Object(j.jsx)("p",{children:n.substring(0,150)+"..."}),Object(j.jsxs)("p",{children:["Author : ",Object(j.jsx)("span",{style:{color:"#333333"},children:c})]}),Object(j.jsx)("button",{className:"read-btn",children:Object(j.jsx)("a",{href:s,children:"Read More"})})]})}var p=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(u.a)(r,2),i=a[0],p=a[1],f=Object(n.useState)("fun"),O=Object(u.a)(f,2),m=O[0],x=O[1];Object(n.useEffect)((function(){g()}),[m]);var g=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://newsapi.org/v2/everything?q=".concat(m,"&from=2021-02-24&sortBy=popularity&pageSize=10&apiKey=").concat("abc8d87d7c574af69335c90025f2638a"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c.articles),console.log(c.articles);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{getSearch:function(e){if(e.preventDefault(),""==i.trim())return!1;x(i),p("")},updateSearch:function(e){p(e.target.value),console.log(i)},search:i}),Object(j.jsx)("div",{className:"h1",children:Object(j.jsx)("h1",{children:"BT React Code Test - by Mursel AYSAN - 25/02/21"})}),Object(j.jsx)("div",{className:"row",children:c&&c.map((function(e,t){return Object(j.jsx)(d,{title:e.title,author:e.author,content:e.content,urlToImage:e.urlToImage,url:e.url},t)}))}),Object(j.jsx)(h,{})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.52e1dbf5.chunk.js.map