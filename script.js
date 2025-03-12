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
document.addEventListener('DOMContentLoaded', function() {
    // Get lightbox elements
    const lightbox = document.getElementById('certificate-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    // Create image counter element
    const imageCounter = document.createElement('div');
    imageCounter.className = 'image-counter';
    lightbox.appendChild(imageCounter);
    
    // Create loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'lightbox-loading';
    lightbox.appendChild(loadingIndicator);
    
    // Arrays to store all galleries and their images
    let allGalleries = [];
    let currentGallery = [];
    let currentIndex = 0;
    
    // Find all gallery containers and collect their images
    const galleryContainers = document.querySelectorAll('.gallery-container');
    galleryContainers.forEach(gallery => {
      const images = Array.from(gallery.querySelectorAll('.gallery-img'));
      allGalleries.push(images);
      
      // Add click event to each image
      images.forEach((img, index) => {
        img.addEventListener('click', function() {
          openLightbox(images, index);
        });
      });
    });
    
    // Function to open lightbox
    function openLightbox(gallery, index) {
      currentGallery = gallery;
      currentIndex = index;
      
      // Set the image and caption
      updateLightboxContent();
      
      // Show the lightbox with flex display
      lightbox.style.display = 'flex';
      
      // Prevent scrolling on the body
      document.body.style.overflow = 'hidden';
    }
    
    // Function to update lightbox content
    function updateLightboxContent() {
      // Show loading indicator
      loadingIndicator.style.display = 'block';
      
      const img = currentGallery[currentIndex];
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = img.alt;
      
      // Update counter
      imageCounter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
      
      // Hide loading indicator once image is loaded
      lightboxImg.onload = function() {
        loadingIndicator.style.display = 'none';
      };
    }
    
    // Close lightbox when clicking the close button
    lightboxClose.addEventListener('click', function() {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
    
    // Add navigation controls to the lightbox
    const navigationControls = document.createElement('div');
    navigationControls.className = 'lightbox-navigation';
    navigationControls.innerHTML = `
      <button class="lightbox-nav prev">
        <i class='bx bx-chevron-left'></i>
      </button>
      <button class="lightbox-nav next">
        <i class='bx bx-chevron-right'></i>
      </button>
    `;
    lightbox.appendChild(navigationControls);
    
    // Get navigation buttons
    const prevButton = navigationControls.querySelector('.prev');
    const nextButton = navigationControls.querySelector('.next');
    
    // Previous image button
    prevButton.addEventListener('click', function(e) {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      updateLightboxContent();
    });
    
    // Next image button
    nextButton.addEventListener('click', function(e) {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % currentGallery.length;
      updateLightboxContent();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
          currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
          updateLightboxContent();
        } else if (e.key === 'ArrowRight') {
          currentIndex = (currentIndex + 1) % currentGallery.length;
          updateLightboxContent();
        } else if (e.key === 'Escape') {
          lightbox.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      }
    });
  });