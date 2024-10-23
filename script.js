document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const header = document.querySelector('[data-header]');
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const navList = document.querySelector('[data-nav-list]');
    const navLinks = document.querySelectorAll('.nav-link');
    const animatedElements = document.querySelectorAll('[data-animate]');

    // Toggle menu
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Scroll header
    const toggleHeader = () => {
        if (window.scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Animation observer
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add delay if specified
                const delay = entry.target.getAttribute('data-delay');
                if (delay) {
                    entry.target.style.transitionDelay = delay + 's';
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Observe animated elements
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });

    // Event listeners
    window.addEventListener('scroll', toggleHeader);
    document.addEventListener('scroll', () => {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.8) {
                element.classList.add('animate');
            }
        });
    });

    // Initialize
    toggleHeader();
});