import GLightbox from 'glightbox';

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    zoomable: true,
    draggable: true,
    closeOnOutsideClick: true
  });

  lightbox.on('open', () => {
    const slides = document.querySelectorAll('.gslide');
    slides.forEach((slide) => {
      slide.addEventListener('click', (e) => {
        if (
          e.target.classList.contains('gslide') ||
          e.target.classList.contains('gslide-inner-content') ||
          e.target.classList.contains('ginner-container')
        ) {
          lightbox.close();
        }
      });
    });
  });
});
