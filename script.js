// JavaScript for Responsive Navigation and Scroll Effects

document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    const navMenu = document.querySelector('.navbar ul');
    
    // Create hamburger menu icon
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        menuToggle.appendChild(span);
    }
    
    // Add menu toggle to navbar
    navbar.appendChild(menuToggle);
    
    // Last scroll position for determining scroll direction
    let lastScrollTop = 0;
    
    // Handle scroll event for hiding/showing navbar
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Hide navbar when scrolling down, show when scrolling up
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking menu items
    document.querySelectorAll('.navbar ul li a').forEach(item => {
        item.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});