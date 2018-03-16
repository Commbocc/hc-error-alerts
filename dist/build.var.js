var HcErrorAlerts=function(t){function e(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=3)}([function(t,e){t.exports=function(t,e,r,n,s,i){var o,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId=s);var l;if(i?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):n&&(l=n),l){var f=u.functional,d=f?u.render:u.beforeCreate;f?(u._injectStyles=l,u.render=function(t,e){return l.call(e),d(t,e)}):u.beforeCreate=d?[].concat(d,l):[l]}return{esModule:o,exports:a,options:u}}},function(t,e,r){"use strict";var n=r(4),s=r(6);e.a={components:{AlertComp:n.a},data:function(){return{errorLog:[]}},computed:{activeErrors:function(){return this.errorLog.filter(function(t){return t.active})}},methods:{addAlert:function(t,e){this.errorLog.push(new s.a(t,e))},prependAlert:function(t,e){this.errorLog.unshift(new s.a(t,e))},removeAlert:function(t){this.errorLog.find(function(e){return e===t}).active=!1},clearAlerts:function(){this.errorLog.map(function(t){return t.active=!1,t})}}}},function(t,e,r){"use strict";e.a={name:"alert",props:{alert:{required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss:function(){this.$emit("dismiss",this.alert)}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),s=r(7),i=r(0),o=i(n.a,s.a,!1,null,null,null);e.default=o.exports},function(t,e,r){"use strict";var n=r(2),s=r(5),i=r(0),o=i(n.a,s.a,!1,null,null,null);e.a=o.exports},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert alert-dismissible fade show",class:t.alert.alertClass,attrs:{role:"alert"}},[t._v("\n\n  "+t._s(t.alert.message)+"\n\n  "),t.dismissible?r("button",{staticClass:"close",attrs:{"aria-label":"Close"},on:{click:t.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e()])},s=[],i={render:n,staticRenderFns:s};e.a=i},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"alert-warning";n(this,t),this.id=Date.now(),this.message=e.message,this.active=!0,this.alertClass=r};e.a=s},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},t._l(t.activeErrors,function(e){return r("AlertComp",{tag:"div",attrs:{alert:e},on:{dismiss:function(r){t.removeAlert(e)}}})}))},s=[],i={render:n,staticRenderFns:s};e.a=i}]).default;