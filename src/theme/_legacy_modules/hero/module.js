// Hero Module JavaScript
(function() {
  'use strict';
  
  // Initialize hero functionality
  function initHero() {
    const hero = document.getElementById('hero-module');
    
    if (!hero) return;
    
    const enableParallax = hero.getAttribute('data-parallax') === 'true';
    const enableAnimations = hero.getAttribute('data-animations') === 'true';
    
    // Parallax scrolling effect
    function initParallax() {
      if (!enableParallax) return;
      
      const heroBackground = hero.querySelector('.hero-background');
      const heroContent = hero.querySelector('.hero-content');
      
      function handleParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const contentRate = scrolled * -0.3;
        
        if (heroBackground) {
          heroBackground.style.transform = `translateY(${rate}px)`;
        }
        
        if (heroContent) {
          heroContent.style.transform = `translateY(${contentRate}px)`;
        }
      }
      
      // Use requestAnimationFrame for smooth performance
      let ticking = false;
      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(handleParallax);
          ticking = true;
        }
      }
      
      window.addEventListener('scroll', function() {
        requestTick();
        ticking = false;
      });
    }
    
    // Intersection Observer for animations
    function initScrollAnimations() {
      if (!enableAnimations) return;
      
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);
      
      // Observe animated elements
      const animatedElements = hero.querySelectorAll('.animate-fade-in-up, .animate-slide-in-right');
      animatedElements.forEach(el => observer.observe(el));
    }
    
    // Mouse move parallax effect for floating elements
    function initMouseParallax() {
      if (!enableAnimations) return;
      
      const floatingElements = hero.querySelectorAll('.floating-element');
      
      hero.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        floatingElements.forEach((element, index) => {
          const speed = (index + 1) * 0.02;
          const x = (mouseX - centerX) * speed;
          const y = (mouseY - centerY) * speed;
          
          element.style.transform = `translate(${x}px, ${y}px)`;
        });
      });
    }
    
    // Video optimization
    function initVideoOptimization() {
      const video = hero.querySelector('.hero-video');
      
      if (!video) return;
      
      // Pause video when not visible
      const videoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            video.play().catch(e => console.log('Video autoplay prevented:', e));
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.5 });
      
      videoObserver.observe(hero);
      
      // Optimize video for mobile
      if (window.innerWidth < 768) {
        video.setAttribute('playsinline', 'true');
        video.setAttribute('preload', 'metadata');
      }
    }
    
    // Scroll indicator functionality
    function initScrollIndicator() {
      const scrollIndicator = hero.querySelector('.scroll-indicator');
      
      if (!scrollIndicator) return;
      
      scrollIndicator.addEventListener('click', function() {
        const nextSection = hero.nextElementSibling;
        
        if (nextSection) {
          nextSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
      
      // Hide scroll indicator after scrolling
      window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
          scrollIndicator.style.opacity = '0';
        } else {
          scrollIndicator.style.opacity = '0.8';
        }
      });
    }
    
    // Responsive text sizing
    function initResponsiveText() {
      const heroTitle = hero.querySelector('.hero-title');
      const heroSubtitle = hero.querySelector('.hero-subtitle');
      
      function adjustTextSize() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Adjust based on viewport size
        if (viewportWidth < 480) {
          heroTitle.style.fontSize = '2rem';
          heroSubtitle.style.fontSize = '1rem';
        } else if (viewportWidth < 768) {
          heroTitle.style.fontSize = '2.5rem';
          heroSubtitle.style.fontSize = '1.1rem';
        } else {
          heroTitle.style.fontSize = '';
          heroSubtitle.style.fontSize = '';
        }
      }
      
      adjustTextSize();
      window.addEventListener('resize', adjustTextSize);
    }
    
    // Initialize all functionality
    initParallax();
    initScrollAnimations();
    initMouseParallax();
    initVideoOptimization();
    initScrollIndicator();
    initResponsiveText();
    
    // Performance monitoring
    if (window.performance && window.performance.mark) {
      window.performance.mark('hero-module-initialized');
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHero);
  } else {
    initHero();
  }
  
  // Reinitialize on window resize with debounce
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initHero, 250);
  });
  
})();
