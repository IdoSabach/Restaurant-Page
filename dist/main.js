(()=>{"use strict";const e=function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("div");t.classList.add("text-of-head-main"),t.textContent="The largest hamburger chain in the world!",e.appendChild(t);const n=document.createElement("img");n.classList.add("ido-img"),n.src="./images/ido-food.jpeg",e.appendChild(n);const d=document.createElement("div");return d.classList.add("footer-text"),d.textContent="Order online or visit us!",e.appendChild(d),e},t=document.createElement("div");t.classList.add("main");const n=document.getElementById("content");n.appendChild(function(){const e=document.createElement("header");return e.classList.add("head"),e.textContent="Welcome to DDD",e.style.width="100%",e}()),n.appendChild(function(){const n=document.createElement("div");n.classList.add("sub-head");const d=document.createElement("button");d.classList.add("button-nav"),d.textContent="Home",n.appendChild(d),d.addEventListener("click",(function(){t.innerHTML="",t.appendChild(e())}));const a=document.createElement("button");a.classList.add("button-nav"),a.textContent="Menu",n.appendChild(a),a.addEventListener("click",(function(){t.innerHTML="",t.appendChild(function(){const e=document.createElement("div");e.classList.add("menu-grid");for(let t=0;t<9;t++){const t=document.createElement("div");t.classList.add("box"),e.appendChild(t);const n=document.createElement("div");n.classList.add("img-hmburger"),t.appendChild(n);const d=document.createElement("img");d.classList.add("image-size"),d.appendChild(n),d.src="./images/icons8-hamburger-96.png";const a=document.createElement("div");t.appendChild(a),a.classList.add("text-for-food"),a.textContent="A kind of hamburger"}return e}())}));const c=document.createElement("button");return c.classList.add("button-nav"),c.textContent="Contact",n.appendChild(c),c.addEventListener("click",(function(){t.innerHTML="",t.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("div");e.classList.add("phone"),e.appendChild(t),t.textContent="Phone Number : 123-456-789";const n=document.createElement("div");e.classList.add("address"),e.appendChild(n),n.textContent="Address : The nation of Israel is alive and well!";const d=document.createElement("img");return e.classList.add("address-image"),e.appendChild(d),d.src="./images/mapForWeb.png",d.style.width="850px",e}())})),n}()),t.appendChild(e()),n.append(t),n.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer"),e.textContent="Build by Ido Sabach";const t=document.createElement("a");t.href="https://github.com/IdoSabach",e.appendChild(t);const n=document.createElement("img");return n.classList.add("git-icon"),n.src="https://img.icons8.com/ios/50/000000/github--v1.png",n.style.width="15px",n.style.height="15px",t.appendChild(n),e}())})();