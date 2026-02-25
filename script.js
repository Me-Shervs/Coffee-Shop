const burger = document.querySelector('.burger');
const menu = document.querySelector('.burger-bar');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.txt-title, .home-title h2, .left-home div h3, .headline-name, .menu-container h1', { origin: 'top'});
ScrollReveal().reveal('.home-button-container', { origin: 'bottom'});
ScrollReveal().reveal('.headline-txt-container, .menu-img img', { origin: 'left'});
ScrollReveal().reveal('.home-img-container img, .menu-img h3', { origin: 'right'});