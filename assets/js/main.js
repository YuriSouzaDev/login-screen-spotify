(()=>{var e=document.querySelectorAll("[data-input]"),t=document.querySelectorAll("[data-label]");e.forEach((function(e,a){e.addEventListener("focus",(function(){t[a].classList.add("focus")})),e.addEventListener("blur",(function(){""===e.value.trim()&&t[a].classList.remove("focus")}))}))})();