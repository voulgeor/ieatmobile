import{_ as h,n as l,q as _,t as g,u as a,k as s,b3 as c,a3 as p,ab as m,X as u,bp as b,bq as y,as as k}from"./index.fff20017.js";import{Q as f}from"./QItemLabel.edeba251.js";import{Q as q}from"./QSelect.12278320.js";import"./QChip.369de1c0.js";import"./selection.94eeb582.js";import"./rtl.46960cfe.js";import"./format.a74bec27.js";const Q={name:"SearchAddress",props:["placeholder"],data(){return{address:"",address_data:[],options:[],data:[],loading:!1}},methods:{Focus(){this.$refs.select_address.focus()},filterFn(e,t,r){if(e.length<2){r();return}l.getlocationAutocomplete(e).then(o=>{t(()=>{this.options=o.details.data})}).catch(o=>{console.debug(o)}).then(o=>{})},selectAddress(e){this.address_data=e,this.address=e.description,l.getLocationDetails(e.id).then(t=>{const r=t.details.data;l.empty(r.latitude)||this.$emit("afterSelectaddress",r)}).catch(t=>{l.notify("negative",t,"error_outline",this.$q)}).then(t=>{})}}};function A(e,t,r,o,i,n){return _(),g(q,{modelValue:i.address,"onUpdate:modelValue":[t[0]||(t[0]=d=>i.address=d),n.selectAddress],ref:"select_address","use-input":"","fill-input":"","input-debounce":"0",options:i.options,onFilter:n.filterFn,"bg-color":e.$q.dark.mode?"grey600":"mygrey",color:e.$q.dark.mode?"grey300":"dark",borderless:"",placeholder:r.placeholder,behavior:"menu","hide-dropdown-icon":""},{option:a(d=>[s(k,b(y(d.itemProps)),{default:a(()=>[s(c,{avatar:"",top:"",style:{"min-width":"auto"},class:"q-pr-xs"},{default:a(()=>[s(p,{name:"las la-map-marker"})]),_:1}),s(c,null,{default:a(()=>[s(f,null,{default:a(()=>[m(u(d.opt.description),1)]),_:2},1024),s(f,{caption:""},{default:a(()=>[m(u(d.opt.addressLine2),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),prepend:a(()=>[s(p,{name:"las la-arrow-left",color:"grey",class:"q-pl-sm"})]),_:1},8,["modelValue","options","onFilter","onUpdate:modelValue","bg-color","color","placeholder"])}var L=h(Q,[["render",A]]);export{L as default};
