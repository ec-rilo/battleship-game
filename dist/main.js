(()=>{"use strict";function t(t){for(var e=0;e<10;++e){var r=document.createElement("div");r.classList.add("gb-row"),r.classList.add("gb-row-".concat(e));for(var n=0;n<10;++n){var a=document.createElement("div");a.classList.add("gb-square"),a.classList.add("gb-square-".concat(n)),r.appendChild(a)}t.appendChild(r)}}function e(t){var e=document.createElement("div");e.classList.add("win-popup");var r=document.createElement("p");r.innerHTML=t?"You Win!":"You Lose!",e.appendChild(r);var n=document.createElement("div");n.classList.add("replay-btn");var a=document.createElement("p");return a.innerHTML="Play again",n.appendChild(a),e.appendChild(n),e}function r(){var t=document.createElement("div");return t.classList.add("black-bg"),t}const n=function(){for(var t=[],e=0;e<10;++e){t.push([]);for(var r=0;r<10;++r)t[e][r]={populated:!1,hit:!1,ship:void 0}}var n=[],a=function(t){return!0===t.isSunk()};return{placeShip:function(e){for(var r=!1,a=0;a<e.length;++a)!1===t[e[a].x][e[a].y].populated&&(r=!0);if(!0===r){n.push(function(t){for(var e=[],r=0;r<t.length;++r)e.push(!1);var n=function(t){return!0===t};return{hit:function(r){for(var n=0;n<t.length;++n)t[n].x===r.x&&t[n].y===r.y&&(e[n]=!0)},isSunk:function(){return!!e.every(n)}}}(e));for(var o=0;o<e.length;++o)t[e[o].x][e[o].y].populated=!0,t[e[o].x][e[o].y].ship=n.length-1}},receiveAttack:function(e){!0===t[e.x][e.y].populated&&!1===t[e.x][e.y].hit?(t[e.x][e.y].hit=!0,n[t[e.x][e.y].ship].hit(e)):!1===t[e.x][e.y].populated&&!1===t[e.x][e.y].hit&&(t[e.x][e.y].hit=!0)},allSunk:function(){return!0===n.every(a)},getBoard:function(){return t},resetBoard:function(){t=[];for(var e=0;e<10;++e){t.push([]);for(var r=0;r<10;++r)t[e][r]={populated:!1,hit:!1,ship:void 0}}}}};function a(t){return Math.floor(Math.random()*t)}function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=[[{},{},{},{},{}],[{},{},{},{}],[{},{},{}],[{},{},{}],[{},{}]];const s=function(){var t=function(){var t=document.createElement("div");return t.classList.add("ship-placement-popup-container"),t}(),e=function(){var t=document.createElement("div");t.classList.add("popup-text-container");var e=document.createElement("p");e.innerHTML="Welcome to BATTLESHIP!",t.appendChild(e);var r=document.createElement("p");return r.innerHTML="Place your <u>Carrier</u>",t.appendChild(r),t}(),r=function(){var t=document.createElement("div");t.classList.add("rotate-ship-btn-container");var e=document.createElement("div");e.classList.add("rotate-x-btn"),e.classList.add("rotate-btn"),e.classList.add("rotate-btn-active"),e.innerHTML="Rotate - X",t.appendChild(e);var r=document.createElement("div");return r.classList.add("rotate-y-btn"),r.classList.add("rotate-btn"),r.innerHTML="Rotate - Y",t.appendChild(r),t}(),n=function(){var t=document.createElement("div");t.classList.add("popup-gb-container");var e=document.createElement("div");e.classList.add("popup-gb"),e.classList.add("gameboard-interface"),t.appendChild(e);for(var r=0;r<10;++r){var n=document.createElement("div");n.classList.add("gb-row"),n.classList.add("gb-popup-start-row-".concat(r));for(var a=0;a<10;++a){var o=document.createElement("div");o.classList.add("gb-square"),o.classList.add("gb-popup-start-square-".concat(a)),n.appendChild(o)}e.appendChild(n)}return t}();return[e,r,n].forEach((function(e){return t.appendChild(e)})),function(t,e){var r=0,n=e.firstChild,a=e.firstChild.nextSibling;n.addEventListener("click",(function(){n.classList.add("rotate-btn-active"),a.classList.contains("rotate-btn-active")&&a.classList.remove("rotate-btn-active")})),a.addEventListener("click",(function(){a.classList.add("rotate-btn-active"),n.classList.contains("rotate-btn-active")&&n.classList.remove("rotate-btn-active")}));var i=o(t.children),s=[];i.forEach((function(t){return s.push(o(t.children))})),s.forEach((function(t){return function(t,e,i){t.forEach((function(t){var s=function(t){for(var e=t,n=[],a=0;a<c[r].length;++a)null!==e&&(n.push(e),e=e.nextSibling);return n},l=function(t,n,a){for(var i=t,s=[],l=n+1,d=0;d<c[r].length;++d)l<10&&(s.push(i),i=o(e[l].children)[a],l+=1);return s},d=function(t){return t.classList.contains("popup-square-active")},u=function(t,e,r){return!!(n.classList.contains("rotate-btn-active")&&t+e>10||n.classList.contains("rotate-btn-active")&&r.some(d))},p=function(t,e,r){return!!(a.classList.contains("rotate-btn-active")&&t+e>10||a.classList.contains("rotate-btn-active")&&r.some(d))};t.addEventListener("mouseover",(function(){var e=c[r].length,o=document.createElement("div");o.classList.add("floating-ship-hover");var i=t.parentElement,d=parseInt(i.className.replace(/^\D+/g,""),10),f=parseInt(t.className.replace(/^\D+/g,""),10);n.classList.contains("rotate-btn-active")?(o.style.width="calc(".concat(e,"00% + ").concat(2*e,"px)"),o.style.height="100%"):a.classList.contains("rotate-btn-active")&&(o.style.height="calc(".concat(e,"00% + ").concat(2*e,"px)"),o.style.width="100%");var v=s(t),m=l(t,d,f);(u(f,e,v)||p(d,e,m))&&o.classList.add("square-error"),t.appendChild(o)})),t.addEventListener("mouseout",(function(){t.firstChild&&t.firstChild.remove()})),t.addEventListener("click",(function(){var e=c[r].length,o=t.parentElement,d=parseInt(o.className.replace(/^\D+/g,""),10),f=parseInt(t.className.replace(/^\D+/g,""),10),v=s(t),m=l(t,d,f);if(u(f,e,v)||p(d,e,m))console.log("Can't do that!");else{if(n.classList.contains("rotate-btn-active")){for(var h=t,g=f,y=0;y<c[r].length;++y){h.classList.add("popup-square-active");var b={x:d,y:g};c[r][y]=b,g+=1,h=h.nextSibling}r+=1}if(a.classList.contains("rotate-btn-active")){for(var L=d,S=0;S<c[r].length;++S){i[d+S][f].classList.add("popup-square-active");var E={x:L,y:f};c[r][S]=E,L+=1}r+=1}5===r&&(localStorage.setItem("userCoordsArr",JSON.stringify(c)),document.querySelector(".ship-placement-popup-container").remove())}}))}))}(t,i,s)}))}(n.firstChild,r),t};function l(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t){return Math.floor(Math.random()*t)}var p,f,v,m,h,g,y,b,L,S,E;const C=(A=n(),p={attack:function(t,e){t.damage(e)},damage:function(t){A.receiveAttack(t)},gameboard:A},f=function(){var t=n(),e={};return{attack:function(t){for(var r=!1;!1===r;){var n=a(10),o=a(10);e={x:n,y:o},!1===t.gameboard.getBoard()[n][o].hit&&(t.damage(e),r=!0)}},damage:function(e){t.receiveAttack(e)},gameboard:t,getAttackCoord:function(){return e}}}(),v=document.querySelector(".gameboard-1"),m=document.querySelector(".gameboard-2"),h=function(t,e){for(var r=l(e.children),n=0;n<t.length;++n){var a=t[n];l(r[a.x].children)[a.y].classList.add("square-populated")}},g=function(t,e){for(var r=l(e.children),n=0;n<t.length;++n){var a=t[n];l(r[a.x].children)[a.y].classList.add("comp-square-populated")}},y=function(t){l(t.children).forEach((function(t){t.remove()}))},b=function(){!function(){for(var t=[[{},{},{},{},{}],[{},{},{},{}],[{},{},{}],[{},{},{}],[{},{}]],e=function(t){return t.classList.contains("comp-square-populated")},r=function(t,e){for(var r=t,n=[],a=0;a<e;++a)null!==r&&(n.push(r),r=r.nextSibling);return n},n=function(t,e){for(var r=t.x,n=t.y,a=[],o=0;o<e;++o){var i={x:r,y:n};a.push(i),n+=1}return a},a=function(t,e,r,n){for(var a=t,o=[],i=e,c=0;c<n;++c)a=l(m.children)[i].children[r],o.push(a),i+=1;return o},o=function(t,e){for(var r=t.x,n=t.y,a=[],o=0;o<e;++o){var i={x:r,y:n};a.push(i),r+=1}return a},i=0;void 0!==t[i];){var c=f.gameboard.getBoard(),s=u(10),d=u(10),p={x:s,y:d},v=l(m.children)[s].children[d];if(!c[s][d].populated)if(s>=0&&d<=10-t[i].length){if(!r(v,t[i].length).some(e)){var h=n(p,t[i].length);f.gameboard.placeShip(h),g(h,m),i+=1}}else if(d>=0&&s<=10-t[i].length&&!a(v,s,d,t[i].length).some(e)){var y=o(p,t[i].length);f.gameboard.placeShip(y),g(y,m),i+=1}}}(),function(t){for(var e=l(t.children),r=0;r<e.length;++r)l(e[r].children).forEach((function(t){t.addEventListener("mouseover",(function(){t.classList.contains("square-hit")||t.classList.add("square-hover")})),t.addEventListener("mouseout",(function(){t.classList.remove("square-hover")}))}))}(m),function(t){for(var n=l(t.children),a=function(t){l(n[t].children).forEach((function(n){n.addEventListener("click",(function(){var a=n.className,o=parseInt(a.replace(/\D/g,""),10);if(p.attack(f,{x:t,y:o}),n.classList.add("square-hit"),n.classList.contains("comp-square-populated")&&n.classList.add("direct-square-hit"),f.gameboard.allSunk()){var i=document.querySelector("body"),c=r();i.appendChild(c);var s=e(!0);i.appendChild(s),document.querySelector(".replay-btn").addEventListener("click",(function(){return E()}))}}))}))},o=0;o<n.length;++o)a(o)}(m)},L=function(){!function(){for(var t=JSON.parse(localStorage.getItem("userCoordsArr")),e=0;e<t.length;++e)p.gameboard.placeShip(t[e]),h(t[e],v)}()},S=function(){var t=document.querySelector("body"),n=s(),a=r();t.appendChild(a),t.appendChild(n),document.querySelector(".popup-gb").addEventListener("click",(function(){var t=JSON.parse(localStorage.getItem("userCoordsArr"));null!=t&&0!==t.length&&(a.remove(),L(),b(),function(){console.log(p.gameboard.getBoard()),console.log(f.gameboard.getBoard());for(var t=l(m.children),n=0;n<t.length;++n)l(t[n].children).forEach((function(t){t.addEventListener("click",(function(){if(!f.gameboard.allSunk()&&(t.classList.contains("marked")||(t.classList.add("marked"),f.attack(p),i=f.getAttackCoord(),(c=l(l(v.children)[i.x].children)[i.y]).classList.contains("square-populated")?c.classList.add("direct-square-hit"):c.classList.add("square-hit")),p.gameboard.allSunk())){var n=document.querySelector("body"),a=r();n.appendChild(a);var o=e(!1);n.appendChild(o),document.querySelector(".replay-btn").addEventListener("click",(function(){return E()}))}var i,c}))}))}())}))},E=function(){localStorage.setItem("userCoordsArr",JSON.stringify([])),p.gameboard.resetBoard(),f.gameboard.resetBoard();var e=document.querySelector(".win-popup"),r=document.querySelector(".black-bg");e.remove(),r.remove(),y(v),y(m),t(v),t(m),S()},{startGame:S,resetGame:E});var A,q;function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}localStorage.setItem("userCoordsArr",JSON.stringify([])),(q=document.querySelectorAll(".gameboard-interface"),function(t){if(Array.isArray(t))return x(t)}(q)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(q)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}(q)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){return t(e)})),C.startGame()})();