// Stats Section Module JavaScript
(function() {
  'use strict';
  
  // Initialize stats section functionality
  function initStatsSection() {
    const statsSection = document.getElementById('stats-section');
    
    if (!statsSection) return;
    
    const enableAnimations = statsSection.getAttribute('data-animations') === 'true';
    const enableCounterAnimation = statsSection.getAttribute('data-counter-animation') === 'true';
    
    // Counter animation functionality
    function initCounterAnimations() {
      if (!enableCounterAnimation) return;
      
      const statNumbers = statsSection.querySelectorAll('.stat-number');
      
      function animateCounter(element) {
        const target = element.getAttribute('data-count');
        const numericValue = parseFloat(target.replace(/[^0-9.]/g, ''));
        const suffix = target.replace(/[0-9.]/g, '');
        
        if (isNaN(numericValue)) {
          // For non-numeric values, just add animation class
          element.classList.add('counting');
          return;
        }
        
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = numericValue / steps;
        const stepDuration = duration / steps;
        
        let current = 0;
        element.textContent = '0' + suffix;
        element.classList.add('counting');
        
        const timer = setInterval(() => {
          current += increment;
          
          if (current >= numericValue) {
            element.textContent = target;
            clearInterval(timer);
          } else {
            const displayValue = Math.floor(current);
            element.textContent = displayValue + suffix;
          }
        }, stepDuration);
      }
      
      // Use Intersection Observer to trigger animations
      const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((statNumber, index) => {
              setTimeout(() => {
                animateCounter(statNumber);
              }, index * 200); // Stagger the animations
            });
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      observer.observe(statsSection);
    }
    
    // Parallax effect for floating elements
    function initParallaxEffect() {
      if (!enableAnimations) return;
      
      const floatingElements = statsSection.querySelectorAll('.floating-stat');
      
      function updateParallax() {
        const scrollY = window.pageYOffset;
        const sectionTop = statsSection.offsetTop;
        const sectionHeight = statsSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Check if section is in viewport
        if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
          const relativeY = scrollY - sectionTop + windowHeight;
          const percentage = relativeY / (sectionHeight + windowHeight);
          
          floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.2);
            const yPos = percentage * 100 * speed;
            element.style.transform = `translateY(${yPos}px) rotate(${percentage * 360}deg)`;
          });
        }
      }
      
      // Use requestAnimationFrame for smooth performance
      let ticking = false;
      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }
      
      window.addEventListener('scroll', () => {
        requestTick();
        ticking = false;
      });
    }
    
    // Mouse interaction effects
    function initMouseInteractions() {
      if (!enableAnimations) return;
      
      const statCards = statsSection.querySelectorAll('.stat-card');
      
      statCards.forEach(card => {
        // Mouse move effect
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        // Mouse leave effect
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
        
        // Click effect
        card.addEventListener('click', () => {
          card.style.transform = 'scale(0.98)';
          setTimeout(() => {
            card.style.transform = '';
          }, 150);
        });
      });
    }
    
    // Responsive grid adjustment
    function initResponsiveGrid() {
      const statsGrid = statsSection.querySelector('.stats-grid');
      const statCards = statsSection.querySelectorAll('.stat-card');
      
      function adjustGrid() {
        const cardCount = statCards.length;
        const viewportWidth = window.innerWidth;
        
        if (viewportWidth < 768) {
          statsGrid.style.gridTemplateColumns = '1fr';
        } else if (viewportWidth < 1024) {
          if (cardCount <= 2) {
            statsGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
          } else {
            statsGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
          }
        } else {
          if (cardCount <= 3) {
            statsGrid.style.gridTemplateColumns = `repeat(${cardCount}, 1fr)`;
          } else if (cardCount === 4) {
            statsGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
          } else {
            statsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
          }
        }
      }
      
      adjustGrid();
      window.addEventListener('resize', adjustGrid);
    }
    
    // Accessibility enhancements
    function initAccessibility() {
      const statCards = statsSection.querySelectorAll('.stat-card');
      
      statCards.forEach((card, index) => {
        // Add ARIA labels
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', `Statistic ${index + 1}`);
        
        // Add keyboard navigation
        card.setAttribute('tabindex', '0');
        
        // Keyboard interaction
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
          }
        });
        
        // Focus management
        card.addEventListener('focus', () => {
          card.style.outline = '2px solid #059669';
          card.style.outlineOffset = '2px';
        });
        
        card.addEventListener('blur', () => {
          card.style.outline = '';
          card.style.outlineOffset = '';
        });
      });
    }
    
    // Performance monitoring
    function initPerformanceMonitoring() {
      if (window.performance && window.performance.mark) {
        window.performance.mark('stats-section-start');
        
        // Mark completion after all animations
        setTimeout(() => {
          window.performance.mark('stats-section-complete');
          window.performance.measure('stats-section-duration', 'stats-section-start', 'stats-section-complete');
        }, 3000);
      }
    }
    
    // Initialize all functionality
    initCounterAnimations();
    initParallaxEffect();
    initMouseInteractions();
    initResponsiveGrid();
    initAccessibility();
    initPerformanceMonitoring();
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStatsSection);
  } else {
    initStatsSection();
  }
  
  // Reinitialize on window resize with debounce
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initStatsSection, 250);
  });
  
})();
