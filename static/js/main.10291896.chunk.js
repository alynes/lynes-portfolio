(window["webpackJsonplynes-portfolio"]=window["webpackJsonplynes-portfolio"]||[]).push([[0],{56:function(e,t,a){e.exports=a(71)},61:function(e,t,a){},62:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),i=(a(61),a(25)),c=a(22),s=(a(62),a(11)),m=a(16),u=a(99),p=a(103),d=a(100),f=a(34),h=a(105),g=a(47),E=a.n(g),v=a(104),b=a(101),y=a(102),w=a(45),j=a.n(w),x=a(46),O=a.n(x),k=a(95),T=a(98),A=a(97);function I(e){var t=e.text,a=e.url,n=e.svg;return r.a.createElement(k.a,{button:!0,key:"Trade",component:i.b,to:a},r.a.createElement(A.a,null,n),r.a.createElement(T.a,{primary:t}))}function N(){var e=function(e){var t=Object(n.useState)(e),a=Object(s.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){var e=setInterval((function(){l((new Date).toLocaleTimeString())}),1e3);return function(){clearInterval(e)}})),r}((new Date).toLocaleTimeString());return r.a.createElement("div",{style:{width:"100%",textAlign:"center"}},r.a.createElement("h3",{style:{width:"100%"}},e))}var S=Object(u.a)((function(e){return{img:{width:"100%",flex:1},clockContainer:{display:"flex",width:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center"}}}));function C(){var e=S(),t=r.a.createElement(j.a,null),a=r.a.createElement(O.a,null);return r.a.createElement("div",{id:"fuckin drawer"},r.a.createElement(d.a,null,r.a.createElement("div",{className:e.clockContainer},r.a.createElement("img",{className:e.img,src:"/lynes-portfolio/tourists.gif",alt:"tourists"}),r.a.createElement(N,null))),r.a.createElement(b.a,null),r.a.createElement(y.a,null,r.a.createElement(I,{text:"Home",url:"",svg:t}),r.a.createElement(I,{text:"Applications",url:"/applications/",svg:a})))}function D(e){var t=e.threshold,a=e.x,l=void 0===a?null:a,o=e.setX,i=void 0===o?null:o,c=e.y,m=void 0===c?null:c,u=e.setY,p=void 0===u?null:u,d=e.setDirection,f=void 0===d?null:d,h=e.revX,g=void 0===h?null:h,E=e.revY,v=void 0===E?null:E,b=e.children,y=Object(n.useState)(0),w=Object(s.a)(y,2),j=w[0],x=w[1],O=Object(n.useState)(0),k=Object(s.a)(O,2),T=k[0],A=k[1],I=Object(n.useState)(0),N=Object(s.a)(I,2),S=N[0],C=N[1],D=Object(n.useState)(0),R=Object(s.a)(D,2),M=R[0],B=R[1],W=Object(n.useState)(0),L=Object(s.a)(W,2),X=L[0],Y=L[1];return Object(n.useEffect)((function(){var e=M-T,a=X-S;null!==l&&Math.abs(e)>=t&&(e>0?(i(null===g?l+1:l-1),null!==f&&f("right"),x(!1),B(T)):(i(null===g?l-1:l+1),null!==f&&f("left"),x(!1),B(T))),null!==m&&Math.abs(a)>=t&&(a>0?(console.log("Y - 1"),p(null===v?m-1:m+1),null!==f&&f("down"),x(!1)):(console.log("Y + 1"),p(null===v?m+1:m-1),null!==f&&f("up"),x(!1)))}),[M,X]),r.a.createElement(n.Fragment,null,r.a.createElement("div",{style:{display:"inline-block"},onTouchStart:function(e){e.preventDefault(),x(!0),A(e.touches[0].pageX),C(e.touches[0].pageY)},onTouchMove:function(e){j&&(B(e.touches[0].pageX),Y(e.touches[0].pageY))},onTouchEnd:function(){x(!1)},onMouseDown:function(e){e.preventDefault(),x(!0),A(e.pageX),C(e.pageY)},onMouseMove:function(e){!0===j&&(B(e.pageX),Y(e.pageY))},onMouseUp:function(){x(!1)},onMouseLeave:function(){x(!1)}},b))}var R=Object(u.a)((function(e){return{drawer:Object(m.a)({},e.breakpoints.up("lg"),{width:270,flexShrink:0}),drawerPaper:{width:270}}}));function M(e){var t=e.children,a=R(),l=Object(n.useState)(0),o=Object(s.a)(l,2),i=o[0],c=o[1],m=Object(n.useState)(!1),u=Object(s.a)(m,2),g=u[0],b=u[1];function y(){console.log("OPEN drawer"),b(!g)}Object(n.useEffect)((function(){i<0?(b(!1),c(0)):c(0)}),[i]);var w=r.a.createElement(h.a,{variant:"temporary",anchor:"left",open:g,onClose:y,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement(C,null));return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(p.a,{position:"fixed",style:{display:"block"}},r.a.createElement(d.a,null,r.a.createElement(v.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:y},r.a.createElement(E.a,null)),r.a.createElement(f.a,{variant:"h6",noWrap:!0}),r.a.createElement("div",{style:{flex:1}}),r.a.createElement("img",{style:{height:"70px",margin:"-10px"},src:"/lynes-portfolio/bipolar record.gif",alt:"create response"}))),r.a.createElement("nav",{className:a.drawer,"aria-label":"menu items"},r.a.createElement(D,{x:i,setX:c,threshold:30},w))),r.a.createElement("div",null,r.a.createElement(d.a,null),t))}var B=a(108),W=a(106);a(70);function L(e){var t,a=e.children,l=e.initialIndex,o=void 0===l?0:l,i=e.autoInterval,c=void 0===i?0:i,m=e.autoDirection,u=void 0===m?"left":m,p=Object(n.useState)(o),d=Object(s.a)(p,2),f=d[0],h=d[1],g=Object(n.useState)("none"),E=Object(s.a)(g,2),v=E[0],b=E[1],y=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){if(e>0){var t=setInterval((function(){l(!0)}),1e3*e);return function(){clearInterval(t)}}})),[r,l]}(c),w=Object(s.a)(y,2),j=w[0],x=w[1];switch(Object(n.useEffect)((function(){!0===j&&("left"===u?(h(f-1),b("left")):(h(f+1),b("right")),x(!1))}),[j]),v){case"right":t="slideRight";break;case"left":t="slideLeft";break;default:t="slide"}return r.a.createElement(D,{threshold:30,x:f,setX:h,setDirection:b},r.a.createElement(B.a,{childFactory:function(e){return r.a.cloneElement(e,{classNames:t,timeout:600})},component:null},r.a.createElement(W.a,{key:f,timeout:600,classNames:t},r.a.createElement("div",{className:"slide",style:{position:"absolute",top:0,left:0,right:0,bottom:0,padding:"auto"}},a[Math.abs(f)%a.length]))))}var X=Object(u.a)((function(e){return{carouselContainer:{position:"relative",display:"block",width:"90%",height:"50vh",overflow:"hidden",margin:"auto",backgroundColor:"none"}}}));function Y(){var e=X();return r.a.createElement("div",{className:"App-page"},r.a.createElement(b.a,null),r.a.createElement("div",{className:e.carouselContainer},r.a.createElement(L,{autoInterval:5},r.a.createElement("img",{className:"carousel-img",src:"/lynes-portfolio/avesa animated.gif",alt:"avesa"}),r.a.createElement("img",{className:"carousel-img",src:"/lynes-portfolio/bp-chronicles-play.gif",alt:"record"}),r.a.createElement("img",{className:"carousel-img",src:"/lynes-portfolio/tourists.gif",alt:"create response"}))),r.a.createElement("p",null,"This is the portfolio page for Austin Lynes. A man of many talents, but the most notable are his achievements in software development."))}Object(u.a)((function(e){var t;return{img:{width:"100%",flex:1},grid:(t={display:"grid",justifyItems:"center",alignItems:"start",gridGap:"30px 30px",maxWidth:"1200px"},Object(m.a)(t,e.breakpoints.up("xs"),{gridTemplateColumns:"1fr",gridTemplateRows:"1fr 1fr 1fr",margin:"3%"}),Object(m.a)(t,e.breakpoints.up("sm"),{gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",margin:"3%",marginTop:"3vh"}),Object(m.a)(t,e.breakpoints.up("md"),{gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr",margin:"auto",marginTop:"3vh"}),t)}}));function P(){return r.a.createElement("div",{className:"App-page"},r.a.createElement("h1",null,"TradeBoy"),r.a.createElement("p",null,'It was a friend of mine that came up with the idea for this application. He is a cryptocurrency day-trader, and was feeling fatigued by the constant need to be at his computer, ready to make a trade. He is a self-described "scalper", and uses large percentages of his funds to make profits off of very small price differences. The issue with that is that most exchanges, of course, only let you spend the money that you have. They don\'t have the ability to let you spend what you WILL have in the future when your open trades close. So my solution to this was to create an application that allows you to make "sequential" trades.'),r.a.createElement("div",{className:"App-img-container"},r.a.createElement("img",{className:"App-img",src:"/lynes-portfolio/tradeboy-trade.gif",alt:"trading"})),r.a.createElement("p",null,"For this, I used the Binance REST API to make queries on the pricing data as well as to make trades directly and automatically on this platform."),r.a.createElement("p",null,"Now this friend of mine uses it every day. I set up an AWS EC2 instance to host the app."))}var q=[{name:"TradeBoy",description:"Experimental cryptocurrency trading",id:"trade-boy",src:"/tradeboy-trade.gif",alt:"Experimental crytocurrency trading app"},{name:"The Bipolar Chronicles",description:"Interactive musical experience",id:"bp-chronicles",src:"/bp-chronicles-build.gif",alt:"Interactive musical experience application"},{name:"SocialAutomator",description:"Social media automation",id:"social-automator",src:"/social-auto-create-response.gif",alt:"Social media automation application"}],F=Object(u.a)((function(e){var t;return{grid:(t={display:"grid",justifyItems:"center",alignItems:"start",gridGap:"30px 30px",maxWidth:"1200px"},Object(m.a)(t,e.breakpoints.up("xs"),{gridTemplateColumns:"1fr",gridTemplateRows:"1fr 1fr 1fr",margin:"3%"}),Object(m.a)(t,e.breakpoints.up("sm"),{gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",margin:"3%",marginTop:"3vh"}),Object(m.a)(t,e.breakpoints.up("md"),{gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr",margin:"auto",marginTop:"3vh"}),t)}}));function H(){var e=F();return r.a.createElement("div",null,r.a.createElement("div",{className:e.grid},q.map((function(e){return r.a.createElement(i.b,{key:e.id,to:"/applications/".concat(e.id),style:{textDecoration:"none"}},r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"},className:"App-link"},e.name),r.a.createElement("p",{style:{textAlign:"center"},className:"App-link"},e.description),r.a.createElement("img",{className:"App-img",src:"/lynes-portfolio"+e.src,alt:e.alt})))}))),r.a.createElement(b.a,null))}function G(){return r.a.createElement("div",{className:"App-page"},r.a.createElement("h1",null,"Social Automator"),r.a.createElement("p",null,"This project began with a simple goal. CREATE SOCIAL MEDIA BOTS. Turns out, that is not so effective on it's own. With time and many Python scripting experiments it has evolved into a social automation platform aimed at decreasing the necessary time and effort needed to grow and maintain a social presence online."),r.a.createElement("div",{className:"App-img-container"},r.a.createElement("img",{className:"App-img",src:"/lynes-portfolio/social-auto-create-response.gif",alt:"trading"})),r.a.createElement("p",null,'What you are seeing here is a form to create "responses". If the bot detects certain patterns in text, it will formulate a response based on the given text data. Built in is validation. If you are missing a quotation, bracket, or comma the app will let you know; and once the validation is satisfied, you may test your sentence generation.'),r.a.createElement("p",null,"Responses are used in tasks. Such as responding to comments on one's own or another's Instagram page and responding to reply's made on comments while seeking new followers or responding to a page's bio. Those tasks are grouped into a weekly schedule, and"))}function J(){return r.a.createElement("div",{className:"App-page"},r.a.createElement("h1",null,"The Bipolar Chronicles"),r.a.createElement("p",null,'In the age of short attention spans, the wonder for content creators of all kinds is "how do we get people to pay attention?" I answered this question for a small music company based in Dallas by creating a world in which listeners can explore while they enjoy the music as well. Tap on different objects and characters to gain points and reveal the plot.'),r.a.createElement("div",{className:"App-img-container"},r.a.createElement("img",{className:"App-img",src:"/lynes-portfolio/bp-chronicles-play.gif",alt:"trading"})),r.a.createElement("p",null,"I created the front end using React, with Redux and CSSTransitions, using Django Rest Framework in the backend."),r.a.createElement("p",null,"I created a simple level builder that they can use to customise these worlds from a graphical standpoint."),r.a.createElement("div",{className:"App-img-container"},r.a.createElement("img",{className:"App-img",src:"/lynes-portfolio/bp-chronicles-build.gif",alt:"trading"})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(c.c,null,r.a.createElement(M,null,r.a.createElement(c.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(Y,e)}}),r.a.createElement(c.a,{exact:!0,path:"/applications",render:function(e){return r.a.createElement(H,e)}}),r.a.createElement(c.a,{exact:!0,path:"/applications/trade-boy",component:P}),r.a.createElement(c.a,{exact:!0,path:"/applications/social-automator",component:G}),r.a.createElement(c.a,{exact:!0,path:"/applications/bp-chronicles",component:J})))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.10291896.chunk.js.map