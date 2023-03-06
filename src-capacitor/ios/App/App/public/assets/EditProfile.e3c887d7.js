import{a8 as A,v as $,_ as R,m as U,bk as z,a1 as D,a2 as b,n,p as O,q as d,S as I,k as l,u as s,a9 as g,F as x,V as f,ab as _,X as k,R as y,b4 as L,t as u,ad as N,ae as B,af as M,ac as p,as as C,bp as j,bq as H,b3 as q}from"./index.7194caca.js";import{Q as X}from"./QToolbarTitle.2f2c97c6.js";import{Q as W}from"./QToolbar.6e86fa1d.js";import{Q as G}from"./QHeader.14a419b4.js";import{Q as P}from"./QImg.1391a400.js";import{Q as J}from"./QUploader.3af9b424.js";import{Q as Y}from"./QItemLabel.dda41321.js";import{Q as K}from"./QSelect.9041e5d8.js";import{Q as Z}from"./QSpace.72e06727.js";import{Q as ee}from"./QForm.0c4e0343.js";import{Q as ae}from"./QPage.81b1be82.js";var h;(function(e){e.Prompt="PROMPT",e.Camera="CAMERA",e.Photos="PHOTOS"})(h||(h={}));var S;(function(e){e.Rear="REAR",e.Front="FRONT"})(S||(S={}));var V;(function(e){e.Uri="uri",e.Base64="base64",e.DataUrl="dataUrl"})(V||(V={}));const v=A("Camera",{web:()=>$(()=>import("./web.85d99596.js"),["assets/web.85d99596.js","assets/index.7194caca.js","assets/index.469535cd.css","assets/QToolbarTitle.2f2c97c6.js","assets/QToolbar.6e86fa1d.js","assets/QHeader.14a419b4.js","assets/QResizeObserver.98b17319.js","assets/QImg.1391a400.js","assets/QUploader.3af9b424.js","assets/QCircularProgress.e933e7fc.js","assets/format.2a3572e1.js","assets/QItemLabel.dda41321.js","assets/QSelect.9041e5d8.js","assets/QChip.3d0d7cef.js","assets/selection.d1a74e34.js","assets/rtl.b51694b1.js","assets/QSpace.72e06727.js","assets/QForm.0c4e0343.js","assets/QPage.81b1be82.js"]).then(e=>new e.CameraWeb)});var Q;(function(e){e.Documents="DOCUMENTS",e.Data="DATA",e.Library="LIBRARY",e.Cache="CACHE",e.External="EXTERNAL",e.ExternalStorage="EXTERNAL_STORAGE"})(Q||(Q={}));var T;(function(e){e.UTF8="utf8",e.ASCII="ascii",e.UTF16="utf16"})(T||(T={}));const c=A("Filesystem",{web:()=>$(()=>import("./web.61a4ec9f.js"),["assets/web.61a4ec9f.js","assets/index.7194caca.js","assets/index.469535cd.css"]).then(e=>new e.FilesystemWeb)}),w={async isCameraEnabled(){return await new Promise(function(a,t){v.checkPermissions().then(i=>{switch(i.camera){case"prompt":case"prompt-with-rationale":case"denied":v.requestPermissions().then(r=>{switch(r.camera){case"granted":a("granted");break;default:t("denied");break}}).catch(r=>{t(r)});break;case"granted":a("granted");break}}).catch(i=>{t(i)})})},async isFileAccessEnabled(){return await new Promise(function(a,t){c.checkPermissions().then(i=>{switch(i.publicStorage){case"prompt":case"prompt-with-rationale":case"denied":c.requestPermissions().then(r=>{switch(r.publicStorage){case"granted":a("granted");break;default:t("denied");break}}).catch(r=>{t(r)});break;case"granted":a("granted");break;default:t("denied");break}}).catch(i=>{t(i)})})},async getPhoto(e){let a=h.Prompt;e==2?a=h.Camera:e==3&&(a=h.Photos);const t=await v.getPhoto({quality:90,allowEditing:!1,resultType:V.Uri,width:500,source:a});if(t){const i=await c.readFile({path:t.path});if(i)return{format:t.format,path:t.webPath,data:i.data}}return!1},async ReadFile(e){const a=await c.readFile({path:e});return a||!1}},te={name:"EditProfile",components:{StepsVerification:U(()=>$(()=>import("./StepsVerification.8519fada.js"),["assets/StepsVerification.8519fada.js","assets/QSpace.72e06727.js","assets/index.7194caca.js","assets/index.469535cd.css","assets/QToolbar.6e86fa1d.js","assets/QForm.0c4e0343.js","assets/QInnerLoading.62426e89.js"]))},data(){return{loading:!1,first_name:"",last_name:"",email_address:"",mobile_number:"",mobile_prefix:"",avatar:"",original_email_address:"",original_mobile_number:"",sent_message:"",upload_api:z.api_base_url+"/updateAvatar",upload_enabled:!1,filename:"",upload_path:"",photo_data:""}},setup(){return{DataStore:D()}},created(){this.getCurrentProfile()},computed:{hasData(){return Object.keys(this.photo_data).length>0}},methods:{getCurrentProfile(){const e=b.getUser();e&&(this.original_email_address=e.email_address,this.original_mobile_number=e.contact_number,this.first_name=e.first_name,this.last_name=e.last_name,this.mobile_number=e.contact_number_noprefix,this.mobile_prefix=e.phone_prefix,this.email_address=e.email_address,this.avatar=e.avatar)},checkForm(){let e=!1;this.email_address!==this.original_email_address&&(e=!0),this.mobile_prefix+this.mobile_number!==this.original_mobile_number&&(e=!0),console.log(e),e?(this.loading=!0,n.RequestEmailCode().then(t=>{this.sent_message=t.msg,this.show_modal=!1,this.$refs.steps_verification.show_modal=!0}).catch(t=>{n.notify("dark",t,"error",this.$q)}).then(t=>{this.loading=!1})):this.onSubmit("")},onSubmit(e){this.loading=!0,n.showLoadingBox("",this.$q);const a={code:e,first_name:this.first_name,last_name:this.last_name,email_address:this.email_address,mobile_number:this.mobile_number,mobile_prefix:this.mobile_prefix,filename:this.filename,upload_path:this.upload_path,file_data:this.hadData()?this.photo_data.data:"",image_type:this.hadData()?this.photo_data.format:""};n.saveProfile(a).then(t=>{this.$refs.steps_verification.show_modal=!1,b.setUser(t.details),n.notify("green",t.msg,"check",this.$q),this.getCurrentProfile()}).catch(t=>{n.notify("dark",t,"error",this.$q)}).then(t=>{this.loading=!1,n.hideLoadingBox(this.$q)})},afterVerifycode(e){this.onSubmit(e)},getToken(){return b.getToken()},afterUploaded(e){const a=JSON.parse(e.xhr.responseText);a.code===1?(this.avatar=a.details.url_image,this.filename=a.details.filename,this.upload_path=a.details.upload_path):(this.avatar="",this.filename="",this.upload_path="",n.notify("dark",a.msg,"error",this.$q))},takePhoto(){w.isCameraEnabled().then(e=>{w.isFileAccessEnabled().then(a=>{w.getPhoto(1).then(t=>{this.photo_data=t}).catch(t=>{this.photo_data=[]})}).catch(a=>{n.notify("dark",a,"error",this.$q)})}).catch(e=>{n.notify("dark",e,"error",this.$q)})},hadData(){return Object.keys(this.photo_data).length>0}}},re={class:"flex flex-center q-mb-md"},oe={class:"relative-position"},le={class:"absolute-right",style:{top:"20px",right:"-10px"}};function se(e,a,t,i,r,m){const F=O("StepsVerification");return d(),I(x,null,[l(G,{reveal:"","reveal-offset":"50",class:g({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode})},{default:s(()=>[l(W,null,{default:s(()=>[l(f,{onClick:a[0]||(a[0]=o=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),l(X,{class:"text-weight-bold"},{default:s(()=>[_(k(e.$t("Edit Profile")),1)]),_:1})]),_:1})]),_:1},8,["class"]),l(ae,{padding:"",class:g(["q-pl-md q-pr-md row items-stretch",{"bg-mydark ":e.$q.dark.mode,"bg-grey-1 ":!e.$q.dark.mode}])},{default:s(()=>[l(ee,{onSubmit:m.checkForm,class:"col-12"},{default:s(()=>[y("div",re,[y("div",oe,[l(L,{size:"60px"},{default:s(()=>[m.hasData?(d(),u(P,{key:0,src:r.photo_data.path,"spinner-color":"primary","spinner-size":"sm",fit:"cover"},null,8,["src"])):(d(),u(P,{key:1,src:r.avatar,class:"fit",fit:"cover","spinner-size":"sm","spinner-color":"primary"},null,8,["src"]))]),_:1}),y("div",le,[e.$q.capacitor?(d(),u(f,{key:0,round:"",color:e.$q.dark.mode?"grey600":"primary","text-color":e.$q.dark.mode?"grey300":"white",icon:"las la-pen",size:"8px",unelevated:"",onClick:m.takePhoto},null,8,["color","text-color","onClick"])):(d(),u(f,{key:1,round:"",color:e.$q.dark.mode?"grey600":"primary","text-color":e.$q.dark.mode?"grey300":"white",icon:"las la-pen",size:"8px",unelevated:"",onClick:a[1]||(a[1]=o=>r.upload_enabled=!r.upload_enabled)},null,8,["color","text-color"]))])])]),r.upload_enabled?(d(),u(J,{key:0,url:r.upload_api,label:e.$t("Upload files"),color:e.$q.dark.mode?"grey600":"primary","text-color":e.$q.dark.mode?"grey300":"white","no-thumbnails":"",class:"full-width q-mb-md",flat:"",accept:".jpg, image/*",bordered:"","max-files":1,"auto-upload":"","max-total-size":"1048576",onRejected:e.onRejectedFiles,headers:[{name:"Authorization",value:`token ${this.getToken()}`}],"field-name":"file",onUploaded:m.afterUploaded},null,8,["url","label","color","text-color","onRejected","headers","onUploaded"])):N("",!0),l(B,{flat:"",class:g({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode})},{default:s(()=>[l(M,null,{default:s(()=>[l(p,{modelValue:r.first_name,"onUpdate:modelValue":a[2]||(a[2]=o=>r.first_name=o),label:e.$t("First name"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",rules:[o=>o&&o.length>0||e.$t("This field is required")]},null,8,["modelValue","label","bg-color","label-color","rules"]),l(p,{modelValue:r.last_name,"onUpdate:modelValue":a[3]||(a[3]=o=>r.last_name=o),label:e.$t("Last name"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",rules:[o=>o&&o.length>0||e.$t("This field is required")]},null,8,["modelValue","label","bg-color","label-color","rules"]),l(p,{modelValue:r.email_address,"onUpdate:modelValue":a[4]||(a[4]=o=>r.email_address=o),label:e.$t("Email address"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",rules:[o=>o&&o.length>0||e.$t("This field is required")]},null,8,["modelValue","label","bg-color","label-color","rules"]),l(p,{modelValue:r.mobile_number,"onUpdate:modelValue":a[6]||(a[6]=o=>r.mobile_number=o),mask:"##############",outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[o=>o&&o.length>0||e.$t("This field is required")]},{prepend:s(()=>[l(K,{dense:"",modelValue:r.mobile_prefix,"onUpdate:modelValue":a[5]||(a[5]=o=>r.mobile_prefix=o),options:i.DataStore.phone_prefix_data,onFilter:e.filterFn,behavior:"dialog","input-debounce":"700",style:{border:"none"},"emit-value":"",borderless:"",class:"myq-field"},{option:s(({itemProps:o,opt:E})=>[l(C,j(H(o)),{default:s(()=>[l(q,{avatar:""},{default:s(()=>[l(P,{src:E.flag,style:{height:"15px","max-width":"20px"}},null,8,["src"])]),_:2},1024),l(q,null,{default:s(()=>[l(Y,null,{default:s(()=>[_(k(E.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),"no-option":s(()=>[l(C,null,{default:s(()=>[l(q,{class:"text-grey"},{default:s(()=>[_(k(e.$t("No results")),1)]),_:1})]),_:1})]),_:1},8,["modelValue","options","onFilter"])]),_:1},8,["modelValue","bg-color","label-color","rules"])]),_:1})]),_:1},8,["class"]),l(Z,{class:"q-pa-sm"}),l(f,{type:"submit",label:e.$t("Save"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg",loading:r.loading},null,8,["label","loading"])]),_:1},8,["onSubmit"]),l(F,{ref:"steps_verification",sent_message:r.sent_message,onAfterVerifycode:m.afterVerifycode},null,8,["sent_message","onAfterVerifycode"])]),_:1},8,["class"])],64)}var ie=R(te,[["render",se]]),ke=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"}));export{h as C,ke as E,S as a};