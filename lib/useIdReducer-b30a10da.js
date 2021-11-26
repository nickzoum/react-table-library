import{u as n,s as e,a as r}from"./useSyncControlledState-6116efef.js";import{t}from"./toConsumableArray-d2e8a5d7.js";import{d as o}from"./defineProperty-38df0e0b.js";import*as i from"react";import{f as a,a as u}from"./fromTreeToList-dfd2fc61.js";var d=function(n,e){return n.every((function(n){return e.includes(n)}))};function c(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function l(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var s=function(n,e){switch(e.type){case"ADD_BY_ID":return function(n,e){return l(l({},n),{},{id:null,ids:n.ids.concat(e.payload.id)})}(n,e);case"REMOVE_BY_ID":return function(n,e){return l(l({},n),{},{id:null,ids:n.ids.filter((function(n){return n!==e.payload.id}))})}(n,e);case"ADD_BY_ID_RECURSIVELY":return function(n,e){var r=e.payload.options.isCarryForward&&null!=n.id?t(new Set(e.payload.ids.concat(n.id))):n.ids.concat(e.payload.ids);return l(l({},n),{},{id:null,ids:r})}(n,e);case"REMOVE_BY_ID_RECURSIVELY":return function(n,e){return l(l({},n),{},{id:null,ids:n.ids.filter((function(n){return!e.payload.ids.includes(n)}))})}(n,e);case"ADD_BY_ID_EXCLUSIVELY":return function(n,e){return l(l({},n),{},{id:e.payload.id,ids:[]})}(n,e);case"REMOVE_BY_ID_EXCLUSIVELY":return function(n){return l(l({},n),{},{id:null,ids:[]})}(n);case"ADD_ALL":return function(n,e){return l(l({},n),{},{id:null,ids:t(new Set([].concat(t(n.ids),t(e.payload.ids))))})}(n,e);case"REMOVE_ALL":return function(n){return l(l({},n),{},{id:null,ids:[]})}(n);case"SET":return function(n,e){return l(l({},n),e.payload)}(n,e);default:throw new Error}},f=function(o,c,f,y){var p=n(s,c,[],[f],y),E=e(p,2),_=E[0],D=E[1],I=i.useCallback((function(n){return D({type:"ADD_BY_ID",payload:{id:n}})}),[D]),b=i.useCallback((function(n){return D({type:"REMOVE_BY_ID",payload:{id:n}})}),[D]),C=i.useCallback((function(n){return _.ids.includes(n)?b(n):I(n)}),[_,I,b]),O=i.useCallback((function(n,e){var r=l(l({},{isCarryForward:!1}),e);D({type:"ADD_BY_ID_RECURSIVELY",payload:{ids:n,options:r}})}),[D]),m=i.useCallback((function(n){D({type:"REMOVE_BY_ID_RECURSIVELY",payload:{ids:n}})}),[D]),v=i.useCallback((function(n,e){var r=l(l({},{isCarryForward:!1}),e),i=a(o.nodes,n),c=[i].concat(t(u(i.nodes))).map((function(n){return n.id}));d(c,_.ids)?m(c):O(c,r)}),[o,_,O,m]),R=i.useCallback((function(n){D({type:"ADD_BY_ID_EXCLUSIVELY",payload:{id:n}})}),[D]),B=i.useCallback((function(){D({type:"REMOVE_BY_ID_EXCLUSIVELY"})}),[D]),L=i.useCallback((function(n){n===_.id?B():R(n)}),[_,B,R]),A=i.useCallback((function(n){D({type:"ADD_ALL",payload:{ids:n}})}),[D]),Y=i.useCallback((function(){D({type:"REMOVE_ALL"})}),[D]),g=i.useCallback((function(){var n=u(o.nodes).map((function(n){return n.id}));d(n,_.ids)?Y():A(n)}),[o,_,A,Y]);r(c,_,(function(){return D({type:"SET",payload:c})}));var S=!_.ids.length,V=!!o.nodes.length&&d(o.nodes.map((function(n){return n.id})),_.ids),j=i.useMemo((function(){return{onAddById:I,onRemoveById:b,onToggleById:C,onAddByIdRecursively:O,onRemoveByIdRecursively:m,onToggleByIdRecursively:v,onAddByIdExclusively:R,onRemoveByIdExclusively:B,onToggleByIdExclusively:L,onAddAll:A,onRemoveAll:Y,onToggleAll:g}}),[A,I,O,Y,b,m,R,B,L,g,C,v]);return[l(l({},_),{},{none:S,all:V}),j]};export{f as u};
//# sourceMappingURL=useIdReducer-b30a10da.js.map