import React from 'react';
import './ROISection.css';

const ROISection: React.FC = () => {
  return (
    <section className="roi-section">
      <div className="roi-container">
        <div className="roi-content">
          <div className="roi-text">
            <h2 className="roi-title">Run the numbers.</h2>
            <p className="roi-description">
              Based on research of healthcare claims data, Noom's weight loss program 
              can generate more than 2x ROI for users with a 25 BMI score and above. 
              You can use it as a tool to help calculate potential health cost savings for 
              your organization.
            </p>
          </div>
          
          <div className="roi-visualization">
            <div className="roi-chart-header">
              <h3 className="chart-title">What is your benefits-eligible employee population with a 25+ BMI?</h3>
            </div>
            
            <div className="roi-chart">
              <div className="chart-container">
                <div className="chart-bar">
                  <div className="bar-segment low" style={{width: '15%'}}></div>
                  <div className="bar-segment medium" style={{width: '25%'}}></div>
                  <div className="bar-segment high" style={{width: '60%'}}></div>
                </div>
                <div className="chart-labels">
                  <span>Low</span>
                  <span>25</span>
                  <span>50</span>
                  <span>75</span>
                  <span>High</span>
                </div>
              </div>
              
              <div className="roi-result">
                <p className="result-text">
                  <strong>Noom data suggests average cost savings, per person, per year is $600.</strong>
                </p>
                <div className="result-highlight">
                  <span className="result-label">Your ROI with Noom:</span>
                  <span className="result-value">1.45x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
