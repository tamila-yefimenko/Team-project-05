(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("[data-menu-open]"),r=document.querySelector("[data-menu-close]"),n=document.querySelector("[data-menu]"),s=()=>{n.classList.add("is-open")},e=()=>{n.classList.remove("is-open")};o.addEventListener("click",s),r.addEventListener("click",e),document.addEventListener("click",t=>{n.classList.contains("is-open")&&!n.contains(t.target)&&!o.contains(t.target)&&e()})});const i=document.querySelector(".catalog-btn"),l=document.querySelectorAll(".catalog-mobile");i.addEventListener("click",()=>{l.forEach(o=>{o.style.display="block",o.classList.remove("catalog-mobile"),setTimeout(()=>{o.style.opacity="1",o.style.transform="translateY(0)"},10)}),i.style.display="none"});
//# sourceMappingURL=index.js.map
