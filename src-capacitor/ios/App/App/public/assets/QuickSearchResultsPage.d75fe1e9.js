import{_ as Q,q as r,t as m,u as a,k as e,a3 as g,ac as V,b2 as u,ab as k,X as n,S as p,U as h,F as f,aj as _,ar as $,as as q,b3 as c,b4 as y,R as b}from"./index.7194caca.js";import{Q as i}from"./QTab.03cd23a8.js";import{Q as v}from"./QTabs.4d312206.js";import{Q as I}from"./QItemLabel.dda41321.js";import{Q as S}from"./QImg.1391a400.js";import{Q as w}from"./QList.5f4666ff.js";import{a as d,Q as P}from"./QTabPanels.a35b51e8.js";import{Q as R}from"./QPage.81b1be82.js";import"./QResizeObserver.98b17319.js";import"./rtl.b51694b1.js";import"./use-panel.3544289b.js";import"./touch.70a9dd44.js";import"./selection.d1a74e34.js";import"./use-cache.b0833c75.js";const T={name:"QuickSearchResultsPage",data(){return{tab:"all"}}},B={class:"font12 text-weight-medium q-mb-xs"},F={class:"font11 text-grey height-normal no-margin ellipsis-2-lines"};function U(t,o,x,C,s,L){return r(),m(R,{padding:""},{default:a(()=>[e(V,{modelValue:t.q,"onUpdate:modelValue":o[0]||(o[0]=l=>t.q=l),label:t.$t("Food, groceries, drinks etc"),rounded:"",dense:"",outlined:"",color:"grey","bg-color":"grey-1",borderless:"",class:"full-width font12 input-borderless q-mb-md"},{prepend:a(()=>[e(g,{name:"search"})]),_:1},8,["modelValue","label"]),e(v,{modelValue:s.tab,"onUpdate:modelValue":o[1]||(o[1]=l=>s.tab=l),dense:"",class:"text-grey","active-color":"dark","indicator-color":"dark",align:"justify","narrow-indicator":""},{default:a(()=>[e(i,{name:"all",label:t.$t("All"),"no-caps":""},null,8,["label"]),e(i,{name:"restaurant",label:t.$t("Restaurants"),"no-caps":""},null,8,["label"]),e(i,{name:"food",label:t.$t("Food"),"no-caps":""},null,8,["label"])]),_:1},8,["modelValue"]),e(u),e(P,{modelValue:s.tab,"onUpdate:modelValue":o[2]||(o[2]=l=>s.tab=l),animated:"","transition-next":"fade","transition-prev":"fade"},{default:a(()=>[e(d,{name:"all",class:"q-pl-none q-pr-none"},{default:a(()=>[e(w,{dense:"",class:""},{default:a(()=>[e(I,{header:""},{default:a(()=>[k(n(t.$t("Mexican")),1)]),_:1}),(r(),p(f,null,h(2,l=>(r(),p(f,{key:l},[_((r(),m(q,{clickable:""},{default:a(()=>[e(c,{avatar:""},{default:a(()=>[e(y,{square:""},{default:a(()=>[e(S,{src:"food1.png",fit:"contain",loading:"lazy"})]),_:1})]),_:1}),e(c,{class:"font12"},{default:a(()=>[b("div",B,n(t.$t("Chipotle Mexican Grill")),1),b("p",F,n(t.$t("Chinese, american, italian"))+" \u2022 $$",1)]),_:1})]),_:1})),[[$]]),e(u,{spaced:"",inset:"item"})],64))),64))]),_:1})]),_:1}),e(d,{name:"restaurant"}),e(d,{name:"food"})]),_:1},8,["modelValue"])]),_:1})}var Y=Q(T,[["render",U]]);export{Y as default};