import{_ as c,a2 as v,n as o,q as n,t as s,at as d,V as l}from"./index.e230319b.js";const u={name:"FavsResto",props:["merchant_id","active","layout","size","data"],data(){return{loading:!1}},methods:{addTofav(){if(!v.authenticated()){o.notify("dark","Login to save it to your favorites","error",this.$q);return}this.loading=!0,o.SaveStore(this.merchant_id).then(e=>{this.$emit("afterSavefav",this.data,e.details.found)}).catch(e=>{o.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})}}};function h(e,t,a,g,i,r){return a.active?(n(),s(l,{key:0,round:"",onClick:t[0]||(t[0]=d(f=>r.addTofav(),["stop"])),color:"secondary",unelevated:"","text-color":"white",icon:"favorite_border",dense:"",size:a.size,loading:i.loading},null,8,["size","loading"])):(n(),s(l,{key:1,round:"",onClick:t[1]||(t[1]=d(f=>r.addTofav(),["stop"])),color:"mygrey",unelevated:"","text-color":"dark",icon:"favorite_border",dense:"",size:a.size,loading:i.loading},null,8,["size","loading"]))}var m=c(u,[["render",h]]);export{m as default};
