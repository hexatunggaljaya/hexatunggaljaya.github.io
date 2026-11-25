/* Tombol "Pindah Modul" bersama – PT. Hexa Tunggal Jaya (sistem.hexatunggaljaya.co.id)
   Pakai: <script src="https://sistem.hexatunggaljaya.co.id/pindah.js" data-ini="siaran" data-lengkap="1" defer></script>
   data-ini      = modul halaman ini (tidak ditampilkan di daftar)
   data-lengkap  = 1 → tampilkan juga TV Operasional & Panel Siaran (khusus halaman milik Pak Julius)
   data-atas     = jarak dari atas (default 12px)
   data-tombol   = id tombol yang sudah ada di halaman; menu ditempel ke tombol itu (tanpa tombol melayang) */
(function () {
  if (window.__hxPindah) return; window.__hxPindah = 1;
  var sc = document.currentScript || [].slice.call(document.querySelectorAll('script[src*="pindah.js"]')).pop() || {};
  var ds = (sc && sc.dataset) || {};
  var INI = ds.ini || '', LENGKAP = ds.lengkap === '1', ATAS = ds.atas || '12px', TOMBOL = ds.tombol || '';
  var PORTAL = 'https://script.google.com/macros/s/AKfycbwij4WsBGalomFrmlvd7XMJEnrZRimCtPWF7dI5JYiX4HQe2Q2lfsRmI1TtRGMazQlMvg/exec';
  function S(p) { return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; }
  var HATI = '<svg viewBox="0 0 512 512" width="30" height="30"><defs><linearGradient id="hgx" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2E8BFF"/><stop offset="1" stop-color="#0548A8"/></linearGradient></defs><polygon points="256,80 408.4,168 408.4,344 256,432 103.6,344 103.6,168" fill="url(#hgx)" stroke="url(#hgx)" stroke-width="120" stroke-linejoin="round"/><path transform="translate(104 112) scale(3.04)" fill="#fff" d="M50 88 C20 68 6 50 6 32 C6 18 17 8 30 8 C39 8 46 13 50 20 C54 13 61 8 70 8 C83 8 94 18 94 32 C94 50 80 68 50 88 Z"/><circle cx="205" cy="226" r="18" fill="#0665CF"/><circle cx="256" cy="226" r="18" fill="#0665CF"/><circle cx="307" cy="226" r="18" fill="#0665CF"/></svg>';
  var DAFTAR = [
    { id: 'penjualan', nama: 'Penjualan', ikon: S('<path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/>'), url: PORTAL + '?buka=penjualan' },
    { id: 'hrga', nama: 'HR & GA', ikon: S('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 12h18M11 12v2h2v-2"/>'), url: PORTAL + '?buka=hrga' },
    { id: 'logops', nama: 'Log Operasional', ikon: S('<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>'), url: PORTAL + '?buka=logops' },
    { id: 'tukarfaktur', nama: 'Tukar Faktur', ikon: S('<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3z"/><path d="M9 8h6M9 12h6M9 16h3"/>'), url: PORTAL + '?buka=tukarfaktur' },
    { id: 'marketing', nama: 'Marketing', ikon: S('<path d="M3 10v4l2 .5V18h3v-2.8L18 18V6L3 10z"/><path d="M21 10v4"/>'), url: PORTAL + '?buka=marketing' },
    { id: 'hati', nama: 'Hati', ikon: HATI, cls: 'h', url: 'https://bot-whatsapp.solitary-cherry-e5b5.workers.dev/admin' },
    { id: 'operasional', nama: 'TV Operasional', khusus: 1, ikon: S('<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>'), url: 'https://script.google.com/macros/s/AKfycbyx6yUpGWq8bnVYwunVl6tyFC9hHwBnqoWwHJ4KL7IpreYgLjuJy8LqwLCngGbHyEUk/exec?tampilan=hp' },
    { id: 'siaran', nama: 'Panel Siaran', khusus: 1, ikon: S('<path d="M4 10v4h3l6 4V6L7 10H4z"/><path d="M16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11"/>'), url: 'https://sistem.hexatunggaljaya.co.id/siaran/' },
    { id: 'home', nama: 'Home', ikon: S('<path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z"/>'), url: PORTAL }
  ].filter(function (m) { return m.id !== INI && (!m.khusus || LENGKAP); });

  function pasang() {
    var st = document.createElement('style');
    st.textContent =
      '#hxPindah{position:fixed;top:' + ATAS + ';right:12px;z-index:2147483000;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,Arial,sans-serif}' +
      '#hxPindah>button{border:0;border-radius:999px;padding:8px 13px;background:linear-gradient(135deg,#002957,#0665CF);color:#fff;font-weight:700;font-size:12.5px;box-shadow:0 6px 18px rgba(0,41,87,.28);cursor:pointer;font-family:inherit}' +
      '#hxPindah .m{position:absolute;right:0;top:42px;min-width:220px;background:#fff;border:1px solid #E1E7F0;border-radius:16px;box-shadow:0 14px 40px rgba(0,41,87,.2);padding:8px;display:none}' +
      '#hxPindah.on .m{display:block}' +
      '#hxPindah.tempel{position:fixed;top:0;right:12px}#hxPindah.tempel .m{top:0}' +
      '#hxPindah a{display:flex;align-items:center;gap:10px;padding:11px 12px;border-radius:12px;color:#0B1B33;text-decoration:none;font-weight:700;font-size:14px}' +
      '#hxPindah a:hover{background:#E6EEF9}' +
      '#hxPindah a span{width:32px;height:32px;min-width:32px;border-radius:10px;background:#E6EEF9;color:#0665CF;display:flex;align-items:center;justify-content:center}#hxPindah a span.h{background:transparent}' +
      '#hxPindah .t{font-size:11px;color:#5B6B82;padding:6px 12px 4px;font-weight:800;text-transform:uppercase;letter-spacing:.06em}' +
      'html.dark #hxPindah .m{background:#0D2142;border-color:#1E3D69}html.dark #hxPindah a{color:#EAF1FF}html.dark #hxPindah a:hover{background:#12305A}html.dark #hxPindah a span{background:rgba(76,155,255,.14);color:#7DB8FF}html.dark #hxPindah a span.h{background:transparent}' +
      '@media (prefers-color-scheme:dark){#hxPindah .m{background:#0D2142;border-color:#1E3D69}#hxPindah a{color:#EAF1FF}#hxPindah a:hover{background:#12305A}#hxPindah a span{background:rgba(76,155,255,.14);color:#7DB8FF}#hxPindah a span.h{background:transparent}}';
    document.head.appendChild(st);
    var k = document.createElement('div'); k.id = 'hxPindah';
    var luar = TOMBOL ? document.getElementById(TOMBOL) : null;
    k.innerHTML = (luar ? '' : '<button type="button">⇄ Pindah Modul</button>') + '<div class="m"><div class="t">Pindah Ke</div>' +
      DAFTAR.map(function (m) { return '<a href="' + m.url + '" target="_top"><span class="' + (m.cls || '') + '">' + m.ikon + '</span>' + m.nama + '</a>'; }).join('') + '</div>';
    document.body.appendChild(k);
    if (luar) {
      k.className = 'tempel';
      luar.addEventListener('click', function (e) {
        e.stopPropagation();
        var r = luar.getBoundingClientRect();
        k.style.top = (r.bottom + 6) + 'px'; k.style.right = Math.max(8, window.innerWidth - r.right) + 'px';
        k.classList.toggle('on');
      });
      window.addEventListener('scroll', function () { k.classList.remove('on'); }, { passive: true });
    } else {
      k.firstChild.onclick = function (e) { e.stopPropagation(); k.classList.toggle('on'); };
    }
    document.addEventListener('click', function (e) { if (!k.contains(e.target)) k.classList.remove('on'); });
  }
  if (document.body) pasang(); else document.addEventListener('DOMContentLoaded', pasang);
})();
