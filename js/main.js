<<<<<<< HEAD
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
=======
// DOM Elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const header = document.querySelector('.header');

// Toggle mobile menu
menuIcon.addEventListener('click', function() {
    // Toggle menu icon between bars and X
    this.classList.toggle('fa-bars');
    this.classList.toggle('fa-xmark');
    
    // Toggle navbar visibility
    navbar.classList.toggle('active');
    
    // Create or remove overlay
    if (navbar.classList.contains('active')) {
        createOverlay();
    } else {
        removeOverlay();
    }
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
});

// Create overlay when menu is open
function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay active';
    overlay.addEventListener('click', closeMobileMenu);
    document.body.appendChild(overlay);
}

// Remove overlay when menu is closed
function removeOverlay() {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Close mobile menu function
function closeMobileMenu() {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
    navbar.classList.remove('active');
    removeOverlay();
    document.body.style.overflow = '';
}
>>>>>>> 416381b14ffcaeb1f6293fb48cc5b8a6d9ad4898

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
        
        // Update active link
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Close menu on window resize (if resized to desktop)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Active link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
<<<<<<< HEAD
            });
            let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
=======
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
>>>>>>> 416381b14ffcaeb1f6293fb48cc5b8a6d9ad4898
        }
    });
});

<<<<<<< HEAD
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
=======
// Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbar.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Initialize active link on page load
window.addEventListener('DOMContentLoaded', () => {
    const currentHash = window.location.hash;
    if (currentHash) {
        const activeLink = document.querySelector(`.navbar a[href="${currentHash}"]`);
        if (activeLink) {
            navLinks.forEach(link => link.classList.remove('active'));
            activeLink.classList.add('active');
        }
    }
});
>>>>>>> 416381b14ffcaeb1f6293fb48cc5b8a6d9ad4898
