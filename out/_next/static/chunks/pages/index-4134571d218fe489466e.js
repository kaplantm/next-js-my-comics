_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"/EDR":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("23aj")}])},"23aj":function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return V}));var n=r("rePB"),o=r("nKUr"),i=r("q1tI"),a=r("hlFM"),c=r("mQs5"),s=r.n(c),u=r("Dpg8"),l=r.n(u),d=r("tRbT"),p=r("wx14"),b=r("Ff2n"),f=(r("TOwV"),r("17x9"),r("iuhU")),O=r("NqtD"),j=r("ye/S"),h=r("H2TA"),m=r("Z3vd");m.a.styles;var g=i.forwardRef((function(e,t){var r=e.children,n=e.classes,o=e.className,a=e.color,c=void 0===a?"default":a,s=e.component,u=void 0===s?"div":s,l=e.disabled,d=void 0!==l&&l,j=e.disableElevation,h=void 0!==j&&j,m=e.disableFocusRipple,g=void 0!==m&&m,v=e.disableRipple,y=void 0!==v&&v,R=e.fullWidth,w=void 0!==R&&R,x=e.orientation,E=void 0===x?"horizontal":x,C=e.size,S=void 0===C?"medium":C,P=e.variant,D=void 0===P?"outlined":P,k=Object(b.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),_=Object(f.a)(n.grouped,n["grouped".concat(Object(O.a)(E))],n["grouped".concat(Object(O.a)(D))],n["grouped".concat(Object(O.a)(D)).concat(Object(O.a)(E))],n["grouped".concat(Object(O.a)(D)).concat("default"!==c?Object(O.a)(c):"")],d&&n.disabled);return i.createElement(u,Object(p.a)({role:"group",className:Object(f.a)(n.root,o,w&&n.fullWidth,h&&n.disableElevation,"contained"===D&&n.contained,"vertical"===E&&n.vertical),ref:t},k),i.Children.map(r,(function(e){return i.isValidElement(e)?i.cloneElement(e,{className:Object(f.a)(_,e.props.className),color:e.props.color||c,disabled:e.props.disabled||d,disableElevation:e.props.disableElevation||h,disableFocusRipple:g,disableRipple:y,fullWidth:w,size:e.props.size||S,variant:e.props.variant||D}):null})))})),v=Object(h.a)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},contained:{boxShadow:e.shadows[2]},disableElevation:{boxShadow:"none"},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:Object(j.c)(e.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:Object(j.c)(e.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:e.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:e.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:e.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:e.palette.secondary.dark}}}}),{name:"MuiButtonGroup"})(g),y=r("fNhX"),R=r("SbpH"),w=r("PkEL"),x=r("CXJX");function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S,P,D=function(e){var t=e.groupData,r=e.headerLabel;if(!t.issues.length)return null;var n=Object.values(t.issues).map((function(e){return C(C({},e),{},{link:{pathname:e.link.pathname,name:"".concat(Object(x.a)(e.params.series)?"":e.params.series," ").concat(e.link.name)}})}));return Object(o.jsx)(a.a,{mt:3,children:Object(o.jsx)(w.a,{listData:n,headerLabel:r})})},k=Object(i.memo)(D),_=r("KQm4"),N=r("Usr/");function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}!function(e){e.READING_ORDER="My Reading Order",e.YEAR="Date",e.ARC="Arc"}(S||(S={})),function(e){e.ASC="asc",e.DESC="desc"}(P||(P={}));var L=function(e,t){var r=Object(N.b)(e),n=Object(N.b)(t);return r.getTime()-n.getTime()},z=function(e,t){return function(e,t){return Object.keys(e).reduce((function(r,n){var o=Object(_.a)(e[n].issues);return r[n]=A(A({},e[n]),{},{issues:o.sort(t)}),r}),{})}(Object.keys(e).reduce((function(t,r){return t[r]=e[r],t}),{}),function(e){return function(t,r){var n="".concat(t.params.series,"/issues/").concat(t.params.issueNumber),o="".concat(r.params.series,"/issues/").concat(r.params.issueNumber),i=e.indexOf(n),a=e.indexOf(o);return-1===i?1:i-a}}(t))},M=function(e,t,r){var n=r===S.YEAR?L:void 0,o=Object.keys(e).sort(n);if(t===P.ASC)return{directionalSortedGroupedComics:e,groupOrder:o.filter((function(t){return e[t].issues.length}))};var i=o.reverse();return o.length>1?{directionalSortedGroupedComics:o.reduce((function(t,r){return t[r]=e[r],t}),{}),groupOrder:i}:{directionalSortedGroupedComics:o.reduce((function(t,r){var n=e[r];return t[r]=A(A({},n),{},{issues:Object(_.a)(n.issues).reverse()}),t}),{}),groupOrder:i}},B=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Unknown";return e.reduce((function(e,n){var o=n.comic.frontMatter[t]||r;return e[o]&&e[o].issues?e[o].issues.push(n):e[o]={issues:[n]},e}),{})},G=function(e){var t=e.allIssues,r=e.readingOrder,c=Object(i.useRef)(function(e,t){var r;return r={},Object(n.a)(r,S.YEAR,z(B(e,"start"),t)),Object(n.a)(r,S.ARC,z(B(e,"arc","No Arc / Unknown"),t)),Object(n.a)(r,S.READING_ORDER,z(function(e,t){return e.reduce((function(e,r){var n="".concat(r.params.series,"/issues/").concat(r.params.issueNumber);return-1!==t.indexOf(n)?e["My Reading Order"].issues.push(r):e.Untracked.issues.push(r),e}),{"My Reading Order":{issues:[],params:null,link:null,comic:null},Untracked:{issues:[],params:null,link:null,comic:null}})}(e,t),t)),r}(t,r)),u=Object(i.useState)(S.READING_ORDER),p=u[0],b=u[1],f=Object(i.useState)(P.ASC),O=f[0],j=f[1],h=Object(i.useState)((function(){var e=M(c.current[p],O,p);return{groups:e.directionalSortedGroupedComics,order:e.groupOrder}})),g=h[0],w=h[1],x=Object(i.useState)(""),E=x[0],C=x[1],D=Object(y.a)(E,250);function _(e){return function(){return j(e)}}return Object(i.useEffect)((function(){var e=D.toLowerCase(),t=c.current[p],r=e?Object.keys(t).reduce((function(r,n){return r[n]={comic:null,link:null,params:null,issues:t[n].issues.filter((function(t){var r=t.comic.frontMatter.title.toLowerCase().includes(e);return t.comic.description.toLowerCase().includes(e)||r}))},r}),{}):t,n=M(r,O,p),o=n.directionalSortedGroupedComics,i=n.groupOrder;w({groups:o,order:i})}),[D,p,O]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(a.a,{mb:3,children:Object(o.jsxs)(d.a,{container:!0,spacing:3,alignItems:"center",children:[Object(o.jsx)(d.a,{item:!0,children:Object(o.jsx)(v,{color:"primary","aria-label":"outlined primary button group",children:Object.values(S).map((function(e){return Object(o.jsx)(m.a,{disabled:p===e,onClick:(t=e,function(){return b(t)}),children:e},e);var t}))})}),g.order.length>1&&Object(o.jsx)(d.a,{item:!0,children:Object(o.jsx)(v,{color:"primary","aria-label":"outlined primary button group",children:Object.values(P).map((function(e){return Object(o.jsx)(m.a,{disabled:O===e,onClick:_(e),children:e===P.ASC?Object(o.jsx)(l.a,{}):Object(o.jsx)(s.a,{})},e)}))})}),Object(o.jsx)(d.a,{item:!0,xs:12,children:Object(o.jsx)(R.a,{label:"Search",variant:"outlined",onChange:function(e){var t=e.target.value;C(t)},value:E})})]})}),g.order.map((function(e){return Object(o.jsx)(k,{groupData:g.groups[e],headerLabel:e},e)}))]})};function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var V=!0;t.default=function(e){return Object(o.jsx)(G,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}},CXJX:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var n="reacts",o=function(e){return"One Shots"===e}},Dpg8:function(e,t,r){"use strict";var n=r("TqRt"),o=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r("q1tI")),a=(0,n(r("8/g6")).default)(i.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");t.default=a},fNhX:function(e,t,r){"use strict";var n=r("q1tI");t.a=function(e,t){var r=Object(n.useState)(e),o=r[0],i=r[1];return Object(n.useEffect)((function(){var r=setTimeout((function(){i(e)}),t);return function(){clearTimeout(r)}}),[e,t]),o}},mQs5:function(e,t,r){"use strict";var n=r("TqRt"),o=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r("q1tI")),a=(0,n(r("8/g6")).default)(i.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.default=a},whQS:function(e,t,r){"use strict";r.d(t,"f",(function(){return n})),r.d(t,"g",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"j",(function(){return a})),r.d(t,"b",(function(){return c})),r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"k",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"i",(function(){return b}));var n="hsla(204, 30%, 85%, 1)",o="hsla(204, 30%, 93%, 1)",i="hsla(195, 22%, 96%, 1)",a="hsla(0, 100%, 100%, 1)",c="hsla(354, 100%, 45%, 1)",s="#5b6770",u="hsla(0, 0%, 0%, 1)",l="hsla(203, 46%, 51%, 1)",d="hsla(50, 100%, 60%, 1)",p="hsla(0, 0%, 0%, .75)",b="hsla(0, 0%, 0%, .25)"}},[["/EDR",0,1,2,3,4,5,6,9,11,12,14]]]);