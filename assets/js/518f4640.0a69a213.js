"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[3282],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(t),g=o,d=f["".concat(s,".").concat(g)]||f[g]||u[g]||a;return t?r.createElement(d,c(c({ref:n},p),{},{components:t})):r.createElement(d,c({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},219:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={description:"\u88c5\u9970\u5668",slug:"/b9452fd",tags:["\u88c5\u9970\u5668"]},c=void 0,i={unversionedId:"ES6+\u7bc7/\u88c5\u9970\u5668",id:"ES6+\u7bc7/\u88c5\u9970\u5668",title:"\u88c5\u9970\u5668",description:"\u88c5\u9970\u5668",source:"@site/topic/02.ES6+\u7bc7/06.\u88c5\u9970\u5668.md",sourceDirName:"02.ES6+\u7bc7",slug:"/b9452fd",permalink:"/topic/b9452fd",draft:!1,tags:[{label:"\u88c5\u9970\u5668",permalink:"/topic/tags/\u88c5\u9970\u5668"}],version:"current",sidebarPosition:6,frontMatter:{description:"\u88c5\u9970\u5668",slug:"/b9452fd",tags:["\u88c5\u9970\u5668"]},sidebar:"tutorialSidebar",previous:{title:"Reflect",permalink:"/topic/3c7dd63"}},s={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// 1. \u7528\u4e8eclass\n// target\u8868\u793a\u7c7b\u672c\u8eab\nfunction setClassProperty(target) {\n   target.n = 'akara'\n}\n\n@setClassProperty\nclass People {\n   \n}\n\nconsole.log(People.n) // akara\n\n// 2. \u7528\u4e8e\u7c7b\u65b9\u6cd5\nfunction log(target, key, descriptor) {\n   const fn = descriptor.value\n   descriptor.value = function (...args) {\n       console.log(`calling ${key} with args: ${args}`)\n       return fn.apply(this, args)\n  }\n   return descriptor\n}\n\nclass People {\n   constructor(name, age) {\n       this.name = name\n       this.age = age\n  }\n\n   @log\n   getName() {\n       return this.name\n  }\n}\n\nconst p = new People('akara', 20)\nconsole.log(p.getName())\n\n// 3. \u7528\u4e8e\u5b9e\u4f8b\u5c5e\u6027\n// \u88c5\u9970\u5b9e\u4f8b\u5c5e\u6027\u7684\u65f6\u5019\uff0cdescriptor\u6709\u4e2a\u5c5e\u6027\u4e3ainitializer\n// \u901a\u8fc7\u4fee\u6539\u8fd9\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u503c\uff0c\u5b9e\u4f8b\u5316\u65f6\u7684\u5c5e\u6027\u503c\u4e5f\u4e0d\u540c\nfunction test(target, key, descriptor) {\n   const fn = descriptor.initializer\n   descriptor.initializer = function () {\n       const v = fn.apply(this)\n       const randomNumber = ~~(Math.random() * 1000)\n       return `${v}-${randomNumber}`\n  }\n}\n\nclass People {\n   @test\n   name = 'akara'\n}\n\nconst p = new People()\nconsole.log(p.name)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u6267\u884c\u987a\u5e8f 1 3 4 2\nfunction f() {\n  console.log(1);\n  return function (\n    target,\n    key,\n    descriptor,\n  ) {\n    console.log(2);\n  };\n}\n\nfunction g() {\n  console.log(3);\n  return function (\n    target,\n    key,\n    descriptor,\n  ) {\n    console.log(4);\n  };\n}\n\nclass C {\n  @f()\n  @g()\n  method() {}\n}\n\n// @f @g test \u76f8\u5f53\u4e8e\u6570\u5b66\u4e2d\u7684 f(g(test))\n")))}u.isMDXComponent=!0}}]);