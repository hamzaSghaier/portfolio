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
document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carousel = document.querySelector('.certificates-carousel');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const items = document.querySelectorAll('.certificate-item');
    const itemWidth = items[0].offsetWidth + 20; // Width + gap
    
    // Calculate the number of items to scroll based on screen width
    const getScrollCount = () => {
        if (window.innerWidth < 768) {
            return 1; // Scroll one item at a time on mobile
        }
        return 3; // Scroll three items at a time on larger screens
    };
    
    prevBtn.addEventListener('click', () => {
        const scrollAmount = itemWidth * getScrollCount();
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', () => {
        const scrollAmount = itemWidth * getScrollCount();
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Lightbox functionality with enhanced image display
    const certificateItems = document.querySelectorAll('.certificate-item');
    const lightbox = document.getElementById('certificate-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    certificateItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('.certificate-img');
            
            lightboxImg.src = img.src;
            lightboxCaption.textContent = img.alt; // Use the alt text as caption
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling while lightbox is open
        });
    });
    
    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});