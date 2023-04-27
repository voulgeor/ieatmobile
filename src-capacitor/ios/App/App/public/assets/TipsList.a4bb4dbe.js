import{Q as p}from"./QBtnToggle.2ee9a314.js";import{Q as u}from"./QToolbarTitle.259c42a1.js";import{Q as m}from"./QSpace.e9701f98.js";import{_ as h,n as i,q as c,S as g,k as l,u as s,ae as f,a9 as b,ab as y,X as k,V as d,af as _,ac as w,aa as T,F as v}from"./index.e230319b.js";import{Q}from"./QToolbar.6df38dcd.js";import{Q as V}from"./QForm.014ed36c.js";const q={props:["tips_data","tips_value"],name:"TipsList",data(){return{tips:0,show_modal:!1,loading:!1,manual_tip:0}},created(){console.log(this.tips_value),this.tips_value&&(this.tips=this.tips_value.tips)},watch:{tips_value(e,t){this.tips=this.tips_value.tips}},methods:{onApplyTips(){this.tips=this.manual_tip,this.checkoutAddTips()},updateTips(){this.tips==="fixed"?this.show_modal=!0:(this.show_modal=!1,this.checkoutAddTips())},checkoutAddTips(){this.loading=!0,i.checkoutAddTips({cart_uuid:i.getStorage("cart_uuid"),value:this.tips}).then(e=>{this.show_modal=!1,this.$emit("afterApplytips")}).catch(e=>{i.notify("grey-8",e,"error",this.$q)}).then(e=>{this.loading=!1})}}};function A(e,t,n,S,o,r){return c(),g(v,null,[l(p,{modelValue:o.tips,"onUpdate:modelValue":t[0]||(t[0]=a=>o.tips=a),"toggle-color":"secondary",color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark","no-caps":"","no-wrap":"",unelevated:"",options:n.tips_data,class:"rounded-group2 small text-weight-bold line-1 q-pa-none",onClick:r.updateTips,disable:o.loading},null,8,["modelValue","color","text-color","options","onClick","disable"]),l(T,{modelValue:o.show_modal,"onUpdate:modelValue":t[3]||(t[3]=a=>o.show_modal=a),position:"bottom"},{default:s(()=>[l(f,null,{default:s(()=>[l(Q,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:s(()=>[l(u,{class:b(["text-weight-bold",{"text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},{default:s(()=>[y(k(e.$t("Add Tips")),1)]),_:1},8,["class"]),l(m),l(d,{onClick:t[1]||(t[1]=a=>o.show_modal=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),l(V,{onSubmit:r.onApplyTips},{default:s(()=>[l(_,null,{default:s(()=>[l(w,{modelValue:o.manual_tip,"onUpdate:modelValue":t[2]||(t[2]=a=>o.manual_tip=a),label:e.$t("Enter amount"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",type:"number",rules:[a=>a&&a.length>0||e.$t("Please enter valid amount")]},null,8,["modelValue","label","bg-color","label-color","rules"]),l(d,{type:"submit",label:e.$t("Save"),loading:o.loading,unelevated:"",color:"primary","text-color":"white","no-caps":"",class:"full-width",size:"lg"},null,8,["label","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])],64)}var U=h(q,[["render",A]]);export{U as default};
