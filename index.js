import{a as m,S as y,i as c}from"./assets/vendor-BK_rxH-O.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f="23833623-5e498f716d92b70c670ceee0e",g="https://pixabay.com/api/";async function h(r){const o={key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(g,{params:o})).data}const d=document.querySelector(".gallery");let b=new y(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const o=r.map(({webformatURL:a,largeImageURL:i,tags:e,likes:t,views:s,comments:u,downloads:p})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${a}" alt="${e}" class="gallery-image" />
          <div class="image-info">
            <p><b>Likes:</b> ${t}</p>
            <p><b>Views:</b> ${s}</p>
            <p><b>Comments:</b> ${u}</p>
            <p><b>Downloads:</b> ${p}</p>
          </div>
        </a>
      </li>
    `).join("");d.insertAdjacentHTML("beforeend",o),b.refresh()}function S(){d.innerHTML=""}function w(){const r=document.querySelector(".loader");r.style.display="block"}function x(){const r=document.querySelector(".loader");r.style.display="none"}const l=document.querySelector(".form"),n=document.createElement("p");n.className="loading-text";n.style.display="none";l.after(n);l.addEventListener("submit",q);async function q(r){r.preventDefault();const o=r.target.elements["search-text"].value.trim();if(!o){c.warning({title:"Warning",message:"Please enter a search term",position:"topRight"});return}try{w(),n.textContent="Loading images, please wait...",n.style.display="block",S();const a=await h(o);if(a.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(a.hits)}catch(a){c.error({title:"Error",message:"Failed to fetch images. Check your connection and try again.",position:"topRight"}),console.error("Fetch error:",a)}finally{x(),n.style.display="none",l.reset()}}
//# sourceMappingURL=index.js.map
