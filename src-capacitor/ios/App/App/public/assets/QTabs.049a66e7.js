import{i as qe,r as w,c as f,J as ue,o as Se,aQ as ce,ai as xe,aq as Ie,h as g,aR as Le,aS as ke,aK as Ae,a2 as H,H as Be,g as ve,x as Me,aT as $e,aU as re,K as ie,w as P,y as Pe,aw as Ee,av as Fe,z as Ke,P as z,aV as Qe}from"./index.628e6afe.js";import{Q as We}from"./QResizeObserver.23b01bb0.js";import{r as Ve}from"./rtl.4b414a6d.js";let je=0;const Ue=["click","keydown"],Ge={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${je++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Je(e,A,R,v){const l=qe(ce,()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")}),{proxy:N}=ve(),B=w(null),E=w(null),F=w(null),q=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),d=f(()=>l.currentModel.value===e.name),S=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(d.value===!0?" q-tab--active"+(l.tabProps.value.activeClass?" "+l.tabProps.value.activeClass:"")+(l.tabProps.value.activeColor?` text-${l.tabProps.value.activeColor}`:"")+(l.tabProps.value.activeBgColor?` bg-${l.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&l.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||l.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(v!==void 0&&v.linkClass.value!==""?` ${v.linkClass.value}`:"")),x=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(l.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),M=f(()=>e.disable===!0||l.hasFocus.value===!0?-1:e.tabindex||0);function I(r,b){if(b!==!0&&B.value!==null&&B.value.focus(),e.disable!==!0){let m;if(v!==void 0)if(v.hasRouterLink.value===!0)m=()=>{r.__qNavigate=!0,l.avoidRouteWatcher=!0;const h=v.navigateToRouterLink(r);h===!1?l.avoidRouteWatcher=!1:h.then(T=>{l.avoidRouteWatcher=!1,T===void 0&&l.updateModel({name:e.name,fromRoute:!0})})};else{R("click",r);return}else m=()=>{l.updateModel({name:e.name,fromRoute:!1})};R("click",r,m),r.defaultPrevented!==!0&&m()}}function $(r){Le(r,[13,32])?I(r,!0):ke(r)!==!0&&r.keyCode>=35&&r.keyCode<=40&&r.altKey!==!0&&r.metaKey!==!0&&l.onKbdNavigate(r.keyCode,N.$el)===!0&&Ae(r),R("keydown",r)}function L(){const r=l.tabProps.value.narrowIndicator,b=[],m=g("div",{ref:F,class:["q-tab__indicator",l.tabProps.value.indicatorClass]});e.icon!==void 0&&b.push(g(H,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&b.push(g("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&b.push(e.alertIcon!==void 0?g(H,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):g("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),r===!0&&b.push(m);const h=[g("div",{class:"q-focus-helper",tabindex:-1,ref:B}),g("div",{class:x.value},Be(A.default,b))];return r===!1&&h.push(m),h}const C={name:f(()=>e.name),rootRef:E,tabIndicatorRef:F,routerProps:v};ue(()=>{l.unregisterTab(C),l.recalculateScroll()}),Se(()=>{l.registerTab(C),l.recalculateScroll()});function k(r,b){const m={ref:E,class:S.value,tabindex:M.value,role:"tab","aria-selected":d.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:I,onKeydown:$,...b};return xe(g(r,m,L()),[[Ie,q.value]])}return{renderTab:k,$tabs:l}}function ze(e,A,R){const v=R===!0?["left","right"]:["top","bottom"];return`absolute-${A===!0?v[0]:v[1]}${e?` text-${e}`:""}`}const He=["left","center","right","justify"],se=()=>{};var Xe=Me({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>He.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:A,emit:R}){const v=ve(),{proxy:{$q:l}}=v,{registerTick:N}=$e(),{registerTimeout:B,removeTimeout:E}=re(),{registerTimeout:F}=re(),q=w(null),d=w(null),S=w(e.modelValue),x=w(!1),M=w(!0),I=w(!1),$=w(!1),L=f(()=>l.platform.is.desktop===!0||e.mobileArrows===!0),C=[],k=w(!1);let r=!1,b,m,h,T=L.value===!0?Z:ie;const fe=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:ze(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),de=f(()=>`q-tabs__content--align-${x.value===!0?"left":$.value===!0?"justify":e.align}`),be=f(()=>`q-tabs row no-wrap items-center q-tabs--${x.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${L.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),he=f(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+de.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(l.platform.is.mobile===!0?" scroll":"")),K=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),Q=f(()=>e.vertical!==!0&&l.lang.rtl===!0),O=f(()=>Ve===!1&&Q.value===!0);P(Q,T),P(()=>e.modelValue,t=>{D({name:t,setCurrent:!0,skipEmit:!0})}),P(()=>e.outsideArrows,()=>{z(W())}),P(L,t=>{T=t===!0?Z:ie,z(W())});function D({name:t,setCurrent:a,skipEmit:n,fromRoute:s}){S.value!==t&&(n!==!0&&R("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(ge(S.value,t),S.value=t)),s!==void 0&&(r=s)}function W(){N(()=>{Qe(v)===!1&&Y({width:q.value.offsetWidth,height:q.value.offsetHeight})})}function Y(t){if(K.value===void 0||d.value===null)return;const a=t[K.value.container],n=Math.min(d.value[K.value.scroll],Array.prototype.reduce.call(d.value.children,(o,u)=>o+(u[K.value.content]||0),0)),s=a>0&&n>a;x.value!==s&&(x.value=s),s===!0&&z(T);const c=a<parseInt(e.breakpoint,10);$.value!==c&&($.value=c)}function ge(t,a){const n=t!=null&&t!==""?C.find(c=>c.name.value===t):null,s=a!=null&&a!==""?C.find(c=>c.name.value===a):null;if(n&&s){const c=n.tabIndicatorRef.value,o=s.tabIndicatorRef.value;clearTimeout(b),c.style.transition="none",c.style.transform="none",o.style.transition="none",o.style.transform="none";const u=c.getBoundingClientRect(),i=o.getBoundingClientRect();o.style.transform=e.vertical===!0?`translate3d(0,${u.top-i.top}px,0) scale3d(1,${i.height?u.height/i.height:1},1)`:`translate3d(${u.left-i.left}px,0,0) scale3d(${i.width?u.width/i.width:1},1,1)`,z(()=>{b=setTimeout(()=>{o.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",o.style.transform="none"},70)})}s&&x.value===!0&&V(s.rootRef.value)}function V(t){const{left:a,width:n,top:s,height:c}=d.value.getBoundingClientRect(),o=t.getBoundingClientRect();let u=e.vertical===!0?o.top-s:o.left-a;if(u<0){d.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(u),T();return}u+=e.vertical===!0?o.height-c:o.width-n,u>0&&(d.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(u),T())}function Z(){const t=d.value;if(t!==null){const a=t.getBoundingClientRect(),n=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);Q.value===!0?(M.value=Math.ceil(n+a.width)<t.scrollWidth-1,I.value=n>0):(M.value=n>0,I.value=e.vertical===!0?Math.ceil(n+a.height)<t.scrollHeight:Math.ceil(n+a.width)<t.scrollWidth)}}function p(t){y(),ae(t),m=setInterval(()=>{ae(t)===!0&&y()},5)}function ee(){p(O.value===!0?Number.MAX_SAFE_INTEGER:0)}function te(){p(O.value===!0?0:Number.MAX_SAFE_INTEGER)}function y(){clearInterval(m)}function me(t,a){const n=Array.prototype.filter.call(d.value.children,i=>i===a||i.matches&&i.matches(".q-tab.q-focusable")===!0),s=n.length;if(s===0)return;if(t===36)return V(n[0]),!0;if(t===35)return V(n[s-1]),!0;const c=t===(e.vertical===!0?38:37),o=t===(e.vertical===!0?40:39),u=c===!0?-1:o===!0?1:void 0;if(u!==void 0){const i=Q.value===!0?-1:1,_=n.indexOf(a)+u*i;return _>=0&&_<s&&(V(n[_]),n[_].focus({preventScroll:!0})),!0}}const we=f(()=>O.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function ae(t){const a=d.value,{get:n,set:s}=we.value;let c=!1,o=n(a);const u=t<o?-1:1;return o+=u*5,o<0?(c=!0,o=0):(u===-1&&o<=t||u===1&&o>=t)&&(c=!0,o=t),s(a,o),T(),c}function U(){return C.filter(t=>t.routerProps!==void 0&&t.routerProps.hasRouterLink.value===!0)}function Ce(){let t=null,a=r;const n={matchedLen:0,hrefLen:0,exact:!1,found:!1},{hash:s}=v.proxy.$route,c=S.value;let o=a===!0?se:i=>{c===i.name.value&&(a=!0,o=se)};const u=U();for(const i of u){const _=i.routerProps.exact.value===!0;if(i.routerProps[_===!0?"linkIsExactActive":"linkIsActive"].value!==!0||n.exact===!0&&_!==!0){o(i);continue}const G=i.routerProps.linkRoute.value,J=G.hash;if(_===!0){if(s===J){t=i.name.value;break}else if(s!==""&&J!==""){o(i);continue}}const X=G.matched.length,oe=G.href.length-J.length;if(X===n.matchedLen?oe>n.hrefLen:X>n.matchedLen){t=i.name.value,Object.assign(n,{matchedLen:X,hrefLen:oe,exact:_});continue}o(i)}(a===!0||t!==null)&&D({name:t,setCurrent:!0,fromRoute:!0})}function Te(t){if(E(),k.value!==!0&&q.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&q.value.contains(a)===!0&&(k.value=!0)}}function _e(){B(()=>{k.value=!1},30)}function j(){le.avoidRouteWatcher!==!0&&F(Ce)}function ye(t){C.push(t),U().length>0&&(h===void 0&&(h=P(()=>v.proxy.$route,j)),j())}function Re(t){C.splice(C.indexOf(t),1),h!==void 0&&(U().length===0&&(h(),h=void 0),j())}const le={currentModel:S,tabProps:fe,hasFocus:k,registerTab:ye,unregisterTab:Re,verifyRouteModel:j,updateModel:D,recalculateScroll:W,onKbdNavigate:me,avoidRouteWatcher:!1};Pe(ce,le),ue(()=>{clearTimeout(b),h!==void 0&&h()});let ne=!1;return Ee(()=>{ne=!0}),Fe(()=>{ne===!0&&W()}),()=>{const t=[g(We,{onResize:Y}),g("div",{ref:d,class:he.value,onScroll:T},Ke(A.default))];return L.value===!0&&t.push(g(H,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(M.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||l.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedown:ee,onTouchstartPassive:ee,onMouseup:y,onMouseleave:y,onTouchend:y}),g(H,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||l.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedown:te,onTouchstartPassive:te,onMouseup:y,onMouseleave:y,onTouchend:y})),g("div",{ref:q,class:be.value,role:"tablist",onFocusin:Te,onFocusout:_e},t)}}});export{Xe as Q,Ue as a,Je as b,Ge as u};
