"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[5708],{58860:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(37953);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),y=a,d=s["".concat(p,".").concat(y)]||s[y]||g[y]||l;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},56424:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(75890),a=(r(37953),r(58860));const l={tags:["\u5176\u5b83"],description:"\u5176\u5b83",slug:"/8c5445c"},i=void 0,o={unversionedId:"\u672a\u6574\u7406/Javascript\u7bc7/\u5176\u5b83",id:"\u672a\u6574\u7406/Javascript\u7bc7/\u5176\u5b83",title:"\u5176\u5b83",description:"\u5176\u5b83",source:"@site/01.docs/99.\u672a\u6574\u7406/01.Javascript\u7bc7/04.\u5176\u5b83.md",sourceDirName:"99.\u672a\u6574\u7406/01.Javascript\u7bc7",slug:"/8c5445c",permalink:"/docs/8c5445c",draft:!1,editUrl:"https://github.com/lacorda/lacorda.github.io/blob/master/docs/01.docs/99.\u672a\u6574\u7406/01.Javascript\u7bc7/04.\u5176\u5b83.md",tags:[{label:"\u5176\u5b83",permalink:"/docs/tags/\u5176\u5b83"}],version:"current",lastUpdatedBy:"Lacorda",lastUpdatedAt:1704275126,formattedLastUpdatedAt:"2024\u5e741\u67083\u65e5",sidebarPosition:4,frontMatter:{tags:["\u5176\u5b83"],description:"\u5176\u5b83",slug:"/8c5445c"},sidebar:"tutorialSidebar",previous:{title:"\u4f5c\u7528\u57df\u4e0e\u6267\u884c\u4e0a\u4e0b\u6587",permalink:"/docs/fe97d62"},next:{title:"ES6",permalink:"/docs/0d22e0d"}},p={},u=[{value:"\u4e00\u3001\u8bf4\u8bf4\u4f60\u5bf9event loop\u7684\u7406\u89e3",id:"\u4e00\u8bf4\u8bf4\u4f60\u5bf9event-loop\u7684\u7406\u89e3",level:2},{value:"JS\u662f\u95e8\u5355\u7ebf\u7a0b\u3001\u975e\u963b\u585e\u8bed\u8a00",id:"js\u662f\u95e8\u5355\u7ebf\u7a0b\u975e\u963b\u585e\u8bed\u8a00",level:3},{value:"Event loop\uff1a",id:"event-loop",level:3},{value:"\u4e8c\u3001\u67ef\u91cc\u5316",id:"\u4e8c\u67ef\u91cc\u5316",level:2},{value:"\u4e09\u3001\u8bf4\u8bf4 JavaScript \u4e2d\u5185\u5b58\u6cc4\u6f0f\u7684\u51e0\u79cd\u60c5\u51b5\uff1f",id:"\u4e09\u8bf4\u8bf4-javascript-\u4e2d\u5185\u5b58\u6cc4\u6f0f\u7684\u51e0\u79cd\u60c5\u51b5",level:2},{value:"\u56db\u3001\u4ec0\u4e48\u662f\u4e8b\u4ef6\u4ee3\u7406\uff1f\u6709\u54ea\u4e9b\u5e94\u7528\u573a\u666f\uff1f",id:"\u56db\u4ec0\u4e48\u662f\u4e8b\u4ef6\u4ee3\u7406\u6709\u54ea\u4e9b\u5e94\u7528\u573a\u666f",level:2}],c={toc:u},s="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u4e00\u8bf4\u8bf4\u4f60\u5bf9event-loop\u7684\u7406\u89e3"},"\u4e00\u3001\u8bf4\u8bf4\u4f60\u5bf9event loop\u7684\u7406\u89e3"),(0,a.yg)("h3",{id:"js\u662f\u95e8\u5355\u7ebf\u7a0b\u975e\u963b\u585e\u8bed\u8a00"},"JS\u662f\u95e8\u5355\u7ebf\u7a0b\u3001\u975e\u963b\u585e\u8bed\u8a00"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5355\u7ebf\u7a0b\uff1ajs\u662f\u57fa\u4e8e\u6d4f\u89c8\u5668\u7684\uff0c\u591a\u7ebf\u7a0b\u64cd\u4f5cdom\u53ef\u80fd\u5f15\u8d77\u6df7\u4e71"),(0,a.yg)("li",{parentName:"ul"},"\u975e\u963b\u585e\uff1a\u57fa\u4e8eevent loop\u673a\u5236")),(0,a.yg)("h3",{id:"event-loop"},"Event loop\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5c06\u540c\u6b65\u4efb\u52a1\u4f9d\u6b21\u653e\u5165\u6267\u884c\u6808\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u8fdb\u884c\u5f02\u6b65\u4efb\u52a1\u65f6\uff0c\u5c06\u5f02\u6b65\u4efb\u52a1\u7684\u56de\u8c03\u52a0\u5165\u4e8b\u4ef6\u961f\u5217, \u5e76\u4e0d\u7acb\u523b\u6267\u884c\uff0c\u800c\u662f\u7ee7\u7eed\u6267\u884c\u6267\u884c\u6808\u4e2d\u7684\u5176\u4ed6\u4efb\u52a1\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u7b49\u6267\u884c\u6808\u4e2d\u7684\u6240\u6709\u4efb\u52a1\u90fd\u6267\u884c\u5b8c\u6bd5\uff0c\u518d\u4ece\u4e8b\u4ef6\u961f\u5217\u4e2d\u53d6\u51fa\u5f02\u6b65\u4efb\u52a1"),(0,a.yg)("li",{parentName:"ul"},"\u5f02\u6b65\u4efb\u52a1\u53c8\u5206\u4e3a\u5fae\u4efb\u52a1 \u548c \u5b8f\u4efb\u52a1\uff0c\u6309\u4e8b\u4ef6\u961f\u5217\uff0c\u4f18\u5148\u53d6\u51fa\u5fae\u4efb\u52a1\uff0c\u5c06\u5f53\u524d\u4efb\u52a1\u7684\u56de\u8c03\u4efb\u52a1\u653e\u5230\u6267\u884c\u6808"),(0,a.yg)("li",{parentName:"ul"},"\u7b49\u6267\u884c\u6808\u4e2d\u7684\u6240\u6709\u4efb\u52a1\u90fd\u6267\u884c\u5b8c\u6bd5\uff0c\u518d\u4ece\u4e8b\u4ef6\u961f\u5217\u4e2d\u53d6\u51fa\u5f02\u6b65\u4efb\u52a1\uff0c\u4ee5\u6b64\u7c7b\u63a8\uff0c\u5f62\u6210\u4e00\u4e2a\u5faa\u73af\uff0c\u53ea\u5230\u6267\u884c\u6808\u4e2d\u6240\u6709\u4efb\u52a1\u90fd\u6267\u884c\u5b8c\u6bd5")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u5fae\u4efb\u52a1\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"Promise"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"MutationObserver"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"postMessage"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"node"),"\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"process.nextTick")),(0,a.yg)("p",{parentName:"admonition"},"\u5b8f\u4efb\u52a1\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"settimeout"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"setInterval"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"requestAnimationFrame"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"I/O"),"\u64cd\u4f5c")),(0,a.yg)("h2",{id:"\u4e8c\u67ef\u91cc\u5316"},"\u4e8c\u3001\u67ef\u91cc\u5316"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u7406\u89e3\uff1a\u901a\u8fc7\u95ed\u5305\u5c06\u53c2\u6570\u4fdd\u5b58\u8d77\u6765\uff0c\u7b49\u5230\u53c2\u6570\u6570\u91cf\u8fbe\u5230\u51fd\u6570\u7684\u5f62\u53c2\u65f6\uff0c\u5f00\u59cb\u6267\u884c\u51fd\u6570"),(0,a.yg)("li",{parentName:"ul"},"\u5b9e\u73b0")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"var curry = fn => {\n  var judge = (...args) => {\n    if ((args.length === fn.length) {\n      return fn(...args);\n    }\n    return (...arg) => judge(...args, ...arg);\n  }\n}\n")),(0,a.yg)("h2",{id:"\u4e09\u8bf4\u8bf4-javascript-\u4e2d\u5185\u5b58\u6cc4\u6f0f\u7684\u51e0\u79cd\u60c5\u51b5"},"\u4e09\u3001\u8bf4\u8bf4 JavaScript \u4e2d\u5185\u5b58\u6cc4\u6f0f\u7684\u51e0\u79cd\u60c5\u51b5\uff1f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5185\u5b58\u6cc4\u6f0f\uff1a\u7531\u4e8e\u758f\u5ffd\u6216\u9519\u8bef\u9020\u6210\u7a0b\u5e8f\u672a\u80fd\u91ca\u653e\u5df2\u7ecf\u4e0d\u518d\u4f7f\u7528\u7684\u5185\u5b58"),(0,a.yg)("li",{parentName:"ul"},"js\u5e26\u81ea\u52a8\u5783\u573e\u56de\u6536\u673a\u5236\uff0c\u4f1a\u5b9a\u671f\u627e\u51fa\u4e0d\u5728\u7ee7\u7eed\u4f7f\u7528\u7684\u53d8\u91cf\uff0c\u91ca\u653e\u5185\u5b58"),(0,a.yg)("li",{parentName:"ul"},"\u5e38\u89c1\u7684\u5185\u5b58\u6cc4\u6f0f\uff1a",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u6ca1\u7528\u7684\u5168\u5c40\u53d8\u91cf"),(0,a.yg)("li",{parentName:"ul"},"\u672a\u79fb\u9664\u7684\u5b9a\u65f6\u5668"),(0,a.yg)("li",{parentName:"ul"},"\u4e00\u4e9b\u4e0d\u5408\u7406\u7684\u95ed\u5305"),(0,a.yg)("li",{parentName:"ul"},"\u79fb\u9664DOM\u5143\u7d20\uff0c\u4f46\u672a\u79fb\u9664\u5bf9\u5143\u7d20\u7684\u5f15\u7528 ")))),(0,a.yg)("h2",{id:"\u56db\u4ec0\u4e48\u662f\u4e8b\u4ef6\u4ee3\u7406\u6709\u54ea\u4e9b\u5e94\u7528\u573a\u666f"},"\u56db\u3001\u4ec0\u4e48\u662f\u4e8b\u4ef6\u4ee3\u7406\uff1f\u6709\u54ea\u4e9b\u5e94\u7528\u573a\u666f\uff1f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u628a\u4e00\u4e2a\u6216\u8005\u4e00\u7ec4\u5143\u7d20\u7684\u4e8b\u4ef6\u59d4\u6258\u5230\u5b83\u7684\u7236\u5c42\u6216\u8005\u66f4\u5916\u5c42\u5143\u7d20\u4e0a\uff0c\u771f\u6b63\u7ed1\u5b9a\u4e8b\u4ef6\u7684\u662f\u5916\u5c42\u5143\u7d20\uff0c\u800c\u4e0d\u662f\u76ee\u6807\u5143\u7d20"),(0,a.yg)("li",{parentName:"ul"},"\u5f53\u4e8b\u4ef6\u54cd\u5e94\u5230\u76ee\u6807\u5143\u7d20\u4e0a\u65f6\uff0c\u4f1a\u901a\u8fc7\u4e8b\u4ef6\u5192\u6ce1\u673a\u5236\u4ece\u800c\u89e6\u53d1\u5b83\u7684\u5916\u5c42\u5143\u7d20\u7684\u7ed1\u5b9a\u4e8b\u4ef6\u4e0a\uff0c\u7136\u540e\u5728\u5916\u5c42\u5143\u7d20\u4e0a\u53bb\u6267\u884c\u51fd\u6570"),(0,a.yg)("li",{parentName:"ul"},"\u6bd4\u5982\uff0c\u4e8b\u4ef6\u7ed1\u5b9a\u5728ul\u4e0a\uff0c\u800c\u76ee\u6807\u5143\u7d20\u662fli\uff0c\u70b9\u51fbli\u5143\u7d20\u65f6\uff0c\u901a\u8fc7\u4e8b\u4ef6\u5192\u6ce1\uff0c\u89e6\u53d1ul\u7684\u4e8b\u4ef6\u56de\u8c03\uff0c\u518d\u901a\u8fc7event.target\u6765\u5224\u65ad\u54cd\u5e94\u7684\u76ee\u6807\u5143\u7d20"),(0,a.yg)("li",{parentName:"ul"},"\u597d\u5904\uff1a\u51cf\u5c11\u7ed1\u5b9a\u66f4\u591a\u5143\u7d20\u4e8b\u4ef6\uff0c\u63d0\u5347\u6027\u80fd")))}g.isMDXComponent=!0}}]);