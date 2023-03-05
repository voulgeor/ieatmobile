import{_ as g,m as w,v as x,p as q,q as s,R as a,k as c,u as m,Q as i,F as r,V as o,ac as d,b0 as y,S as _,aa as u,t as b,a8 as l}from"./index.bc7ef6d7.js";import{Q as z}from"./QImg.6298c716.js";import{Q as h}from"./QChip.55a9e2ca.js";const C={name:"MerchantListTpl",components:{FavsResto:w(()=>x(()=>import("./FavsResto.d727c5b4.js"),["assets/FavsResto.d727c5b4.js","assets/index.bc7ef6d7.js","assets/index.f7829e99.css"]))},props:["items","cuisine","reviews","estimation","services","items_min_max","promos"],methods:{afterSavefav(t,v){t.saved_store=v}}},S={class:"relative-position"},Q=i("div",{class:"absolute-top fit dimmed"},null,-1),R={class:"absolute-top fit z-top text-weight-medium flex flex-center text-white font11"},V={class:"row items-center justify-between"},F={class:"col"},A={key:0,class:"font8 text-primary text-weight-bold"},B={class:"font13 text-weight-bold no-margin line-normal"},L={class:""},N={class:"row items-center justify-between"},T={class:"col"},j={class:"text-grey ellipsis-2-lines font12 line-normal"},E={key:0},I={class:"col-5 text-right"},M={class:"row items-center justify-between"},O={class:"col"},P={class:"col text-right font11 text-grey"};function D(t,v,e,G,H,f){const k=q("FavsResto");return s(),a(r,null,[c(y,{side:""},{default:m(()=>[i("div",S,[c(z,{src:e.items.url_logo,lazy:"",fit:"cover",style:{height:"80px",width:"80px"},class:"radius8","spinner-color":"amber","spinner-size":"sm"},null,8,["src"]),e.items.open_status==0?(s(),a(r,{key:0},[Q,i("div",R,o(t.$t("Closed")),1)],64)):d("",!0)])]),_:1}),c(y,null,{default:m(()=>[i("div",V,[i("div",F,[e.promos[e.items.merchant_id]?(s(),a("div",A,o(t.$t("PROMO")),1)):d("",!0),i("div",B,o(e.items.restaurant_name),1)]),i("div",L,[c(k,{ref:"favs",data:e.items,active:e.items.saved_store==1,merchant_id:e.items.merchant_id,size:"7px",onAfterSavefav:f.afterSavefav},null,8,["data","active","merchant_id","onAfterSavefav"])])]),i("div",N,[i("div",T,[i("div",j,[(s(!0),a(r,null,_(e.items.cuisine_group,n=>(s(),a(r,{key:n},[e.cuisine[n]?(s(),a(r,{key:0},[u(o(e.cuisine[n].name)+", ",1)],64)):d("",!0)],64))),128))]),e.promos[e.items.merchant_id]?(s(!0),a(r,{key:0},_(e.promos[e.items.merchant_id],n=>(s(),a("div",{key:n},[n.discount_type=="offer"?(s(),a("div",E,[c(h,{dense:"",color:n.discount_type=="voucher"?"lightprimary":"green","text-color":n.discount_type=="voucher"?"dark":"white",class:"font8 ellipsis q-ma-none"},{default:m(()=>[u(o(n.discount_name),1)]),_:2},1032,["color","text-color"])])):d("",!0)]))),128)):d("",!0)]),i("div",I,[e.estimation[e.items.merchant_id]?(s(),a(r,{key:0},[e.services[e.items.merchant_id]?(s(!0),a(r,{key:0},_(e.services[e.items.merchant_id],n=>(s(),a(r,null,[n=="delivery"?(s(),b(h,{key:0,size:"sm",color:t.$q.dark.mode?"grey600":"mygrey","text-color":t.$q.dark.mode?"grey300":"secondary",icon:"fiber_manual_record"},{default:m(()=>[i("span",{class:l({"text-grey300":t.$q.dark.mode,"text-primary":!t.$q.dark.mode})},[e.estimation[e.items.merchant_id][n][e.items.charge_type]?(s(),a(r,{key:0},[u(o(e.estimation[e.items.merchant_id][n][e.items.charge_type].estimation)+" "+o(t.$t("min")),1)],64)):d("",!0)],2)]),_:2},1032,["color","text-color"])):d("",!0)],64))),256)):d("",!0)],64)):d("",!0)])]),i("div",M,[i("div",O,[c(h,{size:"sm",color:"secondary","text-color":t.$q.dark.mode?"grey300":"secondary",icon:"star",class:"no-padding transparent"},{default:m(()=>[e.reviews[e.items.merchant_id]?(s(),a("span",{key:0,class:l(["text-weight-medium",{"text-grey300":t.$q.dark.mode,"text-dark":!t.$q.dark.mode}])},o(e.reviews[e.items.merchant_id].ratings),3)):(s(),a("span",{key:1,class:l(["text-weight-medium",{"text-grey300":t.$q.dark.mode,"text-dark":!t.$q.dark.mode}])}," 0.0 ",2))]),_:1},8,["text-color"])]),i("div",P,[i("span",{class:l({"text-grey300":t.$q.dark.mode,"text-dark":!t.$q.dark.mode})},o(e.items.distance_new)+" "+o(t.$t(e.items.unit))+" "+o(t.$t("away")),3)])])]),_:1})],64)}var W=g(C,[["render",D]]);export{W as default};
