/* =========================================================
   PORTFOLIO SCRIPT — Anish CP
   Sections: Preloader / Cursor / Particles / Smooth Scroll /
   Reveals / Typed Roles / Nav / Counters & Bars / Tilt /
   Magnetic Buttons / Contact Form / Back to top
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     1. PRELOADER — boot sequence percentage counter
  --------------------------------------------------------- */
  const preloader   = document.getElementById('preloader');
  const bootPercent = document.getElementById('bootPercent');
  const bootBarFill = document.getElementById('bootBarFill');

  let pct = 0;
  const bootInterval = setInterval(() => {
    pct += Math.floor(Math.random() * 9) + 3;
    if (pct >= 100) {
      pct = 100;
      clearInterval(bootInterval);
      setTimeout(() => {
        preloader.classList.add('done');
        document.body.style.overflow = '';
        runHeroReveal();
      }, 350);
    }
    bootPercent.textContent = pct;
    bootBarFill.style.width = pct + '%';
  }, 140);

  document.body.style.overflow = 'hidden';

  /* ---------------------------------------------------------
     2. CUSTOM CURSOR
  --------------------------------------------------------- */
  const cursorDot  = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let ringX = mouseX, ringY = mouseY;

  if (!('ontouchstart' in window)) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
    });

    (function ringLoop(){
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
      requestAnimationFrame(ringLoop);
    })();

    document.querySelectorAll('a, button, [data-cursor="link"], .skill-card, .project-card, .cert-card').forEach(el => {
      el.addEventListener('mouseenter', () => { cursorRing.classList.add('hover'); cursorDot.classList.add('hover'); });
      el.addEventListener('mouseleave', () => { cursorRing.classList.remove('hover'); cursorDot.classList.remove('hover'); });
    });
  }

  /* ---------------------------------------------------------
     3. BACKGROUND PARTICLES (lightweight canvas)
  --------------------------------------------------------- */
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();

  function initParticles(){
    const count = Math.min(70, Math.floor(window.innerWidth / 22));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      hue: Math.random() > 0.5 ? '0,245,255' : '255,0,255'
    }));
  }
  initParticles();

  function drawParticles(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.hue},0.55)`;
      ctx.shadowBlur = 6;
      ctx.shadowColor = `rgba(${p.hue},0.8)`;
      ctx.fill();
    });
    requestAnimationFrame(drawParticles);
  }
  if (!prefersReducedMotion) drawParticles();

  window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

  /* ---------------------------------------------------------
     4. LENIS SMOOTH SCROLL + GSAP SCROLLTRIGGER SYNC
  --------------------------------------------------------- */
  gsap.registerPlugin(ScrollTrigger);

  let lenis;
  if (window.Lenis && !prefersReducedMotion) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  /* ---------------------------------------------------------
     5. NAVBAR — scroll state, active link, mobile menu
  --------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: (self) => {
      navbar.style.background = self.progress > 0 || window.scrollY > 40
        ? 'rgba(5,8,22,0.85)' : 'rgba(5,8,22,0.55)';
    }
  });

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  const navA = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('main section[id], .hero[id]');
  sections.forEach(sec => {
    ScrollTrigger.create({
      trigger: sec, start: 'top center', end: 'bottom center',
      onEnter: () => setActive(sec.id),
      onEnterBack: () => setActive(sec.id)
    });
  });
  function setActive(id){
    navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
  }

  /* ---------------------------------------------------------
     6. TYPED.JS — rotating role text
  --------------------------------------------------------- */
  if (window.Typed) {
    new Typed('#typedRole', {
      strings: ['intelligent systems.', 'IoT that senses the world.', 'clean, usable interfaces.', 'AI-driven solutions.'],
      typeSpeed: 45,
      backSpeed: 28,
      backDelay: 1600,
      loop: true,
      smartBackspace: true
    });
  }

  /* ---------------------------------------------------------
     7. HERO ENTRANCE (fires after preloader completes)
  --------------------------------------------------------- */
  function runHeroReveal(){
    gsap.timeline()
      .to('.hero-text[data-reveal]', { opacity:1, y:0, duration:1, ease:'power3.out' })
      .to('.hero-image[data-reveal]', { opacity:1, y:0, duration:1, ease:'power3.out' }, '-=0.7');
    ScrollTrigger.refresh();
  }

  /* ---------------------------------------------------------
     8. SCROLL REVEALS for the rest of the page
  --------------------------------------------------------- */
  document.querySelectorAll('[data-reveal]').forEach(el => {
    if (el.closest('.hero')) return; // handled by hero entrance
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

  /* ---------------------------------------------------------
     9. SKILL BARS — animate width on reveal
  --------------------------------------------------------- */
  document.querySelectorAll('.progress').forEach(bar => {
    ScrollTrigger.create({
      trigger: bar, start: 'top 90%',
      onEnter: () => { bar.style.width = bar.dataset.width + '%'; }
    });
  });

  /* ---------------------------------------------------------
     10. COUNTERS — animate numbers on reveal
  --------------------------------------------------------- */
  document.querySelectorAll('.stat-num').forEach(num => {
    const target = parseInt(num.dataset.count, 10);
    const suffix = num.dataset.suffix || '';
    ScrollTrigger.create({
      trigger: num, start: 'top 92%', once: true,
      onEnter: () => {
        gsap.fromTo(num, { innerText: 0 }, {
          innerText: target, duration: 1.6, ease: 'power2.out', snap: { innerText: 1 },
          onUpdate: function(){ num.textContent = Math.floor(num.innerText) + suffix; }
        });
      }
    });
  });

  /* ---------------------------------------------------------
     11. VANILLA TILT
  --------------------------------------------------------- */
  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
      max: 8, speed: 400, glare: false, scale: 1.02
    });
  }

  /* ---------------------------------------------------------
     12. MAGNETIC BUTTONS
  --------------------------------------------------------- */
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      gsap.to(btn, { x: x * 0.25, y: y * 0.4, duration: 0.4, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => gsap.to(btn, { x:0, y:0, duration:0.5, ease:'elastic.out(1,0.4)' }));
  });

  /* ---------------------------------------------------------
     13. CONTACT FORM — front-end confirmation
  --------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  const sendBtnText = document.getElementById('sendBtnText');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendBtnText.textContent = 'Sending...';
    setTimeout(() => {
      sendBtnText.textContent = 'Message Sent';
      formNote.textContent = '> transmission received. I\'ll reply within 24h.';
      contactForm.reset();
      setTimeout(() => { sendBtnText.textContent = 'Send Message'; formNote.textContent=''; }, 4000);
    }, 900);
  });

  /* ---------------------------------------------------------
     14. BACK TO TOP
  --------------------------------------------------------- */
  document.getElementById('backToTop').addEventListener('click', () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
