import{J as s,n as e}from"./index.7194caca.js";const r=s("client",{state:()=>({loading:!1,data:[],user_settings:[]}),persist:!0,getters:{hasData(){if(!e.empty(this.data)){if(Object.keys(this.data).length>0)return!0}return!1}},actions:{getAddress(){this.loading=!0,e.clientAddresses().then(t=>{this.data=t.details.addresses}).catch(t=>{this.data=[]}).then(t=>{this.loading=!1})},hadData(){return e.empty(this.data)?!1:Object.keys(this.data).length>0}}});export{r as u};
