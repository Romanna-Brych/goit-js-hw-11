import{a as p,S as g,i as a}from"./assets/vendor-DzBlEn4a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="/goit-js-hw-11/assets/sprite-BJL0HFtM.svg",y="52315817-6546dbd007993710b423406a2";function L(n){return p.get("https://pixabay.com/api/",{params:{key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const v=new g(".gallery a"),d=document.querySelector(".loader");function b(n,s){const o=[...s].map(({webformatURL:t,largeImageURL:e,tags:r,likes:i,views:m,comments:f,downloads:h})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${e}"><img class="gallery-image" src="${t}" alt="${r}" /></a>
    <ul class="content-list">
    <li class="content-item">
    <h3 class="content-header">Likes</h3>
    <p class="content-value">${i}</p> 
    </li>
    <li class="content-item">
    <h3 class="content-header">Views</h3>
    <p class="content-value">${m}</p>
    </li>
    <li class="content-item">
    <h3 class="content-header">Comments</h3>
    <p class="content-value">${f}</p>
    </li>
    <li class="content-item">
    <h3 class="content-header">Downloads</h3>
    <p class="content-value">${h}</p>
    </li>
    </ul>
    </li>
`).join("");n.insertAdjacentHTML("beforeend",o),v.refresh()}function E(n){n.innerHTML=""}function S(){d.classList.remove("is-hidden")}function T(){d.classList.add("is-hidden")}const q=document.querySelector(".form"),$=document.querySelector("input"),c=document.querySelector(".gallery");q.addEventListener("submit",z);function z(n){n.preventDefault(),E(c);const s=$.value.trim();if(!s){const o={...l};o.message="Please enter your search query",a.error(o);return}S(),c.style.opacity="0",L(s).then(o=>{const t=o.hits;if(t.length===0){a.error(l);return}else b(c,t),c.style.opacity="1"}).catch(o=>{const t={...l};t.message=o.message,a.error(t)}).finally(()=>{T(),n.target.reset()})}const l={message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:" #ef4040",titleColor:"#fff",messageColor:"#fff",icon:" ",close:!1,maxWidth:435,class:"custom-toast",onOpening:function(n,s){const o=s.querySelector(".iziToast-icon");o&&(o.innerHTML=`
    <svg class="icon-custom">
      <use href="${u}#icon-bi_x-octagon"></use>
    </svg>`);const t=document.createElement("button");t.classList.add("iziToast-close-custom"),t.innerHTML=`
    <svg class="icon-custom-close">
      <use href="${u}#icon-Vector-3"></use>
    </svg>`,t.addEventListener("click",()=>{a.hide({},s)}),s.appendChild(t)}};
//# sourceMappingURL=index.js.map
