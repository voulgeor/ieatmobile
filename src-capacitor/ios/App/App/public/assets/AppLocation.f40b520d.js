import{a7 as G,v as Y}from"./index.628e6afe.js";const d=G("Geolocation",{web:()=>Y(()=>import("./web.ce63790b.js"),["assets/web.ce63790b.js","assets/index.628e6afe.js","assets/index.f7829e99.css"]).then(t=>new t.GeolocationWeb)});function V(){if(typeof process=="undefined"){var t=typeof window!="undefined"?window:{},r=5e3,n=Date.now(),e=!1;t.document.addEventListener("deviceready",function(){console.log("Ionic Native: deviceready event fired after "+(Date.now()-n)+" ms"),e=!0}),setTimeout(function(){!e&&t.cordova&&console.warn("Ionic Native: deviceready did not fire within "+r+"ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.")},r)}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var R=function(t,r){return R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i])},R(t,r)};function S(t,r){R(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}function _(t){return typeof t=="function"}var A=!1,l={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){var r=new Error;""+r.stack}A=t},get useDeprecatedSynchronousErrorHandling(){return A}};function b(t){setTimeout(function(){throw t},0)}var g={closed:!0,next:function(t){},error:function(t){if(l.useDeprecatedSynchronousErrorHandling)throw t;b(t)},complete:function(){}},U=function(){return Array.isArray||function(t){return t&&typeof t.length=="number"}}();function M(t){return t!==null&&typeof t=="object"}var Q=function(){function t(r){return Error.call(this),this.message=r?r.length+` errors occurred during unsubscription:
`+r.map(function(n,e){return e+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=r,this}return t.prototype=Object.create(Error.prototype),t}(),v=Q,W=function(){function t(r){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,r&&(this._ctorUnsubscribe=!0,this._unsubscribe=r)}return t.prototype.unsubscribe=function(){var r;if(!this.closed){var n=this,e=n._parentOrParents,i=n._ctorUnsubscribe,o=n._unsubscribe,u=n._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,e instanceof t)e.remove(this);else if(e!==null)for(var s=0;s<e.length;++s){var c=e[s];c.remove(this)}if(_(o)){i&&(this._unsubscribe=void 0);try{o.call(this)}catch(w){r=w instanceof v?T(w.errors):[w]}}if(U(u))for(var s=-1,f=u.length;++s<f;){var a=u[s];if(M(a))try{a.unsubscribe()}catch(E){r=r||[],E instanceof v?r=r.concat(T(E.errors)):r.push(E)}}if(r)throw new v(r)}},t.prototype.add=function(r){var n=r;if(!r)return t.EMPTY;switch(typeof r){case"function":n=new t(r);case"object":if(n===this||n.closed||typeof n.unsubscribe!="function")return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var e=n;n=new t,n._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var i=n._parentOrParents;if(i===null)n._parentOrParents=this;else if(i instanceof t){if(i===this)return n;n._parentOrParents=[i,this]}else if(i.indexOf(this)===-1)i.push(this);else return n;var o=this._subscriptions;return o===null?this._subscriptions=[n]:o.push(n),n},t.prototype.remove=function(r){var n=this._subscriptions;if(n){var e=n.indexOf(r);e!==-1&&n.splice(e,1)}},t.EMPTY=function(r){return r.closed=!0,r}(new t),t}();function T(t){return t.reduce(function(r,n){return r.concat(n instanceof v?n.errors:n)},[])}var P=function(){return typeof Symbol=="function"?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),p=function(t){S(r,t);function r(n,e,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=g;break;case 1:if(!n){o.destination=g;break}if(typeof n=="object"){n instanceof r?(o.syncErrorThrowable=n.syncErrorThrowable,o.destination=n,n.add(o)):(o.syncErrorThrowable=!0,o.destination=new I(o,n));break}default:o.syncErrorThrowable=!0,o.destination=new I(o,n,e,i);break}return o}return r.prototype[P]=function(){return this},r.create=function(n,e,i){var o=new r(n,e,i);return o.syncErrorThrowable=!1,o},r.prototype.next=function(n){this.isStopped||this._next(n)},r.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},r.prototype._next=function(n){this.destination.next(n)},r.prototype._error=function(n){this.destination.error(n),this.unsubscribe()},r.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},r.prototype._unsubscribeAndRecycle=function(){var n=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=n,this},r}(W),I=function(t){S(r,t);function r(n,e,i,o){var u=t.call(this)||this;u._parentSubscriber=n;var s,c=u;return _(e)?s=e:e&&(s=e.next,i=e.error,o=e.complete,e!==g&&(c=Object.create(e),_(c.unsubscribe)&&u.add(c.unsubscribe.bind(c)),c.unsubscribe=u.unsubscribe.bind(u))),u._context=c,u._next=s,u._error=i,u._complete=o,u}return r.prototype.next=function(n){if(!this.isStopped&&this._next){var e=this._parentSubscriber;!l.useDeprecatedSynchronousErrorHandling||!e.syncErrorThrowable?this.__tryOrUnsub(this._next,n):this.__tryOrSetError(e,this._next,n)&&this.unsubscribe()}},r.prototype.error=function(n){if(!this.isStopped){var e=this._parentSubscriber,i=l.useDeprecatedSynchronousErrorHandling;if(this._error)!i||!e.syncErrorThrowable?(this.__tryOrUnsub(this._error,n),this.unsubscribe()):(this.__tryOrSetError(e,this._error,n),this.unsubscribe());else if(e.syncErrorThrowable)i?(e.syncErrorValue=n,e.syncErrorThrown=!0):b(n),this.unsubscribe();else{if(this.unsubscribe(),i)throw n;b(n)}}},r.prototype.complete=function(){var n=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var i=function(){return n._complete.call(n._context)};!l.useDeprecatedSynchronousErrorHandling||!e.syncErrorThrowable?(this.__tryOrUnsub(i),this.unsubscribe()):(this.__tryOrSetError(e,i),this.unsubscribe())}else this.unsubscribe()}},r.prototype.__tryOrUnsub=function(n,e){try{n.call(this._context,e)}catch(i){if(this.unsubscribe(),l.useDeprecatedSynchronousErrorHandling)throw i;b(i)}},r.prototype.__tryOrSetError=function(n,e,i){if(!l.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,i)}catch(o){return l.useDeprecatedSynchronousErrorHandling?(n.syncErrorValue=o,n.syncErrorThrown=!0,!0):(b(o),!0)}return!1},r.prototype._unsubscribe=function(){var n=this._parentSubscriber;this._context=null,this._parentSubscriber=null,n.unsubscribe()},r}(p);function F(t){for(;t;){var r=t,n=r.closed,e=r.destination,i=r.isStopped;if(n||i)return!1;e&&e instanceof p?t=e:t=null}return!0}function N(t,r,n){if(t){if(t instanceof p)return t;if(t[P])return t[P]()}return!t&&!r&&!n?new p(g):new p(t,r,n)}var $=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function B(t){return t}function J(t){return t.length===0?B:t.length===1?t[0]:function(n){return t.reduce(function(e,i){return i(e)},n)}}var L=function(){function t(r){this._isScalar=!1,r&&(this._subscribe=r)}return t.prototype.lift=function(r){var n=new t;return n.source=this,n.operator=r,n},t.prototype.subscribe=function(r,n,e){var i=this.operator,o=N(r,n,e);if(i?o.add(i.call(o,this.source)):o.add(this.source||l.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),l.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(n){l.useDeprecatedSynchronousErrorHandling&&(r.syncErrorThrown=!0,r.syncErrorValue=n),F(r)?r.error(n):console.warn(n)}},t.prototype.forEach=function(r,n){var e=this;return n=C(n),new n(function(i,o){var u;u=e.subscribe(function(s){try{r(s)}catch(c){o(c),u&&u.unsubscribe()}},o,i)})},t.prototype._subscribe=function(r){var n=this.source;return n&&n.subscribe(r)},t.prototype[$]=function(){return this},t.prototype.pipe=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===0?this:J(r)(this)},t.prototype.toPromise=function(r){var n=this;return r=C(r),new r(function(e,i){var o;n.subscribe(function(u){return o=u},function(u){return i(u)},function(){return e(o)})})},t.create=function(r){return new t(r)},t}();function C(t){if(t||(t=l.Promise||Promise),!t)throw new Error("no Promise impl found");return t}function z(t,r){return function(e){if(typeof t!="function")throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return e.lift(new X(t,r))}}var X=function(){function t(r,n){this.project=r,this.thisArg=n}return t.prototype.call=function(r,n){return n.subscribe(new K(r,this.project,this.thisArg))},t}(),K=function(t){S(r,t);function r(n,e,i){var o=t.call(this,n)||this;return o.project=e,o.count=0,o.thisArg=i||o,o}return r.prototype._next=function(n){var e;try{e=this.project.call(this.thisArg,n,this.count++)}catch(i){this.destination.error(i);return}this.destination.next(e)},r}(p);function D(t,r,n,e){return _(n)&&(e=n,n=void 0),e?D(t,r,n).pipe(z(function(i){return U(i)?e.apply(void 0,i):e(i)})):new L(function(i){function o(u){arguments.length>1?i.next(Array.prototype.slice.call(arguments)):i.next(u)}O(t,r,o,i,n)})}function O(t,r,n,e,i){var o;if(rr(t)){var u=t;t.addEventListener(r,n,i),o=function(){return u.removeEventListener(r,n,i)}}else if(j(t)){var s=t;t.on(r,n),o=function(){return s.off(r,n)}}else if(Z(t)){var c=t;t.addListener(r,n),o=function(){return c.removeListener(r,n)}}else if(t&&t.length)for(var f=0,a=t.length;f<a;f++)O(t[f],r,n,e,i);else throw new TypeError("Invalid event target");e.add(o)}function Z(t){return t&&typeof t.addListener=="function"&&typeof t.removeListener=="function"}function j(t){return t&&typeof t.on=="function"&&typeof t.off=="function"}function rr(t){return t&&typeof t.addEventListener=="function"&&typeof t.removeEventListener=="function"}var nr={error:"cordova_not_available"},tr={error:"plugin_not_installed"};function x(t){var r=function(){if(Promise)return new Promise(function(o,u){t(o,u)});console.error("No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.")};if(typeof window!="undefined"&&window.angular){var n=window.document,e=window.angular.element(n.querySelector("[ng-app]")||n.body).injector();if(e){var i=e.get("$q");return i(function(o,u){t(o,u)})}console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.")}return r()}function er(t,r,n,e){e===void 0&&(e={});var i,o,u=x(function(s,c){e.destruct?i=h(t,r,n,e,function(){for(var f=[],a=0;a<arguments.length;a++)f[a]=arguments[a];return s(f)},function(){for(var f=[],a=0;a<arguments.length;a++)f[a]=arguments[a];return c(f)}):i=h(t,r,n,e,s,c),o=c});return i&&i.error&&(u.catch(function(){}),typeof o=="function"&&o(i.error)),u}function ir(t,r,n,e){return e===void 0&&(e={}),x(function(i,o){var u=h(t,r,n,e);u?u.error?o(u.error):u.then&&u.then(i).catch(o):o({error:"unexpected_error"})})}function or(t,r,n,e){return e===void 0&&(e={}),new L(function(i){var o;return e.destruct?o=h(t,r,n,e,function(){for(var u=[],s=0;s<arguments.length;s++)u[s]=arguments[s];return i.next(u)},function(){for(var u=[],s=0;s<arguments.length;s++)u[s]=arguments[s];return i.error(u)}):o=h(t,r,n,e,i.next.bind(i),i.error.bind(i)),o&&o.error&&(i.error(o.error),i.complete()),function(){try{if(e.clearFunction)return e.clearWithArgs?h(t,e.clearFunction,n,e,i.next.bind(i),i.error.bind(i)):h(t,e.clearFunction,[])}catch(u){console.warn("Unable to clear the previous observable watch for",t.constructor.getPluginName(),r),console.warn(u)}}})}function ur(t,r){return r=typeof window!="undefined"&&r?H(window,r):r||(typeof window!="undefined"?window:{}),D(r,t)}function k(t,r,n){var e,i;typeof t=="string"?e=t:(e=t.constructor.getPluginRef(),n=t.constructor.getPluginName(),i=t.constructor.getPluginInstallName());var o=q(e);return!o||!!r&&typeof o[r]=="undefined"?typeof window=="undefined"||!window.cordova?(ar(n,r),nr):(cr(n,i,r),tr):!0}function sr(t,r,n,e){if(r===void 0&&(r={}),r.sync)return t;if(r.callbackOrder==="reverse")t.unshift(e),t.unshift(n);else if(r.callbackStyle==="node")t.push(function(s,c){s?e(s):n(c)});else if(r.callbackStyle==="object"&&r.successName&&r.errorName){var i={};i[r.successName]=n,i[r.errorName]=e,t.push(i)}else if(typeof r.successIndex!="undefined"||typeof r.errorIndex!="undefined"){var o=function(){r.successIndex>t.length?t[r.successIndex]=n:t.splice(r.successIndex,0,n)},u=function(){r.errorIndex>t.length?t[r.errorIndex]=e:t.splice(r.errorIndex,0,e)};r.successIndex>r.errorIndex?(u(),o()):(o(),u())}else t.push(n),t.push(e);return t}function h(t,r,n,e,i,o){e===void 0&&(e={}),n=sr(n,e,i,o);var u=k(t,r);if(u===!0){var s=q(t.constructor.getPluginRef());return s[r].apply(s,n)}else return u}function q(t){return typeof window!="undefined"?H(window,t):null}function H(t,r){for(var n=r.split("."),e=t,i=0;i<n.length;i++){if(!e)return null;e=e[n[i]]}return e}function cr(t,r,n){console.warn(n?"Native: tried calling "+t+"."+n+", but the "+t+" plugin is not installed.":"Native: tried accessing the "+t+" plugin but it's not installed."),r&&console.warn("Install the "+t+" plugin: 'ionic cordova plugin add "+r+"'")}function ar(t,r){typeof process=="undefined"&&console.warn(r?"Native: tried calling "+t+"."+r+", but Cordova is not available. Make sure to include cordova.js or run in a device/simulator":"Native: tried accessing the "+t+" plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator")}var fr=function(t,r,n){return n===void 0&&(n={}),function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return n.sync?h(t,r,e,n):n.observable?or(t,r,e,n):n.eventObservable&&n.event?ur(n.event,n.element):n.otherPromise?ir(t,r,e,n):er(t,r,e,n)}};function lr(t,r){for(var n=r.split("."),e=t,i=0;i<n.length;i++){if(!e)return null;e=e[n[i]]}return e}var hr=function(){function t(){}return t.installed=function(){var r=k(this.pluginRef)===!0;return r},t.getPlugin=function(){return typeof window!="undefined"?lr(window,this.pluginRef):null},t.getPluginName=function(){var r=this.pluginName;return r},t.getPluginRef=function(){var r=this.pluginRef;return r},t.getPluginInstallName=function(){var r=this.plugin;return r},t.getSupportedPlatforms=function(){var r=this.platforms;return r},t.pluginName="",t.pluginRef="",t.plugin="",t.repo="",t.platforms=[],t.install="",t}();function m(t,r,n,e){return fr(t,r,n).apply(this,e)}V();var pr=globalThis&&globalThis.__extends||function(){var t=function(r,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])},t(r,n)};return function(r,n){t(r,n);function e(){this.constructor=r}r.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}}(),dr=function(t){pr(r,t);function r(){var n=t!==null&&t.apply(this,arguments)||this;return n.REQUEST_PRIORITY_NO_POWER=0,n.REQUEST_PRIORITY_LOW_POWER=1,n.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY=2,n.REQUEST_PRIORITY_HIGH_ACCURACY=3,n.SUCCESS_SETTINGS_SATISFIED=0,n.SUCCESS_USER_AGREED=1,n.ERROR_ALREADY_REQUESTING=-1,n.ERROR_INVALID_ACTION=0,n.ERROR_INVALID_ACCURACY=1,n.ERROR_EXCEPTION=1,n.ERROR_CANNOT_CHANGE_ACCURACY=3,n.ERROR_USER_DISAGREED=4,n.ERROR_GOOGLE_API_CONNECTION_FAILED=4,n}return r.prototype.canRequest=function(){return m(this,"canRequest",{},arguments)},r.prototype.isRequesting=function(){return m(this,"isRequesting",{},arguments)},r.prototype.request=function(n){return m(this,"request",{callbackOrder:"reverse"},arguments)},r.pluginName="LocationAccuracy",r.plugin="cordova-plugin-request-location-accuracy",r.pluginRef="cordova.plugins.locationAccuracy",r.repo="https://github.com/dpa99c/cordova-plugin-request-location-accuracy",r.platforms=["Android","iOS"],r}(hr),y=new dr;const br={async islocationEnabled(){return await new Promise(function(r,n){d.checkPermissions().then(e=>{console.debug(e),e.location==="denied"?d.requestPermissions().then(i=>{i.location==="granted"?r("granted"):r("denied")}):e.location==="prompt"?d.requestPermissions().then(i=>{i.location==="granted"?r("granted"):r("denied")}):e.location==="granted"?r("granted"):e.location==="prompt-with-rationale"&&d.requestPermissions().then(i=>{i.location==="granted"?r("granted"):r("denied")})}).catch(e=>{n()})})},async checkAccuracy(){return await new Promise(function(r,n){y.canRequest().then(e=>{y.request(y.REQUEST_PRIORITY_HIGH_ACCURACY).then(()=>{r(!0)},i=>{n(i)})}).catch(e=>{y.request(y.REQUEST_PRIORITY_HIGH_ACCURACY).then(()=>{r(!0)},i=>{n(i)})})})},async getPosition(){return await new Promise(function(r,n){d.getCurrentPosition().then(e=>{console.debug(e);let i={lat:e.coords.latitude,lng:e.coords.longitude};r(i)}).catch(e=>{n(e)})})}};export{br as A};
