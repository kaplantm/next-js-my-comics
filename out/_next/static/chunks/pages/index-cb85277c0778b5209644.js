_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"/EDR":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("23aj")}])},"1waj":function(e,t,a){"use strict";var o=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=(0,o(a("8/g6")).default)(r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=i},"23aj":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return F}));var o,n=a("Ji2X"),r=a("hlFM"),i=a("nKUr"),c=a("q1tI"),l=a("eD//"),s=a("tVbE"),d=a("wx14"),u=a("Ff2n"),p=(a("17x9"),a("iuhU")),m=a("H2TA"),b=a("ofer"),h=a("MquD"),g=c.forwardRef((function(e,t){var a=e.children,o=e.classes,n=e.className,r=e.disableTypography,i=void 0!==r&&r,l=e.inset,s=void 0!==l&&l,m=e.primary,g=e.primaryTypographyProps,f=e.secondary,y=e.secondaryTypographyProps,v=Object(u.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),j=c.useContext(h.a).dense,x=null!=m?m:a;null==x||x.type===b.a||i||(x=c.createElement(b.a,Object(d.a)({variant:j?"body2":"body1",className:o.primary,component:"span",display:"block"},g),x));var O=f;return null==O||O.type===b.a||i||(O=c.createElement(b.a,Object(d.a)({variant:"body2",className:o.secondary,color:"textSecondary",display:"block"},y),O)),c.createElement("div",Object(d.a)({className:Object(p.a)(o.root,n,j&&o.dense,s&&o.inset,x&&O&&o.multiline),ref:t},v),x,O)})),f=Object(m.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(g),y=a("rePB"),v=a("aRzv");!function(e){e.next="NextJS",e.material="Material UI",e.hooks="Hooks",e.tinyMce="TinyMCE",e.axios="Axios",e.utils="Utils",e.javscript="JS Fundamentals",e.react="React Fundamentals",e.other="Other",e.resources="Resources"}(o||(o={}));var j,x=Object.values(o),O=[{text:"In NextJS, all hooks execute client side",categories:[o.next,o.hooks]},{text:"Do not change the NODE_ENV variable in live envs for a NextJS app. \nWhen NextJS builds the production (optimized, no live reload) version of the code it sets the NODE_ENV to production. Do not change it.\nIf you need to detect if you are in a live develop / stage environment, add another environment variable (e.g. INTERNAL_ENV) to signal that. \nMake sure your env variables are set the same at both build time and run time. \nIf you are using material UI, you can check if NextJS is running a production or dev build by looking at the build pages source code -\nin production, custom classes should be renamed to jss###",categories:[o.next,o.material]},{text:"Don't pass down classes. Always import components from the same source.",categories:[o.material],links:[v.b.materialCascadeBad]},{text:"TinyMCE many crash the site if it receives bad html as its inital data. Use sanitize-html we setting the editor's intial state to prevent this.",categories:[o.tinyMce],links:[v.b.materialCascadeBad]},{text:"Axios does not wrap their errors, instead you will need a try catch. Consider using a custom wrapper around axios to standardize this throughout your site. See the appAxios method in src/lib/utils/index.ts for example.",categories:[o.utils,o.axios],links:[v.b.materialCascadeBad]},{text:"For two digit decimal rounding Number.prototype.toFixed() may not be reliable.",categories:[o.utils],links:[v.b.rounding]},{text:"Closures can capture old state.",categories:[o.javscript,o.hooks],links:[v.b.closures,{name:"Stale Closures with Hooks",pathname:"https://dmitripavlutin.com/react-hooks-stale-closures/"}]},{text:"Async request may complete after a component has unmounted. Avoid unexpected behavior and memory leak warnings using the useIsMounted hook.",categories:[o.react,o.hooks,o.utils],links:[v.b.isMounted]},{text:"Don't bring in libraries until you need them. They can bulk up your project, and you inherit their bugs. ",categories:[o.other]},{text:"Use Node Version Manager .nvmrc file to make sure all developers on your project are using the same version of npm",categories:[o.other],links:[{name:"Node Version Manager",pathname:"https://github.com/nvm-sh/nvm"}]},{text:"HSLA color format can be more readable and makes it easier to create slight variants of a color.",categories:[o.resources],links:[{name:"HSLA Color Picker",pathname:"https://hslpicker.com/"}]},{text:"Consider borrowing the useFormState hook for minimal form state management.\nYou may find it beneficial to fully own the form management code in your project rather than use a library so it is fully extensible.",categories:[o.utils,o.hooks],links:[v.b.useFormState]}],k=a("R/WZ"),C=a("ye/S"),w=a("whQS"),S=Object(k.a)((function(e){return{listItem:{border:"1px solid ".concat(w.n),borderRadius:10,margin:e.spacing(2,0)},allCategories:{border:"2px solid ".concat(w.d),backgroundColor:Object(C.c)(w.d,.4),padding:e.spacing(2),display:"flex",flexWrap:"wrap","& .chipMain":{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}})),N=a("9jPY"),I=a("1waj"),E=a.n(I),R=a("WUv8"),T=a.n(R),P=(j={},Object(y.a)(j,o.next,w.r),Object(y.a)(j,o.material,w.k),Object(y.a)(j,o.hooks,w.m),Object(y.a)(j,o.tinyMce,w.h),Object(y.a)(j,o.axios,w.c),Object(y.a)(j,o.utils,w.q),Object(y.a)(j,o.javscript,w.o),Object(y.a)(j,o.react,w.g),Object(y.a)(j,o.other,w.l),Object(y.a)(j,o.resources,w.e),j),D=Object(k.a)((function(e){return{chip:{transition:"border-color .2s",letterSpacing:".05em",fontWeight:600,marginLeft:e.spacing(.75),marginTop:e.spacing(.5),backgroundColor:function(e){var t=e.category;return Object(C.c)(P[t]||w.f,.3)},border:function(e){var t=e.category;return"2px solid ".concat(Object(C.c)(P[t]||w.f,.25))},"&:hover":{backgroundColor:function(e){var t=e.category;return Object(C.c)(P[t]||w.f,.5)},border:"2px solid transparent"}},active:{backgroundColor:function(e){var t=e.category;return Object(C.c)(P[t]||w.f,.4)},border:function(e){var t=e.category;return"2px solid ".concat(P[t]||w.f)}}}}));function M(e){var t=e.category,a=e.toggleActive,o=e.active,n=D({category:t}),r=Object(c.useRef)(null);function l(){a(t),r.current&&r.current.blur()}return Object(i.jsx)(N.a,{ref:r,size:"small",label:t,className:Object(p.a)(n.chip,o&&n.active,"chipMain"),onClick:l,onDelete:l,deleteIcon:o?Object(i.jsx)(T.a,{}):Object(i.jsx)(E.a,{})})}var L=a("9BAl");function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(Object(a),!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function $(){var e=S(),t=Object(c.useState)(x.reduce((function(e,t){return e[t]=!1,e}),{})),a=t[0],o=t[1];function n(e){o((function(t){return A(A({},t),{},Object(y.a)({},e,!t[e]))}))}var d=Object(c.useMemo)((function(){return function(e){var t=x.filter((function(t){return e[t]}));return t.length?O.filter((function(e){return t.every((function(t){return e.categories.includes(t)}))})):O}(a)}),[a]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:e.allCategories,children:x.map((function(e){return Object(i.jsx)(M,{category:e,toggleActive:n,active:a[e]},e)}))}),Object(i.jsx)(l.a,{children:d.map((function(t){return Object(i.jsx)(s.a,{classes:{root:e.listItem},children:Object(i.jsxs)(r.a,{display:"flex",flex:1,flexDirection:"column",children:[Object(i.jsx)(f,{children:t.text}),Object(i.jsx)(r.a,{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",children:!!t.categories&&t.categories.map((function(e){return Object(i.jsx)(M,{category:e,toggleActive:n,active:a[e]},e)}))}),Object(i.jsx)(r.a,{display:"flex",flexDirection:"column",children:!!t.links&&t.links.map((function(e){return Object(i.jsx)(L.a,{nextProps:{href:{pathname:e.pathname,query:e.query}},children:e.name},"".concat(e.name).concat(e.pathname))}))})]})},t.text)}))})]})}function F(){return Object(i.jsx)(n.a,{maxWidth:"md",children:Object(i.jsx)(r.a,{display:"flex",flexDirection:"column",justifyContent:"center",children:Object(i.jsx)($,{})})})}},"9jPY":function(e,t,a){"use strict";var o=a("wx14"),n=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("5AJ6"),l=Object(c.a)(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),s=a("H2TA"),d=a("ye/S"),u=a("bfFb"),p=a("NqtD"),m=a("VD++");function b(e){return"Backspace"===e.key||"Delete"===e.key}var h=r.forwardRef((function(e,t){var a=e.avatar,c=e.classes,s=e.className,d=e.clickable,h=e.color,g=void 0===h?"default":h,f=e.component,y=e.deleteIcon,v=e.disabled,j=void 0!==v&&v,x=e.icon,O=e.label,k=e.onClick,C=e.onDelete,w=e.onKeyDown,S=e.onKeyUp,N=e.size,I=void 0===N?"medium":N,E=e.variant,R=void 0===E?"default":E,T=Object(n.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),P=r.useRef(null),D=Object(u.a)(P,t),M=function(e){e.stopPropagation(),C&&C(e)},L=!(!1===d||!k)||d,W="small"===I,A=f||(L?m.a:"div"),$=A===m.a?{component:"div"}:{},F=null;if(C){var z=Object(i.a)("default"!==g&&("default"===R?c["deleteIconColor".concat(Object(p.a)(g))]:c["deleteIconOutlinedColor".concat(Object(p.a)(g))]),W&&c.deleteIconSmall);F=y&&r.isValidElement(y)?r.cloneElement(y,{className:Object(i.a)(y.props.className,c.deleteIcon,z),onClick:M}):r.createElement(l,{className:Object(i.a)(c.deleteIcon,z),onClick:M})}var q=null;a&&r.isValidElement(a)&&(q=r.cloneElement(a,{className:Object(i.a)(c.avatar,a.props.className,W&&c.avatarSmall,"default"!==g&&c["avatarColor".concat(Object(p.a)(g))])}));var V=null;return x&&r.isValidElement(x)&&(V=r.cloneElement(x,{className:Object(i.a)(c.icon,x.props.className,W&&c.iconSmall,"default"!==g&&c["iconColor".concat(Object(p.a)(g))])})),r.createElement(A,Object(o.a)({role:L||C?"button":void 0,className:Object(i.a)(c.root,s,"default"!==g&&[c["color".concat(Object(p.a)(g))],L&&c["clickableColor".concat(Object(p.a)(g))],C&&c["deletableColor".concat(Object(p.a)(g))]],"default"!==R&&[c.outlined,{primary:c.outlinedPrimary,secondary:c.outlinedSecondary}[g]],j&&c.disabled,W&&c.sizeSmall,L&&c.clickable,C&&c.deletable),"aria-disabled":!!j||void 0,tabIndex:L||C?0:void 0,onClick:k,onKeyDown:function(e){e.currentTarget===e.target&&b(e)&&e.preventDefault(),w&&w(e)},onKeyUp:function(e){e.currentTarget===e.target&&(C&&b(e)?C(e):"Escape"===e.key&&P.current&&P.current.blur()),S&&S(e)},ref:D},$,T),q||V,r.createElement("span",{className:Object(i.a)(c.label,W&&c.labelSmall)},O),F)}));t.a=Object(s.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(d.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(d.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(d.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(d.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(d.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(d.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(d.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(d.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(d.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(d.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(d.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(d.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(h)},Ji2X:function(e,t,a){"use strict";var o=a("wx14"),n=a("Ff2n"),r=a("rePB"),i=a("q1tI"),c=(a("17x9"),a("iuhU")),l=a("H2TA"),s=a("NqtD"),d=i.forwardRef((function(e,t){var a=e.classes,r=e.className,l=e.component,d=void 0===l?"div":l,u=e.disableGutters,p=void 0!==u&&u,m=e.fixed,b=void 0!==m&&m,h=e.maxWidth,g=void 0===h?"lg":h,f=Object(n.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(d,Object(o.a)({className:Object(c.a)(a.root,r,b&&a.fixed,p&&a.disableGutters,!1!==g&&a["maxWidth".concat(Object(s.a)(String(g)))]),ref:t},f))}));t.a=Object(l.a)((function(e){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var o=e.breakpoints.values[a];return 0!==o&&(t[e.breakpoints.up(a)]={maxWidth:o}),t}),{}),maxWidthXs:Object(r.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(r.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},"R/WZ":function(e,t,a){"use strict";var o=a("wx14"),n=a("RD7I"),r=a("cNwE");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n.a)(e,Object(o.a)({defaultTheme:r.a},t))}},WUv8:function(e,t,a){"use strict";var o=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=(0,o(a("8/g6")).default)(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");t.default=i},aRzv:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var o,n,r,i={home:{pathname:"/",name:"Home"},closures:{pathname:"/closures",name:"Closures"},isMounted:{pathname:"/is-mounted",name:"Is Mounted"},rounding:{pathname:"/rounding",name:"Rounding"},whenHooksRun:{pathname:"/when-hooks-run",name:"When Hooks Run"},materialCascadeGood:{pathname:"/material-cascade",name:"Material Cascade - Good",query:{bad:!1}},materialCascadeBad:{pathname:"/material-cascade",name:"Material Cascade - Bad",query:{bad:!0}},useFormState:{pathname:"/use-form-state",name:"Use Form State"}},c=(o=Object.values(i).slice(1),n="name",o.sort((function(e,t){var a=(r?e[r]:e)||{},o="string"===typeof a[n]?a[n].toUpperCase():a[n],i=(r?t[r]:t)||{},c="string"===i[n]?i[n].toUpperCase():i[n];return o<c?-1:o>c?1:0})))},tVbE:function(e,t,a){"use strict";var o=a("wx14"),n=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),l=a("VD++"),s=a("ucBr"),d=a("bfFb"),u=a("MquD"),p=a("i8i4"),m="undefined"===typeof window?r.useEffect:r.useLayoutEffect,b=r.forwardRef((function(e,t){var a=e.alignItems,c=void 0===a?"center":a,b=e.autoFocus,h=void 0!==b&&b,g=e.button,f=void 0!==g&&g,y=e.children,v=e.classes,j=e.className,x=e.component,O=e.ContainerComponent,k=void 0===O?"li":O,C=e.ContainerProps,w=(C=void 0===C?{}:C).className,S=Object(n.a)(C,["className"]),N=e.dense,I=void 0!==N&&N,E=e.disabled,R=void 0!==E&&E,T=e.disableGutters,P=void 0!==T&&T,D=e.divider,M=void 0!==D&&D,L=e.focusVisibleClassName,W=e.selected,A=void 0!==W&&W,$=Object(n.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),F=r.useContext(u.a),z={dense:I||F.dense||!1,alignItems:c},q=r.useRef(null);m((function(){h&&q.current&&q.current.focus()}),[h]);var V=r.Children.toArray(y),_=V.length&&Object(s.a)(V[V.length-1],["ListItemSecondaryAction"]),U=r.useCallback((function(e){q.current=p.findDOMNode(e)}),[]),B=Object(d.a)(U,t),H=Object(o.a)({className:Object(i.a)(v.root,j,z.dense&&v.dense,!P&&v.gutters,M&&v.divider,R&&v.disabled,f&&v.button,"center"!==c&&v.alignItemsFlexStart,_&&v.secondaryAction,A&&v.selected),disabled:R},$),J=x||"li";return f&&(H.component=x||"div",H.focusVisibleClassName=Object(i.a)(v.focusVisible,L),J=l.a),_?(J=H.component||x?J:"div","li"===k&&("li"===J?J="div":"li"===H.component&&(H.component="div")),r.createElement(u.a.Provider,{value:z},r.createElement(k,Object(o.a)({className:Object(i.a)(v.container,w),ref:B},S),r.createElement(J,H,V),V.pop()))):r.createElement(u.a.Provider,{value:z},r.createElement(J,Object(o.a)({ref:B},H),V))}));t.a=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b)},whQS:function(e,t,a){"use strict";a.d(t,"n",(function(){return o})),a.d(t,"d",(function(){return n})),a.d(t,"s",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"p",(function(){return c})),a.d(t,"q",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"r",(function(){return d})),a.d(t,"f",(function(){return u})),a.d(t,"g",(function(){return p})),a.d(t,"j",(function(){return m})),a.d(t,"i",(function(){return b})),a.d(t,"k",(function(){return h})),a.d(t,"m",(function(){return g})),a.d(t,"c",(function(){return f})),a.d(t,"o",(function(){return y})),a.d(t,"e",(function(){return v})),a.d(t,"h",(function(){return j})),a.d(t,"l",(function(){return x}));var o="hsla(204, 6%, 85%, 1)",n="hsla(195, 22%, 96%, 1)",r="hsla(0, 100%, 100%, 1)",i="hsla(354, 100%, 45%, 1)",c="#5b6770",l="hsla(206, 10%, 40%, 1)",s="hsla(0, 0%, 0%, 1)",d="hsla(117, 66%, 51%, 1)",u="hsla(0, 0%, 98%, 1)",p="hsla(117, 64%, 83%, 1)",m="hsla(117, 66%, 39%, 1)",b="hsla(203, 46%, 51%, 1)",h="hsla(202, 64%, 57%, 1)",g="hsla(353, 89%, 76%, 1)",f="hsla(220, 44%, 41%, 1)",y="hsla(249, 44%, 41%, 1)",v="hsla(249, 44%, 70%, 1)",j="hsla(44, 94%, 73%, 1)",x="hsla(17, 88%, 60%, 1)"}},[["/EDR",0,2,1,3,4,6,7]]]);