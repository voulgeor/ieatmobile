import{_ as m,m as c,p,q as g,R as f,k as e,u as a,F as _,U as b,ab as t,a2 as i,a9 as h,ad as Q,ae as y,v as C}from"./index.bc7ef6d7.js";import{Q as q}from"./QToolbar.a26cb24b.js";import{Q as w}from"./QHeader.4fce4bc7.js";import{Q as d}from"./QSpace.81d240aa.js";import{Q as S}from"./QPage.4ade84eb.js";import"./QResizeObserver.3eefdf89.js";const v={name:"CategoryPage",data(){return{q:"",loading:!1,dialog:!1}},components:{CuisineList:c(()=>C(()=>import("./CuisineList.45c9e879.js"),["assets/CuisineList.45c9e879.js","assets/QSkeleton.b730e29e.js","assets/index.bc7ef6d7.js","assets/index.f7829e99.css","assets/QImg.6298c716.js"]))},methods:{Focus(){this.$refs.category.focus()},onSearch(s){this.loading=s}}};function V(s,o,k,x,l,n){const u=p("CuisineList");return g(),f(_,null,[e(w,{reveal:"",class:"bg-white"},{default:a(()=>[e(q,null,{default:a(()=>[e(b,{to:"/home",flat:"",round:"",dense:"",icon:"arrow_back",color:"dark"}),e(t,{label:s.$t("Search category"),dense:"",outlined:"",color:"grey","bg-color":"white",class:"full-width input-borderless",onClick:o[0]||(o[0]=r=>l.dialog=!0),readonly:""},{prepend:a(()=>[e(i,{name:"search"})]),_:1},8,["label"])]),_:1})]),_:1}),e(S,{padding:"",class:"bg-grey-2"},{default:a(()=>[e(d,{class:"q-pa-xs"}),e(u,{ref:"cuisine_list",q:l.q,onOnSearch:n.onSearch},null,8,["q","onOnSearch"]),e(d,{class:"q-mt-xl q-mb-xl"}),e(h,{modelValue:l.dialog,"onUpdate:modelValue":o[2]||(o[2]=r=>l.dialog=r),position:"top","transition-show":"fade",onShow:o[3]||(o[3]=r=>n.Focus())},{default:a(()=>[e(Q,{class:"transparent no-shadow"},{default:a(()=>[e(y,null,{default:a(()=>[e(t,{modelValue:l.q,"onUpdate:modelValue":o[1]||(o[1]=r=>l.q=r),ref:"category",label:s.$t("Search category"),dense:"",outlined:"",color:"grey","bg-color":"white",class:"full-width input-borderless",loading:l.loading},{prepend:a(()=>[e(i,{name:"search"})]),_:1},8,["modelValue","label","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}var O=m(v,[["render",V]]);export{O as default};