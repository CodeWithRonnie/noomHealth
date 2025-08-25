import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <video 
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          {/* Fallback image for browsers that don't support video */}
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
            alt="Healthcare professionals"
            className="hero-image"
          />
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">
              Healthier people. Lower costs.<br />
              Smarter healthcare.
            </h1>
            <p className="hero-subtitle">
              The science-based solution to reduce weight and cardiometabolic risk with behavioral change for lasting results.<br />
              That means more money for your organization and better outcomes for everyone.
            </p>
            <button className="hero-cta">
              Get started
            </button>
          </div>
          
          <div className="hero-badge">
            <span className="badge-text">NOOM WORKS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
