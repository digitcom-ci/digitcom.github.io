window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
        function toggleMenu() {
            var menu = document.querySelector(".menu");
            menu.classList.toggle("active");
        }
        function toggleMenu() {
            var menu = document.getElementById("fullscreenMenu");
        }
        function scrollLeft() {
            const slider = document.querySelector('.slider-container');
            slider.scrollLeft -= 200; // Scroll to the left by 200px
        }

        function scrollRight() {
            const slider = document.querySelector('.slider-container');
            slider.scrollLeft += 200; // Scroll to the right by 200px
        }

    });
});
