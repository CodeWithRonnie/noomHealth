// Header Module JavaScript
(function() {
  'use strict';
  
  // Initialize header functionality
  function initHeader() {
    const header = document.getElementById('header-module');
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    
    if (!header) return;
    
    // Scroll effect
    function handleScroll() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    // Dropdown functionality
    function initDropdowns() {
      dropdownTriggers.forEach(trigger => {
        const dropdownId = trigger.getAttribute('data-dropdown');
        const dropdown = document.getElementById(`dropdown-${dropdownId}`);
        
        if (!dropdown) return;
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
          if (!trigger.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
            dropdown.style.transform = 'translateX(-50%) translateY(-10px)';
          }
        });
        
        // Handle mobile touch events
        trigger.addEventListener('touchstart', function(e) {
          e.preventDefault();
          const isVisible = dropdown.style.visibility === 'visible';
          
          // Close all other dropdowns
          document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
            menu.style.transform = 'translateX(-50%) translateY(-10px)';
          });
          
          // Toggle current dropdown
          if (!isVisible) {
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
            dropdown.style.transform = 'translateX(-50%) translateY(8px)';
          }
        });
      });
    }
    
    // Smooth scroll for anchor links
    function initSmoothScroll() {
      const anchorLinks = header.querySelectorAll('a[href^="#"]');
      
      anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href === '#') return;
          
          e.preventDefault();
          const target = document.querySelector(href);
          
          if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    }
    
    // Animate logo on load
    function animateLogo() {
      const logo = header.querySelector('.header-logo');
      if (logo) {
        logo.style.transform = 'translateY(-20px)';
        logo.style.opacity = '0';
        
        setTimeout(() => {
          logo.style.transition = 'all 0.6s ease';
          logo.style.transform = 'translateY(0)';
          logo.style.opacity = '1';
        }, 100);
      }
    }
    
    // Initialize all functionality
    handleScroll();
    initDropdowns();
    initSmoothScroll();
    animateLogo();
    
    // Event listeners
    window.addEventListener('scroll', handleScroll);
    
    // Parallax effect for header background
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const parallax = header.querySelector('.header-container');
      
      if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
      }
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeader);
  } else {
    initHeader();
  }
  
  // Reinitialize on window resize
  window.addEventListener('resize', function() {
    setTimeout(initHeader, 100);
  });
  
})();
