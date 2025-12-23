import GLightbox from 'glightbox';

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    zoomable: false,
    draggable: false,
    closeOnOutsideClick: false,
    openEffect: 'zoom',
    closeEffect: 'zoom',
    slideEffect: 'slide',
    dragAutoSnap: true
  });

  let imgState = {
    scale: 1,
    x: 0,
    y: 0,
    isDragging: false,
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    initialPinchDistance: 0,
    initialPinchScale: 1
  };

  const globalClickHandler = (e) => {
    if (e.target.closest('.gbtn')) return;
    const clickedImage = e.target.closest('.gslide-media');
    const clickedDesc = e.target.closest('.gslide-description');
    if (!clickedImage && !clickedDesc) {
      lightbox.close();
    }
  };

  lightbox.on('open', () => {
    document.addEventListener('click', globalClickHandler, true);
    document.addEventListener('wheel', handleWheel, { passive: false });
    const activeSlide = document.querySelector('.gslide.current');
    if (activeSlide) setupInteractions(activeSlide);
  });

  lightbox.on('close', () => {
    document.removeEventListener('click', globalClickHandler, true);
    document.removeEventListener('wheel', handleWheel);
    resetState();
  });

  lightbox.on('slide_changed', () => {
    resetState();
    const activeSlide = document.querySelector('.gslide.current');
    if (activeSlide) setupInteractions(activeSlide);
  });

  function resetState() {
    imgState = { scale: 1, x: 0, y: 0, isDragging: false, startX: 0, startY: 0, initialX: 0, initialY: 0, initialPinchDistance: 0, initialPinchScale: 1 };
    const images = document.querySelectorAll('.gslide img');
    images.forEach(img => {
      img.style.transform = '';
      img.style.cursor = '';
      img.style.touchAction = '';
    });
  }

  function updateTransform(img) {
    imgState.scale = Math.max(1, Math.min(5, imgState.scale));

    if (imgState.scale <= 1) {
      imgState.scale = 1;
      imgState.x = 0;
      imgState.y = 0;
      img.style.cursor = '';
    } else {
      img.style.cursor = 'grab';
    }

    img.style.transform = `translate3d(${imgState.x}px, ${imgState.y}px, 0) scale(${imgState.scale})`;
  }

  function handleWheel(e) {
    const activeSlide = document.querySelector('.gslide.current');
    if (!activeSlide) return;
    const img = activeSlide.querySelector('.gslide-image img');
    if (!img) return;

    e.preventDefault();

    const delta = Math.sign(e.deltaY) * -0.2;
    imgState.scale += delta;

    updateTransform(img);
  }

  function setupInteractions(slide) {
    const img = slide.querySelector('.gslide-image img');
    if (!img) return;

    img.style.touchAction = 'none';

    let lastTap = 0;
    img.addEventListener('click', (e) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      if (tapLength < 300 && tapLength > 0) {
        e.preventDefault();
        e.stopPropagation();
        if (imgState.scale > 1) {
          imgState.scale = 1;
        } else {
          imgState.scale = 2.5;
        }
        updateTransform(img);
      }
      lastTap = currentTime;
    });

    const onStart = (x, y) => {
      if (imgState.scale > 1) {
        imgState.isDragging = true;
        imgState.startX = x;
        imgState.startY = y;
        imgState.initialX = imgState.x;
        imgState.initialY = imgState.y;
        img.style.cursor = 'grabbing';
      }
    };

    img.addEventListener('mousedown', (e) => {
      if (imgState.scale > 1) {
          e.preventDefault();
          e.stopPropagation();
      }
      onStart(e.clientX, e.clientY);
    });

    img.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        onStart(e.touches[0].clientX, e.touches[0].clientY);
      } else if (e.touches.length === 2) {
        imgState.isDragging = false;
        imgState.initialPinchDistance = getDistance(e.touches);
        imgState.initialPinchScale = imgState.scale;
      }
    }, { passive: false });

    const onMove = (x, y) => {
      if (imgState.isDragging && imgState.scale > 1) {
        const deltaX = x - imgState.startX;
        const deltaY = y - imgState.startY;
        imgState.x = imgState.initialX + deltaX;
        imgState.y = imgState.initialY + deltaY;
        updateTransform(img);
      }
    };

    window.addEventListener('mousemove', (e) => {
      if (imgState.isDragging) {
        e.preventDefault();
        onMove(e.clientX, e.clientY);
      }
    });

    img.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (e.touches.length === 1) {
        onMove(e.touches[0].clientX, e.touches[0].clientY);
      } else if (e.touches.length === 2) {
        const currentDistance = getDistance(e.touches);
        if (imgState.initialPinchDistance > 0) {
          const pinchRatio = currentDistance / imgState.initialPinchDistance;
          imgState.scale = imgState.initialPinchScale * pinchRatio;
          updateTransform(img);
        }
      }
    }, { passive: false });

    const onEnd = () => {
      imgState.isDragging = false;
      if (imgState.scale > 1) img.style.cursor = 'grab';
    };

    window.addEventListener('mouseup', onEnd);
    img.addEventListener('touchend', onEnd);
  }

  function getDistance(touches) {
    return Math.hypot(
      touches[0].clientX - touches[1].clientX,
      touches[0].clientY - touches[1].clientY
    );
  }
});
