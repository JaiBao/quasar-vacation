import{j as A,J as D,L as j,r as v,c as i,w as C,h as o,l as h,M as B,O,aS as I,G as L,g as Q}from"./index.ceb3bcee.js";var $=A({name:"QSplitter",props:{...D,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(e,{slots:u,emit:n}){const{proxy:{$q:b}}=Q(),x=j(e,b),s=v(null),d={before:v(null),after:v(null)},M=i(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(x.value===!0?" q-splitter--dark":"")),c=i(()=>e.horizontal===!0?"height":"width"),y=i(()=>e.reverse!==!0?"before":"after"),a=i(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function _(t){return(e.unit==="%"?t:Math.round(t))+e.unit}const q=i(()=>({[y.value]:{[c.value]:_(e.modelValue)}}));let g,f,S,V,l;function k(t){if(t.isFirst===!0){const m=s.value.getBoundingClientRect()[c.value];g=e.horizontal===!0?"up":"left",f=e.unit==="%"?100:m,S=Math.min(f,a.value[1],Math.max(a.value[0],e.modelValue)),V=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:b.lang.rtl===!0?-1:1)*(e.unit==="%"?m===0?0:100/m:1),s.value.classList.add("q-splitter--active");return}if(t.isFinal===!0){l!==e.modelValue&&n("update:modelValue",l),s.value.classList.remove("q-splitter--active");return}const r=S+V*(t.direction===g?-1:1)*t.distance[e.horizontal===!0?"y":"x"];l=Math.min(f,a.value[1],Math.max(a.value[0],r)),d[y.value].value.style[c.value]=_(l),e.emitImmediately===!0&&e.modelValue!==l&&n("update:modelValue",l)}const w=i(()=>[[I,k,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function z(t,r){t<r[0]?n("update:modelValue",r[0]):t>r[1]&&n("update:modelValue",r[1])}return C(()=>e.modelValue,t=>{z(t,a.value)}),C(()=>e.limits,()=>{L(()=>{z(e.modelValue,a.value)})}),()=>{const t=[o("div",{ref:d.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:q.value.before},h(u.before)),o("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[B("div",{class:"q-splitter__separator-area absolute-full"},h(u.separator),"sep",e.disable!==!0,()=>w.value)]),o("div",{ref:d.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:q.value.after},h(u.after))];return o("div",{class:M.value,ref:s},O(u.default,t))}}});export{$ as Q};
