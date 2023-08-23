"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[9569],{3905:(r,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var t=n(67294);function a(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function i(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function l(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function o(r,e){if(null==r)return{};var n,t,a=function(r,e){if(null==r)return{};var n,t,a={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(a[n]=r[n])}return a}var c=t.createContext({}),u=function(r){var e=t.useContext(c),n=e;return r&&(n="function"==typeof r?r(e):l(l({},e),r)),n},p=function(r){var e=u(r.components);return t.createElement(c.Provider,{value:e},r.children)},s="mdxType",f={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(r,e){var n=r.components,a=r.mdxType,i=r.originalType,c=r.parentName,p=o(r,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||i;return n?t.createElement(m,l(l({ref:e},p),{},{components:n})):t.createElement(m,l({ref:e},p))}));function m(r,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=r,o[s]="string"==typeof r?r:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69401:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=n(87462),a=(n(67294),n(3905));const i={tags:["\u6570\u7ec4"],description:"\u6570\u7ec4",slug:"/d48e3de"},l=void 0,o={unversionedId:"Javascript\u7bc7/\u6570\u7ec4",id:"Javascript\u7bc7/\u6570\u7ec4",title:"\u6570\u7ec4",description:"\u6570\u7ec4",source:"@site/99.interview/01.Javascript\u7bc7/02.\u6570\u7ec4.mdx",sourceDirName:"01.Javascript\u7bc7",slug:"/d48e3de",permalink:"/interview/d48e3de",draft:!1,tags:[{label:"\u6570\u7ec4",permalink:"/interview/tags/\u6570\u7ec4"}],version:"current",sidebarPosition:2,frontMatter:{tags:["\u6570\u7ec4"],description:"\u6570\u7ec4",slug:"/d48e3de"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/interview/b54da20"},next:{title:"\u5bf9\u8c61",permalink:"/interview/22ec850"}},c={},u=[{value:"\u6570\u7ec4\u5224\u65ad",id:"\u6570\u7ec4\u5224\u65ad",level:2},{value:"\u6570\u7ec4\u8f6c\u5316",id:"\u6570\u7ec4\u8f6c\u5316",level:2},{value:"\u6570\u7ec4\u53bb\u91cd",id:"\u6570\u7ec4\u53bb\u91cd",level:2},{value:"\u6570\u7ec4\u6241\u5e73\u5316",id:"\u6570\u7ec4\u6241\u5e73\u5316",level:2},{value:"\u9012\u5f52",id:"\u9012\u5f52",level:3},{value:"Reduce + \u9012\u5f52",id:"reduce--\u9012\u5f52",level:3},{value:"reduce \u5b9e\u73b0 map",id:"reduce-\u5b9e\u73b0-map",level:2},{value:"\u6570\u7ec4\u4e71\u5e8f",id:"\u6570\u7ec4\u4e71\u5e8f",level:2},{value:"\u5176\u4ed6\u5e38\u7528\u65b9\u6cd5",id:"\u5176\u4ed6\u5e38\u7528\u65b9\u6cd5",level:2}],p={toc:u},s="wrapper";function f(r){let{components:e,...n}=r;return(0,a.kt)(s,(0,t.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6570\u7ec4\u5224\u65ad"},"\u6570\u7ec4\u5224\u65ad"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'var arr = []\n\narr instanceof Array\n\nArray.prototype.isPrototypeOf(arr)\n\narr.constructor === Array\n\nObject.prototype.toString.call(arr) === "[object Array]"\n\nArray.isArray(arr)\n')),(0,a.kt)("h2",{id:"\u6570\u7ec4\u8f6c\u5316"},"\u6570\u7ec4\u8f6c\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var set = new Set([1, 2])\n\n// \u7c7b\u6570\u7ec4\u5bf9\u8c61\u4ee5\u53ca\u90e8\u7f72\u4e86\u904d\u5386\u5668\u63a5\u53e3\u7684\u5bf9\u8c61\nArray.from(set)\n\n[...set]\n\n// \u53ea\u80fd\u8f6c\u5316\u7c7b\u6570\u7ec4\u5bf9\u8c61 (arguments\u548cNodelist)\nArray.prototype.slice.call(arguments)\n")),(0,a.kt)("h2",{id:"\u6570\u7ec4\u53bb\u91cd"},"\u6570\u7ec4\u53bb\u91cd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var arr = [1, 2, 2, 4, 9, 6, 7, 5, 2, 3, 5, 6, 5]\n\n\n// Set\nArray.from(new Set(arr))\n\n\n//\u7f3a\u70b9\uff1a indexOf\u6216\u8005includes\u90fd\u662f\u904d\u5386\u6570\u7ec4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u9ad8\nfunction unique(arr) {\n    let newArr = []\n    for (let i = 0; i < arr.length; i++) {\n        let item = arr[i]\n        if (!newArr.includes(item)) {\n            newArr.push(item)\n        }\n    }\n    return newArr\n}\n\n// \u628a\u6570\u7ec4\u7684\u503c\u653e\u5728\u5bf9\u8c61\u7684\u952e\u503c\u91cc\uff0c \u5bf9\u4e8e \u6570\u7ec4\u4e2d\u7684 1 \u548c \u201c1\u201d \uff0c \u8981\u518d\u4e00\u6b21\u5bf9\u6bd4\n// \u7a7a\u95f4\u590d\u6742\u5ea6\u9ad8\uff0c \u6240\u8c13\u7684\u7a7a\u95f4\u6362\u65f6\u95f4\nfunction unique(arr) {\n    let newArr = []\n    let obj = {}\n    for (let i = 0; i < arr.length; i++) {\n        let item = arr[i]\n        let type = typeof item\n        if (!obj[item]) {\n            newArr.push(item)\n            obj[item] = [type]\n        } else if (!obj[item].includes(type)){\n            newArr.push(item)\n            obj[item].push(type)\n        }\n    }\n    return newArr\n}\n\n// \u6392\u5e8f\u6cd5\uff0c\u5148\u7528sort\u6392\u5e8f\u518d\u6bd4\u8f83\n// \u76f8\u6bd4\u524d\u4e24\u79cd\uff0c\u65f6\u95f4\u548c\u7a7a\u95f4\u7528\u7684\u90fd\u6ca1\u90a3\u4e48\u591a\n// \u7f3a\u70b9\uff1a\u6392\u5e8f\u4e86\nfunction unique(arr) {\n    arr.sort()\n    let newArr = [arr[0]]\n    for (let i = 0; i < arr.length; i++) {\n        let item = arr[i]\n        if (newArr[newArr.length - 1] !== item) {\n            newArr.push(item)\n        }\n    }\n    return newArr\n}\n")),(0,a.kt)("h2",{id:"\u6570\u7ec4\u6241\u5e73\u5316"},"\u6570\u7ec4\u6241\u5e73\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"flat(Infinity)\n\nvar arr = [1, 2, [3, [4, 5]]]\n\narr.flat(Infinity)\n\nJSON.stringify + \u6b63\u5219 + JSON.parse\n\nvar arr = [1, 2, [3, [4, 5]]]\n\nfunction flat(arr) {\n    let str = JSON.stringify(arr).replace(/[\\[|\\]]/g, '')\n    str = `[${str}]`\n    return JSON.parse(str)\n}\n\n\n")),(0,a.kt)("h3",{id:"\u9012\u5f52"},"\u9012\u5f52"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function flatter(arr) {\n    let newArr = []\n    arr.forEach(item => {\n        if (Array.isArray(item)) {\n            // newArr.push(...flatter(item))\n            newArr = newArr.concat(flatter(item))\n        }\n        else {\n            newArr.push(item)\n        }\n    })\n    return newArr\n}\n")),(0,a.kt)("h3",{id:"reduce--\u9012\u5f52"},"Reduce + \u9012\u5f52"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var arr = [1, 2, [3, [4, 5]]]\nfunction flatter(arr) {\n    return arr.reduce((prev, next) => {\n        return prev.concat(Array.isArray(next) ? flatter(next) : next)\n    }, [])\n}\n\n[].concat(...arr)\n\nvar arr = [1, [2, [3, 4]]];\nconsole.log([].concat(...arr)); // [1, 2, [3, 4]]\n// \u8be5\u64cd\u4f5c\u53ef\u4ee5\u62cd\u5e73\u4e00\u5c42\n\nvar arr = [1, [2, [3, 4]]];\n\nfunction flatten(arr) {\n\n    while (arr.some(item => Array.isArray(item))) {\n        arr = [].concat(...arr);\n    }\n\n    return arr;\n}\n\nconsole.log(flatten(arr))\n")),(0,a.kt)("h2",{id:"reduce-\u5b9e\u73b0-map"},"reduce \u5b9e\u73b0 map"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Array.prototype.map = function (fn) {\n    let result = []\n    this.reduce((total, current, index) => {\n        result.push(fn(current))\n    }, [])\n    return result\n}\n")),(0,a.kt)("h2",{id:"\u6570\u7ec4\u4e71\u5e8f"},"\u6570\u7ec4\u4e71\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"let arr = [1, 2, 3, 4, 5]\narr.sort(() => {\n    return Math.random() - 0.5\n})\n\n// \u52a0\u5f3a\u7248\n// \u904d\u5386\u6570\u7ec4\uff0c\u6bcf\u4e00\u9879\u548c\u8be5\u9879\u4e4b\u524d\u7684\u968f\u673a\u9879\u4ea4\u6362\u4f4d\u7f6e\nfunction shuffle(arr) {\n    for (let i = 0; i < arr.length; i++) {\n        let j = ~~(Math.random() * (i + 1));\n        [arr[i], arr[j]] = [arr[j], arr[i]]\n    }\n}\n")),(0,a.kt)("h2",{id:"\u5176\u4ed6\u5e38\u7528\u65b9\u6cd5"},"\u5176\u4ed6\u5e38\u7528\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var arr = [2, 7, 0, 6, 1, 4, 8, 3]\narr.sort((a, b) => a - b) // \u9012\u589e\narr.sort((a, b) => b - a) // \u9012\u51cf\n")))}f.isMDXComponent=!0}}]);