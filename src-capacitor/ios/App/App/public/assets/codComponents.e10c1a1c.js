import{Q as h}from"./QSpace.e9701f98.js";import{_ as p,n as i,q as _,t as u,u as s,k as t,V as r,af as f,R as d,X as m,b2 as y,bG as w,ae as b,aa as g}from"./index.e230319b.js";import{Q as x}from"./QToolbar.6df38dcd.js";const Q={name:"codComponents",props:["title","label","payment_code","payment_credentials"],data(){return{show_modal:!1,data:[],loading:!1}},methods:{showPaymentForm(){this.show_modal=!0},close(){this.show_modal=!1},onSubmit(){let o=0;typeof this.payment_credentials[this.payment_code]!="undefined"&&this.payment_credentials[this.payment_code]!==null&&(o=this.payment_credentials[this.payment_code].merchant_id);const e={merchant_id:o,payment_code:this.payment_code};this.loading=!0,i.SavedPaymentProvider(e).then(a=>{this.close(),this.$emit("afterAddpayment")}).catch(a=>{i.notify("dark",a,"error",this.$q)}).then(a=>{this.loading=!1})}}},v={class:"text-weight-bold no-margin"},C={class:"q-ma-sm"},S={class:"font12"};function k(o,e,a,q,l,c){return _(),u(g,{modelValue:l.show_modal,"onUpdate:modelValue":e[2]||(e[2]=n=>l.show_modal=n),persistent:"","transition-show":"fade","transition-hide":"fade"},{default:s(()=>[t(b,{style:{width:"500px","max-width":"80vw"}},{default:s(()=>[t(x,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:s(()=>[t(h),t(r,{onClick:e[0]||(e[0]=n=>l.show_modal=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),t(f,{class:"q-pa-md"},{default:s(()=>[d("h5",v,m(a.title),1),d("div",C,[d("p",S,m(a.label.notes),1)])]),_:1}),t(y,{spaced:""}),t(w,null,{default:s(()=>[t(r,{label:o.$t(a.label.submit),loading:l.loading,onClick:e[1]||(e[1]=n=>c.onSubmit()),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["label","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var A=p(Q,[["render",k]]);export{A as default};
