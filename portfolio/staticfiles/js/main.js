// ===== VERTICAL SCROLLING ENGINE =====

const navPills = document.querySelectorAll('.nav-pill');
const dots = document.querySelectorAll('.slide-dot');
const slides = document.querySelectorAll('.slide');

// Smooth scroll to a specific index
function scrollToSection(index) {
    if (index < 0 || index >= slides.length) return;
    slides[index].scrollIntoView({ behavior: 'smooth' });
}

// Nav pill click handlers
navPills.forEach((pill, i) => {
    pill.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(i);
    });
});

// Dot click handlers
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        scrollToSection(i);
    });
});

// Intersection Observer to highlight active section on scroll and trigger animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // Trigger when 30% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Find index of intersecting slide
            const index = Array.from(slides).indexOf(entry.target);
            
            // Highlight nav pills
            navPills.forEach((pill, i) => pill.classList.toggle('active', i === index));
            
            // Highlight dots
            dots.forEach((dot, i) => dot.classList.toggle('active', i === index));

            // Trigger animations
            const elements = entry.target.querySelectorAll('.fade-up');
            elements.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, i * 100);
            });
        }
    });
}, observerOptions);

// Observe all slides
slides.forEach(slide => {
    observer.observe(slide);
});

// Trigger animations for the first section immediately on load
window.addEventListener('DOMContentLoaded', () => {
    const homeElements = slides[0].querySelectorAll('.fade-up');
    homeElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, i * 100);
    });
});
