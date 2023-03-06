import{_ as q,m as v,a0 as w,n as i,p as S,q as d,t as f,u as s,k as a,U as u,aa as p,V as n,a8 as m,R as h,Q as g,ad as $,ae as D,F as _,S as C,v as I,X as T,ai as L,aq as R,ar as B,b0 as P}from"./index.628e6afe.js";import{Q as V}from"./QToolbarTitle.00ffb145.js";import{Q as z}from"./QToolbar.380b4d8f.js";import{Q as x}from"./QHeader.c2c457f8.js";import{Q as E}from"./QInnerLoading.320be028.js";import{Q as k}from"./QItemLabel.efb8f455.js";import{Q as F}from"./QSlideItem.63bb704f.js";import{Q as M}from"./QList.1313d8ab.js";import{Q as N}from"./QFooter.45bae814.js";import{Q as O}from"./QPage.19e693fb.js";import{Q as H}from"./QPullToRefresh.69ba5569.js";import{u as U}from"./ClientStore.66461216.js";import"./QResizeObserver.23b01bb0.js";import"./use-cache.b0833c75.js";import"./touch.70a9dd44.js";import"./selection.e42c4336.js";import"./format.2a3572e1.js";const X={name:"MyAddress",components:{AddressDetails:v(()=>I(()=>import("./AddressDetails.16a324e9.js"),["assets/AddressDetails.16a324e9.js","assets/index.628e6afe.js","assets/index.f7829e99.css","assets/QToolbarTitle.00ffb145.js","assets/QToolbar.380b4d8f.js","assets/QPopupEdit.234a4691.js","assets/QSelect.38f99574.js","assets/QChip.b2c02d07.js","assets/QItemLabel.efb8f455.js","assets/selection.e42c4336.js","assets/rtl.4b414a6d.js","assets/format.2a3572e1.js","assets/QSpace.665629e1.js","assets/QBtnToggle.5a3fbedd.js","assets/QFooter.45bae814.js","assets/QResizeObserver.23b01bb0.js","assets/QForm.44b35dda.js","assets/ClosePopup.a5a0c525.js","assets/index.627d5e8f.js","assets/MapStore.13280ef3.js"]))},data(){return{data:[],loading:!1,inner_loading:!1,location_data:[]}},setup(){const e=w(),t=U();return{DataStore:e,ClientStore:t}},computed:{hasData(){return this.data.length>0}},created(){this.getAddresses()},methods:{deleteAdress(e,t){this.deleteAddress(t.address_uuid,e)},refresh(e){this.getAddresses(e)},getAddresses(e){i.empty(e)&&(this.loading=!0),i.getAddresses().then(t=>{this.data=t.details.data}).catch(t=>{this.data=[]}).then(t=>{this.loading=!1,i.empty(e)||e()})},deleteAddress(e,t){this.inner_loading=!0,i.deleteAddress(e).then(c=>{this.data.splice(t,1),this.ClientStore.getAddress()}).catch(c=>{i.notify("negative",c,"error_outline",this.$q)}).then(c=>{this.inner_loading=!1})},editAddress(e){console.debug(e),this.$refs.address_details.location_data=e,this.$refs.address_details.showModal()},afterSaveaddress(){console.debug("afterSaveaddress"),this.getAddresses()}}},Y={key:1,class:"full-width text-center"},j={class:"text-h5 text-weight-bold line-normal"},G={class:"text-grey font12 no-margin"},J={class:"text-weight-medium"};function K(e,t,c,b,l,r){const y=S("AddressDetails");return d(),f(H,{onRefresh:r.refresh},{default:s(()=>[a(x,{reveal:"","reveal-offset":"50",class:m({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode})},{default:s(()=>[a(z,null,{default:s(()=>[a(u,{onClick:t[0]||(t[0]=o=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(V,{class:"text-weight-bold"},{default:s(()=>[p(n(e.$t("Address")),1)]),_:1})]),_:1})]),_:1},8,["class"]),a(O,{padding:"",class:m(["q-pl-md q-pr-md",{"flex flex-center":!r.hasData&&!l.loading,"row items-stretch ":r.hasData&&!l.loading,"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode}])},{default:s(()=>[l.loading?(d(),f(E,{key:0,showing:!0,color:"primary",size:"md","label-class":"dark",class:"transparent"})):!r.hasData&&!l.loading?(d(),h("div",Y,[g("div",j,n(e.$t("You don't have address added yet")),1),g("p",G,n(e.$t("Let's change that!")),1),a(u,{flat:"",color:"blue","no-caps":"",label:e.$t("Add new address"),dense:"",size:"sm",to:{path:"/location/map",query:{url:"/account/my-address"}}},null,8,["label"])])):(d(),h(_,{key:2},[a($,{flat:"",class:m(["radius8 col-12",{"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode}])},{default:s(()=>[a(D,null,{default:s(()=>[a(M,null,{default:s(()=>[(d(!0),h(_,null,C(l.data,(o,A)=>(d(),f(T,{key:o.address_uuid,appear:"","leave-active-class":"animated fadeOut"},{default:s(()=>[a(F,{onAction:Q=>r.deleteAdress(A,o),"right-color":e.$q.dark.mode?"mydark":"white",class:m({"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode})},{right:s(()=>[a(u,{unelevated:"",round:"",color:"lightprimary","text-color":"primary",icon:"las la-trash",dense:""})]),default:s(()=>[L((d(),f(B,{onClick:Q=>r.editAddress(o),clickable:"",class:m(["radius10 q-mb-sm",{"border-grey300 ":e.$q.dark.mode,"border-grey":!e.$q.dark.mode}])},{default:s(()=>[a(P,{top:""},{default:s(()=>[a(k,{lines:"1"},{default:s(()=>[g("span",J,n(o.attributes.address_label),1)]),_:2},1024),a(k,{caption:"",lines:"1"},{default:s(()=>[p(n(o.address.formatted_address),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","class"])),[[R]])]),_:2},1032,["onAction","right-color","class"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["class"]),a(N,{reveal:"",class:"bg-grey-1 q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"},{default:s(()=>[a(u,{loading:l.loading,to:{path:"/location/map",query:{url:"/account/my-address"}},label:e.$t("Add new address"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["loading","label"])]),_:1})],64)),a(y,{ref:"address_details",maps_config:b.DataStore.maps_config,onAfterSaveaddress:r.afterSaveaddress},null,8,["maps_config","onAfterSaveaddress"])]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var ge=q(X,[["render",K]]);export{ge as default};