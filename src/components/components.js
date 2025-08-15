// Main Components Loader
// This file loads and initializes all components

// Load all component files
function loadComponents() {
    // Initialize header
    if (typeof initHeader === 'function') {
        initHeader();
    }
    
    // Initialize footer
    if (typeof initFooter === 'function') {
        initFooter();
    }
    
    // Initialize other common functionality
    initCommonFunctionality();
}

// Common functionality across all pages
function initCommonFunctionality() {
    // Scroll animations
    initScrollAnimations();

    // Smooth scrolling for anchor links
    initSmoothScrolling();

    // Initialize Swiper for testimonials
    initTestimonialSwiper();
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.getElementById('main-header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize testimonial swiper
function initTestimonialSwiper() {
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
        const testimonialSwiper = document.querySelector('.testimonial-swiper');
        if (testimonialSwiper && typeof Swiper !== 'undefined') {
            new Swiper('.testimonial-swiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }
            });
        }
    }, 100);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', loadComponents);

// Also initialize if DOM is already loaded (in case script loads after DOM)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadComponents);
} else {
    loadComponents();
}
