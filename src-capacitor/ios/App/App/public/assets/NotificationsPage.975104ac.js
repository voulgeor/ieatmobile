import{aC as V,aD as C,L as A,aE as I,aF as k,aJ as q,aK as w,aL as L,_ as B,n as g,q as r,S as u,k as i,u as s,t as h,ad as _,F as c,a9 as S,V as y,ab as Q,X as p,U as P,R as b,aj as H,as as j,b3 as D,bl as z,b4 as $}from"./index.a3a9b403.js";import{Q as F}from"./QToolbarTitle.bdf7696f.js";import{Q as O}from"./QToolbar.84f8e4cf.js";import{Q as R}from"./QHeader.944e3fc5.js";import{Q as x}from"./QItemLabel.0e0c1fe6.js";import{Q as U}from"./QBadge.7559c5a7.js";import{Q as E}from"./QSlideItem.2d7f40a3.js";import{Q as M}from"./QList.26809fbc.js";import{Q as J}from"./QInnerLoading.3f992c70.js";import{Q as K,a as X}from"./QInfiniteScroll.23122c00.js";import{Q as G}from"./QImg.d7a45a76.js";import{Q as W}from"./QPageScroller.15b3f1f6.js";import{Q as Y}from"./QPage.36125042.js";import{Q as Z}from"./QPullToRefresh.be175a08.js";import{Q as ee}from"./QTab.7fa28d28.js";import{Q as te}from"./QTabs.f993e1c2.js";import{Q as oe}from"./QFooter.f4c4baca.js";import{c as T}from"./selection.be4b730a.js";import{u as ae}from"./CartStore.f7f72421.js";import"./QResizeObserver.b1cbdf85.js";import"./use-cache.b0833c75.js";import"./use-page-sticky.46cd318e.js";import"./touch.70a9dd44.js";import"./format.2a3572e1.js";import"./rtl.b51694b1.js";var ie=V({name:"touch-hold",beforeMount(t,o){const{modifiers:d}=o;if(d.mouse!==!0&&C.has.touch!==!0)return;const e={handler:o.value,noop:A,mouseStart(a){typeof e.handler=="function"&&I(a)===!0&&(k(e,"temp",[[document,"mousemove","move","passiveCapture"],[document,"click","end","notPassiveCapture"]]),e.start(a,!0))},touchStart(a){if(a.target!==void 0&&typeof e.handler=="function"){const n=a.target;k(e,"temp",[[n,"touchmove","move","passiveCapture"],[n,"touchcancel","end","notPassiveCapture"],[n,"touchend","end","notPassiveCapture"]]),e.start(a)}},start(a,n){e.origin=q(a);const f=Date.now();C.is.mobile===!0&&(document.body.classList.add("non-selectable"),T(),e.styleCleanup=m=>{e.styleCleanup=void 0;const v=()=>{document.body.classList.remove("non-selectable")};m===!0?(T(),setTimeout(v,10)):v()}),e.triggered=!1,e.sensitivity=n===!0?e.mouseSensitivity:e.touchSensitivity,e.timer=setTimeout(()=>{e.timer=void 0,T(),e.triggered=!0,e.handler({evt:a,touch:n!==!0,mouse:n===!0,position:e.origin,duration:Date.now()-f})},e.duration)},move(a){const{top:n,left:f}=q(a);e.timer!==void 0&&(Math.abs(f-e.origin.left)>=e.sensitivity||Math.abs(n-e.origin.top)>=e.sensitivity)&&(clearTimeout(e.timer),e.timer=void 0)},end(a){w(e,"temp"),e.styleCleanup!==void 0&&e.styleCleanup(e.triggered),e.triggered===!0?a!==void 0&&L(a):e.timer!==void 0&&(clearTimeout(e.timer),e.timer=void 0)}},l=[600,5,7];if(typeof o.arg=="string"&&o.arg.length>0&&o.arg.split(":").forEach((a,n)=>{const f=parseInt(a,10);f&&(l[n]=f)}),[e.duration,e.touchSensitivity,e.mouseSensitivity]=l,t.__qtouchhold=e,d.mouse===!0){const a=d.mouseCapture===!0||d.mousecapture===!0?"Capture":"";k(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}C.has.touch===!0&&k(e,"main",[[t,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[t,"touchend","noop","notPassiveCapture"]])},updated(t,o){const d=t.__qtouchhold;d!==void 0&&o.oldValue!==o.value&&(typeof o.value!="function"&&d.end(),d.handler=o.value)},beforeUnmount(t){const o=t.__qtouchhold;o!==void 0&&(w(o,"main"),w(o,"temp"),o.timer!==void 0&&clearTimeout(o.timer),o.styleCleanup!==void 0&&o.styleCleanup(),delete t.__qtouchhold)}});const re={name:"NotificationsPage",data(){return{loading:!0,data:[],page:0,data_done:!1,is_refresh:void 0,hold:!1,notification_uuids:[],tab:"delete"}},setup(){return{CartStore:ae()}},watch:{hold(t,o){t||(this.notification_uuids=[])}},computed:{hasData(){return Object.keys(this.data).length>0},itemToDelete(){return Object.keys(this.notification_uuids).length}},methods:{refresh(t){this.resetPagination(),this.is_refresh=t},getNotifications(t,o){this.loading=!0,g.getNotification(t).then(d=>{this.page=t,this.data.push(d.details.data),console.log(this.data)}).catch(d=>{this.data_done=!0,this.$refs.nscroll.stop()}).then(d=>{o(),this.loading=!1,g.empty(this.is_refresh)||this.is_refresh()})},resetPagination(){this.page=0,this.data=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()},deleteNotification(t,o,d){this.data[t].splice(o,1),g.deleteNotification(d.notification_uuid).then(e=>{})},handleHold(t){this.hold=!0},resetHold(){this.hold=!1,this.notification_uuids=[]},deleteAllNotification(){g.fetchDataByToken("deleteAllNotification",{notification_uuids:this.notification_uuids}).then(t=>{this.hold=!1,this.resetPagination()}).catch(t=>{}).then(t=>{})},deleteAll(){this.$q.dialog({title:this.$t("Delete all"),message:this.$t("Are you sure want to delete all notifications?"),transitionShow:"fade",transitionHide:"fade",ok:{unelevated:!0,color:"primary",rounded:!1,"text-color":"white",size:"md",label:this.$t("Okay"),"no-caps":!0}}).onOk(()=>{g.fetchDataByToken("deleteNotifications",{}).then(t=>{this.hold=!1,this.resetPagination()}).catch(t=>{}).then(t=>{})}).onCancel(()=>{}).onDismiss(()=>{})}}},se=["src"],le={key:1,class:"row justify-center q-my-md"},ne={key:0,class:"row justify-center q-my-sm"},de={class:"font12 text-grey"},ue={key:1,class:"full-width text-center"},ce={class:"text-h5 text-weight-bold"},fe={class:"text-grey font12"};function me(t,o,d,e,l,a){return r(),u(c,null,[i(Z,{onRefresh:a.refresh},{default:s(()=>[i(R,{class:S({"bg-mydark text-white":t.$q.dark.mode,"bg-white text-dark":!t.$q.dark.mode})},{default:s(()=>[i(O,null,{default:s(()=>[i(y,{onClick:o[0]||(o[0]=n=>t.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:t.$q.dark.mode?"white":"dark"},null,8,["color"]),i(F,{class:"text-weight-bold"},{default:s(()=>[l.hold?(r(),u(c,{key:0},[Q(p(a.itemToDelete)+" "+p(t.$t("selected")),1)],64)):(r(),u(c,{key:1},[Q(p(t.$t("Notifications")),1)],64))]),_:1}),l.hold?(r(),h(y,{key:0,onClick:o[1]||(o[1]=n=>l.hold=!1),flat:"",round:"",dense:"",icon:"close",color:t.$q.dark.mode?"white":"dark"},null,8,["color"])):(r(),u(c,{key:1},[a.hasData?(r(),h(y,{key:0,onClick:a.deleteAll,flat:"",round:"",dense:"",icon:"las la-trash",color:t.$q.dark.mode?"white":"dark"},null,8,["onClick","color"])):_("",!0)],64))]),_:1})]),_:1},8,["class"]),i(Y,{class:S(["bg-transparent",{"flex flex-center":!a.hasData&&!l.loading}])},{default:s(()=>[i(K,{ref:"nscroll",onLoad:a.getNotifications,offset:250},{loading:s(()=>[l.page<=0?(r(),h(J,{key:0,showing:!0,color:"primary",size:"md"})):(r(),u("div",le,[i(X,{color:"primary",size:"40px"})]))]),default:s(()=>[i(M,null,{default:s(()=>[(r(!0),u(c,null,P(l.data,(n,f)=>(r(),u(c,{key:n},[(r(!0),u(c,null,P(n,(m,v)=>(r(),h(E,{key:m,onAction:N=>a.deleteNotification(f,v,m),"right-color":t.$q.dark.mode?"grey600":"mygrey"},{right:s(()=>[i(y,{round:"",color:"lightprimary","text-color":"primary",icon:"las la-trash",unelevated:"",size:"sm"})]),default:s(()=>[H((r(),h(j,{tag:"label",class:S({"bg-mydark ":t.$q.dark.mode,"bg-white ":!t.$q.dark.mode})},{default:s(()=>[i(D,{avatar:""},{default:s(()=>[l.hold?(r(),h(z,{key:0,modelValue:l.notification_uuids,"onUpdate:modelValue":o[2]||(o[2]=N=>l.notification_uuids=N),val:m.notification_uuid},null,8,["modelValue","val"])):(r(),h($,{key:1},{default:s(()=>[b("img",{src:m.image},null,8,se)]),_:2},1024))]),_:2},1024),i(D,null,{default:s(()=>[i(x,{lines:"2",class:"text-weight-medium font13"},{default:s(()=>[Q(p(m.message),1)]),_:2},1024),i(x,{caption:"",class:"font11"},{default:s(()=>[Q(p(m.date),1)]),_:2},1024)]),_:2},1024),i(D,{side:""},{default:s(()=>[i(U,{rounded:"",color:"mygrey"})]),_:1})]),_:2},1032,["class"])),[[ie,a.handleHold,void 0,{mouse:!0}]])]),_:2},1032,["onAction","right-color"]))),128))],64))),128))]),_:1})]),_:1},8,["onLoad"]),l.loading?_("",!0):(r(),u(c,{key:0},[a.hasData?(r(),u(c,{key:0},[l.data_done&&l.data.length>=10?(r(),u("div",ne,[b("p",de,p(t.$t("end of results")),1)])):_("",!0)],64)):(r(),u("div",ue,[i(G,{src:"no-notification.png",fit:"fill","spinner-color":"primary",style:{height:"150px","max-width":"200px"}}),b("div",ce,p(t.$t("No notifications")),1),b("p",fe,p(t.$t("If there is notification it will show here")),1)]))],64)),i(W,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:s(()=>[i(y,{fab:"",icon:"keyboard_arrow_up",color:"mygrey","text-color":"dark",dense:"",padding:"3px"})]),_:1})]),_:1},8,["class"])]),_:1},8,["onRefresh"]),l.hold&&a.itemToDelete>0?(r(),h(oe,{key:0,class:"bg-lightprimary"},{default:s(()=>[i(te,{modelValue:l.tab,"onUpdate:modelValue":o[3]||(o[3]=n=>l.tab=n),class:"text-grey-8","no-caps":"",dense:"",shrink:"","narrow-indicator":"",stretch:"",align:"left",breakpoint:0,"indicator-color":"lightprimary"},{default:s(()=>[i(ee,{name:"delete",icon:"las la-trash",label:"Delete",onClick:a.deleteAllNotification},null,8,["onClick"])]),_:1},8,["modelValue"])]),_:1})):_("",!0)],64)}var ze=B(re,[["render",me]]);export{ze as default};
