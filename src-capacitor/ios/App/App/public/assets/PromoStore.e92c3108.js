import{J as o,n as a}from"./index.744ddfee.js";const s=o("promostore",{state:()=>({data:{},loading:!0,promo_selected:{},total_promo:{}}),persist:!0,getters:{hasData(){return a.empty(this.data)?!1:Object.keys(this.data).length>0}},actions:{loadPromo(e){this.loading=!0,a.fetchDataPost("loadPromo","merchant_id="+e+"&cart_uuid="+a.getStorage("cart_uuid")).then(t=>{this.data[e]=t.details.data,this.promo_selected[e]=t.details.promo_selected,this.total_promo[e]=t.details.count}).catch(t=>{this.data=[],this.promo_selected=[],this.total_promo=[]}).then(t=>{this.loading=!1})},hadData(){return a.empty(this.data)?!1:Object.keys(this.data).length>0}}});export{s as u};
