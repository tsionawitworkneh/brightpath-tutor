// Toggle mobile menu
const toggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu-items");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Change navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav-bar');

    if (window.scrollY > 0) {
        navbar.classList.add('nav-bar-scroll');
    } else {
        navbar.classList.remove('nav-bar-scroll');
    }
});
