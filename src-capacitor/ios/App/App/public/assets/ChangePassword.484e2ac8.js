import{_ as u,n as d,q as p,R as g,j as r,u as a,a8 as t,F as w,U as n,aa as b,V as f,ad as h,ae as q,ab as i}from"./index.ea6274c1.js";import{Q as y}from"./QToolbarTitle.f9df01bd.js";import{Q as c}from"./QToolbar.955f19ff.js";import{Q as k}from"./QHeader.f05143ed.js";import{Q as $}from"./QFooter.289e68ec.js";import{Q}from"./QForm.109fb9f8.js";import{Q as V}from"./QPage.d653db0f.js";import"./QResizeObserver.88ce5d1b.js";const _={name:"ChangePassword",data(){return{loading:!1,old_password:"",new_password:"",confirm_password:""}},methods:{onSubmit(){const e={old_password:this.old_password,new_password:this.new_password,confirm_password:this.confirm_password};this.loading=!0,d.showLoadingBox("",this.$q),d.updatePassword(e).then(l=>{d.notify("light-green",l.msg,"check_circle",this.$q),this.onReset()}).catch(l=>{d.notify("grey-8",l,"error_outline",this.$q)}).then(l=>{this.loading=!1,d.hideLoadingBox(this.$q)})},onReset(){this.old_password.value="",this.new_password.value="",this.confirm_password.value=""}}};function C(e,l,P,S,s,m){return p(),g(w,null,[r(k,{class:t({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode})},{default:a(()=>[r(c,null,{default:a(()=>[r(n,{onClick:l[0]||(l[0]=o=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),r(y,{class:"text-weight-bold"},{default:a(()=>[b(f(e.$t("Change Password")),1)]),_:1})]),_:1})]),_:1},8,["class"]),r(V,{padding:"",class:t(["q-pl-md q-pr-md row items-stretch",{"bg-mydark ":e.$q.dark.mode,"bg-grey-1":!e.$q.dark.mode}])},{default:a(()=>[r(h,{flat:"",class:t(["col-12",{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode}])},{default:a(()=>[r(q,null,{default:a(()=>[r(Q,{onSubmit:m.onSubmit},{default:a(()=>[r(i,{modelValue:s.old_password,"onUpdate:modelValue":l[1]||(l[1]=o=>s.old_password=o),type:"password",label:e.$t("Current Password"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",rules:[o=>o&&o.length>0||"This field is required"]},null,8,["modelValue","label","bg-color","label-color","rules"]),r(i,{modelValue:s.new_password,"onUpdate:modelValue":l[2]||(l[2]=o=>s.new_password=o),type:"password",label:e.$t("New Password"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",rules:[o=>o&&o.length>0||"This field is required"]},null,8,["modelValue","label","bg-color","label-color","rules"]),r(i,{modelValue:s.confirm_password,"onUpdate:modelValue":l[3]||(l[3]=o=>s.confirm_password=o),type:"password",label:e.$t("Retype New Password"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",rules:[o=>o&&o.length>0||"This field is required"]},null,8,["modelValue","label","bg-color","label-color","rules"]),r($,{reveal:"",class:"bg-grey-1 q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"},{default:a(()=>[r(n,{type:"submit",label:e.$t("Save"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg",loading:s.loading},null,8,["label","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["class"])]),_:1},8,["class"])],64)}var I=u(_,[["render",C]]);export{I as default};
