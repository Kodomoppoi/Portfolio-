/* ==========================================================================
   MAIN JS - Janeiro Portfolio Interactivity
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      navMenu.classList.toggle('nav-menu-open');
    });
  }

  // 2. Smooth Scroll for Anchor Links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Close mobile menu after clicking
          if (window.innerWidth <= 600 && navMenu) {
            navMenu.style.display = 'none';
          }
        }
      }
    });
  });

  // 3. Quick Copy for Email
  const emailItem = document.querySelector('a[href^="mailto:"]');
  if (emailItem) {
    emailItem.addEventListener('click', (e) => {
      // Optional: You can copy or let default mailto trigger
      console.log('Abrindo cliente de e-mail...');
    });
  }

  // 4. Console greeting
  console.log('%c Janeiro Portfolio %c Pronto para deploy no GitHub Pages 🚀', 'background: #3a2c24; color: #faf6f0; font-weight: bold; padding: 4px 8px; border-radius: 4px;', 'color: #3d3128;');
});
