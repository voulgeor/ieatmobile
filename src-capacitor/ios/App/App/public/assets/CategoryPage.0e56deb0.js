import{_ as c,m,p,q as f,S as g,k as e,u as a,F as _,V as h,ac as t,a3 as i,aa as Q,ae as b,af as y,v as C}from"./index.e1f31b72.js";import{Q as q}from"./QToolbar.9ad6ac15.js";import{Q as w}from"./QHeader.26bcd033.js";import{Q as d}from"./QSpace.5710b96a.js";import{Q as S}from"./QPage.0ee62e2e.js";import"./QResizeObserver.66815ae3.js";const V={name:"CategoryPage",data(){return{q:"",loading:!1,dialog:!1}},components:{CuisineList:m(()=>C(()=>import("./CuisineList.e0a628fb.js"),["assets/CuisineList.e0a628fb.js","assets/QSkeleton.cf283b1c.js","assets/index.e1f31b72.js","assets/index.469535cd.css","assets/QImg.032a5332.js"]))},methods:{Focus(){this.$refs.category.focus()},onSearch(s){this.loading=s}}};function v(s,o,k,x,l,n){const u=p("CuisineList");return f(),g(_,null,[e(w,{reveal:"",class:"bg-white"},{default:a(()=>[e(q,null,{default:a(()=>[e(h,{to:"/home",flat:"",round:"",dense:"",icon:"arrow_back",color:"dark"}),e(t,{label:s.$t("Search category"),dense:"",outlined:"",color:"grey","bg-color":"white",class:"full-width input-borderless",onClick:o[0]||(o[0]=r=>l.dialog=!0),readonly:""},{prepend:a(()=>[e(i,{name:"search"})]),_:1},8,["label"])]),_:1})]),_:1}),e(S,{padding:"",class:"bg-grey-2"},{default:a(()=>[e(d,{class:"q-pa-xs"}),e(u,{ref:"cuisine_list",q:l.q,onOnSearch:n.onSearch},null,8,["q","onOnSearch"]),e(d,{class:"q-mt-xl q-mb-xl"}),e(Q,{modelValue:l.dialog,"onUpdate:modelValue":o[2]||(o[2]=r=>l.dialog=r),position:"top","transition-show":"fade",onShow:o[3]||(o[3]=r=>n.Focus())},{default:a(()=>[e(b,{class:"transparent no-shadow"},{default:a(()=>[e(y,null,{default:a(()=>[e(t,{modelValue:l.q,"onUpdate:modelValue":o[1]||(o[1]=r=>l.q=r),ref:"category",label:s.$t("Search category"),dense:"",outlined:"",color:"grey","bg-color":"white",class:"full-width input-borderless",loading:l.loading},{prepend:a(()=>[e(i,{name:"search"})]),_:1},8,["modelValue","label","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}var O=c(V,[["render",v]]);export{O as default};