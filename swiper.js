  document.addEventListener('DOMContentLoaded', function() {
    // Check if Swiper is available
    if (typeof Swiper !== 'undefined') {
      const swiper = new Swiper('.swiper', {
        slidesPerView: 1,          // Show only 1 slide at a time
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,      // Center the active slide
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // Pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        
        // Remove breakpoints to ensure only one slide is shown at all screen sizes
        // Or set all breakpoints to slidesPerView: 1
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30
          }
        }
      });
      console.log('Swiper initialized');
    } else {
      console.error('Swiper library not loaded');
    }
  });