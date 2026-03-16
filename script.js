// Dynamic Background Glow
const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    // Smoothly follow the mouse
    const x = e.clientX;
    const y = e.clientY;
    
    glow.style.left = x + 'px';
    glow.style.top = y + 'px';
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once the animation is done, we can stop observing
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select all elements with the scroll-reveal class
document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// Subtle 3D Tilt Effect for Interest Cards
document.querySelectorAll('.interest-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
});
