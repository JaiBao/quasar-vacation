import{r as d,U as i,W as p,X as v,d as s,Z as l,aN as f,Y as c,a2 as g,aO as _}from"./index.ceb3bcee.js";import{Q as b}from"./QInput.34e81aee.js";import{Q}from"./QImg.fd4b9105.js";import{Q as V}from"./QTd.a5a462e0.js";import{Q as y}from"./QTable.ad8b3c4f.js";import{Q as h}from"./QDate.3b0a3b32.js";import{Q as D}from"./QSplitter.24d92762.js";import"./use-key-composition.2f75cb93.js";import"./use-cache.b0833c75.js";const w={class:"container"},U={class:"table-container"},x={class:"q-ma-xl seeit"},M={__name:"UserPage",setup(T){const n=d(50),r=i([]),o=d(""),m=i([]),u=[{name:"image",label:"\u982D\u8CBC",align:"center"},{name:"\u59D3\u540D",field:"name",label:"\u59D3\u540D",align:"center"},{name:"\u5047\u5225",field:"leaveType",label:"\u5047\u5225"},{name:"\u8D77\u59CB\u65E5\u671F",field:"startDate",label:"\u8D77\u59CB\u65E5\u671F"},{name:"\u7D50\u675F\u65E5\u671F",field:"endDate",label:"\u7D50\u675F\u65E5\u671F"}];return(async()=>{try{const a=await f.get("users/allvacation");console.log(a.data);let e=0;for(e=0;e<a.data.message.length;e++)r.push(a.data.message[e].startDate),m.push({name:a.data.message[e].name,leaveType:a.data.message[e].leaveType,startDate:a.data.message[e].startDate,endDate:a.data.message[e].endDate});console.log(r[0])}catch(a){console.log(a)}})(),(a,e)=>(p(),v("div",w,[s(D,{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=t=>n.value=t),class:"splitter"},{after:l(()=>[c("div",U,[s(y,{class:"table",title:"\u8ACB\u5047\u4EBA\u54E1",rows:m,columns:u,"row-key":"startDate",filter:o.value},{"top-right":l(()=>[s(b,{borderless:"",dense:"",debounce:"300",modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t),placeholder:"Search"},{append:l(()=>[s(g,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-image":l(t=>[s(V,{props:t},{default:l(()=>[s(_,null,{default:l(()=>[s(Q,{src:`https://source.boringavatars.com/beam/${t.row.name}?colors=058789,503d2e,d54b1a,e3a72f,f0ecc9`},null,8,["src"])]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["rows","filter"])])]),before:l(()=>[c("div",x,[s(h,{id:"userdate",modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value=t),events:r,"event-color":"red","today-btn":""},null,8,["modelValue","events"])])]),_:1},8,["modelValue"])]))}};export{M as default};
