import{J as d,n as a}from"./index.e1f31b72.js";let l=[],n=[];const h=d("deliverysched",{state:()=>({loading:!1,loading_sched:!1,transaction_type:"",transaction_list:[],delivery_options:[],trans_data:[],delivery_date_list:[],delivery_time_list:[],delivery_date:"",delivery_time:"",whento_deliver:"now",new_transaction_type:"",new_whento_deliver:"",filters:{},main_layout_header:!0,data:[]}),actions:{getDeliverySched(r,i){this.loading_sched=!0,this.transaction_list=[],this.delivery_options=[],a.fetchDataPost("getDeliveryDetails","cart_uuid="+r+"&slug="+i).then(e=>{this.transaction_type=e.details.transaction_type,this.data=e.details.data,Object.keys(e.details.data).length>0&&Object.entries(e.details.data).forEach(([t,s])=>{this.transaction_list.push({label:s.service_name,value:s.service_code})}),Object.keys(e.details.delivery_option).length>0&&Object.entries(e.details.delivery_option).forEach(([t,s])=>{this.delivery_options.push({label:s.name,value:s.value})}),this.whento_deliver=e.details.whento_deliver,this.trans_data={delivery_date:e.details.delivery_date,delivery_date_pretty:e.details.delivery_date_pretty,delivery_time:e.details.delivery_time,whento_deliver:e.details.whento_deliver}}).catch(e=>{this.transaction_list=[]}).then(e=>{this.loading_sched=!1})},hadTransactionList(){return a.empty(this.transaction_list)?!1:Object.keys(this.transaction_list).length>0},clearData(){this.delivery_date_list=[],this.delivery_time_list=[]},getDeliveryTimes(r){this.clearData(),this.loading=!0,a.fetchDataPost("getDeliveryTimes","cart_uuid="+a.getStorage("cart_uuid")+"&slug="+r).then(i=>{Object.keys(i.details.opening_hours).length>0&&Object.entries(i.details.opening_hours.dates).forEach(([t,s])=>{this.delivery_date_list.push({label:s.name,value:s.value})}),n=i.details.opening_hours.dates,l=i.details.opening_hours.time_ranges;const e=Object.keys(n);if(this.delivery_date=e[0],this.getTimeList(this.delivery_date),!a.empty(l[this.delivery_date])){const t=l[this.delivery_date][0];this.delivery_time={label:t.pretty_time,value:t.end_time,start_time:t.start_time,end_time:t.end_time,pretty_time:t.pretty_time}}if(!a.empty(this.trans_data.delivery_date)){this.delivery_date=this.trans_data.delivery_date;const t=JSON.parse(this.trans_data.delivery_time);Object.keys(t).length>0&&(this.delivery_time=t)}}).catch(i=>{console.debug(i)}).then(i=>{this.loading=!1})},getTimeList(r){a.empty(l[r])||Object.entries(l[r]).forEach(([i,e])=>{this.delivery_time_list.push({label:e.pretty_time,value:e.end_time,start_time:e.start_time,end_time:e.end_time,pretty_time:e.pretty_time})})}}});export{h as u};
