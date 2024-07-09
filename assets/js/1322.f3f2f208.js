"use strict";(self.webpackChunklacorda_github_io=self.webpackChunklacorda_github_io||[]).push([[1322],{1322:(e,t,o)=>{o.d(t,{Z:()=>le});var n,r=o(15671),l=o(43144),a=o(60136),i=o(73568),s=o(87462),c=o(89705),p=o(93967),f=o.n(p),u=o(42262),d=o(66680),m=o(98423),v=o(67294),y=o(53124),b=v.createContext({});n=0;var g=o(33603),h=o(96159),C=o(71002),O=o(4942),w=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const Z=function(e){var t=e.prefixCls,o=e.className,n=e.dashed,r=w(e,["prefixCls","className","dashed"]),l=(0,v.useContext(y.E_).getPrefixCls)("menu",t),a=f()((0,O.Z)({},"".concat(l,"-item-divider-dashed"),!!n),o);return v.createElement(u.iz,(0,s.Z)({className:a},r))};var x=o(50344),N=o(97685),E=o(1413),P=o(45987),j=o(11276),T={adjustX:1,adjustY:1},k=[0,0],I={left:{points:["cr","cl"],overflow:T,offset:[-4,0],targetOffset:k},right:{points:["cl","cr"],overflow:T,offset:[4,0],targetOffset:k},top:{points:["bc","tc"],overflow:T,offset:[0,-4],targetOffset:k},bottom:{points:["tc","bc"],overflow:T,offset:[0,4],targetOffset:k},topLeft:{points:["bl","tl"],overflow:T,offset:[0,-4],targetOffset:k},leftTop:{points:["tr","tl"],overflow:T,offset:[-4,0],targetOffset:k},topRight:{points:["br","tr"],overflow:T,offset:[0,-4],targetOffset:k},rightTop:{points:["tl","tr"],overflow:T,offset:[4,0],targetOffset:k},bottomRight:{points:["tr","br"],overflow:T,offset:[0,4],targetOffset:k},rightBottom:{points:["bl","br"],overflow:T,offset:[4,0],targetOffset:k},bottomLeft:{points:["tl","bl"],overflow:T,offset:[0,4],targetOffset:k},leftBottom:{points:["br","bl"],overflow:T,offset:[-4,0],targetOffset:k}};function S(e){var t=e.showArrow,o=e.arrowContent,n=e.children,r=e.prefixCls,l=e.id,a=e.overlayInnerStyle,i=e.className,s=e.style;return v.createElement("div",{className:f()("".concat(r,"-content"),i),style:s},!1!==t&&v.createElement("div",{className:"".concat(r,"-arrow"),key:"arrow"},o),v.createElement("div",{className:"".concat(r,"-inner"),id:l,role:"tooltip",style:a},"function"==typeof n?n():n))}var A=function(e,t){var o=e.overlayClassName,n=e.trigger,r=void 0===n?["hover"]:n,l=e.mouseEnterDelay,a=void 0===l?0:l,i=e.mouseLeaveDelay,c=void 0===i?.1:i,p=e.overlayStyle,f=e.prefixCls,u=void 0===f?"rc-tooltip":f,d=e.children,m=e.onVisibleChange,y=e.afterVisibleChange,b=e.transitionName,g=e.animation,h=e.motion,O=e.placement,w=void 0===O?"right":O,Z=e.align,x=void 0===Z?{}:Z,N=e.destroyTooltipOnHide,T=void 0!==N&&N,k=e.defaultVisible,A=e.getTooltipContainer,D=e.overlayInnerStyle,_=e.arrowContent,L=e.overlay,M=e.id,V=e.showArrow,R=(0,P.Z)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"]),B=(0,v.useRef)(null);(0,v.useImperativeHandle)(t,(function(){return B.current}));var z=(0,E.Z)({},R);"visible"in e&&(z.popupVisible=e.visible);var W=!1,$=!1;if("boolean"==typeof T)W=T;else if(T&&"object"===(0,C.Z)(T)){var H=T.keepParent;W=!0===H,$=!1===H}return v.createElement(j.Z,(0,s.Z)({popupClassName:o,prefixCls:u,popup:function(){return v.createElement(S,{showArrow:V,arrowContent:_,key:"content",prefixCls:u,id:M,overlayInnerStyle:D},L)},action:r,builtinPlacements:I,popupPlacement:w,ref:B,popupAlign:x,getPopupContainer:A,onPopupVisibleChange:m,afterPopupVisibleChange:y,popupTransitionName:b,popupAnimation:g,popupMotion:h,defaultPopupVisible:k,destroyPopupOnHide:W,autoDestroy:$,mouseLeaveDelay:c,popupStyle:p,mouseEnterDelay:a},z),d)};const D=(0,v.forwardRef)(A);var _=o(21770),L=o(93355),M=((0,L.b)("success","processing","error","default","warning"),(0,L.b)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")),V={adjustX:1,adjustY:1},R={adjustX:0,adjustY:0},B=[0,0];function z(e){return"boolean"==typeof e?e?V:R:(0,s.Z)((0,s.Z)({},R),e)}var W=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o},$=new RegExp("^(".concat(M.join("|"),")(-inverse)?$"));function H(e,t){var o=e.type;if((!0===o.__ANT_BUTTON||"button"===e.type)&&e.props.disabled||!0===o.__ANT_SWITCH&&(e.props.disabled||e.props.loading)||!0===o.__ANT_RADIO&&e.props.disabled){var n=function(e,t){var o={},n=(0,s.Z)({},e);return t.forEach((function(t){e&&t in e&&(o[t]=e[t],delete n[t])})),{picked:o,omitted:n}}(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),r=n.picked,l=n.omitted,a=(0,s.Z)((0,s.Z)({display:"inline-block"},r),{cursor:"not-allowed",width:e.props.block?"100%":void 0}),i=(0,s.Z)((0,s.Z)({},l),{pointerEvents:"none"}),c=(0,h.Tm)(e,{style:i,className:null});return v.createElement("span",{style:a,className:f()(e.props.className,"".concat(t,"-disabled-compatible-wrapper"))},c)}return e}var X=v.forwardRef((function(e,t){var o=v.useContext(y.E_),n=o.getPopupContainer,r=o.getPrefixCls,l=o.direction;var a=(0,_.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),i=(0,N.Z)(a,2),c=i[0],p=i[1],u=function(){var t=e.title,o=e.overlay;return!t&&!o&&0!==t},d=function(){var t=e.builtinPlacements,o=e.arrowPointAtCenter,n=void 0!==o&&o,r=e.autoAdjustOverflow;return t||function(e){var t=e.arrowWidth,o=void 0===t?4:t,n=e.horizontalArrowShift,r=void 0===n?16:n,l=e.verticalArrowShift,a=void 0===l?8:l,i=e.autoAdjustOverflow,c=e.arrowPointAtCenter,p={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(r+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(a+o)]},topRight:{points:["br","tc"],offset:[r+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(a+o)]},bottomRight:{points:["tr","bc"],offset:[r+o,4]},rightBottom:{points:["bl","cr"],offset:[4,a+o]},bottomLeft:{points:["tl","bc"],offset:[-(r+o),4]},leftBottom:{points:["br","cl"],offset:[-4,a+o]}};return Object.keys(p).forEach((function(e){p[e]=c?(0,s.Z)((0,s.Z)({},p[e]),{overflow:z(i),targetOffset:B}):(0,s.Z)((0,s.Z)({},I[e]),{overflow:z(i)}),p[e].ignoreShake=!0})),p}({arrowPointAtCenter:n,autoAdjustOverflow:void 0===r||r})},m=e.getPopupContainer,b=e.placement,C=void 0===b?"top":b,w=e.mouseEnterDelay,Z=void 0===w?.1:w,x=e.mouseLeaveDelay,E=void 0===x?.1:x,P=W(e,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay"]),j=e.prefixCls,T=e.openClassName,k=e.getTooltipContainer,S=e.overlayClassName,A=e.color,L=e.overlayInnerStyle,M=e.children,V=r("tooltip",j),R=r(),X=c;"open"in e||"visible"in e||!u()||(X=!1);var Y,F,G=H((0,h.l$)(M)&&!(0,h.M2)(M)?M:v.createElement("span",null,M),V),U=G.props,q=U.className&&"string"!=typeof U.className?U.className:f()(U.className,(0,O.Z)({},T||"".concat(V,"-open"),!0)),J=f()(S,(0,O.Z)((0,O.Z)({},"".concat(V,"-rtl"),"rtl"===l),"".concat(V,"-").concat(A),A&&$.test(A))),K=L,Q={};return A&&!$.test(A)&&(K=(0,s.Z)((0,s.Z)({},L),{background:A}),Q={"--antd-arrow-background-color":A}),v.createElement(D,(0,s.Z)({},P,{placement:C,mouseEnterDelay:Z,mouseLeaveDelay:E,prefixCls:V,overlayClassName:J,getTooltipContainer:m||k||n,ref:t,builtinPlacements:d(),overlay:(Y=e.title,F=e.overlay,0===Y?Y:F||Y||""),visible:X,onVisibleChange:function(t){var o,n;p(!u()&&t),u()||(null===(o=e.onOpenChange)||void 0===o||o.call(e,t),null===(n=e.onVisibleChange)||void 0===n||n.call(e,t))},onPopupAlign:function(e,t){var o=d(),n=Object.keys(o).find((function(e){var n,r;return o[e].points[0]===(null===(n=t.points)||void 0===n?void 0:n[0])&&o[e].points[1]===(null===(r=t.points)||void 0===r?void 0:r[1])}));if(n){var r=e.getBoundingClientRect(),l={top:"50%",left:"50%"};/top|Bottom/.test(n)?l.top="".concat(r.height-t.offset[1],"px"):/Top|bottom/.test(n)&&(l.top="".concat(-t.offset[1],"px")),/left|Right/.test(n)?l.left="".concat(r.width-t.offset[0],"px"):/right|Left/.test(n)&&(l.left="".concat(-t.offset[0],"px")),e.style.transformOrigin="".concat(l.left," ").concat(l.top)}},overlayInnerStyle:K,arrowContent:v.createElement("span",{className:"".concat(V,"-arrow-content"),style:Q}),motion:{motionName:(0,g.mL)(R,"zoom-big-fast",e.transitionName),motionDeadline:1e3}}),X?(0,h.Tm)(G,{className:q}):G)}));const Y=X;const F=(0,v.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});var G=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o},U=function(e){(0,a.Z)(o,e);var t=(0,i.Z)(o);function o(){var e;return(0,r.Z)(this,o),(e=t.apply(this,arguments)).renderItem=function(t){var o,n=t.siderCollapsed,r=e.context,l=r.prefixCls,a=r.firstLevel,i=r.inlineCollapsed,c=r.direction,p=r.disableMenuItemTitleTooltip,d=e.props,m=d.className,y=d.children,b=e.props,g=b.title,C=b.icon,w=b.danger,Z=G(b,["title","icon","danger"]),N=g;void 0===g?N=a?y:"":!1===g&&(N="");var E={title:N};n||i||(E.title=null,E.open=!1);var P=(0,x.Z)(y).length,j=v.createElement(u.ck,(0,s.Z)({},Z,{className:f()((0,O.Z)((0,O.Z)({},"".concat(l,"-item-danger"),w),"".concat(l,"-item-only-child"),1===(C?P+1:P)),m),title:"string"==typeof g?g:void 0}),(0,h.Tm)(C,{className:f()((0,h.l$)(C)?null===(o=C.props)||void 0===o?void 0:o.className:"","".concat(l,"-item-icon"))}),e.renderItemChildren(i));return p||(j=v.createElement(Y,(0,s.Z)({},E,{placement:"rtl"===c?"left":"right",overlayClassName:"".concat(l,"-inline-collapsed-tooltip")}),j)),j},e}return(0,l.Z)(o,[{key:"renderItemChildren",value:function(e){var t=this.context,o=t.prefixCls,n=t.firstLevel,r=this.props,l=r.icon,a=r.children,i=v.createElement("span",{className:"".concat(o,"-title-content")},a);return(!l||(0,h.l$)(a)&&"span"===a.type)&&a&&e&&n&&"string"==typeof a?v.createElement("div",{className:"".concat(o,"-inline-collapsed-noicon")},a.charAt(0)):i}},{key:"render",value:function(){return v.createElement(b.Consumer,null,this.renderItem)}}]),o}(v.Component);U.contextType=F;const q=function(e){var t,o,n=e.popupClassName,r=e.icon,l=e.title,a=e.theme,i=v.useContext(F),c=i.prefixCls,p=i.inlineCollapsed,d=i.antdMenuTheme,y=(0,u.Xl)();if(r){var b=(0,h.l$)(l)&&"span"===l.type;o=v.createElement(v.Fragment,null,(0,h.Tm)(r,{className:f()((0,h.l$)(r)?null===(t=r.props)||void 0===t?void 0:t.className:"","".concat(c,"-item-icon"))}),b?l:v.createElement("span",{className:"".concat(c,"-title-content")},l))}else o=p&&!y.length&&l&&"string"==typeof l?v.createElement("div",{className:"".concat(c,"-inline-collapsed-noicon")},l.charAt(0)):v.createElement("span",{className:"".concat(c,"-title-content")},l);var g=v.useMemo((function(){return(0,s.Z)((0,s.Z)({},i),{firstLevel:!1})}),[i]);return v.createElement(F.Provider,{value:g},v.createElement(u.Wd,(0,s.Z)({},(0,m.Z)(e,["icon"]),{title:o,popupClassName:f()(c,"".concat(c,"-").concat(a||d),n)})))};var J=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};function K(e){return(e||[]).map((function(e,t){if(e&&"object"===(0,C.Z)(e)){var o=e,n=o.label,r=o.children,l=o.key,a=o.type,i=J(o,["label","children","key","type"]),c=null!=l?l:"tmp-".concat(t);return r||"group"===a?"group"===a?v.createElement(u.BW,(0,s.Z)({key:c},i,{title:n}),K(r)):v.createElement(q,(0,s.Z)({key:c},i,{title:n}),K(r)):"divider"===a?v.createElement(Z,(0,s.Z)({key:c},i)):v.createElement(U,(0,s.Z)({key:c},i),n)}return null})).filter((function(e){return e}))}function Q(e){return v.useMemo((function(){return e?K(e):e}),[e])}var ee=v.createContext(null);const te=ee;var oe=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o},ne=(0,v.forwardRef)((function(e,t){var o,n=v.useContext(te)||{},r=v.useContext(y.E_),l=r.getPrefixCls,a=r.getPopupContainer,i=r.direction,p=l(),b=e.prefixCls,C=e.className,O=e.theme,w=void 0===O?"light":O,Z=e.expandIcon,x=e._internalDisableMenuItemTitleTooltip,N=e.inlineCollapsed,E=e.siderCollapsed,P=e.items,j=e.children,T=e.mode,k=e.selectable,I=e.onClick,S=oe(e,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","mode","selectable","onClick"]),A=(0,m.Z)(S,["collapsedWidth"]),D=Q(P)||j;null===(o=n.validator)||void 0===o||o.call(n,{mode:T});var _,L=(0,d.Z)((function(){var e;null==I||I.apply(void 0,arguments),null===(e=null==n?void 0:n.onClick)||void 0===e||e.call(n)})),M=n.mode||T,V=null!=k?k:n.selectable,R=v.useMemo((function(){return void 0!==E?E:N}),[N,E]),B={horizontal:{motionName:"".concat(p,"-slide-up")},inline:g.ZP,other:{motionName:"".concat(p,"-zoom-big")}},z=l("menu",b||n.prefixCls),W=f()("".concat(z,"-").concat(w),C);_="function"==typeof Z?Z:(0,h.Tm)(Z||n.expandIcon,{className:"".concat(z,"-submenu-expand-icon")});var $=v.useMemo((function(){return{prefixCls:z,inlineCollapsed:R||!1,antdMenuTheme:w,direction:i,firstLevel:!0,disableMenuItemTitleTooltip:x}}),[z,R,w,i,x]);return v.createElement(te.Provider,{value:null},v.createElement(F.Provider,{value:$},v.createElement(u.ZP,(0,s.Z)({getPopupContainer:a,overflowedIndicator:v.createElement(c.Z,null),overflowedIndicatorPopupClassName:"".concat(z,"-").concat(w),mode:M,selectable:V,onClick:L},A,{inlineCollapsed:R,className:W,prefixCls:z,direction:i,defaultMotions:B,expandIcon:_,ref:t}),D)))})),re=function(e){(0,a.Z)(o,e);var t=(0,i.Z)(o);function o(){var e;return(0,r.Z)(this,o),(e=t.apply(this,arguments)).focus=function(t){var o;null===(o=e.menu)||void 0===o||o.focus(t)},e}return(0,l.Z)(o,[{key:"render",value:function(){var e=this;return v.createElement(b.Consumer,null,(function(t){return v.createElement(ne,(0,s.Z)({ref:function(t){e.menu=t}},e.props,t))}))}}]),o}(v.Component);re.Divider=Z,re.Item=U,re.SubMenu=q,re.ItemGroup=u.BW;const le=re}}]);