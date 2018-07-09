webpackJsonp([0],[,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(87),a=n(96),s=n(0),o=s(r.a,a.a,null,null,null);e.default=o.exports},,function(t,e,n){"use strict";function r(t){return"[object Array]"===P.call(t)}function a(t){return"[object ArrayBuffer]"===P.call(t)}function s(t){return"undefined"!=typeof FormData&&t instanceof FormData}function o(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function i(t){return"string"==typeof t}function u(t){return"number"==typeof t}function c(t){return void 0===t}function l(t){return null!==t&&"object"==typeof t}function f(t){return"[object Date]"===P.call(t)}function p(t){return"[object File]"===P.call(t)}function d(t){return"[object Blob]"===P.call(t)}function h(t){return"[object Function]"===P.call(t)}function g(t){return l(t)&&h(t.pipe)}function v(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function m(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function b(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||r(t)||(t=[t]),r(t))for(var n=0,a=t.length;n<a;n++)e.call(null,t[n],n,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function y(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=y(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)b(arguments[n],t);return e}function _(t,e,n){return b(e,function(e,r){t[r]=n&&"function"==typeof e?x(e,n):e}),t}var x=n(14),C=n(25),P=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:a,isBuffer:C,isFormData:s,isArrayBufferView:o,isString:i,isNumber:u,isObject:l,isUndefined:c,isDate:f,isFile:p,isBlob:d,isFunction:h,isStream:g,isURLSearchParams:v,isStandardBrowserEnv:w,forEach:b,merge:y,extend:_,trim:m}},function(t,e,n){"use strict";(function(e){function r(t,e){!a.isUndefined(t)&&a.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a=n(12),s=n(28),o={"Content-Type":"application/x-www-form-urlencoded"},i={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(15):void 0!==e&&(t=n(15)),t}(),transformRequest:[function(t,e){return s(e,"Content-Type"),a.isFormData(t)||a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)?t:a.isArrayBufferView(t)?t.buffer:a.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):a.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};i.headers={common:{Accept:"application/json, text/plain, */*"}},a.forEach(["delete","get","head"],function(t){i.headers[t]={}}),a.forEach(["post","put","patch"],function(t){i.headers[t]=a.merge(o)}),t.exports=i}).call(e,n(27))},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e,n){"use strict";var r=n(12),a=n(29),s=n(31),o=n(32),i=n(33),u=n(16),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(34);t.exports=function(t){return new Promise(function(e,l){var f=t.data,p=t.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",g=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||i(t.url)||(d=new window.XDomainRequest,h="onload",g=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var v=t.auth.username||"",m=t.auth.password||"";p.Authorization="Basic "+c(v+":"+m)}if(d.open(t.method.toUpperCase(),s(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||g)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?o(d.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?d.response:d.responseText,s={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};a(e,l,s),d=null}},d.onerror=function(){l(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){l(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var w=n(35),b=(t.withCredentials||i(t.url))&&t.xsrfCookieName?w.read(t.xsrfCookieName):void 0;b&&(p[t.xsrfHeaderName]=b)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),l(t),d=null)}),void 0===f&&(f=null),d.send(f)})}},function(t,e,n){"use strict";var r=n(30);t.exports=function(t,e,n,a,s){var o=new Error(t);return r(o,e,n,a,s)}},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},,,,function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(23),a=n.n(r),s=function(t){return a()({method:"get",url:t}).catch(function(t){t.response?console.log(t.response.status):t.request?console.log(t.request):console.log("Error",t.message),console.log(t.config)})}},function(t,e,n){t.exports=n(24)},function(t,e,n){"use strict";function r(t){var e=new o(t),n=s(o.prototype.request,e);return a.extend(n,o.prototype,e),a.extend(n,e),n}var a=n(12),s=n(14),o=n(26),i=n(13),u=r(i);u.Axios=o,u.create=function(t){return r(a.merge(i,t))},u.Cancel=n(18),u.CancelToken=n(41),u.isCancel=n(17),u.all=function(t){return Promise.all(t)},u.spread=n(42),t.exports=u,t.exports.default=u},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new o,response:new o}}var a=n(13),s=n(12),o=n(36),i=n(37),u=n(39),c=n(40);r.prototype.request=function(t){"string"==typeof t&&(t=s.merge({url:arguments[0]},arguments[1])),t=s.merge(a,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase(),t.baseURL&&!u(t.url)&&(t.url=c(t.baseURL,t.url));var e=[i,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},s.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(s.merge(n||{},{method:t,url:e}))}}),s.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(s.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function s(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function o(){g&&d&&(g=!1,d.length?h=d.concat(h):v=-1,h.length&&i())}function i(){if(!g){var t=a(o);g=!0;for(var e=h.length;e;){for(d=h,h=[];++v<e;)d&&d[v].run();v=-1,e=h.length}d=null,g=!1,s(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var l,f,p=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var d,h=[],g=!1,v=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new u(t,e)),1!==h.length||g||a(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e,n){"use strict";var r=n(12);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(16);t.exports=function(t,e,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},function(t,e,n){"use strict";t.exports=function(t,e,n,r,a){return t.config=e,n&&(t.code=n),t.request=r,t.response=a,t}},function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var a=n(12);t.exports=function(t,e,n){if(!e)return t;var s;if(n)s=n(e);else if(a.isURLSearchParams(e))s=e.toString();else{var o=[];a.forEach(e,function(t,e){null!==t&&void 0!==t&&(a.isArray(t)&&(e+="[]"),a.isArray(t)||(t=[t]),a.forEach(t,function(t){a.isDate(t)?t=t.toISOString():a.isObject(t)&&(t=JSON.stringify(t)),o.push(r(e)+"="+r(t))}))}),s=o.join("&")}return s&&(t+=(-1===t.indexOf("?")?"?":"&")+s),t}},function(t,e,n){"use strict";var r=n(12);t.exports=function(t){var e,n,a,s={};return t?(r.forEach(t.split("\n"),function(t){a=t.indexOf(":"),e=r.trim(t.substr(0,a)).toLowerCase(),n=r.trim(t.substr(a+1)),e&&(s[e]=s[e]?s[e]+", "+n:n)}),s):s}},function(t,e,n){"use strict";var r=n(12);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(a.setAttribute("href",e),e=a.href),a.setAttribute("href",e),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");return e=t(window.location.href),function(n){var a=r.isString(n)?t(n):n;return a.protocol===e.protocol&&a.host===e.host}}():function(){return function(){return!0}}()},function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function a(t){for(var e,n,a=String(t),o="",i=0,u=s;a.charAt(0|i)||(u="=",i%1);o+=u.charAt(63&e>>8-i%1*8)){if((n=a.charCodeAt(i+=.75))>255)throw new r;e=e<<8|n}return o}var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=a},function(t,e,n){"use strict";var r=n(12);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,a,s,o){var i=[];i.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(a)&&i.push("path="+a),r.isString(s)&&i.push("domain="+s),!0===o&&i.push("secure"),document.cookie=i.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,n){"use strict";function r(){this.handlers=[]}var a=n(12);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){a.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var a=n(12),s=n(38),o=n(17),i=n(13);t.exports=function(t){return r(t),t.headers=t.headers||{},t.data=s(t.data,t.headers,t.transformRequest),t.headers=a.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),a.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||i.adapter)(t).then(function(e){return r(t),e.data=s(e.data,e.headers,t.transformResponse),e},function(e){return o(e)||(r(t),e&&e.response&&(e.response.data=s(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";var r=n(12);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new a(t),e(n.reason))})}var a=n(18);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=n(88),a=n(89),s=n(1),o=n(22),i=n(90),u=n(91),c=n(92),l=function(){return n.e(6).then(n.bind(null,19))},f=function(){return n.e(5).then(n.bind(null,20))},p=function(){return n.e(12).then(n.bind(null,93))},d=function(){return n.e(7).then(n.bind(null,21))};e.a={data:function(){return{currentCategory:null,allItems:"",currentItems:"",itemList:"",pg:"",perPage:12,perPageItems:[4,8,12],totalPages:"",currentPage:"",temp:"",buttonSet:"",currentIndex:0,modalVisible:!1,vcModal1_animateEntry:!1,carouselIndex:3}},components:{vcMenubar:l,vcFooter:d,vcStage:f,vcGalleryLeftNav1:p},mounted:function(){this.checkCategory()},watch:{$route:function(){this.checkCategory()}},methods:{checkCategory:function(){var t=this.$route.params.species.toLowerCase();Object(a.a)(t,r.a)?(this.currentCategory=t,this.loadItems(this.currentCategory)):(console.log("404/revert to gallery/defaultItem"),s.a.push({path:"/gallery/chokkan"}))},loadItems:function(t){var e=this,n="./src/js/ajax/"+t+".json";Object(o.a)(n).then(function(t){e.currentItems=t.data[e.currentCategory]}).then(function(){e.activatePager()})},activatePager:function(){this.pg=null,this.pg=new i.a({perPage:this.perPage,data:this.currentItems}),this.totalPages=this.pg.getTotalPages(),this.setPageBtns(),this.showItems(1)},showItems:function(t){this.itemList=this.pg.page(t),this.currentPage=this.pg.currentPage,this.changePageBtns()},changePerPage:function(t){this.perPage=t,this.activatePager()},flip:function(t){"next"===t?this.showItems(this.pg.next()):this.showItems(this.pg.prev())},flipModalIndex:function(t){var e=this.currentIndex,n=this.currentItems;"next"===t?(e+=1,e%=n.length,this.currentIndex=e):(0===e&&(e=n.length),e-=1,this.currentIndex=e)},setPageBtns:function(){this.temp=[];for(var t=0,e=this.pg.getTotalPages();t<e;t++)this.temp.push(Object(u.a)(t,e))},changePageBtns:function(){this.buttonSet=this.temp[this.pg.currentPage-1]},pageJump:function(t){this.showItems(Number(t))},setCurrentIndex:function(t){this.currentIndex=Object(c.a)("id",t,this.currentItems),this.toggleModal(!0)},toggleModal:function(t){this.modalVisible=t},closeMainModal:function(t){"bs4modal_bg"===t.target.id&&this.toggleModal(!1)}}}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=["chokkan","fukinagashi","hokidachi","kabudachi","moyogi","sokan","yose-ue","han-kengai"]},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t,e){return e.indexOf(t)>-1}},function(t,e,n){"use strict";function r(t){this.data=t.data,this.perPage=t.perPage,this.currentPage=1}e.a=r,r.prototype={getTotalPages:function(){return Math.ceil(this.data.length/this.perPage)},getCurrentOffset:function(){return(this.currentPage-1)*this.perPage},page:function(t){if(this.isValidPage(t)){this.currentPage=t;var e=this.getCurrentOffset(),n=e+Number(this.perPage);return this.data.slice(e,n)}return this.currentPage=1,this.data.slice(0,this.perPage)},hasNext:function(){return this.currentPage<this.getTotalPages()},hasPrev:function(){return 1!==this.currentPage},prev:function(){return this.hasPrev()?this.currentPage=this.currentPage-1:this.currentPage=this.getTotalPages(),this.currentPage},next:function(){return this.hasNext()?this.currentPage++:this.currentPage=1,this.currentPage},isValidPage:function(t){return t>0&&t<=this.getTotalPages()}}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t,e){var n,r=[],a=[];if(r.push(1),e<=1)return r;for(var s=t-2;s<=t+2;s++)s<e&&s>1&&r.push(s);r.push(e);var o=!0,i=!1,u=void 0;try{for(var c,l=r[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=c.value;n&&(f-n==2?a.push(n+1):f-n!=1&&a.push("...")),a.push(f),n=f}}catch(t){i=!0,u=t}finally{try{!o&&l.return&&l.return()}finally{if(i)throw u}}return a}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t,e,n){for(var r=0;r<n.length;r++)if(n[r][t]==e)return r}},,,,function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("nav",[n("vcMenubar")],1),t._v(" "),n("div",{staticClass:"row stage"},[n("vcStage",{attrs:{"pr-carousel-index":t.carouselIndex}})],1),t._v(" "),n("main",{staticClass:"row"},[t.currentItems?n("div",{class:{"bs4modal vcmodal_hide":!t.modalVisible,"bs4modal vcmodal_show":t.modalVisible},attrs:{id:"bs4modal_bg","data-backdrop":"static",tabindex:"-1",role:"dialog","aria-labelledby":"bs4modal_title","aria-hidden":"true"},on:{click:function(e){t.closeMainModal(e)}}},[n("div",{staticClass:"bs4modal-dialog bs4modal-md",attrs:{role:"document"}},[n("div",{class:{"bs4modal-content":!t.vcModal1_animateEntry,"bs4modal-content animated bounceIn":t.vcModal1_animateEntry}},[n("div",{staticClass:"bs4modal-header"},[n("h2",{staticClass:"bs4modal-title"},[t._v("\r\n            "+t._s(t.currentItems[t.currentIndex].id)+"\r\n            ")]),t._v(" "),n("button",{staticClass:"btn btn1-01",attrs:{type:"button","data-dismiss":"bs4modal","aria-label":"Close"},on:{click:function(e){t.toggleModal(!1)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"bs4modal-body"},[n("img",{attrs:{src:"src/img/categories/"+t.currentCategory+"/"+t.currentItems[t.currentIndex].img+".jpg",alt:t.currentItems[t.currentIndex].description,title:t.currentItems[t.currentIndex].description}})]),t._v(" "),n("div",{staticClass:"bs4modal-footer"},[n("button",{staticClass:"btn btn1-02",attrs:{type:"button","data-dismiss":"bs4modal"},on:{click:function(e){t.flipModalIndex("prev")}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}})]),t._v("\r\n            Prev")]),t._v(" "),n("button",{staticClass:"btn btn1-02",attrs:{type:"button"},on:{click:function(e){t.flipModalIndex("next")}}},[t._v("\r\n            Next\r\n            "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}})])])])])])]):t._e(),t._v(" "),n("div",{staticClass:"col-sm-12 gallery panel_container"},[n("div",{staticClass:"row"},[n("span",{staticClass:"breadcrumb"},[n("a",{attrs:{href:"#/"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}})])]),t._v(" "),n("a",{attrs:{href:"#/"}},[t._v("Home")]),t._v("\r\n          > Gallery\r\n        ")])]),t._v(" "),n("div",{staticClass:"panel"},[t._m(0),t._v(" "),n("div",{staticClass:"panel_body"},[n("div",{staticClass:"row bonsai_gallery"},[n("nav",{staticClass:"col-sm-3"},[n("vcGalleryLeftNav1")],1),t._v(" "),n("div",{staticClass:"row col-sm-9 gallery"},[n("div",{staticClass:"jspager1_holder"},[n("nav",{staticClass:"jspager1"},[n("aside",{staticClass:"jspager1_totalpagesholder"},[n("label",{attrs:{for:"jspager1_select"}},[t._v("Page:")]),t._v(" "),n("p",{attrs:{id:"jspager1_currentpage"}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentPage,expression:"currentPage"}],staticClass:"jspager1_select",attrs:{id:"jspager1_select",name:"jspager1_select",tabindex:"0"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentPage=e.target.multiple?n:n[0]},function(e){t.pageJump(e.target.value)}]}},t._l(t.totalPages,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e))])})),t._v(" "),n("p",{attrs:{id:"jspager1_totalpages"}},[t._v("of "+t._s(t.totalPages))])]),t._v(" "),n("aside",{staticClass:"jspager1_prevnextholder"},[n("button",{staticClass:"btn btn_first",attrs:{id:"jspager1_first",tabindex:"0"},on:{click:function(e){t.showItems(1)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}})]),t._v(" "),n("span",[t._v("First")])]),t._v(" "),n("button",{staticClass:"btn btn_prev",attrs:{id:"jspager1_prev",tabindex:"0"},on:{click:function(e){t.flip()}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}})]),t._v(" "),n("span",[t._v("Prev")])]),t._v(" "),n("button",{staticClass:"btn btn_next",attrs:{id:"jspager1_next",tabindex:"0"},on:{click:function(e){t.flip("next")}}},[n("span",[t._v("Next")]),t._v(" "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}})])]),t._v(" "),n("button",{staticClass:"btn btn_last",attrs:{id:"jspager1_last",tabindex:"0"},on:{click:function(e){t.showItems(t.totalPages)}}},[n("span",[t._v("Last")]),t._v(" "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}})])])]),t._v(" "),n("aside",{staticClass:"jspager1_pagebtnholder",attrs:{id:"jspager1_pagebtnholder","aria-atomic":"true","aria-live":"polite","aria-relevant":"additions"}},[t._l(t.buttonSet,function(e,r){return[e===t.currentPage?n("a",{staticClass:"jspager1_pagebtn jspager1_pagebtn--active",attrs:{tabindex:"0","aria-posinset":t.currentPage,"aria-setsize":t.buttonSet.length,"aria-selected":"true"},on:{click:function(n){t.showItems(e)}}},[t._v(t._s(e))]):n("a",{staticClass:"jspager1_pagebtn",attrs:{tabindex:"0","aria-posinset":r+1},on:{click:function(n){t.showItems(e)}}},[t._v("\r\n                      "+t._s(e)+"\r\n                    ")])]})],2),t._v(" "),n("aside",{staticClass:"jspager1_jumptopageholder"},[n("label",{attrs:{for:"jspager1_jump"}},[t._v("jump to page: ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.toPage,expression:"toPage"}],staticClass:"jspager1_jump",attrs:{type:"tel",name:"jspager1_jump",id:"jspager1_jump",placeholder:"",tabindex:"0"},domProps:{value:t.toPage,value:t.toPage},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.pageJump(t.toPage)},input:function(e){e.target.composing||(t.toPage=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn",attrs:{id:"jspager1_jumpbtn",tabindex:"0"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.pageJump(t.toPage)},click:function(e){t.pageJump(t.toPage)}}},[t._v("Go")])]),t._v(" "),n("aside",{staticClass:"jspager1_perpageholder"},[n("label",{attrs:{for:"jspager1_perpage"}},[t._v("perPage: ")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.perPage,expression:"perPage"}],staticClass:"jspager1_perpage",attrs:{id:"jspager1_perpage",name:"jspager1_perpage",tabindex:"0"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.perPage=e.target.multiple?n:n[0]},function(e){t.changePerPage(e.target.value)}]}},t._l(t.perPageItems,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e))])}))])])]),t._v(" "),n("div",{staticClass:"row col-sm-12"},[n("div",{staticClass:"galleryContainer"},t._l(t.itemList,function(e,r){return n("ul",{staticClass:"col-xs-12 col-sm-4 col-lg-3 gridder"},[n("li",{staticClass:"ajaxbox",attrs:{"aria-posinset":r+1,"aria-setsize":t.itemList.length}},[t.currentCategory?n("img",{attrs:{src:"src/img/categories/"+t.currentCategory+"/"+e.img+"_thumb.jpg",alt:e.id,title:e.id},on:{click:function(n){t.setCurrentIndex(e.id)}}}):t._e(),n("br"),t._v(" "),n("p",[t._v(t._s(e.id)+" Value"+t._s(e.value))])])])}))]),t._v(" "),t._m(1)])])])])])]),t._v(" "),n("footer",[n("vcFooter")],1)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"panel_heading"},[n("h2",{staticClass:"title--centered"},[t._v("Galleries")]),t._v(" "),n("summary",[n("h3",{staticClass:"title--centered"},[t._v("\r\n          Enjoy masterpieces lorem ipsum dolor sit amet...\r\n          ")])]),t._v(" "),n("hr",{staticClass:"hr--primary"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"row col-sm-12"},[n("div",{staticClass:"gallery-listing-paginator"})])}],s={render:r,staticRenderFns:a};e.a=s}]);