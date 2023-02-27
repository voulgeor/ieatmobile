import{aB as V,aC as C,K as A,aD as I,aE as v,aI as q,aJ as w,aK as B,_ as L,n as g,q as r,R as u,k as i,u as s,t as m,ac as _,F as c,a8 as S,U as y,aa as Q,V as p,S as P,Q as b,ai as H,ar as j,b0 as D,bj as z,b1 as $}from"./index.628e6afe.js";import{Q as O}from"./QToolbarTitle.00ffb145.js";import{Q as R}from"./QToolbar.380b4d8f.js";import{Q as U}from"./QHeader.c2c457f8.js";import{Q as x}from"./QItemLabel.efb8f455.js";import{Q as E}from"./QBadge.7c246a5c.js";import{Q as F}from"./QSlideItem.63bb704f.js";import{Q as M}from"./QList.1313d8ab.js";import{Q as K}from"./QInnerLoading.320be028.js";import{Q as J,a as G}from"./QInfiniteScroll.1ac7bff6.js";import{Q as W}from"./QImg.67b25d0d.js";import{Q as X}from"./QPageScroller.dc793b6e.js";import{Q as Y}from"./QPage.19e693fb.js";import{Q as Z}from"./QPullToRefresh.69ba5569.js";import{Q as ee}from"./QTab.b92240b5.js";import{Q as te}from"./QTabs.049a66e7.js";import{Q as oe}from"./QFooter.45bae814.js";import{c as T}from"./selection.e42c4336.js";import{u as ae}from"./CartStore.34e8e648.js";import"./QResizeObserver.23b01bb0.js";import"./use-cache.b0833c75.js";import"./use-page-sticky.3fe3a09e.js";import"./touch.70a9dd44.js";import"./format.2a3572e1.js";import"./rtl.4b414a6d.js";var ie=V({name:"touch-hold",beforeMount(e,o){const{modifiers:d}=o;if(d.mouse!==!0&&C.has.touch!==!0)return;const t={handler:o.value,noop:A,mouseStart(a){typeof t.handler=="function"&&I(a)===!0&&(v(t,"temp",[[document,"mousemove","move","passiveCapture"],[document,"click","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(a.target!==void 0&&typeof t.handler=="function"){const n=a.target;v(t,"temp",[[n,"touchmove","move","passiveCapture"],[n,"touchcancel","end","notPassiveCapture"],[n,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,n){t.origin=q(a);const f=Date.now();C.is.mobile===!0&&(document.body.classList.add("non-selectable"),T(),t.styleCleanup=h=>{t.styleCleanup=void 0;const k=()=>{document.body.classList.remove("non-selectable")};h===!0?(T(),setTimeout(k,10)):k()}),t.triggered=!1,t.sensitivity=n===!0?t.mouseSensitivity:t.touchSensitivity,t.timer=setTimeout(()=>{T(),t.triggered=!0,t.handler({evt:a,touch:n!==!0,mouse:n===!0,position:t.origin,duration:Date.now()-f})},t.duration)},move(a){const{top:n,left:f}=q(a);(Math.abs(f-t.origin.left)>=t.sensitivity||Math.abs(n-t.origin.top)>=t.sensitivity)&&clearTimeout(t.timer)},end(a){w(t,"temp"),t.styleCleanup!==void 0&&t.styleCleanup(t.triggered),t.triggered===!0?a!==void 0&&B(a):clearTimeout(t.timer)}},l=[600,5,7];typeof o.arg=="string"&&o.arg.length>0&&o.arg.split(":").forEach((a,n)=>{const f=parseInt(a,10);f&&(l[n]=f)}),[t.duration,t.touchSensitivity,t.mouseSensitivity]=l,e.__qtouchhold=t,d.mouse===!0&&v(t,"main",[[e,"mousedown","mouseStart",`passive${d.mouseCapture===!0?"Capture":""}`]]),C.has.touch===!0&&v(t,"main",[[e,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[e,"touchend","noop","notPassiveCapture"]])},updated(e,o){const d=e.__qtouchhold;d!==void 0&&o.oldValue!==o.value&&(typeof o.value!="function"&&d.end(),d.handler=o.value)},beforeUnmount(e){const o=e.__qtouchhold;o!==void 0&&(w(o,"main"),w(o,"temp"),clearTimeout(o.timer),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchhold)}});const re={name:"NotificationsPage",data(){return{loading:!0,data:[],page:0,data_done:!1,is_refresh:void 0,hold:!1,notification_uuids:[],tab:"delete"}},setup(){return{CartStore:ae()}},watch:{hold(e,o){e||(this.notification_uuids=[])}},computed:{hasData(){return Object.keys(this.data).length>0},itemToDelete(){return Object.keys(this.notification_uuids).length}},methods:{refresh(e){this.resetPagination(),this.is_refresh=e},getNotifications(e,o){this.loading=!0,g.getNotification(e).then(d=>{this.page=e,this.data.push(d.details.data),console.log(this.data)}).catch(d=>{this.data_done=!0,this.$refs.nscroll.stop()}).then(d=>{o(),this.loading=!1,g.empty(this.is_refresh)||this.is_refresh()})},resetPagination(){this.page=0,this.data=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()},deleteNotification(e,o,d){this.data[e].splice(o,1),g.deleteNotification(d.notification_uuid).then(t=>{})},handleHold(e){this.hold=!0},resetHold(){this.hold=!1,this.notification_uuids=[]},deleteAllNotification(){g.fetchDataByToken("deleteAllNotification",{notification_uuids:this.notification_uuids}).then(e=>{this.hold=!1,this.resetPagination()}).catch(e=>{}).then(e=>{})},deleteAll(){this.$q.dialog({title:this.$t("Delete all"),message:this.$t("Are you sure want to delete all notifications?"),transitionShow:"fade",transitionHide:"fade",ok:{unelevated:!0,color:"primary",rounded:!1,"text-color":"white",size:"md",label:this.$t("Okay"),"no-caps":!0}}).onOk(()=>{g.fetchDataByToken("deleteNotifications",{}).then(e=>{this.hold=!1,this.resetPagination()}).catch(e=>{}).then(e=>{})}).onCancel(()=>{}).onDismiss(()=>{})}}},se=["src"],le={key:1,class:"row justify-center q-my-md"},ne={key:0,class:"row justify-center q-my-sm"},de={class:"font12 text-grey"},ue={key:1,class:"full-width text-center"},ce={class:"text-h5 text-weight-bold"},fe={class:"text-grey font12"};function he(e,o,d,t,l,a){return r(),u(c,null,[i(Z,{onRefresh:a.refresh},{default:s(()=>[i(U,{class:S({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:s(()=>[i(R,null,{default:s(()=>[i(y,{onClick:o[0]||(o[0]=n=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),i(O,{class:"text-weight-bold"},{default:s(()=>[l.hold?(r(),u(c,{key:0},[Q(p(a.itemToDelete)+" "+p(e.$t("selected")),1)],64)):(r(),u(c,{key:1},[Q(p(e.$t("Notifications")),1)],64))]),_:1}),l.hold?(r(),m(y,{key:0,onClick:o[1]||(o[1]=n=>l.hold=!1),flat:"",round:"",dense:"",icon:"close",color:e.$q.dark.mode?"white":"dark"},null,8,["color"])):(r(),u(c,{key:1},[a.hasData?(r(),m(y,{key:0,onClick:a.deleteAll,flat:"",round:"",dense:"",icon:"las la-trash",color:e.$q.dark.mode?"white":"dark"},null,8,["onClick","color"])):_("",!0)],64))]),_:1})]),_:1},8,["class"]),i(Y,{class:S(["bg-transparent",{"flex flex-center":!a.hasData&&!l.loading}])},{default:s(()=>[i(J,{ref:"nscroll",onLoad:a.getNotifications,offset:250},{loading:s(()=>[l.page<=0?(r(),m(K,{key:0,showing:!0,color:"primary",size:"md"})):(r(),u("div",le,[i(G,{color:"primary",size:"40px"})]))]),default:s(()=>[i(M,null,{default:s(()=>[(r(!0),u(c,null,P(l.data,(n,f)=>(r(),u(c,{key:n},[(r(!0),u(c,null,P(n,(h,k)=>(r(),m(F,{key:h,onAction:N=>a.deleteNotification(f,k,h),"right-color":e.$q.dark.mode?"grey600":"mygrey"},{right:s(()=>[i(y,{round:"",color:"lightprimary","text-color":"primary",icon:"las la-trash",unelevated:"",size:"sm"})]),default:s(()=>[H((r(),m(j,{tag:"label",class:S({"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode})},{default:s(()=>[i(D,{avatar:""},{default:s(()=>[l.hold?(r(),m(z,{key:0,modelValue:l.notification_uuids,"onUpdate:modelValue":o[2]||(o[2]=N=>l.notification_uuids=N),val:h.notification_uuid},null,8,["modelValue","val"])):(r(),m($,{key:1},{default:s(()=>[b("img",{src:h.image},null,8,se)]),_:2},1024))]),_:2},1024),i(D,null,{default:s(()=>[i(x,{lines:"2",class:"text-weight-medium font13"},{default:s(()=>[Q(p(h.message),1)]),_:2},1024),i(x,{caption:"",class:"font11"},{default:s(()=>[Q(p(h.date),1)]),_:2},1024)]),_:2},1024),i(D,{side:""},{default:s(()=>[i(E,{rounded:"",color:"mygrey"})]),_:1})]),_:2},1032,["class"])),[[ie,a.handleHold,void 0,{mouse:!0}]])]),_:2},1032,["onAction","right-color"]))),128))],64))),128))]),_:1})]),_:1},8,["onLoad"]),l.loading?_("",!0):(r(),u(c,{key:0},[a.hasData?(r(),u(c,{key:0},[l.data_done&&l.data.length>=10?(r(),u("div",ne,[b("p",de,p(e.$t("end of results")),1)])):_("",!0)],64)):(r(),u("div",ue,[i(W,{src:"no-notification.png",fit:"fill","spinner-color":"primary",style:{height:"150px","max-width":"200px"}}),b("div",ce,p(e.$t("No notifications")),1),b("p",fe,p(e.$t("If there is notification it will show here")),1)]))],64)),i(X,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:s(()=>[i(y,{fab:"",icon:"keyboard_arrow_up",color:"mygrey","text-color":"dark",dense:"",padding:"3px"})]),_:1})]),_:1},8,["class"])]),_:1},8,["onRefresh"]),l.hold&&a.itemToDelete>0?(r(),m(oe,{key:0,class:"bg-lightprimary"},{default:s(()=>[i(te,{modelValue:l.tab,"onUpdate:modelValue":o[3]||(o[3]=n=>l.tab=n),class:"text-grey-8","no-caps":"",dense:"",shrink:"","narrow-indicator":"",stretch:"",align:"left",breakpoint:0,"indicator-color":"lightprimary"},{default:s(()=>[i(ee,{name:"delete",icon:"las la-trash",label:"Delete",onClick:a.deleteAllNotification},null,8,["onClick"])]),_:1},8,["modelValue"])]),_:1})):_("",!0)],64)}var ze=L(re,[["render",he]]);export{ze as default};
