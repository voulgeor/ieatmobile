import{_ as Q,m as q,a1 as w,n as i,p as S,q as d,t as f,u as s,k as a,V as u,ab as p,X as n,a9 as m,S as h,R as g,ae as $,af as D,F as _,U as C,v as I,Y as T,aj as L,ar as R,as as B,b3 as P}from"./index.fff20017.js";import{Q as V}from"./QToolbarTitle.e49295d2.js";import{Q as z}from"./QToolbar.08817919.js";import{Q as x}from"./QHeader.fb975acc.js";import{Q as E}from"./QInnerLoading.5b3ceea0.js";import{Q as k}from"./QItemLabel.edeba251.js";import{Q as F}from"./QSlideItem.eab0ede8.js";import{Q as M}from"./QList.45f2a341.js";import{Q as N}from"./QFooter.a57501dc.js";import{Q as O}from"./QPage.d49d1d2c.js";import{Q as Y}from"./QPullToRefresh.5d364774.js";import{u as j}from"./ClientStore.58c518c1.js";import"./QResizeObserver.48ba7799.js";import"./use-cache.f338bfdb.js";import"./touch.e7f7558c.js";import"./selection.94eeb582.js";import"./format.a74bec27.js";const H={name:"MyAddress",components:{AddressDetails:q(()=>I(()=>import("./AddressDetails.880d0b11.js"),["assets/AddressDetails.880d0b11.js","assets/index.fff20017.js","assets/index.469535cd.css","assets/QToolbarTitle.e49295d2.js","assets/QToolbar.08817919.js","assets/QPopupEdit.a93152da.js","assets/QSelect.12278320.js","assets/QChip.369de1c0.js","assets/QItemLabel.edeba251.js","assets/selection.94eeb582.js","assets/rtl.46960cfe.js","assets/format.a74bec27.js","assets/QSpace.5bb2b9c8.js","assets/QBtnToggle.e9a42da0.js","assets/QFooter.a57501dc.js","assets/QResizeObserver.48ba7799.js","assets/QForm.e5bf8d47.js","assets/ClosePopup.d326ff37.js","assets/index.5390bcf5.js","assets/MapStore.9c7e1a97.js"]))},data(){return{data:[],loading:!1,inner_loading:!1,location_data:[]}},setup(){const e=w(),t=j();return{DataStore:e,ClientStore:t}},computed:{hasData(){return this.data.length>0}},created(){this.getAddresses()},methods:{deleteAdress(e,t){this.deleteAddress(t.address_uuid,e)},refresh(e){this.getAddresses(e)},getAddresses(e){i.empty(e)&&(this.loading=!0),i.getAddresses().then(t=>{this.data=t.details.data}).catch(t=>{this.data=[]}).then(t=>{this.loading=!1,i.empty(e)||e()})},deleteAddress(e,t){this.inner_loading=!0,i.deleteAddress(e).then(c=>{this.data.splice(t,1),this.ClientStore.getAddress()}).catch(c=>{i.notify("negative",c,"error_outline",this.$q)}).then(c=>{this.inner_loading=!1})},editAddress(e){console.debug(e),this.$refs.address_details.location_data=e,this.$refs.address_details.showModal()},afterSaveaddress(){console.debug("afterSaveaddress"),this.getAddresses()}}},U={key:1,class:"full-width text-center"},X={class:"text-h5 text-weight-bold line-normal"},G={class:"text-grey font12 no-margin"},J={class:"text-weight-medium"};function K(e,t,c,b,l,r){const y=S("AddressDetails");return d(),f(Y,{onRefresh:r.refresh},{default:s(()=>[a(x,{reveal:"","reveal-offset":"50",class:m({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode})},{default:s(()=>[a(z,null,{default:s(()=>[a(u,{onClick:t[0]||(t[0]=o=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(V,{class:"text-weight-bold"},{default:s(()=>[p(n(e.$t("Address")),1)]),_:1})]),_:1})]),_:1},8,["class"]),a(O,{padding:"",class:m(["q-pl-md q-pr-md",{"flex flex-center":!r.hasData&&!l.loading,"row items-stretch ":r.hasData&&!l.loading,"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode}])},{default:s(()=>[l.loading?(d(),f(E,{key:0,showing:!0,color:"primary",size:"md","label-class":"dark",class:"transparent"})):!r.hasData&&!l.loading?(d(),h("div",U,[g("div",X,n(e.$t("You don't have address added yet")),1),g("p",G,n(e.$t("Let's change that!")),1),a(u,{flat:"",color:"blue","no-caps":"",label:e.$t("Add new address"),dense:"",size:"sm",to:{path:"/location/map",query:{url:"/account/my-address"}}},null,8,["label"])])):(d(),h(_,{key:2},[a($,{flat:"",class:m(["radius8 col-12",{"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode}])},{default:s(()=>[a(D,null,{default:s(()=>[a(M,null,{default:s(()=>[(d(!0),h(_,null,C(l.data,(o,A)=>(d(),f(T,{key:o.address_uuid,appear:"","leave-active-class":"animated fadeOut"},{default:s(()=>[a(F,{onAction:v=>r.deleteAdress(A,o),"right-color":e.$q.dark.mode?"mydark":"white",class:m({"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode})},{right:s(()=>[a(u,{unelevated:"",round:"",color:"lightprimary","text-color":"primary",icon:"las la-trash",dense:""})]),default:s(()=>[L((d(),f(B,{onClick:v=>r.editAddress(o),clickable:"",class:m(["radius10 q-mb-sm",{"border-grey300 ":e.$q.dark.mode,"border-grey":!e.$q.dark.mode}])},{default:s(()=>[a(P,{top:""},{default:s(()=>[a(k,{lines:"1"},{default:s(()=>[g("span",J,n(o.attributes.address_label),1)]),_:2},1024),a(k,{caption:"",lines:"1"},{default:s(()=>[p(n(o.address.formatted_address),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","class"])),[[R]])]),_:2},1032,["onAction","right-color","class"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["class"]),a(N,{reveal:"",class:"bg-grey-1 q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"},{default:s(()=>[a(u,{loading:l.loading,to:{path:"/location/map",query:{url:"/account/my-address"}},label:e.$t("Add new address"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["loading","label"])]),_:1})],64)),a(y,{ref:"address_details",maps_config:b.DataStore.maps_config,onAfterSaveaddress:r.afterSaveaddress},null,8,["maps_config","onAfterSaveaddress"])]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var ge=Q(H,[["render",K]]);export{ge as default};
