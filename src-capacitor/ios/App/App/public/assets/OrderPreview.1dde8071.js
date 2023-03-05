import{_ as y,m as h,v,a1 as Q,p as x,q as d,t as u,u as o,k as t,ab as c,X as s,R as a,V as p,a9 as q,S as _,U as k,as as w,b3 as f,F as b,ae as V,aa as S}from"./index.7194caca.js";import{Q as C}from"./QToolbarTitle.2f2c97c6.js";import{Q as g}from"./QSpace.72e06727.js";import{Q as D}from"./QToolbar.6e86fa1d.js";import{Q as N}from"./QImg.1391a400.js";import{Q as T}from"./QItemLabel.dda41321.js";import{Q as z}from"./QList.5f4666ff.js";const B={name:"OrderPreview",props:["data","items_details"],components:{NumberFormat:h(()=>v(()=>import("./NumberFormat.89c5bf58.js"),["assets/NumberFormat.89c5bf58.js","assets/index.7194caca.js","assets/index.469535cd.css"]))},setup(){return{DataStore:Q()}},data(){return{dialog:!1}}},F={class:"text-primary"},I={class:"q-pl-md q-pr-md q-mb-sm"},L={class:"text-right"},O={class:"font13 text-weight-bold no-margin line-normal"},P={class:"text-grey font11 line-normal"},E={class:"text-strike"},A={class:"font14 text-weight-bold"},R={class:"row items-center justify-between q-pl-xl q-pt-sm border-grey-top text-weight-bold"};function U(r,n,l,$,i,j){const m=x("NumberFormat");return d(),u(S,{modelValue:i.dialog,"onUpdate:modelValue":n[1]||(n[1]=e=>i.dialog=e),position:"bottom"},{default:o(()=>[t(V,{class:"rounded-borders-top"},{default:o(()=>[t(D,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:o(()=>[t(C,{class:"text-dark text-weight-bold"},{default:o(()=>[c(s(r.$t("Order"))+" ",1),a("span",F,"#"+s(l.data.order_id_raw),1)]),_:1}),t(g),t(p,{onClick:n[0]||(n[0]=e=>i.dialog=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),a("div",I,[a("div",L,[t(p,{flat:"",color:r.$q.dark.mode?"secondary":"blue","no-caps":"",label:r.$t("Veiw full order details"),dense:"",size:"sm",to:{path:"/account/order-details",query:{order_uuid:l.data.order_uuid}}},null,8,["color","label","to"])]),t(z,{class:q(["radius8",{"bg-grey600 text-grey300":r.$q.dark.mode,"bg-lightprimary text-black":!r.$q.dark.mode}])},{default:o(()=>[(d(!0),_(b,null,k(l.data.items,e=>(d(),u(w,{key:e},{default:o(()=>[t(f,{avatar:""},{default:o(()=>[t(N,{src:l.items_details[e.item_id].photo,lazy:"",fit:"cover",style:{height:"70px",width:"70px"},class:"radius8","spinner-color":"secondary","spinner-size":"sm","placeholder-src":"placeholder.png"},null,8,["src"])]),_:2},1024),t(f,null,{default:o(()=>[t(T,null,{default:o(()=>[a("div",O,s(l.items_details[e.item_id].item_name),1),a("div",P,[c(s(e.qty)+" x ",1),e.discount>0?(d(),_(b,{key:0},[a("span",E,s(e.price),1),t(m,{amount:e.price-e.discount},null,8,["amount"])],64)):(d(),u(m,{key:1,amount:e.price},null,8,["amount"]))]),a("div",A,[t(m,{amount:e.qty*e.price},null,8,["amount"])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["class"]),t(g,{class:"q-pa-sm"}),a("div",R,[a("div",null,s(r.$t("Total")),1),a("div",null,s(l.data.total),1)])])]),_:1})]),_:1},8,["modelValue"])}var Y=y(B,[["render",U]]);export{Y as default};
