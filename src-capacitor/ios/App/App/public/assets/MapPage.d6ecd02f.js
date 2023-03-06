import{_ as P,m as b,a0 as D,n as r,a1 as L,p,q as d,R as m,j as s,u as i,a8 as g,a9 as M,F as f,U as u,aa as _,V as k,Q as h,ab as z,a2 as S,t as y,ac as v,ad as E,ae as G,v as q}from"./index.b5428c1f.js";import{Q as V}from"./QToolbarTitle.ad5aac42.js";import{Q as I}from"./QToolbar.b8f4cf51.js";import{Q as B}from"./QHeader.3c924b64.js";import{Q as R}from"./QInnerLoading.e8a064f8.js";import{Q as T}from"./QFooter.04730c47.js";import{Q as $}from"./QPage.40760bfd.js";import{F as N,f as j}from"./index.0dada255.js";import{u as x}from"./ClientStore.845fd4cd.js";import{u as O}from"./MapStore.0efde967.js";import{A as C}from"./AppLocation.67e253eb.js";import"./QResizeObserver.74d4236c.js";const U={name:"MapPage",components:{GoogleMap:N,Marker:j,SearchAddress:b(()=>q(()=>import("./SearchAddress.cbda9e5d.js"),["assets/SearchAddress.cbda9e5d.js","assets/index.b5428c1f.js","assets/index.f7829e99.css","assets/QItemLabel.25732301.js","assets/QSelect.72c93ca6.js","assets/QChip.bdda5644.js","assets/selection.099be30b.js","assets/rtl.9c6e6d3e.js","assets/format.ec2e0666.js"])),DeliverySched:b(()=>q(()=>import("./DeliverySched.5044a85f.js"),["assets/DeliverySched.5044a85f.js","assets/QBtnToggle.becf21c8.js","assets/index.b5428c1f.js","assets/index.f7829e99.css","assets/QSelect.72c93ca6.js","assets/QChip.bdda5644.js","assets/QItemLabel.25732301.js","assets/selection.099be30b.js","assets/rtl.9c6e6d3e.js","assets/format.ec2e0666.js","assets/DeliverySched.9387c94f.js"]))},setup(){const e=D(),a=x(),o=O();return{DataStore:e,ClientStore:a,MapStore:o}},data(){return{address:"",address_search:"",modal:!1,geocoder_loading:!0,center:{lat:34.04703,lng:-118.24686},data:[],marker_position:{},default_icon:{text:"\uEA44",fontFamily:"Material Icons",color:"#ffffff",fontSize:"18px"},icon:{},back_url:"",loading:!0,maps_config:[]}},created(){this.back_url=this.$route.query.url,this.icon=this.default_icon},computed:{hasAddress(){return!!r.empty(this.address)}},watch:{DataStore:{immediate:!0,deep:!0,handler(e,a){console.log(e.loading),Object.keys(e.maps_config).length>0?(this.maps_config=e.maps_config,this.marker_position={lat:parseFloat(this.maps_config.default_lat),lng:parseFloat(this.maps_config.default_lng)},this.checkSavedLocation()):e.loading==!1&&(this.geocoder_loading=!1)}}},methods:{checkSavedLocation(){let e=r.getStorage("place_data");r.empty(e)?this.locationPermission():(this.geocoder_loading=!1,this.loading=!1,this.data=e,this.address_search=e.address.formatted_address,this.address=e.address.formatted_address,this.marker_position={lat:parseFloat(this.data.latitude),lng:parseFloat(this.data.longitude)},this.center=this.marker_position)},centerChanged(){console.log("centerChanged");const a=this.$refs.mapRef.map.getCenter(),o=new google.maps.LatLng(a.lat(),a.lng());this.marker_position={lat:o.lat(),lng:o.lng()}},dragEnd(e){console.log("dragEnd");const o=this.$refs.mapRef.map.getCenter(),c=new google.maps.LatLng(o.lat(),o.lng());this.reverseGeocoding(c.lat(),c.lng())},addressFocus(){this.$refs.search_address.Focus()},afterSelectaddress(e){this.data=e,this.address=e.address.formatted_address,this.address_search=e.address.formatted_address,this.modal=!1,this.marker_position={lat:parseFloat(e.latitude),lng:parseFloat(e.longitude)},this.center={lat:parseFloat(e.latitude),lng:parseFloat(e.longitude)}},reverseGeocoding(e,a){this.geocoder_loading=!0,r.reverseGeocoding(e,a).then(o=>{this.data=o.details.data,typeof o.details.data.address!="undefined"&&o.details.data.address!==null?(this.address=o.details.data.address.formatted_address,this.marker_position={lat:e,lng:a},this.center=this.marker_position):(this.address="",this.data=[])}).catch(o=>{r.notify("dark",o,"error",this.$q)}).then(o=>{this.geocoder_loading=!1,this.loading=!1})},setLocation(){r.empty(this.data.place_id)&&r.notify("dark",$t("Enter your location or select on the map"),"error",this.$q),r.setStorage("place_data",this.data),r.setStorage("place_id",this.data.place_id);const e=r.getStorage("delivery_sched");console.debug("deliverySched=>"+e),L.authenticated()?(this.geocoder_loading=!0,r.SavePlaceByID(this.data.place_id).then(a=>{r.empty(e)?this.$refs.delivery_sched.showSched(!0):(this.DataStore.list_data=[],this.backPage()),this.ClientStore.getAddress()}).catch(a=>{r.notify("dark",a,"error",this.$q)}).then(a=>{this.geocoder_loading=!1})):(this.geocoder_loading=!0,r.empty(e)?(this.geocoder_loading=!1,this.$refs.delivery_sched.showSched(!0)):(this.DataStore.list_data=[],this.backPage()))},backPage(){r.empty(this.back_url)?this.$router.push("/home"):this.$router.push(this.back_url)},afterSavetrans(e){this.backPage()},locationPermission(){this.$q.capacitor?C.checkAccuracy().then(e=>{this.locateLocation()}).catch(e=>{e.code===4?(this.geocoder_loading=!1,this.reverseGeocoding(parseFloat(this.maps_config.default_lat),parseFloat(this.maps_config.default_lng))):r.notify("dark",e.message,"error",this.$q)}).then(e=>{}):navigator.geolocation&&navigator.geolocation.getCurrentPosition(e=>{this.reverseGeocoding(e.coords.latitude,e.coords.longitude)},e=>{this.reverseGeocoding(parseFloat(this.maps_config.default_lat),parseFloat(this.maps_config.default_lng))})},locateLocation(){C.getPosition().then(e=>{this.reverseGeocoding(e.lat,e.lng)}).catch(e=>{this.reverseGeocoding(parseFloat(this.maps_config.default_lat),parseFloat(this.maps_config.default_lng))}).then(e=>{})}}},H={class:"col-12 relative-position"},J={class:"absolute-top-right z-top",style:{top:"80px",right:"15px"}},K={class:"q-pr-sm"},W={class:"font13 col-10"},X={key:1,class:"q-pa-lg"};function Y(e,a,o,c,t,l){const w=p("Marker"),F=p("GoogleMap"),A=p("SearchAddress"),Q=p("DeliverySched");return d(),m(f,null,[s(B,{class:g({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:i(()=>[s(I,null,{default:i(()=>[s(u,{onClick:a[0]||(a[0]=n=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),s(V,{class:"text-weight-bold"},{default:i(()=>[_(k(e.$t("Add Address")),1)]),_:1})]),_:1})]),_:1},8,["class"]),s($,{class:"bg-grey-1 row items-stretch"},{default:i(()=>[h("div",H,[h("div",{class:g(["z-top q-pl-md q-pr-md q-pb-sm row items-center justify-between",{"bg-mydark":e.$q.dark.mode,"bg-white":!e.$q.dark.mode}])},[s(z,{modelValue:t.address_search,"onUpdate:modelValue":a[1]||(a[1]=n=>t.address_search=n),onClick:a[2]||(a[2]=n=>t.modal=!t.modal),label:e.$t("Enter your location"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:g(["input-borderless cursor-pointer",{fit:!t.address_search}]),readonly:""},{prepend:i(()=>[s(S,{name:"eva-search-outline",size:"sm"})]),_:1},8,["modelValue","label","bg-color","label-color","class"]),t.address_search?(d(),y(u,{key:0,onClick:a[3]||(a[3]=n=>t.address_search=""),"no-caps":"",icon:"las la-times",dense:"",unelevated:""})):v("",!0)],2),h("div",J,[s(u,{onClick:l.locationPermission,round:"",color:"secondary",icon:"gps_fixed",unelevated:""},null,8,["onClick"])]),c.DataStore.maps_config?(d(),y(F,{key:0,ref:"mapRef",class:"fit","api-key":t.maps_config.key,center:t.center,zoom:t.maps_config.zoom,"disable-default-ui":!0,onCenter_changed:l.centerChanged,onDragend:l.dragEnd,styles:e.$q.dark.mode?c.MapStore.map_style_dark:c.MapStore.map_style_light},{default:i(()=>[t.marker_position?(d(),y(w,{key:0,options:{position:t.marker_position,label:t.icon}},null,8,["options"])):v("",!0)]),_:1},8,["api-key","center","zoom","onCenter_changed","onDragend","styles"])):v("",!0)]),s(R,{showing:t.geocoder_loading,size:"md",color:"primary"},null,8,["showing"]),s(T,{reveal:"",class:g(["bg-whitex q-pl-md q-pr-md q-pb-lg q-pt-md text-dark",{"bg-white":!t.loading,"bg-grey-1":t.loading}]),style:{"border-top-right-radius":"15px","border-top-left-radius":"15px"}},{default:i(()=>[t.loading?(d(),m("div",X,"\xA0")):(d(),m(f,{key:0},[h("div",{class:g(["row items-center q-mb-md no-wrap",{"text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},[h("div",K,[s(S,{name:"las la-map-marker",size:"md"})]),h("div",W,[l.hasAddress?(d(),m(f,{key:1},[_(k(e.$t("Location is not available")),1)],64)):(d(),m(f,{key:0},[_(k(t.address),1)],64))])],2),s(u,{label:e.$t("Confirm Location"),onClick:l.setLocation,disable:l.hasAddress||t.geocoder_loading,loading:t.loading,unelevated:"","no-caps":"",color:t.geocoder_loading==!0?"grey":"primary","text-color":"white",class:"full-width text-weight-medium radius28",size:"lg"},null,8,["label","onClick","disable","loading","color"])],64))]),_:1},8,["class"])]),_:1}),s(M,{modelValue:t.modal,"onUpdate:modelValue":a[4]||(a[4]=n=>t.modal=n),position:"top","transition-show":"fade","transition-hide":"fade",onShow:a[5]||(a[5]=n=>l.addressFocus())},{default:i(()=>[s(E,{class:g(["no-shadow q-pt-md q-pb-sm",{"bg-mydark":e.$q.dark.mode,"bg-white":!e.$q.dark.mode}])},{default:i(()=>[s(G,null,{default:i(()=>[s(A,{ref:"search_address",onAfterSelectaddress:l.afterSelectaddress,placeholder:e.$t("Enter your location")},null,8,["onAfterSelectaddress","placeholder"])]),_:1})]),_:1},8,["class"])]),_:1},8,["modelValue"]),s(Q,{ref:"delivery_sched",onAfterSavetrans:l.afterSavetrans},null,8,["onAfterSavetrans"])],64)}var ge=P(U,[["render",Y]]);export{ge as default};