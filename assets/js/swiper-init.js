/* ==========================================================================
   SWIPER INIT - Carrossel de Projetos (Opcional / Responsivo)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização caso a classe swiper seja utilizada em projetos
  if (typeof Swiper !== 'undefined' && document.querySelector('.projects-swiper')) {
    const swiper = new Swiper('.projects-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });
  }
});
