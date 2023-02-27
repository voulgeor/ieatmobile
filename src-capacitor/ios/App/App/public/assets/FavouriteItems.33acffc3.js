import{_ as u,m as g,v as y,n as _,p as x,q as s,R as r,Q as i,j as n,V as o,F as d,S as k,a8 as p,aa as c,ac as h,U as I}from"./index.b5428c1f.js";import{Q as w}from"./QInnerLoading.e8a064f8.js";import{Q as v}from"./QImg.b4e6faf5.js";const S={name:"FavouriteItems",props:["is_done"],components:{FavsItem:g(()=>y(()=>import("./FavsItem.66f325c9.js"),["assets/FavsItem.66f325c9.js","assets/index.b5428c1f.js","assets/index.f7829e99.css"]))},data(){return{data:[],data_items:[],loading:!0}},mounted(){this.getSaveItems()},computed:{hasData(){return this.data.length>0}},watch:{is_done(a,l){this.getSaveItems()}},methods:{getSaveItems(){_.empty(this.is_done)&&(this.loading=!0),_.getSaveItems().then(a=>{this.data=a.details.data,this.data_items=a.details.items}).catch(a=>{this.data=[],this.data_items=[]}).then(a=>{this.loading=!1,_.empty(this.is_done)||this.is_done()})},afterSavefav(a,l){a.save_item=l}}},q={key:0},b={class:"fit q-pa-xl"},F={key:1,class:"flex flex-center q-pt-xl q-pb-xl"},A={class:"text-h5 text-weight-bold line-normal"},Q={class:"text-grey font12"},V={key:2,class:"row items-center"},z={class:"border-grey q-ma-xs radius8"},B={class:"relative-position",style:{height:"100px"}},C={class:"q-pa-sm"},D={class:"font13 text-weight-medium no-margin line-normal ellipsis"},L={class:"row items-center justify-between"};function N(a,l,E,P,t,m){const f=x("FavsItem");return t.loading?(s(),r("div",q,[i("div",b,[n(w,{showing:!0,color:"primary",size:"md","label-class":"dark"})])])):!t.loading&&!m.hasData?(s(),r("div",F,[n(v,{src:"cuttery.png",fit:"fill","spinner-color":"primary",style:{height:"160px","max-width":"150px"}}),i("div",A,o(a.$t("You don't have any save items here!")),1),i("p",Q,o(a.$t("Let's change that!")),1)])):(s(),r("div",V,[(s(!0),r(d,null,k(t.data,e=>(s(),r("div",{key:e.item_id,class:"col-6"},[i("div",z,[t.data_items[e.item_id].price[0]?(s(),r(d,{key:0},[i("div",B,[n(v,{src:t.data_items[e.item_id].url_image,lazy:"",fit:"contain","placeholder-src":"placeholder.png",class:p([{"light-dimmed":e.save_item===!1},"fit"])},null,8,["src","class"])]),i("div",C,[i("div",D,o(t.data_items[e.item_id].item_name),1),i("div",L,[i("div",{class:p(["font12 text-weight-medium",{"text-grey300":a.$q.dark.mode,"text-grey-7":!a.$q.dark.mode}])},[t.data_items[e.item_id].price[0]?(s(),r(d,{key:0},[t.data_items[e.item_id].price[0].discount<=0?(s(),r(d,{key:0},[c(o(t.data_items[e.item_id].price[0].size_name)+" "+o(t.data_items[e.item_id].price[0].pretty_price),1)],64)):(s(),r(d,{key:1},[c(o(t.data_items[e.item_id].price[0].size_name)+" ",1),i("del",null,o(t.data_items[e.item_id].price[0].pretty_price),1),c(" "+o(t.data_items[e.item_id].price[0].pretty_price_after_discount),1)],64))],64)):h("",!0)],2),n(f,{ref_for:!0,ref:"favs",data:e,layout:3,item_token:t.data_items[e.item_id].item_uuid,cat_id:e.cat_id,active:e.save_item,onAfterSavefav:m.afterSavefav},null,8,["data","item_token","cat_id","active","onAfterSavefav"])]),n(I,{label:a.$t("Add to cart"),"no-caps":"",dense:"",class:"fit q-mt-sm",unelevated:"",color:e.save_item?"primary":"mygrey","text-color":e.save_item?"white":"grey"},null,8,["label","color","text-color"])])],64)):h("",!0)])]))),128))]))}var O=u(S,[["render",N]]);export{O as default};
