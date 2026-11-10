/* Keep narrated writing in view. Pausing always releases the page for review. */
(()=>{const narrating=()=>typeof playing!=='undefined'&&playing;const editable=t=>t&&t.closest('input,select,textarea,[contenteditable=true]');
 document.addEventListener('wheel',e=>{if(narrating()&&!editable(e.target))e.preventDefault()},{passive:false});
 document.addEventListener('touchmove',e=>{if(narrating()&&!editable(e.target))e.preventDefault()},{passive:false});
 document.addEventListener('keydown',e=>{if(narrating()&&!editable(e.target)&&['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(e.key)&&!e.target.closest('button,summary,a'))e.preventDefault()});
 // Dragging the desktop scrollbar must not leave the current writing behind.
 let guard=0;document.addEventListener('scroll',()=>{clearTimeout(guard);if(!narrating())return;guard=setTimeout(()=>{if(!narrating())return;let id=typeof focusCard!=='undefined'?focusCard:null;let target=id?document.getElementById(id):null;if(!target&&typeof focusKey!=='undefined'&&focusKey)target=document.getElementById(focusKey.split('-').slice(1).join('-'));if(!target)return;let r=target.getBoundingClientRect();if(r.bottom<90||r.top>innerHeight-100)target.scrollIntoView({behavior:'instant',block:'start'})},140)},{passive:true});
 document.querySelectorAll('.inline-controls .secondary').forEach(b=>b.addEventListener('click',()=>{if(narrating()&&typeof pause==='function')pause()},true));
 const style=document.createElement('style');style.textContent='.scene-card:nth-of-type(4n+2) .en:not(.rule) .english-line,.scene-card:nth-of-type(5n+3) .english-run,.exam-step:nth-of-type(4n+2) .english-line{font-style:italic}.english-line,.english-run{font-family:WhiteboardHand,Arial,sans-serif}';document.head.appendChild(style);
})();


/* Itqan competition boards (listening points 2026-11-10): quiet mode on lesson pages - no cup/modal, listening still counts */
(function(){try{window.SHM_BOARDS_QUIET=1;if(window.ShmBoards||document.querySelector('script[src*="itqan-boards"]'))return;var s=document.createElement("script");s.src="https://itqan-boards.itqan-gate.workers.dev/boards.js";s.defer=true;s.setAttribute("data-site",location.hostname.split(".")[0]);document.head.appendChild(s);}catch(e){}})();
