/**
 * ========================================
 * Portfolio Website - JavaScript Fixed
 * ========================================
 * BUGS FIXED:
 * 1. ✅ scrollX → scrollY (CRITICAL: Line 16 in original)
 * 2. ✅ .home-contect → .home-content
 * 3. ✅ .services-container → .service-container
 * 4. ✅ .contect → .contact
 * 5. ✅ origin: 'buttom' → origin: 'bottom'
 * 6. ✅ Improved event handling
 * 7. ✅ Added menu close functionality
 */

//* ================== Toggle Menu Icon & Navbar ================== *//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', function(e) {
        e.preventDefault();
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    });

    // Close menu when a navigation link is clicked
    document.querySelectorAll('.navbar a').forEach(link => {
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
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', function() {
    sections.forEach(sec => {
        // ✅ CRITICAL FIX: Changed scrollX to scrollY
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    //* ================== Sticky Navbar ================== *//
    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }
});

//* ================== Scroll Reveal Animation ================== *//
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    // ✅ FIXED: All selector names corrected
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form, .experience-box', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}

//* ================== Typed JS Text Animation ================== *//
if (typeof Typed !== 'undefined') {
    var typed = new Typed('#multy-text', {
        strings: ['Android Developer.', 'Kotlin/Java Expert.', 'UI/UX Specialist.'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
    });
}

console.log('✓ Portfolio JavaScript loaded successfully');
