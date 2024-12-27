"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[4669],{58860:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>c});var r=t(37953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},y=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),p=g(t),m=a,c=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return t?r.createElement(c,i(i({ref:n},y),{},{components:t})):r.createElement(c,i({ref:n},y))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var g=2;g<l;g++)i[g]=t[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29951:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var r=t(75890),a=(t(37953),t(58860));const l={description:"\u8865\u5145",slug:"/d144797",tags:["\u8865\u5145"]},i="\u8865\u5145",o={unversionedId:"Typescript\u7bc7/\u8865\u5145",id:"Typescript\u7bc7/\u8865\u5145",title:"\u8865\u5145",description:"\u8865\u5145",source:"@site/01.docs/08.Typescript\u7bc7/02.\u8865\u5145.md",sourceDirName:"08.Typescript\u7bc7",slug:"/d144797",permalink:"/docs/d144797",draft:!1,editUrl:"https://github.com/lacorda/lacorda.github.io/blob/master/docs/01.docs/08.Typescript\u7bc7/02.\u8865\u5145.md",tags:[{label:"\u8865\u5145",permalink:"/docs/tags/\u8865\u5145"}],version:"current",lastUpdatedBy:"Lacorda",lastUpdatedAt:1704274640,formattedLastUpdatedAt:"2024\u5e741\u67083\u65e5",sidebarPosition:2,frontMatter:{description:"\u8865\u5145",slug:"/d144797",tags:["\u8865\u5145"]},sidebar:"tutorialSidebar",previous:{title:"\u5165\u95e8",permalink:"/docs/f80af99"},next:{title:"\u7c7b\u578b\u4f53\u64cd",permalink:"/docs/7ce95ae"}},s={},g=[{value:"\u51fd\u6570\u7c7b\u578b",id:"\u51fd\u6570\u7c7b\u578b",level:2},{value:"\u6570\u7ec4\u7c7b\u578b",id:"\u6570\u7ec4\u7c7b\u578b",level:2},{value:"\u5bf9\u8c61\u7c7b\u578b",id:"\u5bf9\u8c61\u7c7b\u578b",level:2},{value:"\u7531\u7c7b\u578b\u751f\u6210\u65b0\u7c7b\u578b",id:"\u7531\u7c7b\u578b\u751f\u6210\u65b0\u7c7b\u578b",level:2},{value:"1.\u4f7f\u7528\u6cdb\u578b",id:"1\u4f7f\u7528\u6cdb\u578b",level:3},{value:"2.keyof\u83b7\u53d6\u5c5e\u6027\u540d\u7c7b\u578b\u7ec4\u6210\u8054\u5408\u7c7b\u578b",id:"2keyof\u83b7\u53d6\u5c5e\u6027\u540d\u7c7b\u578b\u7ec4\u6210\u8054\u5408\u7c7b\u578b",level:3},{value:"3.typeof\u83b7\u53d6\u8fd4\u56de\u503c\u7c7b\u578b\u7ec4\u6210\u8054\u5408\u7c7b\u578b",id:"3typeof\u83b7\u53d6\u8fd4\u56de\u503c\u7c7b\u578b\u7ec4\u6210\u8054\u5408\u7c7b\u578b",level:3},{value:"3.\u7d22\u5f15\u7c7b\u578b",id:"3\u7d22\u5f15\u7c7b\u578b",level:3},{value:"4.\u6761\u4ef6\u7c7b\u578b",id:"4\u6761\u4ef6\u7c7b\u578b",level:3},{value:"5.\u6620\u5c04\u7c7b\u578b",id:"5\u6620\u5c04\u7c7b\u578b",level:3},{value:"6.\u4f7f\u7528\u6a21\u677f\u5b57\u7b26\u4e32",id:"6\u4f7f\u7528\u6a21\u677f\u5b57\u7b26\u4e32",level:3},{value:"7.\u7c7b\u578b\u5de5\u5177",id:"7\u7c7b\u578b\u5de5\u5177",level:3},{value:"8.\u5b57\u7b26\u4e32\u64cd\u4f5c\u7c7b\u578b",id:"8\u5b57\u7b26\u4e32\u64cd\u4f5c\u7c7b\u578b",level:3},{value:"\u91cd\u8f7d\u51fd\u6570",id:"\u91cd\u8f7d\u51fd\u6570",level:2},{value:"\u5176\u5b83",id:"\u5176\u5b83",level:2},{value:"1.Parameters",id:"1parameters",level:3},{value:"2.const\u7c7b\u578b\u65ad\u8a00\u4e2d\u7684\u5b57\u9762\u91cf\u7c7b\u578b",id:"2const\u7c7b\u578b\u65ad\u8a00\u4e2d\u7684\u5b57\u9762\u91cf\u7c7b\u578b",level:3}],y={toc:g},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u8865\u5145"},"\u8865\u5145"),(0,a.yg)("h2",{id:"\u51fd\u6570\u7c7b\u578b"},"\u51fd\u6570\u7c7b\u578b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'function greeter(fn: (a: string) => void) {\n  fn("Hello, World");\n}\n \nfunction printToConsole(s: string) {\n  console.log(s);\n}\n  \ngreeter(printToConsole);\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u53ef\u9009\u53c2\u6570",title:"\u53ef\u9009\u53c2\u6570"},"function f(x?: number) {\n  // ...\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u6784\u9020\u51fd\u6570",title:"\u6784\u9020\u51fd\u6570"},'interface CallOrConstruct {\n  new (s: string): Date;\n  (n?: number): string;\n}\nfunction fn(ctor: CallOrConstruct) {\n  return new ctor("hello");\n\n  // \u6216\u8005\u8fd4\u56de\u4e0d\u5e26new \u7684\u5c5e\u6027\n  // return ctor(1);\n}\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u6dfb\u52a0\u6cdb\u578b\u4f5c\u4e3a\u7c7b\u578b\u53c2\u6570",title:"\u6dfb\u52a0\u6cdb\u578b\u4f5c\u4e3a\u7c7b\u578b\u53c2\u6570"},"function firstElement<Type>(arr: Type[]): Type | undefined {\n  return arr[0];\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u5408\u7406\u4f7f\u7528length\u5c5e\u6027",title:"\u5408\u7406\u4f7f\u7528length\u5c5e\u6027"},"function longest<Type extends { length: number }>(a: Type, b: Type) {\n  if (a.length >= b.length) {\n    return a;\n  } else {\n    return b;\n  }\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=rest\u66f4\u591a\u53c2\u6570",title:"rest\u66f4\u591a\u53c2\u6570"},"function multiply(n: number, ...m: number[]) {\n  return m.map((x) => n * x);\n}\n// 'a' gets value [10, 20, 30, 40]\nconst a = multiply(10, 1, 2, 3, 4);\n")),(0,a.yg)("h2",{id:"\u6570\u7ec4\u7c7b\u578b"},"\u6570\u7ec4\u7c7b\u578b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=ReadonlyArray\u6570\u7ec4\u5c5e\u6027\u662f\u53ea\u8bfb\u7684",title:"ReadonlyArray\u6570\u7ec4\u5c5e\u6027\u662f\u53ea\u8bfb\u7684"},"function doStuff(values: ReadonlyArray<string>) {\n  // We can read from 'values'...\n  const copy = values.slice();\n  console.log(`The first value is ${values[0]}`);\n \n  // ...but we can't mutate 'values'.\n  values.push(\"hello!\");   // Property 'push' does not exist on type 'readonly string[]'.\n\n  // \u76f4\u63a5\u4fee\u6539\u6570\u7ec4\u53ef\u4ee5\uff0c\u4f46\u4e0d\u80fd\u76f4\u63a5\u4fee\u6539\u5c5e\u6027\n  values = ['abc'];  // ok\n}\n\n// \u62a5\u9519\uff1a'ReadonlyArray' only refers to a type, but is being used as a value here.\nnew ReadonlyArray(\"red\", \"green\", \"blue\");\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=readonly\u6570\u7ec4\u5c5e\u6027\u662f\u53ea\u8bfb\u7684",title:"readonly\u6570\u7ec4\u5c5e\u6027\u662f\u53ea\u8bfb\u7684"},"function doStuff(values: readonly string[]) {\n  // We can read from 'values'...\n  const copy = values.slice();\n  console.log(`The first value is ${values[0]}`);\n \n  // ...but we can't mutate 'values'.\n  values.push(\"hello!\");   // Error: Property 'push' does not exist on type 'readonly string[]'.\n}\n\nlet x: readonly string[] = [];\nlet y: string[] = [];\n \nx = y;    // \u76f4\u63a5\u8d4b\u503c\u6570\u7ec4\u53ef\u4ee5\nx[0]='1'; // Error: \u76f4\u63a5\u4fee\u6570\u7ec4\u5c5e\u6027\u4e0d\u884c\ny = x;    // Error: \u53ea\u8bfb\u5c5e\u6027\u4e0d\u80fd\u5206\u914d\u7ed9string[]\u53ef\u53d8\u5c5e\u6027\n")),(0,a.yg)("h2",{id:"\u5bf9\u8c61\u7c7b\u578b"},"\u5bf9\u8c61\u7c7b\u578b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u4f7f\u7528type\u522b\u540d",title:"\u4f7f\u7528type\u522b\u540d"},"type Person = {\n  name: string;\n  age: number;\n};\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u4f7f\u7528interface\u63a5\u53e3",title:"\u4f7f\u7528interface\u63a5\u53e3"},"interface Person {\n  name: string;\n  age: number;\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u53ef\u9009\u5c5e\u6027",title:"\u53ef\u9009\u5c5e\u6027"},"interface SquareConfig {\n  color: string;\n  width?: number;\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u53ea\u8bfb\u5c5e\u6027",title:"\u53ea\u8bfb\u5c5e\u6027"},"interface SomeType {\n  readonly prop: string;\n}\ntype SomeType2 = {\n  readonly prop: string;\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u53ea\u5b9a\u4e49\u5c5e\u6027\u540d\u7c7b\u578b\uff0c\u4e0d\u5b9a\u4e49\u5177\u4f53\u5c5e\u6027\u540d",title:"\u53ea\u5b9a\u4e49\u5c5e\u6027\u540d\u7c7b\u578b\uff0c\u4e0d\u5b9a\u4e49\u5177\u4f53\u5c5e\u6027\u540d"},"interface StringArray {\n  [index: number]: string;\n}\n\ninterface NumberDictionary {\n  [index: string]: number;\n  length: number; // ok\n  name: string;   // Property 'name' of type 'string' is not assignable to 'string' index type 'number'.\n}\n\ninterface NumberOrStringDictionary {\n  [index: string]: number | string;\n  length: number; // ok, length is a number\n  name: string; // ok, name is a string\n}\n\ninterface ReadonlyStringArray {\n  readonly [index: number]: string;\n}\n\ninterface SquareConfig {\n  color?: string;\n  width?: number;\n  [propName: string]: any;\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=extends\u6269\u5c55\u5c5e\u6027",title:"extends\u6269\u5c55\u5c5e\u6027"},'interface AddressWithUnit extends BasicAddress {\n  unit: string;\n}\n\n// \u6269\u5c55\u591a\u4e2a\ninterface Colorful {\n  color: string;\n}\ninterface Circle {\n  radius: number;\n}\ninterface ColorfulCircle extends Colorful, Circle {}\nconst cc: ColorfulCircle = {\n  color: "red",\n  radius: 42,\n};\n')),(0,a.yg)("h2",{id:"\u7531\u7c7b\u578b\u751f\u6210\u65b0\u7c7b\u578b"},"\u7531\u7c7b\u578b\u751f\u6210\u65b0\u7c7b\u578b"),(0,a.yg)("h3",{id:"1\u4f7f\u7528\u6cdb\u578b"},"1.\u4f7f\u7528\u6cdb\u578b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u51fd\u6570\u4e2d\u7684\u7c7b\u578b\u53c2\u6570",title:"\u51fd\u6570\u4e2d\u7684\u7c7b\u578b\u53c2\u6570"},"function identity<Type>(arg: Type): Type {\n  return arg;\n}\n \nlet myIdentity: <Type>(arg: Type) => Type = identity;\n\n// \u6cdb\u578b\u63a5\u53e3\ninterface GenericIdentityFn<Type> {\n  (arg: Type): Type;\n}\nfunction identity<Type>(arg: Type): Type {\n  return arg;\n}\nlet myIdentity: GenericIdentityFn<number> = identity;\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=class\u4e2d\u4f7f\u7528\u6cdb\u578b",title:"class\u4e2d\u4f7f\u7528\u6cdb\u578b"},"class GenericNumber<NumType> {\n  zeroValue: NumType;\n  add: (x: NumType, y: NumType) => NumType;\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u6cdb\u578b\u4e2d\u4f7f\u7528extends",title:"\u6cdb\u578b\u4e2d\u4f7f\u7528extends"},"function createInstance<A extends Animal>(c: new () => A): A {\n  return new c();\n}\n")),(0,a.yg)("h3",{id:"2keyof\u83b7\u53d6\u5c5e\u6027\u540d\u7c7b\u578b\u7ec4\u6210\u8054\u5408\u7c7b\u578b"},"2.keyof\u83b7\u53d6\u5c5e\u6027\u540d\u7c7b\u578b\u7ec4\u6210\u8054\u5408\u7c7b\u578b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type Arrayish = { [n: number]: unknown };\ntype A = keyof Arrayish;  // number\n")),(0,a.yg)("h3",{id:"3typeof\u83b7\u53d6\u8fd4\u56de\u503c\u7c7b\u578b\u7ec4\u6210\u8054\u5408\u7c7b\u578b"},"3.typeof\u83b7\u53d6\u8fd4\u56de\u503c\u7c7b\u578b\u7ec4\u6210\u8054\u5408\u7c7b\u578b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'let s = "hello";\nlet n: typeof s;  // string\n')),(0,a.yg)("h3",{id:"3\u7d22\u5f15\u7c7b\u578b"},"3.\u7d22\u5f15\u7c7b\u578b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u5bf9\u8c61\u7684\u7d22\u5f15",title:"\u5bf9\u8c61\u7684\u7d22\u5f15"},'type Person = { age: number; name: string; alive: boolean };\n\n// \u5355\u7d22\u5f15\ntype Age = Person["age"];  // number\n\n// \u591a\u7d22\u5f15 - \u8054\u5408\u7c7b\u578b\ntype I1 = Person["age" | "name"]; // string | number\ntype AliveOrName = "alive" | "name";\ntype I3 = Person[AliveOrName];    // boolean | string\n\n// \u591a\u7d22\u5f15 - keyof\ntype I2 = Person[keyof Person];  // string | number | boolean\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u6570\u7ec4\u7684\u7d22\u5f15",title:"\u6570\u7ec4\u7684\u7d22\u5f15"},'const MyArray = [\n  { name: "Alice", age: 15 },\n  { name: "Bob", age: 23 },\n  { name: "Eve", age: 38 },\n];\n\n// Array[number]\u5728ts\u4e2d\u8868\u793a\u6570\u7ec4\u5143\u7d20\uff1btypeof\u83b7\u53d6\u7c7b\u578b\u7684\u8fd4\u56de\u503c\ntype Person = typeof MyArray[number];  // { name: string; age: number; }\n\ntype Age = typeof MyArray[number]["age"];  // number\ntype Age2 = Person["age"];                 // number\n')),(0,a.yg)("h3",{id:"4\u6761\u4ef6\u7c7b\u578b"},"4.\u6761\u4ef6\u7c7b\u578b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"interface Animal {\n  live(): void;\n}\ninterface Dog extends Animal {\n  woof(): void;\n}\n \ntype Example1 = Dog extends Animal ? number : string;  // number\n \ntype Example2 = RegExp extends Animal ? number : string;  // string\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u6761\u4ef6\u7c7b\u578b\u4e2d\u4f7f\u7528infer\u7c7b\u578b\u63a8\u65ad",title:"\u6761\u4ef6\u7c7b\u578b\u4e2d\u4f7f\u7528infer\u7c7b\u578b\u63a8\u65ad"},"type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;\n\ntype GetReturnType<Type> = Type extends (...args: never[]) => infer Return\n  ? Return\n  : never;\ntype Num = GetReturnType<() => number>;  // number\ntype Str = GetReturnType<(x: string) => string>;  // string\ntype Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;  //  boolean[]\n")),(0,a.yg)("h3",{id:"5\u6620\u5c04\u7c7b\u578b"},"5.\u6620\u5c04\u7c7b\u578b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u7d22\u5f15\u7b7e\u540d\u7528\u4e8e\u58f0\u660e\u5c1a\u672a\u63d0\u524d\u58f0\u660e\u7684\u5c5e\u6027\u7c7b\u578b",title:"\u7d22\u5f15\u7b7e\u540d\u7528\u4e8e\u58f0\u660e\u5c1a\u672a\u63d0\u524d\u58f0\u660e\u7684\u5c5e\u6027\u7c7b\u578b"},"type OnlyBoolsAndHorses = {\n  [key: string]: boolean | Horse;\n};\n \nconst conforms: OnlyBoolsAndHorses = {\n  del: true,\n  rodney: false,\n};\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u6cdb\u578b + in keyof\u8fed\u4ee3\u952e",title:"\u6cdb\u578b","+":!0,in:!0,"keyof\u8fed\u4ee3\u952e":!0},"type OptionsFlags<Type> = {\n  [Property in keyof Type]: boolean;\n};\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u79fb\u9664\u5c5e\u6027\u7684\u53ea\u8bfb\u72b6\u6001(-readonly)",title:"\u79fb\u9664\u5c5e\u6027\u7684\u53ea\u8bfb\u72b6\u6001(-readonly)"},"type CreateMutable<Type> = {\n  -readonly [Property in keyof Type]: Type[Property];\n};\n \ntype LockedAccount = {\n  readonly id: string;\n  readonly name: string;\n};\n\ntype UnlockedAccount = CreateMutable<LockedAccount>;  // { id: string, name: string }\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u79fb\u9664\u5c5e\u6027\u7684\u53ef\u9009\u72b6\u6001(-?)",title:"\u79fb\u9664\u5c5e\u6027\u7684\u53ef\u9009\u72b6\u6001(-?)"},"type Concrete<Type> = {\n  [Property in keyof Type]-?: Type[Property];\n};\n \ntype MaybeUser = {\n  id: string;\n  name?: string;\n  age?: number;\n};\n \ntype User = Concrete<MaybeUser>;  // { id: string;name: string;age: number; }\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u4f7f\u7528as\u91cd\u5199\u5c5e\u6027\u540d",title:"\u4f7f\u7528as\u91cd\u5199\u5c5e\u6027\u540d"},"type Getters<Type> = {\n    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]\n};\n \ninterface Person {\n    name: string;\n    age: number;\n    location: string;\n}\n \ntype LazyPerson = Getters<Person>;   // { getName: () => string;getAge: () => number;getLocation: () => string; }\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u4f7f\u7528as+Exclude\u8fc7\u6ee4\u5c5e\u6027",title:"\u4f7f\u7528as+Exclude\u8fc7\u6ee4\u5c5e\u6027"},'type RemoveKindField<Type> = {\n    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]\n};\n \ninterface Circle {\n    kind: "circle";\n    radius: number;\n}\n \ntype KindlessCircle = RemoveKindField<Circle>;  // { radius: number; }\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u4f7f\u7528as+\u7d22\u5f15\u7c7b\u578b\u91cd\u5199\u5c5e\u6027\u540d",title:"\u4f7f\u7528as+\u7d22\u5f15\u7c7b\u578b\u91cd\u5199\u5c5e\u6027\u540d"},'type EventConfig<Events extends { kind: string }> = {\n    [E in Events as E["kind"]]: (event: E) => void;\n}\n \ntype SquareEvent = { kind: "square", x: number, y: number };\ntype CircleEvent = { kind: "circle", radius: number };\n \ntype Config = EventConfig<SquareEvent | CircleEvent>   // { square: (event: SquareEvent) => void; cirle: (event: CircleEvent) => void;}\n')),(0,a.yg)("h3",{id:"6\u4f7f\u7528\u6a21\u677f\u5b57\u7b26\u4e32"},"6.\u4f7f\u7528\u6a21\u677f\u5b57\u7b26\u4e32"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u5b57\u7b26\u4e32",title:"\u5b57\u7b26\u4e32"},'type World = "world";\n \ntype Greeting = `hello ${World}`;  //  "hello world"\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u5b57\u7b26\u4e32\u7ec4\u6210\u7684\u8054\u5408\u7c7b\u578b",title:"\u5b57\u7b26\u4e32\u7ec4\u6210\u7684\u8054\u5408\u7c7b\u578b"},'type EmailLocaleIDs = "welcome_email" | "email_heading";\ntype FooterLocaleIDs = "footer_title" | "footer_sendoff";\n \ntype AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;  //  "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"\n\ntype Lang = "en" | "ja" | "pt";\n \ntype LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`; //  "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"\n')),(0,a.yg)("h3",{id:"7\u7c7b\u578b\u5de5\u5177"},"7.\u7c7b\u578b\u5de5\u5177"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Record<K, T>"),": \u521b\u5efa\u4e00\u4e2a\u4ee5\u7c7b\u578b ",(0,a.yg)("inlineCode",{parentName:"li"},"K")," \u4e3a\u952e\uff0c\u7c7b\u578b ",(0,a.yg)("inlineCode",{parentName:"li"},"T")," \u4e3a\u503c\u7684\u5bf9\u8c61\u7c7b\u578b\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Readonly<T>"),": \u521b\u5efa\u53ea\u8bfb\u7248\u672c\u7684\u7c7b\u578b\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Partial<T>"),": \u590d\u5236",(0,a.yg)("inlineCode",{parentName:"li"},"T"),"\u7c7b\u578b\u7684\u6240\u6709\u5c5e\u6027\uff0c\u5e76\u5c06\u6240\u6709\u5c5e\u53d8\u6210\u53ef\u9009\u5c5e\u6027"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Required<T>"),": \u590d\u5236",(0,a.yg)("inlineCode",{parentName:"li"},"T"),"\u7c7b\u578b\u7684\u6240\u6709\u5c5e\u6027\uff0c\u5e76\u5c06\u6240\u6709\u5c5e\u53d8\u6210\u5fc5\u9009\u5c5e\u6027"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Pick<T, K>"),": \u5b50\u96c6\uff0c\u4ece\u7c7b\u578b ",(0,a.yg)("inlineCode",{parentName:"li"},"T")," \u4e2d\u9009\u53d6\u6307\u5b9a\u5c5e\u6027 ",(0,a.yg)("inlineCode",{parentName:"li"},"K"),"\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Omit<T, K>"),": \u6392\u9664\uff0c\u4ece\u7c7b\u578b ",(0,a.yg)("inlineCode",{parentName:"li"},"T")," \u4e2d\u6392\u9664\u5c5e\u6027 ",(0,a.yg)("inlineCode",{parentName:"li"},"K"),"\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Exclude<T, U>"),": \u4ece\u7c7b\u578b ",(0,a.yg)("inlineCode",{parentName:"li"},"T")," \u4e2d\u6392\u9664\u53ef\u4ee5",(0,a.yg)("strong",{parentName:"li"},"\u8d4b\u503c"),"\u7ed9\u7c7b\u578b ",(0,a.yg)("inlineCode",{parentName:"li"},"U")," \u7684\u7c7b\u578b\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ReturnType<T>"),": \u83b7\u53d6\u51fd\u6570\u7c7b\u578b ",(0,a.yg)("inlineCode",{parentName:"li"},"T")," \u7684\u8fd4\u56de\u7c7b\u578b\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Union"),": \u7528\u4e8e\u521b\u5efa",(0,a.yg)("strong",{parentName:"li"},"\u8054\u5408\u7c7b\u578b"),"\uff0c\u4f8b\u5982 number | string\u3002",(0,a.yg)("inlineCode",{parentName:"li"},"\u6216"),"\u7684\u5173\u7cfb"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Intersection"),": \u7528\u4e8e\u521b\u5efa",(0,a.yg)("strong",{parentName:"li"},"\u4ea4\u53c9\u7c7b\u578b"),"\uff0c\u8868\u793a\u540c\u65f6\u5177\u6709\u591a\u4e2a\u7c7b\u578b\u7684\u503c\u3002",(0,a.yg)("inlineCode",{parentName:"li"},"\u4e14"),"\u7684\u5173\u7cfb")),(0,a.yg)("h3",{id:"8\u5b57\u7b26\u4e32\u64cd\u4f5c\u7c7b\u578b"},"8.\u5b57\u7b26\u4e32\u64cd\u4f5c\u7c7b\u578b"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Uppercase"),": \u8f6c\u5927\u5199"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Lowercase"),": \u8f6c\u5c0f\u5199"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Capitalize"),": \u9996\u5b57\u6bcd\u8f6c\u5927\u5199"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Uncapitalize"),": \u9996\u5b57\u6bcd\u8f6c\u5c0f\u5199")),(0,a.yg)("h2",{id:"\u91cd\u8f7d\u51fd\u6570"},"\u91cd\u8f7d\u51fd\u6570"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u91cd\u8f7d\u7248\u672c\u7684\u51fd\u6570\u7b7e\u540d")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u51fd\u6570\u4f53\u4e4b\u524d\u7684\uff0c\u6bcf\u4e2a\u7248\u672c\u5bf9\u5e94\u4e0d\u540c\u7684\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7c7b\u578b"),(0,a.yg)("li",{parentName:"ul"},"\u6700\u540e\u7684\u901a\u7528\u5b9e\u73b0\u90e8\u5206\uff08\u5373\u51fd\u6570\u4f53\uff09\u5fc5\u987b\u80fd\u591f\u5904\u7406\u6240\u6709\u53ef\u80fd\u7684\u53c2\u6570\u7c7b\u578b\uff0c\u901a\u5e38\u4f7f\u7528\u8054\u5408\u7c7b\u578b\u6216\u6761\u4ef6\u7c7b\u578b\u6765\u5b9e\u73b0"),(0,a.yg)("li",{parentName:"ul"},"\u7528\u4e8e\u5904\u7406\u4e00\u4e9b\u590d\u6742\u7684\u60c5\u51b5\uff0c\u4f8b\u5982\u51fd\u6570\u6839\u636e\u4f20\u9012\u7684\u53c2\u6570\u7c7b\u578b\u6765\u51b3\u5b9a\u4e0d\u540c\u7684\u903b\u8f91\u3002\u5b83\u4eec\u80fd\u591f\u63d0\u4f9b\u66f4\u597d\u7684\u7c7b\u578b\u68c0\u67e5\u548c\u7c7b\u578b\u63a8\u65ad\uff0c\u4ece\u800c\u589e\u52a0\u4ee3\u7801\u7684\u5b89\u5168\u6027\u548c\u53ef\u8bfb\u6027")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'function greet(name: string): string;\nfunction greet(age: number): string;\nfunction greet(input: string | number): string {\n    if (typeof input === "string") {\n        return `Hello, ${input}!`;\n    } else if (typeof input === "number") {\n        return `You are ${input} years old.`;\n    }\n    return "Hello!";\n}\n\nconsole.log(greet("Alice"));   // Hello, Alice!\nconsole.log(greet(25));        // You are 25 years old.\nconsole.log(greet(true));      // Error: Argument of type \'boolean\' is not assignable to parameter of type \'string | number\'.\n')),(0,a.yg)("h2",{id:"\u5176\u5b83"},"\u5176\u5b83"),(0,a.yg)("h3",{id:"1parameters"},"1.Parameters"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u7528\u4e8e\u4ece\u51fd\u6570\u7c7b\u578b\u4e2d\u83b7\u53d6\u53c2\u6570\u7c7b\u578b\u7684\u5143\u7ec4\u7c7b\u578b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type MyFunction = (a: number, b: string, c: boolean) => void;\n\ntype MyFunctionParameters = Parameters<MyFunction>; //  [number, string, boolean]\n")),(0,a.yg)("h3",{id:"2const\u7c7b\u578b\u65ad\u8a00\u4e2d\u7684\u5b57\u9762\u91cf\u7c7b\u578b"},"2.const\u7c7b\u578b\u65ad\u8a00\u4e2d\u7684\u5b57\u9762\u91cf\u7c7b\u578b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const myNumber = 42;\nconst myLiteralNumber = 42 as const; // \u7c7b\u578b\u4e3a 42\uff08\u6570\u5b57\u5b57\u9762\u91cf\u7c7b\u578b\uff09\n\nconst myString = "hello";\nconst myLiteralString = "hello" as const; // \u7c7b\u578b\u4e3a "hello"\uff08\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\uff09\n\n')))}u.isMDXComponent=!0}}]);