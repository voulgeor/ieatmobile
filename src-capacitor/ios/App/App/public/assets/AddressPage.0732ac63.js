import{_ as f,q as g,R as v,k as e,u as l,F as Q,U as d,aa as n,V as r,ad as _,ae as y,ar as h,b0 as p,Q as i,a2 as V,ab as u,bK as k,bE as w}from"./index.dd7e00fb.js";import{Q as q}from"./QToolbarTitle.b1bd964d.js";import{Q as $}from"./QBadge.a168a02c.js";import{Q as x}from"./QToolbar.8b195103.js";import{Q as A}from"./QHeader.29791060.js";import{Q as m}from"./QSpace.f419decb.js";import{Q as c}from"./QItemLabel.a9f52d7c.js";import{Q as U}from"./QPopupEdit.ad06811d.js";import{Q as C}from"./QList.0d28954b.js";import{Q as S}from"./QSelect.787a612b.js";import{Q as B}from"./QBtnToggle.6edbf58b.js";import{Q as I}from"./QPage.d286c01b.js";import"./QResizeObserver.e43a870f.js";import"./QChip.e6b8778e.js";import"./selection.3817dd43.js";import"./rtl.4b414a6d.js";import"./format.2a3572e1.js";const P={name:"PageName",data(){return{back_url:"",address_uuid:"",location_name:"",delivery_options:"",delivery_instructions:"",address_label:1,edit_address:this.$t("Guadalupe nuevo makati city"),options:[this.$t("leave at my door"),this.$t("hand it to me"),this.$t("meet outside")]}},mounted(){this.back_url=this.$route.query.url,this.address_uuid=this.$route.query.uuid}},T=i("div",{class:"map bg-grey-2 rounded-10 q-mb-md"},null,-1),K={class:"cursor-pointer"},N={class:"text-h6"};function E(s,a,z,D,o,F){return g(),v(Q,null,[e(A,{reveal:"","reveal-offset":"50",class:"bg-white"},{default:l(()=>[e(x,null,{default:l(()=>[e(d,{onClick:a[0]||(a[0]=t=>s.$router.back()),flat:"",round:"",dense:"",icon:"arrow_back",color:"dark"}),e(q,{class:"text-dark text-center text-weight-bold"},{default:l(()=>[n(r(s.$t("Address")),1)]),_:1}),e(d,{to:"/cart",color:"white",rounded:"",unelevated:"","text-color":"dark",icon:"eva-shopping-bag-outline",dense:"","no-caps":""},{default:l(()=>[e($,{floating:"",color:"primary2",rounded:""})]),_:1})]),_:1})]),_:1}),e(I,{padding:"",class:"bg-grey-2"},{default:l(()=>[e(m,{class:"q-pa-xs"}),e(_,{flat:"",class:"radius8"},{default:l(()=>[e(y,null,{default:l(()=>[T,e(C,{class:"qlist-no-padding q-mb-md"},{default:l(()=>[e(h,null,{default:l(()=>[e(p,null,{default:l(()=>[e(c,{lines:"2",class:"font12 text-weight-bold"},{default:l(()=>[n(r(s.$t("Quezon City")),1)]),_:1}),e(c,{caption:"",class:"font12 text-weight-medium"},{default:l(()=>[i("div",K,[n(r(o.edit_address)+" ",1),e(V,{name:"eva-edit-outline"}),e(U,{modelValue:o.edit_address,"onUpdate:modelValue":a[1]||(a[1]=t=>o.edit_address=t),"auto-save":""},{default:l(t=>[e(u,{modelValue:t.value,"onUpdate:modelValue":b=>t.value=b,dense:"",autofocus:"",counter:"",onKeyup:k(t.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])]),_:1})]),_:1}),e(p,{side:""},{default:l(()=>[e(d,{unelevated:"",color:"primary","text-color":"dark",dense:"",label:s.$t("Adjust Pin"),"no-caps":"",class:"q-pl-sm q-pr-sm"},null,8,["label"])]),_:1})]),_:1})]),_:1}),e(u,{modelValue:o.location_name,"onUpdate:modelValue":a[2]||(a[2]=t=>o.location_name=t),autogrow:"",dense:"",outlined:"",color:"dark","bg-color":"white",borderless:"",label:s.$t("Aparment, suite or floor")},null,8,["modelValue","label"]),e(m,{class:"q-pa-sm"}),e(S,{outlined:"",modelValue:o.delivery_options,"onUpdate:modelValue":a[3]||(a[3]=t=>o.delivery_options=t),options:o.options,label:s.$t("Delivery Options"),dense:""},null,8,["modelValue","options","label"]),e(m,{class:"q-pa-sm"}),e(u,{modelValue:o.delivery_instructions,"onUpdate:modelValue":a[4]||(a[4]=t=>o.delivery_instructions=t),autogrow:"",dense:"",outlined:"",color:"dark","bg-color":"white",borderless:"",label:s.$t("Add delivery instructions")},null,8,["modelValue","label"]),i("div",N,r(s.$t("Address label")),1),e(B,{modelValue:o.address_label,"onUpdate:modelValue":a[5]||(a[5]=t=>o.address_label=t),"no-caps":"",rounded:"",unelevated:"","toggle-color":"dark","toggle-text-color":"white",color:"grey-2","text-color":"dark",size:"12px",class:"font11 bg-grey-2 q-mb-md text-weight-600",spread:"",options:[{label:this.$t("Home"),value:1},{label:this.$t("Work"),value:2},{label:this.$t("School"),value:3},{label:this.$t("other"),value:"other"}]},null,8,["modelValue","options"]),i("pre",null,r(o.back_url),1),i("pre",null,r(o.address_uuid),1)]),_:1}),e(w,{vertical:"",align:"center"},{default:l(()=>[e(d,{label:s.$t("Save Address"),unelevated:"",color:"primary","text-color":"dark","no-caps":"",class:"full-width"},null,8,["label"]),e(d,{label:s.$t("Cancel"),flat:"","text-color":"amber-14","no-caps":"",class:"full-width"},null,8,["label"])]),_:1})]),_:1})]),_:1})],64)}var se=f(P,[["render",E]]);export{se as default};
