import{x as Ge,br as Je,bs as At,bt as Mt,bu as zt,r as F,aS as Et,aH as qe,Q as ne,aF as vt,w as N,o as Qt,K as Te,g as Re,aK as Ut,N as Ue,bv as mt,aD as Xt,G as Yt,bc as Gt,a4 as Jt,a5 as Zt,bd as el,c as V,a6 as tl,aW as ll,aX as nl,a7 as ul,be as ol,bw as il,bx as al,aJ as rl,by as sl,bz as ht,M as cl,bA as dl,h as A,B as fl,Y as vl,bB as ml,bn as hl,bC as gl,aL as me,L as Sl,aB as yl,f as bl,ax as wl,aw as xl,a$ as Cl,bD as Vl,bE as gt,aU as ze,a0 as pl,$ as kl,a3 as Al,bF as Ml,aI as pe,aT as zl,aa as El,b3 as ql,as as Tl,I as Ol}from"./index.744ddfee.js";import{Q as Fl}from"./QChip.3142caef.js";import{Q as Hl}from"./QItemLabel.c3909d74.js";import{c as Il}from"./selection.96b055eb.js";import{r as Xe}from"./rtl.8137048b.js";import{n as St}from"./format.ec2e0666.js";var Bl=Ge({name:"QField",inheritAttrs:!1,props:Je,emits:At,setup(){return Mt(zt())}});const Ll={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Pl({showing:e,avoidEmit:l,configureAnchorEl:u}){const{props:n,proxy:r,emit:o}=Re(),s=F(null);let g=null;function h(i){return s.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const y={};u===void 0&&(Object.assign(y,{hide(i){r.hide(i)},toggle(i){r.toggle(i),i.qAnchorHandled=!0},toggleKey(i){Et(i,13)===!0&&y.toggle(i)},contextClick(i){r.hide(i),qe(i),ne(()=>{r.show(i),i.qAnchorHandled=!0})},prevent:qe,mobileTouch(i){if(y.mobileCleanup(i),h(i)!==!0)return;r.hide(i),s.value.classList.add("non-selectable");const q=i.target;vt(y,"anchor",[[q,"touchmove","mobileCleanup","passive"],[q,"touchend","mobileCleanup","passive"],[q,"touchcancel","mobileCleanup","passive"],[s.value,"contextmenu","prevent","notPassive"]]),g=setTimeout(()=>{g=null,r.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){s.value.classList.remove("non-selectable"),g!==null&&(clearTimeout(g),g=null),e.value===!0&&i!==void 0&&Il()}}),u=function(i=n.contextMenu){if(n.noParentEvent===!0||s.value===null)return;let q;i===!0?r.$q.platform.is.mobile===!0?q=[[s.value,"touchstart","mobileTouch","passive"]]:q=[[s.value,"mousedown","hide","passive"],[s.value,"contextmenu","contextClick","notPassive"]]:q=[[s.value,"click","toggle","passive"],[s.value,"keyup","toggleKey","passive"]],vt(y,"anchor",q)});function d(){Ut(y,"anchor")}function C(i){for(s.value=i;s.value.classList.contains("q-anchor--skip");)s.value=s.value.parentNode;u()}function k(){if(n.target===!1||n.target===""||r.$el.parentNode===null)s.value=null;else if(n.target===!0)C(r.$el.parentNode);else{let i=n.target;if(typeof n.target=="string")try{i=document.querySelector(n.target)}catch{i=void 0}i!=null?(s.value=i.$el||i,u()):(s.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return N(()=>n.contextMenu,i=>{s.value!==null&&(d(),u(i))}),N(()=>n.target,()=>{s.value!==null&&d(),k()}),N(()=>n.noParentEvent,i=>{s.value!==null&&(i===!0?d():u())}),Qt(()=>{k(),l!==!0&&n.modelValue===!0&&s.value===null&&o("update:modelValue",!1)}),Te(()=>{g!==null&&clearTimeout(g),d()}),{anchorEl:s,canShow:h,anchorEvents:y}}function Rl(e,l){const u=F(null);let n;function r(g,h){const y=`${h!==void 0?"add":"remove"}EventListener`,d=h!==void 0?h:n;g!==window&&g[y]("scroll",d,Ue.passive),window[y]("scroll",d,Ue.passive),n=h}function o(){u.value!==null&&(r(u.value),u.value=null)}const s=N(()=>e.noParentEvent,()=>{u.value!==null&&(o(),l())});return Te(s),{localScrollTarget:u,unconfigureScrollTarget:o,changeScrollEvent:r}}const{notPassiveCapture:Le}=Ue,he=[];function Pe(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let u=mt.length-1;for(;u>=0;){const n=mt[u].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;u--}for(let n=he.length-1;n>=0;n--){const r=he[n];if((r.anchorEl.value===null||r.anchorEl.value.contains(l)===!1)&&(l===document.body||r.innerRef.value!==null&&r.innerRef.value.contains(l)===!1))e.qClickOutside=!0,r.onClickOutside(e);else return}}function _l(e){he.push(e),he.length===1&&(document.addEventListener("mousedown",Pe,Le),document.addEventListener("touchstart",Pe,Le))}function yt(e){const l=he.findIndex(u=>u===e);l>-1&&(he.splice(l,1),he.length===0&&(document.removeEventListener("mousedown",Pe,Le),document.removeEventListener("touchstart",Pe,Le)))}let bt,wt;function xt(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Dl(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Ye={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Ye[`${e}#ltr`]=e,Ye[`${e}#rtl`]=e});function Ct(e,l){const u=e.split(" ");return{vertical:u[0],horizontal:Ye[`${u[1]}#${l===!0?"rtl":"ltr"}`]}}function Wl(e,l){let{top:u,left:n,right:r,bottom:o,width:s,height:g}=e.getBoundingClientRect();return l!==void 0&&(u-=l[1],n-=l[0],o+=l[1],r+=l[0],s+=l[0],g+=l[1]),{top:u,bottom:o,height:g,left:n,right:r,width:s,middle:n+(r-n)/2,center:u+(o-u)/2}}function $l(e,l,u){let{top:n,left:r}=e.getBoundingClientRect();return n+=l.top,r+=l.left,u!==void 0&&(n+=u[1],r+=u[0]),{top:n,bottom:n+1,height:1,left:r,right:r+1,width:1,middle:r,center:n}}function Kl(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Vt(e,l,u){return{top:e[u.anchorOrigin.vertical]-l[u.selfOrigin.vertical],left:e[u.anchorOrigin.horizontal]-l[u.selfOrigin.horizontal]}}function Nl(e){if(Xt.is.ios===!0&&window.visualViewport!==void 0){const g=document.body.style,{offsetLeft:h,offsetTop:y}=window.visualViewport;h!==bt&&(g.setProperty("--q-pe-left",h+"px"),bt=h),y!==wt&&(g.setProperty("--q-pe-top",y+"px"),wt=y)}const{scrollLeft:l,scrollTop:u}=e.el,n=e.absoluteOffset===void 0?Wl(e.anchorEl,e.cover===!0?[0,0]:e.offset):$l(e.anchorEl,e.absoluteOffset,e.offset);let r={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(r.minWidth=n.width+"px",e.cover===!0&&(r.minHeight=n.height+"px")),Object.assign(e.el.style,r);const o=Kl(e.el);let s=Vt(n,o,e);if(e.absoluteOffset===void 0||e.offset===void 0)je(s,n,o,e.anchorOrigin,e.selfOrigin);else{const{top:g,left:h}=s;je(s,n,o,e.anchorOrigin,e.selfOrigin);let y=!1;if(s.top!==g){y=!0;const d=2*e.offset[1];n.center=n.top-=d,n.bottom-=d+2}if(s.left!==h){y=!0;const d=2*e.offset[0];n.middle=n.left-=d,n.right-=d+2}y===!0&&(s=Vt(n,o,e),je(s,n,o,e.anchorOrigin,e.selfOrigin))}r={top:s.top+"px",left:s.left+"px"},s.maxHeight!==void 0&&(r.maxHeight=s.maxHeight+"px",n.height>s.maxHeight&&(r.minHeight=r.maxHeight)),s.maxWidth!==void 0&&(r.maxWidth=s.maxWidth+"px",n.width>s.maxWidth&&(r.minWidth=r.maxWidth)),Object.assign(e.el.style,r),e.el.scrollTop!==u&&(e.el.scrollTop=u),e.el.scrollLeft!==l&&(e.el.scrollLeft=l)}function je(e,l,u,n,r){const o=u.bottom,s=u.right,g=Yt(),h=window.innerHeight-g,y=document.body.clientWidth;if(e.top<0||e.top+o>h)if(r.vertical==="center")e.top=l[n.vertical]>h/2?Math.max(0,h-o):0,e.maxHeight=Math.min(o,h);else if(l[n.vertical]>h/2){const d=Math.min(h,n.vertical==="center"?l.center:n.vertical===r.vertical?l.bottom:l.top);e.maxHeight=Math.min(o,d),e.top=Math.max(0,d-o)}else e.top=Math.max(0,n.vertical==="center"?l.center:n.vertical===r.vertical?l.top:l.bottom),e.maxHeight=Math.min(o,h-e.top);if(e.left<0||e.left+s>y)if(e.maxWidth=Math.min(s,y),r.horizontal==="middle")e.left=l[n.horizontal]>y/2?Math.max(0,y-s):0;else if(l[n.horizontal]>y/2){const d=Math.min(y,n.horizontal==="middle"?l.middle:n.horizontal===r.horizontal?l.right:l.left);e.maxWidth=Math.min(s,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?l.middle:n.horizontal===r.horizontal?l.left:l.right),e.maxWidth=Math.min(s,y-e.left)}var jl=Ge({name:"QMenu",inheritAttrs:!1,props:{...Ll,...Gt,...Jt,...Zt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:xt},self:{type:String,validator:xt},offset:{type:Array,validator:Dl},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...el,"click","escapeKey"],setup(e,{slots:l,emit:u,attrs:n}){let r=null,o,s,g;const h=Re(),{proxy:y}=h,{$q:d}=y,C=F(null),k=F(!1),i=V(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),q=tl(e,d),{registerTick:B,removeTick:j}=ll(),{registerTimeout:Q}=nl(),{transitionProps:R,transitionStyle:U}=ul(e),{localScrollTarget:T,changeScrollEvent:O,unconfigureScrollTarget:X}=Rl(e,x),{anchorEl:K,canShow:ue}=Pl({showing:k}),{hide:oe}=ol({showing:k,canShow:ue,handleShow:m,handleHide:f,hideOnRouteChange:i,processOnMount:!0}),{showPortal:G,hidePortal:W,renderPortal:ie}=il(h,C,L,"menu"),te={anchorEl:K,innerRef:C,onClickOutside(a){if(e.persistent!==!0&&k.value===!0)return oe(a),(a.type==="touchstart"||a.target.classList.contains("q-dialog__backdrop"))&&me(a),!0}},ae=V(()=>Ct(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),le=V(()=>e.cover===!0?ae.value:Ct(e.self||"top start",d.lang.rtl)),J=V(()=>(e.square===!0?" q-menu--square":"")+(q.value===!0?" q-menu--dark q-dark":"")),ge=V(()=>e.autoClose===!0?{onClick:z}:{}),re=V(()=>k.value===!0&&e.persistent!==!0);N(re,a=>{a===!0?(ml(p),_l(te)):(ht(p),yt(te))});function Z(){hl(()=>{let a=C.value;a&&a.contains(document.activeElement)!==!0&&(a=a.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||a.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||a.querySelector("[autofocus], [data-autofocus]")||a,a.focus({preventScroll:!0}))})}function m(a){if(r=e.noRefocus===!1?document.activeElement:null,al(I),G(),x(),o=void 0,a!==void 0&&(e.touchPosition||e.contextMenu)){const P=rl(a);if(P.left!==void 0){const{top:se,left:ce}=K.value.getBoundingClientRect();o={left:P.left-ce,top:P.top-se}}}s===void 0&&(s=N(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,b)),e.noFocus!==!0&&document.activeElement.blur(),B(()=>{b(),e.noFocus!==!0&&Z()}),Q(()=>{d.platform.is.ios===!0&&(g=e.autoClose,C.value.click()),b(),G(!0),u("show",a)},e.transitionDuration)}function f(a){j(),W(),S(!0),r!==null&&(a===void 0||a.qClickOutside!==!0)&&(((a&&a.type.indexOf("key")===0?r.closest('[tabindex]:not([tabindex^="-"])'):void 0)||r).focus(),r=null),Q(()=>{W(!0),u("hide",a)},e.transitionDuration)}function S(a){o=void 0,s!==void 0&&(s(),s=void 0),(a===!0||k.value===!0)&&(sl(I),X(),yt(te),ht(p)),a!==!0&&(r=null)}function x(){(K.value!==null||e.scrollTarget!==void 0)&&(T.value=cl(K.value,e.scrollTarget),O(T.value,b))}function z(a){g!==!0?(dl(y,a),u("click",a)):g=!1}function I(a){re.value===!0&&e.noFocus!==!0&&gl(C.value,a.target)!==!0&&Z()}function p(a){u("escapeKey"),oe(a)}function b(){const a=C.value;a===null||K.value===null||Nl({el:a,offset:e.offset,anchorEl:K.value,anchorOrigin:ae.value,selfOrigin:le.value,absoluteOffset:o,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function L(){return A(vl,R.value,()=>k.value===!0?A("div",{role:"menu",...n,ref:C,tabindex:-1,class:["q-menu q-position-engine scroll"+J.value,n.class],style:[n.style,U.value],...ge.value},fl(l.default)):null)}return Te(S),Object.assign(y,{focus:Z,updatePosition:b}),ie}});const Y=1e3,Ql=["start","center","end","start-force","center-force","end-force"],qt=Array.prototype.filter,Ul=window.getComputedStyle(document.body).overflowAnchor===void 0?Sl:function(e,l){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const u=e.children||[];qt.call(u,r=>r.dataset&&r.dataset.qVsAnchor!==void 0).forEach(r=>{delete r.dataset.qVsAnchor});const n=u[l];n&&n.dataset&&(n.dataset.qVsAnchor="")}))};function ke(e,l){return e+l}function Qe(e,l,u,n,r,o,s,g){const h=e===window?document.scrollingElement||document.documentElement:e,y=r===!0?"offsetWidth":"offsetHeight",d={scrollStart:0,scrollViewSize:-s-g,scrollMaxSize:0,offsetStart:-s,offsetEnd:-g};if(r===!0?(e===window?(d.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,d.scrollViewSize+=document.documentElement.clientWidth):(d.scrollStart=h.scrollLeft,d.scrollViewSize+=h.clientWidth),d.scrollMaxSize=h.scrollWidth,o===!0&&(d.scrollStart=(Xe===!0?d.scrollMaxSize-d.scrollViewSize:0)-d.scrollStart)):(e===window?(d.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,d.scrollViewSize+=document.documentElement.clientHeight):(d.scrollStart=h.scrollTop,d.scrollViewSize+=h.clientHeight),d.scrollMaxSize=h.scrollHeight),u!==null)for(let C=u.previousElementSibling;C!==null;C=C.previousElementSibling)C.classList.contains("q-virtual-scroll--skip")===!1&&(d.offsetStart+=C[y]);if(n!==null)for(let C=n.nextElementSibling;C!==null;C=C.nextElementSibling)C.classList.contains("q-virtual-scroll--skip")===!1&&(d.offsetEnd+=C[y]);if(l!==e){const C=h.getBoundingClientRect(),k=l.getBoundingClientRect();r===!0?(d.offsetStart+=k.left-C.left,d.offsetEnd-=k.width):(d.offsetStart+=k.top-C.top,d.offsetEnd-=k.height),e!==window&&(d.offsetStart+=d.scrollStart),d.offsetEnd+=d.scrollMaxSize-d.offsetStart}return d}function pt(e,l,u,n){l==="end"&&(l=(e===window?document.body:e)[u===!0?"scrollWidth":"scrollHeight"]),e===window?u===!0?(n===!0&&(l=(Xe===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-l),window.scrollTo(l,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,l):u===!0?(n===!0&&(l=(Xe===!0?e.scrollWidth-e.offsetWidth:0)-l),e.scrollLeft=l):e.scrollTop=l}function Ee(e,l,u,n){if(u>=n)return 0;const r=l.length,o=Math.floor(u/Y),s=Math.floor((n-1)/Y)+1;let g=e.slice(o,s).reduce(ke,0);return u%Y!==0&&(g-=l.slice(o*Y,u).reduce(ke,0)),n%Y!==0&&n!==r&&(g-=l.slice(n,s*Y).reduce(ke,0)),g}const Xl={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Yl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Xl};function Gl({virtualScrollLength:e,getVirtualScrollTarget:l,getVirtualScrollEl:u,virtualScrollItemSizeComputed:n}){const r=Re(),{props:o,emit:s,proxy:g}=r,{$q:h}=g;let y,d,C,k=[],i;const q=F(0),B=F(0),j=F({}),Q=F(null),R=F(null),U=F(null),T=F({from:0,to:0}),O=V(()=>o.tableColspan!==void 0?o.tableColspan:100);n===void 0&&(n=V(()=>o.virtualScrollItemSize));const X=V(()=>n.value+";"+o.virtualScrollHorizontal),K=V(()=>X.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);N(K,()=>{J()}),N(X,ue);function ue(){le(d,!0)}function oe(f){le(f===void 0?d:f)}function G(f,S){const x=l();if(x==null||x.nodeType===8)return;const z=Qe(x,u(),Q.value,R.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);C!==z.scrollViewSize&&J(z.scrollViewSize),ie(x,z,Math.min(e.value-1,Math.max(0,parseInt(f,10)||0)),0,Ql.indexOf(S)>-1?S:d>-1&&f>d?"end":"start")}function W(){const f=l();if(f==null||f.nodeType===8)return;const S=Qe(f,u(),Q.value,R.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),x=e.value-1,z=S.scrollMaxSize-S.offsetStart-S.offsetEnd-B.value;if(y===S.scrollStart)return;if(S.scrollMaxSize<=0){ie(f,S,0,0);return}C!==S.scrollViewSize&&J(S.scrollViewSize),te(T.value.from);const I=Math.floor(S.scrollMaxSize-Math.max(S.scrollViewSize,S.offsetEnd)-Math.min(i[x],S.scrollViewSize/2));if(I>0&&Math.ceil(S.scrollStart)>=I){ie(f,S,x,S.scrollMaxSize-S.offsetEnd-k.reduce(ke,0));return}let p=0,b=S.scrollStart-S.offsetStart,L=b;if(b<=z&&b+S.scrollViewSize>=q.value)b-=q.value,p=T.value.from,L=b;else for(let a=0;b>=k[a]&&p<x;a++)b-=k[a],p+=Y;for(;b>0&&p<x;)b-=i[p],b>-S.scrollViewSize?(p++,L=b):L=i[p]+b;ie(f,S,p,L)}function ie(f,S,x,z,I){const p=typeof I=="string"&&I.indexOf("-force")>-1,b=p===!0?I.replace("-force",""):I,L=b!==void 0?b:"start";let a=Math.max(0,x-j.value[L]),P=a+j.value.total;P>e.value&&(P=e.value,a=Math.max(0,P-j.value.total)),y=S.scrollStart;const se=a!==T.value.from||P!==T.value.to;if(se===!1&&b===void 0){re(x);return}const{activeElement:ce}=document,ee=U.value;se===!0&&ee!==null&&ee!==ce&&ee.contains(ce)===!0&&(ee.addEventListener("focusout",ae),setTimeout(()=>{ee!==null&&ee.removeEventListener("focusout",ae)})),Ul(ee,x-a);const Oe=b!==void 0?i.slice(a,x).reduce(ke,0):0;if(se===!0){const de=P>=T.value.from&&a<=T.value.to?T.value.to:P;T.value={from:a,to:de},q.value=Ee(k,i,0,a),B.value=Ee(k,i,P,e.value),requestAnimationFrame(()=>{T.value.to!==P&&y===S.scrollStart&&(T.value={from:T.value.from,to:P},B.value=Ee(k,i,P,e.value))})}requestAnimationFrame(()=>{if(y!==S.scrollStart)return;se===!0&&te(a);const de=i.slice(a,x).reduce(ke,0),Se=de+S.offsetStart+q.value,Fe=Se+i[x];let Ae=Se+z;if(b!==void 0){const _e=de-Oe,D=S.scrollStart+_e;Ae=p!==!0&&D<Se&&Fe<D+S.scrollViewSize?D:b==="end"?Fe-S.scrollViewSize:Se-(b==="start"?0:Math.round((S.scrollViewSize-i[x])/2))}y=Ae,pt(f,Ae,o.virtualScrollHorizontal,h.lang.rtl),re(x)})}function te(f){const S=U.value;if(S){const x=qt.call(S.children,a=>a.classList&&a.classList.contains("q-virtual-scroll--skip")===!1),z=x.length,I=o.virtualScrollHorizontal===!0?a=>a.getBoundingClientRect().width:a=>a.offsetHeight;let p=f,b,L;for(let a=0;a<z;){for(b=I(x[a]),a++;a<z&&x[a].classList.contains("q-virtual-scroll--with-prev")===!0;)b+=I(x[a]),a++;L=b-i[p],L!==0&&(i[p]+=L,k[Math.floor(p/Y)]+=L),p++}}}function ae(){U.value!==null&&U.value!==void 0&&U.value.focus()}function le(f,S){const x=1*n.value;(S===!0||Array.isArray(i)===!1)&&(i=[]);const z=i.length;i.length=e.value;for(let p=e.value-1;p>=z;p--)i[p]=x;const I=Math.floor((e.value-1)/Y);k=[];for(let p=0;p<=I;p++){let b=0;const L=Math.min((p+1)*Y,e.value);for(let a=p*Y;a<L;a++)b+=i[a];k.push(b)}d=-1,y=void 0,q.value=Ee(k,i,0,T.value.from),B.value=Ee(k,i,T.value.to,e.value),f>=0?(te(T.value.from),ne(()=>{G(f)})):Z()}function J(f){if(f===void 0&&typeof window!="undefined"){const b=l();b!=null&&b.nodeType!==8&&(f=Qe(b,u(),Q.value,R.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}C=f;const S=parseFloat(o.virtualScrollSliceRatioBefore)||0,x=parseFloat(o.virtualScrollSliceRatioAfter)||0,z=1+S+x,I=f===void 0||f<=0?1:Math.ceil(f/n.value),p=Math.max(1,I,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/z));j.value={total:Math.ceil(p*z),start:Math.ceil(p*S),center:Math.ceil(p*(.5+S)),end:Math.ceil(p*(1+S)),view:I}}function ge(f,S){const x=o.virtualScrollHorizontal===!0?"width":"height",z={["--q-virtual-scroll-item-"+x]:n.value+"px"};return[f==="tbody"?A(f,{class:"q-virtual-scroll__padding",key:"before",ref:Q},[A("tr",[A("td",{style:{[x]:`${q.value}px`,...z},colspan:O.value})])]):A(f,{class:"q-virtual-scroll__padding",key:"before",ref:Q,style:{[x]:`${q.value}px`,...z}}),A(f,{class:"q-virtual-scroll__content",key:"content",ref:U,tabindex:-1},S.flat()),f==="tbody"?A(f,{class:"q-virtual-scroll__padding",key:"after",ref:R},[A("tr",[A("td",{style:{[x]:`${B.value}px`,...z},colspan:O.value})])]):A(f,{class:"q-virtual-scroll__padding",key:"after",ref:R,style:{[x]:`${B.value}px`,...z}})]}function re(f){d!==f&&(o.onVirtualScroll!==void 0&&s("virtualScroll",{index:f,from:T.value.from,to:T.value.to-1,direction:f<d?"decrease":"increase",ref:g}),d=f)}J();const Z=yl(W,h.platform.is.ios===!0?120:35);bl(()=>{J()});let m=!1;return wl(()=>{m=!0}),xl(()=>{if(m!==!0)return;const f=l();y!==void 0&&f!==void 0&&f!==null&&f.nodeType!==8?pt(f,y,o.virtualScrollHorizontal,h.lang.rtl):G(d)}),Te(()=>{Z.cancel()}),Object.assign(g,{scrollTo:G,reset:ue,refresh:oe}),{virtualScrollSliceRange:T,virtualScrollSliceSizeComputed:j,setVirtualScrollSize:J,onVirtualScrollEvt:Z,localResetVirtualScroll:le,padVirtualScroll:ge,scrollTo:G,reset:ue,refresh:oe}}const kt=e=>["add","add-unique","toggle"].includes(e),Jl=".*+?^${}()|[]\\",Zl=Object.keys(Je);var an=Ge({name:"QSelect",inheritAttrs:!1,props:{...Yl,...Cl,...Je,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:kt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...At,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:l,emit:u}){const{proxy:n}=Re(),{$q:r}=n,o=F(!1),s=F(!1),g=F(-1),h=F(""),y=F(!1),d=F(!1);let C=null,k,i,q,B=null,j,Q,R,U;const T=F(null),O=F(null),X=F(null),K=F(null),ue=F(null),oe=Vl(e),G=Ml(rt),W=V(()=>Array.isArray(e.options)?e.options.length:0),ie=V(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:te,virtualScrollSliceSizeComputed:ae,localResetVirtualScroll:le,padVirtualScroll:J,onVirtualScrollEvt:ge,scrollTo:re,setVirtualScrollSize:Z}=Gl({virtualScrollLength:W,getVirtualScrollTarget:Ht,getVirtualScrollEl:it,virtualScrollItemSizeComputed:ie}),m=zt(),f=V(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,v=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const c=e.mapOptions===!0&&k!==void 0?k:[],w=v.map(E=>Ft(E,c));return e.modelValue===null&&t===!0?w.filter(E=>E!==null):w}return v}),S=V(()=>{const t={};return Zl.forEach(v=>{const c=e[v];c!==void 0&&(t[v]=c)}),t}),x=V(()=>e.optionsDark===null?m.isDark.value:e.optionsDark),z=V(()=>gt(f.value)),I=V(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||f.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),p=V(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),b=V(()=>W.value===0),L=V(()=>f.value.map(t=>$.value(t)).join(", ")),a=V(()=>e.displayValue!==void 0?e.displayValue:L.value),P=V(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),se=V(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||f.value.some(P.value))),ce=V(()=>m.focused.value===!0?e.tabindex:-1),ee=V(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-controls":`${m.targetUid.value}_lb`};return g.value>=0&&(t["aria-activedescendant"]=`${m.targetUid.value}_${g.value}`),t}),Oe=V(()=>({id:`${m.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),de=V(()=>f.value.map((t,v)=>({index:v,opt:t,html:P.value(t),selected:!0,removeAtIndex:Ot,toggleOption:fe,tabindex:ce.value}))),Se=V(()=>{if(W.value===0)return[];const{from:t,to:v}=te.value;return e.options.slice(t,v).map((c,w)=>{const E=ye.value(c)===!0,M=t+w,H={clickable:!0,active:!1,activeClass:_e.value,manualFocus:!0,focused:!1,disable:E,tabindex:-1,dense:e.optionsDense,dark:x.value,role:"option",id:`${m.targetUid.value}_${M}`,onClick:()=>{fe(c)}};return E!==!0&&($e(c)===!0&&(H.active=!0),g.value===M&&(H.focused=!0),H["aria-selected"]=H.active===!0?"true":"false",r.platform.is.desktop===!0&&(H.onMousemove=()=>{o.value===!0&&be(M)})),{index:M,opt:c,html:P.value(c),label:$.value(c),selected:H.active,focused:H.focused,toggleOption:fe,setOptionIndex:be,itemProps:H}})}),Fe=V(()=>e.dropdownIcon!==void 0?e.dropdownIcon:r.iconSet.arrow.dropdown),Ae=V(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),_e=V(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),D=V(()=>We(e.optionValue,"value")),$=V(()=>We(e.optionLabel,"label")),ye=V(()=>We(e.optionDisable,"disable")),He=V(()=>f.value.map(t=>D.value(t))),Tt=V(()=>{const t={onInput:rt,onChange:G,onKeydown:ot,onKeyup:nt,onKeypress:ut,onFocus:tt,onClick(v){i===!0&&pe(v)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=G,t});N(f,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&m.innerLoading.value!==!0&&(s.value!==!0&&o.value!==!0||z.value!==!0)&&(q!==!0&&Ve(),(s.value===!0||o.value===!0)&&we(""))},{immediate:!0}),N(()=>e.fillInput,Ve),N(o,Ke),N(W,jt);function Ze(t){return e.emitValue===!0?D.value(t):t}function De(t){if(t>-1&&t<f.value.length)if(e.multiple===!0){const v=e.modelValue.slice();u("remove",{index:t,value:v.splice(t,1)[0]}),u("update:modelValue",v)}else u("update:modelValue",null)}function Ot(t){De(t),m.focus()}function et(t,v){const c=Ze(t);if(e.multiple!==!0){e.fillInput===!0&&Me($.value(t),!0,!0),u("update:modelValue",c);return}if(f.value.length===0){u("add",{index:0,value:c}),u("update:modelValue",e.multiple===!0?[c]:c);return}if(v===!0&&$e(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const w=e.modelValue.slice();u("add",{index:w.length,value:c}),w.push(c),u("update:modelValue",w)}function fe(t,v){if(m.editable.value!==!0||t===void 0||ye.value(t)===!0)return;const c=D.value(t);if(e.multiple!==!0){v!==!0&&(Me(e.fillInput===!0?$.value(t):"",!0,!0),ve()),O.value!==null&&O.value.focus(),(f.value.length===0||ze(D.value(f.value[0]),c)!==!0)&&u("update:modelValue",e.emitValue===!0?c:t);return}if((i!==!0||y.value===!0)&&m.focus(),tt(),f.value.length===0){const M=e.emitValue===!0?c:t;u("add",{index:0,value:M}),u("update:modelValue",e.multiple===!0?[M]:M);return}const w=e.modelValue.slice(),E=He.value.findIndex(M=>ze(M,c));if(E>-1)u("remove",{index:E,value:w.splice(E,1)[0]});else{if(e.maxValues!==void 0&&w.length>=e.maxValues)return;const M=e.emitValue===!0?c:t;u("add",{index:w.length,value:M}),w.push(M)}u("update:modelValue",w)}function be(t){if(r.platform.is.desktop!==!0)return;const v=t>-1&&t<W.value?t:-1;g.value!==v&&(g.value=v)}function Ie(t=1,v){if(o.value===!0){let c=g.value;do c=St(c+t,-1,W.value-1);while(c!==-1&&c!==g.value&&ye.value(e.options[c])===!0);g.value!==c&&(be(c),re(c),v!==!0&&e.useInput===!0&&e.fillInput===!0&&Be(c>=0?$.value(e.options[c]):j))}}function Ft(t,v){const c=w=>ze(D.value(w),t);return e.options.find(c)||v.find(c)||t}function We(t,v){const c=t!==void 0?t:v;return typeof c=="function"?c:w=>w!==null&&typeof w=="object"&&c in w?w[c]:w}function $e(t){const v=D.value(t);return He.value.find(c=>ze(c,v))!==void 0}function tt(t){e.useInput===!0&&O.value!==null&&(t===void 0||O.value===t.target&&t.target.value===L.value)&&O.value.select()}function lt(t){Et(t,27)===!0&&o.value===!0&&(pe(t),ve(),Ve()),u("keyup",t)}function nt(t){const{value:v}=t.target;if(t.keyCode!==void 0){lt(t);return}if(t.target.value="",C!==null&&(clearTimeout(C),C=null),Ve(),typeof v=="string"&&v.length>0){const c=v.toLocaleLowerCase(),w=M=>{const H=e.options.find(_=>M.value(_).toLocaleLowerCase()===c);return H===void 0?!1:(f.value.indexOf(H)===-1?fe(H):ve(),!0)},E=M=>{w(D)!==!0&&(w($)===!0||M===!0||we(v,!0,()=>E(!0)))};E()}else m.clearValue(t)}function ut(t){u("keypress",t)}function ot(t){if(u("keydown",t),zl(t)===!0)return;const v=h.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),c=t.shiftKey!==!0&&e.multiple!==!0&&(g.value>-1||v===!0);if(t.keyCode===27){qe(t);return}if(t.keyCode===9&&c===!1){xe();return}if(t.target===void 0||t.target.id!==m.targetUid.value)return;if(t.keyCode===40&&m.innerLoading.value!==!0&&o.value===!1){me(t),Ce();return}if(t.keyCode===8&&e.hideSelected!==!0&&h.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?De(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&u("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(me(t),g.value=-1,Ie(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ae.value!==void 0&&(me(t),g.value=Math.max(-1,Math.min(W.value,g.value+(t.keyCode===33?-1:1)*ae.value.view)),Ie(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(me(t),Ie(t.keyCode===38?-1:1,e.multiple));const w=W.value;if((R===void 0||U<Date.now())&&(R=""),w>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||R.length>0)){o.value!==!0&&Ce(t);const E=t.key.toLocaleLowerCase(),M=R.length===1&&R[0]===E;U=Date.now()+1500,M===!1&&(me(t),R+=E);const H=new RegExp("^"+R.split("").map(Ne=>Jl.indexOf(Ne)>-1?"\\"+Ne:Ne).join(".*"),"i");let _=g.value;if(M===!0||_<0||H.test($.value(e.options[_]))!==!0)do _=St(_+1,-1,w-1);while(_!==g.value&&(ye.value(e.options[_])===!0||H.test($.value(e.options[_]))!==!0));g.value!==_&&ne(()=>{be(_),re(_),_>=0&&e.useInput===!0&&e.fillInput===!0&&Be($.value(e.options[_]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||R!=="")&&(t.keyCode!==9||c===!1))){if(t.keyCode!==9&&me(t),g.value>-1&&g.value<w){fe(e.options[g.value]);return}if(v===!0){const E=(M,H)=>{if(H){if(kt(H)!==!0)return}else H=e.newValueMode;if(M==null)return;Me("",e.multiple!==!0,!0),(H==="toggle"?fe:et)(M,H==="add-unique"),e.multiple!==!0&&(O.value!==null&&O.value.focus(),ve())};if(e.onNewValue!==void 0?u("newValue",h.value,E):E(h.value),e.multiple!==!0)return}o.value===!0?xe():m.innerLoading.value!==!0&&Ce()}}function it(){return i===!0?ue.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function Ht(){return it()}function It(){return e.hideSelected===!0?[]:l["selected-item"]!==void 0?de.value.map(t=>l["selected-item"](t)).slice():l.selected!==void 0?[].concat(l.selected()):e.useChips===!0?de.value.map((t,v)=>A(Fl,{key:"option-"+v,removable:m.editable.value===!0&&ye.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ce.value,onRemove(){t.removeAtIndex(v)}},()=>A("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[A("span",{[se.value===!0?"innerHTML":"textContent"]:a.value})]}function at(){if(b.value===!0)return l["no-option"]!==void 0?l["no-option"]({inputValue:h.value}):void 0;const t=l.option!==void 0?l.option:c=>A(Tl,{key:c.index,...c.itemProps},()=>A(ql,()=>A(Hl,()=>A("span",{[c.html===!0?"innerHTML":"textContent"]:c.label}))));let v=J("div",Se.value.map(t));return l["before-options"]!==void 0&&(v=l["before-options"]().concat(v)),Ol(l["after-options"],v)}function Bt(t,v){const c=v===!0?{...ee.value,...m.splitAttrs.attributes.value}:void 0,w={ref:v===!0?O:void 0,key:"i_t",class:I.value,style:e.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...c,id:v===!0?m.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Tt.value};return t!==!0&&i===!0&&(Array.isArray(w.class)===!0?w.class=[...w.class,"no-pointer-events"]:w.class+=" no-pointer-events"),A("input",w)}function rt(t){C!==null&&(clearTimeout(C),C=null),!(t&&t.target&&t.target.qComposing===!0)&&(Be(t.target.value||""),q=!0,j=h.value,m.focused.value!==!0&&(i!==!0||y.value===!0)&&m.focus(),e.onFilter!==void 0&&(C=setTimeout(()=>{C=null,we(h.value)},e.inputDebounce)))}function Be(t){h.value!==t&&(h.value=t,u("inputValue",t))}function Me(t,v,c){q=c!==!0,e.useInput===!0&&(Be(t),(v===!0||c!==!0)&&(j=t),v!==!0&&we(t))}function we(t,v,c){if(e.onFilter===void 0||v!==!0&&m.focused.value!==!0)return;m.innerLoading.value===!0?u("filterAbort"):(m.innerLoading.value=!0,d.value=!0),t!==""&&e.multiple!==!0&&f.value.length>0&&q!==!0&&t===$.value(f.value[0])&&(t="");const w=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);B!==null&&clearTimeout(B),B=w,u("filter",t,(E,M)=>{(v===!0||m.focused.value===!0)&&B===w&&(clearTimeout(B),typeof E=="function"&&E(),d.value=!1,ne(()=>{m.innerLoading.value=!1,m.editable.value===!0&&(v===!0?o.value===!0&&ve():o.value===!0?Ke(!0):o.value=!0),typeof M=="function"&&ne(()=>{M(n)}),typeof c=="function"&&ne(()=>{c(n)})}))},()=>{m.focused.value===!0&&B===w&&(clearTimeout(B),m.innerLoading.value=!1,d.value=!1),o.value===!0&&(o.value=!1)})}function Lt(){return A(jl,{ref:X,class:p.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&b.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:x.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:Ae.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Oe.value,onScrollPassive:ge,onBeforeShow:ct,onBeforeHide:Pt,onShow:Rt},at)}function Pt(t){dt(t),xe()}function Rt(){Z()}function _t(t){pe(t),O.value!==null&&O.value.focus(),y.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Dt(t){pe(t),ne(()=>{y.value=!1})}function Wt(){const t=[A(Bl,{class:`col-auto ${m.fieldClass.value}`,...S.value,for:m.targetUid.value,dark:x.value,square:!0,loading:d.value,itemAligned:!1,filled:!0,stackLabel:h.value.length>0,...m.splitAttrs.listeners.value,onFocus:_t,onBlur:Dt},{...l,rawControl:()=>m.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(A("div",{ref:ue,class:p.value+" scroll",style:e.popupContentStyle,...Oe.value,onClick:qe,onScrollPassive:ge},at())),A(El,{ref:K,modelValue:s.value,position:e.useInput===!0?"top":void 0,transitionShow:Q,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:ct,onBeforeHide:$t,onHide:Kt,onShow:Nt},()=>A("div",{class:"q-select__dialog"+(x.value===!0?" q-select__dialog--dark q-dark":"")+(y.value===!0?" q-select__dialog--focused":"")},t))}function $t(t){dt(t),K.value!==null&&K.value.__updateRefocusTarget(m.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),m.focused.value=!1}function Kt(t){ve(),m.focused.value===!1&&u("blur",t),Ve()}function Nt(){const t=document.activeElement;(t===null||t.id!==m.targetUid.value)&&O.value!==null&&O.value!==t&&O.value.focus(),Z()}function xe(){s.value!==!0&&(g.value=-1,o.value===!0&&(o.value=!1),m.focused.value===!1&&(B!==null&&(clearTimeout(B),B=null),m.innerLoading.value===!0&&(u("filterAbort"),m.innerLoading.value=!1,d.value=!1)))}function Ce(t){m.editable.value===!0&&(i===!0?(m.onControlFocusin(t),s.value=!0,ne(()=>{m.focus()})):m.focus(),e.onFilter!==void 0?we(h.value):(b.value!==!0||l["no-option"]!==void 0)&&(o.value=!0))}function ve(){s.value=!1,xe()}function Ve(){e.useInput===!0&&Me(e.multiple!==!0&&e.fillInput===!0&&f.value.length>0&&$.value(f.value[0])||"",!0,!0)}function Ke(t){let v=-1;if(t===!0){if(f.value.length>0){const c=D.value(f.value[0]);v=e.options.findIndex(w=>ze(D.value(w),c))}le(v)}be(v)}function jt(t,v){o.value===!0&&m.innerLoading.value===!1&&(le(-1,!0),ne(()=>{o.value===!0&&m.innerLoading.value===!1&&(t>v?le():Ke(!0))}))}function st(){s.value===!1&&X.value!==null&&X.value.updatePosition()}function ct(t){t!==void 0&&pe(t),u("popupShow",t),m.hasPopupOpen=!0,m.onControlFocusin(t)}function dt(t){t!==void 0&&pe(t),u("popupHide",t),m.hasPopupOpen=!1,m.onControlFocusout(t)}function ft(){i=r.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?l["no-option"]!==void 0||e.onFilter!==void 0||b.value===!1:!0),Q=r.platform.is.ios===!0&&i===!0&&e.useInput===!0?"fade":e.transitionShow}return pl(ft),kl(st),ft(),Te(()=>{C!==null&&clearTimeout(C)}),Object.assign(n,{showPopup:Ce,hidePopup:ve,removeAtIndex:De,add:et,toggleOption:fe,getOptionIndex:()=>g.value,setOptionIndex:be,moveOptionSelection:Ie,filter:we,updateMenuPosition:st,updateInputValue:Me,isOptionSelected:$e,getEmittingOptionValue:Ze,isOptionDisabled:(...t)=>ye.value.apply(null,t)===!0,getOptionValue:(...t)=>D.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(m,{innerValue:f,fieldClass:V(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:T,targetRef:O,hasValue:z,showPopup:Ce,floatingLabel:V(()=>e.hideSelected!==!0&&z.value===!0||typeof h.value=="number"||h.value.length>0||gt(e.displayValue)),getControlChild:()=>{if(m.editable.value!==!1&&(s.value===!0||b.value!==!0||l["no-option"]!==void 0))return i===!0?Wt():Lt();m.hasPopupOpen===!0&&(m.hasPopupOpen=!1)},controlEvents:{onFocusin(t){m.onControlFocusin(t)},onFocusout(t){m.onControlFocusout(t,()=>{Ve(),xe()})},onClick(t){if(qe(t),i!==!0&&o.value===!0){xe(),O.value!==null&&O.value.focus();return}Ce(t)}},getControl:t=>{const v=It(),c=t===!0||s.value!==!0||i!==!0;if(e.useInput===!0)v.push(Bt(t,c));else if(m.editable.value===!0){const E=c===!0?ee.value:void 0;v.push(A("input",{ref:c===!0?O:void 0,key:"d_t",class:"q-select__focus-target",id:c===!0?m.targetUid.value:void 0,value:a.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...E,onKeydown:ot,onKeyup:lt,onKeypress:ut})),c===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&v.push(A("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:nt}))}if(oe.value!==void 0&&e.disable!==!0&&He.value.length>0){const E=He.value.map(M=>A("option",{value:M,selected:!0}));v.push(A("select",{class:"hidden",name:oe.value,multiple:e.multiple},E))}const w=e.useInput===!0||c!==!0?void 0:m.splitAttrs.attributes.value;return A("div",{class:"q-field__native row items-center",...w},v)},getInnerAppend:()=>e.loading!==!0&&d.value!==!0&&e.hideDropdownIcon!==!0?[A(Al,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:Fe.value})]:null}),Mt(m)}});export{an as Q,jl as a};
