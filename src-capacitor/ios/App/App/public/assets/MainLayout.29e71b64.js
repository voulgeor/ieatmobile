import{a7 as Q,v as l,_ as C,l as P,m as d,n as o,a1 as A,p as n,q as p,t as _,u as r,j as t,a8 as h,U as f,Q as g,a2 as I,V as S,aa as q,ac as T}from"./index.ea6274c1.js";import{Q as V}from"./QToolbar.955f19ff.js";import{Q as E}from"./QHeader.f05143ed.js";import{Q as u}from"./QRouteTab.db856ed2.js";import{Q as R}from"./QBadge.17fc3b5f.js";import{Q as L}from"./QTabs.b51e3709.js";import{Q as B}from"./QFooter.289e68ec.js";import{Q as N,a as O}from"./QLayout.84ce87aa.js";import{u as M}from"./PlaceStore.a7bf5273.js";import{u as H}from"./DeliverySched.4e928afe.js";import{u as z}from"./CartStore.d318931c.js";import"./QResizeObserver.88ce5d1b.js";import"./rtl.4b414a6d.js";import"./QScrollObserver.82ffd990.js";const m=Q("Device",{web:()=>l(()=>import("./web.e1735a1a.js"),["assets/web.e1735a1a.js","assets/index.ea6274c1.js","assets/index.f7829e99.css"]).then(e=>new e.DeviceWeb)}),F=P({name:"MainLayout",components:{DeliveryDetails:d(()=>l(()=>import("./DeliveryDetails.1874147d.js"),["assets/DeliveryDetails.1874147d.js","assets/index.ea6274c1.js","assets/index.f7829e99.css","assets/QBtnToggle.591d1e9c.js","assets/QItemLabel.d788e65f.js","assets/QList.249c4df0.js","assets/PlaceStore.a7bf5273.js","assets/DeliverySched.4e928afe.js"])),DeliverySched:d(()=>l(()=>import("./DeliverySched.e8942ed2.js"),["assets/DeliverySched.e8942ed2.js","assets/QBtnToggle.591d1e9c.js","assets/index.ea6274c1.js","assets/index.f7829e99.css","assets/QSelect.20b4e133.js","assets/QChip.79d03ed9.js","assets/QItemLabel.d788e65f.js","assets/selection.ac04f59d.js","assets/rtl.4b414a6d.js","assets/format.2a3572e1.js","assets/DeliverySched.4e928afe.js"])),NotiButton:d(()=>l(()=>import("./NotiButton.323fbdf7.js"),["assets/NotiButton.323fbdf7.js","assets/index.ea6274c1.js","assets/index.f7829e99.css","assets/QBadge.17fc3b5f.js"])),QuickTrack:d(()=>l(()=>import("./QuickTrack.db1b5bae.js"),["assets/QuickTrack.db1b5bae.js","assets/index.ea6274c1.js","assets/index.f7829e99.css","assets/QBadge.17fc3b5f.js","assets/QLinearProgress.890fd70b.js"])),PushDialog:d(()=>l(()=>import("./PushDialog.023805d7.js"),["assets/PushDialog.023805d7.js","assets/index.ea6274c1.js","assets/index.f7829e99.css","assets/QSpace.df9ea38d.js"]))},setup(){const e=M(),a=H(),s=z();return{PlaceStore:e,deliveryschedStore:a,CartStore:s}},data(){return{tab:"home",dialog_location:!1,dialog_deliverytime:!1,transaction_type:"delivery",location_options:"share_location",delivery_time_options:"",back_url:"/home?refresh=1"}},created(){this.$q.capacitor&&this.DeviceInit()},mounted(){this.initData()},methods:{initData(){this.PlaceStore.getPlace(),this.deliveryschedStore.getDeliverySched(o.getStorage("cart_uuid"),0),this.CartStore.hadItem()||this.CartStore.getCount()},showSched(){this.$refs.delivery_details.showModal(!1),this.$refs.delivery_sched.showSched(!0)},afterSavetrans(){console.log("afterSavetrans"),this.deliveryschedStore.getDeliverySched(o.getStorage("cart_uuid"),0)},afterSavetranstype(e){console.log("afterSavetranstype"),this.deliveryschedStore.getDeliverySched(o.getStorage("cart_uuid"))},DeviceInit(){const e=o.getSession("device_token"),a=o.getSession("device_registered"),s=o.getSession("device_registered_auth");A.authenticated()?s!==1&&m.getId().then(i=>{m.getInfo().then(c=>{this.updateDevice(e,i.uuid,c.platform)})}):a!==1&&m.getId().then(i=>{m.getInfo().then(c=>{this.registerDevice(e,i.uuid,c.platform)})})},registerDevice(e,a,s){o.registerDevice(e,a,s).then(i=>{o.setSession("device_registered",1)})},updateDevice(e,a,s){o.updateDevice(e,a,s).then(i=>{o.setSession("device_registered_auth",1)})},revealStateChange(e){this.deliveryschedStore.main_layout_header=e}}}),U={class:"fit row items-center"};function j(e,a,s,i,c,W){const y=n("NotiButton"),D=n("router-view"),k=n("DeliveryDetails"),b=n("DeliverySched"),$=n("QuickTrack"),w=n("PushDialog");return p(),_(N,{view:"lHh Lpr lFf"},{default:r(()=>[t(E,{reveal:"",class:"bg-white",onReveal:e.revealStateChange},{default:r(()=>[t(V,{class:h(["top-toolbar row",{"bg-mydark text-white":e.$q.dark.mode,"text-primary":!e.$q.dark.mode}]),dense:""},{default:r(()=>[t(f,{to:"/account-menu",flat:"",dense:"",icon:"las la-bars",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),t(f,{onClick:a[0]||(a[0]=v=>this.$refs.delivery_details.showModal(!0)),unelevated:"",color:e.$q.dark.mode?"grey600":"white","text-color":e.$q.dark.mode?"grey300":"dark",dense:"","no-caps":"",class:"col-9"},{default:r(()=>[g("div",U,[t(I,{name:"las la-map-marker-alt",color:"grey",size:"15px"}),g("div",{class:h(["q-ml-xs font13 ellipsis col-10",{"text-grey300":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},S(e.$t(e.PlaceStore.address)),3)])]),_:1},8,["color","text-color"]),t(y)]),_:1},8,["class"])]),_:1},8,["onReveal"]),t(B,{bordered:"",class:"bg-white text-dark"},{default:r(()=>[t(L,{modelValue:e.tab,"onUpdate:modelValue":a[1]||(a[1]=v=>e.tab=v),dense:"","indicator-color":"transparent","active-color":"secondary",class:h({"bg-mydark text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode})},{default:r(()=>[t(u,{name:"home",icon:"las la-home",label:e.$t("Home"),"no-caps":"",to:"/home"},null,8,["label"]),t(u,{name:"browse",icon:"search",label:e.$t("Search"),"no-caps":"",to:"/search"},null,8,["label"]),t(u,{name:"cart",icon:"las la-shopping-bag",label:e.$t("Cart"),"no-caps":"",to:"/cart"},{default:r(()=>[e.CartStore.hasItem?(p(),_(R,{key:0,color:"secondary",floating:"",rounded:""},{default:r(()=>[q(S(e.CartStore.items_count),1)]),_:1})):T("",!0)]),_:1},8,["label"]),t(u,{name:"account",icon:"las la-user-alt",label:e.$t("Account"),"no-caps":"",to:"/account-menu"},null,8,["label"])]),_:1},8,["modelValue","class"])]),_:1}),t(O,null,{default:r(()=>[t(D)]),_:1}),t(k,{ref:"delivery_details",back_url:e.back_url,onShowSched:e.showSched,onAfterSavetrans:e.afterSavetrans,onAfterSavetranstype:e.afterSavetranstype},null,8,["back_url","onShowSched","onAfterSavetrans","onAfterSavetranstype"]),t(b,{ref:"delivery_sched",slug:"0",onAfterSavetrans:e.afterSavetrans},null,8,["onAfterSavetrans"]),t($,{ref:"quick_track"},null,512),t(w,{ref:"push_dialog"},null,512)]),_:1})}var ne=C(F,[["render",j]]);export{ne as default};
