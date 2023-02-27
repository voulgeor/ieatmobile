import{_ as x,m as b,n as q,p as P,q as e,R as r,k as a,u as l,a8 as v,F as o,U as R,aa as y,V as c,Q as i,ac as m,t as h,S as p,v as L,ar as $,b0 as I,b1 as V}from"./index.f4219e68.js";import{Q as T}from"./QToolbarTitle.5cae28fa.js";import{Q as C}from"./QToolbar.9e0c5c2c.js";import{Q as D}from"./QHeader.93fda4a5.js";import{Q as k}from"./QImg.9e5fc9bf.js";import{Q as S}from"./QRating.1e736782.js";import{Q as z}from"./QBadge.a14cbf22.js";import{Q as B}from"./QList.e84f5512.js";import{Q as N}from"./QInnerLoading.1e0d2bac.js";import{Q as A,a as E}from"./QInfiniteScroll.fe4dc4a3.js";import{Q as H}from"./QPage.11bfb4d0.js";import{Q as U}from"./QPullToRefresh.66d84cc9.js";import"./QResizeObserver.8f0e5734.js";import"./format.2a3572e1.js";import"./touch.70a9dd44.js";import"./selection.babb8692.js";const F={name:"StoreReview",components:{ImagePreview:b(()=>L(()=>import("./ImagePreview.9223ee31.js"),["assets/ImagePreview.9223ee31.js","assets/QToolbarTitle.5cae28fa.js","assets/index.f4219e68.js","assets/index.f7829e99.css","assets/QSpace.ac683136.js","assets/QToolbar.9e0c5c2c.js","assets/use-panel.06eaa7a3.js","assets/touch.70a9dd44.js","assets/selection.babb8692.js","assets/use-cache.b0833c75.js"]))},data(){return{slug:"",loading:!0,data:[],page:0,galleryList:[]}},created(){this.slug=this.$route.query.slug},computed:{hasData(){return this.data.length>0}},methods:{getReview(s,f){this.loading=!0,this.page=s,q.getReview(this.slug,s).then(g=>{this.data.push(g.details.data)}).catch(g=>{this.$refs.nscroll&&this.$refs.nscroll.stop()}).then(g=>{f(),this.loading=!1})},setGallery(s){this.galleryList=s,this.$refs.imagePreview.modal=!this.$refs.imagePreview.modal},refresh(s){this.resetPagination(),s()},resetPagination(){this.page=0,this.data=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()}}},G={key:0,class:"text-center"},M={class:"font16 text-weight-bold"},j={class:"font11"},O={class:"row items-start q-gutter-sm q-mb-xs"},J={class:"col-2"},K={class:"col"},W={class:"font13 text-weight-bold line-normal ellipsis"},X={class:"font11 full-width text-grey text-weight-medium"},Y={class:"col-3 text-right"},Z={key:0},ee={class:"ellipsis-2-lines q-mt-xs q-mb-xs"},se=["innerHTML"],te={key:1,class:"q-gutter-sm row items-start"},re={key:1,class:"row justify-center absolute-bottom"};function ae(s,f,g,le,u,d){const w=P("ImagePreview");return e(),r(o,null,[a(D,{reveal:"","reveal-offset":"10",class:v({"bg-mydark text-white":s.$q.dark.mode,"bg-white text-black":!s.$q.dark.mode})},{default:l(()=>[a(C,null,{default:l(()=>[a(R,{onClick:f[0]||(f[0]=_=>s.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:s.$q.dark.mode?"white":"dark"},null,8,["color"]),a(T,{class:"text-weight-bold"},{default:l(()=>[y(c(s.$t("Reviews")),1)]),_:1})]),_:1})]),_:1},8,["class"]),a(U,{onRefresh:d.refresh},{default:l(()=>[a(H,{class:v(["q-pl-md q-pr-md",{"flex flex-center":!d.hasData&&!u.loading}])},{default:l(()=>[a(A,{ref:"nscroll",onLoad:d.getReview,offset:250},{default:l(()=>[!d.hasData&&!u.loading?(e(),r("div",G,[i("div",M,c(s.$t("No reviews found")),1),i("p",j,c(s.$t("There is no review available for this restaurant")),1)])):m("",!0),d.hasData?(e(),h(B,{key:1,separator:"",class:"qlist-no-padding"},{default:l(()=>[(e(!0),r(o,null,p(u.data,_=>(e(),r(o,{key:_},[(e(!0),r(o,null,p(_,t=>(e(),h($,{key:t},{default:l(()=>[a(I,null,{default:l(()=>[i("div",O,[i("div",J,[a(V,null,{default:l(()=>[a(k,{src:t.url_image,"spinner-color":"secondary","spinner-size":"sm",style:{"max-width":"80px"}},null,8,["src"])]),_:2},1024)]),i("div",K,[i("div",W,[t.as_anonymous===1?(e(),r(o,{key:0},[y(c(t.hidden_fullname),1)],64)):(e(),r(o,{key:1},[y(c(t.fullname),1)],64))]),i("div",X,c(t.date_created),1)]),i("div",Y,[a(S,{modelValue:t.rating,"onUpdate:modelValue":n=>t.rating=n,size:"13px",max:5,color:"grey","color-selected":"yellow-14",readonly:"",class:"q-mb-xs"},null,8,["modelValue","onUpdate:modelValue"])])]),t.meta.tags_like?(e(),r("div",Z,[(e(!0),r(o,null,p(t.meta.tags_like,n=>(e(),r(o,{key:n},[n?(e(),h(z,{key:0,rounded:"",color:s.$q.dark.mode?"grey600":"mygrey","text-color":"grey",label:n,class:"q-pl-sm q-pr-sm q-mr-xs"},null,8,["color","label"])):m("",!0)],64))),128))])):m("",!0),i("div",ee,[i("span",{innerHTML:t.review},null,8,se)]),t.meta.upload_images?(e(),r("div",te,[(e(!0),r(o,null,p(t.meta.upload_images,(n,Q)=>(e(),r(o,{key:n},[Q<=3?(e(),h(k,{key:0,src:n,"spinner-color":"secondary","spinner-size":"sm",style:{height:"50px","max-width":"50px"},"placeholder-src":"placeholder.png",class:"radius8 cursor-pointer",onClick:oe=>d.setGallery(t.meta.upload_images)},null,8,["src","onClick"])):m("",!0)],64))),128))])):m("",!0)]),_:2},1024)]),_:2},1024))),128))],64))),128))]),_:1})):m("",!0)]),loading:l(()=>[u.page<=1?(e(),h(N,{key:0,showing:!0,color:"primary",size:"md","label-class":"dark"})):(e(),r("div",re,[a(E,{color:"secondary",size:"30px"})]))]),_:1},8,["onLoad"])]),_:1},8,["class"])]),_:1},8,["onRefresh"]),a(w,{ref:"imagePreview",gallery:u.galleryList,title:""},null,8,["gallery"])],64)}var xe=x(F,[["render",ae]]);export{xe as default};
