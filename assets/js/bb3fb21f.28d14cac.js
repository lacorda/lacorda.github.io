"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[5343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),s=n(7392),i=n(7094),c=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:k,groupId:h,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:C}=(0,i.U)(),[x,S]=(0,r.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=h){const e=N[h];null!=e&&e!==x&&b.some((t=>t.value===e))&&S(e)}const O=e=>{const t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==x&&(w(t),S(a),null!=h&&C(h,String(a)))},R=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=j.indexOf(e.currentTarget)+1;n=null!=(a=j[t])?a:j[0];break}case"ArrowLeft":{var r;const t=j.indexOf(e.currentTarget)-1;n=null!=(r=j[t])?r:j[j.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>j.push(e),onKeyDown:R,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},1707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const s={description:"Component",slug:"/ee17c27",tags:["Component"]},i=void 0,c={unversionedId:"React\u7bc7/Component",id:"React\u7bc7/Component",title:"Component",description:"Component",source:"@site/01.docs/05.React\u7bc7/02.Component.md",sourceDirName:"05.React\u7bc7",slug:"/ee17c27",permalink:"/docs/ee17c27",draft:!1,editUrl:"https://github.com/lacorda/lacorda.github.io/blob/master/docs/01.docs/05.React\u7bc7/02.Component.md",tags:[{label:"Component",permalink:"/docs/tags/component"}],version:"current",lastUpdatedBy:"iyb-chenliyu",lastUpdatedAt:1667467598,formattedLastUpdatedAt:"2022\u5e7411\u67083\u65e5",sidebarPosition:2,frontMatter:{description:"Component",slug:"/ee17c27",tags:["Component"]},sidebar:"tutorialSidebar",previous:{title:"jsx",permalink:"/docs/71318bd"},next:{title:"state",permalink:"/docs/64d1fec"}},p={},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u672c\u7ae0\u5c06\u5b66\u4e60\u5230\u7684\u5185\u5bb9",id:"\u672c\u7ae0\u5c06\u5b66\u4e60\u5230\u7684\u5185\u5bb9",level:4},{value:"React\u7ec4\u4ef6\u7684\u672c\u8d28",id:"react\u7ec4\u4ef6\u7684\u672c\u8d28",level:2},{value:"\u7c7b\u7ec4\u4ef6\u4e0e\u51fd\u6570\u7ec4\u4ef6",id:"\u7c7b\u7ec4\u4ef6\u4e0e\u51fd\u6570\u7ec4\u4ef6",level:2},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:4},{value:"\u7c7b\u7ec4\u4ef6",id:"\u7c7b\u7ec4\u4ef6",level:3},{value:"React.Component \u7684\u6e90\u7801",id:"reactcomponent-\u7684\u6e90\u7801",level:4},{value:"\u51fd\u6570\u7ec4\u4ef6",id:"\u51fd\u6570\u7ec4\u4ef6",level:3},{value:"\u7ec4\u4ef6\u95f4\u7684\u901a\u4fe1\u65b9\u5f0f",id:"\u7ec4\u4ef6\u95f4\u7684\u901a\u4fe1\u65b9\u5f0f",level:2},{value:"<code>props</code> \u548c <code>callback</code> \u65b9\u5f0f",id:"props-\u548c-callback-\u65b9\u5f0f",level:3},{value:"\u7ec4\u4ef6\u7684\u5f3a\u5316/\u6269\u5c55\u65b9\u5f0f",id:"\u7ec4\u4ef6\u7684\u5f3a\u5316\u6269\u5c55\u65b9\u5f0f",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("h4",{id:"\u672c\u7ae0\u5c06\u5b66\u4e60\u5230\u7684\u5185\u5bb9"},"\u672c\u7ae0\u5c06\u5b66\u4e60\u5230\u7684\u5185\u5bb9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"React"),"\u7ec4\u4ef6\u7684\u672c\u8d28"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u7ec4\u4ef6\u4e0e\u51fd\u6570\u7ec4\u4ef6\u7684\u533a\u522b"),(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u95f4\u7684\u901a\u4fe1\u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u7684\u5f3a\u5316/\u6269\u5c55\u65b9\u5f0f")),(0,r.kt)("h2",{id:"react\u7ec4\u4ef6\u7684\u672c\u8d28"},"React\u7ec4\u4ef6\u7684\u672c\u8d28"),(0,r.kt)("p",null,"\ud83d\udc49 \u7ec4\u4ef6\u672c\u8d28\u4e0a\u5c31\u662f\u7c7b\u548c\u51fd\u6570\uff0c\u4f46\u662f\u4e0e\u5e38\u89c4\u7684\u7c7b\u548c\u51fd\u6570\u4e0d\u540c\u7684\u662f\uff0c",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u7ec4\u4ef6\u627f\u8f7d\u4e86\u6e32\u67d3\u89c6\u56fe\u7684 UI \u548c\u66f4\u65b0\u89c6\u56fe\u7684 setState \u3001 useState \u7b49\u65b9\u6cd5"))),(0,r.kt)("p",null,"\ud83d\udc49 ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," \u7ec4\u4ef6\u4e0a\u540c\u6837\u5177\u6709\u51fd\u6570\u4e0e\u7c7b\u7684\u7279\u6027\uff0c\u6bd4\u5982\u539f\u578b\u94fe\uff0c\u7ee7\u627f\uff0c\u9759\u6001\u5c5e\u6027\u7b49"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"/* \u7c7b */\nclass textClass {\n    sayHello=()=>console.log('hello, my name is alien')\n}\n/* \u7c7b\u7ec4\u4ef6 */\nclass Index extends React.Component {\n    state={ message:`hello \uff0cworld!` }\n    sayHello=()=> this.setState({ message : 'hello, my name is alien' })\n    render(){\n        return <div onClick={ this.sayHello }> { this.state.message }  </div>\n    }\n}\n\n/* \u51fd\u6570 */\nfunction textFun () { \n    return 'hello, world'\n}\n/* \u51fd\u6570\u7ec4\u4ef6 */\nfunction FunComponent(){\n    const [ message , setMessage ] = useState('hello,world')\n    return <div onClick={ ()=> setMessage('hello, my name is alien')  } >{ message }</div>\n}\n")),(0,r.kt)("h2",{id:"\u7c7b\u7ec4\u4ef6\u4e0e\u51fd\u6570\u7ec4\u4ef6"},"\u7c7b\u7ec4\u4ef6\u4e0e\u51fd\u6570\u7ec4\u4ef6"),(0,r.kt)("h4",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"class",label:"\u7c7b\u7ec4\u4ef6",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=react-reconciler/src/ReactFiberClassComponent.js",title:"react-reconciler/src/ReactFiberClassComponent.js"},"function constructClassInstance(\n    workInProgress, // \u5f53\u524d\u6b63\u5728\u5de5\u4f5c\u7684 fiber \u5bf9\u8c61\n    ctor,           // \u6211\u4eec\u7684\u7c7b\u7ec4\u4ef6\n    props           // props \n){\n    /* \ud83d\udc49 \u5b9e\u4f8b\u5316\u7ec4\u4ef6\uff0c\u5f97\u5230\u7ec4\u4ef6\u5b9e\u4f8b instance */\n    const instance = new ctor(props, context)\n}\n"))),(0,r.kt)(o.Z,{value:"function",label:"\u51fd\u6570\u7ec4\u4ef6",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=react-reconciler/src/ReactFiberHooks.js",title:"react-reconciler/src/ReactFiberHooks.js"},"function renderWithHooks(\n  current,          // \u5f53\u524d\u51fd\u6570\u7ec4\u4ef6\u5bf9\u5e94\u7684 `fiber`\uff0c \u521d\u59cb\u5316\n  workInProgress,   // \u5f53\u524d\u6b63\u5728\u5de5\u4f5c\u7684 fiber \u5bf9\u8c61\n  Component,        // \u6211\u4eec\u51fd\u6570\u7ec4\u4ef6\n  props,            // \u51fd\u6570\u7ec4\u4ef6\u7b2c\u4e00\u4e2a\u53c2\u6570 props\n  secondArg,        // \u51fd\u6570\u7ec4\u4ef6\u5176\u4ed6\u53c2\u6570\n  nextRenderExpirationTime, //\u4e0b\u6b21\u6e32\u67d3\u8fc7\u671f\u65f6\u95f4\n){\n     /* \ud83d\udc49 \u76f4\u63a5\u6267\u884c\u51fd\u6570\u7ec4\u4ef6\uff0c\u5f97\u5230 return \u8fd4\u56de\u7684 React.element\u5bf9\u8c61 */\n     let children = Component(props, secondArg);\n}\n")))),(0,r.kt)("h3",{id:"\u7c7b\u7ec4\u4ef6"},"\u7c7b\u7ec4\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  /* \u5b9e\u4f8b\u5316\u7ec4\u4ef6\uff0c\u5f97\u5230\u7ec4\u4ef6\u5b9e\u4f8b instance */\n  let instance = new ctor(props, context);\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u7c7b\u7ec4\u4ef6\u6765\u8bf4\uff0c\u5e95\u5c42\u53ea\u9700\u8981 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u5b9e\u4f8b\u5316\u4e00\u6b21")),"\uff0c\u5b9e\u4f8b\u4e2d\u4fdd\u5b58\u4e86\u7ec4\u4ef6\u7684 state \u7b49\u72b6\u6001\u3002\u5bf9\u4e8e\u6bcf\u4e00\u6b21\u66f4\u65b0\u53ea\u9700\u8981\u8c03\u7528 render \u65b9\u6cd5\u4ee5\u53ca\u5bf9\u5e94\u7684\u751f\u547d\u5468\u671f\u5c31\u53ef\u4ee5\u4e86")),(0,r.kt)("h4",{id:"reactcomponent-\u7684\u6e90\u7801"},"React.Component \u7684\u6e90\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=react/src/ReactBaseClasses.js",title:"react/src/ReactBaseClasses.js"},"function Component(props, context, updater) {\n  this.props = props;      //\u7ed1\u5b9aprops\n  this.context = context;  //\u7ed1\u5b9acontext\n  this.refs = emptyObject; //\u7ed1\u5b9aref\n  this.updater = updater || ReactNoopUpdateQueue; //\u4e0a\u9762\u6240\u5c5e\u7684updater \u5bf9\u8c61\n}\n/* \u7ed1\u5b9asetState \u65b9\u6cd5 */\nComponent.prototype.setState = function(partialState, callback) {\n  this.updater.enqueueSetState(this, partialState, callback, 'setState');\n}\n/* \u7ed1\u5b9aforceupdate \u65b9\u6cd5 */\nComponent.prototype.forceUpdate = function(callback) {\n  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');\n}\n")),(0,r.kt)("admonition",{title:"\u7c7b\u7ec4\u4ef6\u6267\u884c\u6784\u9020\u51fd\u6570\u8fc7\u7a0b",type:"tip"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u5728\u5b9e\u4f8b\u4e0a\u7ed1\u5b9a props \u548c context"),(0,r.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u7f6e\u7a7a refs \u5c5e\u6027"),(0,r.kt)("li",{parentName:"ol"},"\u539f\u578b\u94fe\u4e0a\u7ed1\u5b9asetState\u3001forceUpdate \u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e updater\uff0cReact \u5728\u5b9e\u4f8b\u5316\u7c7b\u7ec4\u4ef6\u4e4b\u540e\u4f1a\u5355\u72ec\u7ed1\u5b9a update \u5bf9\u8c61"))),(0,r.kt)("h3",{id:"\u51fd\u6570\u7ec4\u4ef6"},"\u51fd\u6570\u7ec4\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  /* \u6267\u884c\u6211\u4eec\u7684\u51fd\u6570\u7ec4\u4ef6\uff0c\u5f97\u5230 return \u8fd4\u56de\u7684 React.element\u5bf9\u8c61 */\n  let children = Component(props, secondArg);\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\uff0c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u6bcf\u4e00\u6b21\u66f4\u65b0\u90fd\u662f\u4e00\u6b21\u65b0\u7684\u51fd\u6570\u6267\u884c")),"\uff0c\u4e00\u6b21\u51fd\u6570\u7ec4\u4ef6\u7684\u66f4\u65b0\uff0c\u91cc\u9762\u7684\u53d8\u91cf\u4f1a\u91cd\u65b0\u58f0\u660e"),(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc49 \u4e3a\u4e86\u8ba9\u51fd\u6570\u7ec4\u4ef6\u53ef\u4ee5\u4fdd\u5b58\u4e00\u4e9b\u72b6\u6001\uff0c\u6267\u884c\u4e00\u4e9b\u526f\u4f5c\u7528\u94a9\u5b50\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"React Hooks")," \u5e94\u8fd0\u800c\u751f")),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u95f4\u7684\u901a\u4fe1\u65b9\u5f0f"},"\u7ec4\u4ef6\u95f4\u7684\u901a\u4fe1\u65b9\u5f0f"),(0,r.kt)("p",null,"\ud83d\udc49 React \u4e00\u5171\u6709 5 \u79cd\u4e3b\u6d41\u7684\u901a\u4fe1\u65b9\u5f0f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"props")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"callback")," \u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ref")," \u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"React-redux")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"React-mobx")," \u72b6\u6001\u7ba1\u7406\u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"context")," \u4e0a\u4e0b\u6587\u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"event bus")," \u4e8b\u4ef6\u603b\u7ebf")),(0,r.kt)("h3",{id:"props-\u548c-callback-\u65b9\u5f0f"},(0,r.kt)("inlineCode",{parentName:"h3"},"props")," \u548c ",(0,r.kt)("inlineCode",{parentName:"h3"},"callback")," \u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=\u5b50\u7ec4\u4ef6",title:"\u5b50\u7ec4\u4ef6"},"function Son(props){\n    const {  \n      fatherSay, // \u7236\u7ec4\u4ef6\u4f20\u8fc7\u6765\u7684\u53d8\u91cfprops\n      sayFather  // \u7236\u7ec4\u4ef6\u4f20\u8fc7\u6765\u7684\u65b9\u6cd5props\n    } = props\n    return <div className='son' >\n        \u6211\u662f\u5b50\u7ec4\u4ef6\n        <div> \u7236\u7ec4\u4ef6\u5bf9\u6211\u8bf4\uff1a{ fatherSay } </div>\n        <input placeholder=\"\u6211\u5bf9\u7236\u7ec4\u4ef6\u8bf4\" onChange={(e) => {\n            sayFather(e.target.value)  // \u6267\u884c\u7236\u7ec4\u4ef6\u7684sayFather\u65b9\u6cd5\uff0c\u5e76\u4f20\u9012\u53c2\u6570\uff0c\u901a\u77e5\u7236\u7ec4\u4ef6\u6267\u884csetChildSay\n          }\n        }   />\n    </div>\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=\u7236\u7ec4\u4ef6",title:"\u7236\u7ec4\u4ef6"},"function Father(){\n    const [ childSay , setChildSay ] = useState('')\n    const [ fatherSay , setFatherSay ] = useState('')\n    return <div className=\"box father\" >\n        \u6211\u662f\u7236\u7ec4\u4ef6\n       <div> \u5b50\u7ec4\u4ef6\u5bf9\u6211\u8bf4\uff1a{ childSay } </div>\n       <input placeholder=\"\u6211\u5bf9\u5b50\u7ec4\u4ef6\u8bf4\" onChange={ (e)=>setFatherSay(e.target.value) }   />\n       <Son \n          // \u901a\u8fc7\u81ea\u8eab state \u6539\u53d8\uff0c\u91cd\u65b0\u6e32\u67d3\uff0c\u4f20\u9012 props \u7ed9\u5b50\u7ec4\u4ef6\n          fatherSay={fatherSay}  \n          sayFather={ setChildSay }\n       />\n    </div>\n}\n")),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u7684\u5f3a\u5316\u6269\u5c55\u65b9\u5f0f"},"\u7ec4\u4ef6\u7684\u5f3a\u5316/\u6269\u5c55\u65b9\u5f0f"),(0,r.kt)("p",null,"\ud83d\udc49 \u7ec4\u4ef6\u7ee7\u627f"),(0,r.kt)("p",null,"\ud83d\udc49 Hooks"),(0,r.kt)("p",null,"\ud83d\udc49 HOC\u9ad8\u9636\u7ec4\u4ef6"))}m.isMDXComponent=!0}}]);