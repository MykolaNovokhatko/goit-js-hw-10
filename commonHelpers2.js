import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-77e16229.js";const n=document.querySelector(".form");function o(e,s){return new Promise((i,t)=>{setTimeout(()=>{s==="fulfilled"?i(e):t(e)},e)})}n.addEventListener("submit",function(e){e.preventDefault();const s=parseInt(this.elements.delay.value),i=this.elements.state.value;o(s,i).then(t=>{r.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{r.error({title:"Error",message:`❌ Rejected promise in ${t}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
