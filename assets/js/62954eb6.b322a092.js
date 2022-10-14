"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[890],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var s=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,s,i=function(t,e){if(null==t)return{};var a,s,i={},n=Object.keys(t);for(s=0;s<n.length;s++)a=n[s],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(s=0;s<n.length;s++)a=n[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=s.createContext({}),p=function(t){var e=s.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},m=function(t){var e=p(t.components);return s.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},c=s.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,l=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(a),h=i,g=c["".concat(l,".").concat(h)]||c[h]||d[h]||n;return a?s.createElement(g,r(r({ref:e},m),{},{components:a})):s.createElement(g,r({ref:e},m))}));function h(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,r=new Array(n);r[0]=c;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:i,r[1]=o;for(var p=2;p<n;p++)r[p]=a[p];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1225:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var s=a(7462),i=(a(7294),a(3905));const n={description:"git stach",slug:"/c784d6f",tags:["git stach"]},r=void 0,o={unversionedId:"Git\u7bc7/git stach",id:"Git\u7bc7/git stach",title:"git stach",description:"git stach",source:"@site/docs/10.Git\u7bc7/01.git stach.md",sourceDirName:"10.Git\u7bc7",slug:"/c784d6f",permalink:"/docs/c784d6f",draft:!1,editUrl:"https://github.com/lacorda/lacorda.github.io/blob/master/docs/docs/10.Git\u7bc7/01.git stach.md",tags:[{label:"git stach",permalink:"/docs/tags/git-stach"}],version:"current",lastUpdatedBy:"iyb-chenliyu",lastUpdatedAt:1665743526,formattedLastUpdatedAt:"2022\u5e7410\u670814\u65e5",sidebarPosition:1,frontMatter:{description:"git stach",slug:"/c784d6f",tags:["git stach"]},sidebar:"tutorialSidebar",previous:{title:"state",permalink:"/docs/64d1fec"},next:{title:"git commit",permalink:"/docs/24e2369"}},l={},p=[{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u4fdd\u5b58\u5f53\u524d\u4ee3\u7801",id:"\u4fdd\u5b58\u5f53\u524d\u4ee3\u7801",level:2},{value:"\u67e5\u770bstash\u4ee3\u7801",id:"\u67e5\u770bstash\u4ee3\u7801",level:2},{value:"\u5e94\u7528stash\u4ee3\u7801(\u4e0d\u4f1a\u4ecestash\u5217\u8868\u5220\u9664)",id:"\u5e94\u7528stash\u4ee3\u7801\u4e0d\u4f1a\u4ecestash\u5217\u8868\u5220\u9664",level:2},{value:"\u4ecestash\u5217\u8868\u5220\u9664",id:"\u4ecestash\u5217\u8868\u5220\u9664",level:2},{value:"\u8bef\u5220stash\u600e\u4e48\u529e \u2014\u2014 \u4e07\u80fd\u7684 CommitID",id:"\u8bef\u5220stash\u600e\u4e48\u529e--\u4e07\u80fd\u7684-commitid",level:3},{value:"\u4ee5stash\u50a8\u85cf\u521b\u5efa\u4e00\u4e2a\u5206\u652f",id:"\u4ee5stash\u50a8\u85cf\u521b\u5efa\u4e00\u4e2a\u5206\u652f",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],m={toc:p};function d(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,s.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,i.kt)("p",null,"\ud83d\udc49 \u5f53\u4f60\u6211\u4eec\u6b63\u5728\u4e00\u4e2a\u5206\u652f\u5f00\u53d1\u67d0\u4e2a\u529f\u80fd\u65f6\uff08\u8fd8\u672a\u5b8c\u6210\uff09\uff0c\u7a81\u7136\u9700\u8981\u6211\u4eec\u5207\u6362\u5230\u5176\u4ed6\u5206\u652f\u4e0a\u5904\u7406\u4e00\u4e9b\u4e8b\u60c5\uff08\u6bd4\u5982\u4fee\u6539bug\uff09\uff0c\u76f4\u63a5\u5207\u6362\u662f\u4e0d\u53ef\u4ee5\u7684\uff0c\u4e00\u79cd\u65b9\u6cd5\u662f\u6211\u4eec\u53ef\u4ee5\u5c06\u76ee\u524d\u7684\u6539\u52a8\u63d0\u4ea4\uff0c\u800c\u6211\u4eec\u6b64\u65f6\u5e76\u4e0d\u60f3commit\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"stash"),"\u5c06\u4ee3\u7801\u6682\u65f6  ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"\u50a8\u85cf")),"  \u8d77\u6765"),(0,i.kt)("h2",{id:"\u4fdd\u5b58\u5f53\u524d\u4ee3\u7801"},"\u4fdd\u5b58\u5f53\u524d\u4ee3\u7801"),(0,i.kt)("p",null,'\ud83d\udc49 \u5feb\u901f\u50a8\u85cf\u4ee3\u7801\uff0c\u9ed8\u8ba4\u50a8\u85cf\u540d\u79f0\u4e3a"WIP on <branch_name> \uff1a <latest_commit_id> <latest_commit_message>"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# zsh\u5feb\u6377\u6307\u4ee4\uff1agsta\ngit stash\n")),(0,i.kt)("p",null,"\u6dfb\u52a0\u50a8\u85cf\u4fe1\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git stash save "message"\n')),(0,i.kt)("h2",{id:"\u67e5\u770bstash\u4ee3\u7801"},"\u67e5\u770bstash\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git stash list  # \u67e5\u770bstash\u5217\u8868, zsh\u5feb\u6377\u6307\u4ee4\uff1agstl\ngit stash show  #\u67e5\u770b\u7b2c\u4e00\u4e2a\u50a8\u85cf\u505a\u4e86\u54ea\u4e9b\u6539\u52a8(\u5e76\u4e0d\u662f\u6539\u52a8\u8be6\u60c5), zsh\u5feb\u6377\u6307\u4ee4\uff1agsts\ngit stash show {num}  # \u67e5\u770b\u5176\u4ed6\u50a8\u85cf\u505a\u4e86\u54ea\u4e9b\u6539\u52a8\ngit stash show -p  # \u67e5\u770b\u7b2c\u4e00\u4e2a\u50a8\u85cf\u7684\u6539\u52a8\ngit stash show -p {num}  # \u67e5\u770b\u5176\u4ed6\u50a8\u85cf\u505a\u7684\u6539\u52a8\n")),(0,i.kt)("h2",{id:"\u5e94\u7528stash\u4ee3\u7801\u4e0d\u4f1a\u4ecestash\u5217\u8868\u5220\u9664"},"\u5e94\u7528stash\u4ee3\u7801(\u4e0d\u4f1a\u4ecestash\u5217\u8868\u5220\u9664)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git stash pop  # \u5e94\u7528\u7b2c\u4e00\u4e2a\u50a8\u85cf, zsh\u5feb\u6377\u6307\u4ee4\uff1agstp\ngit stash pop {num}  # \u5e94\u7528stash list\u4e2d\u7684\u7b2cnum\u4e2a\u50a8\u85cf\n")),(0,i.kt)("h2",{id:"\u4ecestash\u5217\u8868\u5220\u9664"},"\u4ecestash\u5217\u8868\u5220\u9664"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git stash drop  # \u5220\u9664\u7b2c\u4e00\u4e2a\u50a8\u85cf, zsh\u5feb\u6377\u6307\u4ee4\uff1agstd\ngit stash drop {num} # \u5220\u9664stash list\u4e2d\u7684\u50a8\u85cf\uff0c\u4f8b\u5982\u5220\u9664\u7b2c\u4e8c\u4e2a\uff1agit stash drop stash@{1}\ngit stash clear # \u5220\u9664\u6240\u6709\u50a8\u85cf\u7684stash, zsh\u5feb\u6377\u6307\u4ee4\uff1agstc\n")),(0,i.kt)("h3",{id:"\u8bef\u5220stash\u600e\u4e48\u529e--\u4e07\u80fd\u7684-commitid"},"\u8bef\u5220stash\u600e\u4e48\u529e \u2014\u2014 \u4e07\u80fd\u7684 CommitID"),(0,i.kt)("p",null,"\ud83d\ude35\u200d\ud83d\udcab \u4e00\u4e0d\u5c0f\u5fc3\u5220\u9664\u4e86stash\uff0c\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"stash list"),"\u91cc\u4e5f\u627e\u4e0d\u5230\u4e86\uff0c\u600e\u4e48\u529e\uff1f\u522b\u6025\uff5e\ud83d\ude1c "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git stash drop")," \u51fa\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"stash"),"\u662f\u53ef\u4ee5\u627e\u56de\u7684\uff0c\u56e0\u4e3a\u6bcf\u6b21 ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash")," \u90fd\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"commit")," \uff0c\u53ea\u8981\u77e5\u9053 ",(0,i.kt)("inlineCode",{parentName:"p"},"commitID")," , \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash apply {commitID}")," \u5c31\u53ef\u4ee5\u5e94\u7528\u4e4b\u524d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"stash")),(0,i.kt)("admonition",{title:"\u5bfb\u627ecommitID\u6709\u4e24\u79cd\u65b9\u6cd5",type:"tip"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"git stash drop")," \u6700\u540e\u4f1a\u6253\u5370\u51fapop\u6389\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"commitid"),"\u503c\uff0c\u82e5\u8fd9\u4e2a\u8bb0\u5f55\u8fd8\u5b58\u5728\u76f4\u63a5\u4f7f\u7528\u5373\u53ef\u3002")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"git stash",src:a(5666).Z,width:"964",height:"74"})),(0,i.kt)("ol",{parentName:"admonition",start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"git fsck --lost-found"),", \u4f1a\u6253\u5370\u51fa\u6240\u6709",(0,i.kt)("inlineCode",{parentName:"li"},"dangling commit"),"\uff0c\u4f46\u662f\u8fd9\u6837\u770b\u7684\u8bdd\u662f\u770b\u4e0d\u51fa\u4efb\u4f55\u6709\u7528\u4fe1\u606f\u7684\uff0c\u6211\u4eec\u9700\u8981\u53e6\u5916\u4e00\u6761\u547d\u4ee4\u5c06\u5176\u5185\u5bb9show\u51fa\u6765\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"git show {commitId}"))),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"git stash",src:a(2600).Z,width:"1052",height:"878"})),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"git stash",src:a(5121).Z,width:"802",height:"216"})," ")),(0,i.kt)("h2",{id:"\u4ee5stash\u50a8\u85cf\u521b\u5efa\u4e00\u4e2a\u5206\u652f"},"\u4ee5stash\u50a8\u85cf\u521b\u5efa\u4e00\u4e2a\u5206\u652f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git stash branch {branchName} {num}  # \u521b\u5efa\u65b0\u5206\u652fbranchName\uff0c\u5e76\u5207\u6362\u5230\u6b64\u5206\u652f\uff0c\u5206\u652f\u7684\u72b6\u6001\u4e0estash\u50a8\u85cf\u65f6\u7684\u72b6\u6001\u4e00\u81f4\uff0c\u6b64\u65f6\u65b0\u5206\u652f\u5e94\u7528\u7684stash\u4ee3\u7801\u8fdb\u4e86\u6682\u5b58\u533a\n")),(0,i.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("admonition",{title:"git stash\u4fe1\u606f\u5b58\u50a8\u5230\u54ea\u4e86\uff1f",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u9879\u76ee\u8def\u5f84\u4e0b\u7684.git\u6587\u4ef6\u4e2d\u5b58\u50a8\u7740\u7248\u672c\u7ba1\u7406\u7684\u6240\u6709\u4fe1\u606f\uff0c\u5728\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},".git/log/refs/stash")," \u4e2d\u53ef\u4ee5\u770b\u5230\u5168\u90e8\u7684 stash \u8bb0\u5f55\u4fe1\u606f")),(0,i.kt)("admonition",{title:"\u65b0\u589e\u6587\u4ef6(\u4e0d\u662f\u65b0\u589e\u4ee3\u7801)\u65f6\uff0cgit stash\u5e76\u4e0d\u4f1a\u50a8\u85cf\u65b0\u589e\u7684\u6587\u4ef6?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u6ca1\u6709\u5728git \u7248\u672c\u63a7\u5236\u4e2d\u7684\u6587\u4ef6\uff0c\u662f\u4e0d\u80fd\u88abgit stash \u5b58\u8d77\u6765\u7684 \uff0c\u6b64\u65f6\u9700\u8981\u5148\u6267\u884c\u4e0bgit add \u5c06\u65b0\u589e\u6587\u4ef6\u52a0\u5230git\u7248\u672c\u63a7\u5236\u4e2d\uff0c\u7136\u540e\u518dgit stash\u5c31\u53ef\u4ee5\u4e86")),(0,i.kt)("admonition",{title:"\u5982\u4f55\u53ea\u4fdd\u5b58\u67d0\u4e9b\u6587\u4ef6\uff1f",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u603b\u5171\u52063\u6b65\uff1a"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"add \u90a3\u4e9b\u4f60\u4e0d\u60f3\u5907\u4efd\u7684\u6587\u4ef6:git add file1.js, file2.js\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"git stash --keep-index"),"\uff1a\u53ea\u4f1a\u4fdd\u5b58\u90a3\u4e9b\u6ca1\u6709\u88abadd\u7684\u6587\u4ef6\uff1b"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"git reset HEAD"),"\uff0c\u5c06\u6682\u5b58\u533a\u7684\u4fee\u6539\u91cd\u7f6e\u5230\u5de5\u4f5c\u533a\u7ee7\u7eedcoding"))),(0,i.kt)("admonition",{title:"git stash push",type:"tip"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},'git stash push -m "message"')," \u7b49\u540c\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},'git stash save "message"')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"git stash push dir/file.js")," \u53ef\u4ee5\u6307\u5b9a\u50a8\u85cf\u8def\u5f84\uff08\u5373\u4e0a\u9762\u7684\u95ee\u9898-\u53ea\u4fdd\u5b58\u67d0\u4e9b\u6587\u4ef6\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"git stash save")," \u65e0\u6b64\u529f\u80fd\uff09"))))}d.isMDXComponent=!0},5666:(t,e,a)=>{a.d(e,{Z:()=>s});const s=a.p+"assets/images/gitstash-36a1686e5a59f4e6f53ff9117733cc07.png"},2600:(t,e,a)=>{a.d(e,{Z:()=>s});const s=a.p+"assets/images/gitstash2-693f548d82b8bbbd628f5d6e7ecd60bb.png"},5121:(t,e,a)=>{a.d(e,{Z:()=>s});const s=a.p+"assets/images/gitstash3-bd2c3f774c005520892c271e398a4aa2.png"}}]);