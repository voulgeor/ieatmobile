import{I as i,n as a}from"./index.bc7ef6d7.js";const l=i("paymentstore",{state:()=>({loading:!1,loading2:!1,data:{},credentials:{},payment_uuid:{},payment_list:[],payment_credentials:[]}),getters:{hasData(){return a.empty(this.payment_list)?!1:Object.keys(this.payment_list).length>0}},actions:{SavedPaymentList(t){this.loading=!0,a.SavedPaymentList(a.getStorage("cart_uuid")).then(e=>{this.data[t]=e.details.data,this.credentials[t]=e.details.credentials,this.payment_uuid[t]=e.details.default_payment_uuid}).catch(e=>{this.data={},this.credentials={},this.payment_uuid={}}).then(e=>{this.loading=!1})},PaymentMethod(t,e){a.empty(t)&&(this.loading2=!0),a.fetchDataByTokenPost("PaymentMethod",e).then(s=>{this.payment_list=s.details.data,this.payment_credentials=s.details.credentials}).catch(s=>{this.payment_list=[],this.payment_credentials=[]}).then(s=>{this.loading2=!1,a.empty(t)||t()})},hadData(){return a.empty(this.payment_list)?!1:Object.keys(this.payment_list).length>0}}});export{l as u};
