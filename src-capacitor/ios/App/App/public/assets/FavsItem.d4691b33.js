import{_ as y,a2 as g,n as u,q as o,S as s,t as i,V as l,ad as v,F as f}from"./index.7194caca.js";const m={name:"FavsItem",props:["layout","item_token","cat_id","active","size","data"],data(){return{loading:!1}},methods:{addTofav(){g.authenticated()?(this.loading=!0,u.addTofav(this.item_token,this.cat_id).then(r=>{this.$emit("afterSavefav",this.data,r.details.found)}).catch(r=>{u.notify("grey-5",r,"error_outline",this.$q)}).then(r=>{this.loading=!1})):u.notify("dark","Login to save this to your favorites","eva-info-outline",this.$q)}}};function c(r,e,t,k,a,n){return t.active?(o(),s(f,{key:0},[t.layout===1?(o(),i(l,{key:0,onClick:e[0]||(e[0]=d=>n.addTofav()),round:"",color:"transparent","text-color":"primary",size:"sm",icon:"favorite",loading:a.loading,unelevated:""},null,8,["loading"])):t.layout===2?(o(),i(l,{key:1,onClick:e[1]||(e[1]=d=>n.addTofav()),loading:a.loading,unelevated:"",round:"",color:"primary","text-color":"white",icon:"eva-heart-outline",size:"sm",dense:""},null,8,["loading"])):t.layout===3?(o(),i(l,{key:2,onClick:e[2]||(e[2]=d=>n.addTofav()),loading:a.loading,round:"",unelevated:"",color:"primary","text-color":"mygrey",size:"7px",icon:"favorite"},null,8,["loading"])):v("",!0)],64)):(o(),s(f,{key:1},[t.layout===1?(o(),i(l,{key:0,onClick:e[3]||(e[3]=d=>n.addTofav()),round:"",color:"transparent","text-color":"grey-5",size:"sm",icon:"favorite",loading:a.loading,unelevated:""},null,8,["loading"])):t.layout===2?(o(),i(l,{key:1,onClick:e[4]||(e[4]=d=>n.addTofav()),loading:a.loading,round:"",unelevated:"",color:"lightprimary","text-color":"primary",size:"sm",icon:"favorite_border"},null,8,["loading"])):t.layout===3?(o(),i(l,{key:2,onClick:e[5]||(e[5]=d=>n.addTofav()),loading:a.loading,round:"",unelevated:"",color:"mygrey","text-color":"dark",size:"7px",icon:"favorite_border"},null,8,["loading"])):v("",!0)],64))}var T=y(m,[["render",c]]);export{T as default};
