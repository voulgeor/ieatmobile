import{J as s,n as a}from"./index.a3a9b403.js";const r=s("favorite",{state:()=>({loading:!1,items_data:{},items_done:!1}),getters:{hasData(){return a.empty(this.items_data)?!1:Object.keys(this.items_data).length>0}},actions:{getItemFavorites(t){this.loading=!0,a.fetchDataByTokenPost("getItemFavorites","slug="+t).then(e=>{this.items_data[t]=e.details.item_ids}).catch(e=>{this.items_data[t]={}}).then(e=>{this.loading=!1,this.items_done=!0})},hadData(){return a.empty(this.items_data)?!1:Object.keys(this.items_data).length>0}}});export{r as u};
