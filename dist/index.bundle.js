!function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t=window.webpackJsonp;window.webpackJsonp=function(n,r,u){for(var i,c,a=0,s=[];a<n.length;a++)c=n[a],o[c]&&s.push(o[c][0]),o[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);for(t&&t(n,r,u);s.length;)s.shift()()};var r={},o={19:0};n.e=function(e){function t(){c.onerror=c.onload=null,clearTimeout(a);var n=o[e];0!==n&&(n&&n[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var r=o[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var u=new Promise(function(n,t){r=o[e]=[n,t]});r[2]=u;var i=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.async=!0,c.timeout=12e4,n.nc&&c.setAttribute("nonce",n.nc),c.src=n.p+""+e+".chunk.js";var a=setTimeout(t,12e4);return c.onerror=c.onload=t,i.appendChild(c),u},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="dist/",n.oe=function(e){throw console.error(e),e},n(n.s=2)}([function(e,n){e.exports=function(e,n,t,r,o){var u,i=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(u=e,i=e.default);var a="function"==typeof i?i.options:i;n&&(a.render=n.render,a.staticRenderFns=n.staticRenderFns),r&&(a._scopeId=r);var s;if(o?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},a._ssrRegister=s):t&&(s=t),s){var f=a.functional,l=f?a.render:a.beforeCreate;f?a.render=function(e,n){return s.call(n),l(e,n)}:a.beforeCreate=l?[].concat(l,s):[s]}return{esModule:u,exports:i,options:a}}},function(e,n,t){"use strict";t.d(n,"a",function(){return f});var r=t(4);Vue.use(VueRouter);var o=function(e){return t.e(1).then(t.bind(null,7)).then(e)},u=function(e){return t.e(4).then(t.bind(null,8)).then(e)},i=function(e){return t.e(3).then(t.bind(null,9)).then(e)},c=function(e){return t.e(0).then(t.bind(null,10)).then(e)},a=function(e){return t.e(2).then(t.bind(null,11)).then(e)},s=[{path:"/",component:o},{path:"/articles",component:u},{path:"/artists",component:i},{path:"/gallery/:species",component:c},{path:"*",component:a}],f=new VueRouter({routes:s});new Vue({el:"#app",router:f,render:function(e){return e(r.a)}})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(3);t.n(r),t(1)},function(e,n){},function(e,n,t){"use strict";var r=t(5),o=t(6),u=t(0),i=u(r.a,o.a,null,null,null);n.a=i.exports},function(e,n,t){"use strict";n.a={data:function(){return{}}}},function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("router-view",{staticClass:"router-view"})],1)},o=[],u={render:r,staticRenderFns:o};n.a=u}]);