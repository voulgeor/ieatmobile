import{a7 as Q,v as l,_ as C,d as P,m as d,n as o,a1 as A,p as n,q as p,t as _,u as r,k as t,a8 as h,U as f,Q as g,a2 as I,V as S,aa as q,ac as T}from"./index.bc7ef6d7.js";import{Q as V}from"./QToolbar.a26cb24b.js";import{Q as E}from"./QHeader.4fce4bc7.js";import{Q as u}from"./QRouteTab.5647cca3.js";import{Q as R}from"./QBadge.9e44760e.js";import{Q as L}from"./QTabs.a69aed8c.js";import{Q as B}from"./QFooter.4be05767.js";import{Q as N,a as O}from"./QLayout.a3472716.js";import{u as M}from"./PlaceStore.aa3757bd.js";import{u as H}from"./DeliverySched.ff794840.js";import{u as z}from"./CartStore.3bfbaea8.js";import"./QResizeObserver.3eefdf89.js";import"./rtl.6ac1ebea.js";import"./QScrollObserver.1c77b470.js";const m=Q("Device",{web:()=>l(()=>import("./web.4f559a87.js"),["assets/web.4f559a87.js","assets/index.bc7ef6d7.js","assets/index.f7829e99.css"]).then(e=>new e.DeviceWeb)}),F=P({name:"MainLayout",components:{DeliveryDetails:d(()=>l(()=>import("./DeliveryDetails.dc9887f7.js"),["assets/DeliveryDetails.dc9887f7.js","assets/index.bc7ef6d7.js","assets/index.f7829e99.css","assets/QBtnToggle.fb883b69.js","assets/QItemLabel.655483ba.js","assets/QList.5beea4c1.js","assets/PlaceStore.aa3757bd.js","assets/DeliverySched.ff794840.js"])),DeliverySched:d(()=>l(()=>import("./DeliverySched.6471e11a.js"),["assets/DeliverySched.6471e11a.js","assets/QBtnToggle.fb883b69.js","assets/index.bc7ef6d7.js","assets/index.f7829e99.css","assets/QSelect.bc1c0cc7.js","assets/QChip.55a9e2ca.js","assets/QItemLabel.655483ba.js","assets/selection.909320b2.js","assets/rtl.6ac1ebea.js","assets/format.a74bec27.js","assets/DeliverySched.ff794840.js"])),NotiButton:d(()=>l(()=>import("./NotiButton.bea41e8e.js"),["assets/NotiButton.bea41e8e.js","assets/index.bc7ef6d7.js","assets/index.f7829e99.css","assets/QBadge.9e44760e.js"])),QuickTrack:d(()=>l(()=>import("./QuickTrack.6d1742be.js"),["assets/QuickTrack.6d1742be.js","assets/index.bc7ef6d7.js","assets/index.f7829e99.css","assets/QBadge.9e44760e.js","assets/QLinearProgress.a327a111.js"])),PushDialog:d(()=>l(()=>import("./PushDialog.35b9ace6.js"),["assets/PushDialog.35b9ace6.js","assets/index.bc7ef6d7.js","assets/index.f7829e99.css","assets/QSpace.81d240aa.js"]))},setup(){const e=M(),a=H(),s=z();return{PlaceStore:e,deliveryschedStore:a,CartStore:s}},data(){return{tab:"home",dialog_location:!1,dialog_deliverytime:!1,transaction_type:"delivery",location_options:"share_location",delivery_time_options:"",back_url:"/home?refresh=1"}},created(){this.$q.capacitor&&this.DeviceInit()},mounted(){this.initData()},methods:{initData(){this.PlaceStore.getPlace(),this.deliveryschedStore.getDeliverySched(o.getStorage("cart_uuid"),0),this.CartStore.hadItem()||this.CartStore.getCount()},showSched(){this.$refs.delivery_details.showModal(!1),this.$refs.delivery_sched.showSched(!0)},afterSavetrans(){console.log("afterSavetrans"),this.deliveryschedStore.getDeliverySched(o.getStorage("cart_uuid"),0)},afterSavetranstype(e){console.log("afterSavetranstype"),this.deliveryschedStore.getDeliverySched(o.getStorage("cart_uuid"))},DeviceInit(){const e=o.getSession("device_token"),a=o.getSession("device_registered"),s=o.getSession("device_registered_auth");A.authenticated()?s!==1&&m.getId().then(i=>{m.getInfo().then(c=>{this.updateDevice(e,i.uuid,c.platform)})}):a!==1&&m.getId().then(i=>{m.getInfo().then(c=>{this.registerDevice(e,i.uuid,c.platform)})})},registerDevice(e,a,s){o.registerDevice(e,a,s).then(i=>{o.setSession("device_registered",1)})},updateDevice(e,a,s){o.updateDevice(e,a,s).then(i=>{o.setSession("device_registered_auth",1)})},revealStateChange(e){this.deliveryschedStore.main_layout_header=e}}}),U={class:"fit row items-center"};function W(e,a,s,i,c,j){const y=n("NotiButton"),k=n("router-view"),D=n("DeliveryDetails"),b=n("DeliverySched"),$=n("QuickTrack"),w=n("PushDialog");return p(),_(N,{view:"lHh Lpr lFf"},{default:r(()=>[t(E,{reveal:"",class:"bg-white",onReveal:e.revealStateChange},{default:r(()=>[t(V,{class:h(["top-toolbar row",{"bg-mydark text-white":e.$q.dark.mode,"text-primary":!e.$q.dark.mode}]),dense:""},{default:r(()=>[t(f,{to:"/account-menu",flat:"",dense:"",icon:"las la-bars",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),t(f,{onClick:a[0]||(a[0]=v=>this.$refs.delivery_details.showModal(!0)),unelevated:"",color:e.$q.dark.mode?"grey600":"white","text-color":e.$q.dark.mode?"grey300":"dark",dense:"","no-caps":"",class:"col-9"},{default:r(()=>[g("div",U,[t(I,{name:"las la-map-marker-alt",color:"grey",size:"15px"}),g("div",{class:h(["q-ml-xs font13 ellipsis col-10",{"text-grey300":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},S(e.$t(e.PlaceStore.address)),3)])]),_:1},8,["color","text-color"]),t(y)]),_:1},8,["class"])]),_:1},8,["onReveal"]),t(B,{bordered:"",class:"bg-white text-dark"},{default:r(()=>[t(L,{modelValue:e.tab,"onUpdate:modelValue":a[1]||(a[1]=v=>e.tab=v),dense:"","indicator-color":"transparent","active-color":"secondary",class:h({"bg-mydark text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode})},{default:r(()=>[t(u,{name:"home",icon:"las la-home",label:e.$t("Home"),"no-caps":"",to:"/home"},null,8,["label"]),t(u,{name:"browse",icon:"search",label:e.$t("Search"),"no-caps":"",to:"/search"},null,8,["label"]),t(u,{name:"cart",icon:"las la-shopping-bag",label:e.$t("Cart"),"no-caps":"",to:"/cart"},{default:r(()=>[e.CartStore.hasItem?(p(),_(R,{key:0,color:"secondary",floating:"",rounded:""},{default:r(()=>[q(S(e.CartStore.items_count),1)]),_:1})):T("",!0)]),_:1},8,["label"]),t(u,{name:"account",icon:"las la-user-alt",label:e.$t("Account"),"no-caps":"",to:"/account-menu"},null,8,["label"])]),_:1},8,["modelValue","class"])]),_:1}),t(O,null,{default:r(()=>[t(k)]),_:1}),t(D,{ref:"delivery_details",back_url:e.back_url,onShowSched:e.showSched,onAfterSavetrans:e.afterSavetrans,onAfterSavetranstype:e.afterSavetranstype},null,8,["back_url","onShowSched","onAfterSavetrans","onAfterSavetranstype"]),t(b,{ref:"delivery_sched",slug:"0",onAfterSavetrans:e.afterSavetrans},null,8,["onAfterSavetrans"]),t($,{ref:"quick_track"},null,512),t(w,{ref:"push_dialog"},null,512)]),_:1})}var ne=C(F,[["render",W]]);export{ne as default};