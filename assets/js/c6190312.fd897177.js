"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[9792],{58860:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>m});var n=t(37953);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||a;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90136:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(75890),o=(t(37953),t(58860));const a={description:"\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1",slug:"/02399f0",tags:["\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1"]},c="\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1",l={unversionedId:"Express/\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1",id:"Express/\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1",title:"\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1",description:"\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1",source:"@site/04.fullStack/03.Express/01.\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1.md",sourceDirName:"03.Express",slug:"/02399f0",permalink:"/fullStack/02399f0",draft:!1,tags:[{label:"\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1",permalink:"/fullStack/tags/\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1"}],version:"current",sidebarPosition:1,frontMatter:{description:"\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1",slug:"/02399f0",tags:["\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1"]},sidebar:"tutorialSidebar",previous:{title:"Next.js",permalink:"/fullStack/465964d"},next:{title:"\u8def\u7531\u7ba1\u7406",permalink:"/fullStack/119b0b1"}},i={},s=[],p={toc:s},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1"},"\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1"),(0,o.yg)("p",null,"backend"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app.js              # \u4e3b\u5e94\u7528\n\u2502   \u251c\u2500\u2500 routes              # \u8def\u7531\u6a21\u5757\n\u2502   \u2502   \u251c\u2500\u2500 user.js         # \u7528\u6237\u76f8\u5173\u63a5\u53e3\n\u2502   \u2502   \u251c\u2500\u2500 product.js      # \u5546\u54c1\u76f8\u5173\u63a5\u53e3\n\u2502   \u2502   \u2514\u2500\u2500 index.js        # \u8def\u7531\u5165\u53e3\n\u2502   \u251c\u2500\u2500 configs             # \u914d\u7f6e\u6587\u4ef6, \u5904\u7406\u63a5\u53e3\u901a\u7528\u914d\u7f6e\n\u2502   \u251c\u2500\u2500 controllers         # \u63a7\u5236\u5668, \u5904\u7406\u8bf7\u6c42\uff0c\u5e76\u8c03\u7528\u670d\u52a1\u5c42\u5b8c\u6210\u5177\u4f53\u7684\u4e1a\u52a1\u903b\u8f91\n\u2502   \u251c\u2500\u2500 middlewares         # \u4e2d\u95f4\u4ef6, \u5904\u7406\u901a\u7528\u903b\u8f91\uff0c\u6bd4\u5982\u8eab\u4efd\u9a8c\u8bc1\u3001\u9519\u8bef\u5904\u7406\u7b49\n\u2502   \u251c\u2500\u2500 models              # \u6570\u636e\u6a21\u578b, \u5b9a\u4e49\u4e0e\u6570\u636e\u5e93\u7684\u8868\u7ed3\u6784\u5bf9\u5e94\u7684\u5bf9\u8c61\uff0c\u4f7f\u7528 Mongoose\n\u2502   \u251c\u2500\u2500 services            # \u670d\u52a1\u6a21\u5757, \u5c01\u88c5\u4e86\u6838\u5fc3\u4e1a\u52a1\u903b\u8f91\uff0c\u53ef\u4ee5\u88ab\u591a\u4e2a\u63a7\u5236\u5668\u8c03\u7528\n\u2502   \u251c\u2500\u2500 utils               # \u901a\u7528\u7684\u5de5\u5177\u51fd\u6570\u6216\u8f85\u52a9\u529f\u80fd\n\u251c\u2500\u2500 public                  # \u9759\u6001\u6587\u4ef6\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 server.js               # \u4e3b\u5165\u53e3\u6587\u4ef6\n")))}f.isMDXComponent=!0}}]);