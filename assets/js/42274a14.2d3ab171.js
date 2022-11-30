"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[6544],{63406:(e,t,r)=>{r.d(t,{q:()=>o,v:()=>n});const o=(e,t,r)=>{let o=`${e}`;return t&&(o+=`__${t}`),r&&(o+=`--${r}`),o};function n(e){const t=document.documentElement;e&&e(t.dataset.theme);const r=new MutationObserver((r=>{r.forEach((r=>{e&&e(t.dataset.theme)}))}));return r.observe(t,{attributes:!0}),r.destroy=()=>{r.disconnect()},r}},37437:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_theme_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(60479),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(858),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(63871),_site_src_pages_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(63406),_constants_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12604);const Code=()=>{const prefixCls="pager-code",bem=(e,t)=>(0,_site_src_pages_utils__WEBPACK_IMPORTED_MODULE_3__.q)(prefixCls,e,t),editorRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),[code,setCode]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[theme,setTheme]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();let observer=null;const $container=document.getElementById("__docusaurus");(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{observer=(0,_site_src_pages_utils__WEBPACK_IMPORTED_MODULE_3__.v)((e=>{setTheme("dark"===e?"customDark":"xcode")})),$container.style.height="100%"}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>{observer?.destroy(),$container.style.height=""}),[]);const doIt=()=>{try{console.log("\ud83c\udf49  editorRef.current.editor",editorRef.current.editor,editorRef.current.editor.getValue());const val=editorRef.current.editor.getValue();setCode(eval(val))}catch(error){antd__WEBPACK_IMPORTED_MODULE_4__.ZP.error(error?.message)}};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:bem()},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:bem("code")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:bem("editor")},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_components__WEBPACK_IMPORTED_MODULE_1__.M,{ref:editorRef,theme:theme,files:_constants_js__WEBPACK_IMPORTED_MODULE_2__.he}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:bem("doit")},react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.Z,{type:"primary",size:"sm",onClick:doIt},"\u8fd0\u884c >")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:bem("previewer")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:bem("header")},"Result"),code))},__WEBPACK_DEFAULT_EXPORT__=Code},12604:(e,t,r)=>{r.d(t,{he:()=>o});const o=[{name:"js",language:"javascript",value:"// code\nfunction sum(a, b) {\n  return a + b;\n}\n\nsum(1, 2);\n"}]},75314:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var o=r(67294),n=r(80584),_=r(91262),a=r(37437);function c(){return o.createElement(n.Z,null,o.createElement(_.Z,null,(()=>o.createElement(a.Z,null))))}},60479:(e,t,r)=>{r.d(t,{M:()=>l});var o=r(87462),n=r(67294),_=r(91262),a=r(63871);const c={defaultLanguage:"javascript",defaultValue:"",options:{}};const s={xcode:r(64042),monokai:r(34454),customDark:JSON.parse('{"base":"vs-dark","inherit":true,"rules":[{"background":"1B1B1D","token":""},{"foreground":"6A9955","token":"comment"},{"foreground":"CE9178","token":"string"},{"foreground":"4FC1FF","token":"constant.numeric"},{"foreground":"4FC1FF","token":"constant.language"},{"foreground":"4FC1FF","token":"constant.character"},{"foreground":"4FC1FF","token":"constant.other"},{"foreground":"C586C0","token":"keyword"},{"foreground":"C586C0","token":"storage"},{"foreground":"DCDCAA","fontStyle":"italic","token":"storage.type"},{"foreground":"4EC9B0","fontStyle":"underline","token":"entity.name.class"},{"foreground":"4EC9B0","fontStyle":"italic underline","token":"entity.other.inherited-class"},{"foreground":"4EC9B0","token":"entity.name.function"},{"foreground":"9CDCFE","fontStyle":"italic","token":"variable.parameter"},{"foreground":"C586C0","token":"entity.name.tag"},{"foreground":"4EC9B0","token":"entity.other.attribute-name"},{"foreground":"DCDCAA","token":"support.function"},{"foreground":"DCDCAA","token":"support.constant"},{"foreground":"DCDCAA","fontStyle":"italic","token":"support.type"},{"foreground":"DCDCAA","fontStyle":"italic","token":"support.class"},{"foreground":"f8f8f0","background":"C586C0","token":"invalid"},{"foreground":"f8f8f0","background":"4FC1FF","token":"invalid.deprecated"},{"foreground":"9CDCFE","token":"meta.structure.dictionary.json string.quoted.double.json"},{"foreground":"75715e","token":"meta.diff"},{"foreground":"75715e","token":"meta.diff.header"},{"foreground":"C586C0","token":"markup.deleted"},{"foreground":"4EC9B0","token":"markup.inserted"},{"foreground":"e6db74","token":"markup.changed"},{"foreground":"4FC1FFa0","token":"constant.numeric.line-number.find-in-files - match"},{"foreground":"e6db74","token":"entity.name.filename.find-in-files"}],"colors":{"editor.background":"#1B1B1D","editor.selectionBackground":"#49483E","editor.lineHighlightBackground":"#3E3D32","editorCursor.foreground":"#F8F8F0","editorWhitespace.foreground":"#3B3A32","editorIndentGuide.activeBackground":"#9D550FB0","editor.selectionHighlightBorder":"#222218"}}')};var d=r(63406);const i=e=>"[object Array]"===Object.prototype.toString.call(e),u=(e,t)=>{const{theme:u,files:l,onChange:E,onMount:f,beforeMount:m}=e,g=(e,t)=>(0,d.q)("editor-component",e,t),[C,D]=(0,n.useState)({});if(!(l&&((e=>"object"==typeof e&&e.constructor===Object)(l)||i(l)&&l.length)))return console.error("files\u65e0\u6548"),null;const k=i(l)?l:[l],[O,M]=(0,n.useState)({});(0,n.useImperativeHandle)(t,(()=>C)),(0,n.useEffect)((()=>{M(k[0])}),[]);const p=(e,t)=>{E&&E(e,t)},P=(e,t)=>{D({editor:e,monaco:t}),f&&f({editor:e,monaco:t})},h=e=>{m&&m({monaco:e})},b=e=>{e.forEach((e=>console.log("onValidate:",e.message)))},{name:B,language:A,value:R,readOnly:v}=O;return n.createElement(_.Z,null,(()=>{const{default:e,loader:t}=r(19604);return t.init().then((e=>{for(const t in s)e.editor.defineTheme(t,s[t])})),n.createElement("div",{className:g()},k.length>1&&n.createElement("div",{className:g("header")},l.map((e=>n.createElement(a.Z,{key:e.name,size:"sm",onClick:()=>{M(e)}},e.name)))),n.createElement("div",{className:g("code")},n.createElement(e,(0,o.Z)({},c,{theme:u,path:B,language:A,defaultValue:R,options:{readOnly:v},onChange:p,onMount:P,beforeMount:h,onValidate:b}))))}))},l=(0,n.forwardRef)(u)}}]);