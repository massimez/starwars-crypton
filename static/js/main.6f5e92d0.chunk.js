(this.webpackJsonpcrypton=this.webpackJsonpcrypton||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},60:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(30),r=c.n(s),i=(c(38),c(39),c(12)),j=c(2),l=c(18),o=c.n(l),d=c(31),b=c(8),h=c(13),O=c(33);function u(){var e=localStorage.getItem("fav");return e?JSON.parse(e):[]}var x=c(15),f=c.n(x),m=c(0),p=function(e){var t=Object(n.useState)(u()),c=Object(b.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(),i=Object(b.a)(r,2),j=i[0],l=i[1],o=a.find((function(t,c){return t.name===e.name}));return f()(e.planet.slice(0,4)+"s"+e.planet.slice(4)).then((function(e){return l(e.data.name)})),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{src:"https://starwars-visualguide.com/assets/img/characters/".concat(e.id>=17?e.id+1:e.id,".jpg"),alt:"Avatar"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:Object(m.jsx)("b",{children:e.name})}),Object(m.jsx)("p",{children:j}),o?Object(m.jsx)("div",{children:Object(m.jsx)(h.a,{className:"card__icon--red",size:"40px"})}):Object(m.jsx)("div",{onClick:function(){!function(e){var t=u()?u():[];localStorage.setItem("fav",JSON.stringify([e].concat(Object(O.a)(t))))}(e.char),s(u())},children:Object(m.jsx)(h.a,{className:"card__icon--black",size:"40px"})})]})]})})},v=function(e){for(var t=e.charactersPerPage,c=e.totalCharacters,n=e.setCurrentPage,a=e.currentPage,s=[],r=1;r<=c/t+1;r++)s.push(r);return Object(m.jsx)("div",{className:"flex flex--center",children:Object(m.jsx)("div",{className:"pagination center",children:s.map((function(e){return Object(m.jsx)("button",{className:a===e?"active":null,onClick:function(){n(e)},children:e},e)}))})})},g=function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),r=Object(b.a)(s,2),i=r[0],j=r[1],l=Object(n.useState)(!1),h=Object(b.a)(l,2),O=h[0],u=h[1],x=Object(n.useState)(1),g=Object(b.a)(x,2),N=g[0],S=g[1],w=Object(n.useState)([]),C=Object(b.a)(w,2),y=C[0],k=C[1];Object(n.useEffect)((function(){u(!0);var e=[];function t(e){return c.apply(this,arguments)}function c(){return(c=Object(d.a)(o.a.mark((function c(n){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,f()(n).then((function(c){j(c.data.count),null!==c.data.next?(e=e.concat(c.data.results),t(c.data.next)):((e=e.concat(c.data.results)).forEach((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.id=t+1})),a(e),k(e),u(!1))})).catch((function(e){return console.log(e)}));case 2:case"end":return c.stop()}}),c)})))).apply(this,arguments)}t("https://swapi.dev/api/people/")}),[]);var P=function(e){var t,n=e.target.value.toLowerCase();t=c.filter((function(e){return e.name.toLowerCase().indexOf(n)>-1||e.gender.toLowerCase()===n})),S(1),k(t),j(t.length)};if(O)return Object(m.jsx)("div",{className:"section",children:Object(m.jsx)("div",{className:"lds-dual-ring",children:"Loading..."})});var F=10*N,J=F-10,_=y.slice(J,F);return Object(m.jsxs)("div",{className:"section",children:[Object(m.jsxs)("div",{className:"flex flex--space",children:[Object(m.jsx)("input",{placeholder:"Search by name",type:"text",className:"search",onChange:function(e){return P(e)}}),Object(m.jsxs)("select",{name:"genre",onChange:function(e){P(e)},children:[Object(m.jsx)("option",{value:"",children:"--Choose genre--"}),Object(m.jsx)("option",{value:"male",children:"Male"}),Object(m.jsx)("option",{value:"female",children:"Female"}),Object(m.jsx)("option",{value:"n/a",children:"Droid"})]})]}),Object(m.jsx)("div",{className:"grid-container mb-16 mt-16",children:_&&_.map((function(e,t){return Object(m.jsx)(p,{char:e,id:e.id,name:e.name,planet:e.homeworld},t)}))}),Object(m.jsx)(v,{totalCharacters:i,charactersPerPage:10,currentPage:N,setCurrentPage:S})]})},N=(c(60),function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"flex flex--space mt-8 mb-16",children:[Object(m.jsx)("div",{}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("img",{src:"https://fontmeme.com/permalink/210602/5a25055fcd1d6b8db47107bfac1f58a5.png",alt:"Starwars"})}),Object(m.jsxs)(i.b,{to:"/fav",children:[Object(m.jsx)("div",{children:Object(m.jsx)(h.a,{className:"card__icon--red",size:"40px"})}),"My favorites"]})]}),Object(m.jsx)("div",{className:"input-size"})]})}),S=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(N,{}),Object(m.jsx)(g,{})]})},w=function(){var e=Object(n.useState)(u()),t=Object(b.a)(e,2),c=t[0],a=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:"section",children:[Object(m.jsx)("center",{children:Object(m.jsx)("h2",{children:"My favorites"})}),Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{})]})}),Object(m.jsx)("tbody",{children:c.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("img",{height:"200px",width:"200px",src:"https://starwars-visualguide.com/assets/img/characters/".concat(e.id,".jpg"),alt:"".concat(e.name)})}),Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{className:"btn",onClick:function(){var e=JSON.parse(localStorage.getItem("fav"));e.splice(t,1),a(e),localStorage.setItem("fav",JSON.stringify(e))},children:"Remove from favorites"})})]},t)}))})]})]})]})};var C=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(N,{}),Object(m.jsx)("div",{className:"section",children:Object(m.jsx)("h1",{children:"Error 404 please recheck the url"})})]})};var y=function(){return Object(m.jsx)(i.a,{children:Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.b,{exact:!0,path:"/",children:Object(m.jsx)(S,{})}),Object(m.jsx)(j.b,{exact:!0,path:"/fav",children:Object(m.jsx)(w,{})}),Object(m.jsx)(j.b,{exact:!0,path:"/404",component:C}),Object(m.jsx)(j.a,{to:"/404"})]})})};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.6f5e92d0.chunk.js.map