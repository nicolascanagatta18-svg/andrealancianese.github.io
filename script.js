// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuTrigger = document.getElementById('menuTrigger');
    const navMenu = document.getElementById('navMenu');
    
    // Toggle menu function
    function toggleMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        navMenu.classList.toggle('active');
    }
    
    // Close menu function
    function closeMenu() {
        navMenu.classList.remove('active');
    }
    
    // Menu trigger click event
    if (menuTrigger) {
        menuTrigger.addEventListener('click', toggleMenu);
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && !navMenu.contains(e.target) && e.target !== menuTrigger) {
            closeMenu();
        }
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
    
    // Prevent menu links from closing the menu immediately
    const menuLinks = document.querySelectorAll('.nav-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow navigation but close menu after a short delay
            setTimeout(closeMenu, 100);
        });
    });
    
    // Add home-page class to body for home page specific styling
    if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')) {
        document.body.classList.add('home-page');
    }
});
