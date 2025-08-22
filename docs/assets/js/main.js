// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links & close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');

        if(name && email && phone && message) {
            formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            formMessage.className = 'mt-4 text-center text-green-400 font-semibold';
            contactForm.reset();
        } else {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.className = 'mt-4 text-center text-red-500 font-semibold';
        }

        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'mt-4 text-center';
        }, 5000);
    });
}

// Scroll Animation
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: unobserve after revealing to save resources
            // observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

revealElements.forEach(elem => {
    observer.observe(elem);
});

// Fraud Alert is now handled in footer.js and only shows in contact section

// Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    const lightboxLinks = document.querySelectorAll('.certificate-lightbox');
    if (lightboxLinks.length > 0) {
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.className = 'lightbox-overlay';
        document.body.appendChild(lightboxOverlay);

        const lightboxContent = document.createElement('div');
        lightboxContent.className = 'lightbox-content';
        lightboxOverlay.appendChild(lightboxContent);

        const lightboxImage = document.createElement('img');
        lightboxContent.appendChild(lightboxImage);

        const closeButton = document.createElement('button');
        closeButton.className = 'lightbox-close-button';
        closeButton.innerHTML = '&times;';
        lightboxContent.appendChild(closeButton);

        lightboxLinks.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                lightboxImage.src = link.href;
                lightboxOverlay.classList.add('active');
            });
        });

        const closeLightbox = () => {
            lightboxOverlay.classList.remove('active');
            lightboxImage.style.transform = 'scale(1)'; // Reset zoom on close
        };

        closeButton.addEventListener('click', closeLightbox);
        lightboxOverlay.addEventListener('click', e => {
            if (e.target === lightboxOverlay) {
                closeLightbox();
            }
        });

        let currentScale = 1;
        lightboxImage.addEventListener('wheel', e => {
            e.preventDefault();
            if (e.deltaY < 0) {
                // Zoom in
                currentScale = Math.min(currentScale + 0.1, 3);
            } else {
                // Zoom out
                currentScale = Math.max(currentScale - 0.1, 0.5);
            }
            lightboxImage.style.transform = `scale(${currentScale})`;
        });
    }
});

// Floating WhatsApp Button (header sticky behavior is handled in header.js)
window.addEventListener('scroll', function() {
    const whatsappFab = document.getElementById('whatsapp-fab');

    if (window.scrollY > 50) { // Trigger scroll effect after 50px
        if (whatsappFab) {
            whatsappFab.classList.remove('hidden');
        }
    } else {
        if (whatsappFab) {
            whatsappFab.classList.add('hidden');
        }
    }
});

// Testimonial Swiper is now handled by components.js

// Privacy Policy Modal
const privacyPolicyLink = document.getElementById('privacy-policy-link');
const privacyPolicyModal = document.getElementById('privacy-policy-modal');
const closePrivacyPolicyButton = document.getElementById('close-privacy-policy');

if (privacyPolicyLink && privacyPolicyModal && closePrivacyPolicyButton) {
    privacyPolicyLink.addEventListener('click', (e) => {
        e.preventDefault();
        privacyPolicyModal.classList.remove('hidden');
    });

    closePrivacyPolicyButton.addEventListener('click', () => {
        privacyPolicyModal.classList.add('hidden');
    });

    privacyPolicyModal.addEventListener('click', (e) => {
        if (e.target === privacyPolicyModal) {
            privacyPolicyModal.classList.add('hidden');
        }
    });
}
