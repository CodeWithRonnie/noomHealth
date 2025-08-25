import React from 'react';
import './PageHero.css';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  ctaText, 
  ctaLink 
}) => {
  const defaultBg = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80";
  
  return (
    <section className="page-hero">
      <div className="page-hero-background">
        <img 
          src={backgroundImage || defaultBg}
          alt={title}
          className="page-hero-image"
        />
        <div className="page-hero-overlay"></div>
      </div>
      
      <div className="page-hero-content">
        <div className="page-hero-container">
          <div className="page-hero-text">
            <h1 className="page-hero-title">{title}</h1>
            {subtitle && (
              <p className="page-hero-subtitle">{subtitle}</p>
            )}
            {ctaText && ctaLink && (
              <a href={ctaLink} className="page-hero-cta">
                {ctaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
