import{I as n,n as s,a1 as o,aM as _}from"./index.bc7ef6d7.js";const l=n("cartstore",{state:()=>({loading:!1,items_count:0,cart_loading:!0,cart_reloading:!1,cart_uuid:"",cart_items:[],cart_summary:[],transaction_data:[],data:0,cart_subtotal:0,cart_total:0,error:[],out_of_range:!1,cart_merchant:[],address_component:[],phone_details:[],resp_opening:[],transaction_info:[],data_transaction:[],$q:void 0,tips_data:[],enabled_tip:!1,enabled_voucher:!1,cart_payload:["items","subtotal","distance_local","items_count","merchant_info","check_opening","transaction_info"]}),getters:{canProceed(){let e=!0;return this.items_count<=0&&(e=!1),this.out_of_range===!0&&(e=!1),this.error.length>0&&(e=!1),e},hasData(){if(!s.empty(this.cart_items)){if(Object.keys(this.cart_items).length>0)return!0}return!1},hasItem(){return this.items_count>0},getErrorMsg(){let e="";return this.error.length>0&&Object.entries(this.error).forEach(([a,r])=>{e+=r+`
`}),e}},actions:{getCount(){const e={cart_uuid:s.getStorage("cart_uuid"),place_id:s.getStorage("place_id"),payload:["items_count"]};this.loading=!0,s.getCart(e,!0).then(a=>{this.items_count=a.details.items_count}).catch(a=>{this.items_count=0}).then(a=>{this.loading=!1})},getCart(e,a){const r={cart_uuid:s.getStorage("cart_uuid"),place_id:s.getStorage("place_id"),payload:a,choosen_delivery:s.getStorage("choosen_delivery")};e?this.cart_loading=!0:this.cart_reloading=!0;let i=!0;o.authenticated()&&(i=!1),s.getCart(r,i).then(t=>{console.log(t),this.items_count=t.details.items_count,this.cart_uuid=t.details.cart_uuid,this.cart_items=t.details.data.items,this.cart_summary=t.details.data.summary,this.cart_total=t.details.data.total,this.error=t.details.error,this.cart_subtotal=t.details.data.subtotal,this.out_of_range=t.details.out_of_range,this.transaction_info=t.details.transaction_info,this.data_transaction=t.details.data_transaction,this.tips_data=t.details.tips_data,this.enabled_tip=t.details.enabled_tip,this.enabled_voucher=t.details.enabled_voucher,console.log(t),this.cart_points=t.details.data.points,this.points_enabled=t.details.data.points_enabled,this.cart_points_cart_banner=t.details.data.points_cart_banner,this.mt_disabled_pts=t.details.data.mt_disabled_pts,s.empty(t.details.data.merchant)||(this.cart_merchant=t.details.data.merchant,_.set("cart_merchant_slug",this.cart_merchant.slug)),this.address_component=t.details.address_component,this.phone_details=t.details.phone_details,this.resp_opening=t.details.resp_opening}).catch(t=>{this.resetData()}).then(t=>{this.cart_loading=!1,this.cart_reloading=!1})},resetData(){this.items_count=0,this.cart_items=[],this.cart_summary=[],this.cart_total=[],this.error=[],this.cart_subtotal=[],this.cart_merchant=[],this.address_component=[],this.phone_details=[],this.transaction_info=[],this.data_transaction=[],this.tips_data=[],this.enabled_tip=!1,this.enabled_voucher=!1,this.cart_points=[],this.points_enabled=0,this.cart_points_cart_banner="",this.mt_disabled_pts=0},hadItem(){return this.items_count>0},hadData(){return s.empty(this.cart_items)?!1:Object.keys(this.cart_items).length>0},canCheckout(){let e=!0;return this.items_count<=0&&(e=!1),this.out_of_range===!0&&(e=!1),this.error.length>0&&(e=!1),e},getError(){let e="";return this.error.length>0&&Object.entries(this.error).forEach(([a,r])=>{e+=r+`
`}),e}}});export{l as u};
