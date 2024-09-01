document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-mobile-toggle');
    const menuMobile = document.querySelector('.menu-mobile');

    menuToggle.addEventListener('click', function() {
        menuMobile.classList.toggle('active');
    });
});
