import{Q as i}from"./QInput.10140e3a.js";import{aK as g,S as f,aL as _,U as y,r as h,W as w,X as b,Y as n,d as l,Z as x,Q as r}from"./index.769d91c3.js";import{Q as V}from"./QForm.39e6c514.js";import"./use-key-composition.4cfb81be.js";const Q={id:"sm",class:"row"},v={class:"col-xs-12 col-md-6 text-center",id:"login"},L=n("h5",null,"\u767B\u5165",-1),z={__name:"LoginPage",setup(S){const t=g(),c=f(),s=_(),e=y({account:"",password:""});s.role===1||s.isAdmin===!0?t.push("/admin"):s.isLogin===!0&&s.role===0?t.push("/user"):t.push("/login");const d=h(!1),u=async()=>{await s.login(e)},m=async()=>{e.account&&e.password!==null?(await u(),s.role===1||s.isAdmin===!0?t.push("/admin"):s.isLogin===!0&&s.role===0?t.push("/user"):t.push("/login")):c.notify({color:"red-5",textColor:"white",icon:"warning",message:"\u8F38\u5165\u932F\u8AA4"})};function p(){e.name="",e.account="",e.password="",e.phone="",d.value=!1}return(B,a)=>(w(),b("div",Q,[n("div",v,[L,l(V,{onSubmit:m,onReset:p,class:"q-gutter-md"},{default:x(()=>[l(i,{outlined:"",type:"text",modelValue:e.account,"onUpdate:modelValue":a[0]||(a[0]=o=>e.account=o),label:"\u5E33\u865F",hint:"\u8ACB\u8F38\u5165\u5E33\u865F","lazy-rules":"",rules:[o=>o&&o.length>=4||"\u6700\u5C114\u4F4D\u6578\u4EE5\u4E0A"]},null,8,["modelValue","rules"]),l(i,{outlined:"",type:"password",modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=o=>e.password=o),label:"\u5BC6\u78BC",hint:"\u8ACB\u8F38\u5165\u5BC6\u78BC","lazy-rules":"",rules:[o=>o&&o.length>=4||"\u6700\u5C114\u4F4D\u6578\u4EE5\u4E0A"]},null,8,["modelValue","rules"]),n("div",null,[l(r,{label:"\u6E05\u9664",type:"reset",color:"primary",flat:"",class:"q-ml-sm"}),l(r,{onSubmit:u,label:"\u9001\u51FA",type:"submit",color:"primary"})])]),_:1}),l(r,{outline:"",class:"register1",label:"\u672A\u8A3B\u518A\u5E33\u865F",type:"button",color:"primary",to:"/register"})])]))}};export{z as default};
