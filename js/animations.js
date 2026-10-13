/**
 * ASTRIX DIGITAL - MOTION & ANIMATION SYSTEM
 * Lightweight, hardware-accelerated animations · IntersectionObserver reveals
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // =========================================================================
  // 1. SCROLL-TRIGGERED ENTRANCE REVEALS
  // =========================================================================
  function initScrollReveals() {
    if (prefersReducedMotion) return;

    const revealElements = document.querySelectorAll(
      '.reveal-fade, .service-panel, .why-card, .process-card, .tech-card, .expect-card, .accordion-item'
    );

    if (!revealElements.length) return;

    // Set initial transition styles
    revealElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.willChange = 'opacity, transform';
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1
    });

    revealElements.forEach((el) => observer.observe(el));
  }

  // =========================================================================
  // 2. HERO INTERACTIVE MOUSE PARALLAX TILT (DESKTOP ONLY)
  // =========================================================================
  function initHeroParallax() {
    if (prefersReducedMotion || window.innerWidth < 1024) return;

    const heroSection = document.getElementById('hero');
    const heroArtStage = document.querySelector('.hero-art-stage');
    if (!heroSection || !heroArtStage) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isMoving = false;

    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      targetX = x * 14; // max tilt degrees
      targetY = -y * 14;

      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(updateTilt);
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
    });

    function updateTilt() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      heroArtStage.style.transform = `perspective(1000px) rotateY(${currentX.toFixed(2)}deg) rotateX(${currentY.toFixed(2)}deg)`;

      if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
        requestAnimationFrame(updateTilt);
      } else {
        isMoving = false;
      }
    }
  }

  // =========================================================================
  // 3. SCROLL-LINKED PROCESS TIMELINE PROGRESS BAR
  // =========================================================================
  function initScrollTimeline() {
    const processSection = document.getElementById('process');
    const timelineBar = document.getElementById('timelineProgress');
    if (!processSection || !timelineBar || prefersReducedMotion) return;

    function handleScroll() {
      const rect = processSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const totalDistance = rect.height + windowHeight;
        const currentProgress = (windowHeight - rect.top) / totalDistance;
        const clampedPct = Math.min(Math.max(currentProgress * 100, 10), 100);

        const fillEl = timelineBar.querySelector('::after');
        timelineBar.style.setProperty('--timeline-fill', `${clampedPct}%`);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // =========================================================================
  // INITIALIZATION
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveals();
    initHeroParallax();
    initScrollTimeline();
  });

})();
