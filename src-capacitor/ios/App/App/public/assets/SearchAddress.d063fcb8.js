import{_ as h,n as l,q as _,t as g,u as a,k as s,b0 as c,a2 as p,aa as m,V as u,bm as b,bn as y,ar as k}from"./index.628e6afe.js";import{Q as f}from"./QItemLabel.efb8f455.js";import{Q}from"./QSelect.38f99574.js";import"./QChip.b2c02d07.js";import"./selection.e42c4336.js";import"./rtl.4b414a6d.js";import"./format.2a3572e1.js";const V={name:"SearchAddress",props:["placeholder"],data(){return{address:"",address_data:[],options:[],data:[],loading:!1}},methods:{Focus(){this.$refs.select_address.focus()},filterFn(e,t,r){if(e.length<2){r();return}l.getlocationAutocomplete(e).then(o=>{t(()=>{this.options=o.details.data})}).catch(o=>{console.debug(o)}).then(o=>{})},selectAddress(e){this.address_data=e,this.address=e.description,l.getLocationDetails(e.id).then(t=>{const r=t.details.data;l.empty(r.latitude)||this.$emit("afterSelectaddress",r)}).catch(t=>{l.notify("negative",t,"error_outline",this.$q)}).then(t=>{})}}};function q(e,t,r,o,i,n){return _(),g(Q,{modelValue:i.address,"onUpdate:modelValue":[t[0]||(t[0]=d=>i.address=d),n.selectAddress],ref:"select_address","use-input":"","fill-input":"","input-debounce":"0",options:i.options,onFilter:n.filterFn,"bg-color":e.$q.dark.mode?"grey600":"mygrey",color:e.$q.dark.mode?"grey300":"dark",borderless:"",placeholder:r.placeholder,behavior:"menu","hide-dropdown-icon":""},{option:a(d=>[s(k,b(y(d.itemProps)),{default:a(()=>[s(c,{avatar:"",top:"",style:{"min-width":"auto"},class:"q-pr-xs"},{default:a(()=>[s(p,{name:"las la-map-marker"})]),_:1}),s(c,null,{default:a(()=>[s(f,null,{default:a(()=>[m(u(d.opt.description),1)]),_:2},1024),s(f,{caption:""},{default:a(()=>[m(u(d.opt.addressLine2),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),prepend:a(()=>[s(p,{name:"las la-arrow-left",color:"grey",class:"q-pl-sm"})]),_:1},8,["modelValue","options","onFilter","onUpdate:modelValue","bg-color","color","placeholder"])}var L=h(V,[["render",q]]);export{L as default};
