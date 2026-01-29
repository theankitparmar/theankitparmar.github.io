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
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

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