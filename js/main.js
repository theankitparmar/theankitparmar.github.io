/**
 * ========================================
 * Portfolio Website - JavaScript
 * Main functionality with form handling
 * ========================================
 */

//* ================== Toggle Menu Icon & Navbar ================== *//
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('header nav a');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', function(e) {
        e.preventDefault();
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuIcon.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target) && !menuIcon.contains(e.target) && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
        }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
        }
    });
}

//* ================== Scroll Section Active Link Highlighting ================== *//
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    // Sticky Header
    if (header) {
        header.classList.toggle('sticky', scrollY > 100);
    }
});

//* ================== Scroll Reveal Animation ================== *//
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form, .experience-box', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}

//* ================== Typed JS Text Animation ================== *//
if (typeof Typed !== 'undefined') {
    const typed = new Typed('#multy-text', {
        strings: ['Android Developer.', 'Kotlin/Java Expert.', 'UI/UX Specialist.'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
    });
}

//* ================== Contact Form Handler ================== *//
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
const submitBtn = document.querySelector('#submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Let Formspree handle the submission by default
        // But we can add client-side validation if needed
        
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const subjectInput = contactForm.querySelector('input[name="subject"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!nameInput.value.trim()) {
            e.preventDefault();
            showFormStatus('Please enter your name', 'error');
            return false;
        }
        
        if (!emailRegex.test(emailInput.value)) {
            e.preventDefault();
            showFormStatus('Please enter a valid email address', 'error');
            return false;
        }
        
        if (!subjectInput.value.trim()) {
            e.preventDefault();
            showFormStatus('Please enter a subject', 'error');
            return false;
        }
        
        if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
            e.preventDefault();
            showFormStatus('Please enter a message (at least 10 characters)', 'error');
            return false;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.value = 'Sending...';
        submitBtn.style.opacity = '0.7';
    });
    
    // Listen for Formspree response
    contactForm.addEventListener('submit', function() {
        setTimeout(() => {
            // Reset form after submission
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.value = 'Send Message';
            submitBtn.style.opacity = '1';
            showFormStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
        }, 2000);
    });
}

// Function to show form status messages
function showFormStatus(message, type) {
    if (!formStatus) return;
    
    formStatus.textContent = message;
    formStatus.style.display = 'block';
    formStatus.style.marginTop = '1rem';
    formStatus.style.padding = '1rem';
    formStatus.style.borderRadius = '0.5rem';
    formStatus.style.textAlign = 'center';
    formStatus.style.fontSize = '1.4rem';
    formStatus.style.fontWeight = '600';
    
    if (type === 'error') {
        formStatus.style.backgroundColor = '#ff6b6b';
        formStatus.style.color = '#fff';
    } else if (type === 'success') {
        formStatus.style.backgroundColor = '#51cf66';
        formStatus.style.color = '#fff';
    }
    
    // Auto-hide success message after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
}

//* ================== Smooth Scroll Enhancement ================== *//
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log('✓ Portfolio JavaScript loaded successfully');
