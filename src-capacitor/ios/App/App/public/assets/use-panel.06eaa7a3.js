import{aB as R,aC as b,K as U,aD as j,aE as w,aF as E,aI as $,aK as T,aJ as D,r as M,c as m,w as J,g as G,P as H,h as C,X as Q,aX as Z,z,aY as ee}from"./index.f4219e68.js";import{g as K,s as L}from"./touch.70a9dd44.js";import{c as te}from"./selection.babb8692.js";import{u as ne}from"./use-cache.b0833c75.js";function ie(t){const o=[.06,6,50];return typeof t=="string"&&t.length&&t.split(":").forEach((c,d)=>{const r=parseFloat(c);r&&(o[d]=r)}),o}var oe=R({name:"touch-swipe",beforeMount(t,{value:o,arg:c,modifiers:d}){if(d.mouse!==!0&&b.has.touch!==!0)return;const r=d.mouseCapture===!0?"Capture":"",e={handler:o,sensitivity:ie(c),direction:K(d),noop:U,mouseStart(i){L(i,e)&&j(i)&&(w(e,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),e.start(i,!0))},touchStart(i){if(L(i,e)){const l=i.target;w(e,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),e.start(i)}},start(i,l){b.is.firefox===!0&&E(t,!0);const f=$(i);e.event={x:f.left,y:f.top,time:Date.now(),mouse:l===!0,dir:!1}},move(i){if(e.event===void 0)return;if(e.event.dir!==!1){T(i);return}const l=Date.now()-e.event.time;if(l===0)return;const f=$(i),h=f.left-e.event.x,u=Math.abs(h),y=f.top-e.event.y,s=Math.abs(y);if(e.event.mouse!==!0){if(u<e.sensitivity[1]&&s<e.sensitivity[1]){e.end(i);return}}else if(u<e.sensitivity[2]&&s<e.sensitivity[2])return;const v=u/l,g=s/l;e.direction.vertical===!0&&u<s&&u<100&&g>e.sensitivity[0]&&(e.event.dir=y<0?"up":"down"),e.direction.horizontal===!0&&u>s&&s<100&&v>e.sensitivity[0]&&(e.event.dir=h<0?"left":"right"),e.direction.up===!0&&u<s&&y<0&&u<100&&g>e.sensitivity[0]&&(e.event.dir="up"),e.direction.down===!0&&u<s&&y>0&&u<100&&g>e.sensitivity[0]&&(e.event.dir="down"),e.direction.left===!0&&u>s&&h<0&&s<100&&v>e.sensitivity[0]&&(e.event.dir="left"),e.direction.right===!0&&u>s&&h>0&&s<100&&v>e.sensitivity[0]&&(e.event.dir="right"),e.event.dir!==!1?(T(i),e.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),te(),e.styleCleanup=A=>{e.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};A===!0?setTimeout(P,50):P()}),e.handler({evt:i,touch:e.event.mouse!==!0,mouse:e.event.mouse,direction:e.event.dir,duration:l,distance:{x:u,y:s}})):e.end(i)},end(i){e.event!==void 0&&(D(e,"temp"),b.is.firefox===!0&&E(t,!1),e.styleCleanup!==void 0&&e.styleCleanup(!0),i!==void 0&&e.event.dir!==!1&&T(i),e.event=void 0)}};t.__qtouchswipe=e,d.mouse===!0&&w(e,"main",[[t,"mousedown","mouseStart",`passive${r}`]]),b.has.touch===!0&&w(e,"main",[[t,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,o){const c=t.__qtouchswipe;c!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&c.end(),c.handler=o.value),c.direction=K(o.modifiers))},beforeUnmount(t){const o=t.__qtouchswipe;o!==void 0&&(D(o,"main"),D(o,"temp"),b.is.firefox===!0&&E(t,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete t.__qtouchswipe)}});const le={name:{required:!0},disable:Boolean},X={setup(t,{slots:o}){return()=>C("div",{class:"q-panel scroll",role:"tabpanel"},z(o.default))}},ce={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},de=["update:modelValue","before-transition","transition"];function pe(){const{props:t,emit:o,proxy:c}=G(),{getCacheWithFn:d}=ne();let r,e;const i=M(null),l=M(null);function f(n){const a=t.vertical===!0?"up":"left";x((c.$q.lang.rtl===!0?-1:1)*(n.direction===a?1:-1))}const h=m(()=>[[oe,f,void 0,{horizontal:t.vertical!==!0,vertical:t.vertical,mouse:!0}]]),u=m(()=>t.transitionPrev||`slide-${t.vertical===!0?"down":"right"}`),y=m(()=>t.transitionNext||`slide-${t.vertical===!0?"up":"left"}`),s=m(()=>`--q-transition-duration: ${t.transitionDuration}ms`),v=m(()=>typeof t.modelValue=="string"||typeof t.modelValue=="number"?t.modelValue:String(t.modelValue)),g=m(()=>({include:t.keepAliveInclude,exclude:t.keepAliveExclude,max:t.keepAliveMax})),A=m(()=>t.keepAliveInclude!==void 0||t.keepAliveExclude!==void 0);J(()=>t.modelValue,(n,a)=>{const p=S(n)===!0?q(n):-1;e!==!0&&B(p===-1?0:p<q(a)?-1:1),i.value!==p&&(i.value=p,o("before-transition",n,a),H(()=>{o("transition",n,a)}))});function P(){x(1)}function V(){x(-1)}function _(n){o("update:modelValue",n)}function S(n){return n!=null&&n!==""}function q(n){return r.findIndex(a=>a.props.name===n&&a.props.disable!==""&&a.props.disable!==!0)}function Y(){return r.filter(n=>n.props.disable!==""&&n.props.disable!==!0)}function B(n){const a=n!==0&&t.animated===!0&&i.value!==-1?"q-transition--"+(n===-1?u.value:y.value):null;l.value!==a&&(l.value=a)}function x(n,a=i.value){let p=a+n;for(;p>-1&&p<r.length;){const k=r[p];if(k!==void 0&&k.props.disable!==""&&k.props.disable!==!0){B(n),e=!0,o("update:modelValue",k.props.name),setTimeout(()=>{e=!1});return}p+=n}t.infinite===!0&&r.length>0&&a!==-1&&a!==r.length&&x(n,n===-1?r.length:-1)}function N(){const n=q(t.modelValue);return i.value!==n&&(i.value=n),!0}function I(){const n=S(t.modelValue)===!0&&N()&&r[i.value];return t.keepAlive===!0?[C(ee,g.value,[C(A.value===!0?d(v.value,()=>({...X,name:v.value})):X,{key:v.value,style:s.value},()=>n)])]:[C("div",{class:"q-panel scroll",style:s.value,key:v.value,role:"tabpanel"},[n])]}function F(){if(r.length!==0)return t.animated===!0?[C(Q,{name:l.value},I)]:I()}function W(n){return r=Z(z(n.default,[])).filter(a=>a.props!==null&&a.props.slot===void 0&&S(a.props.name)===!0),r.length}function O(){return r}return Object.assign(c,{next:P,previous:V,goTo:_}),{panelIndex:i,panelDirectives:h,updatePanelsList:W,updatePanelIndex:N,getPanelContent:F,getEnabledPanels:Y,getPanels:O,isValidPanelName:S,keepAliveProps:g,needsUniqueKeepAliveWrapper:A,goToPanelByOffset:x,goToPanel:_,nextPanel:P,previousPanel:V}}export{ce as a,de as b,pe as c,le as u};