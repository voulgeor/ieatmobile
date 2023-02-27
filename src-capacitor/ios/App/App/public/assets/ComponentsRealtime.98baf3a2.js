import{l as s}from"./index.1b1ee048.js";import{_ as i,a0 as r,a1 as a,n,q as o,R as h}from"./index.b5428c1f.js";const d={name:"ComponentsRealtime",props:["getevent"],setup(){return{DataStore:r()}},data(){return{data:[],pusher:void 0,channel:void 0}},watch:{DataStore:{immediate:!0,deep:!0,handler(e,t){Object.keys(e.realtime_data).length>0&&a.authenticated()&&(this.data=e.realtime_data,this.data.realtime_app_enabled==1&&this.initProvider())}}},methods:{initProvider(){switch(this.data.realtime_provider){case"pusher":s("https://js.pusher.com/7.0/pusher.min.js").then(()=>{this.initPusher()}).catch(()=>{console.debug("failed loading realtime script")});break}},initPusher(){if(n.empty(this.pusher)){console.log("initPusher"),Pusher.logToConsole=!1,this.pusher=new Pusher(this.data.pusher_key,{cluster:this.data.pusher_cluster});const e=a.getUser();this.channel=this.pusher.subscribe(e.client_uuid),this.channel.bind(this.data.event[this.getevent],t=>{this.$emit("afterReceive",t)})}}}},c={style:{display:"none"}};function u(e,t,l,p,m,_){return o(),h("div",c)}var g=i(d,[["render",u]]);export{g as default};
