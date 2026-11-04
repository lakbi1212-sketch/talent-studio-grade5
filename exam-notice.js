/* Itqan Gate - Final Exam Prep announcement (shows once per visitor) */
(function(){
  try{
    if(localStorage.getItem('itqanExamPrepNotice2026'))return;
  }catch(e){}
  function show(){
    if(document.getElementById('itqanExamNotice'))return;
    var css=document.createElement('style');
    css.textContent=''
+'#itqanExamNotice{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(15,30,55,.55);font-family:Cairo,Poppins,sans-serif;direction:rtl}'
+'#itqanExamNotice .ien-card{position:relative;max-width:430px;width:100%;background:linear-gradient(135deg,#1B3A6B,#27548f);border:3px solid #f7c948;border-radius:22px;padding:26px 22px 22px;text-align:center;color:#fff;box-shadow:0 12px 40px rgba(0,0,0,.35)}'
+'#itqanExamNotice .ien-frame{position:absolute;inset:7px;border:2px dashed rgba(247,201,72,.6);border-radius:16px;pointer-events:none}'
+'#itqanExamNotice .ien-sun{font-size:44px;line-height:1;animation:ienGlow 2s ease-in-out infinite}'
+'@keyframes ienGlow{0%,100%{transform:scale(1);filter:drop-shadow(0 0 4px rgba(247,201,72,.7))}50%{transform:scale(1.08);filter:drop-shadow(0 0 12px rgba(247,201,72,.95))}}'
+'#itqanExamNotice h2{margin:10px 0 6px;font-size:22px;font-weight:800;color:#f7c948}'
+'#itqanExamNotice p{margin:0 0 16px;font-size:16px;line-height:1.8;color:#eaf2ff}'
+'#itqanExamNotice .ien-badge{display:inline-block;background:#12B5A5;color:#fff;border-radius:999px;padding:3px 14px;font-size:13px;font-weight:800;margin-bottom:12px}'
+'#itqanExamNotice .ien-cta{display:inline-block;background:#f7c948;color:#1B3A6B;font-weight:800;font-size:17px;border-radius:999px;padding:12px 26px;text-decoration:none;border:none;cursor:pointer;box-shadow:0 4px 14px rgba(247,201,72,.4);transition:transform .15s}'
+'#itqanExamNotice .ien-cta:hover{transform:scale(1.04)}'
+'#itqanExamNotice .ien-close{position:absolute;top:10px;left:12px;z-index:2;background:rgba(255,255,255,.15);color:#fff;border:none;border-radius:50%;width:34px;height:34px;font-size:18px;cursor:pointer;line-height:1}'
+'#itqanExamNotice .ien-later{display:block;margin:12px auto 0;background:none;border:none;color:#9fc0ee;font-size:13px;cursor:pointer;text-decoration:underline}';
    document.head.appendChild(css);
    var ov=document.createElement('div');
    ov.id='itqanExamNotice';
    ov.setAttribute('role','dialog');
    ov.setAttribute('aria-label','إشعار قسم الاستعداد للاختبار النهائي');
    ov.innerHTML=''
+'<div class="ien-card"><div class="ien-frame"></div>'
+'<button class="ien-close" type="button" aria-label="إغلاق">✕</button>'
+'<div class="ien-sun">☀️</div>'
+'<span class="ien-badge">⭐ جديد · New</span>'
+'<h2>قسم الاستعداد للاختبار النهائي</h2>'
+'<p>شموسة تبشّرك! تمت إضافة قسم خاص للاستعداد للاختبار النهائي، به أنشطة واختبارات تجريبية تفاعلية مع التصحيح الفوري. 🌟</p>'
+'<a class="ien-cta" href="exam-prep.html">📋 ابدأ الاستعداد الآن</a>'
+'<button class="ien-later" type="button">لاحقًا</button>'
+'</div>';
    document.body.appendChild(ov);
    function done(){
      try{localStorage.setItem('itqanExamPrepNotice2026','1');}catch(e){}
      ov.remove();
    }
    ov.querySelector('.ien-close').addEventListener('click',done);
    ov.querySelector('.ien-later').addEventListener('click',done);
    ov.querySelector('.ien-cta').addEventListener('click',done);
    ov.addEventListener('click',function(ev){if(ev.target===ov)done();});
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){setTimeout(show,900);});}
  else{setTimeout(show,900);}
})();
