//* ==================================== toggle icon navbar ======================================== *//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

//* =================================== scroll section active link =========================================== *//
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollX;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        } else {
            document.querySelector('header nav a[href*="' + id + '"]').classList.remove('active');
        }
    });

    //* ====================================== sticky navbar =========================================== *//
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollX > 100);
}

 //* ====================================== SCROLL REVEAL =========================================== *//

 scrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-contect, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contect form', { origin: 'buttom' });
 ScrollReveal().reveal('.home-contect h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contect p, .about-contect', { origin: 'right' });


 //* ======================================  typed js =========================================== *//
 var typed = new Typed('#multy-text', {
    strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    typeSpeed: 50,
  });