// JavaScript for Navbar Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
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
    document.querySelectorAll('.nav-menu li a').forEach(item => {
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
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Replace this with your actual form submission logic
    // For example, you could use EmailJS, FormSubmit, or your own backend API
    
    // Example: send an email using mailto (basic approach)
    const mailtoLink = `mailto:sghhamza10@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    
    // Reset form after submission
    this.reset();
    
    // You could also show a success message
    alert('Thank you for your message! I will get back to you soon.');
});