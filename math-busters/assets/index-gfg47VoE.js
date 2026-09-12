(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`×`,`÷`,`+`,`−`];function t(e,t,n){switch(t){case`+`:return e+n;case`−`:return e-n;case`×`:return e*n;case`÷`:return n===0||e%n!==0?null:e/n}}function n(e){if(e.length<=1)return[e.slice()];let t=[];for(let r=0;r<e.length;r++){let i=e.filter((e,t)=>t!==r);for(let a of n(i))t.push([e[r],...a])}return t}function r(e,r){let[i,a,o]=e;if(t(i,r,a)===o)return{a:i,op:r,b:a,c:o};for(let[i,a,o]of n(e))if(t(i,r,a)===o)return{a:i,op:r,b:a,c:o};return null}function i(e){return`${e.a} ${e.op} ${e.b} = ${e.c}`}function a(t){for(let n of e){let e=r(t,n);if(e)return e}return null}var o=[[20,5,25],[4,16,6],[4,8,2]];function s(e){return e.map(e=>e.slice())}function c(e){let t=[];for(let n=0;n<e.length;n++)for(let r=0;r<e[n].length;r++){let i=e[n][r];i!==null&&t.push({row:n,col:r,value:i})}return t}function l(e,t){if(t===0)return[[]];if(e.length<t)return[];let[n,...r]=e;return[...l(r,t-1).map(e=>[n,...e]),...l(r,t)]}function u(e){let t=c(e),n=[];for(let e of l(t,3)){let t=a([e[0].value,e[1].value,e[2].value]);t&&n.push({cells:[e[0],e[1],e[2]],equation:t})}return n}function d(e){let t=c(e);if(t.length===0)return!0;if(t.length%3!=0)return!1;let n=new Set;function r(e){return e.flat().map(e=>e===null?`x`:e).join(`,`)}function i(e){if(c(e).length===0)return!0;let t=r(e);if(n.has(t))return!1;n.add(t);for(let t of u(e)){let n=s(e);for(let e of t.cells)n[e.row][e.col]=null;if(i(n))return!0}return!1}return i(e)}function f(e,t){return Math.floor(Math.random()*(t-e+1))+e}function p(e){let t=e.slice();for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function m(){let t=e[f(0,e.length-1)];if(t===`×`){let e=f(2,9),n=f(2,9);return{a:e,op:t,b:n,c:e*n}}if(t===`÷`){let e=f(2,9),n=f(2,9);return{a:e*n,op:t,b:e,c:n}}if(t===`+`){let e=f(1,12),n=f(1,12);return{a:e,op:t,b:n,c:e+n}}let n=f(1,12),r=f(1,12);return{a:n+r,op:`−`,b:n,c:r}}function h(e){return[[e[0],e[1],e[2]],[e[3],e[4],e[5]],[e[6],e[7],e[8]]]}function g(){for(let e=0;e<120;e++){let e=h(p([m(),m(),m()].flatMap(e=>[e.a,e.b,e.c])));if(u(e).length>0&&d(e))return e}return s(o)}function _(e,t){let n=s(e);for(let e of t)n[e.row][e.col]=null;return n}function v(e){return c(e).length===0}function y(e){return c(e).length>0&&u(e).length===0}function b(){let e=document.querySelector(`#app`);if(!e)throw Error(`Missing #app`);return e}var x=b(),S=s(o),C=[],w=0,T=!1,E=[],D=`idle`,O=`Joe’s starter board. Tap three blocks!`,k=!1,A=!1,j=null,M=[];function N(e,t){return e.row===t.row&&e.col===t.col}function P(e){return C.some(t=>N(t,e))}function F(){return S.flat().filter(e=>e!==null).length}function I(){if(C.length!==3)return null;let e=C.map(e=>S[e.row][e.col]);return e.some(e=>e===null)?null:e}function L(e,t){D=e,O=t}function R(){return v(S)?`You busted every block!`:y(S)?M.length?`Those leftover numbers don’t make an equation. Undo and try a different trio!`:`Those leftover numbers don’t make an equation. Try a new puzzle!`:`Tap three number blocks.`}function z(e){C=[],E=[],j=null,v(S)?(T=!0,L(`win`,`You busted every block!`)):y(S)?L(`stuck`,R()):(T=!1,L(`idle`,e??R()))}function B(e){return T||j||S[e.row][e.col]===null||P(e)||C.length>=3?!1:(E=[],C=[...C,e],C.length<3?L(`idle`,C.length===1?`Nice! Tap two more.`:`One more block…`):(L(`ready`,`Pick a math tool: ×  ÷  +  −`),queueMicrotask(()=>{document.querySelector(`.tools`)?.scrollIntoView({block:`nearest`,behavior:`smooth`})})),!0)}function V(e){j||(C=C.filter(t=>!N(t,e)),C.length===0?L(`idle`,`Tap three number blocks.`):L(`idle`,C.length===1?`Nice! Tap two more.`:`One more block…`))}function H(e=!1){S=e?s(o):g(),w=0,T=!1,k=!1,A=!1,M=[],z(e?`Joe’s starter board. Tap three blocks!`:`New puzzle! Tap three blocks.`),X()}function U(){let e=M.pop();e&&!j&&(S=s(e.board),w=e.busts,T=!1,z(`Bust undone. Try a different three blocks.`),X())}function W(e){let t=I();if(!t)return;let n=r(t,e);if(!n){L(`miss`,`Not quite! Try another tool, or pick different blocks.`),Y();let e=document.querySelector(`.board`);e?.classList.remove(`shake`),e?.getBoundingClientRect(),e?.classList.add(`shake`);return}j=C.slice();let a=i(n);L(`hit`,`${a}  ·  Bust!`),Y(),window.setTimeout(()=>{j&&(M.push({board:s(S),busts:w}),S=_(S,j),w+=1,z(v(S)?`${a}  ·  You busted every block!`:`${a}  ·  Great bust! Keep going.`),y(S)&&!v(S)&&L(`stuck`,`${a}. ${R()}`),X())},520)}function G(){if(T||j)return;let e=u(S);if(e.length===0){L(`stuck`,R()),Y();return}let t=e[Math.floor(Math.random()*e.length)];E=t.cells,C=[],L(`idle`,`Hint: ${i(t.equation)} — can you find those blocks?`),J(),Y(),q()}function K(e,t){let n=document.elementFromPoint(e,t)?.closest(`[data-row][data-col]`);return!n||n.disabled?null:{row:Number(n.dataset.row),col:Number(n.dataset.col)}}function q(){let e=document.querySelector(`#selection-line`),t=document.querySelector(`#board`);if(!e||!t)return;let n=t.getBoundingClientRect();e.setAttribute(`viewBox`,`0 0 ${n.width} ${n.height}`),e.style.width=`${n.width}px`,e.style.height=`${n.height}px`;let r=C.map(e=>{let r=t.querySelector(`[data-row="${e.row}"][data-col="${e.col}"]`);if(!r)return``;let i=r.getBoundingClientRect();return`${i.left-n.left+i.width/2},${i.top-n.top+i.height/2}`}).filter(Boolean);e.querySelector(`polyline`)?.setAttribute(`points`,r.join(` `))}function J(){let e=document.querySelector(`#board`);e&&e.querySelectorAll(`.block`).forEach(e=>{let t={row:Number(e.dataset.row),col:Number(e.dataset.col)},n=S[t.row][t.col],r=P(t),i=C.findIndex(e=>N(e,t)),a=E.some(e=>N(e,t)),o=n===null;e.classList.toggle(`empty`,o),e.classList.toggle(`selected`,r),e.classList.toggle(`hinted`,a&&!r),e.disabled=o||T,e.setAttribute(`aria-pressed`,String(r)),e.setAttribute(`aria-label`,o?`Cleared block`:`Number ${n}`),e.innerHTML=o?``:`<span class="num">${n}</span>${r?`<span class="order">${i+1}</span>`:``}`})}function Y(){let e=document.querySelector(`#status`);e&&(e.className=`status status-${D}`,e.textContent=O);let t=document.querySelector(`#busts`),n=document.querySelector(`#left`);t&&(t.textContent=String(w)),n&&(n.textContent=String(F()));let r=C.map(e=>S[e.row][e.col]).filter(e=>e!==null),i=document.querySelector(`.tools`),a=document.querySelector(`#tools-label`),o=C.length===3&&!T;i?.classList.toggle(`open`,o),a&&(a.innerHTML=r.length===3?`Math tools for <strong>${r.join(` · `)}</strong>`:`Pick three blocks first`),document.querySelectorAll(`[data-op]`).forEach(e=>{e.disabled=!o});let s=document.querySelector(`[data-action='clear']`);s&&(s.disabled=C.length===0||!!j);let c=document.querySelector(`[data-action='undo']`);c&&(c.disabled=M.length===0||!!j);let l=document.querySelector(`#win-banner`);l&&(l.hidden=!T),document.querySelector(`.stage`)?.classList.toggle(`won`,T)}function X(){x.innerHTML=`
    <div class="shell">
      <header class="hero">
        <p class="eyebrow">Number-block puzzle</p>
        <h1>Math Busters</h1>
        <p class="lede">Line up three numbers. Pick a math tool. Bust the blocks!</p>
      </header>

      <section class="howto" aria-label="How to play">
        Tap <strong>3 blocks</strong>, then pick <strong>×</strong> <strong>÷</strong> <strong>+</strong> or <strong>−</strong>.
        A true equation busts them!
      </section>

      <div class="meter">
        <span>Busts <strong id="busts">${w}</strong></span>
        <span>Blocks left <strong id="left">${F()}</strong></span>
      </div>

      <p id="status" class="status status-${D}" role="status">${O}</p>

      <div class="stage">
        <div class="board-wrap">
          <svg id="selection-line" class="selection-line" aria-hidden="true">
            <polyline points="" />
          </svg>
          <div id="board" class="board" role="grid" aria-label="Number blocks">
            ${S.map((e,t)=>e.map((e,n)=>`
                    <button
                      type="button"
                      class="block${e===null?` empty`:``}"
                      data-row="${t}"
                      data-col="${n}"
                      role="gridcell"
                    ></button>
                  `).join(``)).join(``)}
          </div>
        </div>

        <div class="tools">
          <p id="tools-label" class="tools-label">Pick three blocks first</p>
          <div class="ops">
            <button type="button" class="op op-mul" data-op="×">×</button>
            <button type="button" class="op op-div" data-op="÷">÷</button>
            <button type="button" class="op op-add" data-op="+">+</button>
            <button type="button" class="op op-sub" data-op="−">−</button>
          </div>
        </div>
      </div>

      <div id="win-banner" class="win-banner" hidden>
        <p>You cleared the whole board!</p>
        <button type="button" class="primary" data-action="again">Play again</button>
      </div>

      <div class="actions">
        <button type="button" data-action="clear">Clear picks</button>
        <button type="button" data-action="undo">Undo bust</button>
        <button type="button" data-action="hint">Hint</button>
        <button type="button" class="primary" data-action="new">New puzzle</button>
      </div>
    </div>
  `,Z(),J(),Y(),requestAnimationFrame(q)}function Z(){let e=document.querySelector(`#board`);if(!e)return;e.addEventListener(`pointerdown`,t=>{if(t.button!==0||T||j)return;let n=K(t.clientX,t.clientY);n&&(k=!0,A=!1,e.setPointerCapture(t.pointerId),P(n)||B(n)&&(A=!0,J(),Y(),q()))}),e.addEventListener(`pointermove`,e=>{if(!k)return;let t=K(e.clientX,e.clientY);t&&!P(t)&&B(t)&&(A=!0,J(),Y(),q())});let t=t=>{k&&(k=!1,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId))};e.addEventListener(`pointerup`,t),e.addEventListener(`pointercancel`,t),e.addEventListener(`click`,e=>{if(j||T)return;let t=e.target.closest(`[data-row]`);if(!t)return;let n={row:Number(t.dataset.row),col:Number(t.dataset.col)};P(n)&&!A&&(V(n),J(),Y(),q()),A=!1}),x.querySelectorAll(`[data-op]`).forEach(e=>{e.addEventListener(`click`,()=>{W(e.dataset.op)})}),x.querySelector(`[data-action='clear']`)?.addEventListener(`click`,()=>{z(`Picks cleared. Tap three blocks.`),J(),Y(),q()}),x.querySelector(`[data-action='undo']`)?.addEventListener(`click`,U),x.querySelector(`[data-action='hint']`)?.addEventListener(`click`,G),x.querySelector(`[data-action='new']`)?.addEventListener(`click`,()=>H(!1)),x.querySelector(`[data-action='again']`)?.addEventListener(`click`,()=>H(!1))}window.addEventListener(`resize`,q),X();