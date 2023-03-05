import{_ as b,bk as h,n as i,a2 as k,q as u,S as f,k as a,u as t,a9 as g,F as _,t as c,V as m,ab as y,X as d,R as s,ac as p,bl as q}from"./index.e1f31b72.js";import{Q as w}from"./QToolbarTitle.7746a5f3.js";import{Q as v}from"./QToolbar.9ad6ac15.js";import{Q as $}from"./QHeader.26bcd033.js";import{Q}from"./QRating.d3e500d1.js";import{Q as V}from"./QUploader.62358f84.js";import{Q as R}from"./QPage.0ee62e2e.js";import{Q as U}from"./QFooter.244acb58.js";import{Q as z}from"./QForm.a5d827f4.js";import"./QResizeObserver.66815ae3.js";import"./format.2a3572e1.js";import"./QCircularProgress.c85df9b9.js";const T={name:"WriteReview",data(){return{order_uuid:"",loading:!1,upload_api:h.api_base_url+"/uploadReview",rating_value:0,as_anonymous:!1,review_content:"",tags_like:"",tags_not_like:"",upload_images:"",back_url:!1}},mounted(){this.order_uuid=this.$route.params.order_uuid,this.back_url=this.$route.params.back_url},methods:{onRejectedFiles(e){i.notify("negative",`${e.length}`+this.$t("file(s) did not pass validation constraints"),"error_outline",this.$q)},getToken(){return k.getToken()},onSubmit(){const e={order_uuid:this.order_uuid,review_content:this.review_content,rating_value:this.rating_value,as_anonymous:this.as_anonymous,tags_like:[this.tags_like],tags_not_like:[this.tags_not_like],upload_images:this.upload_images};this.loading=!0,i.addReview(e).then(o=>{i.notify("green",o.msg,"check",this.$q),this.back_url?this.$router.push(this.back_url):this.$router.push({path:"/account/trackorder",query:{order_uuid:this.order_uuid}})}).catch(o=>{i.notify("dark",o,"error",this.$q)}).then(o=>{this.loading=!1})},afterUploaded(e){const o=JSON.parse(e.xhr.responseText);o.code===1?this.upload_images=o.details:i.notify("dark",o.msg,"error",this.$q)}}},S={class:"q-mb-md"},F={class:"text-weight-bold no-margin q-pb-sm"},W={class:"text-weight-bold no-margin q-pb-sm"},j={class:"text-weight-bold no-margin q-pb-sm"},x={class:"text-weight-bold no-margin q-pb-sm"},B={class:"q-pb-sm"};function P(e,o,A,C,r,n){return u(),f(_,null,[a($,{reveal:"","reveal-offset":"50",class:g({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode})},{default:t(()=>[a(v,{class:"text-dark"},{default:t(()=>[r.back_url?(u(),c(m,{key:0,onClick:o[0]||(o[0]=l=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"])):(u(),c(m,{key:1,to:`/account/trackorder?order_uuid=${r.order_uuid}`,rounded:"",unelevated:"",color:"white","text-color":"dark",icon:"eva-arrow-back-outline",dense:"","no-caps":""},null,8,["to"])),a(w,{class:g(["text-darkx text-weight-bold",{"text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},{default:t(()=>[y(d(e.$t("Write Review")),1)]),_:1},8,["class"])]),_:1})]),_:1},8,["class"]),a(z,{onSubmit:n.onSubmit},{default:t(()=>[a(R,{class:"q-pl-md q-pr-md",padding:""},{default:t(()=>[s("div",S,[a(Q,{modelValue:r.rating_value,"onUpdate:modelValue":o[1]||(o[1]=l=>r.rating_value=l),size:"md",max:5,color:e.$q.dark.mode?"white":"grey-5","color-selected":"primary",class:"q-mb-xs"},null,8,["modelValue","color"])]),s("h6",F,d(e.$t("What did you like?")),1),a(p,{modelValue:r.tags_like,"onUpdate:modelValue":o[2]||(o[2]=l=>r.tags_like=l),label:e.$t("Describe in few words"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[l=>l.length<=50||"Please use maximum 50 characters"]},null,8,["modelValue","label","bg-color","label-color","rules"]),s("h6",W,d(e.$t("What did you not like?")),1),a(p,{modelValue:r.tags_not_like,"onUpdate:modelValue":o[3]||(o[3]=l=>r.tags_not_like=l),label:e.$t("Describe in few words"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[l=>l.length<=50||"Please use maximum 50 characters"]},null,8,["modelValue","label","bg-color","label-color","rules"]),s("h6",j,d(e.$t("Add Photos")),1),a(V,{url:r.upload_api,label:e.$t("Drop files here to upload"),color:e.$q.dark.mode?"grey600":"secondary","text-color":e.$q.dark.mode?"grey300":"white","no-thumbnails":"",class:"full-width q-mb-md",flat:"",accept:".jpg, image/*",bordered:"","auto-upload":"","max-total-size":"1048576",onRejected:n.onRejectedFiles,headers:[{name:"Authorization",value:`token ${this.getToken()}`}],"field-name":"file",onUploaded:n.afterUploaded},null,8,["url","label","color","text-color","onRejected","headers","onUploaded"]),s("h6",x,d(e.$t("Write your review")),1),a(p,{modelValue:r.review_content,"onUpdate:modelValue":o[4]||(o[4]=l=>r.review_content=l),outlined:"",autogrow:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[l=>l&&l.length>0||e.$t("This field is required")]},null,8,["modelValue","bg-color","label-color","rules"]),s("div",B,[a(q,{modelValue:r.as_anonymous,"onUpdate:modelValue":o[5]||(o[5]=l=>r.as_anonymous=l),size:"sm",color:"secondary",label:e.$t("post review as anonymous")},null,8,["modelValue","label"])])]),_:1}),a(U,{class:"bg-white q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"},{default:t(()=>[a(m,{type:"submit",unelevated:"",color:"primary","text-color":"white","no-caps":"",class:"full-width",loading:r.loading,style:{"letter-spacing":"2px"},label:e.$t("Add Review"),size:"lg"},null,8,["loading","label"])]),_:1})]),_:1},8,["onSubmit"])],64)}var Y=b(T,[["render",P]]);export{Y as default};
