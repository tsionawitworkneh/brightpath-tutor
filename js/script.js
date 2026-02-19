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

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 100; // The lower the number, the faster the animation

    const animateCounters = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const updateCount = (el) => {
                    const target = +el.getAttribute('data-target');
                    const count = +el.innerText;

                    // Calculate the increment speed based on the target number
                    const inc = target / speed;

                    if (count < target) {
                        el.innerText = Math.ceil(count + inc);
                        setTimeout(() => updateCount(el), 20);
                    } else {
                        el.innerText = target;
                    }
                };

                updateCount(entry.target);
                // Stop observing once the animation has started
                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = {
        threshold: 0.5 // Start animation when 50% of the element is visible
    };

    const observer = new IntersectionObserver(animateCounters, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
