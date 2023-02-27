import{_ as g,m as p,a1 as u,n as t,a2 as _,p as v,q as y,S,k as a,u as n,F as $,R as s,X as r,V as c,a3 as h,v as q}from"./index.e1f31b72.js";import{Q as w}from"./QImg.032a5332.js";import{Q as k}from"./QSpace.5710b96a.js";import{Q as b}from"./QInnerLoading.f6ca88bc.js";import{Q as x}from"./QPage.0ee62e2e.js";import{A as f}from"./AppLocation.ab84e1f0.js";const D={name:"LocationPage",data(){return{position:[],loading:!1,loading_label:"",data:[],address:""}},components:{DeliverySched:p(()=>q(()=>import("./DeliverySched.9770ab2d.js"),["assets/DeliverySched.9770ab2d.js","assets/QBtnToggle.4b269354.js","assets/index.e1f31b72.js","assets/index.469535cd.css","assets/QSelect.616867b7.js","assets/QChip.63c60a46.js","assets/QItemLabel.0c4db6ac.js","assets/selection.08c710ee.js","assets/rtl.b51694b1.js","assets/format.2a3572e1.js","assets/DeliverySched.816d0f65.js"]))},setup(){return{DataStore:u()}},methods:{locationPermission(){this.$q.capacitor?(t.showLoadingBox("",this.$q),f.checkAccuracy().then(e=>{this.locateLocation()}).catch(e=>{e.code===4?this.reverseGeocoding(this.DataStore.maps_config.default_lat,this.DataStore.maps_config.default_lng):(t.hideLoadingBox(this.$q),t.notify("dark",e.message,"error",this.$q))}).then(e=>{})):navigator.geolocation&&(t.showLoadingBox("",this.$q),navigator.geolocation.getCurrentPosition(e=>{this.reverseGeocoding(e.coords.latitude,e.coords.longitude)},e=>{this.reverseGeocoding(this.DataStore.maps_config.default_lat,this.DataStore.maps_config.default_lng)}))},locateLocation(){f.getPosition().then(e=>{this.reverseGeocoding(e.lat,e.lng)}).catch(e=>{this.reverseGeocoding(this.DataStore.maps_config.default_lat,this.DataStore.maps_config.default_lng)}).then(e=>{})},reverseGeocoding(e,i){this.geocoder_loading=!0,t.reverseGeocoding(e,i).then(o=>{this.data=o.details.data,typeof o.details.data.address!="undefined"&&o.details.data.address!==null?(this.address=o.details.data.address.formatted_address,this.setLocation()):(t.notify("dark",this.$t("This location is not available"),"error",this.$q),this.address="",this.data=[])}).catch(o=>{t.notify("dark",o,"error",this.$q)}).then(o=>{this.loading=!1,t.hideLoadingBox(this.$q)})},setLocation(){t.empty(this.data.place_id)&&t.notify("dark",this.$t("Enter your location or select on the map"),"error",this.$q),t.setStorage("place_data",this.data),t.setStorage("place_id",this.data.place_id);const e=t.getStorage("delivery_sched");console.debug("deliverySched=>"+e),_.authenticated()?(this.loading=!0,t.SavePlaceByID(this.data.place_id).then(i=>{t.empty(e)?this.$refs.delivery_sched.showSched(!0):this.backPage()}).catch(i=>{t.notify("dark",i,"error",this.$q)}).then(i=>{this.loading=!1})):t.empty(e)?this.$refs.delivery_sched.showSched(!0):this.backPage()},afterSavetrans(e){this.backPage()},backPage(){t.empty(this.back_url)?this.$router.replace("/home"):this.$router.push(this.back_url)}}},P={class:"full-width text-center"},L={class:"text-weight-bold"},Q={class:"text-weight-medium q-ma-none"},B={class:"row items-center justify-start fit q-pl-md"},A={class:"q-mr-md"},C={class:"row items-center justify-start fit q-pl-md"},G={class:"q-mr-md"};function I(e,i,o,E,d,l){const m=v("DeliverySched");return y(),S($,null,[a(x,{class:"flex flex-center q-pl-md q-pr-md"},{default:n(()=>[s("div",P,[a(w,{src:"cuttery.png",fit:"fill","spinner-color":"primary",style:{height:"130px","max-width":"120px"}}),s("h5",L,r(e.$t("Let's find best restaurant")),1),s("p",Q,r(e.$t("Set your location to started searching for restaurant in your area")),1),a(k,{class:"q-pa-sm"}),a(c,{unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold radius28 q-mb-md",size:"lg",onClick:l.locationPermission},{default:n(()=>[s("div",B,[s("div",A,[a(h,{name:"las la-search-location"})]),s("div",null,r(e.$t("Share location")),1)])]),_:1},8,["onClick"]),a(c,{unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold radius28",size:"lg",to:"/location/map"},{default:n(()=>[s("div",C,[s("div",G,[a(h,{name:"las la-map-marker"})]),s("div",null,r(e.$t("Choose from map")),1)])]),_:1})]),a(b,{showing:d.loading,color:"primary",size:"md",label:e.$t(d.loading_label)},null,8,["showing","label"])]),_:1}),a(m,{ref:"delivery_sched",onAfterSavetrans:l.afterSavetrans},null,8,["onAfterSavetrans"])],64)}var T=g(D,[["render",I]]);export{T as default};
