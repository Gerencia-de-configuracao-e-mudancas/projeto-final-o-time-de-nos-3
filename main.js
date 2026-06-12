// ═══════════════════════════════════════════
//  CRÔNICA DO MATADOR DO REI — main.js
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Active nav link ───────────────────
  const currentFile = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentFile) link.classList.add('active');
  });

  // ── 2. Scroll reveal ────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

  // ── 3. Starfield (index only) ────────────
  const starsBg = document.querySelector('.stars-bg');
  if (starsBg) {
    const N = 90;
    for (let i = 0; i < N; i++) {
      const s = document.createElement('span');
      s.style.cssText = `
        left:${Math.random()*100}%;
        top:${Math.random()*100}%;
        --dur:${2 + Math.random()*4}s;
        --op:${0.15 + Math.random()*0.55};
        width:${Math.random()<0.2?3:Math.random()<0.5?2:1}px;
        height:${Math.random()<0.2?3:Math.random()<0.5?2:1}px;
      `;
      starsBg.appendChild(s);
    }
  }

  // ── 4. Parallax subtle header ────────────
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      header.style.transform = `translateY(${y * 0.25}px)`;
    }, { passive: true });
  }

  // ── 5. Candle flicker randomization ──────
  document.querySelectorAll('.candle-flame').forEach(flame => {
    flame.style.animationDuration = (1.4 + Math.random() * 0.8) + 's';
    flame.style.animationDelay = (-Math.random() * 1.5) + 's';
  });

});