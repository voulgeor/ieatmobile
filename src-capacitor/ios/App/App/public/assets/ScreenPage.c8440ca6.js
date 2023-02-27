import{Q as T}from"./QImg.be7f5b67.js";import{_ as j,r as E,n as L,p as N,q as B,t as M,u as z,R as q,k as F,S as R,U as V,F as X,V as O,X as G}from"./index.744ddfee.js";import{Q as U}from"./QFooter.76206379.js";import{Q as Y}from"./QPage.9848fef2.js";import{g as W,$ as I,S as J,a as K}from"./swiper.min.e2a09fe5.js";import"./QResizeObserver.a8794211.js";function Z(a,$,r,d){const o=W();return a.params.createElements&&Object.keys(d).forEach(c=>{if(!r[c]&&r.auto===!0){let u=a.$el.children(`.${d[c]}`)[0];u||(u=o.createElement("div"),u.className=d[c],a.$el.append(u)),r[c]=u,$[c]=u}}),r}function x(a=""){return`.${a.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function w({swiper:a,extendParams:$,on:r,emit:d}){const o="swiper-pagination";$({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),a.pagination={el:null,$el:null,bullets:[]};let c,u=0;function S(){return!a.params.pagination.el||!a.pagination.el||!a.pagination.$el||a.pagination.$el.length===0}function m(e,l){const{bulletActiveClass:i}=a.params.pagination;e[l]().addClass(`${i}-${l}`)[l]().addClass(`${i}-${l}-${l}`)}function C(){const e=a.rtl,l=a.params.pagination;if(S())return;const i=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,t=a.pagination.$el;let n;const g=a.params.loop?Math.ceil((i-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(n=Math.ceil((a.activeIndex-a.loopedSlides)/a.params.slidesPerGroup),n>i-1-a.loopedSlides*2&&(n-=i-a.loopedSlides*2),n>g-1&&(n-=g),n<0&&a.params.paginationType!=="bullets"&&(n=g+n)):typeof a.snapIndex!="undefined"?n=a.snapIndex:n=a.activeIndex||0,l.type==="bullets"&&a.pagination.bullets&&a.pagination.bullets.length>0){const s=a.pagination.bullets;let f,b,k;if(l.dynamicBullets&&(c=s.eq(0)[a.isHorizontal()?"outerWidth":"outerHeight"](!0),t.css(a.isHorizontal()?"width":"height",`${c*(l.dynamicMainBullets+4)}px`),l.dynamicMainBullets>1&&a.previousIndex!==void 0&&(u+=n-(a.previousIndex-a.loopedSlides||0),u>l.dynamicMainBullets-1?u=l.dynamicMainBullets-1:u<0&&(u=0)),f=Math.max(n-u,0),b=f+(Math.min(s.length,l.dynamicMainBullets)-1),k=(b+f)/2),s.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(v=>`${l.bulletActiveClass}${v}`).join(" ")),t.length>1)s.each(v=>{const h=I(v),p=h.index();p===n&&h.addClass(l.bulletActiveClass),l.dynamicBullets&&(p>=f&&p<=b&&h.addClass(`${l.bulletActiveClass}-main`),p===f&&m(h,"prev"),p===b&&m(h,"next"))});else{const v=s.eq(n),h=v.index();if(v.addClass(l.bulletActiveClass),l.dynamicBullets){const p=s.eq(f),H=s.eq(b);for(let y=f;y<=b;y+=1)s.eq(y).addClass(`${l.bulletActiveClass}-main`);if(a.params.loop)if(h>=s.length){for(let y=l.dynamicMainBullets;y>=0;y-=1)s.eq(s.length-y).addClass(`${l.bulletActiveClass}-main`);s.eq(s.length-l.dynamicMainBullets-1).addClass(`${l.bulletActiveClass}-prev`)}else m(p,"prev"),m(H,"next");else m(p,"prev"),m(H,"next")}}if(l.dynamicBullets){const v=Math.min(s.length,l.dynamicMainBullets+4),h=(c*v-c)/2-k*c,p=e?"right":"left";s.css(a.isHorizontal()?p:"top",`${h}px`)}}if(l.type==="fraction"&&(t.find(x(l.currentClass)).text(l.formatFractionCurrent(n+1)),t.find(x(l.totalClass)).text(l.formatFractionTotal(g))),l.type==="progressbar"){let s;l.progressbarOpposite?s=a.isHorizontal()?"vertical":"horizontal":s=a.isHorizontal()?"horizontal":"vertical";const f=(n+1)/g;let b=1,k=1;s==="horizontal"?b=f:k=f,t.find(x(l.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${b}) scaleY(${k})`).transition(a.params.speed)}l.type==="custom"&&l.renderCustom?(t.html(l.renderCustom(a,n+1,g)),d("paginationRender",t[0])):d("paginationUpdate",t[0]),a.params.watchOverflow&&a.enabled&&t[a.isLocked?"addClass":"removeClass"](l.lockClass)}function _(){const e=a.params.pagination;if(S())return;const l=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,i=a.pagination.$el;let t="";if(e.type==="bullets"){let n=a.params.loop?Math.ceil((l-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&!a.params.loop&&n>l&&(n=l);for(let g=0;g<n;g+=1)e.renderBullet?t+=e.renderBullet.call(a,g,e.bulletClass):t+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;i.html(t),a.pagination.bullets=i.find(x(e.bulletClass))}e.type==="fraction"&&(e.renderFraction?t=e.renderFraction.call(a,e.currentClass,e.totalClass):t=`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,i.html(t)),e.type==="progressbar"&&(e.renderProgressbar?t=e.renderProgressbar.call(a,e.progressbarFillClass):t=`<span class="${e.progressbarFillClass}"></span>`,i.html(t)),e.type!=="custom"&&d("paginationRender",a.pagination.$el[0])}function P(){a.params.pagination=Z(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});const e=a.params.pagination;if(!e.el)return;let l=I(e.el);l.length!==0&&(a.params.uniqueNavElements&&typeof e.el=="string"&&l.length>1&&(l=a.$el.find(e.el),l.length>1&&(l=l.filter(i=>I(i).parents(".swiper")[0]===a.el))),e.type==="bullets"&&e.clickable&&l.addClass(e.clickableClass),l.addClass(e.modifierClass+e.type),l.addClass(a.isHorizontal()?e.horizontalClass:e.verticalClass),e.type==="bullets"&&e.dynamicBullets&&(l.addClass(`${e.modifierClass}${e.type}-dynamic`),u=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),e.type==="progressbar"&&e.progressbarOpposite&&l.addClass(e.progressbarOppositeClass),e.clickable&&l.on("click",x(e.bulletClass),function(t){t.preventDefault();let n=I(this).index()*a.params.slidesPerGroup;a.params.loop&&(n+=a.loopedSlides),a.slideTo(n)}),Object.assign(a.pagination,{$el:l,el:l[0]}),a.enabled||l.addClass(e.lockClass))}function D(){const e=a.params.pagination;if(S())return;const l=a.pagination.$el;l.removeClass(e.hiddenClass),l.removeClass(e.modifierClass+e.type),l.removeClass(a.isHorizontal()?e.horizontalClass:e.verticalClass),a.pagination.bullets&&a.pagination.bullets.removeClass&&a.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&l.off("click",x(e.bulletClass))}r("init",()=>{a.params.pagination.enabled===!1?A():(P(),_(),C())}),r("activeIndexChange",()=>{(a.params.loop||typeof a.snapIndex=="undefined")&&C()}),r("snapIndexChange",()=>{a.params.loop||C()}),r("slidesLengthChange",()=>{a.params.loop&&(_(),C())}),r("snapGridLengthChange",()=>{a.params.loop||(_(),C())}),r("destroy",()=>{D()}),r("enable disable",()=>{const{$el:e}=a.pagination;e&&e[a.enabled?"removeClass":"addClass"](a.params.pagination.lockClass)}),r("lock unlock",()=>{C()}),r("click",(e,l)=>{const i=l.target,{$el:t}=a.pagination;if(a.params.pagination.el&&a.params.pagination.hideOnClick&&t&&t.length>0&&!I(i).hasClass(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&i===a.navigation.nextEl||a.navigation.prevEl&&i===a.navigation.prevEl))return;const n=t.hasClass(a.params.pagination.hiddenClass);d(n===!0?"paginationShow":"paginationHide"),t.toggleClass(a.params.pagination.hiddenClass)}});const Q=()=>{a.$el.removeClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.removeClass(a.params.pagination.paginationDisabledClass),P(),_(),C()},A=()=>{a.$el.addClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.addClass(a.params.pagination.paginationDisabledClass),D()};Object.assign(a.pagination,{enable:Q,disable:A,render:_,update:C,init:P,destroy:D})}const aa={name:"ScreenPage",components:{Swiper:J,SwiperSlide:K},setup(){const a=E(),$=E(0);return{data:E([{image:"onboarding-1.png",title:"Discover Places near you",sub_title:"It's simple to find the food you like. enter your address and let us do the rest."},{image:"onboarding-2.png",title:"Order your customized items",sub_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id libero pretium"},{image:"onboarding-3.png",title:"Faster delivery",sub_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id libero pretium"}]),slide:$,swiperRef:a,nextSlide:()=>{a.value.$el.swiper.slideNext()},onSlideChange:c=>{$.value=c.activeIndex},modules:[w]}},methods:{home(){console.log("home"),L.setStorage("intro",1),this.$router.replace("/home")},login(){console.log("login"),L.setStorage("intro",1),this.$router.replace("/user/login")}}},ea={class:"full-width"},la={class:"text-center fit q-pt-lg"},ta={class:"font16 text-weight-bold q-mb-md line-normal"},na={class:"text-weight-medium font14 text-grey line-normal"};function sa(a,$,r,d,o,c){const u=N("swiper-slide"),S=N("swiper");return B(),M(Y,{padding:"",class:"flex flex-center"},{default:z(()=>[q("div",ea,[F(S,{ref:"swiperRef","slides-per-view":1,"space-between":10,onSwiper:a.onSwiper,onSlideChange:d.onSlideChange,class:"q-mb-md",pagination:{dynamicBullets:!0},modules:d.modules},{default:z(()=>[(B(!0),R(X,null,V(d.data,m=>(B(),M(u,{key:m,class:"row",style:{height:"300px"}},{default:z(()=>[F(T,{src:m.image,style:{"max-width":"100%",height:"150px"},fit:"contain"},null,8,["src"]),q("div",la,[q("div",ta,G(a.$t(m.title)),1),q("div",na,G(a.$t(m.sub_title)),1)])]),_:2},1024))),128))]),_:1},8,["onSwiper","onSlideChange","modules"])]),F(U,{reveal:"",class:"transparent q-pl-md q-pr-md q-pb-md q-pt-md text-dark row items-center justify-between"},{default:z(()=>[F(O,{flat:"","text-color":"grey","no-caps":"",size:"lg",label:a.$t("Skip"),onClick:c.home},null,8,["label","onClick"]),d.slide==2?(B(),M(O,{key:0,"no-caps":"",size:"lg",label:a.$t("Get Started"),unelevated:"",color:"primary","text-color":"white",onClick:c.login},null,8,["label","onClick"])):(B(),M(O,{key:1,"no-caps":"",size:"lg",label:a.$t("Next"),unelevated:"",color:"primary","text-color":"white",style:{"min-width":"120px"},onClick:d.nextSlide},null,8,["label","onClick"]))]),_:1})]),_:1})}var ma=j(aa,[["render",sa]]);export{ma as default};
