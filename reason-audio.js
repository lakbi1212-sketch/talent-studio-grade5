/* Original recorded answer explanations. No device speech. */
(()=>{
  const map=window.REASON_AUDIO;
  if(!map)return;
  const style=document.createElement('style');style.textContent='.practice-zone .reason-listen{display:block;width:100%;margin:10px 0;padding:10px 14px;min-height:44px}';document.head.append(style);
  const voice=new Audio();voice.preload='none';let timer=0,epoch=0,activeButton=null;
  function stop(){++epoch;clearTimeout(timer);voice.pause();voice.currentTime=0;if(activeButton)activeButton.textContent='اسمع السبب';activeButton=null;}
  function file(q){return map[q.sentence+'|'+q.reason];}
  function button(q){const url=file(q);if(!url)return null;const b=document.createElement('button');b.type='button';b.className='reason-listen';b.textContent='اسمع السبب';b.setAttribute('aria-label','اسمع سبب الإجابة بصوت شموسة');b.onclick=()=>play(url,b,0);return b;}
  function play(url,b,delay){stop();const e=epoch;activeButton=b;b.textContent=delay?'السبب بعد المؤثر الصوتي…':'جارٍ تشغيل السبب…';timer=setTimeout(async()=>{if(e!==epoch||!b.isConnected)return;try{if(typeof playing!=='undefined'&&playing)pause();else if(typeof audio!=='undefined')audio.pause();voice.src=url;voice.playbackRate=.85;voice.preservesPitch=true;await voice.play();if(e===epoch)b.textContent='أعد سماع السبب';}catch(_){if(e===epoch)b.textContent='اضغط لسماع السبب';}},delay);}
  voice.addEventListener('ended',()=>{if(activeButton)activeButton.textContent='أعد سماع السبب';});
  voice.addEventListener('error',()=>{if(activeButton)activeButton.textContent='تعذّر الصوت · حاول مجددًا';});
  for(const name of ['practiceMenu','practiceQuestion','practiceReview','beginPractice']){
    const original=window[name];if(typeof original!=='function')continue;
    window[name]=function(...args){stop();const result=original.apply(this,args);if(name==='practiceReview'){const cards=[...practiceApp.querySelectorAll('.review-card')];pAnswers.forEach((a,i)=>{const b=button(QUESTIONS[a.id]);if(b&&cards[i])cards[i].append(b);});}return result;};
  }
  const answer=window.practiceAnswer;
  window.practiceAnswer=function(value){const wasGiven=pGiven!==null;const result=answer.call(this,value);if(!wasGiven&&pFeedback==='instant'){const q=QUESTIONS[pOrder[pIndex]],b=button(q),r=document.getElementById('reason');if(b&&r){r.insertAdjacentElement('afterend',b);play(file(q),b,value===q.answer?1750:750);}}return result;};
  if(typeof audio!=='undefined')audio.addEventListener('play',stop);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
  window.addEventListener('pagehide',stop);
})();
