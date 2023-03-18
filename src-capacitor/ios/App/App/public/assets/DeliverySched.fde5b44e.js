import{Q as _}from"./QBtnToggle.2ee9a314.js";import{_ as m,n as i,q as h,t as S,u as l,k as r,af as u,bR as v,S as y,ad as f,bG as p,V as g,ae as w,aa as V}from"./index.e230319b.js";import{Q as c}from"./QSelect.e624ffdf.js";import{u as b}from"./DeliverySched.b3fa3c7a.js";import"./QChip.cd74be9a.js";import"./QItemLabel.a48bebab.js";import"./selection.69ceab22.js";import"./rtl.b51694b1.js";import"./format.2a3572e1.js";const D={name:"DeliverySched",props:["slug"],setup(){return{schedStore:b()}},data(){return{show_modal:!1,loading:!1,transaction_type:"",transaction_list:[],delivery_date:"",delivery_time:"",delivery_options:[],delivery_date_list:[],delivery_time_list:[],opening_hours:[],trans_data:[],is_saved:!1}},methods:{showSched(o){this.show_modal=o},beforeShow(){this.is_saved=!1,this.schedStore.whento_deliver=="schedule"&&this.schedStore.getDeliveryTimes(this.slug)},beforeHide(){this.is_saved||this.schedStore.getDeliverySched(i.getStorage("cart_uuid"),this.slug)},chooseWhen(o){o==="schedule"&&this.schedStore.getDeliveryTimes(this.slug)},chooseDate(o){this.schedStore.delivery_time_list=[],this.schedStore.delivery_time="",this.schedStore.getTimeList(o)},saveTransactionInfo(){this.schedStore.loading=!0;const o=i.getStorage("cart_uuid"),t={cart_uuid:o,delivery_date:this.schedStore.delivery_date,whento_deliver:this.schedStore.whento_deliver,delivery_time:this.schedStore.delivery_time,transaction_type:this.schedStore.transaction_type};i.saveTransactionInfo(t).then(d=>{i.empty(o)&&i.setStorage("cart_uuid",d.details.cart_uuid);const e={whento_deliver:this.schedStore.whento_deliver,delivery_date:this.schedStore.delivery_date,delivery_time:this.schedStore.delivery_time};i.setStorage("delivery_sched",1),i.setStorage("transaction_type",this.schedStore.transaction_type),i.setStorage("choosen_delivery",e),this.schedStore.new_transaction_type=this.schedStore.transaction_type,this.schedStore.new_whento_deliver=this.schedStore.whento_deliver,this.is_saved=!0,this.show_modal=!1,this.$emit("afterSavetrans",e)}).catch(d=>{i.notify("negative",d,"warning",this.$q)}).then(d=>{this.schedStore.loading=!1})}}},Q={key:0,class:"q-mt-md"};function B(o,t,d,e,n,a){return h(),S(V,{modelValue:n.show_modal,"onUpdate:modelValue":t[4]||(t[4]=s=>n.show_modal=s),position:"bottom",onBeforeShow:a.beforeShow,onBeforeHide:a.beforeHide},{default:l(()=>[r(w,null,{default:l(()=>[r(u,null,{default:l(()=>[r(_,{modelValue:e.schedStore.transaction_type,"onUpdate:modelValue":t[0]||(t[0]=s=>e.schedStore.transaction_type=s),"toggle-color":"secondary","no-caps":"",unelevated:"",class:"rounded-group q-mb-sm",options:e.schedStore.transaction_list},null,8,["modelValue","options"]),r(v,{modelValue:e.schedStore.whento_deliver,"onUpdate:modelValue":[t[1]||(t[1]=s=>e.schedStore.whento_deliver=s),a.chooseWhen],options:e.schedStore.delivery_options,color:"secondary"},null,8,["modelValue","options","onUpdate:modelValue"]),e.schedStore.whento_deliver==="schedule"?(h(),y("div",Q,[r(c,{outlined:"",dense:"",modelValue:e.schedStore.delivery_date,"onUpdate:modelValue":[t[2]||(t[2]=s=>e.schedStore.delivery_date=s),a.chooseDate],color:"secondary",class:"q-mb-md","transition-show":"scale","transition-hide":"scale",options:e.schedStore.delivery_date_list,"emit-value":"","map-options":""},null,8,["modelValue","options","onUpdate:modelValue"]),r(c,{outlined:"",dense:"",modelValue:e.schedStore.delivery_time,"onUpdate:modelValue":t[3]||(t[3]=s=>e.schedStore.delivery_time=s),color:"secondary",class:"q-mb-md","transition-show":"scale","transition-hide":"scale",options:e.schedStore.delivery_time_list},null,8,["modelValue","options"])])):f("",!0)]),_:1}),r(p,{class:""},{default:l(()=>[r(g,{unelevated:"",color:"primary","text-color":"white","no-caps":"",class:"full-width",label:o.$t("Confirm"),size:"lg",onClick:a.saveTransactionInfo,loading:e.schedStore.loading},null,8,["label","onClick","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue","onBeforeShow","onBeforeHide"])}var G=m(D,[["render",B]]);export{G as default};
