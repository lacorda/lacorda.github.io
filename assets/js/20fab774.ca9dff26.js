"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[1564],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},o="Set/Map",p={unversionedId:"ES6+\u7bc7/Set-Map",id:"ES6+\u7bc7/Set-Map",title:"Set/Map",description:"Set",source:"@site/topic/02.ES6+\u7bc7/01.Set-Map.md",sourceDirName:"02.ES6+\u7bc7",slug:"/ES6+\u7bc7/Set-Map",permalink:"/topic/ES6+\u7bc7/Set-Map",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u4ef6",permalink:"/topic/Javascript\u7bc7/\u4e8b\u4ef6"},next:{title:"Promise",permalink:"/topic/ES6+\u7bc7/Promise"}},i={},c=[{value:"Set",id:"set",level:2},{value:"Map",id:"map",level:2},{value:"WeakSet / WeakMap",id:"weakset--weakmap",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setmap"},"Set/Map"),(0,a.kt)("h2",{id:"set"},"Set"),(0,a.kt)("p",null,"\u5b83\u7c7b\u4f3c\u4e8e\u6570\u7ec4\uff0c\u4f46\u662f\u6210\u5458\u7684\u503c\u90fd\u662f\u552f\u4e00\u7684\uff0c\u6ca1\u6709\u91cd\u590d\u7684\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const s = new Set();\n\n[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));\n\nfor (let i of s) {\n  console.log(i);\n}\n// 2 3 5 4\n")),(0,a.kt)("p",null,"Set \u51fd\u6570\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u6570\u7ec4\uff08\u6216\u8005\u5177\u6709 iterable \u63a5\u53e3\u7684\u5176\u4ed6\u6570\u636e\u7ed3\u6784\uff09\u4f5c\u4e3a\u53c2\u6570\uff0c\u7528\u6765\u521d\u59cb\u5316\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const set = new Set([1, 2, 3, 4, 4]);\n[...set]\n// [1, 2, 3, 4] \u5b9e\u73b0\u4e86\u6570\u7ec4\u7684\u53bb\u91cd\n")),(0,a.kt)("p",null,"Set \u5b9e\u4f8b\u7684\u65b9\u6cd5\u5206\u4e3a\u4e24\u5927\u7c7b\uff1a\u64cd\u4f5c\u65b9\u6cd5\uff08\u7528\u4e8e\u64cd\u4f5c\u6570\u636e\uff09\u548c\u904d\u5386\u65b9\u6cd5\uff08\u7528\u4e8e\u904d\u5386\u6210\u5458\uff09\u3002\u4e0b\u9762\u5148\u4ecb\u7ecd\u56db\u4e2a\u64cd\u4f5c\u65b9\u6cd5\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"add(value)"),"\uff1a\u6dfb\u52a0\u67d0\u4e2a\u503c\uff0c\u8fd4\u56de Set \u7ed3\u6784\u672c\u8eab\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delete(value)"),"\uff1a\u5220\u9664\u67d0\u4e2a\u503c\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5220\u9664\u662f\u5426\u6210\u529f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"has(value)"),"\uff1a\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u8be5\u503c\u662f\u5426\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"Set"),"\u7684\u6210\u5458\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clear()"),"\uff1a\u6e05\u9664\u6240\u6709\u6210\u5458\uff0c\u6ca1\u6709\u8fd4\u56de\u503c\u3002")),(0,a.kt)("h2",{id:"map"},"Map"),(0,a.kt)("p",null,"\u7c7b\u4f3c\u4e8e\u5bf9\u8c61\uff0c\u662f\u952e\u503c\u5bf9\u7684\u96c6\u5408\uff0c\u4f46\u666e\u901a\u7684\u5bf9\u8c61\u7684\u952e\u53ea\u80fd\u662f\u5b57\u7b26\u4e32\uff0cMap\u7684\u952e\u53ef\u4ee5\u4e0d\u662f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const m = new Map();\nconst o = {p: 'Hello World'};\n\nm.set(o, 'content')\nm.get(o) // \"content\"\n\nm.has(o) // true\nm.delete(o) // true\nm.has(o) // false\n")),(0,a.kt)("p",null,"\u6bd4\u5982\u8fd9\u91cc\uff0c Map\u5b9e\u4f8bm\u7684\u4e00\u4e2a\u952e\u662f\u5bf9\u8c61o\uff0c\u952e\u503c\u4e3a'content'\u3002"),(0,a.kt)("h2",{id:"weakset--weakmap"},"WeakSet / WeakMap"),(0,a.kt)("p",null,"WeakSet \u7684\u6210\u5458\u53ea\u80fd\u662f\u5bf9\u8c61\u3002\u5176\u6b21\uff0cWeakSet \u4e2d\u7684\u5bf9\u8c61\u90fd\u662f\u5f31\u5f15\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WeakMap"),"\u53ea\u63a5\u53d7\u5bf9\u8c61\u4f5c\u4e3a\u952e\u540d\u3002\u5176\u6b21\uff0cWeakMap \u4e2d\u7684\u952e\u540d\u6240\u6307\u5411\u7684\u5bf9\u8c61\u90fd\u662f\u5f31\u5f15\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f31\u5f15\u7528")),(0,a.kt)("p",null,"\u6307\u7684\u662f\u4e0d\u88ab\u5728\u5f15\u7528\u8ba1\u6570\u4e2d\u88ab\u8ba1\u6570\u7684\u5f15\u7528\u3002"))}s.isMDXComponent=!0}}]);