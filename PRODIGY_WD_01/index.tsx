document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('main-nav');
  const logoBox = document.getElementById('logo-box');
  const logoSuffix = document.getElementById('logo-suffix');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileClose = document.getElementById('mobile-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  /**
   * 1. Scroll Interactivity
   * Handles the transition of the header from transparent to frosted-glass white.
   */
  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    
    if (nav && logoBox && logoSuffix) {
      if (isScrolled) {
        nav.classList.add('header-scrolled');
        nav.classList.remove('py-6');
        logoBox.classList.remove('bg-indigo-600');
        logoBox.classList.add('bg-indigo-700');
        logoSuffix.classList.add('text-indigo-700');
        logoSuffix.classList.remove('text-indigo-600');
      } else {
        nav.classList.remove('header-scrolled');
        nav.classList.add('py-6');
        logoBox.classList.add('bg-indigo-600');
        logoBox.classList.remove('bg-indigo-700');
        logoSuffix.classList.remove('text-indigo-700');
        logoSuffix.classList.add('text-indigo-600');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /**
   * 2. Section Highlighting (Active Links)
   * Uses Intersection Observer for efficient tracking of visible sections.
   */
  const observerOptions = {
    root: null,
    threshold: 0.4,
    rootMargin: '-10% 0px -10% 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll('section').forEach(section => observer.observe(section));

  /**
   * 3. Mobile Menu Logic
   * Clean transitions for the mobile drawer.
   */
  const toggleMobileMenu = (open: boolean) => {
    if (!mobileMenu) return;
    if (open) {
      mobileMenu.classList.remove('translate-x-full');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.add('translate-x-full');
      document.body.style.overflow = 'auto';
    }
  };

  mobileToggle?.addEventListener('click', () => toggleMobileMenu(true));
  mobileClose?.addEventListener('click', () => toggleMobileMenu(false));
  mobileLinks.forEach(link => link.addEventListener('click', () => toggleMobileMenu(false)));
});