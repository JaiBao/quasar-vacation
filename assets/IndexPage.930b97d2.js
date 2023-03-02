import{j as se,r as ae,w as ie,o as Te,k as Ae,h as b,l as me,m as ke,n as Ce,p as Me,q as De,c as I,s as ze,t as re,u as Se,v as Ie,x as qe,y as $e,z as ue,A as pe,B as Pe,C as he,D as Le,E as be,g as Ne,G as Be,H as We,I as Qe,K as Ve,J as He,L as Fe,M as Re,N as Ye,Q as ge,O as Ue,P as Ke,R as Xe,S as Ge,U as Je,V as Ze,W as et,X as tt,Y as T,d as q,Z as M,_ as Oe,$ as nt,a0 as ee}from"./index.769d91c3.js";import{u as at,a as ot,b as rt,Q as it}from"./QTable.37a609bb.js";import{u as st,a as lt,Q as ce}from"./QImg.348f209c.js";import{u as ut}from"./use-cache.b0833c75.js";import{Q as de,a as Z}from"./QCard.6b978278.js";import{c as ct,g as dt}from"./_commonjsHelpers.88e99c8f.js";import"./use-key-composition.4cfb81be.js";function ye(e){let m=!1,h,u;function a(){u=arguments,m!==!0&&(m=!0,h=requestAnimationFrame(()=>{e.apply(this,u),u=void 0,m=!1}))}return a.cancel=()=>{window.cancelAnimationFrame(h),m=!1},a}const{passive:fe}=De;var ft=se({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:e=>e>=0&&e<=1},scrollTarget:{default:void 0},onScroll:Function},setup(e,{slots:m,emit:h}){const u=ae(0),a=ae(null),t=ae(null),n=ae(null);let s,g,c,p,f,l;ie(()=>e.height,()=>{s===!0&&y()}),ie(()=>e.scrollTarget,()=>{s===!0&&(W(),B())});let v=P=>{u.value=P,e.onScroll!==void 0&&h("scroll",P)};function y(){let P,D,$;l===window?(P=0,$=D=window.innerHeight):(P=ke(l).top,D=Ce(l),$=P+D);const O=ke(a.value).top,E=O+e.height;if(f!==void 0||E>P&&O<$){const w=($-O)/(e.height+D);C((c-e.height)*w*e.speed),v(w)}}let C=P=>{g.style.transform=`translate3d(-50%,${Math.round(P)}px,0)`};function k(){c=g.naturalHeight||g.videoHeight||Ce(g),s===!0&&y()}function B(){s=!0,l=Me(a.value,e.scrollTarget),l.addEventListener("scroll",y,fe),window.addEventListener("resize",p,fe),y()}function W(){s===!0&&(s=!1,l.removeEventListener("scroll",y,fe),window.removeEventListener("resize",p,fe),l=void 0,C.cancel(),v.cancel(),p.cancel())}return Te(()=>{C=ye(C),v=ye(v),p=ye(k),g=m.media!==void 0?t.value.children[0]:n.value,g.onload=g.onloadstart=g.loadedmetadata=k,k(),g.style.display="initial",window.IntersectionObserver!==void 0?(f=new IntersectionObserver(P=>{(P[0].isIntersecting===!0?B:W)()}),f.observe(a.value)):B()}),Ae(()=>{W(),f!==void 0&&f.disconnect(),g.onload=g.onloadstart=g.loadedmetadata=null}),()=>b("div",{ref:a,class:"q-parallax",style:{height:`${e.height}px`}},[b("div",{ref:t,class:"q-parallax__media absolute-full"},m.media!==void 0?m.media():[b("img",{ref:n,src:e.src})]),b("div",{class:"q-parallax__content absolute-full column flex-center"},m.content!==void 0?m.content({percentScrolled:u.value}):me(m.default))])}}),we=se({name:"QVideo",props:{...st,src:{type:String,required:!0},title:String,fetchpriority:{type:String,default:"auto"},loading:{type:String,default:"eager"},referrerpolicy:{type:String,default:"strict-origin-when-cross-origin"}},setup(e){const m=lt(e),h=I(()=>"q-video"+(e.ratio!==void 0?" q-video--responsive":""));return()=>b("div",{class:h.value,style:m.value},[b("iframe",{src:e.src,title:e.title,fetchpriority:e.fetchpriority,loading:e.loading,referrerpolicy:e.referrerpolicy,frameborder:"0",allowfullscreen:!0})])}});function mt(e){const m=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((h,u)=>{const a=parseFloat(h);a&&(m[u]=a)}),m}var vt=ze({name:"touch-swipe",beforeMount(e,{value:m,arg:h,modifiers:u}){if(u.mouse!==!0&&re.has.touch!==!0)return;const a=u.mouseCapture===!0?"Capture":"",t={handler:m,sensitivity:mt(h),direction:Se(u),noop:Ie,mouseStart(n){qe(n,t)&&$e(n)&&(ue(t,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(n,!0))},touchStart(n){if(qe(n,t)){const s=n.target;ue(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","notPassiveCapture"],[s,"touchend","end","notPassiveCapture"]]),t.start(n)}},start(n,s){re.is.firefox===!0&&pe(e,!0);const g=Pe(n);t.event={x:g.left,y:g.top,time:Date.now(),mouse:s===!0,dir:!1}},move(n){if(t.event===void 0)return;if(t.event.dir!==!1){he(n);return}const s=Date.now()-t.event.time;if(s===0)return;const g=Pe(n),c=g.left-t.event.x,p=Math.abs(c),f=g.top-t.event.y,l=Math.abs(f);if(t.event.mouse!==!0){if(p<t.sensitivity[1]&&l<t.sensitivity[1]){t.end(n);return}}else if(p<t.sensitivity[2]&&l<t.sensitivity[2])return;const v=p/s,y=l/s;t.direction.vertical===!0&&p<l&&p<100&&y>t.sensitivity[0]&&(t.event.dir=f<0?"up":"down"),t.direction.horizontal===!0&&p>l&&l<100&&v>t.sensitivity[0]&&(t.event.dir=c<0?"left":"right"),t.direction.up===!0&&p<l&&f<0&&p<100&&y>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&p<l&&f>0&&p<100&&y>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&p>l&&c<0&&l<100&&v>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&p>l&&c>0&&l<100&&v>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(he(n),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Le(),t.styleCleanup=C=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const k=()=>{document.body.classList.remove("no-pointer-events--children")};C===!0?setTimeout(k,50):k()}),t.handler({evt:n,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:s,distance:{x:p,y:l}})):t.end(n)},end(n){t.event!==void 0&&(be(t,"temp"),re.is.firefox===!0&&pe(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),n!==void 0&&t.event.dir!==!1&&he(n),t.event=void 0)}};if(e.__qtouchswipe=t,u.mouse===!0){const n=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";ue(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}re.has.touch===!0&&ue(t,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,m){const h=e.__qtouchswipe;h!==void 0&&(m.oldValue!==m.value&&(typeof m.value!="function"&&h.end(),h.handler=m.value),h.direction=Se(m.modifiers))},beforeUnmount(e){const m=e.__qtouchswipe;m!==void 0&&(be(m,"main"),be(m,"temp"),re.is.firefox===!0&&pe(e,!1),m.styleCleanup!==void 0&&m.styleCleanup(),delete e.__qtouchswipe)}});const pt={name:{required:!0},disable:Boolean},je={setup(e,{slots:m}){return()=>b("div",{class:"q-panel scroll",role:"tabpanel"},me(m.default))}},ht={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},bt=["update:modelValue","beforeTransition","transition"];function gt(){const{props:e,emit:m,proxy:h}=Ne(),{getCacheWithFn:u}=ut();let a,t;const n=ae(null),s=ae(null);function g(o){const i=e.vertical===!0?"up":"left";E((h.$q.lang.rtl===!0?-1:1)*(o.direction===i?1:-1))}const c=I(()=>[[vt,g,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),p=I(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),f=I(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),l=I(()=>`--q-transition-duration: ${e.transitionDuration}ms`),v=I(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),y=I(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),C=I(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);ie(()=>e.modelValue,(o,i)=>{const _=P(o)===!0?D(o):-1;t!==!0&&O(_===-1?0:_<D(i)?-1:1),n.value!==_&&(n.value=_,m("beforeTransition",o,i),Be(()=>{m("transition",o,i)}))});function k(){E(1)}function B(){E(-1)}function W(o){m("update:modelValue",o)}function P(o){return o!=null&&o!==""}function D(o){return a.findIndex(i=>i.props.name===o&&i.props.disable!==""&&i.props.disable!==!0)}function $(){return a.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function O(o){const i=o!==0&&e.animated===!0&&n.value!==-1?"q-transition--"+(o===-1?p.value:f.value):null;s.value!==i&&(s.value=i)}function E(o,i=n.value){let _=i+o;for(;_>-1&&_<a.length;){const A=a[_];if(A!==void 0&&A.props.disable!==""&&A.props.disable!==!0){O(o),t=!0,m("update:modelValue",A.props.name),setTimeout(()=>{t=!1});return}_+=o}e.infinite===!0&&a.length>0&&i!==-1&&i!==a.length&&E(o,o===-1?a.length:-1)}function w(){const o=D(e.modelValue);return n.value!==o&&(n.value=o),!0}function L(){const o=P(e.modelValue)===!0&&w()&&a[n.value];return e.keepAlive===!0?[b(Ve,y.value,[b(C.value===!0?u(v.value,()=>({...je,name:v.value})):je,{key:v.value,style:l.value},()=>o)])]:[b("div",{class:"q-panel scroll",style:l.value,key:v.value,role:"tabpanel"},[o])]}function S(){if(a.length!==0)return e.animated===!0?[b(We,{name:s.value},L)]:L()}function d(o){return a=Qe(me(o.default,[])).filter(i=>i.props!==null&&i.props.slot===void 0&&P(i.props.name)===!0),a.length}function r(){return a}return Object.assign(h,{next:k,previous:B,goTo:W}),{panelIndex:n,panelDirectives:c,updatePanelsList:d,updatePanelIndex:w,getPanelContent:S,getEnabledPanels:$,getPanels:r,isValidPanelName:P,keepAliveProps:y,needsUniqueKeepAliveWrapper:C,goToPanelByOffset:E,goToPanel:W,nextPanel:k,previousPanel:B}}var _e=se({name:"QCarouselSlide",props:{...pt,imgSrc:String},setup(e,{slots:m}){const h=I(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>b("div",{class:"q-carousel__slide",style:h.value},me(m.default))}});const yt=["top","right","bottom","left"],wt=["regular","flat","outline","push","unelevated"];var _t=se({name:"QCarousel",props:{...He,...ht,...at,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>wt.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>yt.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...ot,...bt],setup(e,{slots:m}){const{proxy:{$q:h}}=Ne(),u=Fe(e,h);let a=null,t;const{updatePanelsList:n,getPanelContent:s,panelDirectives:g,goToPanel:c,previousPanel:p,nextPanel:f,getEnabledPanels:l,panelIndex:v}=gt(),{inFullscreen:y}=rt(),C=I(()=>y.value!==!0&&e.height!==void 0?{height:e.height}:{}),k=I(()=>e.vertical===!0?"vertical":"horizontal"),B=I(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(y.value===!0?" fullscreen":"")+(u.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${k.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${$.value}`:"")),W=I(()=>{const S=[e.prevIcon||h.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||h.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&h.lang.rtl===!0?S.reverse():S}),P=I(()=>e.navigationIcon||h.iconSet.carousel.navigationIcon),D=I(()=>e.navigationActiveIcon||P.value),$=I(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),O=I(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));ie(()=>e.modelValue,()=>{e.autoplay&&E()}),ie(()=>e.autoplay,S=>{S?E():a!==null&&(clearTimeout(a),a=null)});function E(){const S=Ye(e.autoplay)===!0?Math.abs(e.autoplay):5e3;a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,S>=0?f():p()},S)}Te(()=>{e.autoplay&&E()}),Ae(()=>{a!==null&&clearTimeout(a)});function w(S,d){return b("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${S} q-carousel__navigation--${$.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[b("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},l().map(d))])}function L(){const S=[];if(e.navigation===!0){const d=m["navigation-icon"]!==void 0?m["navigation-icon"]:o=>b(ge,{key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`,...o.btnProps,onClick:o.onClick}),r=t-1;S.push(w("buttons",(o,i)=>{const _=o.props.name,A=v.value===i;return d({index:i,maxIndex:r,name:_,active:A,btnProps:{icon:A===!0?D.value:P.value,size:"sm",...O.value},onClick:()=>{c(_)}})}))}else if(e.thumbnails===!0){const d=e.controlColor!==void 0?` text-${e.controlColor}`:"";S.push(w("thumbnails",r=>{const o=r.props;return b("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+d,src:o.imgSrc||o["img-src"],onClick:()=>{c(o.name)}})}))}return e.arrows===!0&&v.value>=0&&((e.infinite===!0||v.value>0)&&S.push(b("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${k.value} absolute flex flex-center`},[b(ge,{icon:W.value[0],...O.value,onClick:p})])),(e.infinite===!0||v.value<t-1)&&S.push(b("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${k.value} absolute flex flex-center`},[b(ge,{icon:W.value[1],...O.value,onClick:f})]))),Ue(m.control,S)}return()=>(t=n(m),b("div",{class:B.value,style:C.value},[Re("div",{class:"q-carousel__slides-container"},s(),"sl-cont",e.swipeable,()=>g.value)].concat(L())))}}),xt="/quasar-vacation/assets/rest.24a0614d.jpg",kt="/quasar-vacation/assets/\u52DE\u4FDD.301fc404.jpg",Ct="/quasar-vacation/assets/\u52A0\u73ED\u8CBB.06b2a4e7.jpg",St="/quasar-vacation/assets/\u898F\u5B9A.b7f54676.jpg",qt="/quasar-vacation/assets/\u52DE\u4FDD.cbe5b736.png";const Pt=[b("g",{"stroke-width":"4","stroke-linecap":"round"},[b("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(180)"},[b("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"})]),b("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(210)"},[b("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0",repeatCount:"indefinite"})]),b("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(240)"},[b("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1",repeatCount:"indefinite"})]),b("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(270)"},[b("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15",repeatCount:"indefinite"})]),b("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(300)"},[b("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25",repeatCount:"indefinite"})]),b("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(330)"},[b("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35",repeatCount:"indefinite"})]),b("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(0)"},[b("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45",repeatCount:"indefinite"})]),b("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(30)"},[b("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55",repeatCount:"indefinite"})]),b("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(60)"},[b("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65",repeatCount:"indefinite"})]),b("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(90)"},[b("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7",repeatCount:"indefinite"})]),b("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(120)"},[b("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85",repeatCount:"indefinite"})]),b("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(150)"},[b("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"})])])];var Ot=se({name:"QSpinnerIos",props:Ke,setup(e){const{cSize:m,classes:h}=Xe(e);return()=>b("svg",{class:h.value,width:m.value,height:m.value,stroke:"currentColor",fill:"currentColor",viewBox:"0 0 64 64"},Pt)}}),Ee={exports:{}};(function(e,m){(function(h,u){e.exports=u()})(ct,function(){return function(h){function u(t){if(a[t])return a[t].exports;var n=a[t]={exports:{},id:t,loaded:!1};return h[t].call(n.exports,n,n.exports,u),n.loaded=!0,n.exports}var a={};return u.m=h,u.c=a,u.p="dist/",u(0)}([function(h,u,a){function t(i){return i&&i.__esModule?i:{default:i}}var n=Object.assign||function(i){for(var _=1;_<arguments.length;_++){var A=arguments[_];for(var K in A)Object.prototype.hasOwnProperty.call(A,K)&&(i[K]=A[K])}return i},s=a(1),g=(t(s),a(6)),c=t(g),p=a(7),f=t(p),l=a(8),v=t(l),y=a(9),C=t(y),k=a(10),B=t(k),W=a(11),P=t(W),D=a(14),$=t(D),O=[],E=!1,w={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},L=function(){var i=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(i&&(E=!0),E)return O=(0,P.default)(O,w),(0,B.default)(O,w.once),O},S=function(){O=(0,$.default)(),L()},d=function(){O.forEach(function(i,_){i.node.removeAttribute("data-aos"),i.node.removeAttribute("data-aos-easing"),i.node.removeAttribute("data-aos-duration"),i.node.removeAttribute("data-aos-delay")})},r=function(i){return i===!0||i==="mobile"&&C.default.mobile()||i==="phone"&&C.default.phone()||i==="tablet"&&C.default.tablet()||typeof i=="function"&&i()===!0},o=function(i){w=n(w,i),O=(0,$.default)();var _=document.all&&!window.atob;return r(w.disable)||_?d():(w.disableMutationObserver||v.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),w.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",w.easing),document.querySelector("body").setAttribute("data-aos-duration",w.duration),document.querySelector("body").setAttribute("data-aos-delay",w.delay),w.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?L(!0):w.startEvent==="load"?window.addEventListener(w.startEvent,function(){L(!0)}):document.addEventListener(w.startEvent,function(){L(!0)}),window.addEventListener("resize",(0,f.default)(L,w.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(L,w.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,B.default)(O,w.once)},w.throttleDelay)),w.disableMutationObserver||v.default.ready("[data-aos]",S),O)};h.exports={init:o,refresh:L,refreshHard:S}},function(h,u){},,,,,function(h,u){(function(a){function t(r,o,i){function _(x){var Q=H,J=R;return H=R=void 0,X=x,z=r.apply(J,Q)}function A(x){return X=x,N=setTimeout(ne,o),G?_(x):z}function K(x){var Q=x-V,J=x-X,xe=o-Q;return U?S(xe,Y-J):xe}function te(x){var Q=x-V,J=x-X;return V===void 0||Q>=o||Q<0||U&&J>=Y}function ne(){var x=d();return te(x)?le(x):void(N=setTimeout(ne,K(x)))}function le(x){return N=void 0,j&&H?_(x):(H=R=void 0,z)}function ve(){N!==void 0&&clearTimeout(N),X=0,H=V=R=N=void 0}function oe(){return N===void 0?z:le(d())}function F(){var x=d(),Q=te(x);if(H=arguments,R=this,V=x,Q){if(N===void 0)return A(V);if(U)return N=setTimeout(ne,o),_(V)}return N===void 0&&(N=setTimeout(ne,o)),z}var H,R,Y,z,N,V,X=0,G=!1,U=!1,j=!0;if(typeof r!="function")throw new TypeError(l);return o=p(o)||0,s(i)&&(G=!!i.leading,U="maxWait"in i,Y=U?L(p(i.maxWait)||0,o):Y,j="trailing"in i?!!i.trailing:j),F.cancel=ve,F.flush=oe,F}function n(r,o,i){var _=!0,A=!0;if(typeof r!="function")throw new TypeError(l);return s(i)&&(_="leading"in i?!!i.leading:_,A="trailing"in i?!!i.trailing:A),t(r,o,{leading:_,maxWait:o,trailing:A})}function s(r){var o=typeof r=="undefined"?"undefined":f(r);return!!r&&(o=="object"||o=="function")}function g(r){return!!r&&(typeof r=="undefined"?"undefined":f(r))=="object"}function c(r){return(typeof r=="undefined"?"undefined":f(r))=="symbol"||g(r)&&w.call(r)==y}function p(r){if(typeof r=="number")return r;if(c(r))return v;if(s(r)){var o=typeof r.valueOf=="function"?r.valueOf():r;r=s(o)?o+"":o}if(typeof r!="string")return r===0?r:+r;r=r.replace(C,"");var i=B.test(r);return i||W.test(r)?P(r.slice(2),i?2:8):k.test(r)?v:+r}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},l="Expected a function",v=NaN,y="[object Symbol]",C=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,W=/^0o[0-7]+$/i,P=parseInt,D=(typeof a=="undefined"?"undefined":f(a))=="object"&&a&&a.Object===Object&&a,$=(typeof self=="undefined"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,O=D||$||Function("return this")(),E=Object.prototype,w=E.toString,L=Math.max,S=Math.min,d=function(){return O.Date.now()};h.exports=n}).call(u,function(){return this}())},function(h,u){(function(a){function t(d,r,o){function i(j){var x=F,Q=H;return F=H=void 0,V=j,Y=d.apply(Q,x)}function _(j){return V=j,z=setTimeout(te,r),X?i(j):Y}function A(j){var x=j-N,Q=j-V,J=r-x;return G?L(J,R-Q):J}function K(j){var x=j-N,Q=j-V;return N===void 0||x>=r||x<0||G&&Q>=R}function te(){var j=S();return K(j)?ne(j):void(z=setTimeout(te,A(j)))}function ne(j){return z=void 0,U&&F?i(j):(F=H=void 0,Y)}function le(){z!==void 0&&clearTimeout(z),V=0,F=N=H=z=void 0}function ve(){return z===void 0?Y:ne(S())}function oe(){var j=S(),x=K(j);if(F=arguments,H=this,N=j,x){if(z===void 0)return _(N);if(G)return z=setTimeout(te,r),i(N)}return z===void 0&&(z=setTimeout(te,r)),Y}var F,H,R,Y,z,N,V=0,X=!1,G=!1,U=!0;if(typeof d!="function")throw new TypeError(f);return r=c(r)||0,n(o)&&(X=!!o.leading,G="maxWait"in o,R=G?w(c(o.maxWait)||0,r):R,U="trailing"in o?!!o.trailing:U),oe.cancel=le,oe.flush=ve,oe}function n(d){var r=typeof d=="undefined"?"undefined":p(d);return!!d&&(r=="object"||r=="function")}function s(d){return!!d&&(typeof d=="undefined"?"undefined":p(d))=="object"}function g(d){return(typeof d=="undefined"?"undefined":p(d))=="symbol"||s(d)&&E.call(d)==v}function c(d){if(typeof d=="number")return d;if(g(d))return l;if(n(d)){var r=typeof d.valueOf=="function"?d.valueOf():d;d=n(r)?r+"":r}if(typeof d!="string")return d===0?d:+d;d=d.replace(y,"");var o=k.test(d);return o||B.test(d)?W(d.slice(2),o?2:8):C.test(d)?l:+d}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},f="Expected a function",l=NaN,v="[object Symbol]",y=/^\s+|\s+$/g,C=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,B=/^0o[0-7]+$/i,W=parseInt,P=(typeof a=="undefined"?"undefined":p(a))=="object"&&a&&a.Object===Object&&a,D=(typeof self=="undefined"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,$=P||D||Function("return this")(),O=Object.prototype,E=O.toString,w=Math.max,L=Math.min,S=function(){return $.Date.now()};h.exports=t}).call(u,function(){return this}())},function(h,u){function a(p){var f=void 0,l=void 0;for(f=0;f<p.length;f+=1)if(l=p[f],l.dataset&&l.dataset.aos||l.children&&a(l.children))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function n(){return!!t()}function s(p,f){var l=window.document,v=t(),y=new v(g);c=f,y.observe(l.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function g(p){p&&p.forEach(function(f){var l=Array.prototype.slice.call(f.addedNodes),v=Array.prototype.slice.call(f.removedNodes),y=l.concat(v);if(a(y))return c()})}Object.defineProperty(u,"__esModule",{value:!0});var c=function(){};u.default={isSupported:n,ready:s}},function(h,u){function a(l,v){if(!(l instanceof v))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(u,"__esModule",{value:!0});var n=function(){function l(v,y){for(var C=0;C<y.length;C++){var k=y[C];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(v,k.key,k)}}return function(v,y,C){return y&&l(v.prototype,y),C&&l(v,C),v}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,g=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function l(){a(this,l)}return n(l,[{key:"phone",value:function(){var v=t();return!(!s.test(v)&&!g.test(v.substr(0,4)))}},{key:"mobile",value:function(){var v=t();return!(!c.test(v)&&!p.test(v.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),l}();u.default=new f},function(h,u){Object.defineProperty(u,"__esModule",{value:!0});var a=function(n,s,g){var c=n.node.getAttribute("data-aos-once");s>n.position?n.node.classList.add("aos-animate"):typeof c!="undefined"&&(c==="false"||!g&&c!=="true")&&n.node.classList.remove("aos-animate")},t=function(n,s){var g=window.pageYOffset,c=window.innerHeight;n.forEach(function(p,f){a(p,c+g,s)})};u.default=t},function(h,u,a){function t(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(u,"__esModule",{value:!0});var n=a(12),s=t(n),g=function(c,p){return c.forEach(function(f,l){f.node.classList.add("aos-init"),f.position=(0,s.default)(f.node,p.offset)}),c};u.default=g},function(h,u,a){function t(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(u,"__esModule",{value:!0});var n=a(13),s=t(n),g=function(c,p){var f=0,l=0,v=window.innerHeight,y={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(y.offset&&!isNaN(y.offset)&&(l=parseInt(y.offset)),y.anchor&&document.querySelectorAll(y.anchor)&&(c=document.querySelectorAll(y.anchor)[0]),f=(0,s.default)(c).top,y.anchorPlacement){case"top-bottom":break;case"center-bottom":f+=c.offsetHeight/2;break;case"bottom-bottom":f+=c.offsetHeight;break;case"top-center":f+=v/2;break;case"bottom-center":f+=v/2+c.offsetHeight;break;case"center-center":f+=v/2+c.offsetHeight/2;break;case"top-top":f+=v;break;case"bottom-top":f+=c.offsetHeight+v;break;case"center-top":f+=c.offsetHeight/2+v}return y.anchorPlacement||y.offset||isNaN(p)||(l=p),f+l};u.default=g},function(h,u){Object.defineProperty(u,"__esModule",{value:!0});var a=function(t){for(var n=0,s=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)n+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),s+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:s,left:n}};u.default=a},function(h,u){Object.defineProperty(u,"__esModule",{value:!0});var a=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(n){return{node:n}})};u.default=a}])})})(Ee);var jt=dt(Ee.exports);const Tt={class:"q-px-md q-pb-md"},At={class:"row"},Nt=T("div",{class:"text-h3 text-white text-center","data-aos":"fade-up","data-aos-duration":"3000","data-aos-anchor-placement":"top-center","data-aos-once":"false"},"Wish you a Happy Holiday\uFF01",-1),Et={class:"row belltin q-px-md"},Mt={style:{"flex-grow":"1"}},Dt={style:{"flex-grow":"1"},class:"video"},zt={id:"info",class:"row q-mb-md text-center justify-center items-center"},It={class:"col-md-3 col-xs-12"},$t={href:"https://ilabor.ntpc.gov.tw/page/reporting-on-implementation-of-unpaid-leave"},Lt=T("h4",{class:"shrink-text"},[ee("\u52DE\u4FDD\u3001\u5C31\u4FDD\u3001\u570B\u4FDD "),T("hr"),ee(" \u8A66\u7B97\u7CFB\u7D71")],-1),Bt={class:"col-md-3 col-xs-12"},Wt={href:"https://labweb.mol.gov.tw/monthly/index.html#disasterSet=false%2Cfalse%2Cfalse%2Cfalse%2Cfalse%2Cfalse%2Cfalse&holidaySet=false%2Cfalse%2Cfalse%2Cfalse%2Cfalse%2Cfalse%2Cfalse&holidayWorkhours=0&holidayWorkhours=0&holidayWorkhours=0&holidayWorkhours=0&holidayWorkhours=0&holidayWorkhours=0&holidayWorkhours=0&monthlyPay=36000&regularDayOffWorkReason=disaster&restDayOffWorkReason=restLaborAgree&specialDayOffWorkReason=specialLaborAgree&workhours=8%2C8%2C8%2C8%2C8%2C0%2C0"},Qt=T("h4",{class:"shrink-text"},[ee("\u52A0\u73ED\u8CBB "),T("hr"),ee(" \u8A66\u7B97\u7CFB\u7D71")],-1),Vt={class:"col-md-3 col-xs-12"},Ht={href:"https://www.mol.gov.tw/1607/28162/28166/28218/nodelist"},Ft=T("h4",{class:"shrink-text"},[ee("\u52DE\u4FDD\u5C40 "),T("hr"),ee(" \u4F11\u5047\u76F8\u95DC\u898F\u5B9A")],-1),Rt={class:"col-md-3 col-xs-12"},Yt={href:"https://ilabor.ntpc.gov.tw/page/reporting-on-implementation-of-unpaid-leave"},Ut=T("h4",{class:"shrink-text"},[ee("\u7279\u6B8A\u50B3\u67D3\u6027\u80BA\u708E "),T("hr"),ee(" \u5354\u52A9\u5C08\u5340")],-1),nn={__name:"IndexPage",setup(e){jt.init();const m=ae(1),h=Ge(),u=[{name:"content",align:"left",label:"\u5167\u5BB9",field:"content"},{name:"endDate",align:"center",label:"\u622A\u6B62\u65E5\u671F",field:"endDate"}],a=Je([]);return(async()=>{try{Oe.show({spinner:Ot,message:"\u60F3\u4F11\u5047\u55CE\uFF1F\u518D\u7B49\u7B49...",messageColor:"white"});const n=await nt.get("/bulletin");console.log(n);let s=0;for(s=0;s<n.data.result.length;s++)n.data.result[s].actions==="\u9032\u884C\u4E2D"&&a.push({startDate:n.data.result[s].startDate,endDate:n.data.result[s].endDate,title:n.data.result[s].title,content:n.data.result[s].content});Oe.hide()}catch(n){h.notify({color:"red-4",textColor:"white",icon:"cloud_off",message:n.message})}})(),(n,s)=>{const g=Ze("q-row");return et(),tt("section",null,[T("div",Tt,[T("div",At,[q(ft,{id:"homeparallax",src:xt},{default:M(()=>[Nt]),_:1})])]),T("div",Et,[T("div",Mt,[q(it,{class:"bulletintable",title:"\u6700\u65B0\u6D88\u606F",rows:a,columns:u,"row-key":"name",style:{height:"100%"}},null,8,["rows"])]),T("div",Dt,[q(g,{class:"q-mt-xs",style:{height:"100%"}},{default:M(()=>[q(_t,{animated:"",modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=c=>m.value=c),arrows:"",navigation:"",infinite:"",style:{height:"100%"}},{default:M(()=>[q(_e,{name:1},{default:M(()=>[q(we,{class:"absolute-full",src:"https://www.youtube.com/embed/8kX8zC3gklU"})]),_:1}),q(_e,{name:2},{default:M(()=>[q(we,{class:"absolute-full",src:"https://www.youtube.com/embed/lxlTjAAQbnA"})]),_:1}),q(_e,{name:3},{default:M(()=>[q(we,{class:"absolute-full",src:"https://www.youtube.com/embed/onfyGmu2VSM"})]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),T("div",zt,[T("div",It,[q(de,{class:"my-card",flat:"",bordered:""},{default:M(()=>[q(Z,{"data-aos":"flip-left","data-aos-duration":"1000","data-aos-anchor-placement":"center-bottom","data-aos-once":"false"},{default:M(()=>[T("a",$t,[q(ce,{ratio:"1",class:"col-5",src:kt})]),q(Z,null,{default:M(()=>[Lt]),_:1})]),_:1})]),_:1})]),T("div",Bt,[q(de,{class:"my-card",flat:"",bordered:""},{default:M(()=>[q(Z,{"data-aos":"flip-left","data-aos-duration":"1000","data-aos-anchor-placement":"center-bottom"},{default:M(()=>[T("a",Wt,[q(ce,{ratio:"1",class:"col-5",src:Ct})]),q(Z,null,{default:M(()=>[Qt]),_:1})]),_:1})]),_:1})]),T("div",Vt,[q(de,{class:"my-card",flat:"",bordered:""},{default:M(()=>[q(Z,{"data-aos":"flip-left","data-aos-duration":"1000","data-aos-anchor-placement":"center-bottom"},{default:M(()=>[T("a",Ht,[q(ce,{ratio:"1",class:"col-5",src:St})]),q(Z,null,{default:M(()=>[Ft]),_:1})]),_:1})]),_:1})]),T("div",Rt,[q(de,{class:"my-card",flat:"",bordered:""},{default:M(()=>[q(Z,{"data-aos":"flip-left","data-aos-duration":"1000","data-aos-anchor-placement":"center-bottom"},{default:M(()=>[T("a",Yt,[q(ce,{ratio:"1",class:"col-5",src:qt})]),q(Z,null,{default:M(()=>[Ut]),_:1})]),_:1})]),_:1})])])])}}};export{nn as default};
