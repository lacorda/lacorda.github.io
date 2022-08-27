"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[701],{3743:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),l=n(7294),r=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function u(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>s(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),s=u(o,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function p(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(p,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const c=l.memo(p);function k(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:m,maxHeadingLevel:p,...k}=e;const h=(0,r.L)(),g=null!=m?m:h.tableOfContents.minHeadingLevel,b=null!=p?p:h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>o({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:g,maxHeadingLevel:b});return d((0,l.useMemo)((()=>{if(s&&u)return{linkClassName:s,linkActiveClassName:u,minHeadingLevel:g,maxHeadingLevel:b}}),[s,u,g,b])),l.createElement(c,(0,a.Z)({toc:v,className:n,linkClassName:s},k))}},7670:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>I,assets:()=>C,contentTitle:()=>y,default:()=>M,frontMatter:()=>A,metadata:()=>x,toc:()=>L});var a=n(7462),l=n(7294),r=n(3905);n(3743);var i=n(6010),o=n(2389),s=n(7392),u=n(7094),m=n(2466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n;const{lazy:r,block:o,defaultValue:c,values:k,groupId:h,className:g}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,s.l)(v,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===c?c:null!=(t=null!=c?c:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:A}=(0,u.U)(),[y,x]=(0,l.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:I}=(0,m.o5)();if(null!=h){const e=T[h];null!=e&&e!==y&&v.some((t=>t.value===e))&&x(e)}const L=e=>{const t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==y&&(I(t),x(a),null!=h&&A(h,String(a)))},w=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var l;const t=C.indexOf(e.currentTarget)-1;n=null!=(l=C[t])?l:C[C.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},g)},v.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>C.push(e),onKeyDown:w,onFocus:L,onClick:L},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":y===t})}),null!=n?n:t)}))),r?(0,l.cloneElement)(b.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function k(e){const t=(0,o.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}const h="tabItem_Ymn6";function g(e){let{children:t,hidden:n,className:a}=e;return l.createElement("div",{role:"tabpanel",className:(0,i.Z)(h,a),hidden:n},t)}const b="red_tPwW",v="orange_f2ly",N="yellow_T6mc";var f=n(4915);var T=n(3612);const A={id:"helloWorld",title:"a demo for docusaurus",slug:"/test",tags:["Demo","Getting started"]},y="\u6807\u9898",x={unversionedId:"helloWorld",id:"helloWorld",title:"a demo for docusaurus",description:"\u60a8\u51c6\u5907\u597d\u4e3a\u60a8\u7684\u5f00\u6e90\u9879\u76ee\u521b\u5efa\u6587\u6863\u7ad9\u70b9\u4e86\u5417\uff1f",source:"@site/docs/helloWorld.mdx",sourceDirName:".",slug:"/test",permalink:"/docs/test",draft:!1,editUrl:"https://github.com/lacorda/lacorda.github.io/blob/master/docs/docs/helloWorld.mdx",tags:[{label:"Demo",permalink:"/docs/tags/demo"},{label:"Getting started",permalink:"/docs/tags/getting-started"}],version:"current",lastUpdatedBy:"iyb-chenliyu",lastUpdatedAt:1661593176,formattedLastUpdatedAt:"2022\u5e748\u670827\u65e5",frontMatter:{id:"helloWorld",title:"a demo for docusaurus",slug:"/test",tags:["Demo","Getting started"]},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/docs/\u6570\u636e\u7c7b\u578b"}},C={},I=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},L=[{value:"\u53f3\u4fa7-1\u7ea7\u6807\u9898",id:"\u53f3\u4fa7-1\u7ea7\u6807\u9898",level:2},{value:"\u5217\u8868",id:"\u5217\u8868",level:2},{value:"\u81ea\u5b9a\u4e49id",id:"custom-id",level:2},{value:"\u53f3\u4fa7-2\u7ea7\u6807\u9898",id:"\u53f3\u4fa7-2\u7ea7\u6807\u9898",level:3},{value:"details \u5143\u7d20: \u5c55\u5f00/\u6536\u8d77\u5757",id:"details-\u5143\u7d20-\u5c55\u5f00\u6536\u8d77\u5757",level:2},{value:"MDX\u7ec4\u4ef6",id:"mdx\u7ec4\u4ef6",level:2},{value:"\u5bfc\u5165\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u7684\u81ea\u5df1\u7684\u7ec4\u4ef6",id:"\u5bfc\u5165\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u7684\u81ea\u5df1\u7684\u7ec4\u4ef6",level:3},{value:"\u7ec4\u4ef6\u4f5c\u7528\u57df",id:"\u7ec4\u4ef6\u4f5c\u7528\u57df",level:3},{value:"\u5728 MDX \u9875\u9762\u4e2d\uff0c\u4ee5\u4e0b\u53d8\u91cf\u53ef\u4ee5\u4f5c\u4e3a\u5168\u5c40\u53d8\u91cf\u4f7f\u7528:",id:"\u5728-mdx-\u9875\u9762\u4e2d\u4ee5\u4e0b\u53d8\u91cf\u53ef\u4ee5\u4f5c\u4e3a\u5168\u5c40\u53d8\u91cf\u4f7f\u7528",level:3},{value:"\u6807\u7b7e\u7ec4",id:"\u6807\u7b7e\u7ec4",level:3},{value:"defaultValue - 4\u4e2a#\u53f3\u4fa7\u5bfc\u822a\u680f\u4e0d\u663e\u793a",id:"defaultvalue---4\u4e2a\u53f3\u4fa7\u5bfc\u822a\u680f\u4e0d\u663e\u793a",level:4},{value:"groupId \u76f8\u540c\u65f6\uff0c\u540c\u6b65\u9009\u4e2d\u7684\u6807\u7b7e\u5361",id:"groupid-\u76f8\u540c\u65f6\u540c\u6b65\u9009\u4e2d\u7684\u6807\u7b7e\u5361",level:4},{value:"className \u81ea\u5b9a\u4e49\u6837\u5f0f",id:"classname-\u81ea\u5b9a\u4e49\u6837\u5f0f",level:4},{value:"\u591a\u683c\u5f0f\u7684\u4ee3\u7801Tab",id:"\u591a\u683c\u5f0f\u7684\u4ee3\u7801tab",level:3},{value:"npm/ yarn \u6307\u4ee4\u4f7f\u7528\uff0c\u53ea\u5199\u4e00\u4e2anpm",id:"npm-yarn-\u6307\u4ee4\u4f7f\u7528\u53ea\u5199\u4e00\u4e2anpm",level:3},{value:"\u5f15\u5165\u6587\u4ef6\u4ee3\u7801 raw-loader",id:"\u5f15\u5165\u6587\u4ef6\u4ee3\u7801-raw-loader",level:2},{value:"\u5f15\u5165\u4ee3\u7801\u6bb5",id:"\u5f15\u5165\u4ee3\u7801\u6bb5",level:2},{value:"\u4ee3\u7801\u9ad8\u4eae - prism",id:"\u4ee3\u7801\u9ad8\u4eae---prism",level:3},{value:"\u4ee3\u7801\u884c\u9ad8\u4eae",id:"\u4ee3\u7801\u884c\u9ad8\u4eae",level:3},{value:"\u6ce8\u91ca\u7cfb\u7edf  magicComments",id:"\u6ce8\u91ca\u7cfb\u7edf--magiccomments",level:3},{value:"\u663e\u793a\u884c\u53f7  showLineNumbers",id:"\u663e\u793a\u884c\u53f7--showlinenumbers",level:3},{value:"\u4ea4\u4e92\u5f0f\u4ee3\u7801\u7f16\u8f91\u5668",id:"\u4ea4\u4e92\u5f0f\u4ee3\u7801\u7f16\u8f91\u5668",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:3},{value:"\u6267\u884c\u8f93\u5165\u7684\u4ee3\u7801\uff0c\u4f7f\u7528pre/code/CodeBlock\u6807\u7b7e",id:"\u6267\u884c\u8f93\u5165\u7684\u4ee3\u7801\u4f7f\u7528precodecodeblock\u6807\u7b7e",level:2},{value:"\u544a\u793a\u6846 note",id:"\u544a\u793a\u6846-note",level:2},{value:"\u7ec4\u4ef6\u5199\u6cd5",id:"\u7ec4\u4ef6\u5199\u6cd5",level:4}],w={Highlight:I,toc:L};function M(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},w,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6807\u9898"},"\u6807\u9898"),(0,r.kt)("p",null,"\u60a8\u51c6\u5907\u597d\u4e3a\u60a8\u7684\u5f00\u6e90\u9879\u76ee\u521b\u5efa\u6587\u6863\u7ad9\u70b9\u4e86\u5417\uff1f"),(0,r.kt)("h2",{id:"\u53f3\u4fa7-1\u7ea7\u6807\u9898"},"\u53f3\u4fa7-1\u7ea7\u6807\u9898"),(0,r.kt)("p",null,"\u6807\u9898\u5c06\u663e\u793a\u5728\u53f3\u4e0a\u65b9\u7684\u76ee\u5f55\u4e2d"),(0,r.kt)("p",null,"\u4ee5\u4fbf\u7528\u6237\u65e0\u9700\u5411\u4e0b\u6eda\u52a8\uff0c\u751a\u81f3\u65e0\u9700\u9605\u8bfb\u66f4\u591a\u5185\u5bb9\uff0c\u4fbf\u53ef\u4e86\u89e3\u6b64\u9875\u7684\u6897\u6982\u3002"),(0,r.kt)("h2",{id:"\u5217\u8868"},"\u5217\u8868"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lists will help you"),(0,r.kt)("li",{parentName:"ul"},"present the key points"),(0,r.kt)("li",{parentName:"ul"},"that you want your users to remember",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"and you may nest them",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"multiple times")))))),(0,r.kt)("h2",{id:"custom-id"},"\u81ea\u5b9a\u4e49id"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{#custom-id}")," "),(0,r.kt)("h3",{id:"\u53f3\u4fa7-2\u7ea7\u6807\u9898"},"\u53f3\u4fa7-2\u7ea7\u6807\u9898"),(0,r.kt)("p",null,"\u52a0\u7c97\uff1a ",(0,r.kt)("strong",{parentName:"p"},"bold"),"  ",(0,r.kt)("a",{parentName:"p",href:"/"},"\u94fe\u63a5")),(0,r.kt)("p",null,"\u56fe\u7247\uff1a\n",(0,r.kt)("img",{alt:"img alt",src:n(7890).Z,width:"200",height:"200"})),(0,r.kt)("p",null,"\u5f15\u8a00\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Easy to maintain open source documentation websites."),(0,r.kt)("p",{parentName:"blockquote"},"\u2014 Docusaurus")),(0,r.kt)("h2",{id:"details-\u5143\u7d20-\u5c55\u5f00\u6536\u8d77\u5757"},"details \u5143\u7d20: \u5c55\u5f00/\u6536\u8d77\u5757"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Toggle me!"),(0,r.kt)("div",null,(0,r.kt)("div",null,"This is the detailed content"),(0,r.kt)("br",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Nested toggle! Some surprise inside..."),(0,r.kt)("div",null,"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32")))),(0,r.kt)("h2",{id:"mdx\u7ec4\u4ef6"},"MDX\u7ec4\u4ef6"),(0,r.kt)(I,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",(0,r.kt)(I,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",(0,r.kt)("p",null,"I can write ",(0,r.kt)("strong",{parentName:"p"},"Markdown")," alongside my ",(0,r.kt)("em",{parentName:"p"},"JSX"),"!"),(0,r.kt)("h3",{id:"\u5bfc\u5165\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u7684\u81ea\u5df1\u7684\u7ec4\u4ef6"},"\u5bfc\u5165\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u7684\u81ea\u5df1\u7684\u7ec4\u4ef6"),(0,r.kt)(I,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green"),(0,r.kt)("h3",{id:"\u7ec4\u4ef6\u4f5c\u7528\u57df"},"\u7ec4\u4ef6\u4f5c\u7528\u57df"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"src/theme/MDXComponents.js \u4e2d\u5f15\u5165")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"src/pages/index.js \u5165\u53e3\u6587\u4ef6\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"<MDXContent></MDXContent>"),"\u5305\u88f9\u4f5c\u7528\u7684\u8303\u56f4\u5916"))),(0,r.kt)("h3",{id:"\u5728-mdx-\u9875\u9762\u4e2d\u4ee5\u4e0b\u53d8\u91cf\u53ef\u4ee5\u4f5c\u4e3a\u5168\u5c40\u53d8\u91cf\u4f7f\u7528"},"\u5728 MDX \u9875\u9762\u4e2d\uff0c\u4ee5\u4e0b\u53d8\u91cf\u53ef\u4ee5\u4f5c\u4e3a\u5168\u5c40\u53d8\u91cf\u4f7f\u7528:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"frontMatter: \u5b57\u7b26\u4e32\u952e\u548c\u503c\u7684\u8bb0\u5f55;"),(0,r.kt)("li",{parentName:"ul"},"toc: \u76ee\u5f55\uff0c\u5982\u6807\u9898\u6811\u3002\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"https://www.docusaurus.cn/docs/markdown-features/toc#inline-table-of-contents"},"Inline TOC")),(0,r.kt)("li",{parentName:"ul"},"contentTitle: markdown\u7684\u6807\u9898\uff0c\u8fd9\u662f\u7b2c\u4e00\u4e2a h1 \u6807\u9898\uff0c\u5982\u679c\u6ca1\u6709\u5219\u4e3aundefined")),(0,r.kt)("p",null,"\u76ee\u5f55\u6811\uff1a"),(0,r.kt)(f.Z,{className:"language-json",mdxType:"CodeBlock"},JSON.stringify(L,null,2)),(0,r.kt)("p",null,"\u5934\u90e8front matter\u914d\u7f6e\uff1a"),(0,r.kt)("ul",null,Object.entries(A).map((e=>{let[t,n]=e;return(0,r.kt)("li",{key:t},(0,r.kt)("b",null,t),": ",n)}))),(0,r.kt)("p",null,"\u6807\u9898\uff1a ",(0,r.kt)("b",null,y)),(0,r.kt)("h3",{id:"\u6807\u7b7e\u7ec4"},"\u6807\u7b7e\u7ec4"),(0,r.kt)(k,{mdxType:"Tabs"},(0,r.kt)(g,{value:"apple",label:"Apple",default:!0,mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,r.kt)(g,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,r.kt)(g,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,r.kt)("h4",{id:"defaultvalue---4\u4e2a\u53f3\u4fa7\u5bfc\u822a\u680f\u4e0d\u663e\u793a"},"defaultValue - 4\u4e2a#\u53f3\u4fa7\u5bfc\u822a\u680f\u4e0d\u663e\u793a"),(0,r.kt)(k,{defaultValue:"banana",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,r.kt)(g,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,r.kt)(g,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,r.kt)(g,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,r.kt)("h4",{id:"groupid-\u76f8\u540c\u65f6\u540c\u6b65\u9009\u4e2d\u7684\u6807\u7b7e\u5361"},"groupId \u76f8\u540c\u65f6\uff0c\u540c\u6b65\u9009\u4e2d\u7684\u6807\u7b7e\u5361"),(0,r.kt)(k,{mdxType:"Tabs"},(0,r.kt)(g,{value:"apple",label:"Apple",attributes:{className:b},mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,r.kt)(g,{value:"orange",label:"Orange",attributes:{className:v},mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,r.kt)(g,{value:"banana",label:"Banana",attributes:{className:N},mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,r.kt)(k,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(g,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + C to copy."),(0,r.kt)(g,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + C to copy.")),(0,r.kt)(k,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(g,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + V to paste."),(0,r.kt)(g,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + V to paste.")),(0,r.kt)("h4",{id:"classname-\u81ea\u5b9a\u4e49\u6837\u5f0f"},"className \u81ea\u5b9a\u4e49\u6837\u5f0f"),(0,r.kt)(k,{className:"unique-tabs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,r.kt)(g,{value:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,r.kt)(g,{value:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,r.kt)("h3",{id:"\u591a\u683c\u5f0f\u7684\u4ee3\u7801tab"},"\u591a\u683c\u5f0f\u7684\u4ee3\u7801Tab"),(0,r.kt)(k,{mdxType:"Tabs"},(0,r.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function helloWorld() {\n  console.log('Hello, world!');\n}\n"))),(0,r.kt)(g,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def hello_world():\n  print("Hello, world!")\n'))),(0,r.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class HelloWorld {\n  public static void main(String args[]) {\n    // ...\n  }\n}\n")))),(0,r.kt)("h3",{id:"npm-yarn-\u6307\u4ee4\u4f7f\u7528\u53ea\u5199\u4e00\u4e2anpm"},"npm/ yarn \u6307\u4ee4\u4f7f\u7528\uff0c\u53ea\u5199\u4e00\u4e2anpm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @docusaurus/remark-plugin-npm2yarn\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          remarkPlugins: [\n            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],\n          ],\n        },\n        pages: {\n          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],\n        },\n        blog: {\n          // ...\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)(k,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(g,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @docusaurus/remark-plugin-npm2yarn\n"))),(0,r.kt)(g,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/remark-plugin-npm2yarn\n")))),(0,r.kt)("h2",{id:"\u5f15\u5165\u6587\u4ef6\u4ee3\u7801-raw-loader"},"\u5f15\u5165\u6587\u4ef6\u4ee3\u7801 raw-loader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"npm install --save raw-loader\n")),(0,r.kt)(f.Z,{language:"jsx",mdxType:"CodeBlock"},"import React from 'react';\n\nexport default function (props) {\n  return (\n    <div></div>\n  )\n}"),(0,r.kt)("h2",{id:"\u5f15\u5165\u4ee3\u7801\u6bb5"},"\u5f15\u5165\u4ee3\u7801\u6bb5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/HelloCodeTitle.js"',title:'"/src/components/HelloCodeTitle.js"'},"function HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log('Every repo must come with a mascot.');\n")),(0,r.kt)("h3",{id:"\u4ee3\u7801\u9ad8\u4eae---prism"},"\u4ee3\u7801\u9ad8\u4eae - prism"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"prism: {\n  theme: lightCodeTheme,\n  darkTheme: darkCodeTheme,\n  //\n  // \u8bed\u6cd5\u9ad8\u4eae\u4e3b\u9898\uff0c\u9ed8\u8ba4\u4f7f\u7528 Prism \u7684 Palenight\n  // theme: require('prism-react-renderer/themes/vsLight'),\n  // darkTheme: require('prism-react-renderer/themes/vsDark'),\n  defaultLanguage: 'javascript',\n},\n")),(0,r.kt)("h3",{id:"\u4ee3\u7801\u884c\u9ad8\u4eae"},"\u4ee3\u7801\u884c\u9ad8\u4eae"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"highlight-next-line"),(0,r.kt)("li",{parentName:"ul"},"highlight-start / highlight-end"),(0,r.kt)("li",{parentName:"ul"},"\u5143\u5b57\u7b26\u4e32\u4e2d\u6307\u5b9a\u7a81\u51fa\u663e\u793a\u7684\u884c\u8303\u56f4\uff0c\u5982\uff1a{1,4-6,11}")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function HighlightSomeText(highlight) {\n  if (highlight) {\n    // highlight-next-line\n    return 'This text is highlighted!';\n  }\n\n  return 'Nothing highlighted';\n}\n\nfunction HighlightMoreText(highlight) {\n  // highlight-start\n  if (highlight) {\n    return 'This range is highlighted!';\n  }\n  // highlight-end\n\n  return 'Nothing highlighted';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,4-6,11}","{1,4-6,11}":!0},"import React from 'react';\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n")),(0,r.kt)("h3",{id:"\u6ce8\u91ca\u7cfb\u7edf--magiccomments"},"\u6ce8\u91ca\u7cfb\u7edf  magicComments"),(0,r.kt)("p",null,"In JavaScript, trying to access properties on ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," will error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const name = null;\n// This will error\nconsole.log(name.toUpperCase());\n// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')\n")),(0,r.kt)("h3",{id:"\u663e\u793a\u884c\u53f7--showlinenumbers"},"\u663e\u793a\u884c\u53f7  showLineNumbers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,4-6,11} showLineNumbers","{1,4-6,11}":!0,showLineNumbers:!0},"import React from 'react';\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n")),(0,r.kt)("h2",{id:"\u4ea4\u4e92\u5f0f\u4ee3\u7801\u7f16\u8f91\u5668"},"\u4ea4\u4e92\u5f0f\u4ee3\u7801\u7f16\u8f91\u5668"),(0,r.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/theme-live-codeblock\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themes: ['@docusaurus/theme-live-codeblock'],\n  // ...\n};\n")),(0,r.kt)("h3",{id:"\u5e94\u7528"},"\u5e94\u7528"),(0,r.kt)("p",null,"\u5728\u4ee3\u7801\u6bb5\u540e\u9762\u6dfb\u52a0 live \u5b57\u6bb5\uff0c\u5c31\u53ef\u4ee5\u7f16\u8f91\u4ee3\u7801\u4e86\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," \u53ef\u4ee5\u5b9e\u65f6\u8f93\u51fa\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")),(0,r.kt)("h2",{id:"\u6267\u884c\u8f93\u5165\u7684\u4ee3\u7801\u4f7f\u7528precodecodeblock\u6807\u7b7e"},"\u6267\u884c\u8f93\u5165\u7684\u4ee3\u7801\uff0c\u4f7f\u7528pre/code/CodeBlock\u6807\u7b7e"),(0,r.kt)("pre",null,(0,r.kt)("b",null,"Input: "),"1 2 3 4","\n",(0,r.kt)("b",null,"Output: "),'"366300745"',"\n"),(0,r.kt)("code",null,(0,r.kt)("b",null,"Input: "),"1 2 3 4","\n",(0,r.kt)("b",null,"Output: "),'"366300745"',"\n"),(0,r.kt)(f.Z,{mdxType:"CodeBlock"},(0,r.kt)("b",null,"Input: "),"1 2 3 4","\n",(0,r.kt)("b",null,"Output: "),'"366300745"',"\n"),(0,r.kt)("h2",{id:"\u544a\u793a\u6846-note"},"\u544a\u793a\u6846 note"),(0,r.kt)("admonition",{title:"\u81ea\u5b9a\u4e49\u6807\u9898",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{title:"Use tabs in admonitions",type:"tip"},(0,r.kt)(k,{mdxType:"Tabs"},(0,r.kt)(g,{value:"apple",label:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,r.kt)(g,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,r.kt)(g,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,r.kt)("h4",{id:"\u7ec4\u4ef6\u5199\u6cd5"},"\u7ec4\u4ef6\u5199\u6cd5"),(0,r.kt)(T.Z,{type:"tip",icon:"\ud83d\udca1",title:"Did you know...",mdxType:"Admonition"},(0,r.kt)("p",null,"Use plugins to introduce shorter syntax for the most commonly used JSX elements in your project.")))}M.isMDXComponent=!0},7890:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);