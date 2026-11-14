/* ☀️ شموسة — Grade 5 exam-solution video launcher. Final videos (2026-11-14): Part 1 is the main button; Specifications + Parts 2-4 in the row below. */
(function () {
  var VIDEO = "https://youtu.be/bceKEeW0B_Y"; // Part 1 (final)
  var PARTS = [
    ["المواصفات", "https://youtu.be/zNuVLQyXtCE"],
    ["الجزء 2", "https://youtu.be/gzHRWOAM7_8"],
    ["الجزء 3", "https://youtu.be/uq6_nptEFwM"],
    ["الجزء 4", "https://youtu.be/SlQuniEdnrM"]
  ];
  if (document.getElementById("shm-launch")) return;
  var css =
    "body{padding-bottom:150px!important}" +
    "#shm-launch{position:relative;display:block;width:max-content;max-width:calc(100% - 32px);margin:24px auto 8px;z-index:90;background:linear-gradient(135deg,#e84393,#e17055);color:#fff;font:800 15px/1.4 'Noto Naskh Arabic',Tahoma,Arial,sans-serif;padding:8px 20px;border-radius:999px;box-shadow:0 4px 0 #b03060,0 6px 14px rgba(0,0,0,.3);border:3px solid #fff;cursor:pointer;text-align:center;text-decoration:none}" +
    "#shm-launch small{display:block;font-size:11px;font-weight:700}" +
    "#shm-parts{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;max-width:calc(100% - 32px);margin:0 auto 16px;position:relative;z-index:90}" +
    "#shm-parts a{background:#fff;color:#b03060;font:700 12px/1.3 'Noto Naskh Arabic',Tahoma,Arial,sans-serif;padding:6px 12px;border-radius:999px;border:2px solid #e84393;text-decoration:none}";
  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
  var btn = document.createElement("a");
  btn.id = "shm-launch";
  btn.href = VIDEO;
  btn.target = "_blank";
  btn.rel = "noopener";
  btn.setAttribute("aria-label", "Grade 5 exam solution video - Part 1");
  btn.innerHTML = "🎬 حل اختبار الخامس<small dir=\"ltr\">Grade 5 exam solution · Part 1 · Shamousa</small>";
  var row = document.createElement("div");
  row.id = "shm-parts";
  row.setAttribute("dir", "rtl");
  PARTS.forEach(function (p) {
    var a = document.createElement("a");
    a.href = p[1]; a.target = "_blank"; a.rel = "noopener"; a.textContent = p[0];
    row.appendChild(a);
  });
  var homeHeader = document.querySelector(".tiles") && document.querySelector("header");
  if (homeHeader && homeHeader.parentNode) { homeHeader.parentNode.insertBefore(row, homeHeader.nextSibling); homeHeader.parentNode.insertBefore(btn, row); }
  else { document.body.appendChild(btn); document.body.appendChild(row); }
})();

// © 2026 Mohamed Mostafa Al Shorbagy — Shamousa · SHM-2026-ITQAN-90f132
var __SHM_OWNER = "Mohamed Mostafa Al Shorbagy / شموسة / SHM-2026-ITQAN-90f132";
