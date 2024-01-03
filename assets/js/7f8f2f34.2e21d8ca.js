"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[8363],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39889:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={},l="sidePanel \u4fa7\u8fb9\u680f",i={unversionedId:"Chrome\u7bc7/Chrome\u63d2\u4ef6/API/sidePanel",id:"Chrome\u7bc7/Chrome\u63d2\u4ef6/API/sidePanel",title:"sidePanel \u4fa7\u8fb9\u680f",description:"\u5b98\u65b9\u6587\u6863",source:"@site/01.docs/05.Chrome\u7bc7/02.Chrome\u63d2\u4ef6/03.API/15.sidePanel.md",sourceDirName:"05.Chrome\u7bc7/02.Chrome\u63d2\u4ef6/03.API",slug:"/Chrome\u7bc7/Chrome\u63d2\u4ef6/API/sidePanel",permalink:"/docs/Chrome\u7bc7/Chrome\u63d2\u4ef6/API/sidePanel",draft:!1,editUrl:"https://github.com/lacorda/lacorda.github.io/blob/master/docs/01.docs/05.Chrome\u7bc7/02.Chrome\u63d2\u4ef6/03.API/15.sidePanel.md",tags:[],version:"current",lastUpdatedBy:"Lacorda",lastUpdatedAt:1704264529,formattedLastUpdatedAt:"2024\u5e741\u67083\u65e5",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tabCapture \u6807\u7b7e\u5a92\u4f53\u6d41",permalink:"/docs/Chrome\u7bc7/Chrome\u63d2\u4ef6/API/tabCapture"},next:{title:"tts \u6587\u672c\u8f6c\u8bed\u97f3",permalink:"/docs/Chrome\u7bc7/Chrome\u63d2\u4ef6/API/tts"}},s={},p=[{value:"\u6743\u9650\u8bbe\u7f6e",id:"\u6743\u9650\u8bbe\u7f6e",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"getOptions() \u83b7\u53d6\u4fa7\u8fb9\u680f\u9009\u9879",id:"getoptions-\u83b7\u53d6\u4fa7\u8fb9\u680f\u9009\u9879",level:3},{value:"getPanelBehavior() \u83b7\u53d6\u4fa7\u8fb9\u680f\u884c\u4e3a",id:"getpanelbehavior-\u83b7\u53d6\u4fa7\u8fb9\u680f\u884c\u4e3a",level:3},{value:"open() \u6253\u5f00\u4fa7\u8fb9\u680f",id:"open-\u6253\u5f00\u4fa7\u8fb9\u680f",level:3},{value:"setOptions() \u8bbe\u7f6e\u4fa7\u8fb9\u680f\u9009\u9879",id:"setoptions-\u8bbe\u7f6e\u4fa7\u8fb9\u680f\u9009\u9879",level:3},{value:"setPanelBehavior() \u8bbe\u7f6e\u4fa7\u8fb9\u680f\u884c\u4e3a",id:"setpanelbehavior-\u8bbe\u7f6e\u4fa7\u8fb9\u680f\u884c\u4e3a",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...o}=e;return(0,a.kt)(d,(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sidepanel-\u4fa7\u8fb9\u680f"},"sidePanel \u4fa7\u8fb9\u680f"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/extensions/reference/sidePanel/"},"\u5b98\u65b9\u6587\u6863")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7528\u4e8e\u521b\u5efa\u3001\u7ba1\u7406\u548c\u63a7\u5236\u4fa7\u8fb9\u680f")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4fa7\u8fb9\u680f",src:t(49621).Z,width:"656",height:"1402"})),(0,a.kt)("h2",{id:"\u6743\u9650\u8bbe\u7f6e"},"\u6743\u9650\u8bbe\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"permissions": [\n  "sidePanel"\n],\n')),(0,a.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,a.kt)("h3",{id:"getoptions-\u83b7\u53d6\u4fa7\u8fb9\u680f\u9009\u9879"},"getOptions() \u83b7\u53d6\u4fa7\u8fb9\u680f\u9009\u9879"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type GetPanelOptions = {\n  tabId?: number;\n}\n\ntype PanelOptions = {\n  enabled?: boolean;\n  path?: string;\n  tabId?: number;\n}\n\nchrome.sidePanel.getOptions(\n  options: GetPanelOptions,\n  callback?: (options: PanelOptions)=>void,\n)\n")),(0,a.kt)("h3",{id:"getpanelbehavior-\u83b7\u53d6\u4fa7\u8fb9\u680f\u884c\u4e3a"},"getPanelBehavior() \u83b7\u53d6\u4fa7\u8fb9\u680f\u884c\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type PanelBehavior = {\n  enabled?: boolean;\n  path?: string;\n  tabId?: number;\n}\n\nchrome.sidePanel.getPanelBehavior(\n  callback?: (options: PanelBehavior)=>void,\n)\n")),(0,a.kt)("h3",{id:"open-\u6253\u5f00\u4fa7\u8fb9\u680f"},"open() \u6253\u5f00\u4fa7\u8fb9\u680f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type OpenOptions = {\n  // tabId \u548c windowId \u5fc5\u987b\u6307\u5b9a\u4e00\u4e2a\n  tabId?: number;\n  windowId?: number;\n}\n\nchrome.sidePanel.open(\n  options: OpenOptions,\n  callback?: () => void,\n)\n")),(0,a.kt)("h3",{id:"setoptions-\u8bbe\u7f6e\u4fa7\u8fb9\u680f\u9009\u9879"},"setOptions() \u8bbe\u7f6e\u4fa7\u8fb9\u680f\u9009\u9879"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type PanelOptions = {\n  enabled?: boolean;\n  path?: string;\n  tabId?: number;\n}\n\nchrome.sidePanel.setOptions(\n  options: PanelOptions,\n  callback?: () => void,\n)\n")),(0,a.kt)("h3",{id:"setpanelbehavior-\u8bbe\u7f6e\u4fa7\u8fb9\u680f\u884c\u4e3a"},"setPanelBehavior() \u8bbe\u7f6e\u4fa7\u8fb9\u680f\u884c\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type PanelBehavior = {\n  enabled?: boolean;\n  path?: string;\n  tabId?: number;\n}\n\nchrome.sidePanel.setPanelBehavior(\n  behavior: PanelBehavior,\n  callback?: () => void,\n)\n")))}u.isMDXComponent=!0},49621:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/chrome-sidePanel-67bce1e4031cfdf84d5b06aa79d050af.png"}}]);