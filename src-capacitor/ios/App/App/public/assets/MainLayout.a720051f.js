import{a7 as Q,v as l,_ as C,l as P,m as d,n as o,a1 as A,p as n,q as p,t as _,u as r,j as t,a8 as h,U as f,Q as g,a2 as I,V as S,aa as q,ac as T}from"./index.b5428c1f.js";import{Q as V}from"./QToolbar.b8f4cf51.js";import{Q as E}from"./QHeader.3c924b64.js";import{Q as u}from"./QRouteTab.dc20fa35.js";import{Q as R}from"./QBadge.0f4a71ae.js";import{Q as L}from"./QTabs.dc6b5f2a.js";import{Q as B}from"./QFooter.04730c47.js";import{Q as N,a as O}from"./QLayout.7a4152d8.js";import{u as M}from"./PlaceStore.95827437.js";import{u as H}from"./DeliverySched.9387c94f.js";import{u as z}from"./CartStore.5dc457e4.js";import"./QResizeObserver.74d4236c.js";import"./rtl.9c6e6d3e.js";import"./QScrollObserver.6c208809.js";const m=Q("Device",{web:()=>l(()=>import("./web.84836cfe.js"),["assets/web.84836cfe.js","assets/index.b5428c1f.js","assets/index.f7829e99.css"]).then(e=>new e.DeviceWeb)}),F=P({name:"MainLayout",components:{DeliveryDetails:d(()=>l(()=>import("./DeliveryDetails.6b3ea9af.js"),["assets/DeliveryDetails.6b3ea9af.js","assets/index.b5428c1f.js","assets/index.f7829e99.css","assets/QBtnToggle.becf21c8.js","assets/QItemLabel.25732301.js","assets/QList.9257b2df.js","assets/PlaceStore.95827437.js","assets/DeliverySched.9387c94f.js"])),DeliverySched:d(()=>l(()=>import("./DeliverySched.5044a85f.js"),["assets/DeliverySched.5044a85f.js","assets/QBtnToggle.becf21c8.js","assets/index.b5428c1f.js","assets/index.f7829e99.css","assets/QSelect.72c93ca6.js","assets/QChip.bdda5644.js","assets/QItemLabel.25732301.js","assets/selection.099be30b.js","assets/rtl.9c6e6d3e.js","assets/format.ec2e0666.js","assets/DeliverySched.9387c94f.js"])),NotiButton:d(()=>l(()=>import("./NotiButton.c3d3cfba.js"),["assets/NotiButton.c3d3cfba.js","assets/index.b5428c1f.js","assets/index.f7829e99.css","assets/QBadge.0f4a71ae.js"])),QuickTrack:d(()=>l(()=>import("./QuickTrack.1b967d6b.js"),["assets/QuickTrack.1b967d6b.js","assets/index.b5428c1f.js","assets/index.f7829e99.css","assets/QBadge.0f4a71ae.js","assets/QLinearProgress.0b70ae91.js"])),PushDialog:d(()=>l(()=>import("./PushDialog.0c8fd572.js"),["assets/PushDialog.0c8fd572.js","assets/index.b5428c1f.js","assets/index.f7829e99.css","assets/QSpace.de8f976c.js"]))},setup(){const e=M(),a=H(),s=z();return{PlaceStore:e,deliveryschedStore:a,CartStore:s}},data(){return{tab:"home",dialog_location:!1,dialog_deliverytime:!1,transaction_type:"delivery",location_options:"share_location",delivery_time_options:"",back_url:"/home?refresh=1"}},created(){this.$q.capacitor&&this.DeviceInit()},mounted(){this.initData()},methods:{initData(){this.PlaceStore.getPlace(),this.deliveryschedStore.getDeliverySched(o.getStorage("cart_uuid"),0),this.CartStore.hadItem()||this.CartStore.getCount()},showSched(){this.$refs.delivery_details.showModal(!1),this.$refs.delivery_sched.showSched(!0)},afterSavetrans(){console.log("afterSavetrans"),this.deliveryschedStore.getDeliverySched(o.getStorage("cart_uuid"),0)},afterSavetranstype(e){console.log("afterSavetranstype"),this.deliveryschedStore.getDeliverySched(o.getStorage("cart_uuid"))},DeviceInit(){const e=o.getSession("device_token"),a=o.getSession("device_registered"),s=o.getSession("device_registered_auth");A.authenticated()?s!==1&&m.getId().then(i=>{m.getInfo().then(c=>{this.updateDevice(e,i.uuid,c.platform)})}):a!==1&&m.getId().then(i=>{m.getInfo().then(c=>{this.registerDevice(e,i.uuid,c.platform)})})},registerDevice(e,a,s){o.registerDevice(e,a,s).then(i=>{o.setSession("device_registered",1)})},updateDevice(e,a,s){o.updateDevice(e,a,s).then(i=>{o.setSession("device_registered_auth",1)})},revealStateChange(e){this.deliveryschedStore.main_layout_header=e}}}),U={class:"fit row items-center"};function j(e,a,s,i,c,W){const y=n("NotiButton"),D=n("router-view"),k=n("DeliveryDetails"),b=n("DeliverySched"),$=n("QuickTrack"),w=n("PushDialog");return p(),_(N,{view:"lHh Lpr lFf"},{default:r(()=>[t(E,{reveal:"",class:"bg-white",onReveal:e.revealStateChange},{default:r(()=>[t(V,{class:h(["top-toolbar row",{"bg-mydark text-white":e.$q.dark.mode,"text-primary":!e.$q.dark.mode}]),dense:""},{default:r(()=>[t(f,{to:"/account-menu",flat:"",dense:"",icon:"las la-bars",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),t(f,{onClick:a[0]||(a[0]=v=>this.$refs.delivery_details.showModal(!0)),unelevated:"",color:e.$q.dark.mode?"grey600":"white","text-color":e.$q.dark.mode?"grey300":"dark",dense:"","no-caps":"",class:"col-9"},{default:r(()=>[g("div",U,[t(I,{name:"las la-map-marker-alt",color:"grey",size:"15px"}),g("div",{class:h(["q-ml-xs font13 ellipsis col-10",{"text-grey300":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},S(e.$t(e.PlaceStore.address)),3)])]),_:1},8,["color","text-color"]),t(y)]),_:1},8,["class"])]),_:1},8,["onReveal"]),t(B,{bordered:"",class:"bg-white text-dark"},{default:r(()=>[t(L,{modelValue:e.tab,"onUpdate:modelValue":a[1]||(a[1]=v=>e.tab=v),dense:"","indicator-color":"transparent","active-color":"secondary",class:h({"bg-mydark text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode})},{default:r(()=>[t(u,{name:"home",icon:"las la-home",label:e.$t("Home"),"no-caps":"",to:"/home"},null,8,["label"]),t(u,{name:"browse",icon:"search",label:e.$t("Search"),"no-caps":"",to:"/search"},null,8,["label"]),t(u,{name:"cart",icon:"las la-shopping-bag",label:e.$t("Cart"),"no-caps":"",to:"/cart"},{default:r(()=>[e.CartStore.hasItem?(p(),_(R,{key:0,color:"secondary",floating:"",rounded:""},{default:r(()=>[q(S(e.CartStore.items_count),1)]),_:1})):T("",!0)]),_:1},8,["label"]),t(u,{name:"account",icon:"las la-user-alt",label:e.$t("Account"),"no-caps":"",to:"/account-menu"},null,8,["label"])]),_:1},8,["modelValue","class"])]),_:1}),t(O,null,{default:r(()=>[t(D)]),_:1}),t(k,{ref:"delivery_details",back_url:e.back_url,onShowSched:e.showSched,onAfterSavetrans:e.afterSavetrans,onAfterSavetranstype:e.afterSavetranstype},null,8,["back_url","onShowSched","onAfterSavetrans","onAfterSavetranstype"]),t(b,{ref:"delivery_sched",slug:"0",onAfterSavetrans:e.afterSavetrans},null,8,["onAfterSavetrans"]),t($,{ref:"quick_track"},null,512),t(w,{ref:"push_dialog"},null,512)]),_:1})}var ne=C(F,[["render",j]]);export{ne as default};