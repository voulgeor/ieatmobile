import{_ as w,m as q,n as l,a1 as A,p as D,q as c,R as f,j as e,u as a,F as m,U as g,aa as i,V as n,ad as k,ar as y,b0 as o,b1 as C,S,v as L,as as Q,bg as z}from"./index.b5428c1f.js";import{Q as I}from"./QToolbarTitle.ad5aac42.js";import{Q as P}from"./QToolbar.b8f4cf51.js";import{Q as V}from"./QHeader.3c924b64.js";import{Q as p}from"./QSpace.de8f976c.js";import{Q as _}from"./QItemLabel.25732301.js";import{Q as x}from"./QList.9257b2df.js";import{Q as v}from"./QSkeleton.4b3630c4.js";import{Q as T}from"./QInnerLoading.e8a064f8.js";import{Q as B}from"./QPage.40760bfd.js";import"./QResizeObserver.74d4236c.js";const E={name:"AddressSelect",components:{AddressDetails:q(()=>L(()=>import("./AddressDetails.4a746f1b.js"),["assets/AddressDetails.4a746f1b.js","assets/index.b5428c1f.js","assets/index.f7829e99.css","assets/QToolbarTitle.ad5aac42.js","assets/QToolbar.b8f4cf51.js","assets/QPopupEdit.ef009250.js","assets/QSelect.72c93ca6.js","assets/QChip.bdda5644.js","assets/QItemLabel.25732301.js","assets/selection.099be30b.js","assets/rtl.9c6e6d3e.js","assets/format.ec2e0666.js","assets/QSpace.de8f976c.js","assets/QBtnToggle.becf21c8.js","assets/QFooter.04730c47.js","assets/QResizeObserver.74d4236c.js","assets/QForm.e9b11582.js","assets/ClosePopup.43f4e78b.js","assets/index.0dada255.js","assets/MapStore.0efde967.js"]))},data(){return{modal:!1,back_url:"",data:[],address_uuid:"",loading:!1,locate_loading:!1,location_data:[]}},mounted(){this.back_url=this.$route.query.url,l.empty(this.back_url)&&(this.back_url="/home"),A.authenticated()&&this.getAddresses();const t=l.getStorage("place_id");typeof t!="undefined"&&t!==null&&(this.address_uuid=t)},computed:{},methods:{getAddresses(){this.loading=!0,l.getAddresses().then(t=>{this.data=t.details.data}).catch(t=>{}).then(t=>{this.loading=!1})},afterSelectaddress(t){console.debug(t)},removeFromList(t){Object.entries(this.data).forEach(([s,r])=>{r.address_uuid===t&&(console.debug(s),this.data.splice(s,1))})},deleteConfirm(t){this.$q.dialog({title:this.$t("Confirm"),message:this.$t("Are you sure you want to Delete?"),persistent:!0,ok:{unelevated:!0,color:"warning",rounded:!0,"text-color":"black",size:"md",label:this.$t("Yes"),"no-caps":!0},cancel:{unelevated:!0,rounded:!0,color:"grey-3","text-color":"black",size:"md",label:this.$t("Cancel"),"no-caps":!0}}).onOk(()=>{l.deleteAddress(t).then(s=>{this.removeFromList(t)}).catch(s=>{l.notify("negative",s,"error_outline",this.$q)}).then(s=>{})}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})},locateLocation(){navigator.geolocation?(this.locate_loading=!0,navigator.geolocation.getCurrentPosition(t=>{this.locate_loading=!1,this.reverseGeocoding(t.coords.latitude,t.coords.longitude)},t=>{this.locate_loading=!1})):(this.locate_loading=!1,l.notify("negative",this.$t("Browser doesn't support Geolocation"),"error_outline",this.$q))},reverseGeocoding(t,s){this.locate_loading=!0,l.reverseGeocoding(t,s).then(r=>{typeof r.details.data.address!="undefined"&&r.details.data.address!==null?(this.setAddress(r.details.data),this.saveAddress(r.details.data.place_id)):l.notify("negative",this.$t("This location is not available"),"error_outline",this.$q)}).catch(r=>{l.notify("negative",r,"error_outline",this.$q)}).then(r=>{this.locate_loading=!1})},setAddress(t){l.setStorage("place_data",t),l.setStorage("place_id",t.place_id),this.backPage()},backPage(){l.empty(this.back_url)?this.$router.push("/home"):this.$router.push(this.back_url)},saveAddress(t){A.authenticated()&&l.SavePlaceByID(t).then(s=>{}).catch(s=>{}).then(s=>{})},isSelected(t){return this.address_uuid===t},editAddress(t){this.$refs.address_details.location_data=t,this.$refs.address_details.showModal()},afterSaveaddress(){A.authenticated()&&this.getAddresses()}}},F={key:0},G={key:1};function O(t,s,r,M,h,u){const $=D("AddressDetails");return c(),f(m,null,[e(V,{reveal:"","reveal-offset":"50",class:"bg-white"},{default:a(()=>[e(P,null,{default:a(()=>[e(g,{onClick:s[0]||(s[0]=d=>t.$router.back()),flat:"",round:"",dense:"",icon:"arrow_back",color:"dark"}),e(I,{class:"text-dark text-center text-weight-bold"},{default:a(()=>[i(n(t.$t("Delivery Address")),1)]),_:1})]),_:1})]),_:1}),e(B,{padding:"",class:"bg-grey-2"},{default:a(()=>[e(p,{class:"q-pa-xs"}),e(k,{flat:"",class:"no-border-radius"},{default:a(()=>[e(x,null,{default:a(()=>[e(y,{tag:"label",onClick:u.locateLocation},{default:a(()=>[e(o,{avatar:""},{default:a(()=>[e(C,{rounded:"",color:"amber-2","text-color":"orange-5",icon:"eva-navigation-2-outline"})]),_:1}),e(o,null,{default:a(()=>[e(_,{lines:"2",class:"font12 text-weight-bold"},{default:a(()=>[i(n(t.$t("Share your location")),1)]),_:1}),e(_,{caption:"",class:"font12 text-weight-medium"},{default:a(()=>[i(n(t.$t("Enabled location services")),1)]),_:1})]),_:1}),e(o,{side:""},{default:a(()=>[e(g,{round:"",unelevated:"","text-color":"dark",icon:"chevron_right",dense:""})]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1}),e(p,{class:"q-pa-xs"}),e(k,{flat:"",class:"no-border-radius"},{default:a(()=>[e(x,null,{default:a(()=>[e(y,{tag:"label",to:{path:"/location/map",query:{url:"/address/select?url="+this.back_url}}},{default:a(()=>[e(o,{avatar:""},{default:a(()=>[e(C,{rounded:"",color:"blue-2","text-color":"dark",icon:"las la-map-marked"})]),_:1}),e(o,null,{default:a(()=>[e(_,{lines:"2",class:"font12 text-weight-bold"},{default:a(()=>[i(n(t.$t("Choose from Map")),1)]),_:1}),e(_,{caption:"",class:"font12 text-weight-medium"},{default:a(()=>[i(n(t.$t("select your address from map")),1)]),_:1})]),_:1}),e(o,{side:""},{default:a(()=>[e(g,{round:"",unelevated:"","text-color":"dark",icon:"chevron_right",dense:""})]),_:1})]),_:1},8,["to"])]),_:1})]),_:1}),e(p,{class:"q-pa-xs"}),h.loading?(c(),f("div",F,[(c(),f(m,null,S(6,d=>(c(),f(m,{key:d},[e(k,{flat:"",class:"no-border-radius"},{default:a(()=>[e(x,null,{default:a(()=>[e(y,{tag:"label"},{default:a(()=>[e(o,{avatar:""},{default:a(()=>[e(v,{type:"QCheckbox",size:"20px"})]),_:1}),e(o,null,{default:a(()=>[e(v,{type:"text"}),e(v,{type:"text"})]),_:1}),e(o,{side:""},{default:a(()=>[e(v,{type:"circle",size:"20px",class:"q-mb-sm"}),e(v,{type:"circle",size:"20px"})]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{class:"q-pa-xs"})],64))),64))])):(c(),f("div",G,[(c(!0),f(m,null,S(h.data,d=>(c(),f(m,{key:d.address_uuid},[e(k,{flat:"",class:"no-border-radius"},{default:a(()=>[e(x,null,{default:a(()=>[e(y,{tag:"label",onClick:Q(b=>u.setAddress(d),["stop"]),active:u.isSelected(d.place_id)},{default:a(()=>[e(o,{avatar:""},{default:a(()=>[e(z,{modelValue:h.address_uuid,"onUpdate:modelValue":s[1]||(s[1]=b=>h.address_uuid=b),val:d.place_id},null,8,["modelValue","val"])]),_:2},1024),e(o,null,{default:a(()=>[e(_,{lines:"2",class:"font12 text-weight-bold"},{default:a(()=>[i(n(d.address.formatted_address),1)]),_:2},1024),e(_,{caption:"",class:"font12 text-weight-medium"},{default:a(()=>[i(n(d.address.address2),1)]),_:2},1024),e(_,{caption:"",class:"font11 text-weight-medium"},{default:a(()=>[i(n(t.$t("Home")),1)]),_:1})]),_:2},1024),e(o,{side:""},{default:a(()=>[e(g,{icon:"eva-edit-2-outline",dense:"",unelevated:"",rounded:"",size:"sm",class:"q-mb-sm",onClick:Q(b=>u.editAddress(d),["stop"])},null,8,["onClick"]),e(g,{icon:"eva-trash-2-outline",dense:"",unelevated:"",rounded:"",size:"sm",onClick:Q(b=>u.deleteConfirm(d.address_uuid),["stop"]),disabled:u.isSelected(d.place_id)},null,8,["onClick","disabled"])]),_:2},1024)]),_:2},1032,["onClick","active"])]),_:2},1024)]),_:2},1024),e(p,{class:"q-pa-xs"})],64))),128))])),e(T,{showing:h.locate_loading,size:"md",color:"primary"},null,8,["showing"]),e($,{ref:"address_details",onAfterSaveaddress:u.afterSaveaddress},null,8,["onAfterSaveaddress"])]),_:1})],64)}var ee=w(E,[["render",O]]);export{ee as default};
