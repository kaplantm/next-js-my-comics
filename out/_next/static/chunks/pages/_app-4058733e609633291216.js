_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,i=void 0!==o&&o;return n||r&&i}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"0PSK":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=r.a.createContext(null)},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0,i=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){i=!0;var c=r.key.slice(r.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var l=p[s];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var d=r.props[l],f=a[l]||new Set;"name"===l&&i||!f.has(d)?(f.add(d),a[l]=f):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var b=m;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},MquD:function(e,t,n){"use strict";var a=n("q1tI"),r=a.createContext({});t.a=r},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Ovef:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),r="undefined"!==typeof window?a.useLayoutEffect:a.useEffect;function o(e){var t=a.useRef(e);return r((function(){t.current=e})),a.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){i(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},a1gu:function(e,t,n){var a=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t}},aRzv:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var a,r,o,i={home:{pathname:"/",name:"Home"},seriesIndex:{pathname:"/series",name:"Series"},panelsIndex:{pathname:"/panels",name:"Panels"}},c=(a=Object.values(i),r="name",a.sort((function(e,t){var n=(o?e[o]:e)||{},a="string"===typeof n[r]?n[r].toUpperCase():n[r],i=(o?t[o]:t)||{},c="string"===i[r]?i[r].toUpperCase():i[r];return a<c?-1:a>c?1:0}))),s=function(e){return"/series/".concat(e)},u=function(e){return"/panels/".concat(e)}},cha2:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),r=n("rePB"),o=n("q1tI"),i=n.n(o),c=n("g4pe"),s=n.n(c),u=n("wx14"),l=(n("17x9"),n("OKji")),d=n("aXM8"),p=n("hfi/");var f=function(e){var t=e.children,n=e.theme,a=Object(d.a)(),r=i.a.useMemo((function(){var e=null===a?n:function(e,t){return"function"===typeof t?t(e):Object(u.a)({},e,t)}(a,n);return null!=e&&(e[p.a]=null!==a),e}),[n,a]);return i.a.createElement(l.a.Provider,{value:r},t)},m=n("H2TA"),b={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},h=function(e){return Object(u.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var g=Object(m.a)((function(e){return{"@global":{html:b,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(u.a)({margin:0},h(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,o.createElement(o.Fragment,null,n)})),v=n("viY9"),x=n("whQS"),y=Object(v.a)({spacing:function(e){return"".concat(.5*e,"rem")},palette:{primary:{main:x.a},secondary:{main:x.h},error:{main:x.b},background:{default:x.g},text:{primary:x.a}},typography:{fontFamily:["Din","Roboto",'"Helvetica Neue"',"sans-serif"].join(",")},overrides:{MuiTypography:{root:{"&.uppercase":{textTransform:"uppercase"},"&.capitalize":{textTransform:"capitalize"},"&.italic":{fontStyle:"italic"},"&.light":{fontWeight:300},"&.normal":{fontWeight:400},"&.demiBold":{fontWeight:600},"&.bold":{fontWeight:700},"&.extraBold":{fontWeight:800},"&.remPt75":{fontSize:".75rem"},"&.mtHalfEm":{marginTop:".5em"},"&.mbQuarterRm":{marginBottom:".25em"}},h1:{fontSize:"2rem",fontWeight:"normal"},h2:{fontSize:"1.5rem",fontWeight:"normal"},h3:{fontSize:"1.25rem",fontWeight:"normal"},h4:{fontSize:"1.125rem",fontWeight:"normal"},h5:{fontSize:"1rem",fontWeight:"normal"},h6:{fontSize:".75rem",fontWeight:"normal"},body1:{fontSize:"1rem",fontWeight:"normal"},body2:{fontSize:".875rem",fontWeight:"normal"},caption:{fontSize:".75rem",fontWeight:"normal"},subtitle2:{color:x.e,fontWeight:"normal"}},MuiButton:{root:{backgroundColor:x.c,whiteSpace:"nowrap","&.margin1":{margin:".5rem"}}},MuiLink:{root:{color:x.d,"&.noUnderline":{"&:hover":{textDecoration:"none"}},"&.noWrap":{whiteSpace:"nowrap"}}}}}),j=n("Ff2n"),O=n("iuhU"),w=n("NqtD"),k=o.forwardRef((function(e,t){var n=e.classes,a=e.className,r=e.component,i=void 0===r?"div":r,c=e.disableGutters,s=void 0!==c&&c,l=e.fixed,d=void 0!==l&&l,p=e.maxWidth,f=void 0===p?"lg":p,m=Object(j.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(i,Object(u.a)({className:Object(O.a)(n.root,a,d&&n.fixed,s&&n.disableGutters,!1!==f&&n["maxWidth".concat(Object(w.a)(String(f)))]),ref:t},m))})),C=Object(m.a)((function(e){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:a}),t}),{}),maxWidthXs:Object(r.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(r.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(k),S=n("kKAo"),M=o.forwardRef((function(e,t){var n=e.classes,a=e.className,r=e.color,i=void 0===r?"primary":r,c=e.position,s=void 0===c?"fixed":c,l=Object(j.a)(e,["classes","className","color","position"]);return o.createElement(S.a,Object(u.a)({square:!0,component:"header",elevation:4,className:Object(O.a)(n.root,n["position".concat(Object(w.a)(s))],n["color".concat(Object(w.a)(i))],a,"fixed"===s&&"mui-fixed"),ref:t},l))})),P=Object(m.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(M),N=o.forwardRef((function(e,t){var n=e.classes,a=e.className,r=e.component,i=void 0===r?"div":r,c=e.disableGutters,s=void 0!==c&&c,l=e.variant,d=void 0===l?"regular":l,p=Object(j.a)(e,["classes","className","component","disableGutters","variant"]);return o.createElement(i,Object(u.a)({className:Object(O.a)(n.root,n[d],a,!s&&n.gutters),ref:t},p))})),W=Object(m.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(r.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(N),_=n("eD//"),I=n("VD++"),E=n("ucBr"),A=n("bfFb"),R=n("MquD"),D=n("i8i4"),q="undefined"===typeof window?o.useEffect:o.useLayoutEffect,z=o.forwardRef((function(e,t){var n=e.alignItems,a=void 0===n?"center":n,r=e.autoFocus,i=void 0!==r&&r,c=e.button,s=void 0!==c&&c,l=e.children,d=e.classes,p=e.className,f=e.component,m=e.ContainerComponent,b=void 0===m?"li":m,h=e.ContainerProps,g=(h=void 0===h?{}:h).className,v=Object(j.a)(h,["className"]),x=e.dense,y=void 0!==x&&x,w=e.disabled,k=void 0!==w&&w,C=e.disableGutters,S=void 0!==C&&C,M=e.divider,P=void 0!==M&&M,N=e.focusVisibleClassName,W=e.selected,_=void 0!==W&&W,z=Object(j.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),T=o.useContext(R.a),H={dense:y||T.dense||!1,alignItems:a},B=o.useRef(null);q((function(){i&&B.current&&B.current.focus()}),[i]);var F=o.Children.toArray(l),L=F.length&&Object(E.a)(F[F.length-1],["ListItemSecondaryAction"]),K=o.useCallback((function(e){B.current=D.findDOMNode(e)}),[]),U=Object(A.a)(K,t),G=Object(u.a)({className:Object(O.a)(d.root,p,H.dense&&d.dense,!S&&d.gutters,P&&d.divider,k&&d.disabled,s&&d.button,"center"!==a&&d.alignItemsFlexStart,L&&d.secondaryAction,_&&d.selected),disabled:k},z),J=f||"li";return s&&(G.component=f||"div",G.focusVisibleClassName=Object(O.a)(d.focusVisible,N),J=I.a),L?(J=G.component||f?J:"div","li"===b&&("li"===J?J="div":"li"===G.component&&(G.component="div")),o.createElement(R.a.Provider,{value:H},o.createElement(b,Object(u.a)({className:Object(O.a)(d.container,g),ref:U},v),o.createElement(J,G,F),F.pop()))):o.createElement(R.a.Provider,{value:H},o.createElement(J,Object(u.a)({ref:U},G),F))})),T=Object(m.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(z),H=n("ofer"),B=n("9BAl"),F=n("R/WZ"),L=Object(F.a)((function(e){return{title:{fontWeight:600,letterSpacing:".1rem",marginLeft:e.spacing(1),color:x.h},list:{display:"flex"},link:{whiteSpace:"nowrap",color:x.h},root:{display:"flex"},appBar:{backgroundColor:x.a},toolbar:{display:"flex",justifyContent:"space-between"},content:{flexGrow:1,padding:e.spacing(14,0,6,0)},navList:{display:"flex"}}})),K=n("aRzv");var U=function(e){var t=e.children,n=L();return Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)(P,{position:"fixed",className:n.appBar,children:Object(a.jsxs)(W,{className:n.toolbar,children:[Object(a.jsx)(B.a,{nextProps:{href:{pathname:K.d.home.pathname}},color:"secondary",className:"noWrap noUnderline",children:Object(a.jsx)(H.a,{variant:"h3",component:"h1",className:n.title,children:"Comics"})}),Object(a.jsx)("nav",{children:Object(a.jsx)(_.a,{className:n.navList,children:K.c.map((function(e){return Object(a.jsx)(B.a,{nextProps:{href:{pathname:e.pathname,query:e.query}},className:n.link,children:Object(a.jsx)(T,{button:!0,children:e.name})},"".concat(e.pathname).concat(e.query?JSON.stringify(e.query):"").concat(e.name))}))})})]})}),Object(a.jsx)("main",{className:Object(O.a)(n.content),children:Object(a.jsx)(C,{children:t})})]})};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(o.useEffect)((function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e)}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(s.a,{children:[Object(a.jsx)("title",{children:"Comics"}),Object(a.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})]}),Object(a.jsxs)(f,{theme:y,children:[Object(a.jsx)(g,{}),Object(a.jsx)(U,{children:Object(a.jsx)(t,J({},n))})]})]})}},"eD//":function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),s=n("MquD"),u=o.forwardRef((function(e,t){var n=e.children,c=e.classes,u=e.className,l=e.component,d=void 0===l?"ul":l,p=e.dense,f=void 0!==p&&p,m=e.disablePadding,b=void 0!==m&&m,h=e.subheader,g=Object(r.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),v=o.useMemo((function(){return{dense:f}}),[f]);return o.createElement(s.a.Provider,{value:v},o.createElement(d,Object(a.a)({className:Object(i.a)(c.root,u,f&&c.dense,!b&&c.padding,h&&c.subheader),ref:t},g),h,n))}));t.a=Object(c.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(u)},g4pe:function(e,t,n){e.exports=n("8Kt/")},kKAo:function(e,t,n){"use strict";var a=n("Ff2n"),r=n("wx14"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),s=o.forwardRef((function(e,t){var n=e.classes,c=e.className,s=e.component,u=void 0===s?"div":s,l=e.square,d=void 0!==l&&l,p=e.elevation,f=void 0===p?1:p,m=e.variant,b=void 0===m?"elevation":m,h=Object(a.a)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(u,Object(r.a)({className:Object(i.a)(n.root,c,"outlined"===b?n.outlined:n["elevation".concat(f)],!d&&n.rounded),ref:t},h))}));t.a=Object(c.a)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),Object(r.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(s)},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},whQS:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"h",(function(){return u})),n.d(t,"f",(function(){return l}));var a="hsla(195, 22%, 96%, 1)",r="hsla(0, 100%, 100%, 1)",o="hsla(354, 100%, 45%, 1)",i="#5b6770",c="hsla(0, 0%, 0%, 1)",s="hsla(203, 46%, 51%, 1)",u="hsla(50, 100%, 60%, 1)",l="hsla(0, 0%, 0%, .75)"}},[[0,0,1,3,2,4,7]]]);