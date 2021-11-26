import e from"styled-components";import*as n from"react";import r from"classnames";import{d as t}from"./defineProperty-38df0e0b.js";import{t as o}from"./toConsumableArray-d2e8a5d7.js";function i(e){var n={exports:{}};return e(n,n.exports),n.exports
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,u=a?Symbol.for("react.portal"):60106,s=a?Symbol.for("react.fragment"):60107,f=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,d=a?Symbol.for("react.context"):60110,y=a?Symbol.for("react.async_mode"):60111,m=a?Symbol.for("react.concurrent_mode"):60111,v=a?Symbol.for("react.forward_ref"):60112,h=a?Symbol.for("react.suspense"):60113,b=a?Symbol.for("react.suspense_list"):60120,g=a?Symbol.for("react.memo"):60115,w=a?Symbol.for("react.lazy"):60116,O=a?Symbol.for("react.block"):60121,x=a?Symbol.for("react.fundamental"):60117,S=a?Symbol.for("react.responder"):60118,E=a?Symbol.for("react.scope"):60119;function j(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case c:switch(e=e.type){case y:case m:case s:case l:case f:case h:return e;default:switch(e=e&&e.$$typeof){case d:case v:case w:case g:case p:return e;default:return n}}case u:return n}}}function C(e){return j(e)===m}var _={AsyncMode:y,ConcurrentMode:m,ContextConsumer:d,ContextProvider:p,Element:c,ForwardRef:v,Fragment:s,Lazy:w,Memo:g,Portal:u,Profiler:l,StrictMode:f,Suspense:h,isAsyncMode:function(e){return C(e)||j(e)===y},isConcurrentMode:C,isContextConsumer:function(e){return j(e)===d},isContextProvider:function(e){return j(e)===p},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===c},isForwardRef:function(e){return j(e)===v},isFragment:function(e){return j(e)===s},isLazy:function(e){return j(e)===w},isMemo:function(e){return j(e)===g},isPortal:function(e){return j(e)===u},isProfiler:function(e){return j(e)===l},isStrictMode:function(e){return j(e)===f},isSuspense:function(e){return j(e)===h},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===s||e===m||e===l||e===f||e===h||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===w||e.$$typeof===g||e.$$typeof===p||e.$$typeof===d||e.$$typeof===v||e.$$typeof===x||e.$$typeof===S||e.$$typeof===E||e.$$typeof===O)},typeOf:j},R=i((function(e,n){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case r:var d=e.type;switch(d){case s:case f:case o:case a:case i:case p:return d;default:var v=d&&d.$$typeof;switch(v){case u:case l:case m:case y:case c:return v;default:return n}}case t:return n}}}var O=s,x=f,S=u,E=c,j=r,C=l,_=o,R=m,k=y,P=t,$=a,N=i,T=p,z=!1;function I(e){return w(e)===f}n.AsyncMode=O,n.ConcurrentMode=x,n.ContextConsumer=S,n.ContextProvider=E,n.Element=j,n.ForwardRef=C,n.Fragment=_,n.Lazy=R,n.Memo=k,n.Portal=P,n.Profiler=$,n.StrictMode=N,n.Suspense=T,n.isAsyncMode=function(e){return z||(z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),I(e)||w(e)===s},n.isConcurrentMode=I,n.isContextConsumer=function(e){return w(e)===u},n.isContextProvider=function(e){return w(e)===c},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},n.isForwardRef=function(e){return w(e)===l},n.isFragment=function(e){return w(e)===o},n.isLazy=function(e){return w(e)===m},n.isMemo=function(e){return w(e)===y},n.isPortal=function(e){return w(e)===t},n.isProfiler=function(e){return w(e)===a},n.isStrictMode=function(e){return w(e)===i},n.isSuspense=function(e){return w(e)===p},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===a||e===i||e===p||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===c||e.$$typeof===u||e.$$typeof===l||e.$$typeof===h||e.$$typeof===b||e.$$typeof===g||e.$$typeof===v)},n.typeOf=w}()})),k=i((function(e){"production"===process.env.NODE_ENV?e.exports=_:e.exports=R})),P=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;function T(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var z=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var r,t,o=T(e),i=1;i<arguments.length;i++){for(var a in r=Object(arguments[i]))$.call(r,a)&&(o[a]=r[a]);if(P){t=P(r);for(var c=0;c<t.length;c++)N.call(r,t[c])&&(o[t[c]]=r[t[c]])}}return o},I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",A=function(){};if("production"!==process.env.NODE_ENV){var D=I,L={},M=Function.call.bind(Object.prototype.hasOwnProperty);A=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}}function V(e,n,r,t,o){if("production"!==process.env.NODE_ENV)for(var i in e)if(M(e,i)){var a;try{if("function"!=typeof e[i]){var c=Error((t||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.");throw c.name="Invariant Violation",c}a=e[i](n,i,t,r,null,D)}catch(e){a=e}if(!a||a instanceof Error||A((t||"React class")+": type specification of "+r+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in L)){L[a.message]=!0;var u=o?o():"";A("Failed "+r+" type: "+a.message+(null!=u?u:""))}}}V.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(L={})};var W=V,q=Function.call.bind(Object.prototype.hasOwnProperty),F=function(){};function B(){return null}"production"!==process.env.NODE_ENV&&(F=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}});var H=function(e,n){var r="function"==typeof Symbol&&Symbol.iterator;var t="<<anonymous>>",o={array:u("array"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:c(B),arrayOf:function(e){return c((function(n,r,t,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+t+"` has invalid PropType notation inside arrayOf.");var c=n[r];if(!Array.isArray(c))return new a("Invalid "+o+" `"+i+"` of type `"+f(c)+"` supplied to `"+t+"`, expected an array.");for(var u=0;u<c.length;u++){var s=e(c,u,t,o,i+"["+u+"]",I);if(s instanceof Error)return s}return null}))},element:c((function(n,r,t,o,i){var c=n[r];return e(c)?null:new a("Invalid "+o+" `"+i+"` of type `"+f(c)+"` supplied to `"+t+"`, expected a single ReactElement.")})),elementType:c((function(e,n,r,t,o){var i=e[n];return k.isValidElementType(i)?null:new a("Invalid "+t+" `"+o+"` of type `"+f(i)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return c((function(n,r,o,i,c){if(!(n[r]instanceof e)){var u=e.name||t;return new a("Invalid "+i+" `"+c+"` of type `"+(((s=n[r]).constructor&&s.constructor.name?s.constructor.name:t)+"` supplied to `")+o+"`, expected instance of `"+u+"`.")}var s;return null}))},node:c((function(e,n,r,t,o){return s(e[n])?null:new a("Invalid "+t+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return c((function(n,r,t,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+t+"` has invalid PropType notation inside objectOf.");var c=n[r],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+t+"`, expected an object.");for(var s in c)if(q(c,s)){var l=e(c,s,t,o,i+"."+s,I);if(l instanceof Error)return l}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&F(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),B;function n(n,r,t,o,c){for(var u=n[r],s=0;s<e.length;s++)if(i(u,e[s]))return null;var f=JSON.stringify(e,(function(e,n){return"symbol"===l(n)?String(n):n}));return new a("Invalid "+o+" `"+c+"` of value `"+String(u)+"` supplied to `"+t+"`, expected one of "+f+".")}return c(n)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&F("Invalid argument supplied to oneOfType, expected an instance of array."),B;for(var n=0;n<e.length;n++){var r=e[n];if("function"!=typeof r)return F("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(r)+" at index "+n+"."),B}return c((function(n,r,t,o,i){for(var c=0;c<e.length;c++)if(null==(0,e[c])(n,r,t,o,i,I))return null;return new a("Invalid "+o+" `"+i+"` supplied to `"+t+"`.")}))},shape:function(e){return c((function(n,r,t,o,i){var c=n[r],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+t+"`, expected `object`.");for(var s in e){var l=e[s];if(l){var p=l(c,s,t,o,i+"."+s,I);if(p)return p}}return null}))},exact:function(e){return c((function(n,r,t,o,i){var c=n[r],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+t+"`, expected `object`.");var s=z({},n[r],e);for(var l in s){var p=e[l];if(!p)return new a("Invalid "+o+" `"+i+"` key `"+l+"` supplied to `"+t+"`.\nBad object: "+JSON.stringify(n[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=p(c,l,t,o,i+"."+l,I);if(d)return d}return null}))}};function i(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}function a(e){this.message=e,this.stack=""}function c(e){if("production"!==process.env.NODE_ENV)var r={},o=0;function i(i,c,u,s,f,l,p){if(s=s||t,l=l||u,p!==I){if(n){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var y=s+":"+u;!r[y]&&o<3&&(F("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[y]=!0,o++)}}return null==c[u]?i?null===c[u]?new a("The "+f+" `"+l+"` is marked as required in `"+s+"`, but its value is `null`."):new a("The "+f+" `"+l+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(c,u,s,f,l)}var c=i.bind(null,!1);return c.isRequired=i.bind(null,!0),c}function u(e){return c((function(n,r,t,o,i,c){var u=n[r];return f(u)!==e?new a("Invalid "+o+" `"+i+"` of type `"+l(u)+"` supplied to `"+t+"`, expected `"+e+"`."):null}))}function s(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(s);if(null===n||e(n))return!0;var t=function(e){var n=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof n)return n}(n);if(!t)return!1;var o,i=t.call(n);if(t!==n.entries){for(;!(o=i.next()).done;)if(!s(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!s(a[1]))return!1}return!0;default:return!1}}function f(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,n){return"symbol"===e||!!n&&("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}(n,e)?"symbol":n}function l(e){if(null==e)return""+e;var n=f(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function p(e){var n=l(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}return a.prototype=Error.prototype,o.checkPropTypes=W,o.resetWarningCache=W.resetWarningCache,o.PropTypes=o,o};function U(){}function Y(){}Y.resetWarningCache=U;var J=i((function(e){if("production"!==process.env.NODE_ENV){var n=k;e.exports=H(n.isElement,!0)}else e.exports=function(){function e(e,n,r,t,o,i){if(i!==I){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Y,resetWarningCache:U};return r.PropTypes=r,r}()})),X=n.createContext(null),G=n.createContext({}),K=function(e){var r=e.tableRef,t=e.layout,o=e.children,i=n.useRef([]),a=n.useMemo((function(){return{layout:t,resizedLayout:i,tableRef:r}}),[t,i,r]);return n.createElement(G.Provider,{value:a},o)};K.propTypes={tableRef:J.oneOfType([J.func,J.shape({current:J.instanceOf(Element)})]),layout:J.shape({custom:J.bool}),children:J.oneOfType([J.arrayOf(J.node),J.node,J.func])};var Q=i((function(e){function n(){return e.exports=n=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},n.apply(this,arguments)}e.exports=n})),Z="#141414",ee="#757575",ne="#9e9e9e",re="#ffffff",te="#e0e0e0",oe="#a0a8ae";var ie=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o};var ae=function(e,n){if(null==e)return{};var r,t,o=ie(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},ce="\n  display: flex;\n  align-items: center;\n\n  padding-top: 4px;\n  padding-bottom: 4px;\n\n\n  &:not(.shrink) > div {\n    width: 100%;\n\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  &:first-child > div {\n    padding-left: ".concat(6,"px;\n  }\n\n  & > div {\n    padding-right: ").concat(6,"px;\n    padding-left: 20px;\n  }\n\n  &:last-child > div {\n    padding-right: ").concat(6,"px;\n  }\n\n  border-right: 1px solid ").concat("#a0a8ae",";\n\n  &:last-child {\n    border-right: 0px solid transparent;\n  }\n\n  &.shrink > div {\n    padding-right: ").concat(6,"px;\n    padding-left: ").concat(6,"px;\n  }\n\n  &.hide {\n    display: none;\n  }\n"),ue=e("div").withConfig({displayName:"Cell___StyledDiv",componentId:"sc-1y7ghlj-0"})(["",""],(function(){return"\n  ".concat(ce,"\n\n  ").concat((function(){}),"\n  background-color: inherit;\n")})),se=n.forwardRef((function(e,r){return n.createElement(ue,Q({},e,{ref:r}))})),fe="\n  ".concat(ce,"\n\n  position: relative;\n\n  svg,\n  path {\n    fill: currentColor;\n  }\n"),le=e("div").withConfig({displayName:"Cell___StyledDiv2",componentId:"sc-1y7ghlj-1"})(["",""],fe),pe=function(e){var n=e.resizerWidth||3,r=e.resizerHighlight||"transparent";return"\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    right: ".concat(-n/2,"px;\n    bottom: 0;\n    cursor: col-resize;\n    width: ").concat(n,"px;\n\n    background-color: transparent;\n    transition: background-color 0.1s linear;\n\n    &:hover {\n      background-color: ").concat(r,";\n    }\n  ")},de=function(e){return Array.from(e.current.querySelector(".tr-header").querySelectorAll(".th"))},ye=function(e,n){var r=de(e),t=r.length;r.forEach((function(e,r){return n(e,r,t)}))},me=function(e,n){return Array.from(e.current.querySelectorAll(".tr-body")).forEach((function(e){var r=Array.from(e.querySelectorAll(".td")),t=r.length;r.forEach((function(e,r){return n(e,r,t)}))}))},ve=function(e,r){var t=n.useContext(G),o=t.resizedLayout,i=t.tableRef,a=t.layout,c=n.useRef(),u=n.useRef(),s=n.useRef(!1),f=n.useCallback((function(n){n.preventDefault(),s.current=!0,u.current=e.current.offsetWidth-n.pageX}),[e]),l=n.useCallback((function(e){if(s.current){e.preventDefault();var n=u.current+e.pageX;o.current=function(e,n,r,t){var o=de(n).map((function(e,n){return{index:n,minResizeWidth:+e.getAttribute("data-resize-min-width"),width:e.getBoundingClientRect().width}})),i=o.reduce((function(n,r,t){return n||(t>e&&0!==r.width?r:n)}),null),a=o[e].minResizeWidth,c=t>a?t:a,u=c-o[e].width,s=o.map((function(n,r){if(i&&e===r)return i.width-u>a?c:n.width;if((null==i?void 0:i.index)===r){var t=n.width-u;return t>a?t:n.width}return n.width})),f=function(e,n,r){e.style.width="".concat(s[n],"px")};return ye(n,f),me(n,f),s}(r,i,0,n)}}),[r,a,o,i]),p=n.useCallback((function(){s.current=!1}),[]);return n.useEffect((function(){var e=c.current;return e&&(e.addEventListener("mousedown",f),document.addEventListener("mousemove",l),document.addEventListener("mouseup",p)),function(){e&&(e.removeEventListener("mousedown",f),document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",p))}}),[f,l,p]),{resizeRef:c}};function he(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function be(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?he(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var ge=function(e,n,r,t,i){var a=de(n),c=a.map((function(e,n){var r;return{index:n,isResize:e.classList.contains("resize")||(null===(r=a[n-1])||void 0===r?void 0:r.classList.contains("resize")),minResizeWidth:+e.getAttribute("data-resize-min-width"),width:e.getBoundingClientRect().width}})),u=i?function(e,n){var r=0,t=1,i=0;return[].concat(o(n.slice(e,n.length)),o(n.slice(0,e).reverse())).map((function(n){return 1===t&&n.index===e?(t=0,i=n.width,be(be({},n),{},{width:0})):n})).map((function(e){var n=0!==e.width,t=e.isResize;return 0===r&&n&&t&&i?(r=1,be(be({},e),{},{width:e.width+i})):e})).sort((function(e,n){return e.index-n.index})).map((function(e){return e.width}))}(e,c):function(e,n,r){var t=n.reduce((function(e,n){return 0===n.width?e:n.isResize?e+n.width-n.minResizeWidth:e}),0),o=t>r?r:t;return n.sort((function(e,n){return n.width-e.width})).map((function(n){return n.index===e?be(be({},n),{},{width:o}):n})).map((function(e){var n=e.width-e.minResizeWidth,r=e.isResize;if(0!==o&&n>0&&r){var t=o>n?n:o;return o-=t,be(be({},e),{},{width:e.width-t})}return e})).sort((function(e,n){return e.index-n.index})).map((function(e){return e.width}))}(e,c,t.current[e]);i?t.current[e]=c[e].width:delete t.current[e];var s=function(e,n){e.style.width="".concat(u[n],"px")};return ye(n,s),me(n,s),u},we=function(e,r){var t=n.useRef();n.useLayoutEffect((function(){t.current!==r&&(r?e.current.classList.add("hide"):e.current.classList.remove("hide"),t.current=r)}),[e,r])},Oe=e(n.forwardRef((function(e,r){return n.createElement(le,Q({},e,{ref:r}))}))).withConfig({displayName:"HeaderCell___StyledHeaderCellContainer",componentId:"r01kk3-0"})([""," ",""],(function(e){return e._css}),(function(e){return e._css2})),xe=e("span").withConfig({displayName:"HeaderCell___StyledSpan",componentId:"r01kk3-1"})(["",""],(function(e){return e._css3})),Se=function(e){var t=e.index,o=e.className,i=e.hide,a=e.shrink,c=e.resize,u=e.children,s=ae(e,["index","className","hide","shrink","resize","children"]),f=n.useContext(X),l=n.useRef();!function(e,r){var t=n.useContext(G),o=t.resizedLayout,i=t.tableRef,a=t.layout,c=n.useRef(!1),u=n.useRef(),s=n.useRef({});n.useLayoutEffect((function(){u.current!==r&&(c.current&&(o.current=ge(e,i,0,s,r)),c.current=!0,u.current=r)}),[e,r,o,i,a])}(t,i),we(l,i);var p=ve(l,t).resizeRef;return n.createElement(Oe,Q({},s,{role:"columnheader","data-resize-min-width":(null==c?void 0:c.minWidth)||75,className:r("th",o,{shrink:a,resize:c}),ref:l,_css:null==f?void 0:f.BaseCell,_css2:null==f?void 0:f.HeaderCell}),n.createElement("div",null,u),c&&n.createElement(xe,{ref:p,_css3:pe(c)}))};Se.propTypes={index:J.number,className:J.string,hide:J.bool,shrink:J.bool,resize:J.oneOfType([J.bool,J.shape({minWidth:J.number})]),children:J.oneOfType([J.arrayOf(J.node),J.node,J.func])};var Ee=e(se).withConfig({displayName:"Cell___StyledCellContainer",componentId:"sc-1n1qq5f-0"})([""," ",""],(function(e){return e._css}),(function(e){return e._css2})),je=function(e){var t=e.className,o=e.hide,i=e.shrink,a=e.onClick,c=e.children,u=ae(e,["className","hide","shrink","onClick","children"]),s=n.useContext(X),f=n.useRef();return we(f,o),n.createElement(Ee,Q({},u,{role:"gridcell",className:r("td",t,{shrink:i}),onClick:a,ref:f,_css:null==s?void 0:s.BaseCell,_css2:null==s?void 0:s.Cell}),n.createElement("div",null,c))};je.propTypes={className:J.string,hide:J.bool,shrink:J.bool,onClick:J.func,children:J.oneOfType([J.arrayOf(J.node),J.node,J.func])};export{re as B,je as C,ee as F,Se as H,K as R,X as T,Q as _,Z as a,ne as b,oe as c,G as d,te as e,ae as o,J as p};
//# sourceMappingURL=Cell-9d1ebdcf.js.map