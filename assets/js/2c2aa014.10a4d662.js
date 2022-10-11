"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[4759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(c,".").concat(u)]||d[u]||s[u]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={description:"jsx",slug:"/71318bd",tags:["jsx"]},i=void 0,o={unversionedId:"React\u7bc7/jsx",id:"React\u7bc7/jsx",title:"jsx",description:"jsx",source:"@site/docs/05.React\u7bc7/01.jsx.md",sourceDirName:"05.React\u7bc7",slug:"/71318bd",permalink:"/docs/71318bd",draft:!1,editUrl:"https://github.com/lacorda/lacorda.github.io/blob/master/docs/docs/05.React\u7bc7/01.jsx.md",tags:[{label:"jsx",permalink:"/docs/tags/jsx"}],version:"current",lastUpdatedBy:"iyb-chenliyu",lastUpdatedAt:1665383137,formattedLastUpdatedAt:"2022\u5e7410\u670810\u65e5",sidebarPosition:1,frontMatter:{description:"jsx",slug:"/71318bd",tags:["jsx"]},sidebar:"tutorialSidebar",previous:{title:"\u8349\u7a3f",permalink:"/docs/3ce1216"},next:{title:"Component",permalink:"/docs/ee17c27"}},c={},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u672c\u7ae0\u5c06\u5b66\u4e60\u5230\u7684\u5185\u5bb9",id:"\u672c\u7ae0\u5c06\u5b66\u4e60\u5230\u7684\u5185\u5bb9",level:4},{value:"jsx\u7684\u6e32\u67d3\u8fc7\u7a0b",id:"jsx\u7684\u6e32\u67d3\u8fc7\u7a0b",level:2},{value:"\u6817\u5b50",id:"\u6817\u5b50",level:3},{value:"React.createElement\u5904\u7406",id:"reactcreateelement\u5904\u7406",level:3},{value:"element \u5bf9\u8c61\u548c fiber \u7c7b\u578b\u7684\u5bf9\u5e94\u5173\u7cfb",id:"element-\u5bf9\u8c61\u548c-fiber-\u7c7b\u578b\u7684\u5bf9\u5e94\u5173\u7cfb",level:3},{value:"babel\u7684jsx\u89e3\u6790\u6d41\u7a0b",id:"babel\u7684jsx\u89e3\u6790\u6d41\u7a0b",level:3},{value:"\u4f7f\u7528<code>@babel/preset-react</code>:",id:"\u4f7f\u7528babelpreset-react",level:4},{value:"\u4f7f\u7528<code>automatic</code>\u6a21\u5f0f",id:"\u4f7f\u7528automatic\u6a21\u5f0f",level:4},{value:"\u4f7f\u7528<code>classic</code>\u7ecf\u5178\u6a21\u5f0f",id:"\u4f7f\u7528classic\u7ecf\u5178\u6a21\u5f0f",level:4},{value:"babel api\u6a21\u62df\u5b9e\u73b0",id:"babel-api\u6a21\u62df\u5b9e\u73b0",level:3},{value:"\u4f7f\u7528React API\u63a7\u5236children",id:"\u4f7f\u7528react-api\u63a7\u5236children",level:2},{value:"React.Children.toArray",id:"reactchildrentoarray",level:3},{value:"React.isValidElement",id:"reactisvalidelement",level:3},{value:"React.createElement",id:"reactcreateelement",level:3},{value:"React.cloneElement",id:"reactcloneelement",level:3}],m={toc:p};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("h4",{id:"\u672c\u7ae0\u5c06\u5b66\u4e60\u5230\u7684\u5185\u5bb9"},"\u672c\u7ae0\u5c06\u5b66\u4e60\u5230\u7684\u5185\u5bb9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e86\u89e3",(0,r.kt)("inlineCode",{parentName:"li"},"jsx"),"\u7684\u6e32\u67d3\u8fc7\u7a0b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"React Fiber"),"\u4e0e",(0,r.kt)("inlineCode",{parentName:"li"},"\u8282\u70b9"),"\u4e00\u4e00\u5bf9\u5e94\u7684\u5173\u7cfb"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"api"),"\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"li"},"children"),"\uff0c\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"li"},"react"),"\u6e32\u67d3\u5185\u5bb9")),(0,r.kt)("admonition",{title:"\u672a\u6df1\u5165\u5f85\u7814\u7a76\u5185\u5bb9",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Fiber"),"\u7684\u8bbe\u8ba1\u601d\u8def",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fiber \u53ef\u4ee5\u7406\u89e3\u4e3a\u662f\u4e00\u4e2a\u6267\u884c\u5355\u5143\uff0c\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784"))),(0,r.kt)("li",{parentName:"ul"},"React\u63d2\u69fd\u7ec4\u4ef6"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"`Vue` \u662f\u6ca1\u6709 `Fiber` \u7684\uff0c\u4e3a\u4ec0\u4e48\u5462\uff1f\u539f\u56e0\u662f\u4e8c\u8005\u7684\u4f18\u5316\u601d\u8def\u4e0d\u4e00\u6837"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"`Vue` \u662f\u57fa\u4e8e `template` \u548c `watcher` \u7684\u7ec4\u4ef6\u7ea7\u66f4\u65b0\uff0c\u628a\u6bcf\u4e2a\u66f4\u65b0\u4efb\u52a1\u5206\u5272\u5f97\u8db3\u591f\u5c0f\uff0c\u4e0d\u9700\u8981\u4f7f\u7528\u5230 `Fiber` \u67b6\u6784\uff0c\u5c06\u4efb\u52a1\u8fdb\u884c\u66f4\u7ec6\u7c92\u5ea6\u7684\u62c6\u5206"),(0,r.kt)("li",null,"`React` \u662f\u4e0d\u7ba1\u5728\u54ea\u91cc\u8c03\u7528 `setState`\uff0c\u90fd\u662f\u4ece\u6839\u8282\u70b9\u5f00\u59cb\u66f4\u65b0\u7684\uff0c\u66f4\u65b0\u4efb\u52a1\u8fd8\u662f\u5f88\u5927\uff0c\u9700\u8981\u4f7f\u7528\u5230 `Fiber` \u5c06 ***\u5927\u4efb\u52a1\u5206\u5272\u4e3a\u591a\u4e2a\u5c0f\u4efb\u52a1***\uff0c\u53ef\u4ee5\u4e2d\u65ad\u548c\u6062\u590d\uff0c***\u4e0d\u963b\u585e\u4e3b\u8fdb\u7a0b\u6267\u884c\u9ad8\u4f18\u5148\u7ea7\u7684\u4efb\u52a1***"))),(0,r.kt)("p",null,"JSX \u5143\u7d20\u8282\u70b9\u4f1a\u88ab\u7f16\u8bd1\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement")," "),(0,r.kt)("h2",{id:"jsx\u7684\u6e32\u67d3\u8fc7\u7a0b"},"jsx\u7684\u6e32\u67d3\u8fc7\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7878).Z,width:"2434",height:"1124"})),(0,r.kt)("admonition",{title:"React \u4e2d\uff0c\u4e3a\u4ec0\u4e48\u5199 jsx \u7684\u6587\u4ef6\u8981\u9ed8\u8ba4\u5f15\u5165 React?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u56e0\u4e3a jsx \u5728\u88ab babel \u7f16\u8bd1\u540e\uff0c\u5199\u7684 jsx \u4f1a\u53d8\u6210\u4e0a\u8ff0 React.createElement \u5f62\u5f0f\uff0c\u6240\u4ee5\u9700\u8981\u5f15\u5165 React\uff0c\u9632\u6b62\u627e\u4e0d\u5230 React \u5f15\u8d77\u62a5\u9519")),(0,r.kt)("h3",{id:"\u6817\u5b50"},"\u6817\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\n\n\nconst toLearn = ['react', 'vue', 'webpack', 'nodejs']\n\nconst TextComponent = () => <div> hello , i am function component </div>\n\nclass Index extends React.Component {\n  status = false /* \u72b6\u6001 */\n  renderFoot = () => <div> i am foot</div>\n  return (\n    <div className=\"container\" style={marginTop: '10px'}>\n      {/* element \u5143\u7d20\u7c7b\u578b */}\n      <div>hello,world</div>\n      {/* fragment \u7c7b\u578b */}\n      <React.Fragment>\n          <div> \ud83d\udc7d\ud83d\udc7d </div>\n      </React.Fragment>\n      {/* text \u6587\u672c\u7c7b\u578b */}\n      my name is alien\n      {/* \u6570\u7ec4\u8282\u70b9\u7c7b\u578b */}\n      {toLearn.map(item => <div key={item} >let us learn {item} </div>)}\n      {/* \u7ec4\u4ef6\u7c7b\u578b */}\n      <TextComponent />\n      {/* \u4e09\u5143\u8fd0\u7b97 */}\n      {this.status ? <TextComponent /> : <div>\u4e09\u5143\u8fd0\u7b97</div>}\n      {/* \u51fd\u6570\u6267\u884c */}\n      {this.renderFoot()}\n      <button onClick={() => console.log(this.render())} >\u6253\u5370render\u540e\u7684\u5185\u5bb9</button>\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"reactcreateelement\u5904\u7406"},"React.createElement\u5904\u7406"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"jsx"),"\u5143\u7d20\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"react.createElement")," \u8f6c\u6362\u540e"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"type")," \u5c5e\u6027"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"element"),"\u5143\u7d20\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"react element"),"\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6807\u7b7e\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"div"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fragment"),"\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"react element"),"\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"symbol")," ",(0,r.kt)("inlineCode",{parentName:"td"},"react.fragment"),"\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u672c\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76f4\u63a5\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u7ec4\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6570\u7ec4\u7ed3\u6784\uff0c\u91cc\u9762\u5143\u7d20\u88ab",(0,r.kt)("inlineCode",{parentName:"td"},"react.createElement"),"\u8f6c\u6362"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"react element"),"\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u7c7b\u6216\u8005\u7ec4\u4ef6\u51fd\u6570\u672c\u8eab")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e09\u5143\u8fd0\u7b97 / \u8868\u8fbe\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5148\u6267\u884c\u4e09\u5143\u8fd0\u7b97\uff0c\u7136\u540e\u6309\u7167\u4e0a\u8ff0\u89c4\u5219\u5904\u7406"),(0,r.kt)("td",{parentName:"tr",align:null},"\u770b\u4e09\u5143\u8fd0\u7b97\u8fd4\u56de\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570\u6267\u884c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5148\u6267\u884c\u51fd\u6570\uff0c\u7136\u540e\u6309\u7167\u4e0a\u8ff0\u89c4\u5219\u5904\u7406"),(0,r.kt)("td",{parentName:"tr",align:null},"\u770b\u51fd\u6570\u6267\u884c\u8fd4\u56de\u7ed3\u679c")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2052).Z,width:"1698",height:"830"})),(0,r.kt)("h3",{id:"element-\u5bf9\u8c61\u548c-fiber-\u7c7b\u578b\u7684\u5bf9\u5e94\u5173\u7cfb"},"element \u5bf9\u8c61\u548c fiber \u7c7b\u578b\u7684\u5bf9\u5e94\u5173\u7cfb"),(0,r.kt)("p",null,"React element \u5bf9\u8c61\u7684\u6bcf\u4e00\u4e2a\u5b50\u8282\u70b9\u90fd\u4f1a\u5f62\u6210\u4e00\u4e2a\u4e0e\u4e4b\u5bf9\u5e94\u7684 fiber \u5bf9\u8c61\uff0c\u7136\u540e\u901a\u8fc7 sibling\u3001return\u3001child \u5c06\u6bcf\u4e00\u4e2a fiber \u5bf9\u8c61\u8054\u7cfb\u8d77\u6765\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export const FunctionComponent = 0;       // \u51fd\u6570\u7ec4\u4ef6\nexport const ClassComponent = 1;          // \u7c7b\u7ec4\u4ef6\nexport const IndeterminateComponent = 2;  // \u521d\u59cb\u5316\u7684\u65f6\u5019\u4e0d\u77e5\u9053\u662f\u51fd\u6570\u7ec4\u4ef6\u8fd8\u662f\u7c7b\u7ec4\u4ef6 \nexport const HostRoot = 3;                // Root Fiber \u53ef\u4ee5\u7406\u89e3\u4e3a\u6839\u5143\u7d20 \uff0c \u901a\u8fc7reactDom.render()\u4ea7\u751f\u7684\u6839\u5143\u7d20\nexport const HostPortal = 4;              // \u5bf9\u5e94  ReactDOM.createPortal \u4ea7\u751f\u7684 Portal \nexport const HostComponent = 5;           // dom \u5143\u7d20 \u6bd4\u5982 <div>\nexport const HostText = 6;                // \u6587\u672c\u8282\u70b9\nexport const Fragment = 7;                // \u5bf9\u5e94 <React.Fragment> \nexport const Mode = 8;                    // \u5bf9\u5e94 <React.StrictMode>   \nexport const ContextConsumer = 9;         // \u5bf9\u5e94 <Context.Consumer>\nexport const ContextProvider = 10;        // \u5bf9\u5e94 <Context.Provider>\nexport const ForwardRef = 11;             // \u5bf9\u5e94 React.ForwardRef\nexport const Profiler = 12;               // \u5bf9\u5e94 <Profiler/ >\nexport const SuspenseComponent = 13;      // \u5bf9\u5e94 <Suspense>\nexport const MemoComponent = 14;          // \u5bf9\u5e94 React.memo \u8fd4\u56de\u7684\u7ec4\u4ef6\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6001).Z,width:"2160",height:"1094"})),(0,r.kt)("admonition",{title:"fiber \u5bf9\u5e94\u5173\u7cfb",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"child\uff1a \u4e00\u4e2a\u7531\u7236\u7ea7 fiber \u6307\u5411\u5b50\u7ea7 fiber \u7684\u6307\u9488\u3002"),(0,r.kt)("li",{parentName:"ul"},"return\uff1a\u4e00\u4e2a\u5b50\u7ea7 fiber \u6307\u5411\u7236\u7ea7 fiber \u7684\u6307\u9488\u3002"),(0,r.kt)("li",{parentName:"ul"},"sibling: \u4e00\u4e2a fiber \u6307\u5411\u4e0b\u4e00\u4e2a\u5144\u5f1f fiber \u7684\u6307\u9488\u3002"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"jsx \u4e2d\u5199\u7684 map \u6570\u7ec4\u7ed3\u6784\u7684\u5b50\u8282\u70b9\uff0c\u5916\u5c42\u4f1a\u88ab\u52a0\u4e0a fragment \uff1b\nmap \u8fd4\u56de\u6570\u7ec4\u7ed3\u6784\uff0c\u4f5c\u4e3a fragment \u7684\u5b50\u8282\u70b9\u3002")),(0,r.kt)("h3",{id:"babel\u7684jsx\u89e3\u6790\u6d41\u7a0b"},"babel\u7684jsx\u89e3\u6790\u6d41\u7a0b"),(0,r.kt)("h4",{id:"\u4f7f\u7528babelpreset-react"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h4"},"@babel/preset-react"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function Index(){\n    return <div>\n        <h1>hello,world</h1>\n        <span>let us learn React</span>\n    </div>\n}\n")),(0,r.kt)("h4",{id:"\u4f7f\u7528automatic\u6a21\u5f0f"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h4"},"automatic"),"\u6a21\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=.babelrc",title:".babelrc"},'"presets": [    \n  ["@babel/preset-react",{\n    "runtime": "automatic"\n  }]     \n]\n')),(0,r.kt)("p",null,"\u7f16\u8bd1\u540e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { jsx as _jsx } from "react/jsx-runtime";\nimport { jsxs as _jsxs } from "react/jsx-runtime";\nfunction Index() {\n  return  _jsxs("div", {\n            children: [\n                _jsx("h1", {\n                   children: "hello,world"\n                }),\n                _jsx("span", {\n                    children:"let us learn React" ,\n                }),\n            ],\n        });\n}\n')),(0,r.kt)("h4",{id:"\u4f7f\u7528classic\u7ecf\u5178\u6a21\u5f0f"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h4"},"classic"),"\u7ecf\u5178\u6a21\u5f0f"),(0,r.kt)("p",null,"\u7f16\u8bd1\u540e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React from \'react\'\nfunction Index(){\n  return  React.createElement(\n      "div",\n      null,\n      React.createElement("h1", null,"hello,world"),\n      React.createElement("span", null, "let us learn React")\n  );\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"classic\u6a21\u5f0f\u4e0b\u9700\u8981\u5f15\u5165 React \uff0c\u4e0d\u7136\u5c31\u4f1a\u62a5\u9519")),(0,r.kt)("h3",{id:"babel-api\u6a21\u62df\u5b9e\u73b0"},"babel api\u6a21\u62df\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs')\nconst babel = require(\"@babel/core\")\n\n/* \u7b2c\u4e00\u6b65\uff1a\u6a21\u62df\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9\u3002 */\nfs.readFile('./element.js',(e,data)=>{ \n    const code = data.toString('utf-8')\n    /* \u7b2c\u4e8c\u6b65\uff1a\u8f6c\u6362 jsx \u6587\u4ef6 */\n    const result = babel.transformSync(code, {\n        plugins: [\"@babel/plugin-transform-react-jsx\"],\n    });\n    /* \u7b2c\u4e09\u6b65\uff1a\u6a21\u62df\u91cd\u65b0\u5199\u5165\u5185\u5bb9\u3002 */\n    fs.writeFile('./element.js',result.code,function(){})\n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=element.js\u7f16\u8bd1\u524d",title:"element.js\u7f16\u8bd1\u524d"},"import React from 'react'\n\nfunction TestComponent(){\n    return <p> hello,React </p>\n}\nfunction Index(){\n    return <div>\n        <span>\u6a21\u62df babel \u5904\u7406 jsx \u6d41\u7a0b\u3002</span>\n        <TestComponent />\n    </div>\n}\nexport default Index\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=element.js\u7f16\u8bd1\u540e",title:"element.js\u7f16\u8bd1\u540e"},'import React from \'react\';\n\nfunction TestComponent() {\n  return /*#__PURE__*/React.createElement("p", null, " hello,React ");\n}\n\nfunction Index() {\n  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\\u6A21\\u62DF babel \\u5904\\u7406 jsx \\u6D41\\u7A0B\\u3002"), /*#__PURE__*/React.createElement(TestComponent, null));\n}\nexport default Index;\n')),(0,r.kt)("h2",{id:"\u4f7f\u7528react-api\u63a7\u5236children"},"\u4f7f\u7528React API\u63a7\u5236children"),(0,r.kt)("h3",{id:"reactchildrentoarray"},"React.Children.toArray"),(0,r.kt)("p",null,"\u6df1\u5c42\u6241\u5e73\u5316",(0,r.kt)("inlineCode",{parentName:"p"},"children"),"\uff0c\u5e76\u4e14\u89c4\u5219\u5316",(0,r.kt)("inlineCode",{parentName:"p"},"React.element"),"(\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"key"),")"),(0,r.kt)("h3",{id:"reactisvalidelement"},"React.isValidElement"),(0,r.kt)("p",null,"\u68c0\u6d4b",(0,r.kt)("inlineCode",{parentName:"p"},"React.element"),"\u8282\u70b9\uff0c\u6587\u672c\u8282\u70b9\u975e",(0,r.kt)("inlineCode",{parentName:"p"},"React.element"),"\u8282\u70b9"),(0,r.kt)("h3",{id:"reactcreateelement"},"React.createElement"),(0,r.kt)("p",null,"\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"React.element"),"\u8282\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=\u8bed\u6cd5",title:"\u8bed\u6cd5"},"React.createElement(\n  type,\n  [props],\n  [...children]\n)\n")),(0,r.kt)("h3",{id:"reactcloneelement"},"React.cloneElement"),(0,r.kt)("p",null,"\u514b\u9686\u539f\u6765\u7684\u5143\u7d20\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 React \u5143\u7d20"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=\u8bed\u6cd5",title:"\u8bed\u6cd5"},"React.cloneElement(\n  element,\n  [props], // \u7b2c\u4e8c\u4e2a\u53c2\u6570\uff1a\u4fdd\u7559\u539f\u59cb\u5143\u7d20\u7684 props\uff0c\u540c\u65f6\u53ef\u4ee5\u6dfb\u52a0\u65b0\u7684 props\uff0c\u4e24\u8005\u8fdb\u884c\u6d45\u5408\u5e76\uff1bkey \u548c ref \u4f1a\u88ab\u4fdd\u7559\uff0c\u56e0\u4e3a\u5b83\u4eec\u672c\u8eab\u4e5f\u662f props \uff0c\u6240\u4ee5\u4e5f\u53ef\u4ee5\u4fee\u6539\n  [...children] // \u5b9a\u4e49\u4efb\u610f\u591a\u7684\u5b50\u5143\u7d20\uff0c\u5982\u679c\u5b9a\u4e49\u4e86\u65b0\u7684 children \uff0c\u4f1a\u66ff\u6362\u539f\u6765\u7684 children\n)\n")))}s.isMDXComponent=!0},2052:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jsx01-ad140f6f4ac3c35b607116db3dae6871.png"},6001:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jsx02-5a70fed44b55e17730a4ecbb3ea1aa3b.png"},7878:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jsx03-e4f3366be7f52cd6696d92217a94d08c.png"}}]);