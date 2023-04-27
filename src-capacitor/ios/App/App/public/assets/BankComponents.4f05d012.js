import{Q as h}from"./QSpace.eb4aa71a.js";import{_ as p,n as d,q as _,t as f,u as a,k as t,V as r,af as u,R as i,X as m,b2 as y,bG as w,ae as b,aa as g}from"./index.a3a9b403.js";import{Q as C}from"./QToolbar.84f8e4cf.js";const x={name:"BankComponents",props:["title","label","payment_code","payment_credentials"],data(){return{show_modal:!1,data:[],loading:!1,credentials:[]}},methods:{showPaymentForm(){this.show_modal=!0,this.setCredentials()},close(){this.show_modal=!1},closePayment(){this.$emit("afterCancelPayment")},setCredentials(){typeof this.payment_credentials[this.payment_code]!="undefined"&&this.payment_credentials[this.payment_code]!==null&&(this.credentials=this.payment_credentials[this.payment_code])},onSubmit(){const o={merchant_id:this.credentials.merchant_id,payment_code:this.payment_code};this.loading=!0,d.SavedPaymentProvider(o).then(e=>{this.close(),this.$emit("afterAddpayment")}).catch(e=>{d.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})}}},Q={class:"text-weight-bold no-margin"},v={class:"q-ma-sm"},k={class:"font12"};function S(o,e,n,q,s,c){return _(),f(g,{modelValue:s.show_modal,"onUpdate:modelValue":e[2]||(e[2]=l=>s.show_modal=l),persistent:"","transition-show":"fade","transition-hide":"fade"},{default:a(()=>[t(b,{style:{width:"500px","max-width":"80vw"}},{default:a(()=>[t(C,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:a(()=>[t(h),t(r,{onClick:e[0]||(e[0]=l=>s.show_modal=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),t(u,{class:"q-pa-md"},{default:a(()=>[i("h5",Q,m(n.title),1),i("div",v,[i("p",k,m(n.label.notes),1)])]),_:1}),t(y,{spaced:""}),t(w,null,{default:a(()=>[t(r,{label:o.$t(n.label.submit),loading:s.loading,onClick:e[1]||(e[1]=l=>c.onSubmit()),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["label","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var A=p(x,[["render",S]]);export{A as default};