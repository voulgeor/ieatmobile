import{d as w,r as m,z as q,w as C,o as G,K as S,q as Z,t as A,k as $,ah as F,ai as b,i as y,ad as H,aj as _e,ak as Oe,F as Se,c as N,al as ce,am as me,an as x,ao as W,ap as X,aq as J}from"./index.a3a9b403.js";let P=Symbol("map"),I=Symbol("api"),ve=Symbol("marker"),ge=Symbol("markerCluster"),B=Symbol("CustomMarker"),fe=Symbol("mapTilesLoaded"),O="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");var be=function o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r;if(Array.isArray(e)){var i=e.length;if(i!=t.length)return!1;for(r=i;r--!==0;)if(!o(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var s=Object.keys(e);if(i=s.length,i!==Object.keys(t).length)return!1;for(r=i;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[r]))return!1;for(r=i;r--!==0;)if(i=s[r],!o(e[i],t[i]))return!1;return!0}return e!==e&&t!==t};class M{constructor({apiKey:e,channel:t,client:r,id:i="__googleMapsScriptId",libraries:s=[],language:u,region:n,version:d,mapIds:l,nonce:a,retries:p=3,url:h="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.loading=this.done=!1,this.errors=[],this.version=d,this.apiKey=e,this.channel=t,this.client=r,this.id=i||"__googleMapsScriptId",this.libraries=s,this.language=u,this.region=n,this.mapIds=l,this.nonce=a,this.retries=p,this.url=h,M.instance){if(!be(this.options,M.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(M.instance.options)}`);return M.instance}M.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),0<this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),e}deleteScript(){let e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(r=>{r?t(r.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))this.callback();else{var e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}}reset(){this.deleteScript(),this.loading=this.done=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){this.errors.push(e),this.errors.length<=this.retries?(e=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)):(this.onerrorEvent=e,this.callback())}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){this.resetIfRetryingFailed(),this.done?this.callback():window.google&&window.google.maps&&window.google.maps.version?(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()):this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}function Pe(o){return class extends o.OverlayView{constructor(e){super();let{element:t,...r}=e;this.element=t,this.opts=r,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof o.LatLng?this.opts.position:new o.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;let e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||.01<Number(e.style.opacity))}onAdd(){if(this.element){var e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}}draw(){if(this.element){var e=this.getProjection().fromLatLngToDivPixel(this.getPosition());if(e){this.element.style.position="absolute";let r=this.element.offsetHeight;var t=this.element.offsetWidth;switch(this.opts.anchorPoint){case"TOP_CENTER":t=e.x-t/2,e=e.y;break;case"BOTTOM_CENTER":t=e.x-t/2,e=e.y-r;break;case"LEFT_CENTER":t=e.x,e=e.y-r/2;break;case"RIGHT_CENTER":t=e.x-t,e=e.y-r/2;break;case"TOP_LEFT":t=e.x,e=e.y;break;case"TOP_RIGHT":t=e.x-t,e=e.y;break;case"BOTTOM_LEFT":t=e.x,e=e.y-r;break;case"BOTTOM_RIGHT":t=e.x-t,e=e.y-r;break;default:t=e.x-t/2,e=e.y-r/2}this.element.style.left=t+"px",this.element.style.top=e+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}}onRemove(){this.element&&this.element.remove()}setOptions(e){this.opts=e,this.draw()}}}let re,ie="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");var ye=w({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:ie,setup(o,{emit:e}){let t=m(),r=m(!1),i=m(),s=m(),u=m(!1);q(P,i),q(I,s),q(fe,u);let n=()=>{const a={...o};Object.keys(a).forEach(h=>{a[h]===void 0&&delete a[h]});var p=h=>{var c;return h?{position:(c=s.value)===null||c===void 0?void 0:c.ControlPosition[h]}:{}};return p={scaleControlOptions:o.scaleControlStyle?{style:o.scaleControlStyle}:{},panControlOptions:p(o.panControlPosition),zoomControlOptions:p(o.zoomControlPosition),rotateControlOptions:p(o.rotateControlPosition),streetViewControlOptions:p(o.streetViewControlPosition),fullscreenControlOptions:p(o.fullscreenControlPosition),disableDefaultUI:o.disableDefaultUi},{...a,...p}},d=C([s,i],([a,p])=>{a&&p&&(a.event.addListenerOnce(p,"tilesloaded",()=>{u.value=!0}),setTimeout(d,0))},{immediate:!0}),l=a=>{s.value=x(a.maps),i.value=x(new a.maps.Map(t.value,n())),a=Pe(s.value),s.value[B]=a,ie.forEach(p=>{var h;(h=i.value)===null||h===void 0||h.addListener(p,c=>e(p,c))}),r.value=!0,a=Object.keys(o).filter(p=>!"apiPromise apiKey version libraries region language center zoom".split(" ").includes(p)).map(p=>b(o,p)),C([()=>o.center,()=>o.zoom,...a],([p,h],[c,v])=>{var g,f,k;const{center:te,zoom:K,...Me}=n();(g=i.value)===null||g===void 0||g.setOptions(Me),h!==void 0&&h!==v&&((f=i.value)===null||f===void 0||f.setZoom(h)),h=!c||p.lng!==c.lng||p.lat!==c.lat,p&&h&&((k=i.value)===null||k===void 0||k.panTo(p))})};return G(()=>{if(o.apiPromise&&o.apiPromise instanceof Promise)o.apiPromise.then(l);else{try{const{apiKey:a,region:p,version:h,language:c,libraries:v}=o;re=new M({apiKey:a,region:p,version:h,language:c,libraries:v})}catch(a){console.error(a)}re.load().then(l)}}),S(()=>{var a;u.value=!1,i.value&&((a=s.value)===null||a===void 0||a.event.clearInstanceListeners(i.value))}),{mapRef:t,ready:r,map:i,api:s,mapTilesLoaded:u}}});function Y(o,e){if(e===void 0&&(e={}),e=e.insertAt,o&&typeof document!="undefined"){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o))}}Y(`
.mapdiv[data-v-177d06e3] {
  width: 100%;
  height: 100%;
}
`);let Ie=W();X("data-v-177d06e3");let Le={ref:"mapRef",class:"mapdiv"};J();let Ee=Ie(o=>(Z(),A("div",null,[$("div",Le,null,512),F(o.$slots,"default",{ready:o.ready,map:o.map,api:o.api,mapTilesLoaded:o.mapTilesLoaded},void 0,!0)])));ye.render=Ee;ye.__scopeId="data-v-177d06e3";var T=function o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r;if(Array.isArray(e)){var i=e.length;if(i!=t.length)return!1;for(r=i;r--!==0;)if(!o(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var s=Object.keys(e);if(i=s.length,i!==Object.keys(t).length)return!1;for(r=i;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[r]))return!1;for(r=i;r--!==0;)if(i=s[r],!o(e[i],t[i]))return!1;return!0}return e!==e&&t!==t};let L=(o,e,t,r)=>{const i=m(),s=y(P,m()),u=y(I,m()),n=y(ge,m()),d=N(()=>!!(n.value&&u.value&&(i.value instanceof u.value.Marker||i.value instanceof u.value[B])));return C([s,t],(l,[a,p])=>{var h,c,v;l=!T(t.value,p)||s.value!==a,s.value&&u.value&&l&&(i.value?(i.value.setOptions(t.value),d.value&&((h=n.value)===null||h===void 0||h.removeMarker(i.value),(c=n.value)===null||c===void 0||c.addMarker(i.value))):(i.value=o==="Marker"?x(new u.value[o](t.value)):o===B?x(new u.value[o](t.value)):x(new u.value[o]({...t.value,map:s.value})),d.value?(v=n.value)===null||v===void 0||v.addMarker(i.value):i.value.setMap(s.value),e.forEach(g=>{var f;(f=i.value)===null||f===void 0||f.addListener(g,k=>r(g,k))})))},{immediate:!0}),S(()=>{var l,a;i.value&&((l=u.value)===null||l===void 0||l.event.clearInstanceListeners(i.value),d.value?(a=n.value)===null||a===void 0||a.removeMarker(i.value):i.value.setMap(null))}),i},oe="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" ");var et=w({name:"Marker",props:{options:{type:Object,required:!0}},emits:oe,setup(o,{emit:e,expose:t,slots:r}){return o=b(o,"options"),e=L("Marker",oe,o,e),q(ve,e),t({marker:e}),()=>{var i;return(i=r.default)===null||i===void 0?void 0:i.call(r)}}});w({name:"Polyline",props:{options:{type:Object,required:!0}},emits:O,setup(o,{emit:e}){return o=b(o,"options"),{polyline:L("Polyline",O,o,e)}},render:()=>null});w({name:"Polygon",props:{options:{type:Object,required:!0}},emits:O,setup(o,{emit:e}){return o=b(o,"options"),{polygon:L("Polygon",O,o,e)}},render:()=>null});let se=O.concat(["bounds_changed"]);w({name:"Rectangle",props:{options:{type:Object,required:!0}},emits:se,setup(o,{emit:e}){return o=b(o,"options"),{rectangle:L("Rectangle",se,o,e)}},render:()=>null});let ne=O.concat(["center_changed","radius_changed"]);var tt=w({name:"Circle",props:{options:{type:Object,required:!0}},emits:ne,setup(o,{emit:e}){return o=b(o,"options"),{circle:L("Circle",ne,o,e)}},render:()=>null}),qe=w({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(o,{emit:e}){let t=m(null),r=y(P,m()),i=y(I,m()),s=y(fe,m(!1)),u=m(!1),n=C([s,i,t],([a,p,h])=>{p&&a&&h&&(d(o.position),u.value=!0,e("content:loaded"),setTimeout(n,0))},{immediate:!0}),d=a=>{r.value&&i.value&&t.value&&r.value.controls[i.value.ControlPosition[a]].push(t.value)},l=a=>{if(r.value&&i.value){let p=null;a=i.value.ControlPosition[a],r.value.controls[a].forEach((h,c)=>{h===t.value&&(p=c)}),p!==null&&r.value.controls[a].removeAt(p)}};return S(()=>l(o.position)),C(()=>o.position,(a,p)=>{l(p),d(a)}),C(()=>o.index,a=>{a&&t.value&&(t.value.index=o.index)}),{controlRef:t,showContent:u}}});let je={ref:"controlRef"};qe.render=function(o){return Z(),A(Se,null,[H(`
    v-show must be used instead of v-if otherwise there
    would be no rendered content pushed to the map controls
  `),_e($("div",je,[F(o.$slots,"default")],512),[[Oe,o.showContent]])],2112)};let le="closeclick content_changed domready position_changed visible zindex_changed".split(" ");var ke=w({inheritAttrs:!1,props:{options:{type:Object,default:()=>({})}},emits:le,setup(o,{slots:e,emit:t}){let r=m(),i=m(),s=y(P,m()),u=y(I,m()),n=y(ve,m()),d,l=N(()=>{var a;return(a=e.default)===null||a===void 0?void 0:a.call(e).some(p=>p.type!==ce)});return G(()=>{C([s,()=>o.options],([,a],[p,h])=>{p=!T(a,h)||s.value!==p,s.value&&u.value&&p&&(r.value?(r.value.setOptions({...a,content:l.value?i.value:a.content}),n.value||r.value.open({map:s.value})):(r.value=x(new u.value.InfoWindow({...a,content:l.value?i.value:a.content})),n.value?d=n.value.addListener("click",()=>{r.value&&r.value.open({map:s.value,anchor:n.value})}):r.value.open({map:s.value}),le.forEach(c=>{var v;(v=r.value)===null||v===void 0||v.addListener(c,g=>t(c,g))})))},{immediate:!0})}),S(()=>{var a;d&&d.remove(),r.value&&((a=u.value)===null||a===void 0||a.event.clearInstanceListeners(r.value),r.value.close())}),{infoWindow:r,infoWindowRef:i,hasSlotContent:l}}});Y(`
.info-window-wrapper[data-v-5b373d6e] {
  display: none;
}
.mapdiv .info-window-wrapper[data-v-5b373d6e] {
  display: inline-block;
}
`);let Te=W();X("data-v-5b373d6e");let ze={key:0,class:"info-window-wrapper"};J();let Ne=Te(o=>o.hasSlotContent?(Z(),A("div",ze,[$("div",me({ref:"infoWindowRef"},o.$attrs),[F(o.$slots,"default",{},void 0,!0)],16)])):H("v-if",!0));ke.render=Ne;ke.__scopeId="data-v-5b373d6e";function D(o,e,t,r,i,s){if(!(i-r<=t)){var u=r+i>>1;we(o,e,u,r,i,s%2),D(o,e,t,r,u-1,s+1),D(o,e,t,u+1,i,s+1)}}function we(o,e,t,r,i,s){for(;i>r;){if(600<i-r){var u=i-r+1,n=t-r+1,d=Math.log(u),l=.5*Math.exp(2*d/3);d=.5*Math.sqrt(d*l*(u-l)/u)*(0>n-u/2?-1:1),we(o,e,t,Math.max(r,Math.floor(t-n*l/u+d)),Math.min(i,Math.floor(t+(u-n)*l/u+d)),s)}for(u=e[2*t+s],n=r,l=i,E(o,e,r,t),e[2*i+s]>u&&E(o,e,r,i);n<l;){for(E(o,e,n,l),n++,l--;e[2*n+s]<u;)n++;for(;e[2*l+s]>u;)l--}e[2*r+s]===u?E(o,e,r,l):(l++,E(o,e,l,i)),l<=t&&(r=l+1),t<=l&&(i=l-1)}}function E(o,e,t,r){U(o,t,r),U(e,2*t,2*r),U(e,2*t+1,2*r+1)}function U(o,e,t){let r=o[e];o[e]=o[t],o[t]=r}let Be=o=>o[0],Re=o=>o[1];class ae{constructor(e,t=Be,r=Re,i=64,s=Float64Array){this.nodeSize=i,this.points=e;let u=this.ids=new(65536>e.length?Uint16Array:Uint32Array)(e.length);s=this.coords=new s(2*e.length);for(let n=0;n<e.length;n++)u[n]=n,s[2*n]=t(e[n]),s[2*n+1]=r(e[n]);D(u,s,i,0,u.length-1,0)}range(e,t,r,i){{var s=this.ids,u=this.coords,n=this.nodeSize;let l=[0,s.length-1,0],a=[],p,h;for(;l.length;){var d=l.pop();let c=l.pop(),v=l.pop();if(c-v<=n){for(d=v;d<=c;d++)p=u[2*d],h=u[2*d+1],p>=e&&p<=r&&h>=t&&h<=i&&a.push(s[d]);continue}let g=Math.floor((v+c)/2);p=u[2*g],h=u[2*g+1],p>=e&&p<=r&&h>=t&&h<=i&&a.push(s[g]);let f=(d+1)%2;(d===0?e<=p:t<=h)&&(l.push(v),l.push(g-1),l.push(f)),(d===0?r>=p:i>=h)&&(l.push(g+1),l.push(c),l.push(f))}e=a}return e}within(e,t,r){{var i=this.ids,s=this.coords,u=this.nodeSize;let p=[0,i.length-1,0],h=[],c=r*r;for(;p.length;){var n=p.pop();let v=p.pop();var d=p.pop();if(v-d<=u){for(n=d;n<=v;n++){d=s[2*n]-e;var l=s[2*n+1]-t;d=d*d+l*l,d<=c&&h.push(i[n])}continue}l=Math.floor((d+v)/2);let g=s[2*l],f=s[2*l+1];{var a=g-e;let k=f-t;a=a*a+k*k}a<=c&&h.push(i[l]),a=(n+1)%2,(n===0?e-r<=g:t-r<=f)&&(p.push(d),p.push(l-1),p.push(a)),(n===0?e+r>=g:t+r>=f)&&(p.push(l+1),p.push(v),p.push(a))}e=h}return e}}let Ze={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:o=>o},R=Math.fround||(o=>e=>(o[0]=+e,o[0]))(new Float32Array(1));class Ae{constructor(e){this.options=j(Object.create(Ze),e),this.trees=Array(this.options.maxZoom+1)}load(e){let{log:t,minZoom:r,maxZoom:i,nodeSize:s}=this.options;t&&console.time("total time");var u=`prepare ${e.length} points`;t&&console.time(u),this.points=e;let n=[];for(let d=0;d<e.length;d++)e[d].geometry&&n.push(Fe(e[d],d));for(this.trees[i+1]=new ae(n,pe,de,s,Float32Array),t&&console.timeEnd(u),e=i;e>=r;e--)u=+Date.now(),n=this._cluster(n,e),this.trees[e]=new ae(n,pe,de,s,Float32Array),t&&console.log("z%d: %d clusters in %dms",e,n.length,+Date.now()-u);return t&&console.timeEnd("total time"),this}getClusters(e,t){let r=((e[0]+180)%360+360)%360-180;var i=Math.max(-90,Math.min(90,e[1])),s=e[2]===180?180:((e[2]+180)%360+360)%360-180;let u=Math.max(-90,Math.min(90,e[3]));if(360<=e[2]-e[0])r=-180,s=180;else if(r>s){var n=this.getClusters([r,i,180,u],t);return i=this.getClusters([-180,i,s,u],t),n.concat(i)}t=this.trees[this._limitZoom(t)],s=t.range(r/360+.5,z(u),s/360+.5,z(i)),i=[];for(n of s)s=t.points[n],i.push(s.numPoints?ue(s):this.points[s.index]);return i}getChildren(e){var t=this._getOriginId(e),r=this._getOriginZoom(e);let i=this.trees[r];if(!i||(t=i.points[t],!t))throw Error("No cluster with the specified id.");t=i.within(t.x,t.y,this.options.radius/(this.options.extent*Math.pow(2,r-1))),r=[];for(let s of t)t=i.points[s],t.parentId===e&&r.push(t.numPoints?ue(t):this.points[t.index]);if(r.length===0)throw Error("No cluster with the specified id.");return r}getLeaves(e,t,r){let i=[];return this._appendLeaves(i,e,t||10,r||0,0),i}getTile(e,t,r){let i=this.trees[this._limitZoom(e)];e=Math.pow(2,e);let{extent:s,radius:u}=this.options,n=u/s,d=(r-n)/e,l=(r+1+n)/e,a={features:[]};return this._addTileFeatures(i.range((t-n)/e,d,(t+1+n)/e,l),i.points,t,r,e,a),t===0&&this._addTileFeatures(i.range(1-n/e,d,1,l),i.points,e,r,e,a),t===e-1&&this._addTileFeatures(i.range(0,d,n/e,l),i.points,-1,r,e,a),a.features.length?a:null}getClusterExpansionZoom(e){let t=this._getOriginZoom(e)-1;for(;t<=this.options.maxZoom&&(e=this.getChildren(e),t++,e.length===1);)e=e[0].properties.cluster_id;return t}_appendLeaves(e,t,r,i,s){t=this.getChildren(t);for(let u of t)if((t=u.properties)&&t.cluster?s=s+t.point_count<=i?s+t.point_count:this._appendLeaves(e,t.cluster_id,r,i,s):s<i?s++:e.push(u),e.length===r)break;return s}_addTileFeatures(e,t,r,i,s,u){for(let l of e){e=t[l];let a=e.numPoints;var n=void 0;let p;var d=void 0;a?(n=Ce(e),p=e.x,d=e.y):(d=this.points[e.index],n=d.properties,p=d.geometry.coordinates[0]/360+.5,d=z(d.geometry.coordinates[1])),n={type:1,geometry:[[Math.round(this.options.extent*(p*s-r)),Math.round(this.options.extent*(d*s-i))]],tags:n};let h;a?h=e.id:this.options.generateId?h=e.index:this.points[e.index].id&&(h=this.points[e.index].id),h!==void 0&&(n.id=h),u.features.push(n)}}_limitZoom(e){return Math.max(this.options.minZoom,Math.min(Math.floor(+e),this.options.maxZoom+1))}_cluster(e,t){let r=[],{radius:i,extent:s,reduce:u,minPoints:n}=this.options,d=i/(s*Math.pow(2,t));for(let c=0;c<e.length;c++){var l=e[c];if(l.zoom<=t)continue;l.zoom=t;let v=this.trees[t+1];var a=v.within(l.x,l.y,d),p=l.numPoints||1;let g=p;for(let f of a){var h=v.points[f];h.zoom>t&&(g+=h.numPoints||1)}if(g>p&&g>=n){h=l.x*p;let f=l.y*p;p=u&&1<p?this._map(l,!0):null;let k=(c<<5)+(t+1)+this.points.length;for(let te of a){if(a=v.points[te],a.zoom<=t)continue;a.zoom=t;let K=a.numPoints||1;h+=a.x*K,f+=a.y*K,a.parentId=k,u&&(p||(p=this._map(l,!0)),u(p,this._map(a)))}l.parentId=k,r.push($e(h/g,f/g,k,g,p))}else if(r.push(l),1<g)for(let f of a)l=v.points[f],l.zoom<=t||(l.zoom=t,r.push(l))}return r}_getOriginId(e){return e-this.points.length>>5}_getOriginZoom(e){return(e-this.points.length)%32}_map(e,t){if(e.numPoints)return t?j({},e.properties):e.properties;e=this.points[e.index].properties;let r=this.options.map(e);return t&&r===e?j({},r):r}}function $e(o,e,t,r,i){return{x:R(o),y:R(e),zoom:1/0,id:t,parentId:-1,numPoints:r,properties:i}}function Fe(o,e){let[t,r]=o.geometry.coordinates;return{x:R(t/360+.5),y:R(z(r)),zoom:1/0,index:e,parentId:-1}}function ue(o){var e=o.id,t=Ce(o);return{type:"Feature",id:e,properties:t,geometry:{type:"Point",coordinates:[360*(o.x-.5),360*Math.atan(Math.exp((180-360*o.y)*Math.PI/180))/Math.PI-90]}}}function Ce(o){let e=o.numPoints,t=1e4<=e?`${Math.round(e/1e3)}k`:1e3<=e?`${Math.round(e/100)/10}k`:e;return j(j({},o.properties),{cluster:!0,cluster_id:o.id,point_count:e,point_count_abbreviated:t})}function z(o){return o=Math.sin(o*Math.PI/180),o=.5-.25*Math.log((1+o)/(1-o))/Math.PI,0>o?0:1<o?1:o}function j(o,e){for(let t in e)o[t]=e[t];return o}function pe(o){return o.x}function de(o){return o.y}class V{constructor({markers:e,position:t}){this.markers=e,t&&(this._position=t instanceof google.maps.LatLng?t:new google.maps.LatLng(t))}get bounds(){if(this.markers.length!==0||this._position)return this.markers.reduce((e,t)=>e.extend(t.getPosition()),new google.maps.LatLngBounds(this._position,this._position))}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(e=>e.getVisible()).length}push(e){this.markers.push(e)}delete(){this.marker&&(this.marker.setMap(null),delete this.marker),this.markers.length=0}}class Ke{constructor({maxZoom:e=16}){this.maxZoom=e}noop({markers:e}){return Ue(e)}}let Ue=o=>o.map(e=>new V({position:e.getPosition(),markers:[e]}));class De extends Ke{constructor(e){var{maxZoom:t,radius:r=60}=e,i=["maxZoom","radius"],s={},u;for(u in e)Object.prototype.hasOwnProperty.call(e,u)&&0>i.indexOf(u)&&(s[u]=e[u]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(u=Object.getOwnPropertySymbols(e);n<u.length;n++)0>i.indexOf(u[n])&&Object.prototype.propertyIsEnumerable.call(e,u[n])&&(s[u[n]]=e[u[n]])}super({maxZoom:t}),this.superCluster=new Ae(Object.assign({maxZoom:this.maxZoom,radius:r},s)),this.state={zoom:null}}calculate(e){let t=!1;if(!T(e.markers,this.markers)){t=!0,this.markers=[...e.markers];var r=this.markers.map(i=>({type:"Feature",geometry:{type:"Point",coordinates:[i.getPosition().lng(),i.getPosition().lat()]},properties:{marker:i}}));this.superCluster.load(r)}return r={zoom:e.map.getZoom()},t||this.state.zoom>this.maxZoom&&r.zoom>this.maxZoom||(t=t||!T(this.state,r)),this.state=r,t&&(this.clusters=this.cluster(e)),{clusters:this.clusters,changed:t}}cluster({map:e}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(e.getZoom())).map(this.transformCluster.bind(this))}transformCluster({geometry:{coordinates:[e,t]},properties:r}){return r.cluster?new V({markers:this.superCluster.getLeaves(r.cluster_id,1/0).map(i=>i.properties.marker),position:new google.maps.LatLng({lat:t,lng:e})}):(e=r.marker,new V({markers:[e],position:e.getPosition()}))}}class Ve{constructor(e,t){this.markers={sum:e.length},e=t.map(i=>i.count);let r=e.reduce((i,s)=>i+s,0);this.clusters={count:t.length,markers:{mean:r/t.length,sum:r,min:Math.min(...e),max:Math.max(...e)}}}}class Ge{render({count:e,position:t},r){return r=window.btoa(`
  <svg fill="${e>Math.max(10,r.clusters.markers.mean)?"#ff0000":"#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`),new google.maps.Marker({position:t,icon:{url:`data:image/svg+xml;base64,${r}`,scaledSize:new google.maps.Size(45,45)},label:{text:String(e),color:"rgba(255,255,255,0.9)",fontSize:"12px"},title:`Cluster of ${e} markers`,zIndex:Number(google.maps.Marker.MAX_ZINDEX)+e})}}class Q{constructor(){var e=Q,t=google.maps.OverlayView;for(let r in t.prototype)e.prototype[r]=t.prototype[r]}}var _,ee=_||(_={});ee.CLUSTERING_BEGIN="clusteringbegin";ee.CLUSTERING_END="clusteringend";ee.CLUSTER_CLICK="click";let He=(o,e,t)=>{t.fitBounds(e.bounds)};class We extends Q{constructor({map:e,markers:t=[],algorithm:r=new De({}),renderer:i=new Ge,onClusterClick:s=He}){super(),this.markers=[...t],this.clusters=[],this.algorithm=r,this.renderer=i,this.onClusterClick=s,e&&this.setMap(e)}addMarker(e,t){this.markers.includes(e)||(this.markers.push(e),t||this.render())}addMarkers(e,t){e.forEach(r=>{this.addMarker(r,!0)}),t||this.render()}removeMarker(e,t){let r=this.markers.indexOf(e);return r===-1?!1:(e.setMap(null),this.markers.splice(r,1),t||this.render(),!0)}removeMarkers(e,t){let r=!1;return e.forEach(i=>{r=this.removeMarker(i,!0)||r}),r&&!t&&this.render(),r}clearMarkers(e){this.markers.length=0,e||this.render()}render(){let e=this.getMap();if(e instanceof google.maps.Map&&this.getProjection()){google.maps.event.trigger(this,_.CLUSTERING_BEGIN,this);let{clusters:t,changed:r}=this.algorithm.calculate({markers:this.markers,map:e,mapCanvasProjection:this.getProjection()});(r||r==null)&&(this.reset(),this.clusters=t,this.renderClusters()),google.maps.event.trigger(this,_.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(e=>e.setMap(null)),this.clusters.forEach(e=>e.delete()),this.clusters=[]}renderClusters(){let e=new Ve(this.markers,this.clusters),t=this.getMap();this.clusters.forEach(r=>{r.markers.length===1?r.marker=r.markers[0]:(r.marker=this.renderer.render(r,e),this.onClusterClick&&r.marker.addListener("click",i=>{google.maps.event.trigger(this,_.CLUSTER_CLICK,r),this.onClusterClick(i,r,t)})),r.marker.setMap(t)})}}let he=Object.values(_);w({name:"MarkerCluster",props:{options:{type:Object,default:()=>({})}},emits:he,setup(o,{emit:e,expose:t,slots:r}){let i=m(),s=y(P,m()),u=y(I,m());return q(ge,i),C(s,()=>{s.value&&(i.value=x(new We({map:s.value,...o.options})),he.forEach(n=>{var d;(d=i.value)===null||d===void 0||d.addListener(n,l=>e(n,l))}))},{immediate:!0}),S(()=>{var n;i.value&&((n=u.value)===null||n===void 0||n.event.clearInstanceListeners(i.value),i.value.clearMarkers(),i.value.setMap(null))}),t({markerCluster:i}),()=>{var n;return(n=r.default)===null||n===void 0?void 0:n.call(r)}}});var xe=w({inheritAttrs:!1,props:{options:{type:Object,required:!0}},setup(o,{slots:e,emit:t}){let r=m(),i=m(),s=N(()=>{var n;return(n=e.default)===null||n===void 0?void 0:n.call(e).some(d=>d.type!==ce)}),u=N(()=>({...o.options,element:r.value}));return G(()=>{i=L(B,[],u,t)}),{customMarkerRef:r,customMarker:i,hasSlotContent:s}}});Y(`
.custom-marker-wrapper[data-v-b9d5ec8a] {
  display: none;
}
.mapdiv .custom-marker-wrapper[data-v-b9d5ec8a] {
  display: inline-block;
}
`);let Xe=W();X("data-v-b9d5ec8a");let Je={key:0,class:"custom-marker-wrapper"};J();let Ye=Xe(o=>o.hasSlotContent?(Z(),A("div",Je,[$("div",me({ref:"customMarkerRef",style:{cursor:o.$attrs.onClick?"pointer":void 0}},o.$attrs),[F(o.$slots,"default",{},void 0,!0)],16)])):H("v-if",!0));xe.render=Ye;xe.__scopeId="data-v-b9d5ec8a";w({name:"HeatmapLayer",props:{options:{type:Object,default:()=>({})}},setup(o){let e=m(),t=y(P,m()),r=y(I,m());return C([t,()=>o.options],([,i],[s,u])=>{var n;if(s=!T(i,u)||t.value!==s,t.value&&r.value&&s){if(i=structuredClone(i),i.data&&!(i.data instanceof r.value.MVCArray)){let d=r.value.LatLng;i.data=(n=i.data)===null||n===void 0?void 0:n.map(l=>l instanceof d||"location"in l&&(l.location instanceof d||l.location===null)?l:"location"in l?{...l,location:new d(l.location)}:new d(l))}e.value?e.value.setOptions(i):e.value=x(new r.value.visualization.HeatmapLayer({...i,map:t.value}))}},{immediate:!0}),S(()=>{e.value&&e.value.setMap(null)}),{heatmapLayer:e}},render:()=>null});export{ye as F,et as f,tt as k};
