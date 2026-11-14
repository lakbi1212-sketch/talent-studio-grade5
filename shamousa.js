/* ☀️ شموسة — Grade 5 exam-solution video launcher. New videos: swap VIDEO below (playlist of the 4 parts soon). */
(function () {
  var VIDEO = "https://youtu.be/Y1jQ5NcwUeE";
  if (document.getElementById("shm-launch")) return;
  var css =
    "body{padding-bottom:130px!important}" +
    "#shm-launch{position:relative;display:block;width:max-content;max-width:calc(100% - 32px);margin:24px auto;z-index:90;background:linear-gradient(135deg,#e84393,#e17055);color:#fff;font:800 15px/1.4 'Noto Naskh Arabic',Tahoma,Arial,sans-serif;padding:8px 20px;border-radius:999px;box-shadow:0 4px 0 #b03060,0 6px 14px rgba(0,0,0,.3);border:3px solid #fff;cursor:pointer;text-align:center;text-decoration:none}" +
    "#shm-launch small{display:block;font-size:11px;font-weight:700}";
  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
  var btn = document.createElement("a");
  btn.id = "shm-launch";
  btn.href = VIDEO;
  btn.target = "_blank";
  btn.rel = "noopener";
  btn.setAttribute("aria-label", "Grade 5 exam solution video");
  btn.innerHTML = "\ud83c\udfac \u062d\u0644 \u0627\u062e\u062a\u0628\u0627\u0631 \u0627\u0644\u062e\u0627\u0645\u0633<small dir=\"ltr\">Grade 5 exam solution \u00b7 Shamousa</small>";
  document.body.appendChild(btn);
})();

// © 2026 Mohamed Mostafa Al Shorbagy — Shamousa · SHM-2026-ITQAN-90f132
var __SHM_OWNER = "Mohamed Mostafa Al Shorbagy / شموسة / SHM-2026-ITQAN-90f132";
