"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[2769],{68169:(e,t,a)=>{a.d(t,{A:()=>p});var n=a(37953),l=a(68835),r=a(62506),i=a(52928),s=a(42530),o=a(99795);const c={sidebar:"sidebar_G3HV",sidebarItemTitle:"sidebarItemTitle_Uf7i",sidebarItemList:"sidebarItemList_Lvjm",sidebarItem:"sidebarItem_YxqD",sidebarItemLink:"sidebarItemLink_cMLR",sidebarItemLinkActive:"sidebarItemLinkActive_EmyY"};function m(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.A)(c.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.A)(c.sidebarItemTitle,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.A)(c.sidebarItemList,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:c.sidebarItem},n.createElement(s.A,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var u=a(44019);function d(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return n.createElement(u.GX,{component:d,props:e})}function h(e){let{sidebar:t}=e;const a=(0,i.l)();return t?.items.length?"mobile"===a?n.createElement(g,{sidebar:t}):n.createElement(m,{sidebar:t}):null}function p(e){const{sidebar:t,toc:a,children:i,...s}=e,o=t&&t.items.length>0;return n.createElement(r.A,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(h,{sidebar:t}),n.createElement("main",{className:(0,l.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},44758:(e,t,a)=>{a.d(t,{A:()=>M});var n=a(37953),l=a(68835),r=a(41178),i=a(39100);function s(e){let{children:t,className:a}=e;const{frontMatter:l,assets:s}=(0,r.e)(),{withBaseUrl:o}=(0,i.h)(),c=s.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&n.createElement("meta",{itemProp:"image",content:o(c,{absolute:!0})}),t)}var o=a(42530);const c={title:"title_CVAp"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.e)(),{permalink:s,title:m}=a,u=i?"h1":"h2";return n.createElement(u,{className:(0,l.A)(c.title,t),itemProp:"headline"},i?m:n.createElement(o.A,{itemProp:"url",to:s},m))}var u=a(99795),d=a(49160);const g={container:"container_FUpl"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.W)();return t=>{const a=Math.ceil(t);return e(a,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function p(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return n.createElement(n.Fragment,null," \xb7 ")}function f(e){let{className:t}=e;const{metadata:a}=(0,r.e)(),{date:i,formattedDate:s,readingTime:o}=a;return n.createElement("div",{className:(0,l.A)(g.container,"margin-vert--md",t)},n.createElement(p,{date:i,formattedDate:s}),void 0!==o&&n.createElement(n.Fragment,null,n.createElement(E,null),n.createElement(h,{readingTime:o})))}function b(e){return e.href?n.createElement(o.A,e):n.createElement(n.Fragment,null,e.children)}function A(e){let{author:t,className:a}=e;const{name:r,title:i,url:s,imageURL:o,email:c}=t,m=s||c&&`mailto:${c}`||void 0;return n.createElement("div",{className:(0,l.A)("avatar margin-bottom--sm",a)},o&&n.createElement(b,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:o,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(b,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),i&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const v={authorCol:"authorCol_WjsX",imageOnlyAuthorRow:"imageOnlyAuthorRow_gEto",imageOnlyAuthorCol:"imageOnlyAuthorCol_VzAM"};function N(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.e)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.A)("margin-top--md margin-bottom--sm",s?v.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.A)(!s&&"col col--6",s?v.imageOnlyAuthorCol:v.authorCol),key:t},n.createElement(A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function _(){return n.createElement("header",null,n.createElement(m,null),n.createElement(f,null),n.createElement(N,null))}var k=a(92775),P=a(63310);function y(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,r.e)();return n.createElement("div",{id:i?k.blogPostContainerID:void 0,className:(0,l.A)("markdown",a),itemProp:"articleBody"},n.createElement(P.A,null,t))}var T=a(35873),C=a(88241),L=a(75890);function w(){return n.createElement("b",null,n.createElement(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function F(e){const{blogPostTitle:t,...a}=e;return n.createElement(o.A,(0,L.A)({"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(w,null))}const I={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_gJyC"};function x(){const{metadata:e,isBlogPostPage:t}=(0,r.e)(),{tags:a,title:i,editUrl:s,hasTruncateMarker:o}=e,c=!t&&o,m=a.length>0;return m||c||s?n.createElement("footer",{className:(0,l.A)("row docusaurus-mt-lg",t&&I.blogPostFooterDetailsFull)},m&&n.createElement("div",{className:(0,l.A)("col",{"col--9":c})},n.createElement(C.A,{tags:a})),t&&s&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(T.A,{editUrl:s})),c&&n.createElement("div",{className:(0,l.A)("col text--right",{"col--3":m})},n.createElement(F,{blogPostTitle:i,to:e.permalink}))):null}function M(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.e)();return e?void 0:"margin-bottom--xl"}();return n.createElement(s,{className:(0,l.A)(i,a)},n.createElement(_,null),n.createElement(y,null,t),n.createElement(x,null))}},35873:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(37953),l=a(99795),r=a(1886),i=a(75890),s=a(68835);const o={iconEdit:"iconEdit_Zdg2"};function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,i.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(o.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.G.common.editThisPage},n.createElement(c,null),n.createElement(l.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},76427:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(75890),l=a(37953),r=a(68835),i=a(99795),s=a(9749);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_si9l",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_Gkth"};function c(e){let{as:t,id:a,...c}=e;const{navbar:{hideOnScroll:m}}=(0,s.p)();return"h1"!==t&&a?l.createElement(t,(0,n.A)({},c,{className:(0,r.A)("anchor",m?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar),id:a}),c.children,l.createElement("a",{className:"hash-link",href:`#${a}`,title:(0,i.T)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,n.A)({},c,{id:void 0}))}},9101:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(75890),l=a(37953),r=a(59629);var i=a(63427);var s=a(42530);var o=a(68835),c=a(90526),m=a(3341);const u="details_XWbd",d="isBrowser_x4cp",g="collapsibleContent_XHtn";function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function E(e){let{summary:t,children:a,...r}=e;const i=(0,c.A)(),s=(0,l.useRef)(null),{collapsed:E,setCollapsed:f}=(0,m.u)({initialState:!r.open}),[b,A]=(0,l.useState)(r.open);return l.createElement("details",(0,n.A)({},r,{ref:s,open:b,"data-collapsed":E,className:(0,o.A)(u,i&&d,r.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&p(t,s.current)&&(e.preventDefault(),E?(f(!1),A(!0)):f(!0))}}),t??l.createElement("summary",null,"Details"),l.createElement(m.N,{lazy:!1,collapsed:E,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{f(e),A(!e)}},l.createElement("div",{className:g},a)))}const f="details_GnGh";function b(e){let{...t}=e;return l.createElement(E,(0,n.A)({},t,{className:(0,o.A)("alert alert--info",f,t.className)}))}var A=a(76427);function v(e){return l.createElement(A.A,e)}const N="containsTaskList_UMDo";const _="img_bYug";const k={head:function(e){const t=l.Children.map(e.children,(e=>l.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:a,...n}=e.props;return l.createElement(e.props.originalType,n)}return e}(e):e));return l.createElement(r.A,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return l.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,l.isValidElement)(e)&&t.includes(e.props?.mdxType)))?l.createElement("code",e):l.createElement(i.A,e)},a:function(e){return l.createElement(s.A,e)},pre:function(e){return l.createElement(i.A,(0,l.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=l.Children.toArray(e.children),a=t.find((e=>l.isValidElement(e)&&"summary"===e.props?.mdxType)),r=l.createElement(l.Fragment,null,t.filter((e=>e!==a)));return l.createElement(b,(0,n.A)({},e,{summary:a}),r)},ul:function(e){return l.createElement("ul",(0,n.A)({},e,{className:(t=e.className,(0,o.A)(t,t?.includes("contains-task-list")&&N))}));var t},img:function(e){return l.createElement("img",(0,n.A)({loading:"lazy"},e,{className:(t=e.className,(0,o.A)(t,_))}));var t},h1:e=>l.createElement(v,(0,n.A)({as:"h1"},e)),h2:e=>l.createElement(v,(0,n.A)({as:"h2"},e)),h3:e=>l.createElement(v,(0,n.A)({as:"h3"},e)),h4:e=>l.createElement(v,(0,n.A)({as:"h4"},e)),h5:e=>l.createElement(v,(0,n.A)({as:"h5"},e)),h6:e=>l.createElement(v,(0,n.A)({as:"h6"},e)),admonition:a(11843).A}},63310:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(37953),l=a(58860),r=a(82645);function i(e){let{children:t}=e;return n.createElement(l.xA,{components:r.A},t)}},32470:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(37953),l=a(68835),r=a(42530);function i(e){const{permalink:t,title:a,subLabel:i,isNext:s}=e;return n.createElement(r.A,{className:(0,l.A)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},90609:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(37953),l=a(68835),r=a(42530);const i={tag:"tag_EuDY",tagRegular:"tagRegular_EGrb",tagWithCount:"tagWithCount_FWEd"};function s(e){let{permalink:t,label:a,count:s}=e;return n.createElement(r.A,{href:t,className:(0,l.A)(i.tag,s?i.tagWithCount:i.tagRegular)},a,s&&n.createElement("span",null,s))}},88241:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(37953),l=a(68835),r=a(99795),i=a(90609);const s={tags:"tags_YOWn",tag:"tag_Z4XM"};function o(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.A)(s.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:s.tag},n.createElement(i.A,{label:t,permalink:a}))}))))}},41178:(e,t,a)=>{a.d(t,{e:()=>s,i:()=>i});var n=a(37953),l=a(98647);const r=n.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:i},t)}function s(){const e=(0,n.useContext)(r);if(null===e)throw new l.dV("BlogPostProvider");return e}},49160:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(37953),l=a(56239);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,l.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}}}]);