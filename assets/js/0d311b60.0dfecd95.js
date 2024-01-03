"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[5506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),k=o,d=c["".concat(u,".").concat(k)]||c[k]||p[k]||r;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},25076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={description:"hooks\u7bc7",slug:"/0a22df3",tags:["hooks\u7bc7"]},l=void 0,i={unversionedId:"\u672a\u6574\u7406/React\u7bc7/hooks\u7bc7",id:"\u672a\u6574\u7406/React\u7bc7/hooks\u7bc7",title:"hooks\u7bc7",description:"hooks\u7bc7",source:"@site/01.docs/99.\u672a\u6574\u7406/05.React\u7bc7/03.hooks\u7bc7.md",sourceDirName:"99.\u672a\u6574\u7406/05.React\u7bc7",slug:"/0a22df3",permalink:"/docs/0a22df3",draft:!1,editUrl:"https://github.com/lacorda/lacorda.github.io/blob/master/docs/01.docs/99.\u672a\u6574\u7406/05.React\u7bc7/03.hooks\u7bc7.md",tags:[{label:"hooks\u7bc7",permalink:"/docs/tags/hooks\u7bc7"}],version:"current",lastUpdatedBy:"Lacorda",lastUpdatedAt:1704275126,formattedLastUpdatedAt:"2024\u5e741\u67083\u65e5",sidebarPosition:3,frontMatter:{description:"hooks\u7bc7",slug:"/0a22df3",tags:["hooks\u7bc7"]},sidebar:"tutorialSidebar",previous:{title:"state\u539f\u7406",permalink:"/docs/64d1fec"},next:{title:"0000099999",permalink:"/docs/db2d791"}},u={},s=[{value:"React\u5185\u7f6eHooks",id:"react\u5185\u7f6ehooks",level:2},{value:"\u5904\u7406\u72b6\u6001",id:"\u5904\u7406\u72b6\u6001",level:3},{value:"\u5904\u7406\u526f\u4f5c\u7528",id:"\u5904\u7406\u526f\u4f5c\u7528",level:3},{value:"\u6027\u80fd\u4f18\u5316",id:"\u6027\u80fd\u4f18\u5316",level:3},{value:"\u7ec4\u4ef6\u4e0a\u4e0b\u6587",id:"\u7ec4\u4ef6\u4e0a\u4e0b\u6587",level:3},{value:"\u4fdd\u5b58\u503c/\u6027\u80fd\u4f18\u5316",id:"\u4fdd\u5b58\u503c\u6027\u80fd\u4f18\u5316",level:3},{value:"\u66b4\u9732\u5b9e\u4f8b\u5c5e\u6027\u4e0e\u65b9\u6cd5",id:"\u66b4\u9732\u5b9e\u4f8b\u5c5e\u6027\u4e0e\u65b9\u6cd5",level:3},{value:"React-Router\u5185\u7f6eHooks",id:"react-router\u5185\u7f6ehooks",level:2},{value:"useHistory",id:"usehistory",level:3},{value:"useLocation",id:"uselocation",level:3},{value:"useParams",id:"useparams",level:3},{value:"useRouteMatch \u662f\u5426\u8def\u7531\u5339\u914d",id:"useroutematch-\u662f\u5426\u8def\u7531\u5339\u914d",level:3},{value:"\u81ea\u5b9a\u4e49Hooks - ahooks",id:"\u81ea\u5b9a\u4e49hooks---ahooks",level:2}],m={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"react\u5185\u7f6ehooks"},"React\u5185\u7f6eHooks"),(0,o.kt)("h3",{id:"\u5904\u7406\u72b6\u6001"},"\u5904\u7406\u72b6\u6001"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"useState"),": \u7528\u4e8e\u5728\u7ec4\u4ef6\u4e2d ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u6dfb\u52a0\u72b6\u6001")),"\u3002\u5b83\u8fd4\u56de ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u4e00\u4e2a\u72b6\u6001\u503c"))," \u548c ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u4e00\u4e2a\u66f4\u65b0\u72b6\u6001\u7684\u51fd\u6570")),"\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"useReducer"),": \u7c7b\u4f3c\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"useState"),"\uff0c\u4f46\u662f\u9002\u7528\u4e8e\u66f4 ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u590d\u6742\u7684\u72b6\u6001\u903b\u8f91")),"\u3002\u5b83\u63a5\u53d7\u4e00\u4e2a reducer \u51fd\u6570\uff0c\u7528\u4e8e\u66f4\u65b0\u72b6\u6001\u3002")),(0,o.kt)("admonition",{title:"useState \u4e0e useReducer \u7684\u533a\u522b",type:"tip"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u573a\u666f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useState"),": \u7b80\u5355\u7684\u72b6\u6001\u7ba1\u7406\uff0c\u4f8b\u5982: \u5355\u4e2a\u503c\u6216\u5bf9\u8c61\u7684\u72b6\u6001"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useReducer"),": \u590d\u6742\u7684\u72b6\u6001\u903b\u8f91\uff0c\u4f8b\u5982: \u5f53\u72b6\u6001\u4e4b\u95f4\u6709\u591a\u4e2a\u76f8\u5173\u64cd\u4f5c\u65f6\uff0c\u9700\u8981\u5c06\u72b6\u6001\u548c\u72b6\u6001\u66f4\u65b0\u903b\u8f91\u5206\u79bb\uff0c\u4f7f\u4ee3\u7801\u66f4\u6a21\u5757\u5316\u548c\u6613\u4e8e\u7ef4\u62a4"))),(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u65b9\u6cd5",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useState"),": \u8fd4\u56de\u4e00\u4e2a\u72b6\u6001\u503c\u548c\u4e00\u4e2a\u66f4\u65b0\u72b6\u6001\u7684\u51fd\u6570"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useReducer"),": \u8fd4\u56de\u5f53\u524d\u72b6\u6001\u548c\u4e00\u4e2a dispatch \u51fd\u6570\uff0cdispatch \u51fd\u6570\u7528\u4e8e\u89e6\u53d1\u72b6\u6001\u66f4\u65b0\u3002\u4f60\u9700\u8981\u4f20\u9012\u4e00\u4e2a action \u5bf9\u8c61\uff0c\u6839\u636e action \u7c7b\u578b\u6765\u66f4\u65b0\u72b6\u6001\u3002"))),(0,o.kt)("li",{parentName:"ol"},"\u72b6\u6001\u66f4\u65b0\u65b9\u5f0f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useState"),": \u76f4\u63a5\u66ff\u6362\u73b0\u6709\u72b6\u6001"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useReducer"),": \u901a\u8fc7\u4f7f\u7528 reducer \u51fd\u6570\u6765\u7ba1\u7406\u72b6\u6001\u66f4\u65b0"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=useState",title:"useState"},"import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=useReducer",title:"useReducer"},"import React, { useReducer } from 'react';\n\nfunction countReducer(state, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1;\n    default:\n      return state;\n  }\n}\n\nfunction Counter() {\n  const [count, dispatch] = useReducer(countReducer, 0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>\n    </div>\n  );\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=useState\u5b9e\u73b0useReducer\u7684\u6548\u679c",title:"useState\u5b9e\u73b0useReducer\u7684\u6548\u679c"},"import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  const dispatch = (action) => {\n    switch (action.type) {\n      case 'INCREMENT':\n        setCount(count + 1);\n        break;\n      default:\n        break;\n    }\n  };\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>\n    </div>\n  );\n}\n\nexport default Counter;\n\n")),(0,o.kt)("h3",{id:"\u5904\u7406\u526f\u4f5c\u7528"},"\u5904\u7406\u526f\u4f5c\u7528"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"useEffect"),": \u7528\u4e8e ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u5904\u7406\u526f\u4f5c\u7528")),"\uff0c\u5982\u6570\u636e\u83b7\u53d6\u3001\u8ba2\u9605\u3001DOM \u64cd\u4f5c\u7b49\u3002\u5728\u7ec4\u4ef6 ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u6e32\u67d3\u540e")),"\u6267\u884c\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u7ec4\u4ef6 ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u5378\u8f7d\u65f6"))," \u6267\u884c\u6e05\u7406\u64cd\u4f5c\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"useLayoutEffect"),": \u7c7b\u4f3c\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect"),"\uff0c\u4f46\u5728\u6d4f\u89c8\u5668 ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u7ed8\u5236\u4e4b\u524d\u540c\u6b65\u6267\u884c")),"\uff0c\u53ef\u7528\u4e8e\u8fdb\u884c DOM \u64cd\u4f5c\u548c\u6d4b\u91cf\u5e03\u5c40\u3002")),(0,o.kt)("admonition",{title:"useEffect \u4e0e useLayoutEffect \u7684\u533a\u522b",type:"tip"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"\u6267\u884c\u65f6\u673a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useEffect"),": \u6d4f\u89c8\u5668\u6e32\u67d3\u5b8c\u6210\u540e\u5f02\u6b65\u6267\u884c\uff0c\u4e0d\u4f1a\u963b\u585e\u9875\u9762\u7684\u7ed8\u5236\u548c\u4ea4\u4e92"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useLayoutEffect"),": \u6d4f\u89c8\u5668\u7ed8\u5236\u4e4b\u524d\u540c\u6b65\u6267\u884c\u3002\u53ef\u80fd\u4f1a\u5bfc\u81f4\u9875\u9762\u963b\u585e"))),(0,o.kt)("li",{parentName:"ol"},"\u6027\u80fd\u5f71\u54cd",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useLayoutEffect"),": \u5728\u5927\u91cf\u7ec4\u4ef6\u4e2d\u5e7f\u6cdb\u4f7f\u7528\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cd\u9875\u9762\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\uff0c\u56e0\u4e3a\u5b83\u4f1a\u963b\u585e\u9875\u9762\u7ed8\u5236")))),(0,o.kt)("p",{parentName:"admonition"},"\u5c3d\u53ef\u80fd\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect"),"\uff0c\u9664\u975e\u662f ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"\u4fee\u6539DOM\u5e76\u4e14\u4e0d\u8ba9\u7528\u6237\u770b\u5230\u4fee\u6539DOM\u7684\u8fc7\u7a0b")),"\uff0c\u624d\u8003\u8651\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/site#/react-hooks/useEffect"},"Demo"))),(0,o.kt)("h3",{id:"\u6027\u80fd\u4f18\u5316"},"\u6027\u80fd\u4f18\u5316"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"useCallback"),": \u7528\u4e8e ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u4f18\u5316\u6027\u80fd")),"\uff0c",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u8bb0\u5fc6\u51fd\u6570\u5b9e\u4f8b")),"\uff0c\u4ec5\u5728\u4f9d\u8d56\u9879\u53d1\u751f\u53d8\u5316\u65f6\u91cd\u65b0\u521b\u5efa\u51fd\u6570\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"useMemo"),": \u7528\u4e8e\u5728\u7ec4\u4ef6 ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u6e32\u67d3\u671f\u95f4\u7f13\u5b58\u8ba1\u7b97\u7ed3\u679c")),"\uff0c\u4ee5 ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u907f\u514d\u91cd\u590d\u8ba1\u7b97")),"\uff0c\u9002\u7528\u4e8e\u8ba1\u7b97\u6602\u8d35\u7684\u503c\u3002")),(0,o.kt)("admonition",{title:"useCallBack\u4f7f\u7528\u573a\u666f",type:"tip"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff1a\u8981\u8fdb\u884c\u4f18\u5316\u7684\u51fd\u6570 \u548c \u4e00\u4e2a\u4f9d\u8d56\u6570\u7ec4\uff0c\u53ea\u6709\u6570\u7ec4\u4e2d\u7684\u4f9d\u8d56\u9879\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u624d\u4f1a\u91cd\u65b0\u521b\u5efa\u51fd\u6570\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u4f18\u5316\u7684\u51fd\u6570\u53ef\u4ee5\u63a5\u6536\u4efb\u4f55\u6570\u91cf\u7684\u53c2\u6570\uff0c\u8fd9\u4e2a\u53c2\u6570\u7531\u8fd4\u56de\u51fd\u6570\u7684\u53c2\u6570"))))),(0,o.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\uff1a\u8fd4\u56de\u4e00\u4e2a\u8bb0\u5fc6\u5316\u7684\u51fd\u6570\u5b9e\u4f8b\uff0c\u8be5\u51fd\u6570\u53ea\u5728\u4f9d\u8d56\u9879\u53d1\u751f\u53d8\u5316\u65f6\u624d\u91cd\u65b0\u521b\u5efa"))),(0,o.kt)("li",{parentName:"ol"},"\u573a\u666f\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7236\u7ec4\u4ef6\u5c06\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"\u51fd\u6570"),"\u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"prop")," \u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u65f6\u3002\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"useCallback")," \u53ef\u4ee5 ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u786e\u4fdd\u6bcf\u6b21\u6e32\u67d3\u65f6\u90fd\u4e0d\u4f1a\u521b\u5efa\u65b0\u7684\u51fd\u6570\u5b9e\u4f8b\uff0c\u4ece\u800c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3")),"\u3002")))),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/site#/react-hooks/useCallback"},"Demo"))),(0,o.kt)("admonition",{title:"useMemo\u4f7f\u7528\u573a\u666f",type:"tip"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff1a\u8ba1\u7b97\u51fd\u6570 \u548c \u4e00\u4e2a\u4f9d\u8d56\u6570\u7ec4\uff0c\u53ea\u6709\u6570\u7ec4\u4e2d\u7684\u4f9d\u8d56\u9879\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u624d\u4f1a\u91cd\u65b0\u8ba1\u7b97"),(0,o.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\uff1a\u8fd4\u56de\u4e00\u4e2a\u8bb0\u5fc6\u5316\u7684\u503c\u3002"))),(0,o.kt)("li",{parentName:"ol"},"\u573a\u666f\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u590d\u6e32\u67d3"),(0,o.kt)("li",{parentName:"ul"},"\u907f\u514d\u63a5\u53e3\u91cd\u590d\u8bf7\u6c42"),(0,o.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u51fd\u6570\u65f6\u53ef\u4ee5\u50cf",(0,o.kt)("inlineCode",{parentName:"li"},"useCallBack"),"\u4e00\u6837\u4f7f\u7528"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=useCallBack",title:"useCallBack"},"// Button\u7ec4\u4ef6\nimport React from 'react';\n\nconst Button = ({ onClick, label }) => {\n  console.log('Button rendered:', label);\n  return <button onClick={onClick}>{label}</button>;\n};\n\nexport default React.memo(Button);\n\n// \u7236\u7ec4\u4ef6\nimport React, { useState, useCallback } from 'react';\nimport Button from './button';\nimport Container from '../../../_components/container';\n\nconst UseCallbackDemo = (props) => {\n  const [count1, setCount1] = useState(0);\n  const [count2, setCount2] = useState(0);\n\n  // \u4f7f\u7528 useCallback \u4f18\u5316\u56de\u8c03\u51fd\u6570\u7684\u521b\u5efa\n  const handleIncrement1 = useCallback(() => {\n    setCount1(count1 + 1);\n  }, [count1]);\n\n  const handleIncrement2 = useCallback(() => {\n    setCount2(count2 + 1);\n  }, [count2]);\n\n  // const handleIncrement1 = () => {\n  //   setCount1(count1 + 1);\n  // };\n\n  // const handleIncrement2 = () => {\n  //   setCount2(count2 + 1);\n  // };\n\n  return (\n    <Container {...props} className=\"usecallback-container\">\n      <Button onClick={handleIncrement1} label={`Count 1: ${count1}`} />\n      <Button onClick={handleIncrement2} label={`Count 2: ${count2}`} />\n    </Container>\n  );\n};\n\nexport default UseCallbackDemo;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=useMemo",title:"useMemo"},'import React, { useState, useMemo } from \'react\';\n\nconst NumberList = ({ numbers }) => {\n  return (\n    <ul>\n      {numbers.map((number) => (\n        <li key={number}>Square of {number}: {number * number}</li>\n      ))}\n    </ul>\n  );\n};\n\nconst UseMemoDemo = (props) => {\n  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);\n  const [count, setCount] = useState(0);\n\n  // \u4f7f\u7528 useMemo \u4f18\u5316\u8ba1\u7b97\u5e73\u65b9\n  const squaredNumbers = useMemo(() => {\n    console.log(\'\ud83c\udf49  squaredNumbers \u91cd\u65b0\u8ba1\u7b97 \');\n    return numbers.map((number) => number * number);\n  }, [numbers]);\n\n  return (\n    <Container {...props} className="usecallback-container">\n      <h1>Number Squares</h1>\n      <NumberList numbers={squaredNumbers} />\n      <Button type="primary" size="sm" onClick={() => setCount(count + 1)}>count: {count}</Button>\n      <br />\n      <br />\n      <Button type="primary" size="sm" onClick={() => setNumbers(numbers.map(n => n + 1))}>numbers: {numbers}</Button>\n    </Container >\n  );\n};\n\nexport default UseMemoDemo;\n\n')),(0,o.kt)("h3",{id:"\u7ec4\u4ef6\u4e0a\u4e0b\u6587"},"\u7ec4\u4ef6\u4e0a\u4e0b\u6587"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"useContext"),": \u7528\u4e8e\u8bbf\u95ee ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"React \u4e0a\u4e0b\u6587")),"\u3002\u5141\u8bb8\u4f60\u5728\u7ec4\u4ef6\u4e2d\u8ba2\u9605\u4e0a\u4e0b\u6587\u7684\u53d8\u5316\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=MyContext \u521b\u5efa\u4e00\u4e2acontext",title:"MyContext","\u521b\u5efa\u4e00\u4e2acontext":!0},"import React, { createContext } from 'react';\n\n// \u521b\u5efa\u4e00\u4e2a\u4e0a\u4e0b\u6587\nconst MyContext = createContext();\n\nexport default MyContext;\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=\u7236\u7ec4\u4ef6 Provider\u6ce8\u518ccontext value",title:"\u7236\u7ec4\u4ef6","Provider\u6ce8\u518ccontext":!0,value:!0},"import React from 'react';\nimport MyContext from './MyContext';\n\nconst ParentComponent = () => {\n  const sharedData = \"This is shared data\";\n\n  return (\n    <MyContext.Provider value={sharedData}>\n      {/* \u5728\u8fd9\u91cc\u7684\u5b50\u7ec4\u4ef6\u53ef\u4ee5\u8bbf\u95ee\u5230\u5171\u4eab\u7684\u6570\u636e */}\n      <ChildComponent />\n    </MyContext.Provider>\n  );\n};\n\nexport default ParentComponent;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=\u5b50\u7ec4\u4ef6 useContext\u83b7\u53d6content value",title:"\u5b50\u7ec4\u4ef6","useContext\u83b7\u53d6content":!0,value:!0},"import React, { useContext } from 'react';\nimport MyContext from './MyContext';\n\nconst ChildComponent = () => {\n  // \u4f7f\u7528 useContext \u6765\u83b7\u53d6\u4e0a\u4e0b\u6587\u6570\u636e\n  const sharedData = useContext(MyContext);\n\n  return <div>{sharedData}</div>;\n};\n\nexport default ChildComponent;\n\n")),(0,o.kt)("h3",{id:"\u4fdd\u5b58\u503c\u6027\u80fd\u4f18\u5316"},"\u4fdd\u5b58\u503c/\u6027\u80fd\u4f18\u5316"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"useRef"),": \u8fd4\u56de\u4e00\u4e2a\u53ef\u53d8\u7684 ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"ref \u5bf9\u8c61")),"\uff0c\u53ef\u4ee5\u7528\u4e8e ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u4fdd\u5b58\u7ec4\u4ef6\u5185\u7684\u503c")),"\uff0c\u800c ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u4e0d\u4f1a\u5bfc\u81f4\u91cd\u65b0\u6e32\u67d3")),"\u3002")),(0,o.kt)("h3",{id:"\u66b4\u9732\u5b9e\u4f8b\u5c5e\u6027\u4e0e\u65b9\u6cd5"},"\u66b4\u9732\u5b9e\u4f8b\u5c5e\u6027\u4e0e\u65b9\u6cd5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"useImperativeHandle"),": \u7528\u4e8e\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u66b4\u9732\u7ed9\u7236\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u503c\uff0c\u901a\u5e38\u4e0e ",(0,o.kt)("inlineCode",{parentName:"li"},"forwardRef")," \u4e00\u8d77\u4f7f\u7528\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=\u5b50\u7ec4\u4ef6",title:"\u5b50\u7ec4\u4ef6"},"import React, { forwardRef, useImperativeHandle, useState } from 'react';\n\nconst ChildComponent = forwardRef((props, ref) => {\n  const [count, setCount] = useState(0);\n\n  // \u5728\u5b50\u7ec4\u4ef6\u5185\u5b9a\u4e49\u4e00\u4e2a\u66b4\u9732\u7ed9\u7236\u7ec4\u4ef6\u7684\u65b9\u6cd5\n  const increment = () => {\n    setCount(count + 1);\n  };\n\n  // \u4f7f\u7528 useImperativeHandle \u66b4\u9732\u65b9\u6cd5\u548c\u5c5e\u6027\u7ed9\u7236\u7ec4\u4ef6\n  useImperativeHandle(ref, () => ({\n    increment, // \u66b4\u9732\u7684\u65b9\u6cd5\n    count     // \u66b4\u9732\u7684\u5c5e\u6027\n  }));\n\n  return <div>Count: {count}</div>;\n});\n\nexport default ChildComponent;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=\u7236\u7ec4\u4ef6",title:"\u7236\u7ec4\u4ef6"},"import React, { useRef } from 'react';\nimport ChildComponent from './ChildComponent';\n\nfunction ParentComponent() {\n  const childRef = useRef();\n\n  const handleButtonClick = () => {\n    // \u8c03\u7528\u5b50\u7ec4\u4ef6\u7684\u65b9\u6cd5\n    childRef.current.increment();\n  };\n\n  return (\n    <div>\n      <ChildComponent ref={childRef} />\n      <button onClick={handleButtonClick}>Increment Child Count</button>\n    </div>\n  );\n}\n\nexport default ParentComponent;\n")),(0,o.kt)("h2",{id:"react-router\u5185\u7f6ehooks"},"React-Router\u5185\u7f6eHooks"),(0,o.kt)("h3",{id:"usehistory"},"useHistory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useHistory } from 'react-router-dom';\n\nfunction MyComponent() {\n  const history = useHistory();\n\n  const handleClick = () => {\n    // \u5728\u70b9\u51fb\u65f6\u5bfc\u822a\u5230\u53e6\u4e00\u4e2a\u8def\u7531\n    history.push('/another-route');\n  };\n\n  return (\n    <div>\n      <button onClick={handleClick}>Go to Another Route</button>\n    </div>\n  );\n}\n")),(0,o.kt)("h3",{id:"uselocation"},"useLocation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useLocation } from 'react-router-dom';\n\nfunction MyComponent() {\n  const location = useLocation();\n\n  return (\n    <div>\n      <p>Current Path: {location.pathname}</p>\n    </div>\n  );\n}\n")),(0,o.kt)("h3",{id:"useparams"},"useParams"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useParams } from 'react-router-dom';\n\nfunction UserProfile() {\n  const { username } = useParams();\n\n  return (\n    <div>\n      <p>Username: {username}</p>\n    </div>\n  );\n}\n")),(0,o.kt)("h3",{id:"useroutematch-\u662f\u5426\u8def\u7531\u5339\u914d"},"useRouteMatch \u662f\u5426\u8def\u7531\u5339\u914d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useRouteMatch } from 'react-router-dom';\n\nfunction MyComponent() {\n  const match = useRouteMatch('/some-route');\n\n  return (\n    <div>\n      {match ? <p>Matched!</p> : <p>Not Matched</p>}\n    </div>\n  );\n}\n")),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49hooks---ahooks"},"\u81ea\u5b9a\u4e49Hooks - ahooks"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ahooks.js.org/zh-CN/"},"ahooks\u5217\u8868")))}p.isMDXComponent=!0}}]);