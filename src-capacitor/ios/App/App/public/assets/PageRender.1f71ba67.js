import{_ as c,a0 as h,q as s,t as f,u as o,j as t,U as p,a8 as n,R as d,Q as r,V as l,F as _,ac as m}from"./index.ea6274c1.js";import{Q as u}from"./QToolbarTitle.f9df01bd.js";import{Q as D}from"./QToolbar.955f19ff.js";import{Q as S}from"./QHeader.f05143ed.js";import{Q as k}from"./QInnerLoading.0bbefb19.js";import{Q}from"./QPage.d653db0f.js";import{Q as b}from"./QPullToRefresh.6b5f95ae.js";import"./QResizeObserver.88ce5d1b.js";import"./touch.70a9dd44.js";import"./selection.ac04f59d.js";import"./format.2a3572e1.js";const w={name:"PageRender",setup(){return{DataStore:h()}},created(){this.DataStore.loading_page=!0,this.DataStore.getPage(null,this.$route.params.page_id)},methods:{refresh(e){this.DataStore.getPage(e,this.$route.params.page_id)}}},v={class:"text-h5 text-weight-bold"},x=["innerHTML"],P={key:1,class:"text-center full-width"},q={class:"text-h5 text-weight-bold"},T={class:"text-grey font12"};function y(e,i,R,a,B,g){return s(),f(b,{onRefresh:g.refresh},{default:o(()=>[t(S,{reveal:"","reveal-offset":"50",class:n({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:o(()=>[t(D,null,{default:o(()=>[t(p,{onClick:i[0]||(i[0]=C=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),t(u,{class:"text-weight-bold"})]),_:1})]),_:1},8,["class"]),t(Q,{class:n(["q-pl-md q-pr-md",{"flex flex-center":!a.DataStore.hasPage&&!a.DataStore.loading_page}])},{default:o(()=>[a.DataStore.loading_page?m("",!0):(s(),d(_,{key:0},[r("div",v,l(a.DataStore.page_data.title),1),r("div",{innerHTML:a.DataStore.page_data.long_content},null,8,x)],64)),!a.DataStore.hasPage&&!a.DataStore.loading_page?(s(),d("div",P,[r("div",q,l(e.$t("No results")),1),r("p",T,l(e.$t("This page is not available please come back later.")),1)])):m("",!0),t(k,{showing:a.DataStore.loading_page,color:"primary",size:"md"},null,8,["showing"])]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var U=c(w,[["render",y]]);export{U as default};
