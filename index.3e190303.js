var e=new Promise(function(e,t){var n=!1,o=setTimeout(function(){n||t(Error("First promise was rejected"))},3e3);document.addEventListener("click",function(t){0!==t.button||n||(clearTimeout(o),n=!0,e("First promise was resolved"))})}),t=new Promise(function(e){var t=function(n){(0===n.button||2===n.button)&&(n.preventDefault(),e("Second promise was resolved"),document.removeEventListener("click",t),document.removeEventListener("contextmenu",t))};document.addEventListener("click",t),document.addEventListener("contextmenu",t)}),n=!1,o=!1,r=new Promise(function(e){document.addEventListener("click",function(t){0===t.button&&(n=!0,o&&e("Third promise was resolved"))}),document.addEventListener("contextmenu",function(t){t.preventDefault(),o=!0,n&&e("Third promise was resolved")})});function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");n.setAttribute("data-qa","notification"),n.classList.add(t?"error":"success"),n.textContent=e,document.body.appendChild(n)}e.then(function(e){return i(e)}).catch(function(e){return i(e,!0)}),t.then(function(e){return i(e)}),r.then(function(e){return i(e)}),document.addEventListener("contextmenu",function(e){return e.preventDefault()});
//# sourceMappingURL=index.3e190303.js.map
