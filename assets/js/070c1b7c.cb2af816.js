"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[8444],{63406:(e,t,l)=>{l.d(t,{q:()=>n,v:()=>a});const n=(e,t,l)=>{let n=`${e}`;return t&&(n+=`__${t}`),l&&(n+=`--${l}`),n};function a(e){const t=document.documentElement;e&&e(t.dataset.theme);const l=new MutationObserver((l=>{l.forEach((l=>{e&&e(t.dataset.theme)}))}));return l.observe(t,{attributes:!0}),l.destroy=()=>{l.disconnect()},l}},16061:(e,t,l)=>{l.r(t),l.d(t,{default:()=>T});var n=l(67294),a=l(80584),c=l(91262),r=l(45428),s=l(16550),m=l(94184),o=l.n(m),i=l(1322),u=l(2830),E=l(69980),d=l(10620),b=l(29158),p=l(42952);function h(e,t,l,n,a){return{key:t,icon:l,children:n,label:e,type:a}}const k=[{label:"\u6211\u7684\u5de5\u5177",key:"tools",icon:n.createElement(u.Z,null),children:[{label:"Option 1",key:"demo",icon:null}]},{label:"HTML\u4e0eCSS",key:"html-css",icon:n.createElement(E.Z,null),children:[{label:"first-child\u4e0efirst-of-type",key:"first-child",icon:null}]},{label:"Javascript",key:"js",icon:n.createElement(d.Z,null),children:[{label:"Option 9",key:"9",icon:null}]},{label:"React Hooks",key:"react-hooks",icon:n.createElement(b.Z,null),children:[{label:"useEffect\u4e0euseLayoutEffect",key:"useEffect",icon:null},{label:"useCallback",key:"useCallback",icon:null},{label:"useMemo",key:"useMemo",icon:null}]},{label:"DevTools",key:"devtools",icon:n.createElement(p.Z,null),children:[{label:"Element\u9762\u677f",key:"element",icon:null}]}];var f=l(63406);const v=e=>{const{history:t}=e,l=t.location.pathname.split("/"),a=l[l.length-1],c=l[1],[r,s]=(0,n.useState)();let m=null;const o=k.map((e=>{const{label:t,key:l,icon:n,children:a}=e;return h(t,l,n,a.map((e=>{const{label:t,key:l,icon:n}=e;return h(t,l,n)})))}));(0,n.useEffect)((()=>{m=(0,f.v)((e=>{s(e)}))}),[]),(0,n.useEffect)((()=>()=>{m?.destroy()}),[]);return n.createElement("div",{className:(0,f.q)("components-sidebar",u,E)},n.createElement(i.Z,{theme:r,onClick:e=>{const l=e.keyPath.reverse().join("/");t.push(`/${l}`)},style:{width:240},defaultOpenKeys:[c],selectedKeys:[a],mode:"inline",items:o}));var u,E},N=e=>{const{children:t,className:l,...a}=e,c=o()("site-pager__wrapper",l);return n.createElement("div",{className:c},n.createElement(v,a),n.createElement("div",{className:"site-pager__container"},t))},y=e=>((0,n.useEffect)((()=>{setTimeout((()=>{console.log("\ud83c\udf44  webpage: >>>>>>>>>>>>>>>>>> \u9875\u9762\u53d1\u9001\u6d88\u606f",Date.now()),window.postMessage({type:"test",data:{from:"webpage"}},"*")}),300)}),[]),n.createElement(N,e,n.createElement("div",null,"demo123")));function C(e){return n.createElement("div",{className:"pager-notfound"},n.createElement("div",{className:"iconfont icon-404"}),"404 Not Found")}var g=l(87462);const Z=e=>{const{className:t,children:l}=e,a=o()("site-comp-title",t);return n.createElement("div",{className:a},l)},w="site-comp-panel",x=(e,t)=>(0,f.q)(w,e,t),S=e=>{const{className:t,isFlex:l,title:a,extra:c,children:r,onExtra:s}=e,m=o()(w,t,{[x("","flex")]:l});return n.createElement("div",{className:m},n.createElement("div",{className:x("header")},n.createElement(Z,null,a),c&&n.createElement("div",{className:"extra",onClick:s},c)),n.createElement("div",{className:x("body")},r))},_=e=>n.createElement(N,(0,g.Z)({},e,{className:"first-child-container"}),n.createElement(S,{title:"first-child",className:"first-child-panel1"},n.createElement("div",{className:"parent"},n.createElement("div",null,"aa"),n.createElement("div",null,"bb"),n.createElement("div",null,"cc"),n.createElement("div",null,"dd"))),n.createElement(S,{title:"first-child",className:"first-child-panel1"},n.createElement("div",{className:"parent"},n.createElement("p",null,"aa"),n.createElement("p",null,"bb"),n.createElement("p",null,"cc"),n.createElement("p",null,"dd"))),n.createElement(S,{title:"first-child",className:"first-child-panel2"},n.createElement("h1",null,"h1"),n.createElement("div",{className:"parent"},n.createElement("div",null,"aa"),n.createElement("div",null,"bb"),n.createElement("div",null,"cc"),n.createElement("div",null,"dd"))),n.createElement(S,{title:"first-child",className:"first-child-panel2"},n.createElement("h1",null,"h1"),n.createElement("div",{className:"parent"},n.createElement("p",null,"aa"),n.createElement("div",null,"bb"),n.createElement("div",null,"cc"),n.createElement("div",null,"dd"))),n.createElement(S,{title:"first-of-type",className:"first-of-type-panel1"},n.createElement("h1",null,"hellow world"),n.createElement("div",{className:"parent"},n.createElement("div",null,"aa"),n.createElement("p",null,"bb"),n.createElement("p",null,"cc"),n.createElement("p",null,"dd")),n.createElement("div",null,"ee")),n.createElement(S,{title:"first-of-type",className:"first-of-type-panel1"},n.createElement("h1",null,"hellow world"),n.createElement("div",{className:"parent"},n.createElement("span",null,"aa"),n.createElement("p",null,"bb"),n.createElement("p",null,"cc"),n.createElement("p",null,"dd")),n.createElement("div",null,"ee")));var M=l(63871);const A=e=>{const[t,l]=(0,n.useState)(0);return(0,n.useEffect)((()=>{0===t&&l(10+200*Math.random())}),[t]),n.createElement(N,(0,g.Z)({},e,{className:"useeffect-container"}),n.createElement(M.Z,{type:"primary",size:"sm",onClick:()=>l(0)},"value: ",t))},O=e=>{let{onClick:t,label:l}=e;return console.log("Button rendered:",l),n.createElement("button",{onClick:t},l)},D=n.memo(O),W=e=>{const[t,l]=(0,n.useState)(0),[a,c]=(0,n.useState)(0),r=(0,n.useCallback)((()=>{l(t+1)}),[t]),s=(0,n.useCallback)((()=>{c(a+1)}),[a]);return n.createElement(N,(0,g.Z)({},e,{className:"usecallback-container"}),n.createElement(D,{onClick:r,label:`Count 1: ${t}`}),n.createElement(D,{onClick:s,label:`Count 2: ${a}`}))},q=e=>{let{numbers:t}=e;return n.createElement("ul",null,t.map((e=>n.createElement("li",{key:e},"Square of ",e,": ",e*e))))},$=e=>{const[t,l]=(0,n.useState)([1,2,3,4,5]),[a,c]=(0,n.useState)(0),r=(0,n.useMemo)((()=>(console.log("\ud83c\udf49  squaredNumbers \u91cd\u65b0\u8ba1\u7b97 "),t.map((e=>e*e)))),[t]);return n.createElement(N,(0,g.Z)({},e,{className:"usecallback-container"}),n.createElement("h1",null,"Number Squares"),n.createElement(q,{numbers:r}),n.createElement(M.Z,{type:"primary",size:"sm",onClick:()=>c(a+1)},"count: ",a),n.createElement("br",null),n.createElement("br",null),n.createElement(M.Z,{type:"primary",size:"sm",onClick:()=>l(t.map((e=>e+1)))},"numbers: ",t))},z=e=>{let t,l;const a=e=>{switch(e){case"log":console.log("\u666e\u901a\u4fe1\u606f");break;case"log-css":console.log("%c \u4f7f\u7528CSS\u7f8e\u5316\u8f93\u51fa\u4fe1\u606f","color: red; font-size: x-large");break;case"log-beauty":console.log("\u5b57\u7b26\u4e32\u7684\u66ff\u6362\u548c\u683c\u5f0f\u5316 - Node count: %d, and the time is %f.",document.childNodes.length,Date.now());break;case"log-dom":console.log("%o \u8fd4\u56deDOM\u5143\u7d20",document.body.firstElementChild),console.log("%O \u8fd4\u56deDOM\u6811",document.body.firstElementChild);break;case"info":console.info("info");break;case"warn":console.warn("warn!");break;case"error":console.error("error!!!");break;case"assert":const e=5,t=3,l="5\u5927\u4e8e3";console.assert(e<t,{x:e,y:t,reason:l});break;case"clear":console.clear();break;case"debug":console.debug("debug")}};return n.createElement(N,(0,g.Z)({},e,{className:"element-container"}),n.createElement(S,{title:"\u5e03\u5c40",isFlex:!0},n.createElement(S,{title:"Grid"},n.createElement("div",{className:"grid-panel"},n.createElement("div",{className:"item item-1"},"1"),n.createElement("div",{className:"item item-2"},"2"),n.createElement("div",{className:"item item-3"},"3"),n.createElement("div",{className:"item item-4"},"4"),n.createElement("div",{className:"item item-5"},"5"),n.createElement("div",{className:"item item-6"},"6"),n.createElement("div",{className:"item item-7"},"7"),n.createElement("div",{className:"item item-8"},"8"),n.createElement("div",{className:"item item-9"},"9"))),n.createElement(S,{title:"Flex",extra:"\u70b9\u51fb",onExtra:()=>{alert("click extra")}},n.createElement("div",{className:"flex-panel"},n.createElement("div",{className:"item item-1"},"1"),n.createElement("div",{className:"item item-2"},"2"),n.createElement("div",{className:"item item-3"},"3")))),n.createElement(S,{title:"Console API",className:"console-api-panel"},n.createElement(M.Z,{onClick:()=>{a("log")}},"console.log"),n.createElement(M.Z,{onClick:()=>{a("log-css")}},"\u4f7f\u7528CSS\u7f8e\u5316\u8f93\u51fa\u4fe1\u606f"),n.createElement(M.Z,{onClick:()=>{a("log-beauty")}},"\u5b57\u7b26\u4e32\u7684\u66ff\u6362\u548c\u683c\u5f0f\u5316"),n.createElement(M.Z,{onClick:()=>{a("log-dom")}},"\u8fd4\u56deDOM\u5143\u7d20/DOM\u5143\u7d20\u683c\u5f0f\u5316"),n.createElement("br",null),n.createElement("br",null),n.createElement(M.Z,{onClick:()=>{a("info")}},"console.info"),n.createElement("br",null),n.createElement("br",null),n.createElement(M.Z,{onClick:()=>{a("warn")}},"console.warn"),n.createElement("br",null),n.createElement("br",null),n.createElement(M.Z,{onClick:()=>{a("debug")}},"console.debug"),n.createElement("br",null),n.createElement("br",null),n.createElement(M.Z,{onClick:()=>{a("error")}},"console.error"),n.createElement("br",null),n.createElement("br",null),n.createElement(M.Z,{onClick:()=>{a("assert")}},"console.assert"),n.createElement("br",null),n.createElement("br",null),n.createElement(M.Z,{onClick:()=>{a("table")}},"console.table"),n.createElement("br",null),n.createElement("br",null),n.createElement(M.Z,{onClick:()=>{a("clear")}},"console.clear")),n.createElement(S,{title:"\u5185\u5b58\u6cc4\u6f0fdemo",className:"memory-panel"},n.createElement(M.Z,{onClick:()=>{t=document.createElement("div"),alert("div")}},"\u70b9\u51fb\u521b\u5efadiv"),n.createElement(M.Z,{onClick:()=>{l=document.createElement("span"),alert("gcspan")}},"\u70b9\u51fb\u521b\u5efaspan"),n.createElement("br",null),n.createElement(M.Z,{onClick:()=>{t=null,alert("gc div")}},"\u70b9\u51fb\u56de\u6536div"),n.createElement(M.Z,{onClick:()=>{l=null,alert("gc span")}},"\u70b9\u51fb\u56de\u6536span"),n.createElement("br",null),n.createElement(M.Z,{onClick:()=>{(()=>{let e=null;for(let t=0;t<1e3;t++)e={bigData:new Array(1e5).join("this_is_a_big_data"),inner:function(){console.log("inner method run")}}})()}},"\u95ed\u5305\u5f15\u8d77\u7684\u5185\u5b58\u6cc4\u6f0f")))};class F extends n.Component{render(){return n.createElement(r.UT,null,n.createElement(s.rs,null,n.createElement(s.AW,{path:"/tools/demo",component:y}),n.createElement(s.AW,{path:"/html-css/first-child",component:_}),n.createElement(s.AW,{path:"/react-hooks/useEffect",component:A}),n.createElement(s.AW,{path:"/react-hooks/useCallback",component:W}),n.createElement(s.AW,{path:"/react-hooks/useMemo",component:$}),n.createElement(s.AW,{path:"/devtools/element",component:z}),n.createElement(s.AW,{path:"*",component:C})))}}function T(){return n.createElement(a.Z,null,n.createElement(c.Z,null,(()=>n.createElement(F,null))))}}}]);