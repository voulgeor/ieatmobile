import{_ as y,m as h,v,a0 as Q,p as x,q as d,t as u,u as o,k as t,aa as c,V as s,Q as a,U as p,a8 as q,R as _,S as k,ar as w,b0 as f,F as g,ad as V,a9 as S}from"./index.628e6afe.js";import{Q as C}from"./QToolbarTitle.00ffb145.js";import{Q as b}from"./QSpace.665629e1.js";import{Q as D}from"./QToolbar.380b4d8f.js";import{Q as N}from"./QImg.67b25d0d.js";import{Q as T}from"./QItemLabel.efb8f455.js";import{Q as z}from"./QList.1313d8ab.js";const B={name:"OrderPreview",props:["data","items_details"],components:{NumberFormat:h(()=>v(()=>import("./NumberFormat.64883c0a.js"),["assets/NumberFormat.64883c0a.js","assets/index.628e6afe.js","assets/index.f7829e99.css"]))},setup(){return{DataStore:Q()}},data(){return{dialog:!1}}},F={class:"text-primary"},I={class:"q-pl-md q-pr-md q-mb-sm"},L={class:"text-right"},O={class:"font13 text-weight-bold no-margin line-normal"},P={class:"text-grey font11 line-normal"},E={class:"text-strike"},A={class:"font14 text-weight-bold"},R={class:"row items-center justify-between q-pl-xl q-pt-sm border-grey-top text-weight-bold"};function U(r,n,l,$,i,j){const m=x("NumberFormat");return d(),u(S,{modelValue:i.dialog,"onUpdate:modelValue":n[1]||(n[1]=e=>i.dialog=e),position:"bottom"},{default:o(()=>[t(V,{class:"rounded-borders-top"},{default:o(()=>[t(D,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:o(()=>[t(C,{class:"text-dark text-weight-bold"},{default:o(()=>[c(s(r.$t("Order"))+" ",1),a("span",F,"#"+s(l.data.order_id_raw),1)]),_:1}),t(b),t(p,{onClick:n[0]||(n[0]=e=>i.dialog=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),a("div",I,[a("div",L,[t(p,{flat:"",color:r.$q.dark.mode?"secondary":"blue","no-caps":"",label:r.$t("Veiw full order details"),dense:"",size:"sm",to:{path:"/account/order-details",query:{order_uuid:l.data.order_uuid}}},null,8,["color","label","to"])]),t(z,{class:q(["radius8",{"bg-grey600 text-grey300":r.$q.dark.mode,"bg-lightprimary text-black":!r.$q.dark.mode}])},{default:o(()=>[(d(!0),_(g,null,k(l.data.items,e=>(d(),u(w,{key:e},{default:o(()=>[t(f,{avatar:""},{default:o(()=>[t(N,{src:l.items_details[e.item_id].photo,lazy:"",fit:"cover",style:{height:"70px",width:"70px"},class:"radius8","spinner-color":"secondary","spinner-size":"sm","placeholder-src":"placeholder.png"},null,8,["src"])]),_:2},1024),t(f,null,{default:o(()=>[t(T,null,{default:o(()=>[a("div",O,s(l.items_details[e.item_id].item_name),1),a("div",P,[c(s(e.qty)+" x ",1),e.discount>0?(d(),_(g,{key:0},[a("span",E,s(e.price),1),t(m,{amount:e.price-e.discount},null,8,["amount"])],64)):(d(),u(m,{key:1,amount:e.price},null,8,["amount"]))]),a("div",A,[t(m,{amount:e.qty*e.price},null,8,["amount"])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["class"]),t(b,{class:"q-pa-sm"}),a("div",R,[a("div",null,s(r.$t("Total")),1),a("div",null,s(l.data.total),1)])])]),_:1})]),_:1},8,["modelValue"])}var Y=y(B,[["render",U]]);export{Y as default};
