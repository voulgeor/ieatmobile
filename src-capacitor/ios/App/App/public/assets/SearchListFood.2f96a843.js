import{Q as _}from"./QImg.f2e4421e.js";import{_ as d,q as s,R as a,k as o,u as l,b0 as m,Q as t,V as n,F as r,S as u,aa as c,ac as p}from"./index.dd7e00fb.js";import{Q as h}from"./QChip.e6b8778e.js";import{Q as f}from"./QItemLabel.a9f52d7c.js";const y={name:"SearchListFood",props:["items","merchant_list","money_config"],setup(){return{}}},g={class:"font13 text-weight-bold no-margin line-normal"},x={class:"text-grey ellipsis-2-lines font12 line-normal"},k=["innerHTML"],Q={key:0,class:"text-grey-7 font12 text-weight-medium"},v={class:"text-strike"},w=t("span",{class:"q-pr-sm"},null,-1),L={class:"row items-center justify-between"},z=t("span",{class:"text-dark"},"Food",-1);function F(S,V,i,b,N,B){return s(),a(r,null,[o(m,{avatar:""},{default:l(()=>[o(_,{src:i.items.url_image,lazy:"",fit:"cover",style:{height:"80px",width:"80px"},class:"radius8","spinner-color":"secondary","spinner-size":"sm","placeholder-src":"placeholder.png"},null,8,["src"])]),_:1}),o(m,null,{default:l(()=>[o(f,null,{default:l(()=>[t("div",g,n(i.items.item_name),1),t("div",x,[t("span",{innerHTML:i.items.item_description},null,8,k)]),i.items.price?(s(),a("div",Q,[(s(!0),a(r,null,u(i.items.price,e=>(s(),a(r,{key:e},[e.discount>0?(s(),a(r,{key:0},[c(n(e.size_name)+" ",1),t("span",v,n(e.pretty_price),1),c(" "+n(e.pretty_price_after_discount),1)],64)):(s(),a(r,{key:1},[c(n(e.size_name)+" "+n(e.pretty_price),1)],64)),w],64))),128))])):p("",!0),t("div",L,[o(h,{size:"sm",color:"mygrey"},{default:l(()=>[z]),_:1})])]),_:1})]),_:1})],64)}var H=d(y,[["render",F]]);export{H as default};
