import{t as e}from"./toConsumableArray-d2e8a5d7.js";import{d as r}from"./defineProperty-38df0e0b.js";var t=function(e){var r;return!(null===(r=e.nodes)||void 0===r||!r.length)},n=function e(r,t){return r.reduce((function(r,n){return r||(n.id===t?n:n.nodes?e(n.nodes,t):r)}),null)};function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var s=function e(r){return(r||[]).reduce((function(r,t){return r=r.concat(t),t.nodes&&(r=r.concat(e(t.nodes))),r}),[])},a=function r(n,o,s){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return(o||[]).reduce((function(o,d){var f;f=d.nodes?c(c({},d),{},{nodes:[]}):d;var l={treeXLevel:a,treeYLevel:u,parentNode:i||n,ancestors:i?[i].concat(e(i.ancestors)):[i||n]};return f=c(c({},f),l),o=o.concat(f),t(d)&&s.state.ids.includes(d.id)&&(o=o.concat(r(n,d.nodes,s,a+1,u,c(c({},d),l)))),o}),[])};export{s as a,a as b,n as f,t as h};
//# sourceMappingURL=fromTreeToList-dfd2fc61.js.map