(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();$(".flower-swipe").slick({prevArrow:'<button type="button" class="my-slick-prev">&xlarr;</button>',nextArrow:'<button type="button" class="my-slick-next">&xrarr;</button>',slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1280,settings:{slidesToShow:2}}]});(()=>{const c=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),c.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",n),r.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(c.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();window.onscroll=function(){window.screen.width>=768?scrollY<=70?document.querySelector(".header-js").classList.remove("header-bg"):document.querySelector(".header-js").classList.add("header-bg"):scrollY<=120?document.querySelector(".header-js").classList.remove("header-bg"):document.querySelector(".header-js").classList.add("header-bg")};let l=document.querySelector(".btn_scroll");function i(){window.pageYOffset>200?l.style.opacity="1":l.style.opacity="0"}window.onscroll=i;(function(c){typeof c.matches!="function"&&(c.matches=c.msMatchesSelector||c.mozMatchesSelector||c.webkitMatchesSelector||function(o){for(var r=this,n=(r.document||r.ownerDocument).querySelectorAll(o),e=0;n[e]&&n[e]!==r;)++e;return Boolean(n[e])}),typeof c.closest!="function"&&(c.closest=function(o){for(var r=this;r&&r.nodeType===1;){if(r.matches(o))return r;r=r.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var c=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),r=document.querySelectorAll(".js-modal-close");c.forEach(function(n){n.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),s=document.querySelector('.modal[data-modal="'+t+'"]');s.classList.add("active"),o.classList.add("active")})}),r.forEach(function(n){n.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),o.classList.remove("active")})}),document.body.addEventListener("keyup",function(n){var e=n.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});
