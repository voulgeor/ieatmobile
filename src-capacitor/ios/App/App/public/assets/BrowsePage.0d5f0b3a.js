import{_ as i,n as u,q as p,t as c,u as n,j as a,a2 as m,ab as h,Q as s,V as r}from"./index.ea6274c1.js";import{Q as g}from"./QSpace.df9ea38d.js";import{Q as d}from"./QBtnToggle.591d1e9c.js";import{Q as b}from"./QPage.d653db0f.js";const f={name:"BrowsePage",components:{},mounted(){},data(){return{featured:[],recently_search:"",cuisine:""}},methods:{getFeaturedList(){u.getFeaturedList().then(e=>{this.featured=e.details.data}).catch(e=>{}).then(e=>{})}}},w={class:"font13 text-weight-bold text-h5"},y={class:"font13 text-weight-bold text-h5"},v={class:"font13 text-weight-bold text-h5"};function V(e,t,$,x,l,Q){return p(),c(b,{padding:"",class:"q-pl-md q-pr-md"},{default:n(()=>[a(h,{modelValue:e.q,"onUpdate:modelValue":t[0]||(t[0]=o=>e.q=o),label:e.$t("Search food and restaurants"),outlined:"","lazy-rules":"","bg-color":"input","label-color":"grey",borderless:"",readonly:"",class:"input-borderless"},{prepend:n(()=>[a(m,{name:"eva-search-outline",size:"sm"})]),_:1},8,["modelValue","label"]),a(g,{class:"q-pa-xs"}),s("div",w,r(e.$t("Recently Search")),1),a(d,{modelValue:l.recently_search,"onUpdate:modelValue":t[1]||(t[1]=o=>l.recently_search=o),"toggle-color":"secondary",color:"mygrey","text-color":"dark","no-caps":"","no-wrap":"",unelevated:"",class:"rounded-group2 text-weight-bold line-1",options:[{label:this.$t("One"),value:"one"},{label:this.$t("Two"),value:"two"},{label:this.$t("Three"),value:"three"}]},null,8,["modelValue","options"]),s("div",y,r(e.$t("Popular Cuisines")),1),a(d,{modelValue:l.cuisine,"onUpdate:modelValue":t[2]||(t[2]=o=>l.cuisine=o),"toggle-color":"secondary",color:"mygrey","text-color":"dark","no-caps":"","no-wrap":"",unelevated:"",class:"rounded-group2 text-weight-bold line-1",options:[{label:this.$t("One"),value:"one"},{label:this.$t("Two"),value:"two"},{label:this.$t("Three"),value:"three"}]},null,8,["modelValue","options"]),s("div",v,r(e.$t("Popular Items Near You")),1)]),_:1})}var T=i(f,[["render",V]]);export{T as default};
