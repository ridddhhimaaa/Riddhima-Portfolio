// ===== SLIDING PORTFOLIO ENGINE =====

let currentSlide = 0;
const totalSlides = 5;
const wrapper = document.getElementById('slidesWrapper');
const navPills = document.querySelectorAll('.nav-pill');
const dots = document.querySelectorAll('.slide-dot');

function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    currentSlide = index;
    const offset = -index * 100;
    wrapper.style.transform = `translateX(${offset}vw)`;

    // Update nav pills
    navPills.forEach((pill, i) => {
        pill.classList.toggle('active', i === index);
    });

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    // Trigger fade-in animations for the active slide
    triggerFadeUp(index);
}

function triggerFadeUp(slideIndex) {
    const slide = document.querySelectorAll('.slide')[slideIndex];
    if (!slide) return;
    const elements = slide.querySelectorAll('.fade-up');
    elements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, i * 100);
    });
}

// Nav pill click handlers
navPills.forEach((pill, i) => {
    pill.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(i);
    });
});

// Dot click handlers
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        goToSlide(i);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goToSlide(currentSlide - 1);
    }
});

// Touch / swipe support
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 60) {
        if (diff > 0) {
            goToSlide(currentSlide + 1);
        } else {
            goToSlide(currentSlide - 1);
        }
    }
});

// Mouse wheel navigation (only when not scrolling inside a slide)
document.addEventListener('wheel', (e) => {
    const slide = document.querySelectorAll('.slide')[currentSlide];
    if (!slide) return;

    const isAtTop = slide.scrollTop <= 0;
    const isAtBottom = slide.scrollTop + slide.clientHeight >= slide.scrollHeight - 5;

    if (e.deltaY > 30 && isAtBottom) {
        goToSlide(currentSlide + 1);
    } else if (e.deltaY < -30 && isAtTop) {
        goToSlide(currentSlide - 1);
    }
}, { passive: true });

// Initialize first slide
window.addEventListener('DOMContentLoaded', () => {
    goToSlide(0);
});
