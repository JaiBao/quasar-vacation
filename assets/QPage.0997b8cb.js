import{j as g,i as r,aZ as t,c as s,h,l as p,a_ as d,a$ as y,g as f}from"./index.416bac46.js";var C=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:i}){const{proxy:{$q:o}}=f(),e=r(d,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(r(y,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const c=s(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return n.styleFn(a,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":o.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":o.screen.height-a+"px"}}),u=s(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:c.value},p(i.default))}});export{C as Q};
