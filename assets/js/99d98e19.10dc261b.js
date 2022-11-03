"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[5853],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=c(t),g=a,m=y["".concat(p,".").concat(g)]||y[g]||u[g]||o;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7366:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={description:"Proxy",slug:"/483b842",tags:["Proxy"]},i=void 0,l={unversionedId:"ES6+\u7bc7/Proxy",id:"ES6+\u7bc7/Proxy",title:"Proxy",description:"Proxy",source:"@site/99.interview/02.ES6+\u7bc7/04.Proxy.md",sourceDirName:"02.ES6+\u7bc7",slug:"/483b842",permalink:"/interview/483b842",draft:!1,tags:[{label:"Proxy",permalink:"/interview/tags/proxy"}],version:"current",sidebarPosition:4,frontMatter:{description:"Proxy",slug:"/483b842",tags:["Proxy"]},sidebar:"tutorialSidebar",previous:{title:"Generator",permalink:"/interview/8d72fb1"},next:{title:"Reflect",permalink:"/interview/3c7dd63"}},p={},c=[{value:"\u4ee3\u7406\u5bf9\u8c61",id:"\u4ee3\u7406\u5bf9\u8c61",level:2},{value:"\u4ee3\u7406\u51fd\u6570",id:"\u4ee3\u7406\u51fd\u6570",level:2}],s={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Proxy \u53ef\u4ee5\u7406\u89e3\u6210\uff0c\u5728\u76ee\u6807\u5bf9\u8c61\u4e4b\u524d\u67b6\u8bbe\u4e00\u5c42\u201c\u62e6\u622a\u201d\uff0c\u5916\u754c\u5bf9\u8be5\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c\u90fd\u5fc5\u987b\u5148\u901a\u8fc7\u8fd9\u5c42\u62e6\u622a\uff0c\u56e0\u6b64\u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\uff0c\u53ef\u4ee5\u5bf9\u5916\u754c\u7684\u8bbf\u95ee\u8fdb\u884c\u8fc7\u6ee4\u548c\u6539\u5199\u3002Proxy \u8fd9\u4e2a\u8bcd\u7684\u539f\u610f\u662f\u4ee3\u7406\uff0c\u7528\u5728\u8fd9\u91cc\u8868\u793a\u7531\u5b83\u6765\u201c\u4ee3\u7406\u201d\u67d0\u4e9b\u64cd\u4f5c\uff0c\u53ef\u4ee5\u8bd1\u4e3a\u201c\u4ee3\u7406\u5668\u201d\u3002"),(0,a.kt)("h2",{id:"\u4ee3\u7406\u5bf9\u8c61"},"\u4ee3\u7406\u5bf9\u8c61"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let handleer = {\n    get: function (target, propKey, receiver) {\n        console.log(target, propKey, receiver)\n        console.log(target[propKey])\n    },\n    set: function (target, propKey, newValue, receiver) {\n        target[propKey] = newValue\n    }\n}\n\nlet proxy = new Proxy({\n    name: 'akara',\n}, handler)\n\nproxy.name\n// \u8f93\u51fa\n// {name: 'akara'}   \"name\"   Proxy {name: 'akara'}\n// 'akara'\n")),(0,a.kt)("h2",{id:"\u4ee3\u7406\u51fd\u6570"},"\u4ee3\u7406\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"handler = {\n    get: function (target, propKey, receiver) {\n        return target[propKey]\n    },\n\n    apply: function (target, myThis, args) {\n        console.log(target, myThis, args)\n        target.apply(myThis, args)\n    },\n\n    construct(target, args) {\n        return new target(...args)\n    }\n}\n\nlet proxy = new Proxy(function (a, b) {\n    this.name = a\n    this.age = b\n}, handler)\n\nproxy('akara', 20) \n// \u0192 (a, b) {\n//     this.name = a\n//     this.age = b\n//     console.log(a, b)\n// } undefined (2)\xa0[\"akara\", 20]\n\nproxy.call({}, 'akara', 20) \n// \u0192 (a, b) {\n//     this.name = a\n//     this.age = b\n//     console.log(a, b)\n// } {} (2)\xa0[\"akara\", 20]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"get(target, propKey, receiver)"),"\uff1a\u62e6\u622a\u5bf9\u8c61\u5c5e\u6027\u7684\u8bfb\u53d6\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"proxy.foo"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"proxy['foo']"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"set(target, propKey, value, receiver)"),"\uff1a\u62e6\u622a\u5bf9\u8c61\u5c5e\u6027\u7684\u8bbe\u7f6e\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"proxy.foo = v"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"proxy['foo'] = v"),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"apply(target, object, args)"),"\uff1a\u62e6\u622a Proxy \u5b9e\u4f8b\u4f5c\u4e3a\u51fd\u6570\u8c03\u7528\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"proxy(...args)"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"proxy.call(object, ...args)"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"proxy.apply(...)"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"construct(target, args)"),"\uff1a\u62e6\u622a Proxy \u5b9e\u4f8b\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u8c03\u7528\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"new proxy(...args)"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://es6.ruanyifeng.com/#docs/proxy#Proxy-%E5%AE%9E%E4%BE%8B%E7%9A%84%E6%96%B9%E6%B3%95"},"\u5176\u4ed6\u7684\u62e6\u622a\u64cd\u4f5c"))))}u.isMDXComponent=!0}}]);