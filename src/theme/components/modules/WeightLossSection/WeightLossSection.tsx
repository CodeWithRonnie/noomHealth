import React from 'react';
import './WeightLossSection.css';

const WeightLossSection: React.FC = () => {
  const benefits = [
    "Techniques that teach people the 'why' behind their habits and how to change them.",
    "Daily lessons designed to reach everyone's goals.",
    "A personal coach for every member.",
    "Sustained nutrition experience with AI food logging, automated movement tracking, and device integration for sleep, progress monitoring."
  ];

  return (
    <section className="weight-loss-section">
      <div className="weight-loss-container">
        <div className="weight-loss-content">
          <div className="content-left">
            <h2 className="weight-loss-title">Noom works for weight loss.</h2>
            <p className="weight-loss-description">
              Noom's technology-based program can provide effective for millions of people around the globe for over 10 
              years. Not only does it teach devices into evidence, but it offers a holistic approach to creating 13+ with one 
              approach to deliver progress for 85% and up with a company-wide weight plans being more cost-value than 
              healthcare costs.
            </p>
            
            <div className="weight-loss-subtitle">
              <strong>Healthy weight loss puts on healthcare savings.</strong>
            </div>
            
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">{benefit}</li>
              ))}
            </ul>
            
            <p className="disclaimer">
              Based on an internal analysis based Noom in support for those using 2-6k+ for online and voluntary 
              medication.
            </p>
            
            <button className="learn-more-btn">Learn More</button>
          </div>
          
          <div className="content-right">
            <div className="phone-mockup">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Noom app interface"
                className="phone-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeightLossSection;
