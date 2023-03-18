import{x as D,r as H,c as i,h as a,a3 as Y,aj as Z,ar as $,g as L,i as ee,y as T,bL as X,a_ as re,B as N,a4 as te,a6 as oe,z as ne,I as se,aM as ae,_ as ie,m as O,n as Q,p as E,q as p,S as b,k as o,u as l,a9 as P,F as q,V as K,ab as V,X as C,t as S,R,ad as w,as as le,b3 as B,b4 as ce,v as M}from"./index.e230319b.js";import{Q as de}from"./QToolbarTitle.259c42a1.js";import{Q as ue}from"./QToolbar.6df38dcd.js";import{Q as pe}from"./QHeader.4854892c.js";import{Q as me}from"./QInnerLoading.0b8a8d1f.js";import{Q as z}from"./QLinearProgress.db7cbd8c.js";import{Q as _e}from"./QSlideTransition.a6aae68e.js";import{u as ve,a as ge,b as fe,c as he}from"./use-panel.381ee395.js";import{u as ke}from"./use-cache.b0833c75.js";import{Q as ye}from"./QImg.0fbb4b94.js";import{Q as j}from"./QItemLabel.a48bebab.js";import{Q as be}from"./QList.4869120a.js";import{Q as qe}from"./QFooter.10036f87.js";import{Q as Ce}from"./QPage.225bb278.js";import"./QResizeObserver.14e0edf7.js";import"./touch.70a9dd44.js";import"./selection.69ceab22.js";var G=D({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:n}){const{proxy:{$q:m}}=L(),_=H(null),r=i(()=>e.stepper.modelValue===e.step.name),c=i(()=>{const t=e.step.disable;return t===!0||t===""}),v=i(()=>{const t=e.step.error;return t===!0||t===""}),d=i(()=>{const t=e.step.done;return c.value===!1&&(t===!0||t==="")}),u=i(()=>{const t=e.step.headerNav,s=t===!0||t===""||t===void 0;return c.value===!1&&e.stepper.headerNav&&s}),f=i(()=>e.step.prefix&&(r.value===!1||e.stepper.activeIcon==="none")&&(v.value===!1||e.stepper.errorIcon==="none")&&(d.value===!1||e.stepper.doneIcon==="none")),h=i(()=>{const t=e.step.icon||e.stepper.inactiveIcon;if(r.value===!0){const s=e.step.activeIcon||e.stepper.activeIcon;return s==="none"?t:s||m.iconSet.stepper.active}if(v.value===!0){const s=e.step.errorIcon||e.stepper.errorIcon;return s==="none"?t:s||m.iconSet.stepper.error}if(c.value===!1&&d.value===!0){const s=e.step.doneIcon||e.stepper.doneIcon;return s==="none"?t:s||m.iconSet.stepper.done}return t}),g=i(()=>{const t=v.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(r.value===!0){const s=e.step.activeColor||e.stepper.activeColor||e.step.color;return s!==void 0?s:t}return t!==void 0?t:c.value===!1&&d.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),y=i(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(g.value!==void 0?` text-${g.value}`:"")+(v.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(f.value===!0?"prefix":"icon"):"")+(r.value===!0?" q-stepper__tab--active":"")+(d.value===!0?" q-stepper__tab--done":"")+(u.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(c.value===!0?" q-stepper__tab--disabled":"")),x=i(()=>e.stepper.headerNav!==!0?!1:u.value);function A(){_.value!==null&&_.value.focus(),r.value===!1&&e.goToPanel(e.step.name)}function F(t){t.keyCode===13&&r.value===!1&&e.goToPanel(e.step.name)}return()=>{const t={class:y.value};u.value===!0&&(t.onClick=A,t.onKeyup=F,Object.assign(t,c.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:n.tabindex||0}));const s=[a("div",{class:"q-focus-helper",tabindex:-1,ref:_}),a("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[a("span",{class:"row flex-center"},[f.value===!0?e.step.prefix:a(Y,{name:h.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const I=[a("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&I.push(a("div",{class:"q-stepper__caption"},e.step.caption)),s.push(a("div",{class:"q-stepper__label q-stepper__line relative-position"},I))}return Z(a("div",t,s),[[$,x.value]])}}});function J(e){return a("div",{class:"q-stepper__step-content"},[a("div",{class:"q-stepper__step-inner"},N(e.default))])}const U={setup(e,{slots:n}){return()=>J(n)}};var k=D({name:"QStep",props:{...ve,icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean,onScroll:[Function,Array]},setup(e,{slots:n,emit:m}){const{proxy:{$q:_}}=L(),r=ee(X,T);if(r===T)return console.error("QStep needs to be a child of QStepper"),T;const{getCacheWithFn:c}=ke(),v=H(null),d=i(()=>r.value.modelValue===e.name),u=i(()=>_.platform.is.ios!==!0&&_.platform.is.chrome===!0||d.value!==!0||r.value.vertical!==!0?{}:{onScroll(g){const{target:y}=g;y.scrollTop>0&&(y.scrollTop=0),e.onScroll!==void 0&&m("scroll",g)}}),f=i(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function h(){const g=r.value.vertical;return g===!0&&r.value.keepAlive===!0?a(re,r.value.keepAliveProps.value,d.value===!0?[a(r.value.needsUniqueKeepAliveWrapper.value===!0?c(f.value,()=>({...U,name:f.value})):U,{key:f.value},n.default)]:void 0):g!==!0||d.value===!0?J(n):void 0}return()=>a("div",{ref:v,class:"q-stepper__step",role:"tabpanel",...u.value},r.value.vertical===!0?[a(G,{stepper:r.value,step:e,goToPanel:r.value.goToPanel}),r.value.animated===!0?a(_e,h):h()]:[h()])}});const Se=/(-\w)/g;function Ie(e){const n={};for(const m in e){const _=m.replace(Se,r=>r[1].toUpperCase());n[_]=e[m]}return n}var W=D({name:"QStepper",props:{...te,...ge,flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String},emits:fe,setup(e,{slots:n}){const m=L(),_=oe(e,m.proxy.$q),{updatePanelsList:r,isValidPanelName:c,updatePanelIndex:v,getPanelContent:d,getPanels:u,panelDirectives:f,goToPanel:h,keepAliveProps:g,needsUniqueKeepAliveWrapper:y}=he();ne(X,i(()=>({goToPanel:h,keepAliveProps:g,needsUniqueKeepAliveWrapper:y,...e})));const x=i(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0?" q-stepper--flat":"")+(e.bordered===!0?" q-stepper--bordered":"")+(_.value===!0?" q-stepper--dark q-dark":"")),A=i(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function F(){const t=N(n.message,[]);if(e.vertical===!0){c(e.modelValue)&&v();const s=a("div",{class:"q-stepper__content"},N(n.default));return t===void 0?[s]:t.concat(s)}return[a("div",{class:A.value},u().map(s=>{const I=Ie(s.props);return a(G,{key:I.name,stepper:e,step:I,goToPanel:h})})),t,ae("div",{class:"q-stepper__content q-panel-parent"},d(),"cont",e.swipeable,()=>f.value)]}return()=>(r(n),a("div",{class:x.value},se(n.navigation,F())))}});const Qe={name:"TrackOrder",components:{MapComponents:O(()=>M(()=>import("./MapComponents.a97c170c.js"),["assets/MapComponents.a97c170c.js","assets/index.b0a8ca52.js","assets/index.e230319b.js","assets/index.469535cd.css"])),ComponentsRealtime:O(()=>M(()=>import("./ComponentsRealtime.3f96e616.js"),["assets/ComponentsRealtime.3f96e616.js","assets/index.4f152a18.js","assets/index.e230319b.js","assets/index.469535cd.css"]))},data(){return{order_progress:-1,order_details:!0,loading:!1,order_uuid:"",lat:"",lng:"",merchant_info:[],order_info:[],items:[],meta:[],items_count:0,order_status:"",order_status_details:"",instructions:[],map_marker:{},map_center:{}}},mounted(){this.order_uuid=this.$route.query.order_uuid,this.getOrder()},computed:{hasMarkers(){return Object.keys(this.map_marker).length>0}},methods:{getOrder(){this.loading=!0,Q.getOrder(this.order_uuid).then(e=>{this.merchant_info=e.details.merchant_info,this.order_info=e.details.order_info,this.items=e.details.items,this.meta=e.details.meta,this.items_count=e.details.items_count,this.order_progress=e.details.progress.order_progress,this.order_status=e.details.progress.order_status,this.order_status_details=e.details.progress.order_status_details,this.instructions=e.details.instructions,this.order_info.order_type==="delivery"?(this.map_center={lat:parseFloat(this.merchant_info.latitude),lng:parseFloat(this.merchant_info.longitude)},this.map_marker=[{position:{lat:parseFloat(this.merchant_info.latitude),lng:parseFloat(this.merchant_info.longitude)},label:Q.getIcon("merchant")},{position:{lat:parseFloat(this.meta.latitude),lng:parseFloat(this.meta.longitude)},label:Q.getIcon("customer")}]):(this.map_marker=[{position:{lat:parseFloat(this.merchant_info.latitude),lng:parseFloat(this.merchant_info.longitude)},label:Q.getIcon("merchant")}],this.map_center={lat:parseFloat(this.merchant_info.latitude),lng:parseFloat(this.merchant_info.longitude)})}).catch(e=>{Q.notify("red-5",e,"error_outline",this.$q)}).then(e=>{this.loading=!1})},afterReceive(e){if(e.order_id!==this.order_info.order_id)return!1;e.order_progress===0?(this.order_progress=e.order_progress,this.order_status=e.order_status,this.order_status_details=e.order_status_details):e.order_progress===-1||(this.order_progress=e.order_progress,this.order_status=e.order_status,this.order_status_details=e.order_status_details)}}},Pe={class:"col-12"};function we(e,n,m,_,r,c){const v=E("MapComponents"),d=E("ComponentsRealtime");return p(),b(q,null,[o(pe,{class:P({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode})},{default:l(()=>[o(ue,null,{default:l(()=>[o(K,{onClick:n[0]||(n[0]=u=>e.$router.back()),flat:"",round:"",dense:"",icon:"close",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),o(de,{class:"text-weight-bold"},{default:l(()=>[V(C(e.$t("Order"))+" #"+C(r.order_info.order_id),1)]),_:1})]),_:1})]),_:1},8,["class"]),o(Ce,{class:P(["row items-stretch",{"bg-mydark ":e.$q.dark.mode,"bg-grey-1 ":!e.$q.dark.mode}])},{default:l(()=>[r.loading?(p(),S(me,{key:0,showing:!0,size:"md",color:"primary"})):(p(),b(q,{key:1},[R("div",Pe,[!r.loading&&c.hasMarkers?(p(),S(v,{key:0,center:r.map_center,markers:r.map_marker},null,8,["center","markers"])):w("",!0)]),o(qe,{reveal:"",class:"bg-white q-pl-md q-pr-md q-pt-md text-dark",style:{"border-top-right-radius":"15px","border-top-left-radius":"15px",bottom:"10px"}},{default:l(()=>[r.order_info.order_type=="delivery"?(p(),b(q,{key:0},[r.order_progress>0?(p(),b(q,{key:0},[r.order_progress<=3?(p(),S(z,{key:0,indeterminate:"",color:"secondary"})):w("",!0)],64)):w("",!0)],64)):(p(),b(q,{key:1},[r.order_progress>0?(p(),b(q,{key:0},[r.order_progress<=2?(p(),S(z,{key:0,indeterminate:"",color:"warning"})):w("",!0)],64)):w("",!0)],64)),R("h5",{class:P(["text-weight-bold q-mt-sm q-mb-none",{"text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},C(r.order_status),3),R("p",{class:P(["no-margin font11",{"text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},C(r.order_status_details),3),r.order_info.order_type=="delivery"?(p(),S(W,{key:2,modelValue:r.order_progress,"onUpdate:modelValue":n[1]||(n[1]=u=>r.order_progress=u),ref:"stepper",color:"primary",animated:"",flat:"",class:P(["no-padding tracking-steps",{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode}])},{default:l(()=>[o(k,{name:1,title:"",icon:"east","active-icon":"east","done-icon":"east","active-color":"primary","done-color":r.order_progress>1?"primary":"negative",done:r.order_progress>1||r.order_progress<=0},null,8,["done-color","done"]),o(k,{name:2,title:"",icon:"local_dining","active-icon":"local_dining","done-icon":"local_dining","active-color":"primary","done-color":r.order_progress>1?"primary":"negative",done:r.order_progress>2||r.order_progress<=0},null,8,["done-color","done"]),o(k,{name:3,title:"",icon:"drive_eta","active-icon":"drive_eta","done-icon":"drive_eta","active-color":"primary","done-color":r.order_progress>1?"primary":"negative",done:r.order_progress>3||r.order_progress<=0},null,8,["done-color","done"]),o(k,{name:4,title:"",icon:"home","active-icon":"home","done-icon":"check_circle","active-color":"primary","done-color":r.order_progress>1?"primary":"negative",done:r.order_progress>=4||r.order_progress<=0},null,8,["done-color","done"])]),_:1},8,["modelValue","class"])):(p(),S(W,{key:3,modelValue:r.order_progress,"onUpdate:modelValue":n[2]||(n[2]=u=>r.order_progress=u),ref:"stepper",color:"primary",animated:"",flat:"",class:"no-padding tracking-steps"},{default:l(()=>[o(k,{name:1,title:"",icon:"east","active-icon":"east","done-icon":"east","active-color":"primary","done-color":r.order_progress>1?"primary":"negative",done:r.order_progress>1||r.order_progress<=0},null,8,["done-color","done"]),o(k,{name:2,title:"",icon:"local_dining","active-icon":"local_dining","done-icon":"local_dining","active-color":"primary","done-color":r.order_progress>1?"primary":"negative",done:r.order_progress>2||r.order_progress<=0},null,8,["done-color","done"]),o(k,{name:3,title:"",icon:"shopping_basket","active-icon":"shopping_basket","done-icon":"check_circle","active-color":"primary","done-color":r.order_progress>1?"primary":"negative",done:r.order_progress>=3||r.order_progress<=0},null,8,["done-color","done"])]),_:1},8,["modelValue"])),o(be,{class:"q-mb-sm q-mt-sm"},{default:l(()=>[o(le,{clickable:""},{default:l(()=>[o(B,{avatar:""},{default:l(()=>[o(ce,null,{default:l(()=>[o(ye,{src:r.merchant_info.url_logo,fit:e.contain,style:{height:"50px","max-width":"50px"},class:"no-margin",loading:"lazy"},null,8,["src","fit"])]),_:1})]),_:1}),o(B,null,{default:l(()=>[o(j,{lines:"1",class:"text-weight-bold"},{default:l(()=>[V(C(r.merchant_info.restaurant_name),1)]),_:1}),o(j,{caption:"",lines:"2",class:"font11"},{default:l(()=>[V(C(r.merchant_info.merchant_address),1)]),_:1})]),_:1}),o(B,{side:""},{default:l(()=>[o(K,{square:"",color:"secondary",unelevated:"","text-color":"white",icon:"las la-phone",dense:"",class:"radius8",href:"tel:"+r.merchant_info.contact_phone},null,8,["href"])]),_:1})]),_:1})]),_:1})]),_:1})],64))]),_:1},8,["class"]),o(d,{ref:"realtime",getevent:"tracking",onAfterReceive:c.afterReceive},null,8,["onAfterReceive"])],64)}var We=ie(Qe,[["render",we]]);export{We as default};
