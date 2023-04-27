import{_ as S,n as r,bN as g,bk as h,q as c,S as V,k as t,u as o,F as v,V as b,ab as f,X as u,t as Q,as as p,b3 as l,bg as d,ae as q}from"./index.a3a9b403.js";import{Q as y}from"./QToolbarTitle.bdf7696f.js";import{Q as w}from"./QToolbar.84f8e4cf.js";import{Q as P}from"./QHeader.944e3fc5.js";import{Q as $}from"./QInnerLoading.3f992c70.js";import{Q as m}from"./QItemLabel.0e0c1fe6.js";import{Q as C}from"./QList.26809fbc.js";import{Q as T}from"./QFooter.f4c4baca.js";import{Q as F}from"./QPage.36125042.js";import"./QResizeObserver.b1cbdf85.js";const I={name:"SettingsPage",data(){return{loading:!1,loading2:!1,data:[],app_push_notifications:!1,app_sms_notifications:!1,offers_email_notifications:!1,promotional_push_notifications:!1}},mounted(){this.getSettings()},methods:{getSettings(){this.loading=!0,r.getSettings().then(i=>{this.app_push_notifications=i.details.app_push_notifications==="1",this.app_sms_notifications=i.details.app_sms_notifications==="1",this.offers_email_notifications=i.details.offers_email_notifications==="1",this.promotional_push_notifications=i.details.promotional_push_notifications==="1"}).catch(i=>{r.notify("dark",i,"error",this.$q)}).then(i=>{this.loading=!1})},saveSettings(){this.loading2=!0;const i={app_push_notifications:this.app_push_notifications,app_sms_notifications:this.app_sms_notifications,offers_email_notifications:this.offers_email_notifications,promotional_push_notifications:this.promotional_push_notifications};r.saveSettings(i).then(e=>{r.notify("dark",e.msg,"check",this.$q);const _=e.details.app_push_notifications;this.$q.platform.is.mobile&&(_?(console.debug("subscribe"),g.subscribeTo({topic:h.topic}).then(n=>console.debug("subscribed to topic")).catch(n=>console.log(n))):(console.debug("un-subscribe"),g.unsubscribeFrom({topic:h.topic}).then(()=>console.debug("unsubscribed from topic")).catch(n=>console.log(n))))}).catch(e=>{r.notify("dark",e,"error",this.$q)}).then(e=>{this.loading2=!1})}}};function B(i,e,_,n,s,k){return c(),V(v,null,[t(P,{reveal:"","reveal-offset":"50",class:"bg-grey-1 text-dark"},{default:o(()=>[t(w,null,{default:o(()=>[t(b,{onClick:e[0]||(e[0]=a=>i.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:"dark"}),t(y,{class:"text-weight-bold"},{default:o(()=>[f(u(i.$t("Settings")),1)]),_:1})]),_:1})]),_:1}),t(F,{padding:"",class:"bg-grey-1 q-pl-md q-pr-md row items-stretch"},{default:o(()=>[s.loading?(c(),Q($,{key:0,showing:!0,color:"primary",size:"md","label-class":"dark",class:"transparent"})):(c(),Q(q,{key:1,flat:"",class:"radius8 col-12"},{default:o(()=>[t(C,null,{default:o(()=>[t(p,null,{default:o(()=>[t(l,null,{default:o(()=>[t(m,null,{default:o(()=>[f(u(i.$t("Receive push notifications")),1)]),_:1})]),_:1}),t(l,{side:""},{default:o(()=>[t(d,{modelValue:s.app_push_notifications,"onUpdate:modelValue":e[1]||(e[1]=a=>s.app_push_notifications=a)},null,8,["modelValue"])]),_:1})]),_:1}),t(p,null,{default:o(()=>[t(l,null,{default:o(()=>[t(m,null,{default:o(()=>[f(u(i.$t("Receive SMS notifications")),1)]),_:1})]),_:1}),t(l,{side:""},{default:o(()=>[t(d,{modelValue:s.app_sms_notifications,"onUpdate:modelValue":e[2]||(e[2]=a=>s.app_sms_notifications=a)},null,8,["modelValue"])]),_:1})]),_:1}),t(p,null,{default:o(()=>[t(l,null,{default:o(()=>[t(m,null,{default:o(()=>[f(u(i.$t("Promotional Push notifications")),1)]),_:1})]),_:1}),t(l,{side:""},{default:o(()=>[t(d,{modelValue:s.promotional_push_notifications,"onUpdate:modelValue":e[3]||(e[3]=a=>s.promotional_push_notifications=a)},null,8,["modelValue"])]),_:1})]),_:1}),t(p,null,{default:o(()=>[t(l,null,{default:o(()=>[t(m,null,{default:o(()=>[f(u(i.$t("Receive offers by email")),1)]),_:1})]),_:1}),t(l,{side:""},{default:o(()=>[t(d,{modelValue:s.offers_email_notifications,"onUpdate:modelValue":e[4]||(e[4]=a=>s.offers_email_notifications=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})),t(T,{reveal:"",class:"bg-grey-1 q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"},{default:o(()=>[t(b,{onClick:k.saveSettings,loading:s.loading2,label:i.$t("Save"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["onClick","loading","label"])]),_:1})]),_:1})],64)}var H=S(I,[["render",B]]);export{H as default};
