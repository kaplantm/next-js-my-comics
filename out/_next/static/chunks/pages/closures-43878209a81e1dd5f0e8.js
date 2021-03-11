_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{BhQA:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/closures",function(){return t("EqFQ")}])},EqFQ:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var n=t("Z3vd"),i=t("tRbT"),r=t("nKUr"),s=t("ofer"),o=t("q1tI"),c=t("o0o1"),l=t.n(c),u=t("HaE+"),d=t("90U+"),p=t("Ji2X"),h=t("TlT+");var j=function(e){var a,t,n,i=e.character,o=e.firstIssue,c=null===(a=o.data)||void 0===a||null===(t=a.image)||void 0===t?void 0:t.original_url,l=(null===(n=i.data)||void 0===n?void 0:n.name)||"Character Not Found";return Object(r.jsxs)(p.a,{maxWidth:"sm",children:[Object(r.jsxs)(s.a,{variant:"h4",component:"h1",color:i.loading?"secondary":"textPrimary",children:["Character Name: ",i.loading?"Loading...":l]}),o.loading!==h.a.NOT_STARTED&&Object(r.jsxs)(s.a,{variant:"h4",component:"h1",color:o.loading?"secondary":"textPrimary",children:["First issue:",Object(r.jsx)("br",{}),!!o.loading&&"Loading...",o.loading===h.a.COMPLETE&&(c?Object(r.jsx)("img",{src:c}):"First Issue Cover Not Found")]})]})};var v=function(){var e=Object(o.useState)({data:null,loading:h.a.NOT_STARTED}),a=e[0],t=e[1],n=Object(o.useState)({data:null,loading:h.a.NOT_STARTED}),i=n[0],s=n[1];return Object(o.useEffect)((function(){function e(e){return a.apply(this,arguments)}function a(){return(a=Object(u.a)(l.a.mark((function e(a){var t,n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({data:null,loading:h.a.LOADING}),e.next=3,Object(d.a)({method:"get",url:"api/comics/issue/4000-".concat(a),params:{field_list:"name,image"}});case 3:i=e.sent,s({data:null===(t=i.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.results,loading:h.a.COMPLETE});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=Object(u.a)(l.a.mark((function a(){var n,i,r,s,o,c,u,p;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({data:null,loading:h.a.LOADING}),a.next=3,Object(d.a)({method:"get",url:"api/comics/character/4005-5368",params:{field_list:"id,name,image,first_appeared_in_issue"}});case 3:u=a.sent,t({data:null===(n=u.response)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.results,loading:h.a.COMPLETE}),(p=null===u||void 0===u||null===(r=u.response)||void 0===r||null===(s=r.data)||void 0===s||null===(o=s.results)||void 0===o||null===(c=o.first_appeared_in_issue)||void 0===c?void 0:c.id)&&e(p);case 7:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(r.jsx)(j,{character:a,firstIssue:i})};var f=function(){var e=Object(o.useState)({data:null,loading:h.a.NOT_STARTED}),a=e[0],t=e[1],n=Object(o.useState)({data:null,loading:h.a.NOT_STARTED}),i=n[0],s=n[1];return Object(o.useEffect)((function(){function e(e){return n.apply(this,arguments)}function n(){return(n=Object(u.a)(l.a.mark((function e(a){var t,n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({data:null,loading:h.a.LOADING}),e.next=3,Object(d.a)({method:"get",url:"api/comics/issue/4000-".concat(a),params:{field_list:"name,image"}});case 3:i=e.sent,s({data:null===(t=i.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.results,loading:h.a.COMPLETE});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(u.a)(l.a.mark((function n(){var i,r,s,o,c,u;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({data:null,loading:h.a.LOADING}),n.next=3,Object(d.a)({method:"get",url:"api/comics/character/4005-5368",params:{field_list:"id,name,image,first_appeared_in_issue"}});case 3:c=n.sent,t({data:null===(i=c.response)||void 0===i||null===(r=i.data)||void 0===r?void 0:r.results,loading:h.a.COMPLETE}),(u=null===(s=a.data)||void 0===s||null===(o=s.first_appeared_in_issue)||void 0===o?void 0:o.id)&&e(u);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){i.apply(this,arguments)}()}),[]),Object(r.jsx)(j,{character:a,firstIssue:i})},m=t("9BAl");function O(){var e=Object(o.useState)(!1),a=e[0],t=e[1];return Object(r.jsxs)(i.a,{container:!0,spacing:3,direction:"column",children:[Object(r.jsxs)(i.a,{item:!0,children:[Object(r.jsx)(s.a,{variant:"h2",children:"Closures"}),Object(r.jsx)(s.a,{variant:"body1",children:"Hooks capture old state due to how javascript closures preserver old values. Either avoid accessing updated state within the same hook, or trigger another iteration of the hook to run with new state."})]}),Object(r.jsx)(i.a,{item:!0,children:Object(r.jsx)(m.a,{nextProps:{href:"https://dmitripavlutin.com/react-hooks-stale-closures/"},children:"Be Aware of Stale Closures when Using React Hooks"})}),Object(r.jsx)(i.a,{item:!0,children:Object(r.jsx)(n.a,{className:"margin1",onClick:function(){t((function(e){return!e}))},variant:"outlined",children:a?"Switch to working example":"Switch to failing example"})}),Object(r.jsx)(i.a,{item:!0,children:a?Object(r.jsx)(f,{}):Object(r.jsx)(v,{})}),Object(r.jsx)(s.a,{children:Object(r.jsx)("em",{children:"Note: This example relies on an internal api endpoint that is not available in the static build hosted on github pages. To see this demo, pull the repo down and run locally."})})]})}}},[["BhQA",0,2,1,3,4,5,10]]]);