import React from 'react';
import './TrustedSection.css';

const TrustedSection: React.FC = () => {
  const organizations = [
    "ActiveList",
    "Venture",
    "Gwinnett",
    "CardFirst",
    "Mount Sinai"
  ];

  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <h2 className="trusted-title">Trusted by leading organizations.</h2>
        
        <div className="trusted-logos">
          {organizations.map((org, index) => (
            <div 
              key={index} 
              className="trusted-logo"
              style={{ '--animation-delay': index } as React.CSSProperties}
            >
              <span className="logo-text">{org}</span>
            </div>
          ))}
          {/* Add empty divs for diamond pattern spacing */}
          <div className="trusted-logo" style={{ '--animation-delay': 5 } as React.CSSProperties}>
            <span className="logo-text">HealthFirst</span>
          </div>
          <div className="trusted-logo" style={{ '--animation-delay': 6 } as React.CSSProperties}>
            <span className="logo-text">WellCare</span>
          </div>
          <div className="trusted-logo" style={{ '--animation-delay': 7 } as React.CSSProperties}>
            <span className="logo-text">MedPlan</span>
          </div>
          <div className="trusted-logo" style={{ '--animation-delay': 8 } as React.CSSProperties}>
            <span className="logo-text">CareNet</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
