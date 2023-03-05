import{_ as v,n,q as o,t as m,u as t,k as a,U as c,aa as _,V as u,a8 as h,R as p,Q as y,F as g,ad as x,ae as P,S as $,X as D,ai as V,aq as C,ar as I,as as b,b0 as k,bg as Q,a2 as B}from"./index.dd7e00fb.js";import{Q as M}from"./QToolbarTitle.b1bd964d.js";import{Q as L}from"./QToolbar.8b195103.js";import{Q as R}from"./QHeader.29791060.js";import{Q as T}from"./QInnerLoading.9112f444.js";import{Q as A}from"./QImg.f2e4421e.js";import{Q as w}from"./QItemLabel.a9f52d7c.js";import{Q as S}from"./QSlideItem.6db583fd.js";import{Q as z}from"./QList.0d28954b.js";import{Q as N}from"./QFooter.5a3eddb3.js";import{Q as F}from"./QPage.d286c01b.js";import{Q as U}from"./QPullToRefresh.ec622f6c.js";import"./QResizeObserver.e43a870f.js";import"./use-cache.b0833c75.js";import"./touch.70a9dd44.js";import"./selection.3817dd43.js";import"./format.2a3572e1.js";const E={name:"MyPayment",data(){return{data:[],loading:!1,inner_loading:!1,payment_data:[],payment_uuid:""}},mounted(){this.MyPayments()},computed:{hasData(){return this.data.length>0}},methods:{refresh(e){this.MyPayments(e)},MyPayments(e){n.empty(e)&&(this.loading=!0),n.MyPayments().then(l=>{this.payment_uuid=l.details.default_payment_uuid,this.data=l.details.data}).catch(l=>{this.data=[]}).then(l=>{n.empty(e)?this.loading=!1:e()})},deletePayment(e,l){this.inner_loading=!0,n.deletePayment(l.payment_uuid).then(f=>{this.data.splice(e,1)}).catch(f=>{n.notify("red-5",f,"error_outline",this.$q)}).then(f=>{this.inner_loading=!1})},setDefault(e){n.showLoadingBox("",this.$q),n.setDefaultPayment(e).then(l=>{this.payment_uuid=e}).catch(l=>{n.notify("red-5",l,"error_outline",this.$q)}).then(l=>{n.hideLoadingBox(this.$q)})}}},H={key:0,class:"min-height-inherit flex flex-center"},O={class:"full-width text-center q-pb-xl"},X={class:"text-h5 text-weight-bold"},j={class:"text-grey font12"},G={class:"text-weight-medium"};function J(e,l,f,K,s,d){return o(),m(U,{onRefresh:d.refresh},{default:t(()=>[a(R,{reveal:"","reveal-offset":"50",class:h({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode})},{default:t(()=>[a(L,null,{default:t(()=>[a(c,{onClick:l[0]||(l[0]=r=>e.$router.back()),dense:"",icon:"las la-angle-left",class:"q-mr-sm","text-color":e.$q.dark.mode?"white":"dark",unelevated:""},null,8,["text-color"]),a(M,{class:"text-weight-bold"},{default:t(()=>[_(u(e.$t("Payment")),1)]),_:1})]),_:1})]),_:1},8,["class"]),a(F,{class:h({"flex flex-center":!d.hasData&&!s.loading,"row items-stretch ":d.hasData&&!s.loading,"bg-mydark":e.$q.dark.mode,"bg-grey-1":!e.$q.dark.mode})},{default:t(()=>[!d.hasData&&!s.loading?(o(),p("div",H,[y("div",O,[y("div",X,u(e.$t("No Payment available")),1),y("p",j,u(e.$t("you have not added payment yet")),1),a(c,{flat:"",color:"blue","no-caps":"",label:e.$t("Add new payment"),dense:"",size:"sm",to:"/account/payments/new"},null,8,["label"])])])):(o(),p(g,{key:1},[s.loading?(o(),m(T,{key:0,showing:!0,color:"primary",size:"md","label-class":"dark",class:"transparent"})):(o(),p(g,{key:1},[a(x,{flat:"",class:h(["radius8 full-width",{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode}])},{default:t(()=>[a(P,null,{default:t(()=>[a(z,null,{default:t(()=>[(o(!0),p(g,null,$(s.data,(r,q)=>(o(),m(D,{key:r.payment_uuid,appear:"","leave-active-class":"animated fadeOut",class:h({"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode})},{default:t(()=>[a(S,{onAction:i=>d.deletePayment(q,r),"right-color":e.$q.dark.mode?"mydark":"white"},{right:t(()=>[a(c,{unelevated:"",round:"",color:"red-5","text-color":"white",icon:"eva-trash-outline",dense:""})]),default:t(()=>[V((o(),m(I,{onClick:b(i=>d.setDefault(r.payment_uuid),["stop"]),tag:"label",clickable:"",class:h(["border-grey radius10 q-mb-sm",{"bg-dark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode}])},{default:t(()=>[a(k,{avatar:""},{default:t(()=>[a(Q,{modelValue:s.payment_uuid,"onUpdate:modelValue":l[1]||(l[1]=i=>s.payment_uuid=i),val:r.payment_uuid,color:"primary",class:"hidden"},null,8,["modelValue","val"]),r.logo_type==="icon"?(o(),m(B,{key:0,color:"warning",name:"credit_card"})):(o(),m(A,{key:1,src:r.logo_image,fit:"contain",style:{height:"30px","max-width":"30px"}},null,8,["src"]))]),_:2},1024),a(k,null,{default:t(()=>[a(w,{lines:"1"},{default:t(()=>[y("span",G,u(r.payment_name),1)]),_:2},1024),a(w,{caption:"",lines:"1"},{default:t(()=>[_(u(r.attr2),1)]),_:2},1024)]),_:2},1024),a(k,{side:""},{default:t(()=>[a(Q,{modelValue:s.payment_uuid,"onUpdate:modelValue":l[2]||(l[2]=i=>s.payment_uuid=i),val:r.payment_uuid,onClick:b(i=>d.setDefault(r.payment_uuid),["stop"])},null,8,["modelValue","val","onClick"])]),_:2},1024)]),_:2},1032,["onClick","class"])),[[C]])]),_:2},1032,["onAction","right-color"])]),_:2},1032,["class"]))),128))]),_:1})]),_:1})]),_:1},8,["class"]),a(N,{reveal:"",class:"bg-grey-1 q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"},{default:t(()=>[a(c,{type:"submit",label:e.$t("Add new payment"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg",to:"/account/payments/new",loading:s.loading},null,8,["label","loading"])]),_:1})],64))],64))]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var ce=v(E,[["render",J]]);export{ce as default};
