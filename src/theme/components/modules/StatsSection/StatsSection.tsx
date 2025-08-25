import React from 'react';
import './StatsSection.css';

const StatsSection: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">A revolutionary approach with real results.</h2>
          <p className="stats-subtitle">
            Proven outcomes in CVD risk reduction supported by data science, RCT evidence, 
            medical science in metabolic drivers.
          </p>
        </div>
        
        <div className="stats-card">
          <div className="stat-item">
            <div className="stat-number">-25%</div>
            <div className="stat-description">
              Employees achieving across the eligible population*
            </div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-number">1.4x</div>
            <div className="stat-description">
              More weight loss by week 8 through 18th months 
              with overall outcomes improvements on quality of life.*
            </div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-number">75%</div>
            <div className="stat-description">
              Of members with losses of 5% of body weight
              within 16 weeks and 6 months of program.*
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
