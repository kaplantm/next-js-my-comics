(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"8/g6":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r("kNCj")},AUy9:function(e,t,r){"use strict";var n=r("TqRt"),o=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r("q1tI")),i=(0,n(r("8/g6")).default)(a.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.default=i},CarD:function(e,t,r){"use strict";var n=r("TqRt"),o=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r("q1tI")),i=(0,n(r("8/g6")).default)(a.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");t.default=i},PkEL:function(e,t,r){"use strict";var n=r("tRbT"),o=r("wx14"),a=r("ODXe"),i=r("Ff2n"),c=r("q1tI"),l=r("iuhU"),u=(r("17x9"),r("dRu9")),p=r("H2TA"),s=r("wpWl"),d=r("4Hym"),f=r("tr08"),m=r("bfFb"),h=c.forwardRef((function(e,t){var r=e.children,n=e.classes,p=e.className,h=e.collapsedHeight,b=void 0===h?"0px":h,v=e.component,g=void 0===v?"div":v,y=e.disableStrictModeCompat,j=void 0!==y&&y,O=e.in,x=e.onEnter,w=e.onEntered,E=e.onEntering,S=e.onExit,R=e.onExited,C=e.onExiting,N=e.style,T=e.timeout,I=void 0===T?s.b.standard:T,P=e.TransitionComponent,k=void 0===P?u.a:P,z=Object(i.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),A=Object(f.a)(),K=c.useRef(),D=c.useRef(null),M=c.useRef(),H="number"===typeof b?"".concat(b,"px"):b;c.useEffect((function(){return function(){clearTimeout(K.current)}}),[]);var F=A.unstable_strictMode&&!j,B=c.useRef(null),L=Object(m.a)(t,F?B:void 0),_=function(e){return function(t,r){if(e){var n=F?[B.current,t]:[t,r],o=Object(a.a)(n,2),i=o[0],c=o[1];void 0===c?e(i):e(i,c)}}},q=_((function(e,t){e.style.height=H,x&&x(e,t)})),W=_((function(e,t){var r=D.current?D.current.clientHeight:0,n=Object(d.a)({style:N,timeout:I},{mode:"enter"}).duration;if("auto"===I){var o=A.transitions.getAutoHeightDuration(r);e.style.transitionDuration="".concat(o,"ms"),M.current=o}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height="".concat(r,"px"),E&&E(e,t)})),G=_((function(e,t){e.style.height="auto",w&&w(e,t)})),U=_((function(e){var t=D.current?D.current.clientHeight:0;e.style.height="".concat(t,"px"),S&&S(e)})),$=_(R),J=_((function(e){var t=D.current?D.current.clientHeight:0,r=Object(d.a)({style:N,timeout:I},{mode:"exit"}).duration;if("auto"===I){var n=A.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),M.current=n}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style.height=H,C&&C(e)}));return c.createElement(k,Object(o.a)({in:O,onEnter:q,onEntered:G,onEntering:W,onExit:U,onExited:$,onExiting:J,addEndListener:function(e,t){var r=F?e:t;"auto"===I&&(K.current=setTimeout(r,M.current||0))},nodeRef:F?B:void 0,timeout:"auto"===I?null:I},z),(function(e,t){return c.createElement(g,Object(o.a)({className:Object(l.a)(n.container,p,{entered:n.entered,exited:!O&&"0px"===H&&n.hidden}[e]),style:Object(o.a)({minHeight:H},N),ref:L},t),c.createElement("div",{className:n.wrapper,ref:D},c.createElement("div",{className:n.wrapperInner},r)))}))}));h.muiSupportAuto=!0;var b=Object(p.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(h),v=r("hlFM"),g=r("nKUr"),y=r("ye/S"),j=r("VD++"),O=r("NqtD"),x=c.forwardRef((function(e,t){var r=e.edge,n=void 0!==r&&r,a=e.children,u=e.classes,p=e.className,s=e.color,d=void 0===s?"default":s,f=e.disabled,m=void 0!==f&&f,h=e.disableFocusRipple,b=void 0!==h&&h,v=e.size,g=void 0===v?"medium":v,y=Object(i.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return c.createElement(j.a,Object(o.a)({className:Object(l.a)(u.root,p,"default"!==d&&u["color".concat(Object(O.a)(d))],m&&u.disabled,"small"===g&&u["size".concat(Object(O.a)(g))],{start:u.edgeStart,end:u.edgeEnd}[n]),centerRipple:!0,focusRipple:!b,disabled:m,ref:t},y),c.createElement("span",{className:u.label},a))})),w=Object(p.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(y.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(y.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(y.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(x),E=r("CarD"),S=r.n(E),R=r("AUy9"),C=r.n(R),N=r("ofer"),T=r("KQm4"),I=r("rePB"),P=r("R/WZ"),k=Object(P.a)((function(e){return{coverImageContainer:{"& ul":{paddingInlineStart:e.spacing(2)},"& li":{marginTop:e.spacing(1),marginBottom:e.spacing(1)}},coverImage:Object(I.a)({width:"30%",float:"right",margin:e.spacing(2,0,2,2)},e.breakpoints.down("xs"),{width:"100%"}),divider:{width:"100%",margin:e.spacing(4,0,2,0)}}})),z=r("9BAl"),A=r("IujW"),K=r.n(A);t.a=function(e){var t=e.headerLabel,r=e.listData,o=Object(c.useState)(function(e){return e.map((function(e){return!1}))}(r)),a=o[0],i=o[1],l=k();return Object(g.jsx)(n.a,{container:!0,spacing:3,children:Object(g.jsxs)(n.a,{item:!0,xs:12,className:l.coverImageContainer,children:[t&&Object(g.jsx)(N.a,{variant:"h1",children:t}),Object(g.jsx)("ul",{children:r.map((function(e,t){var r=e.link,n=e.comic;return Object(g.jsxs)("li",{children:[Object(g.jsxs)(v.a,{display:"flex",alignItems:"center",children:[Object(g.jsx)(z.a,{nextProps:{href:r.pathname},children:r.name}),Object(g.jsx)(w,{onClick:function(){return function(e){i((function(t){var r=Object(T.a)(t);return r[e]=!t[e],r}))}(t)},children:a[t]?Object(g.jsx)(C.a,{}):Object(g.jsx)(S.a,{})})]}),Object(g.jsx)(b,{in:a[t],children:(null===n||void 0===n?void 0:n.description)&&Object(g.jsx)(K.a,{children:n.description})})]},r.pathname)}))})]})})}},hlFM:function(e,t,r){"use strict";var n=r("KQm4"),o=r("wx14"),a=(r("17x9"),r("bv9d"));var i=function(e){var t=function(t){var r=e(t);return t.css?Object(o.a)({},Object(a.a)(r,e(Object(o.a)({theme:t.theme},t.css))),function(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(n.a)(e.filterProps)),t};var c=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=function(e){return t.reduce((function(t,r){var n=r(e);return n?Object(a.a)(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},l=r("rePB"),u=r("LybE");function p(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var s=function(e){var t=e.prop,r=e.cssProperty,n=void 0===r?e.prop:r,o=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=p(e.theme,o)||{};return Object(u.a)(e,r,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=p(i,e)||e,a&&(t=a(t))),!1===n?t:Object(l.a)({},n,t)}))};return i.propTypes={},i.filterProps=[t],i};function d(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var f=c(s({prop:"border",themeKey:"borders",transform:d}),s({prop:"borderTop",themeKey:"borders",transform:d}),s({prop:"borderRight",themeKey:"borders",transform:d}),s({prop:"borderBottom",themeKey:"borders",transform:d}),s({prop:"borderLeft",themeKey:"borders",transform:d}),s({prop:"borderColor",themeKey:"palette"}),s({prop:"borderRadius",themeKey:"shape"})),m=c(s({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),s({prop:"display"}),s({prop:"overflow"}),s({prop:"textOverflow"}),s({prop:"visibility"}),s({prop:"whiteSpace"})),h=c(s({prop:"flexBasis"}),s({prop:"flexDirection"}),s({prop:"flexWrap"}),s({prop:"justifyContent"}),s({prop:"alignItems"}),s({prop:"alignContent"}),s({prop:"order"}),s({prop:"flex"}),s({prop:"flexGrow"}),s({prop:"flexShrink"}),s({prop:"alignSelf"}),s({prop:"justifyItems"}),s({prop:"justifySelf"})),b=c(s({prop:"gridGap"}),s({prop:"gridColumnGap"}),s({prop:"gridRowGap"}),s({prop:"gridColumn"}),s({prop:"gridRow"}),s({prop:"gridAutoFlow"}),s({prop:"gridAutoColumns"}),s({prop:"gridAutoRows"}),s({prop:"gridTemplateColumns"}),s({prop:"gridTemplateRows"}),s({prop:"gridTemplateAreas"}),s({prop:"gridArea"})),v=c(s({prop:"position"}),s({prop:"zIndex",themeKey:"zIndex"}),s({prop:"top"}),s({prop:"right"}),s({prop:"bottom"}),s({prop:"left"})),g=c(s({prop:"color",themeKey:"palette"}),s({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),y=s({prop:"boxShadow",themeKey:"shadows"});function j(e){return e<=1?"".concat(100*e,"%"):e}var O=s({prop:"width",transform:j}),x=s({prop:"maxWidth",transform:j}),w=s({prop:"minWidth",transform:j}),E=s({prop:"height",transform:j}),S=s({prop:"maxHeight",transform:j}),R=s({prop:"minHeight",transform:j}),C=(s({prop:"size",cssProperty:"width",transform:j}),s({prop:"size",cssProperty:"height",transform:j}),c(O,x,w,E,S,R,s({prop:"boxSizing"}))),N=r("+Hmc"),T=c(s({prop:"fontFamily",themeKey:"typography"}),s({prop:"fontSize",themeKey:"typography"}),s({prop:"fontStyle",themeKey:"typography"}),s({prop:"fontWeight",themeKey:"typography"}),s({prop:"letterSpacing"}),s({prop:"lineHeight"}),s({prop:"textAlign"})),I=r("Ff2n"),P=r("q1tI"),k=r.n(P),z=r("iuhU"),A=r("2mql"),K=r.n(A),D=r("RD7I");function M(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}var H=r("cNwE"),F=function(e){var t=function(e){return function(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.name,i=Object(I.a)(n,["name"]),c=a,l="function"===typeof t?function(e){return{root:function(r){return t(Object(o.a)({theme:e},r))}}}:{root:t},u=Object(D.a)(l,Object(o.a)({Component:e,name:a||e.displayName,classNamePrefix:c},i));t.filterProps&&(r=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var p=k.a.forwardRef((function(t,n){var a=t.children,i=t.className,c=t.clone,l=t.component,p=Object(I.a)(t,["children","className","clone","component"]),s=u(t),d=Object(z.a)(s.root,i),f=p;if(r&&(f=M(f,r)),c)return k.a.cloneElement(a,Object(o.a)({className:Object(z.a)(a.props.className,d)},f));if("function"===typeof a)return a(Object(o.a)({className:d},f));var m=l||e;return k.a.createElement(m,Object(o.a)({ref:n,className:d},f),a)}));return K()(p,e),p}}(e);return function(e,r){return t(e,Object(o.a)({defaultTheme:H.a},r))}},B=i(c(f,m,h,b,v,g,y,C,N.b,T)),L=F("div")(B,{name:"MuiBox"});t.a=L},kNCj:function(e,t,r){"use strict";r.r(t),r.d(t,"capitalize",(function(){return n.a})),r.d(t,"createChainedFunction",(function(){return o.a})),r.d(t,"createSvgIcon",(function(){return f})),r.d(t,"debounce",(function(){return m})),r.d(t,"deprecatedPropType",(function(){return h})),r.d(t,"isMuiElement",(function(){return b.a})),r.d(t,"ownerDocument",(function(){return v.a})),r.d(t,"ownerWindow",(function(){return g.a})),r.d(t,"requirePropFactory",(function(){return y.a})),r.d(t,"setRef",(function(){return j.a})),r.d(t,"unsupportedProp",(function(){return O})),r.d(t,"useControlled",(function(){return x})),r.d(t,"useEventCallback",(function(){return w.a})),r.d(t,"useForkRef",(function(){return E.a})),r.d(t,"unstable_useId",(function(){return S})),r.d(t,"useIsFocusVisible",(function(){return R.a}));var n=r("NqtD"),o=r("x6Ns"),a=r("wx14"),i=r("q1tI"),c=r.n(i),l=r("Ff2n"),u=(r("17x9"),r("iuhU")),p=r("H2TA"),s=i.forwardRef((function(e,t){var r=e.children,o=e.classes,c=e.className,p=e.color,s=void 0===p?"inherit":p,d=e.component,f=void 0===d?"svg":d,m=e.fontSize,h=void 0===m?"default":m,b=e.htmlColor,v=e.titleAccess,g=e.viewBox,y=void 0===g?"0 0 24 24":g,j=Object(l.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.createElement(f,Object(a.a)({className:Object(u.a)(o.root,c,"inherit"!==s&&o["color".concat(Object(n.a)(s))],"default"!==h&&o["fontSize".concat(Object(n.a)(h))]),focusable:"false",viewBox:y,color:b,"aria-hidden":!v||void 0,role:v?"img":void 0,ref:t},j),r,v?i.createElement("title",null,v):null)}));s.muiName="SvgIcon";var d=Object(p.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(s);function f(e,t){var r=function(t,r){return c.a.createElement(d,Object(a.a)({ref:r},t),e)};return r.muiName=d.muiName,c.a.memo(c.a.forwardRef(r))}function m(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function n(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];var i=this,c=function(){e.apply(i,o)};clearTimeout(t),t=setTimeout(c,r)}return n.clear=function(){clearTimeout(t)},n}function h(e,t){return function(){return null}}var b=r("ucBr"),v=r("gk1O"),g=r("g+pH"),y=r("ueBp"),j=r("GIek");function O(e,t,r,n,o){return null}function x(e){var t=e.controlled,r=e.default,n=(e.name,e.state,i.useRef(void 0!==t).current),o=i.useState(r),a=o[0],c=o[1];return[n?t:a,i.useCallback((function(e){n||c(e)}),[])]}var w=r("Ovef"),E=r("bfFb");function S(e){var t=i.useState(e),r=t[0],n=t[1],o=e||r;return i.useEffect((function(){null==r&&n("mui-".concat(Math.round(1e5*Math.random())))}),[r]),o}var R=r("G7As")},ueBp:function(e,t,r){"use strict";function n(e){return function(){return null}}r.d(t,"a",(function(){return n}))}}]);