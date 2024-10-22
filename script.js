document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    
    document.addEventListener('click', function(event) {
        const isClickInside = navList.contains(event.target) || menuToggle.contains(event.target);
        
        if (!isClickInside && navList.classList.contains('active')) {
            navList.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});