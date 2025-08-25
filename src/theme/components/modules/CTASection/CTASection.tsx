import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import './CTASection.css';

const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to transform your organization's health outcomes?
          </h2>
          <p className="cta-subtitle">
            Join thousands of leading organizations already using NoomCare to reduce healthcare costs 
            while improving employee wellbeing and productivity.
          </p>
          
          <div className="cta-buttons">
            <a href="#" className="cta-primary">
              Get Started Today
              <ArrowRight size={18} />
            </a>
            <a href="#" className="cta-secondary">
              <Play size={16} />
              Watch Demo
            </a>
          </div>
          
          <div className="cta-stats">
            <div className="cta-stat">
              <div className="cta-stat-number">500K+</div>
              <div className="cta-stat-text">Active Members</div>
            </div>
            <div className="cta-stat">
              <div className="cta-stat-number">89%</div>
              <div className="cta-stat-text">Member Satisfaction</div>
            </div>
            <div className="cta-stat">
              <div className="cta-stat-number">$2.5K</div>
              <div className="cta-stat-text">Avg Annual Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
