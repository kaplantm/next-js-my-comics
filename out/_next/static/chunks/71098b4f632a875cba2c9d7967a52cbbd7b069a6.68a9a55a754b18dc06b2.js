(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"3UW2":function(e,t,n){"use strict";var r=n("o0o1"),o=n.n(r),i=n("tRbT"),a=n("nKUr"),c=n("ofer"),u=n("HaE+"),s=n("rePB"),l=n("KQm4"),f=n("q1tI"),p=n.n(f),d=n("ndaD"),b=n("o9in"),g=n("H+k6"),v=n("17x9"),m=n.n(v);function j(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function y(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}Object.create;function h(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}Object.create;var O=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function x(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=O.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"===typeof t?t:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var D=[".DS_Store","Thumbs.db"];function w(e){return(null!==e.target&&e.target.files?F(e.target.files):[]).map((function(e){return x(e)}))}function P(e,t){return j(this,void 0,void 0,(function(){var n;return y(this,(function(r){switch(r.label){case 0:return e.items?(n=F(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(k))]):[3,2];case 1:return[2,S(A(r.sent()))];case 2:return[2,S(F(e.files).map((function(e){return x(e)})))]}}))}))}function S(e){return e.filter((function(e){return-1===D.indexOf(e.name)}))}function F(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function k(e){if("function"!==typeof e.webkitGetAsEntry)return E(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?z(t):E(e)}function A(e){return e.reduce((function(e,t){return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e}(e,Array.isArray(t)?A(t):[t])}),[])}function E(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=x(t);return Promise.resolve(n)}function C(e){return j(this,void 0,void 0,(function(){return y(this,(function(t){return[2,e.isDirectory?z(e):R(e)]}))}))}function z(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var i=this;t.readEntries((function(t){return j(i,void 0,void 0,(function(){var i,a,c;return y(this,(function(u){switch(u.label){case 0:if(t.length)return[3,5];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=u.sent(),e(i),[3,4];case 3:return a=u.sent(),n(a),[3,4];case 4:return[3,6];case 5:c=Promise.all(t.map(C)),r.push(c),o(),u.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function R(e){return j(this,void 0,void 0,(function(){return y(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=x(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var I=n("X1Co"),T=n.n(I);function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},B=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," bytes")}},M=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," bytes")}},U={code:"too-many-files",message:"Too many files"};function _(e,t){var n="application/x-moz-file"===e.type||T()(e,t);return[n,n?null:N(t)]}function W(e,t,n){if(q(e.size))if(q(t)&&q(n)){if(e.size>n)return[!1,B(n)];if(e.size<t)return[!1,M(t)]}else{if(q(t)&&e.size<t)return[!1,M(t)];if(q(n)&&e.size>n)return[!1,B(n)]}return[!0,null]}function q(e){return void 0!==e&&null!==e}function $(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=L(_(e,n),1)[0],i=L(W(e,r,o),1)[0];return t&&i}))}function G(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function H(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function J(e){e.preventDefault()}function Q(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function X(e){return-1!==e.indexOf("Edge/")}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return Q(e)||X(e)}function V(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return!G(e)&&t&&t.apply(void 0,[e].concat(r)),G(e)}))}}function Y(e){return function(e){if(Array.isArray(e))return ne(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||te(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||te(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){if(e){if("string"===typeof e)return ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ne(e,t):void 0}}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ce=Object(f.forwardRef)((function(e,t){var n=e.children,r=le(ae(e,["children"])),o=r.open,i=ae(r,["open"]);return Object(f.useImperativeHandle)(t,(function(){return{open:o}}),[o]),p.a.createElement(f.Fragment,null,n(oe(oe({},i),{},{open:o})))}));ce.displayName="Dropzone";var ue={disabled:!1,getFilesFromEvent:function(e){return j(this,void 0,void 0,(function(){return y(this,(function(t){return[2,(n=e,n.dataTransfer&&e.dataTransfer?P(e.dataTransfer,e.type):w(e))];var n}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null};ce.defaultProps=ue,ce.propTypes={children:m.a.func,accept:m.a.oneOfType([m.a.string,m.a.arrayOf(m.a.string)]),multiple:m.a.bool,preventDropOnDocument:m.a.bool,noClick:m.a.bool,noKeyboard:m.a.bool,noDrag:m.a.bool,noDragEventsBubbling:m.a.bool,minSize:m.a.number,maxSize:m.a.number,maxFiles:m.a.number,disabled:m.a.bool,getFilesFromEvent:m.a.func,onFileDialogCancel:m.a.func,onDragEnter:m.a.func,onDragLeave:m.a.func,onDragOver:m.a.func,onDrop:m.a.func,onDropAccepted:m.a.func,onDropRejected:m.a.func,validator:m.a.func};var se={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=oe(oe({},ue),e),n=t.accept,r=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,a=t.minSize,c=t.multiple,u=t.maxFiles,s=t.onDragEnter,l=t.onDragLeave,p=t.onDragOver,d=t.onDrop,b=t.onDropAccepted,g=t.onDropRejected,v=t.onFileDialogCancel,m=t.preventDropOnDocument,j=t.noClick,y=t.noKeyboard,h=t.noDrag,O=t.noDragEventsBubbling,x=t.validator,D=Object(f.useRef)(null),w=Object(f.useRef)(null),P=Object(f.useReducer)(fe,se),S=ee(P,2),F=S[0],k=S[1],A=F.isFocused,E=F.isFileDialogActive,C=F.draggedFiles,z=Object(f.useCallback)((function(){w.current&&(k({type:"openDialog"}),w.current.value=null,w.current.click())}),[k]),R=function(){E&&setTimeout((function(){w.current&&(w.current.files.length||(k({type:"closeDialog"}),"function"===typeof v&&v()))}),300)};Object(f.useEffect)((function(){return window.addEventListener("focus",R,!1),function(){window.removeEventListener("focus",R,!1)}}),[w,E,v]);var I=Object(f.useCallback)((function(e){D.current&&D.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),z()))}),[D,w]),T=Object(f.useCallback)((function(){k({type:"focus"})}),[]),L=Object(f.useCallback)((function(){k({type:"blur"})}),[]),K=Object(f.useCallback)((function(){j||(Z()?setTimeout(z,0):z())}),[w,j]),N=Object(f.useRef)([]),B=function(e){D.current&&D.current.contains(e.target)||(e.preventDefault(),N.current=[])};Object(f.useEffect)((function(){return m&&(document.addEventListener("dragover",J,!1),document.addEventListener("drop",B,!1)),function(){m&&(document.removeEventListener("dragover",J),document.removeEventListener("drop",B))}}),[D,m]);var M=Object(f.useCallback)((function(e){e.preventDefault(),e.persist(),ce(e),N.current=[].concat(Y(N.current),[e.target]),H(e)&&Promise.resolve(o(e)).then((function(t){G(e)&&!O||(k({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[o,s,O]),q=Object(f.useCallback)((function(e){e.preventDefault(),e.persist(),ce(e);var t=H(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&p&&p(e),!1}),[p,O]),Q=Object(f.useCallback)((function(e){e.preventDefault(),e.persist(),ce(e);var t=N.current.filter((function(e){return D.current&&D.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),N.current=t,t.length>0||(k({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),H(e)&&l&&l(e))}),[D,l,O]),X=Object(f.useCallback)((function(e){e.preventDefault(),e.persist(),ce(e),N.current=[],H(e)&&Promise.resolve(o(e)).then((function(t){if(!G(e)||O){var r=[],o=[];t.forEach((function(e){var t=ee(_(e,n),2),c=t[0],u=t[1],s=ee(W(e,a,i),2),l=s[0],f=s[1],p=x?x(e):null;if(c&&l&&!p)r.push(e);else{var d=[u,f];p&&(d=d.concat(p)),o.push({file:e,errors:d.filter((function(e){return e}))})}})),(!c&&r.length>1||c&&u>=1&&r.length>u)&&(r.forEach((function(e){o.push({file:e,errors:[U]})})),r.splice(0)),k({acceptedFiles:r,fileRejections:o,type:"setFiles"}),d&&d(r,o,e),o.length>0&&g&&g(o,e),r.length>0&&b&&b(r,e)}})),k({type:"reset"})}),[c,n,a,i,u,o,d,b,g,O]),te=function(e){return r?null:e},ne=function(e){return y?null:te(e)},re=function(e){return h?null:te(e)},ce=function(e){O&&e.stopPropagation()},le=Object(f.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,o=e.onKeyDown,i=e.onFocus,a=e.onBlur,c=e.onClick,u=e.onDragEnter,s=e.onDragOver,l=e.onDragLeave,f=e.onDrop,p=ae(e,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return oe(oe(ie({onKeyDown:ne(V(o,I)),onFocus:ne(V(i,T)),onBlur:ne(V(a,L)),onClick:te(V(c,K)),onDragEnter:re(V(u,M)),onDragOver:re(V(s,q)),onDragLeave:re(V(l,Q)),onDrop:re(V(f,X))},n,D),r||y?{}:{tabIndex:0}),p)}}),[D,I,T,L,K,M,q,Q,X,y,h,r]),pe=Object(f.useCallback)((function(e){e.stopPropagation()}),[]),de=Object(f.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,o=e.onChange,i=e.onClick,a=ae(e,["refKey","onChange","onClick"]),u=ie({accept:n,multiple:c,type:"file",style:{display:"none"},onChange:te(V(o,X)),onClick:te(V(i,pe)),autoComplete:"off",tabIndex:-1},r,w);return oe(oe({},u),a)}}),[w,n,c,X,r]),be=C.length,ge=be>0&&$({files:C,accept:n,minSize:a,maxSize:i,multiple:c,maxFiles:u}),ve=be>0&&!ge;return oe(oe({},F),{},{isDragAccept:ge,isDragReject:ve,isFocused:A&&!r,getRootProps:le,getInputProps:de,rootRef:D,inputRef:w,open:te(z)})}function fe(e,t){switch(t.type){case"focus":return oe(oe({},e),{},{isFocused:!0});case"blur":return oe(oe({},e),{},{isFocused:!1});case"openDialog":return oe(oe({},e),{},{isFileDialogActive:!0});case"closeDialog":return oe(oe({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var n=t.isDragActive,r=t.draggedFiles;return oe(oe({},e),{},{draggedFiles:r,isDragActive:n});case"setFiles":return oe(oe({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return oe(oe({},e),{},{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]});default:return e}}var pe=n("R/WZ"),de=n("whQS"),be=Object(pe.a)((function(e){return{dropzone:{padding:e.spacing(6,6),background:"repeating-linear-gradient(-55deg,".concat(de.c,",").concat(de.c," 10px,").concat(de.g," 10px,").concat(de.g," 20px)"),borderRadius:6,cursor:"pointer"}}}));function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=function(e){var t=e.onDrop,n=be(),r=le({onDrop:t}),o=r.getRootProps,i=r.getInputProps,u=r.isDragActive;return Object(a.jsxs)("div",ve(ve({},o()),{},{className:n.dropzone,role:"button","aria-label":"Upload Images",children:[Object(a.jsx)("input",ve({},i())),u?Object(a.jsx)(c.a,{variant:"h4",children:"Drop the files here ..."}):Object(a.jsx)(c.a,{variant:"h4",children:"Drag 'n' drop some files here, or click to select files"})]}))},je=n("7dqq"),ye=n("90U+"),he=Object(pe.a)((function(e){return{uploadForm:{width:"100%"}}}));function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.issue,n=e.series,r=e.params,s=void 0===r?{series:null,issueNumber:null,category:null}:r,v=e.imagePaths,m=e.maxDimension,j=void 0===m?1500:m,y=he(),h=!!s.category,O=Object(f.useState)(!1),x=O[0],D=O[1],w=Object(f.useState)(null),P=w[0],S=w[1],F=Object(f.useState)(null),k=F[0],A=F[1],E=Object(f.useState)(0),C=E[0],z=E[1],R=Object(f.useState)([]),I=R[0],T=R[1],L=Object(f.useState)({}),K=L[0],N=L[1],B=Object.values(K),M=(null===t||void 0===t?void 0:t.comic)||(null===n||void 0===n?void 0:n.comic)||{imagePaths:v,fontMatter:null},U=M.frontMatter,_=M.imagePaths,W=M.coverPath,q=p.a.useRef(null),$=Object(f.useState)([].concat(Object(l.a)(_),Object(l.a)(W?[W]:[]))),G=$[0],H=$[1],J=Object(f.useCallback)((function(e){var t=e.reduce((function(e,t){return e[t.name]=t,e}),{});N((function(e){return xe(xe({},e),t)}))}),[]);function Q(e){return X.apply(this,arguments)}function X(){return(X=Object(u.a)(o.a.mark((function e(t){var n,r,i,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault,D(!0),i=new FormData,B.forEach((function(e){return i.append("images",e)})),i.append("maxDimension","".concat(j)),e.next=7,Object(ye.a)({method:"post",url:"/api/optimize-images",data:i,headers:{"content-type":"multipart/form-data"}});case 7:null!==(a=e.sent)&&void 0!==a&&a.error||null===a||void 0===a||null===(n=a.response)||void 0===n||!n.data?S("Something went wrong"):null!==(r=a.response.data.filePaths)&&void 0!==r&&r.length&&(z(a.response.data.bytesSaved),T((function(e){return[].concat(Object(l.a)(e),Object(l.a)(a.response.data.filePaths))})),S(null),N({})),D(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(){return(Z=Object(u.a)(o.a.mark((function e(){var n,r,i,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),i=h?"/static/panels/".concat(s.category):"/static/series/".concat(s.series),a=t?"".concat(i,"/issues/").concat(s.issueNumber,"/images.json"):"".concat(i,"/images.json"),e.next=5,Object(ye.a)({method:"post",url:"/api/upload-images",data:{paths:I,folder:s.issueNumber?"".concat(s.series,"/").concat(s.issueNumber):s.category||s.series,jsonPath:a}});case 5:null!==(c=e.sent)&&void 0!==c&&c.error||null===c||void 0===c||null===(n=c.response)||void 0===n||!n.data||(null===(r=c.response.data.filePaths)||void 0===r?void 0:r.length)!==I.length?A("Something went wrong. Refresh the page for up to date data."):(H((function(e){return[].concat(Object(l.a)(c.response.data.filePaths),Object(l.a)(e))})),A(null),T([])),D(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsx)(d.a,{children:Object(a.jsxs)(i.a,{container:!0,spacing:3,justify:"center",children:[Object(a.jsxs)(i.a,{item:!0,xs:12,children:[Object(a.jsx)(c.a,{variant:"h4",children:s.series}),Object(a.jsxs)(c.a,{variant:"h1",children:[s.category," ",s.issueNumber," ",null===U||void 0===U?void 0:U.title]})]}),Object(a.jsx)(i.a,{item:!0,xs:12,children:Object(a.jsx)(c.a,{variant:"h3",children:"Upload Images:"})}),Object(a.jsx)("form",{onSubmit:Q,ref:q,className:y.uploadForm,children:Object(a.jsx)("div",{children:Object(a.jsxs)(i.a,{item:!0,xs:12,container:!0,spacing:3,children:[Object(a.jsx)(i.a,{item:!0,xs:8,children:Object(a.jsx)(me,{onDrop:J})}),Object(a.jsx)(i.a,{item:!0,container:!0,xs:4,justify:"center",children:Object(a.jsx)(je.a,{size:"large",disabled:!B.length||x,loading:x,fullWidth:!0,onClick:Q,children:"Optimize"})}),P&&Object(a.jsx)(i.a,{item:!0,container:!0,xs:12,justify:"center",children:Object(a.jsx)(c.a,{color:"error",children:P})}),!!C&&Object(a.jsx)(i.a,{item:!0,container:!0,xs:12,justify:"center",children:Object(a.jsxs)(c.a,{children:["Saved ",C/1e6,"MB"]})})]})})}),Object(a.jsx)(i.a,{item:!0,xs:12,children:Object(a.jsx)(c.a,{variant:"h3",children:"Optimized Images:"})}),Object(a.jsx)(i.a,{item:!0,xs:8,children:!(null===I||void 0===I||!I.length)&&Object(a.jsx)(i.a,{item:!0,xs:12,container:!0,spacing:3,children:Object(a.jsx)(g.a,{children:I.map((function(e){return Object(a.jsx)(b.a,{src:e},e)}))})})}),Object(a.jsxs)(i.a,{item:!0,container:!0,xs:4,justify:"center",children:[Object(a.jsx)(je.a,{size:"large",disabled:!I.length||x,loading:x,fullWidth:!0,onClick:function(){return Z.apply(this,arguments)},children:"Upload"}),k&&Object(a.jsx)(i.a,{item:!0,container:!0,xs:12,justify:"center",children:Object(a.jsx)(c.a,{color:"error",children:k})})]}),Object(a.jsx)(i.a,{item:!0,xs:12,children:Object(a.jsx)(c.a,{variant:"h3",children:"Current Images:"})}),!(null===G||void 0===G||!G.length)&&Object(a.jsx)(i.a,{item:!0,xs:12,children:Object(a.jsx)(i.a,{item:!0,xs:12,container:!0,spacing:3,children:Object(a.jsx)(g.a,{children:G.map((function(e){return Object(a.jsx)(b.a,{src:e},e)}))})})})]})})}},X1Co:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}}}]);