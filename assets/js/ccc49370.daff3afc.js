(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[6103],{39407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),o=n(93743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,l.Z)(i.tableOfContents,"thin-scrollbar",t)},r.createElement(o.Z,(0,a.Z)({},n,{linkClassName:c,linkActiveClassName:s})))}},93743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(87462),r=n(67294),l=n(86668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,r.useRef)(void 0),n=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=r.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:d,...f}=e;const p=(0,l.L)(),h=m??p.tableOfContents.minHeadingLevel,v=d??p.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return u((0,r.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:h,maxHeadingLevel:v}}),[c,s,h,v])),r.createElement(g,(0,a.Z)({toc:b,className:n,linkClassName:c},f))}},76574:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var a=n(67294),r=n(86010),l=n(10833),o=n(35281),i=n(9460),c=n(39058),s=n(30390),m=n(87462),u=n(95999),d=n(32244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:r,date:o,tags:c,authors:s,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(l.d,{title:n,description:r,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var p=n(39407),h=n(53140),v=n.n(h);function b(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:l}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:u}=r,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:h}=u;return a.createElement(c.Z,{sidebar:t,toc:!d&&l.length>0?a.createElement(p.Z,{toc:l,minHeadingLevel:f,maxHeadingLevel:h}):void 0},a.createElement(s.Z,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}),a.createElement(v(),{html:'\n        <script src="https://utteranc.es/client.js"\n                repo="lacorda/lacorda.github.io"\n                issue-term="pathname"\n                label="Comment"\n                theme="github-light"\n                crossorigin="anonymous"\n                async>\n        <\/script>\n      '}))}function E(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(f,null),a.createElement(b,{sidebar:e.sidebar},a.createElement(t,null))))}},68389:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(67294);const r={...n(22435).Z,Highlight:function(e){let{children:t,color:n}=e;return a.createElement("span",{style:{backgroundColor:n||"#25c2a0",borderRadius:"2px",color:"#fff",padding:"0 0.2rem",margin:"0 0.2rem"}},t)}}},53140:(e,t,n)=>{const{createElement:a,useEffect:r,useRef:l}=n(67294);e.exports=function({html:e,dangerouslySetInnerHTML:t,allowRerender:n,...o}){const i=l(null),c=l(!0);return r((()=>{if(!e||!i.current)throw new Error("html prop can't be null");if(!c.current)return;c.current=Boolean(n);const t=document.createRange().createContextualFragment(e);i.current.innerHTML="",i.current.appendChild(t)}),[e,i]),a("div",{...o,ref:i})}}}]);