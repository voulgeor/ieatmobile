import{Q as k}from"./QToolbarTitle.7746a5f3.js";import{Q as x}from"./QSpace.5710b96a.js";import{_ as S,q as o,t as l,u as t,k as e,ab as f,X as p,V as C,S as u,U as g,as as _,b3 as s,F as i,a3 as b,ad as M,ae as V,aa as v}from"./index.e1f31b72.js";import{Q as w}from"./QToolbar.9ad6ac15.js";import{Q as y}from"./QSkeleton.cf283b1c.js";import{Q}from"./QList.20d5a18b.js";import{u as B}from"./MenuStore.020ed74d.js";const T={name:"CategoriesModal",props:["slug"],data(){return{modal:!1}},setup(){return{MenuStore:B()}}};function h(m,r,c,n,d,q){return o(),l(v,{modelValue:d.modal,"onUpdate:modelValue":r[1]||(r[1]=a=>d.modal=a),position:"bottom"},{default:t(()=>[e(V,null,{default:t(()=>[e(w,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:t(()=>[e(k,{class:"text-dark text-weight-bold"},{default:t(()=>[f(p(m.$t("Categories")),1)]),_:1}),e(x),e(C,{onClick:r[0]||(r[0]=a=>d.modal=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),n.MenuStore.loading_menu?(o(),l(Q,{key:0,dense:""},{default:t(()=>[(o(),u(i,null,g(5,a=>e(_,{key:a},{default:t(()=>[e(s,null,{default:t(()=>[e(y,{type:"text"})]),_:1}),e(s,{side:""},{default:t(()=>[e(y,{type:"text",style:{width:"50px"}})]),_:1})]),_:2},1024)),64))]),_:1})):(o(),u(i,{key:1},[n.MenuStore.data_category[c.slug]?(o(),l(Q,{key:0,dense:""},{default:t(()=>[(o(!0),u(i,null,g(n.MenuStore.data_category[c.slug],a=>(o(),l(_,{key:a,clickable:"",onClick:I=>this.$emit("afterCategoryselect",a.category_uiid)},{default:t(()=>[e(s,null,{default:t(()=>[f(p(a.category_name),1)]),_:2},1024),e(s,{side:""},{default:t(()=>[e(b,{color:"grey",size:"14px",name:"las la-angle-right"})]),_:1})]),_:2},1032,["onClick"]))),128))]),_:1})):M("",!0)],64))]),_:1})]),_:1},8,["modelValue"])}var X=S(T,[["render",h]]);export{X as default};
