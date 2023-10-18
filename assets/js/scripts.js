const track = document.getElementById("image-track");
let isDragging = false;
let startX;

track.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX;
    track.dataset.startX = track.style.transform ? parseInt(track.style.transform.split('(')[1]) : 0;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});

window.addEventListener('mousemove', e => {
    if (!isDragging) return;

    const x = parseInt(track.dataset.startX);
    const deltaX = e.clientX - startX;
    
    const newPosition = x + deltaX;

    const maxPosition = 0; // it shouldn't move to the right beyond its starting position
    const minPosition = -(track.scrollWidth - window.innerWidth); // max left drag
    
    const boundedPosition = Math.max(Math.min(newPosition, maxPosition), minPosition);
    track.style.transform = `translateX(${boundedPosition}px)`;
    
});
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    freeMode: true,
    mousewheel: {
        releaseOnEdges: true,
    },
    grabCursor: true,
});
