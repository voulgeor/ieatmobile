import{Q as a}from"./QImg.67b25d0d.js";import{_ as i,q as l,R as n,k as s,Q as r,V as o,U as d}from"./index.628e6afe.js";const c={name:"NoResults",props:["message","description"],setup(){return{}}},p={class:"full-width text-center"},m={class:"text-h5 text-weight-bold"},u={class:"text-grey font12"};function f(e,t,g,h,y,$){return l(),n("div",p,[s(a,{src:"cuttery.png",fit:"fill","spinner-color":"primary",style:{height:"160px","max-width":"150px"}}),r("div",m,o(e.$t("No Results")),1),r("p",u,o(e.$t("We're sorry. We were not able to find a match with your filters.")),1),s(d,{label:e.$t("Filter again"),unelevated:"","no-caps":"",color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",class:"radius8 text-weight-medium",onClick:t[0]||(t[0]=x=>this.$emit("filterAgain"))},null,8,["label","color","text-color"])])}var w=i(c,[["render",f]]);export{w as default};
