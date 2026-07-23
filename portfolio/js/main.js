/* ════════════════════════════════════════════════
   Rafael Sanguini · Portfolio JS
   Todos os botões e interações funcionais
════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Init Lucide icons ── */
  if (window.lucide) lucide.createIcons();


  /* ════════════════════════
     NAVBAR — scroll + active
  ════════════════════════ */
  const navbar = document.getElementById('navbar');

  const updateNav = () => {
    // Scrolled state
    navbar.classList.toggle('scrolled', window.scrollY > 30);

    // Active link
    const sections = ['home','sobre','projetos','habilidades','contato'];
    let current = 'home';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === current);
    });
  };

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ════════════════════════
     HAMBURGER MENU
  ════════════════════════ */
  const burger   = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  const closeMenu = () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  burger.addEventListener('click', () => {
    const opening = !navLinks.classList.contains('open');
    burger.classList.toggle('open', opening);
    navLinks.classList.toggle('open', opening);
    burger.setAttribute('aria-expanded', String(opening));
    document.body.style.overflow = opening ? 'hidden' : '';
  });

  // Close on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  /* ════════════════════════
     SMOOTH SCROLL — anchors
  ════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ════════════════════════
     REVEAL ON SCROLL
  ════════════════════════ */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  // Add reveal class to elements
  const toReveal = [
    '.proj-card', '.skill-row', '.ch-card', '.ai-item',
    '.soft-pill', '.cs-link', '.fg-nav', '.fg-contact'
  ];
  toReveal.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = `opacity .6s ease ${i * 60}ms, transform .6s ease ${i * 60}ms`;
      revealObs.observe(el);
    });
  });

  // When in view: show
  const revealCb = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        revealCb.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(toReveal.join(',')).forEach(el => revealCb.observe(el));

  /* ════════════════════════
     SKILL BARS ANIMATION
  ════════════════════════ */
  const skillObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.sk-fill').forEach((bar, i) => {
          setTimeout(() => bar.classList.add('on'), i * 100);
        });
        skillObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-group').forEach(g => skillObs.observe(g));

  /* ════════════════════════
     PROJETOS — VER MAIS
  ════════════════════════ */
  const btnVerMais  = document.getElementById('btnVerMais');
  const btnLabel    = document.getElementById('btnMoreLabel');
  const hiddenCards = document.querySelectorAll('.proj-hidden');
  let expanded = false;

  if (btnVerMais) {
    btnVerMais.addEventListener('click', () => {
      expanded = !expanded;
      btnVerMais.classList.toggle('open', expanded);
      btnVerMais.setAttribute('aria-expanded', String(expanded));
      btnLabel.textContent = expanded ? 'Ver menos' : 'Ver mais projetos';

      hiddenCards.forEach((card, i) => {
        if (expanded) {
          card.classList.add('show');
          card.setAttribute('aria-hidden', 'false');
          setTimeout(() => card.classList.add('animate'), 50 + i * 100);
        } else {
          card.classList.remove('animate');
          card.setAttribute('aria-hidden', 'true');
          setTimeout(() => card.classList.remove('show'), 400);
        }
      });

      if (expanded) {
        setTimeout(() => {
          hiddenCards[0]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 250);
      }
    });
  }

  /* ════════════════════════
     COPY EMAIL
  ════════════════════════ */
  const copyBtn   = document.getElementById('copyEmailBtn');
  const copyToast = document.getElementById('copyToast');
  const EMAIL = 'rafaelcolagrossi@gmail.com';

  if (copyBtn && copyToast) {
    copyBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(EMAIL);
        } else {
          // Fallback for older browsers / non-HTTPS
          const ta = document.createElement('textarea');
          ta.value = EMAIL;
          ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        if (window.lucide) lucide.createIcons({ nodes: [copyToast] });
        copyToast.classList.add('visible');
        setTimeout(() => copyToast.classList.remove('visible'), 2500);
      } catch (err) {
        console.error('Copy failed', err);
      }
    });
  }

  /* ════════════════════════
     PROFILE MODAL
  ════════════════════════ */
  const modalOverlay = document.getElementById('modalOverlay');
  const modalBox     = document.getElementById('modalBox');
  const openTrigger  = document.getElementById('openProfileModal');
  const closeBtn     = document.getElementById('modalClose');
  const contactBtn   = document.getElementById('modalContactBtn');

  const openModal = () => {
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons({ nodes: [modalBox] });
    // Trap focus
    setTimeout(() => closeBtn?.focus(), 50);
  };

  const closeModal = () => {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    openTrigger?.focus();
  };

  openTrigger?.addEventListener('click', openModal);
  openTrigger?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(); }
  });
  closeBtn?.addEventListener('click', closeModal);
  contactBtn?.addEventListener('click', closeModal);

  modalOverlay?.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
  });

  /* ════════════════════════
     PARALLAX ORBS (desktop)
  ════════════════════════ */
  const orbs = document.querySelectorAll('.orb');
  if (orbs.length && window.matchMedia('(min-width:769px) and (pointer:fine)').matches) {
    document.addEventListener('mousemove', e => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      orbs.forEach((orb, i) => {
        const f = (i + 1) * 10;
        orb.style.transform = `translate(${dx * f}px, ${dy * f}px)`;
      });
    });
  }

  /* ════════════════════════
     PROJECT CARD GLOW
  ════════════════════════ */
  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  * 100).toFixed(1);
      const y = ((e.clientY - r.top)  / r.height * 100).toFixed(1);
      card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(124,58,237,.09) 0%, var(--card) 60%)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = 'var(--card)';
    });
  });

  /* ════════════════════════
     RE-INIT LUCIDE after nav open
  ════════════════════════ */
  if (window.lucide) setTimeout(() => lucide.createIcons(), 150);

});
