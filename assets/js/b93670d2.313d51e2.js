"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[9436],{58860:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},g=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||y[d]||l;return n?a.createElement(m,p(p({ref:t},g),{},{components:n})):a.createElement(m,p({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[s]="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(75890),r=(n(37953),n(58860));const l={description:"\u8349\u7a3f",slug:"/465964d",tags:["\u8349\u7a3f"]},p="Next.js",i={unversionedId:"Next.js",id:"Next.js",title:"Next.js",description:"\u8349\u7a3f",source:"@site/04.fullStack/02.Next.js.md",sourceDirName:".",slug:"/465964d",permalink:"/fullStack/465964d",draft:!1,tags:[{label:"\u8349\u7a3f",permalink:"/fullStack/tags/\u8349\u7a3f"}],version:"current",sidebarPosition:2,frontMatter:{description:"\u8349\u7a3f",slug:"/465964d",tags:["\u8349\u7a3f"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528mern_next.js\u642d\u5efa\u9879\u76ee",permalink:"/fullStack/52fb6ce"},next:{title:"\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1",permalink:"/fullStack/02399f0"}},o={},u=[{value:"Node.js\u7248\u672c\u8981\u6c42",id:"nodejs\u7248\u672c\u8981\u6c42",level:2},{value:"\u521b\u5efa Next.js \u9879\u76ee",id:"\u521b\u5efa-nextjs-\u9879\u76ee",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"App Router",id:"app-router",level:2},{value:"layout\u5e03\u5c40\u6587\u4ef6",id:"layout\u5e03\u5c40\u6587\u4ef6",level:3},{value:"page\u9875\u9762\u6587\u4ef6",id:"page\u9875\u9762\u6587\u4ef6",level:3},{value:"\u5bfc\u822a",id:"\u5bfc\u822a",level:3},{value:"App Router \u4e0e Pages Router \u533a\u522b",id:"app-router-\u4e0e-pages-router-\u533a\u522b",level:2},{value:"Pages Router\uff08\u57fa\u4e8e\u6587\u4ef6\u7684\u8def\u7531\u7cfb\u7edf\uff09",id:"pages-router\u57fa\u4e8e\u6587\u4ef6\u7684\u8def\u7531\u7cfb\u7edf",level:3},{value:"App Router\uff08\u65b0\u7684\u6587\u4ef6\u5939\u8def\u7531\u7cfb\u7edf\uff09",id:"app-router\u65b0\u7684\u6587\u4ef6\u5939\u8def\u7531\u7cfb\u7edf",level:3},{value:"\u533a\u522b",id:"\u533a\u522b",level:3}],g={toc:u},s="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"nextjs"},"Next.js"),(0,r.yg)("h2",{id:"nodejs\u7248\u672c\u8981\u6c42"},"Node.js\u7248\u672c\u8981\u6c42"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Node.js 18.18\u6216\u66f4\u9ad8\u7248\u672c")),(0,r.yg)("h2",{id:"\u521b\u5efa-nextjs-\u9879\u76ee"},"\u521b\u5efa Next.js \u9879\u76ee"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app@latest   \n")),(0,r.yg)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 pages                 // Pages router\n\u251c\u2500\u2500 app                   // App router\n\u2502   \u251c\u2500\u2500 layout                            // \u8def\u7531\u6587\u4ef6  .js .jsx .tsx \u5e03\u5c40\n\u2502   \u251c\u2500\u2500 page                              // \u8def\u7531\u6587\u4ef6  .js .jsx .tsx \u9875\u9762\n\u2502   \u251c\u2500\u2500 loading                           // \u8def\u7531\u6587\u4ef6  .js .jsx .tsx \u52a0\u8f7d\u9875\u9762\n\u2502   \u251c\u2500\u2500 not-found                         // \u8def\u7531\u6587\u4ef6  .js .jsx .tsx 404\u9875\u9762\n\u2502   \u251c\u2500\u2500 error                             // \u8def\u7531\u6587\u4ef6  .js .jsx .tsx \u9519\u8bef\u9875\u9762\n\u2502   \u251c\u2500\u2500 global-error                      // \u8def\u7531\u6587\u4ef6  .js .jsx .tsx \u5168\u5c40\u9519\u8bef\u9875\u9762\n\u2502   \u251c\u2500\u2500 route                             // \u8def\u7531\u6587\u4ef6  .js .ts API \u7aef\u70b9\n\u2502   \u251c\u2500\u2500 template                          // \u8def\u7531\u6587\u4ef6  .js .jsx .tsx \u91cd\u65b0\u6e32\u67d3\u7684\u5e03\u5c40\n\u2502   \u251c\u2500\u2500 default                           // \u8def\u7531\u6587\u4ef6  .js .jsx .tsx \u5e76\u884c\u8def\u7531\u56de\u9000\u9875\u9762\n\u251c\u2500\u2500 public                                // \u9759\u6001\u8d44\u6e90\n\u251c\u2500\u2500 next.config.js                        // Next.js \u7684\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 package.json                          // \u9879\u76ee\u4f9d\u8d56\u548c\u811a\u672c\n\u251c\u2500\u2500 instrumentation.ts                    // OpenTelemetry \u548c\u68c0\u6d4b\u6587\u4ef6\n\u251c\u2500\u2500 middleware.ts                         // Next.js \u8bf7\u6c42\u4e2d\u95f4\u4ef6\n\u251c\u2500\u2500 .env                                  // \u73af\u5883\u53d8\u91cf\n\u251c\u2500\u2500 .env.local                            // \u672c\u5730\u73af\u5883\u53d8\u91cf\n\u251c\u2500\u2500 .env.production                       // \u751f\u4ea7\u73af\u5883\u53d8\u91cf\n\u251c\u2500\u2500 .env.development                      // \u5f00\u53d1\u73af\u5883\u53d8\u91cf\n\u251c\u2500\u2500 .eslintrc.json                        // ESLint \u7684\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 .gitignore                            // Git \u8981\u5ffd\u7565\u7684\u6587\u4ef6\u548c\u6587\u4ef6\u5939\n\u251c\u2500\u2500 next-env.d.ts                         // Next.js \u7684 TypeScript \u58f0\u660e\u6587\u4ef6\n\u251c\u2500\u2500 tsconfig.json                         // TypeScript \u7684\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 jsconfig.json                         // JavaScript \u7684\u914d\u7f6e\u6587\u4ef6\n")),(0,r.yg)("h2",{id:"app-router"},"App Router"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://nextjscn.org/docs/app/building-your-application/routing"},"\u5b98\u65b9\u6587\u6863")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Next.js App Router \u7528\u6587\u4ef6\u5939\u5b9a\u4e49\u8def\u7531")),(0,r.yg)("h3",{id:"layout\u5e03\u5c40\u6587\u4ef6"},"layout\u5e03\u5c40\u6587\u4ef6"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6839\u5e03\u5c40\u662f\u5fc5\u9700\u6587\u4ef6\uff0c\u82e5\u6ca1\u6709\uff0cnext build\u4f1a\u81ea\u52a8\u751f\u6210"),(0,r.yg)("p",{parentName:"blockquote"},"\u652f\u6301\u5d4c\u5957\u5e03\u5c40\uff0c\u5144\u5f1f\u5e03\u5c40\u4e4b\u95f4\u5207\u6362\uff0c\u5176\u540c\u4e00\u4e2a\u7236\u5e03\u5c40\u4e0d\u91cd\u65b0\u6e32\u67d3")),(0,r.yg)("h3",{id:"page\u9875\u9762\u6587\u4ef6"},"page\u9875\u9762\u6587\u4ef6"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u8def\u7531\u5fc5\u9700\u6587\u4ef6\uff0c\u82e5\u6ca1\u6709\uff0c\u5219\u8868\u793a\u5f53\u524d\u975e\u8def\u7531\u6587\u4ef6\u5939")),(0,r.yg)("h3",{id:"\u5bfc\u822a"},"\u5bfc\u822a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Link\u7ec4\u4ef6")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import Link from 'next/link'\n \nexport default function Page() {\n  return <Link href=\"/dashboard\">\u4eea\u8868\u76d8</Link>\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"useRouter() \u5ba2\u6237\u7aef\u7ec4\u4ef6\u4e2d\u4f7f\u7528")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"'use client'\n \nimport { useRouter } from 'next/navigation'\n \nexport default function Page() {\n  const router = useRouter()\n \n  return (\n    <button type=\"button\" onClick={() => router.push('/dashboard')}>\n      \u4eea\u8868\u76d8\n    </button>\n  )\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"redirect() \u670d\u52a1\u7aef\u7ec4\u4ef6\u4e2d\u4f7f\u7528")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import { redirect } from 'next/navigation'\n \nasync function fetchTeam(id: string) {\n  const res = await fetch('https://...')\n  if (!res.ok) return undefined\n  return res.json()\n}\n \nexport default async function Profile({ params }: { params: { id: string } }) {\n  const team = await fetchTeam(params.id)\n  if (!team) {\n    redirect('/login')\n  }\n \n  // ...\n}\n")),(0,r.yg)("h2",{id:"app-router-\u4e0e-pages-router-\u533a\u522b"},"App Router \u4e0e Pages Router \u533a\u522b"),(0,r.yg)("h3",{id:"pages-router\u57fa\u4e8e\u6587\u4ef6\u7684\u8def\u7531\u7cfb\u7edf"},"Pages Router\uff08\u57fa\u4e8e\u6587\u4ef6\u7684\u8def\u7531\u7cfb\u7edf\uff09"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u8def\u5f84\u6620\u5c04\uff1a\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684 .js \u6216 .ts \u6587\u4ef6\u81ea\u52a8\u6620\u5c04\u5230\u8def\u7531\u8def\u5f84\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u6587\u4ef6\u8def\u5f84\uff1apages/index.js \u2192 \u8def\u5f84\uff1a/"),(0,r.yg)("li",{parentName:"ul"},"\u6587\u4ef6\u8def\u5f84\uff1apages/about.js \u2192 \u8def\u5f84\uff1a/about"),(0,r.yg)("li",{parentName:"ul"},"\u6e32\u67d3\u65b9\u5f0f\uff1a",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301 getStaticProps\u3001getServerSideProps \u548c getInitialProps\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u6bd4\u8f83\u9002\u5408\u5355\u4e2a\u9875\u9762\u7684\u9759\u6001\u751f\u6210 (SSG) \u548c\u670d\u52a1\u7aef\u6e32\u67d3 (SSR)\u3002"))),(0,r.yg)("li",{parentName:"ul"},"\u5e03\u5c40\u7ba1\u7406\uff1a\u6ca1\u6709\u5185\u7f6e\u5e03\u5c40\u6982\u5ff5\uff0c\u9700\u624b\u52a8\u901a\u8fc7\u7ec4\u4ef6\u6216 HOC \u5b9e\u73b0\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u52a8\u6001\u8def\u7531\uff1a\u901a\u8fc7\u6587\u4ef6\u540d\u5b9e\u73b0\uff0c\u4f8b\u5982 ","[id]",".js \u2192 /post/:id\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u4e2d\u95f4\u4ef6\uff1a\u9700\u8981\u914d\u5408\u81ea\u5b9a\u4e49 _middleware \u6587\u4ef6\u5b9e\u73b0\uff08\u652f\u6301\u8f83\u5c11\uff09\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u72b6\u6001\u7ba1\u7406\uff1a\u65e0\u5185\u7f6e\u7684\u72b6\u6001\u7ba1\u7406\u5de5\u5177\uff0c\u9700\u8981\u624b\u52a8\u5f15\u5165\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u9002\u7528\u573a\u666f\uff1a\u7ecf\u5178\u7684\u4f20\u7edf\u5f00\u53d1\u6a21\u5f0f\uff0c\u9002\u5408\u5c0f\u578b\u6216\u8fc1\u79fb\u9879\u76ee\u3002")),(0,r.yg)("h3",{id:"app-router\u65b0\u7684\u6587\u4ef6\u5939\u8def\u7531\u7cfb\u7edf"},"App Router\uff08\u65b0\u7684\u6587\u4ef6\u5939\u8def\u7531\u7cfb\u7edf\uff09"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u8def\u5f84\u6620\u5c04\uff1a\u57fa\u4e8e\u6587\u4ef6\u5939\u7684\u7ed3\u6784\uff0c\u4e3b\u8981\u4ee5 app \u6587\u4ef6\u5939\u4e3a\u6839\u76ee\u5f55\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u6587\u4ef6\u5939\uff1aapp/page.js \u2192 \u8def\u5f84\uff1a/"),(0,r.yg)("li",{parentName:"ul"},"\u6587\u4ef6\u5939\uff1aapp/about/page.js \u2192 \u8def\u5f84\uff1a/about"),(0,r.yg)("li",{parentName:"ul"},"\u6e32\u67d3\u65b9\u5f0f\uff1a",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u9ed8\u8ba4\u652f\u6301 React \u670d\u52a1\u5668\u7ec4\u4ef6\uff08Server Components\uff09\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u66f4\u7ec6\u7c92\u5ea6\u7684 SSR/SSG \u63a7\u5236\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301\u6e10\u8fdb\u5f0f\u9875\u9762\u52a0\u8f7d\uff08Streaming\uff09\u3002"))),(0,r.yg)("li",{parentName:"ul"},"\u5e03\u5c40\u7ba1\u7406\uff1a",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u5f15\u5165\u4e86 layout.js \u6587\u4ef6\uff0c\u53ef\u5b9a\u4e49\u5171\u4eab\u5e03\u5c40\uff0c\u81ea\u52a8\u4f5c\u7528\u4e8e\u5b50\u8def\u7531\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u6587\u4ef6\u8def\u5f84\uff1aapp/layout.js \u2192 \u5168\u5c40\u5e03\u5c40\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u52a8\u6001\u8def\u7531\uff1a\u901a\u8fc7\u6587\u4ef6\u5939\u5b9e\u73b0\uff0c\u4f8b\u5982 ","[id]"," \u2192 /post/:id\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u4e2d\u95f4\u4ef6\uff1a\u66f4\u73b0\u4ee3\u5316\u7684 API\uff0c\u4f8b\u5982\u76f4\u63a5\u5904\u7406 API \u8bf7\u6c42\u3002"))),(0,r.yg)("li",{parentName:"ul"},"\u72b6\u6001\u7ba1\u7406\uff1a",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u7ed3\u5408 React 18 \u7279\u6027\uff0c\u81ea\u5e26\u6d41\u5f0f\uff08streaming\uff09\u6e32\u67d3\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u9002\u7528\u573a\u666f\uff1a\u4e3a\u73b0\u4ee3 React \u5e94\u7528\u8bbe\u8ba1\uff0c\u9002\u5408\u5927\u578b\u9879\u76ee\u548c\u9700\u8981\u9ad8\u6027\u80fd\u7684\u5e94\u7528\u3002")))),(0,r.yg)("h3",{id:"\u533a\u522b"},"\u533a\u522b"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u7279\u6027"),(0,r.yg)("th",{parentName:"tr",align:null},"Pages Router"),(0,r.yg)("th",{parentName:"tr",align:null},"App Router"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"\u6587\u4ef6\u5939\u4f4d\u7f6e")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pages")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"app"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"\u5e03\u5c40\u652f\u6301")),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0\u5185\u7f6e\u5e03\u5c40"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u591a\u5c42\u7ea7\u5e03\u5c40\uff0c",(0,r.yg)("inlineCode",{parentName:"td"},"layout.js")," \u5b9e\u73b0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"\u9ed8\u8ba4\u7ec4\u4ef6\u6a21\u5f0f")),(0,r.yg)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u7ec4\u4ef6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u4e3a\u670d\u52a1\u5668\u7ec4\u4ef6\uff1b\u5982\u679c\u9700\u8981\u4f7f\u7528\u5ba2\u6237\u7aef\u7ec4\u4ef6\uff0c\u53ea\u9700\u5728\u6587\u4ef6\u9876\u90e8\u6dfb\u52a0\u7279\u6b8a\u6307\u4ee4\uff1a'use client'")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"\u52a8\u6001\u8def\u7531")),(0,r.yg)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u540d ",(0,r.yg)("inlineCode",{parentName:"td"},"[id].js")),(0,r.yg)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u5939 ",(0,r.yg)("inlineCode",{parentName:"td"},"[id]"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"SEO \u548c\u5143\u6570\u636e\u7ba1\u7406")),(0,r.yg)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49 ",(0,r.yg)("inlineCode",{parentName:"td"},"<Head>")," \u7ec4\u4ef6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"td"},"metadata")," \u5c5e\u6027")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"\u6027\u80fd\u4f18\u5316")),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f20\u7edf SSR \u548c SSG"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u6d41\u5f0f\u6e32\u67d3\uff08Streaming\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"\u9002\u7528\u573a\u666f")),(0,r.yg)("td",{parentName:"tr",align:null},"\u7b80\u5355\u5e94\u7528\u6216\u9700\u8981\u5411\u540e\u517c\u5bb9\u7684\u9879\u76ee"),(0,r.yg)("td",{parentName:"tr",align:null},"\u590d\u6742\u5e94\u7528\uff0c\u9002\u5408\u73b0\u4ee3 React \u67b6\u6784")))),(0,r.yg)("p",null,"\u603b\u7ed3\uff1a\n\u5982\u679c\u662f\u65b0\u9879\u76ee\uff0c\u5efa\u8bae\u4f7f\u7528 App Router\uff0c\u5b83\u66f4\u73b0\u4ee3\u5316\uff0c\u652f\u6301\u6700\u65b0\u7684 React \u529f\u80fd\u3002\n\u5982\u679c\u662f\u8fc1\u79fb\u6216\u5c0f\u578b\u9879\u76ee\uff0cPages Router \u53ef\u80fd\u66f4\u7b80\u5355\u76f4\u63a5\u3002"))}y.isMDXComponent=!0}}]);