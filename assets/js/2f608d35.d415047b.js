"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[7925],{58860:(e,r,n)=>{n.d(r,{xA:()=>d,yg:()=>m});var o=n(37953);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=o.createContext({}),c=function(e){var r=o.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=c(e.components);return o.createElement(p.Provider,{value:r},e.children)},s="mdxType",i={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},g=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,p=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=c(n),g=t,m=s["".concat(p,".").concat(g)]||s[g]||i[g]||a;return n?o.createElement(m,l(l({ref:r},d),{},{components:n})):o.createElement(m,l({ref:r},d))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,l=new Array(a);l[0]=g;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u[s]="string"==typeof e?e:t,l[1]=u;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},34063:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>i,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var o=n(75890),t=(n(37953),n(58860));const a={description:"tabGroups",slug:"/16c9dc5",tags:["tabGroups"]},l="tabGroups \u9009\u9879\u5361\u7ec4",u={unversionedId:"Chrome\u7bc7/Chrome\u63d2\u4ef6/API/tabGroups",id:"Chrome\u7bc7/Chrome\u63d2\u4ef6/API/tabGroups",title:"tabGroups \u9009\u9879\u5361\u7ec4",description:"tabGroups",source:"@site/01.docs/05.Chrome\u7bc7/02.Chrome\u63d2\u4ef6/03.API/06.tabGroups.md",sourceDirName:"05.Chrome\u7bc7/02.Chrome\u63d2\u4ef6/03.API",slug:"/16c9dc5",permalink:"/docs/16c9dc5",draft:!1,editUrl:"https://github.com/lacorda/lacorda.github.io/blob/master/docs/01.docs/05.Chrome\u7bc7/02.Chrome\u63d2\u4ef6/03.API/06.tabGroups.md",tags:[{label:"tabGroups",permalink:"/docs/tags/tab-groups"}],version:"current",lastUpdatedBy:"Lacorda",lastUpdatedAt:1704274640,formattedLastUpdatedAt:"2024\u5e741\u67083\u65e5",sidebarPosition:6,frontMatter:{description:"tabGroups",slug:"/16c9dc5",tags:["tabGroups"]},sidebar:"tutorialSidebar",previous:{title:"tabs \u9009\u9879\u5361",permalink:"/docs/e6c29c4"},next:{title:"storage \u5b58\u50a8",permalink:"/docs/2132d60"}},p={},c=[{value:"\u6743\u9650\u8bbe\u7f6e",id:"\u6743\u9650\u8bbe\u7f6e",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:3},{value:"get() \u68c0\u7d22\u7ec4\u7684\u8be6\u7ec6\u4fe1\u606f",id:"get-\u68c0\u7d22\u7ec4\u7684\u8be6\u7ec6\u4fe1\u606f",level:4},{value:"query() \u83b7\u53d6\u7ec4",id:"query-\u83b7\u53d6\u7ec4",level:3},{value:"move() \u79fb\u52a8\u9009\u62e9\u5361\u7ec4",id:"move-\u79fb\u52a8\u9009\u62e9\u5361\u7ec4",level:3},{value:"update() \u4fee\u6539\u7ec4\u7684\u5c5e\u6027",id:"update-\u4fee\u6539\u7ec4\u7684\u5c5e\u6027",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:3},{value:"onCreated \u521b\u5efa\u4e8b\u4ef6",id:"oncreated-\u521b\u5efa\u4e8b\u4ef6",level:4},{value:"onMoved \u79fb\u52a8\u4e8b\u4ef6",id:"onmoved-\u79fb\u52a8\u4e8b\u4ef6",level:4},{value:"onRemoved \u79fb\u9664\u4e8b\u4ef6",id:"onremoved-\u79fb\u9664\u4e8b\u4ef6",level:4},{value:"onUpdated \u66f4\u65b0\u4e8b\u4ef6",id:"onupdated-\u66f4\u65b0\u4e8b\u4ef6",level:4}],d={toc:c},s="wrapper";function i(e){let{components:r,...n}=e;return(0,t.yg)(s,(0,o.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"tabgroups-\u9009\u9879\u5361\u7ec4"},"tabGroups \u9009\u9879\u5361\u7ec4"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://developer.chrome.com/docs/extensions/reference/tabGroups"},"\u5b98\u65b9\u6587\u6863")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u5141\u8bb8\u7528\u6237\u521b\u5efa\u3001\u83b7\u53d6\u3001\u66f4\u65b0\u3001\u79fb\u9664\u9009\u9879\u5361\u7ec4")),(0,t.yg)("h3",{id:"\u6743\u9650\u8bbe\u7f6e"},"\u6743\u9650\u8bbe\u7f6e"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'"permissions": [\n  "tabGroups"\n]\n')),(0,t.yg)("h3",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,t.yg)("h4",{id:"get-\u68c0\u7d22\u7ec4\u7684\u8be6\u7ec6\u4fe1\u606f"},"get() \u68c0\u7d22\u7ec4\u7684\u8be6\u7ec6\u4fe1\u606f"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"type TabGroup = {\n  // \u7ec4\u7684ID\u3002\u7ec4ID\u5728\u6d4f\u89c8\u5668\u4f1a\u8bdd\u4e2d\u662f\u552f\u4e00\u7684\u3002\n  id: number;\n  // \u7ec4\u7684\u6807\u9898\u3002\n  title: string;\n  // \u7ec4\u7684\u989c\u8272\u3002\n  color: Color;\n  // \u7ec4\u662f\u5426\u5df2\u6298\u53e0\u3002\n  collapsed: boolean;\n  // \u7ec4\u7684\u7a97\u53e3ID\u3002\n  windowId: number;\n}\nchrome.tabGroups.get(\n  groupId: number,\n  callback?: (group: TabGroup) => void,\n)\n")),(0,t.yg)("h3",{id:"query-\u83b7\u53d6\u7ec4"},"query() \u83b7\u53d6\u7ec4"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u83b7\u53d6\u5177\u6709\u6307\u5b9a\u5c5e\u6027\u7684\u6240\u6709\u7ec4\uff0c\u5982\u679c\u672a\u6307\u5b9a\u4efb\u4f55\u5c5e\u6027\uff0c\u5219\u83b7\u53d6\u6240\u6709\u7ec4")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"chrome.tabGroups.query(\n  queryInfo: {\n    // \u7ec4\u7684\u6807\u9898\u3002\n    title: string;\n    // \u7ec4\u7684\u989c\u8272\u3002\n    color: Color;\n    // \u7ec4\u662f\u5426\u5df2\u6298\u53e0\u3002\n    collapsed: boolean;\n    // \u7ec4\u7684\u7a97\u53e3ID\u3002\n    windowId: number;\n  },\n  callback?: (result: TabGroup[]) => void,\n)\n")),(0,t.yg)("h3",{id:"move-\u79fb\u52a8\u9009\u62e9\u5361\u7ec4"},"move() \u79fb\u52a8\u9009\u62e9\u5361\u7ec4"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u5c06\u7ec4\u53ca\u5176\u6240\u6709\u9009\u9879\u5361 \u79fb\u52a8\u5230 \u5176\u7a97\u53e3\u5185\u6216\u65b0\u7a97\u53e3")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"chrome.tabGroups.move(\n  groupId: number,\n  moveProperties: {\n    // \u8981\u5c06\u7ec4\u79fb\u52a8\u5230\u7684\u4f4d\u7f6e\u3002\u7528\u4e8e -1 \u5c06\u7ec4\u653e\u7f6e\u5728\u7a97\u53e3\u7684\u672b\u5c3e\u3002\n    index: number,\n    // \u8981\u5c06\u7ec4\u79fb\u52a8\u5230\u7684\u7a97\u53e3\u3002\u9ed8\u8ba4\u4e3a\u7ec4\u5f53\u524d\u6240\u5728\u7684\u7a97\u53e3\n    windowId: number,\n  },\n  callback?: (group: TabGroup) => void,\n)\n")),(0,t.yg)("h3",{id:"update-\u4fee\u6539\u7ec4\u7684\u5c5e\u6027"},"update() \u4fee\u6539\u7ec4\u7684\u5c5e\u6027"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"chrome.tabGroups.update(\n  groupId: number,\n  updateProperties: {\n    // \u7ec4\u7684\u6807\u9898\u3002\n    title: string;\n    // \u7ec4\u7684\u989c\u8272\u3002\n    color: Color;\n    // \u7ec4\u662f\u5426\u5df2\u6298\u53e0\u3002\n    collapsed: boolean;\n  },\n  callback?: (group: TabGroup) => void,\n)\n")),(0,t.yg)("h3",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,t.yg)("h4",{id:"oncreated-\u521b\u5efa\u4e8b\u4ef6"},"onCreated \u521b\u5efa\u4e8b\u4ef6"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u5f53\u7ec4\u88ab\u521b\u5efa\u65f6\u89e6\u53d1")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"// background.js\nchrome.tabGroups.onCreated.addListener((group: TabGroup) => {\n  console.log('\ud83c\udf44  background: >>>>>>>>>>>>>>>>>> \u76d1\u542c\u521b\u5efa\u4e8b\u4ef6', Date.now(), group);\n});\n")),(0,t.yg)("h4",{id:"onmoved-\u79fb\u52a8\u4e8b\u4ef6"},"onMoved \u79fb\u52a8\u4e8b\u4ef6"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"// background.js\nchrome.tabGroups.onMoved.addListener((group: TabGroup) => {\n  console.log('\ud83c\udf44  background: >>>>>>>>>>>>>>>>>> \u76d1\u542c\u79fb\u52a8\u4e8b\u4ef6', Date.now(), group);\n});\n")),(0,t.yg)("h4",{id:"onremoved-\u79fb\u9664\u4e8b\u4ef6"},"onRemoved \u79fb\u9664\u4e8b\u4ef6"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"// background.js\nchrome.tabGroups.onRemoved.addListener((group: TabGroup) => {\n  console.log('\ud83c\udf44  background: >>>>>>>>>>>>>>>>>> \u76d1\u542c\u79fb\u9664\u4e8b\u4ef6', Date.now(), group);\n});\n")),(0,t.yg)("h4",{id:"onupdated-\u66f4\u65b0\u4e8b\u4ef6"},"onUpdated \u66f4\u65b0\u4e8b\u4ef6"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"// background.js\nchrome.tabGroups.onUpdated.addListener((group: TabGroup) => {\n  console.log('\ud83c\udf44  background: >>>>>>>>>>>>>>>>>> \u76d1\u542c\u66f4\u65b0\u4e8b\u4ef6', Date.now(), group);\n});\n")))}i.isMDXComponent=!0}}]);