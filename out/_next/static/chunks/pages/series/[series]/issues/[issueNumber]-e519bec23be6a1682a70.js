_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{JttJ:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return s}));var r=n("rePB"),c=n("nKUr"),i=n("nY40");n("q1tI");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var s=!0;t.default=function(e){return Object(c.jsx)(i.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}},VMJT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/series/[series]/issues/[issueNumber]",function(){return n("JttJ")}])},aRzv:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var r,c,i,a={home:{pathname:"/",name:"Home"},seriesIndex:{pathname:"/series",name:"Series"},panelsIndex:{pathname:"/panels",name:"Panels"}},s=(r=Object.values(a),c="name",r.sort((function(e,t){var n=(i?e[i]:e)||{},r="string"===typeof n[c]?n[c].toUpperCase():n[c],a=(i?t[i]:t)||{},s="string"===a[c]?a[c].toUpperCase():a[c];return r<s?-1:r>s?1:0}))),o=function(e){return"/series/".concat(e)},u=function(e){return"/panels/".concat(e)}},nY40:function(e,t,n){"use strict";var r=n("nKUr"),c=n("ofer"),i=n("tRbT"),a=(n("q1tI"),n("IujW")),s=n.n(a),o=n("rePB"),u=n("R/WZ"),j=Object(u.a)((function(e){var t;return{coverImageContainer:(t={},Object(o.a)(t,e.breakpoints.down("xs"),{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}),Object(o.a)(t,"& ul",{paddingInlineStart:e.spacing(2)}),Object(o.a)(t,"& li",{marginTop:e.spacing(1),marginBottom:e.spacing(1)}),Object(o.a)(t,"& .viewableImageWrapper",Object(o.a)({maxWidth:"30%",float:"right",margin:e.spacing(2,0,2,2)},e.breakpoints.down("xs"),{maxWidth:"100%","& img":{maxHeight:"50vh"}})),t),childrenContainer:Object(o.a)({marginTop:e.spacing(6),maxWidth:"60%"},e.breakpoints.down("xs"),{maxWidth:"100%"}),imagesContainer:{marginTop:e.spacing(6)}}})),p=n("o9in"),l=n("9BAl"),b=n("aRzv"),d=function(e,t){return e||t?t?" (".concat(e||"?"," - ").concat(t,")"):" (".concat(e,")"):null},m=function(e,t,n,i,a){var s=Object(r.jsxs)(c.a,{variant:"h1",gutterBottom:!0,children:[t,n?"":d(i,a)]});return e?Object(r.jsx)(l.a,{nextProps:{href:e},children:s}):s},O=n("H+k6");t.a=function(e){var t,n,a,o,u,f=e.params,h=e.issue,g=e.series,x=e.children,v=j(),w=g.comic.frontMatter,P=((null===h||void 0===h?void 0:h.comic)||{}).frontMatter,_=!!h,y=_?h.comic:g.comic,N=y.description,I=y.coverPath,C=y.imagePaths,k=_?P:w,J=k.link,T=k.title;return Object(r.jsxs)(i.a,{container:!0,spacing:3,children:[Object(r.jsxs)(i.a,{item:!0,xs:12,children:[m(J,T,_,w.start,w.end),_&&(t=f.series,n=w.title,a=P.issueNumber,o=P.start,u=P.end,Object(r.jsx)(l.a,{nextProps:{href:Object(b.b)(t)},children:Object(r.jsxs)(c.a,{variant:"h2",children:[n,a?" - #".concat(a," "):"",d(o,u)]})}))]}),Object(r.jsxs)(i.a,{item:!0,xs:12,className:v.coverImageContainer,children:[I&&Object(r.jsx)(p.a,{src:I}),Object(r.jsx)(c.a,{component:"div",children:N&&Object(r.jsx)(s.a,{children:N})}),x&&Object(r.jsx)("div",{className:v.childrenContainer,children:x})]}),!(null===C||void 0===C||!C.length)&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(i.a,{item:!0,xs:12,className:v.imagesContainer,children:Object(r.jsx)(i.a,{item:!0,xs:12,container:!0,spacing:3,children:Object(r.jsx)(O.a,{children:C.map((function(e){return Object(r.jsx)(p.a,{src:e},e)}))})})})})]})}}},[["VMJT",0,1,3,2,4,5,6,9]]]);