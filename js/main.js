/**
 * ASTRIX DIGITAL - MAIN CONTROLLER (Vanilla ES6+)
 * Production-Grade Interactive Logic · Zero Frontend Frameworks
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. CONFIGURATION & PROJECT DATASET
  // =========================================================================
  const STUDIO_CONFIG = {
    brandName: 'Astrix Digital',
    contactEmail: 'business.astrixdigital@gmail.com',
    calendlyUrl: 'https://calendly.com/astrix-digital',
    responseTime: 'Within 24 business hours',
    socialLinks: {
      instagram: 'https://www.instagram.com/astrix.digital',
      linkedin: 'https://linkedin.com',
      whatsapp: 'https://wa.me/919662887288?text=I%20have%20a%20query%20for%20website%20development'
    }
  };

  // Demonstration Case Studies Dataset
  const PROJECTS_DATA = {
    aura: {
      id: 'aura',
      title: 'Aura Atelier - Luxury Apparel Flagship',
      subtitle: 'Custom Shopify 2.0 theme engineering with high-fashion editorial aesthetics.',
      category: 'Shopify Storefront',
      discipline: 'Shopify Liquid 2.0 & Custom CSS',
      speed: '0.6s LCP / 99 Mobile Score',
      image: 'assets/projects/aura_fashion.jpg',
      technologies: ['Shopify Liquid', 'Theme App Extensions', 'Storefront API', 'Vanilla JS', 'Tailored CSS'],
      challenge: 'The client needed an ultra-luxurious, minimalist digital storefront that mirrored their physical Milan boutique while maintaining rapid sub-second load times across 14 European markets.',
      solution: 'Astrix Digital designed and coded a clean, bespoke Shopify theme from scratch. We eliminated heavy third-party app scripts in favor of native Liquid sections, implemented an instant AJAX slideout bag with currency auto-switching, and designed responsive lookbook grids.',
      features: [
        'Instant slideout drawer cart with predictive upsells',
        'Geo-IP currency routing and localized VAT calculation',
        'Custom interactive editorial lookbook with shoppable tags',
        'Micro-animated variant selectors and size guide modal',
        '100% headless-grade performance without headless maintenance complexity'
      ]
    },
    pulse: {
      id: 'pulse',
      title: 'Pulse Metrics - Revenue Intelligence Engine',
      subtitle: 'High-throughput SaaS operational telemetry and ARR analytics web application.',
      category: 'Custom SaaS Platform',
      discipline: 'Vanilla ES6+ & SVG Data Telemetry',
      speed: '42ms API Render / 60 FPS',
      image: 'assets/projects/aura_fashion.jpg', // uses fallback or UI Canvas
      technologies: ['Vanilla ES6+', 'SVG Telemetry', 'REST Webhooks', 'CSS Design Tokens', 'Web Workers'],
      challenge: 'Enterprise finance teams required an intuitive real-time ARR streaming dashboard capable of rendering tens of thousands of subscription transactions without layout freezes or sluggish UI responses.',
      solution: 'We engineered a bespoke, lightweight web application featuring hardware-accelerated SVG chart engines, role-based pipeline filters, and asynchronous data crunching using Web Workers.',
      features: [
        'Real-time streaming ARR velocity and MRR cohort curves',
        'Modular drag-and-drop metric workspaces and customizable views',
        'Granular role-based access management and audit trails',
        'Dynamic dark/light mode surface switching using CSS variables',
        'Zero framework bloat - 18KB compressed JavaScript footprint'
      ]
    },
    stride: {
      id: 'stride',
      title: 'Stride Ventures - Investment Portfolio Site',
      subtitle: 'Design-led Webflow CMS experience for an early-stage deep-tech venture firm.',
      category: 'Webflow CMS & Design',
      discipline: 'Webflow Client-First & Custom JS',
      speed: '0.5s First Paint / 100 SEO',
      image: 'assets/projects/stride_architecture.jpg',
      technologies: ['Webflow CMS', 'Client-First Framework', 'Custom JS Animations', 'Semantic HTML5', 'SVG'],
      challenge: 'Stride Ventures wanted to move away from rigid legacy WordPress templates to a design-forward platform their editorial team could update effortlessly without touching developer code.',
      solution: 'We developed an architectural, typography-driven Webflow website following the Client-First framework. We structured interrelated CMS collections for Portfolio Companies, Founder Interviews, and Research Papers.',
      features: [
        'Dynamic multi-filter venture thesis search and industry tags',
        'Automated CMS relationships connecting founders and portfolio investments',
        'Bespoke cursor transitions and smooth scroll section reveals',
        'Accessible keyboard focus states across all interactive filters',
        'Comprehensive 4-breakpoint responsive design down to 320px mobile'
      ]
    },
    lumen: {
      id: 'lumen',
      title: 'Lumen Fine Jewelry - Bespoke Atelier',
      subtitle: 'High-ticket jewelry e-commerce experience with an interactive ring customization tool.',
      category: 'Shopify Plus Storefront',
      discipline: 'Shopify Plus & Interactive JS',
      speed: '0.7s LCP / 99.8% Checkout Reliability',
      image: 'assets/projects/lumen_jewelry.jpg',
      technologies: ['Shopify Plus', 'Custom Ring Configurator', 'Liquid 2.0', 'GIA API Sync', 'CSS Glassmorphism'],
      challenge: 'Selling fine jewelry online requires extraordinary trust, photorealistic detail, and a streamlined consultation booking flow for custom engagement rings.',
      solution: 'Astrix Digital built a high-ticket e-commerce experience featuring an interactive ring customizer, live diamond certification modal, and an integrated private showroom scheduling flow.',
      features: [
        'Interactive metal, carat, and setting selector with instant price recalculation',
        'GIA Diamond spec verification modal with high-res facet previews',
        'One-click private video consultation booking integration',
        'Tiered concierge checkout flow with secure bank-wire options',
        'Optimized responsive media loading for ultra-high-resolution gem photography'
      ]
    },
    nexus: {
      id: 'nexus',
      title: 'Nexus CRM - Enterprise Deal Engine',
      subtitle: 'Custom web application engineered for multi-stage enterprise sales operations.',
      category: 'Custom Admin Dashboard',
      discipline: 'Full-Stack Architecture & CSS Grid',
      speed: '12ms Internal Latency / 100 WCAG AA',
      image: 'assets/projects/stride_architecture.jpg',
      technologies: ['Full-Stack JS', 'REST API', 'Webhooks', 'CSS Grid Pipelines', 'Keyboard Shortcuts'],
      challenge: 'Sales and operations managers needed a specialized pipeline tool to track complex enterprise contracts with custom SLA milestones and automated trigger notifications.',
      solution: 'We built a bespoke CRM application with an accessible drag-and-drop Kanban board, automated deal stage webhooks, and instant keyboard shortcuts for power users.',
      features: [
        'Real-time deal Kanban board with status synchronization',
        'Automated contract generation and webhook trigger notifications',
        'Custom field builder allowing operations to tailor pipeline schemas',
        'Full keyboard navigation support with Vim-style shortcut bindings',
        'Encrypted session management and strict role permissions'
      ]
    },
    verve: {
      id: 'verve',
      title: 'Verve Botanicals - Skincare Storefront',
      subtitle: 'Conversion-optimized organic skincare storefront with custom bundle algorithms.',
      category: 'Conversion E-Commerce',
      discipline: 'Shopify Theme & Subscription UX',
      speed: '0.8s LCP / +42% Average Order Value',
      image: 'assets/projects/verve_botanicals.jpg',
      technologies: ['Shopify Liquid', 'Recharge API', 'Dynamic Bundle Engine', 'Custom Micro-Interactions'],
      challenge: 'Verve had high customer acquisition costs but low cart values. They required an intuitive bundle-and-save mechanic and friction-free subscription enrollment.',
      solution: 'We re-architected their product pages with an interactive 3-step bundle builder, integrated seamless recurring subscriptions, and designed a conversion-focused mobile checkout flow.',
      features: [
        'Step-by-step custom skincare regimen bundle builder with progressive tier discounts',
        'One-click subscribe-and-save toggle with frequency customizer',
        'Sticky add-to-bag navigation bar on mobile viewports',
        'Instant customer review verification badges and ingredient transparency cards',
        'Tested across dozens of mobile devices for smooth thumb-reach usability'
      ]
    }
  };

  // =========================================================================
  // 2. DOM ELEMENTS CACHE
  // =========================================================================
  const elements = {
    header: document.getElementById('header'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileNav: document.getElementById('mobileNav'),
    mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
    navLinks: document.querySelectorAll('.nav-link'),
    currentYear: document.getElementById('currentYear'),
    backToTopBtn: document.getElementById('backToTopBtn'),

    // Work / Portfolio Elements
    projectRailViewport: document.getElementById('projectRailViewport'),
    projectRailTrack: document.getElementById('projectRailTrack'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    railViewBtn: document.getElementById('railViewBtn'),
    gridViewBtn: document.getElementById('gridViewBtn'),
    projectCards: document.querySelectorAll('.project-card'),

    // Modal Elements
    modal: document.getElementById('caseStudyModal'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalTitle: document.getElementById('modalProjectTitle'),
    modalSubtitle: document.getElementById('modalProjectSubtitle'),
    modalCategory: document.getElementById('modalCategory'),
    modalArtwork: document.getElementById('modalArtworkContainer'),
    modalChallenge: document.getElementById('modalChallengeText'),
    modalSolution: document.getElementById('modalSolutionText'),
    modalFeatures: document.getElementById('modalFeaturesList'),
    modalSpecDiscipline: document.getElementById('modalSpecDiscipline'),
    modalSpecSpeed: document.getElementById('modalSpecSpeed'),
    modalTechTags: document.getElementById('modalTechTags'),
    modalDiscussBtn: document.getElementById('modalDiscussBtn'),

    // FAQ Accordion
    accordionHeaders: document.querySelectorAll('.accordion-header'),

    // Contact Form
    projectForm: document.getElementById('projectForm'),
    formAlert: document.getElementById('formAlert'),
    clientNameInput: document.getElementById('clientName'),
    clientEmailInput: document.getElementById('clientEmail'),
    clientCompanyInput: document.getElementById('clientCompany'),
    projectDescInput: document.getElementById('projectDesc'),
    directMailLink: document.getElementById('directMailLink'),
    nameError: document.getElementById('nameError'),
    emailError: document.getElementById('emailError'),
    descError: document.getElementById('descError'),
    serviceEnquiryBtns: document.querySelectorAll('[data-service-select]'),

    // Toast Container
    toastContainer: document.getElementById('toastContainer')
  };

  // Set Dynamic Current Year
  if (elements.currentYear) {
    elements.currentYear.textContent = new Date().getFullYear();
  }

  // =========================================================================
  // 3. TOAST NOTIFICATION UTILITY
  // =========================================================================
  function showToast(message, duration = 3500) {
    if (!elements.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#145DFF" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
      <span>${message}</span>
    `;
    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // =========================================================================
  // 4. HEADER & STICKY NAVIGATION
  // =========================================================================
  function initHeaderScroll() {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      if (scrollPos > 24) {
        elements.header.classList.add('scrolled');
      } else {
        elements.header.classList.remove('scrolled');
      }

      // Back to top visibility
      if (elements.backToTopBtn) {
        if (scrollPos > 400) {
          elements.backToTopBtn.style.opacity = '1';
          elements.backToTopBtn.style.pointerEvents = 'auto';
        } else {
          elements.backToTopBtn.style.opacity = '0.7';
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Back to Top Button
  if (elements.backToTopBtn) {
    elements.backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================================================================
  // 5. MOBILE DRAWER NAVIGATION
  // =========================================================================
  function initMobileMenu() {
    if (!elements.mobileMenuBtn || !elements.mobileNav) return;

    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !elements.mobileNav.classList.contains('open');
      elements.mobileNav.classList.toggle('open', isOpen);
      elements.mobileMenuBtn.classList.toggle('active', isOpen);
      elements.mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
      elements.mobileNav.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    elements.mobileMenuBtn.addEventListener('click', () => toggleMenu());

    elements.mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on Escape Key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && elements.mobileNav.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }

  // =========================================================================
  // 6. SCROLLSPY (ACTIVE NAV LINK HIGHLIGHT)
  // =========================================================================
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id], header[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          elements.navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach((sec) => observer.observe(sec));
  }

  // =========================================================================
  // 7. PROJECT RAIL CONTROLLER (ZERO DUPLICATE CARDS)
  // =========================================================================
  let isRailPaused = false;
  let railAnimId = null;
  let railOffset = 0;
  let railDirection = 1; // 1 = forward, -1 = reverse
  let pauseUntilTime = 0;
  const RAIL_SPEED = 0.7; // Smooth slow motion

  function initProjectRail() {
    const track = elements.projectRailTrack;
    const viewport = elements.projectRailViewport;
    if (!track || !viewport) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Smooth gliding animation without any card duplicates
    function stepRail() {
      if (!isRailPaused && !viewport.classList.contains('grid-mode') && !prefersReducedMotion) {
        const now = performance.now();
        if (now >= pauseUntilTime) {
          const maxScroll = Math.max(0, track.scrollWidth - viewport.clientWidth + 32);

          if (maxScroll <= 0) {
            // All matching cards fit within viewport
            railOffset = 0;
            track.style.transform = 'translate3d(0, 0, 0)';
          } else {
            railOffset += RAIL_SPEED * railDirection;

            if (railOffset >= maxScroll) {
              railOffset = maxScroll;
              railDirection = -1;
              pauseUntilTime = now + 1500; // Pause at end before reversing
            } else if (railOffset <= 0) {
              railOffset = 0;
              railDirection = 1;
              pauseUntilTime = now + 1500; // Pause at start before moving forward
            }

            track.style.transform = `translate3d(-${railOffset}px, 0, 0)`;
          }
        }
      }
      railAnimId = requestAnimationFrame(stepRail);
    }

    railAnimId = requestAnimationFrame(stepRail);

    // Pause on Hover & Focus
    viewport.addEventListener('mouseenter', () => { isRailPaused = true; });
    viewport.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!isDragging) isRailPaused = false;
      }, 400);
    });
    viewport.addEventListener('focusin', () => { isRailPaused = true; });
    viewport.addEventListener('focusout', () => { isRailPaused = false; });

    // Drag Support (Touch on Mobile + Mouse on Desktop)
    let isDragging = false;
    let startX = 0;
    let initialOffset = 0;
    let dragDistance = 0;

    function startDrag(clientX) {
      if (viewport.classList.contains('grid-mode')) return;
      isDragging = true;
      isRailPaused = true;
      startX = clientX;
      initialOffset = railOffset;
      dragDistance = 0;
    }

    function moveDrag(clientX) {
      if (!isDragging || viewport.classList.contains('grid-mode')) return;
      const diff = startX - clientX;
      dragDistance = Math.abs(diff);
      const maxScroll = Math.max(0, track.scrollWidth - viewport.clientWidth + 32);
      railOffset = Math.max(0, Math.min(maxScroll, initialOffset + diff));
      track.style.transform = `translate3d(-${railOffset}px, 0, 0)`;
    }

    function endDrag() {
      if (!isDragging) return;
      isDragging = false;
      setTimeout(() => {
        isRailPaused = false;
      }, 1500);
    }

    // Touch Listeners
    viewport.addEventListener('touchstart', (e) => {
      startDrag(e.touches[0].clientX);
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
      moveDrag(e.touches[0].clientX);
    }, { passive: true });

    viewport.addEventListener('touchend', endDrag);

    // Mouse Listeners for Desktop Drag
    viewport.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        startDrag(e.clientX);
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) {
        moveDrag(e.clientX);
      }
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        endDrag();
      }
    });

    // Suppress modal open when user was dragging cards
    track.addEventListener('click', (e) => {
      if (dragDistance > 6) {
        e.stopPropagation();
        e.preventDefault();
        dragDistance = 0;
      }
    }, true);
  }

  // =========================================================================
  // 8. PROJECT FILTERING & VIEW MODES
  // =========================================================================
  function initProjectFilters() {
    const filterBtns = elements.filterBtns;
    const viewport = elements.projectRailViewport;
    const track = elements.projectRailTrack;
    if (!filterBtns.length || !track) return;

    let activeFilter = 'all';

    // Base labels for category filter buttons
    const baseLabels = {
      all: 'All',
      shopify: 'Shopify',
      webflow: 'Webflow',
      saas: 'SaaS & Web Apps'
    };

    // Calculate category counts from project cards (zero duplicates exist)
    function getCategoryCounts() {
      const counts = { all: 0, shopify: 0, webflow: 0, saas: 0 };
      const cards = track.querySelectorAll('.project-card');
      cards.forEach((card) => {
        counts.all++;
        const cat = card.dataset.category;
        if (cat) {
          counts[cat] = (counts[cat] || 0) + 1;
        }
      });
      return counts;
    }

    // Update filter button labels and active states
    // When a filter is selected, ONLY that filter displays "(count)" in brackets, while other buttons display plain text without brackets
    function updateFilterButtons(selectedCategory) {
      const counts = getCategoryCounts();
      filterBtns.forEach((btn) => {
        const filterKey = btn.dataset.filter;
        const base = btn.getAttribute('data-label') || baseLabels[filterKey] || btn.textContent.replace(/\s*\(\d+\)\s*$/, '').trim();
        const isActive = (filterKey === selectedCategory);

        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');

        if (isActive) {
          const count = counts[filterKey] !== undefined ? counts[filterKey] : (counts.all || 0);
          btn.textContent = `${base} (${count})`;
        } else {
          btn.textContent = base;
        }
      });
    }

    function applyFilterAndMode(category) {
      activeFilter = category || activeFilter;
      const isGrid = viewport.classList.contains('grid-mode');
      const allCards = track.querySelectorAll('.project-card');
      let visibleOriginalCount = 0;

      allCards.forEach((card) => {
        const cat = card.dataset.category;
        const matches = (activeFilter === 'all' || cat === activeFilter);

        if (matches) {
          card.classList.remove('filter-hidden');
          card.style.display = 'flex';
          visibleOriginalCount++;
        } else {
          card.classList.add('filter-hidden');
          card.style.display = 'none';
        }
      });

      // Update Hint Indicator dynamically
      const hintPill = document.querySelector('.rail-interaction-hint .hint-pill');
      if (hintPill) {
        if (isGrid) {
          const categoryLabels = {
            all: 'Selected Case Studies',
            shopify: 'Shopify Storefronts',
            webflow: 'Webflow Platform',
            saas: 'SaaS & Web Applications'
          };
          const label = categoryLabels[activeFilter] || 'Selected Projects';
          hintPill.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
            <span>Showcase Grid · ${visibleOriginalCount} ${label} · Click Any Card for Deep Case Study</span>
          `;
        } else {
          hintPill.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8L22 12L18 16"/><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg>
            <span>Interactive Project Rail · Hover or Drag to Explore · Click Any Card for Deep Case Study</span>
          `;
        }
      }
    }

    // Filter Buttons
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetCategory = btn.dataset.filter;
        activeFilter = targetCategory;

        updateFilterButtons(activeFilter);

        // Reset rail offset and direction
        railOffset = 0;
        railDirection = 1;
        pauseUntilTime = 0;
        track.style.transform = viewport.classList.contains('grid-mode') ? 'none' : 'translate3d(0, 0, 0)';
        applyFilterAndMode(activeFilter);
      });
    });

    // View Switcher (Loop Rail vs Showcase Grid)
    if (elements.railViewBtn && elements.gridViewBtn) {
      elements.railViewBtn.addEventListener('click', () => {
        elements.railViewBtn.classList.add('active');
        elements.gridViewBtn.classList.remove('active');
        viewport.classList.remove('grid-mode');
        // Reset transform to 0 so loop resumes smoothly
        railOffset = 0;
        railDirection = 1;
        pauseUntilTime = 0;
        track.style.transform = 'translate3d(0, 0, 0)';
        isRailPaused = false;
        applyFilterAndMode(activeFilter);
      });

      elements.gridViewBtn.addEventListener('click', () => {
        elements.gridViewBtn.classList.add('active');
        elements.railViewBtn.classList.remove('active');
        viewport.classList.add('grid-mode');
        isRailPaused = true;
        track.style.transform = 'none';
        applyFilterAndMode(activeFilter);
      });
    }

    // Initial button state & filter setup
    updateFilterButtons(activeFilter);
    applyFilterAndMode(activeFilter);
  }

  // =========================================================================
  // 9. CASE STUDY MODAL CONTROLLER
  // =========================================================================
  function initCaseStudyModal() {
    const modal = elements.modal;
    const backdrop = elements.modalBackdrop;
    const closeBtn = elements.modalCloseBtn;
    if (!modal) return;

    function openModal(projectId) {
      const data = PROJECTS_DATA[projectId];
      if (!data) return;

      elements.modalTitle.textContent = data.title;
      elements.modalSubtitle.textContent = data.subtitle;
      elements.modalCategory.textContent = data.category;
      elements.modalChallenge.textContent = data.challenge;
      elements.modalSolution.textContent = data.solution;
      elements.modalSpecDiscipline.textContent = data.discipline;
      elements.modalSpecSpeed.textContent = data.speed;

      // Populate Artwork
      elements.modalArtwork.innerHTML = `
        <img src="${data.image}" alt="${data.title}" loading="lazy">
      `;

      // Populate Features
      elements.modalFeatures.innerHTML = data.features
        .map((f) => `<li>${f}</li>`)
        .join('');

      // Populate Tech Tags
      elements.modalTechTags.innerHTML = data.technologies
        .map((t) => `<span class="spec-tag">${t}</span>`)
        .join('');

      // Open Modal
      modal.hidden = false;
      setTimeout(() => {
        modal.classList.add('open');
      }, 10);
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove('open');
      setTimeout(() => {
        modal.hidden = true;
        document.body.style.overflow = '';
      }, 300);
    }

    // Attach click listeners to cards (both original and clones)
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      if (card) {
        const projectId = card.dataset.projectId;
        if (projectId) {
          openModal(projectId);
        }
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.hidden) {
        closeModal();
      }
    });

    if (elements.modalDiscussBtn) {
      elements.modalDiscussBtn.addEventListener('click', () => {
        closeModal();
      });
    }
  }

  // =========================================================================
  // 10. FAQ ACCORDION CONTROLLER (ACCESSIBLE)
  // =========================================================================
  function initFaqAccordion() {
    const headers = elements.accordionHeaders;
    if (!headers.length) return;

    headers.forEach((header) => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = item.querySelector('.accordion-content');
        const isExpanded = header.getAttribute('aria-expanded') === 'true';

        // Close all other items (Single item open policy)
        headers.forEach((otherHeader) => {
          const otherItem = otherHeader.parentElement;
          const otherContent = otherItem.querySelector('.accordion-content');
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherHeader.setAttribute('aria-expanded', 'false');
            otherContent.hidden = true;
          }
        });

        // Toggle current item
        if (isExpanded) {
          item.classList.remove('active');
          header.setAttribute('aria-expanded', 'false');
          content.hidden = true;
        } else {
          item.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
          content.hidden = false;
        }
      });
    });
  }

  // =========================================================================
  // 11. SERVICES QUICK ENQUIRY LINKS
  // =========================================================================
  function initServiceEnquiries() {
    elements.serviceEnquiryBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetService = btn.dataset.serviceSelect;
        if (!targetService) return;

        const radio = document.querySelector(`input[name="entry.258844178"][value="${targetService}"]`) ||
                      document.querySelector(`input[name="projectType"][value="${targetService}"]`);
        if (radio) {
          radio.checked = true;
          showToast(`Selected project type: ${targetService}`);
        }
      });
    });
  }

  // =========================================================================
  // 12. CONTACT FORM CONTROLLER & GOOGLE FORMS INTEGRATION
  // =========================================================================
  function initContactForm() {
    const form = elements.projectForm;
    const alertBox = elements.formAlert;
    const submitBtn = document.getElementById('submitBtn');
    if (!form) return;

    const GOOGLE_FORM_ENDPOINT = 'https://docs.google.com/forms/d/e/1FAIpQLSdavJXtGoJfA26ZPv6HdMKnIJRtvZJ8nrYmHBntT7_WR7_2zw/formResponse';
    const GOOGLE_ENTRIES = {
      name: 'entry.326407323',
      email: 'entry.942234180',
      company: 'entry.1675962766',
      projectType: 'entry.258844178',
      description: 'entry.1124958374'
    };

    let isSubmitting = false;

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Guard against rapid duplicate clicks
      if (isSubmitting) return;

      let isValid = true;
      if (elements.nameError) elements.nameError.textContent = '';
      if (elements.emailError) elements.emailError.textContent = '';
      if (elements.descError) elements.descError.textContent = '';
      elements.clientNameInput?.classList.remove('invalid');
      elements.clientEmailInput?.classList.remove('invalid');
      elements.projectDescInput?.classList.remove('invalid');

      const nameVal = elements.clientNameInput?.value.trim() || '';
      const emailVal = elements.clientEmailInput?.value.trim() || '';
      const descVal = elements.projectDescInput?.value.trim() || '';
      const companyVal = elements.clientCompanyInput?.value.trim() || '';

      const selectedTypeInput = form.querySelector('input[name="entry.258844178"]:checked') ||
                                form.querySelector('input[name="projectType"]:checked');
      const selectedType = selectedTypeInput?.value || 'Shopify Store';

      if (!nameVal) {
        if (elements.nameError) elements.nameError.textContent = 'Please enter your name.';
        elements.clientNameInput?.classList.add('invalid');
        isValid = false;
      }

      if (!emailVal || !validateEmail(emailVal)) {
        if (elements.emailError) elements.emailError.textContent = 'Please provide a valid work email address.';
        elements.clientEmailInput?.classList.add('invalid');
        isValid = false;
      }

      if (!descVal || descVal.length < 10) {
        if (elements.descError) elements.descError.textContent = 'Please describe your project (minimum 10 characters).';
        elements.projectDescInput?.classList.add('invalid');
        isValid = false;
      }

      if (!isValid) {
        alertBox.hidden = false;
        alertBox.className = 'form-alert error';
        alertBox.textContent = 'Please fill out all required fields before submitting.';
        return;
      }

      // Mark as submitting
      isSubmitting = true;

      // Show submitting state on button
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "<span>Let's Talk</span>";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span>Submitting...</span>
          <svg class="btn-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
          </svg>
        `;
      }

      alertBox.hidden = false;
      alertBox.className = 'form-alert';
      alertBox.style.background = '#EFF6FF';
      alertBox.style.borderColor = '#BFDBFE';
      alertBox.style.color = '#1E40AF';
      alertBox.textContent = 'Submitting your enquiry...';

      // Prepare Google Form submission payload using URLSearchParams
      const formPayload = new URLSearchParams();
      formPayload.append(GOOGLE_ENTRIES.name, nameVal);
      formPayload.append(GOOGLE_ENTRIES.email, emailVal);
      formPayload.append(GOOGLE_ENTRIES.company, companyVal);
      formPayload.append(GOOGLE_ENTRIES.projectType, selectedType);
      formPayload.append(GOOGLE_ENTRIES.description, descVal);

      try {
        // Send single asynchronous POST to Google Forms in no-cors mode
        await fetch(GOOGLE_FORM_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formPayload.toString()
        });
      } catch (err) {
        // Fallback to submitting via hidden iframe ONLY if fetch threw a network error
        try {
          form.submit();
        } catch (_) {}
      }

      // Display success message and notification toast
      alertBox.hidden = false;
      alertBox.className = 'form-alert success';
      alertBox.style.background = '';
      alertBox.style.borderColor = '';
      alertBox.style.color = '';
      alertBox.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <strong style="font-size: 0.95rem;">✓ Thank you, ${nameVal}!</strong>
          <span>Your project enquiry has been submitted successfully to our team. We've recorded your request for <strong>${selectedType}</strong> and will follow up with you at <strong>${emailVal}</strong> within 24 hours.</span>
          <div style="margin-top: 6px; padding-top: 10px; border-top: 1px dashed rgba(6, 95, 70, 0.25); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px;">
            <span style="font-size: 0.825rem; font-weight: 500; color: #065F46;">Prefer to discuss your project right away?</span>
            <a href="${STUDIO_CONFIG.calendlyUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; font-size: 0.825rem; font-weight: 700; color: #047857; text-decoration: underline;">
              <span>📅 Book Discovery Call on Calendly &rarr;</span>
            </a>
          </div>
        </div>
      `;

      showToast(`✓ Project enquiry submitted for ${nameVal}! We'll be in touch.`);

      // Reset form fields
      form.reset();

      // Reset button state and submission lock
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
        isSubmitting = false;
      }, 1500);
    });

    if (elements.directMailLink) {
      elements.directMailLink.addEventListener('click', (e) => {
        // Allow default mailto, but also copy to clipboard
        navigator.clipboard?.writeText(STUDIO_CONFIG.contactEmail).then(() => {
          showToast(`Copied ${STUDIO_CONFIG.contactEmail} to clipboard`);
        }).catch(() => { });
      });
    }
  }

  function initProcessTimeline() {
    const processCards = document.querySelectorAll('.process-card');
    const progressBar = document.getElementById('timelineProgress');
    if (!processCards.length || !progressBar) return;

    processCards.forEach((card, idx) => {
      card.addEventListener('mouseenter', () => {
        const pct = ((idx + 1) / processCards.length) * 100;
        progressBar.style.setProperty('--progress-width', `${pct}%`);
        progressBar.querySelector('::after')?.style?.setProperty('width', `${pct}%`);
      });
    });
  }

  // =========================================================================
  // 14. SHOPIFY PDP JEWELRY CUSTOMIZER (METAL VARIANT SWITCHER)
  // =========================================================================
  function initShopifyPdpCustomizer() {
    const pdpMockup = document.querySelector('.interactive-pdp-mockup');
    if (!pdpMockup) return;

    const ringImg = document.getElementById('pdpJewelryImg');
    const metalTitle = document.getElementById('pdpMetalTitle');
    const metalName = document.getElementById('pdpMetalName');
    const priceEl = document.getElementById('pdpPrice');
    const btnPriceEl = document.getElementById('pdpBtnPrice');
    const addToCartBtn = document.getElementById('pdpAddToCartBtn');
    const swatches = pdpMockup.querySelectorAll('.swatch[data-metal]');

    if (!swatches.length) return;

    const JEWELRY_METALS = {
      'gold': {
        name: '18k Yellow Gold',
        price: '$2,100',
        image: 'assets/projects/ring_yellow_gold.jpg',
        alt: 'Solstice Pavé Band in 18k Yellow Gold'
      },
      'white-gold': {
        name: '18k White Gold',
        price: '$2,250',
        image: 'assets/projects/ring_white_gold.jpg',
        alt: 'Solstice Pavé Band in 18k White Gold'
      },
      'rose-gold': {
        name: '18k Rose Gold',
        price: '$2,100',
        image: 'assets/projects/ring_rose_gold.jpg',
        alt: 'Solstice Pavé Band in 18k Rose Gold'
      }
    };

    // Preload all 3 jewelry images in background for instant switching
    Object.values(JEWELRY_METALS).forEach((item) => {
      const preload = new Image();
      preload.src = item.image;
    });

    let currentMetal = 'gold';

    function setMetal(metalKey) {
      const metalData = JEWELRY_METALS[metalKey];
      if (!metalData) return;

      currentMetal = metalKey;

      // Update swatch active states
      swatches.forEach((swatch) => {
        const isMatch = swatch.dataset.metal === metalKey;
        swatch.classList.toggle('active', isMatch);
        swatch.setAttribute('aria-checked', isMatch ? 'true' : 'false');
      });

      // Update labels and prices
      if (metalTitle) metalTitle.textContent = metalData.name;
      if (metalName) metalName.textContent = metalData.name;
      if (priceEl) priceEl.textContent = metalData.price;
      if (btnPriceEl) btnPriceEl.textContent = metalData.price;

      // Swap image with smooth crossfade
      if (ringImg) {
        ringImg.classList.add('swapping');
        const imgLoader = new Image();
        imgLoader.onload = () => {
          ringImg.src = metalData.image;
          ringImg.alt = metalData.alt;
          ringImg.classList.remove('swapping');
        };
        imgLoader.onerror = () => {
          ringImg.src = metalData.image;
          ringImg.classList.remove('swapping');
        };
        imgLoader.src = metalData.image;
      }
    }

    // Attach click listeners to swatches
    swatches.forEach((swatch) => {
      swatch.addEventListener('click', (e) => {
        e.preventDefault();
        const metalKey = swatch.dataset.metal;
        if (metalKey) setMetal(metalKey);
      });

      // Accessible keyboard control
      swatch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const metalKey = swatch.dataset.metal;
          if (metalKey) setMetal(metalKey);
        }
      });
    });

    // Add to cart interactive feedback
    if (addToCartBtn) {
      let resetTimeout = null;
      addToCartBtn.addEventListener('click', () => {
        const currentData = JEWELRY_METALS[currentMetal] || JEWELRY_METALS.gold;
        addToCartBtn.textContent = `✓ Added ${currentData.name}!`;
        addToCartBtn.style.background = 'var(--color-primary)';
        if (resetTimeout) clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => {
          addToCartBtn.innerHTML = `Add to Bag - <span id="pdpBtnPrice">${currentData.price}</span>`;
          addToCartBtn.style.background = '';
        }, 1800);
      });
    }

    // Ensure default is 18k Yellow Gold
    setMetal('gold');
  }

  // =========================================================================
  // 15. SAAS & WEB APPLICATION DASHBOARD INTERACTION (ANALYTICS, PIPELINE, API KEYS)
  // =========================================================================
  function initSaasDashboardViews() {
    const dashboardMock = document.querySelector('.saas-dashboard-mock');
    if (!dashboardMock) return;

    const tabs = dashboardMock.querySelectorAll('.dashboard-sidebar .side-item[data-view]');
    const views = dashboardMock.querySelectorAll('.dashboard-main .dash-view');
    const titleEl = document.getElementById('saasMockupTitle');
    const copyBtns = dashboardMock.querySelectorAll('.btn-copy-apikey');
    const generateBtn = document.getElementById('btnGenerateApiKey');
    const apiKeyFeedback = document.getElementById('apiKeyFeedback');
    const apiKeysList = dashboardMock.querySelector('.api-keys-list');

    if (!tabs.length || !views.length) return;

    const VIEW_TITLES = {
      analytics: 'Enterprise Architecture · Analytics',
      pipeline: 'Enterprise Architecture · Pipeline & Deals',
      apikeys: 'Enterprise Architecture · API Keys & Credentials'
    };

    function setActiveView(viewName) {
      if (!viewName) return;

      // Update sidebar tabs
      tabs.forEach((tab) => {
        const isMatch = tab.dataset.view === viewName;
        tab.classList.toggle('active', isMatch);
        tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });

      // Update view panels
      views.forEach((view) => {
        const isMatch = view.id === `view-${viewName}`;
        view.classList.toggle('active', isMatch);
      });

      // Update title text
      if (titleEl && VIEW_TITLES[viewName]) {
        titleEl.textContent = VIEW_TITLES[viewName];
      }
    }

    // Tab event listeners
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const view = tab.dataset.view;
        setActiveView(view);
      });

      tab.addEventListener('keydown', (e) => {
        let targetIndex = -1;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          targetIndex = (index + 1) % tabs.length;
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          targetIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (e.key === 'Home') {
          targetIndex = 0;
        } else if (e.key === 'End') {
          targetIndex = tabs.length - 1;
        }

        if (targetIndex >= 0) {
          e.preventDefault();
          tabs[targetIndex].focus();
          setActiveView(tabs[targetIndex].dataset.view);
        }
      });
    });

    // Copy API Key handler
    copyBtns.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const token = btn.dataset.token || 'astx_live_98f482a0b411d3a1';
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(token);
          } else {
            const temp = document.createElement('textarea');
            temp.value = token;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand('copy');
            document.body.removeChild(temp);
          }
        } catch (_) { }

        btn.classList.add('copied');
        btn.innerHTML = '<span>✓ Copied</span>';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = '<span>Copy</span>';
        }, 1500);
      });
    });

    // Generate New Key handler
    if (generateBtn) {
      generateBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const randomHex = Math.random().toString(36).substring(2, 8);
        const newKeyPrefix = `astx_live_${randomHex}`;
        const newKeyFull = `${newKeyPrefix}8491c49f82d1`;

        if (apiKeyFeedback) {
          apiKeyFeedback.textContent = `✓ Generated ${newKeyPrefix}•••`;
          apiKeyFeedback.style.opacity = '1';
          setTimeout(() => {
            apiKeyFeedback.style.opacity = '0';
          }, 2400);
        }

        if (apiKeysList) {
          const newItem = document.createElement('div');
          newItem.className = 'api-key-item';
          newItem.innerHTML = `
            <div class="api-key-top">
              <div class="api-key-identity">
                <span class="api-key-name">client_agent_${randomHex}</span>
                <span class="api-key-scope">Scope: read:telemetry</span>
              </div>
              <span class="api-status-badge badge-live">● Live</span>
            </div>
            <div class="api-key-box">
              <code class="api-key-string">${newKeyPrefix}••••••••72a4</code>
              <button type="button" class="btn-copy-apikey" data-token="${newKeyFull}" title="Copy API Key" aria-label="Copy newly created API key">
                <span>Copy</span>
              </button>
            </div>
          `;
          const copyNewBtn = newItem.querySelector('.btn-copy-apikey');
          if (copyNewBtn) {
            copyNewBtn.addEventListener('click', async () => {
              try {
                if (navigator.clipboard) await navigator.clipboard.writeText(newKeyFull);
              } catch (_) { }
              copyNewBtn.classList.add('copied');
              copyNewBtn.innerHTML = '<span>✓ Copied</span>';
              setTimeout(() => {
                copyNewBtn.classList.remove('copied');
                copyNewBtn.innerHTML = '<span>Copy</span>';
              }, 1500);
            });
          }
          apiKeysList.prepend(newItem);
        }
      });
    }
  }

  // =========================================================================
  // 16. WEBFLOW DESIGNER BREAKPOINT SWITCHER (DESKTOP, TABLET, MOBILE)
  // =========================================================================
  function initWebflowBreakpointSwitcher() {
    const bpContainer = document.querySelector('.breakpoint-selectors');
    const viewportFrame = document.getElementById('wfViewportFrame');
    const titleEl = document.getElementById('wfMockupTitle');
    const labelEl = document.getElementById('wfViewportLabel');
    const tagEl = document.getElementById('wfResponsiveTag');

    if (!bpContainer || !viewportFrame) return;

    const bpButtons = bpContainer.querySelectorAll('.bp[data-bp]');
    if (!bpButtons.length) return;

    const BREAKPOINTS = {
      desktop: {
        title: 'Webflow Designer · Desktop',
        tag: 'Desktop View',
        className: 'view-desktop'
      },
      tablet: {
        title: 'Webflow Designer · Tablet',
        tag: 'Tablet View',
        className: 'view-tablet'
      },
      mobile: {
        title: 'Webflow Designer · Mobile',
        tag: 'Mobile View',
        className: 'view-mobile'
      }
    };

    function setBreakpoint(bpKey) {
      const config = BREAKPOINTS[bpKey];
      if (!config) return;

      // Update button active states and aria attributes
      bpButtons.forEach((btn) => {
        const isMatch = btn.dataset.bp === bpKey;
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });

      // Update viewport container class
      viewportFrame.classList.remove('view-desktop', 'view-tablet', 'view-mobile');
      viewportFrame.classList.add(config.className);

      // Update titles and labels
      if (titleEl) titleEl.textContent = config.title;
      if (labelEl) labelEl.textContent = config.tag;
      if (tagEl) tagEl.textContent = config.tag;
    }

    bpButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const bp = btn.dataset.bp;
        if (bp) setBreakpoint(bp);
      });

      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const bp = btn.dataset.bp;
          if (bp) setBreakpoint(bp);
        }
      });
    });

    // Default to desktop
    setBreakpoint('desktop');
  }

  // =========================================================================
  // 17. DESIGN SYSTEM TOKEN ARCHITECTURE (PRIMARY, INK, SURFACE DYNAMIC SWITCHER)
  // =========================================================================
  function initDesignSystemTokenSwitcher() {
    const dsContainer = document.querySelector('.design-system-mock');
    if (!dsContainer) return;

    const tabButtons = dsContainer.querySelectorAll('.ds-chip[data-token]');
    const tokenDot = document.getElementById('dsTokenDot');
    const mockupTitle = document.getElementById('dsMockupTitle');
    const tokenTitle = document.getElementById('dsTokenTitle');
    const contrastBadge = document.getElementById('dsContrastBadge');
    const tokenDesc = document.getElementById('dsTokenDesc');
    const btnPrimary = document.getElementById('dsBtnPrimary');
    const btnSecondary = document.getElementById('dsBtnSecondary');
    const pillStatus = document.getElementById('dsPillStatus');
    const tokenCard = document.getElementById('dsTokenCard');

    if (!tabButtons.length) return;

    const DS_TOKENS = {
      primary: {
        name: 'primary',
        topbarTitle: 'Token Architecture · Primary',
        dotColor: 'var(--color-primary)',
        title: '--color-primary · Electric Studio Blue',
        badgeText: 'Contrast: 4.6:1 (AA)',
        badgeBg: '#E0E7FF',
        badgeColor: '#4338CA',
        desc: 'Core interactive accent engineered for brand presence, primary calls-to-action, active indicators, and focus states.',
        btnPrimaryText: 'Primary CTA',
        btnPrimaryBg: 'var(--color-primary)',
        btnPrimaryColor: '#FFFFFF',
        btnPrimaryBorder: '1px solid transparent',
        btnPrimaryShadow: '0 2px 8px rgba(20, 93, 255, 0.28)',
        btnSecondaryText: 'Secondary CTA',
        btnSecondaryBg: '#FFFFFF',
        btnSecondaryColor: 'var(--color-primary)',
        btnSecondaryBorder: '1px solid rgba(20, 93, 255, 0.3)',
        pillText: 'Token: Active',
        pillBg: 'rgba(20, 93, 255, 0.1)',
        pillColor: 'var(--color-primary)'
      },
      ink: {
        name: 'ink',
        topbarTitle: 'Token Architecture · Ink',
        dotColor: 'var(--color-ink)',
        title: '--color-ink · Obsidian Typography & Frame',
        badgeText: 'Contrast: 18.2:1 (AAA)',
        badgeBg: '#101114',
        badgeColor: '#FFFFFF',
        desc: 'Deep obsidian black engineered for typographic hierarchy, editorial body copy, and maximum readability across light viewports.',
        btnPrimaryText: 'Obsidian Action',
        btnPrimaryBg: 'var(--color-ink)',
        btnPrimaryColor: '#FFFFFF',
        btnPrimaryBorder: '1px solid transparent',
        btnPrimaryShadow: '0 2px 8px rgba(16, 17, 20, 0.25)',
        btnSecondaryText: 'Text CTA',
        btnSecondaryBg: '#FFFFFF',
        btnSecondaryColor: 'var(--color-ink)',
        btnSecondaryBorder: '1px solid var(--color-ink)',
        pillText: 'Token: Applied',
        pillBg: 'rgba(16, 17, 20, 0.08)',
        pillColor: 'var(--color-ink)'
      },
      surface: {
        name: 'surface',
        topbarTitle: 'Token Architecture · Surface',
        dotColor: '#CBD5E1',
        title: '--color-surface · Neutral Canvas Tint',
        badgeText: '98.2% Luma Neutral',
        badgeBg: '#EDF2F7',
        badgeColor: '#475569',
        desc: 'Ultra-clean background canvas tone providing a soft, non-glare foundation for cards, dashboards, and structured UI components.',
        btnPrimaryText: 'Surface Layer 01',
        btnPrimaryBg: '#F1F4F9',
        btnPrimaryColor: 'var(--color-ink)',
        btnPrimaryBorder: '1px solid #CBD5E1',
        btnPrimaryShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        btnSecondaryText: 'Surface Layer 02',
        btnSecondaryBg: '#FFFFFF',
        btnSecondaryColor: 'var(--color-ink-muted)',
        btnSecondaryBorder: '1px solid #E2E8F0',
        pillText: 'Token: Foundation',
        pillBg: '#F6F7FB',
        pillColor: '#64748B'
      }
    };

    function setToken(tokenKey) {
      const config = DS_TOKENS[tokenKey];
      if (!config) return;

      // Update tab active state and accessibility attributes
      tabButtons.forEach((btn) => {
        const isMatch = btn.dataset.token === tokenKey;
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });

      // Update dot & topbar title
      if (tokenDot) tokenDot.style.background = config.dotColor;
      if (mockupTitle) mockupTitle.textContent = config.topbarTitle;

      // Update specification card
      if (tokenTitle) tokenTitle.textContent = config.title;
      if (tokenDesc) tokenDesc.textContent = config.desc;
      if (contrastBadge) {
        contrastBadge.textContent = config.badgeText;
        contrastBadge.style.background = config.badgeBg;
        contrastBadge.style.color = config.badgeColor;
      }

      // Update interactive components
      if (btnPrimary) {
        btnPrimary.textContent = config.btnPrimaryText;
        btnPrimary.style.background = config.btnPrimaryBg;
        btnPrimary.style.color = config.btnPrimaryColor;
        btnPrimary.style.border = config.btnPrimaryBorder;
        btnPrimary.style.boxShadow = config.btnPrimaryShadow;
      }

      if (btnSecondary) {
        btnSecondary.textContent = config.btnSecondaryText;
        btnSecondary.style.background = config.btnSecondaryBg;
        btnSecondary.style.color = config.btnSecondaryColor;
        btnSecondary.style.border = config.btnSecondaryBorder;
      }

      if (pillStatus) {
        pillStatus.textContent = config.pillText;
        pillStatus.style.background = config.pillBg;
        pillStatus.style.color = config.pillColor;
      }

      // Subtle pulse feedback on card
      if (tokenCard) {
        tokenCard.style.transform = 'scale(0.995)';
        setTimeout(() => {
          tokenCard.style.transform = '';
        }, 120);
      }
    }

    tabButtons.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tokenKey = btn.dataset.token;
        if (tokenKey) setToken(tokenKey);
      });

      btn.addEventListener('keydown', (e) => {
        let targetIndex = -1;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          targetIndex = (index + 1) % tabButtons.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          targetIndex = (index - 1 + tabButtons.length) % tabButtons.length;
        }

        if (targetIndex >= 0) {
          e.preventDefault();
          tabButtons[targetIndex].focus();
          setToken(tabButtons[targetIndex].dataset.token);
        }
      });
    });

    // Default to primary token
    setToken('primary');
  }

  // =========================================================================
  // INITIALIZE EVERYTHING ON DOM READY
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileMenu();
    initScrollSpy();
    initProjectRail();
    initProjectFilters();
    initCaseStudyModal();
    initFaqAccordion();
    initServiceEnquiries();
    initContactForm();
    initProcessTimeline();
    initShopifyPdpCustomizer();
    initSaasDashboardViews();
    initWebflowBreakpointSwitcher();
    initDesignSystemTokenSwitcher();

    console.log('⚡ Astrix Digital - Studio System initialized successfully.');
  });

})();
