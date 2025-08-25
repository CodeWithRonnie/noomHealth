import React from 'react';
import './MedicalEndorsementSection.css';

const MedicalEndorsementSection: React.FC = () => {
  return (
    <section className="medical-endorsement-section">
      <div className="medical-container">
        <div className="medical-content">
          <div className="medical-text">
            <h2 className="medical-title">
              Recommended by doctors.<br />
              Backed by experts.
            </h2>
          </div>
          
          <div className="medical-endorsement">
            <div className="doctor-image">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Dr. Jeffrey Gelles"
                className="doctor-photo"
              />
            </div>
            <div className="endorsement-content">
              <blockquote className="endorsement-quote">
                "At Noom, we help people understand the scientifically the best way to achieve sustainable loss and optimal health to through a personalized program that pairs behavior change with the right medication when needed."
              </blockquote>
              <div className="doctor-info">
                <div className="doctor-name">DR. JEFFREY GELLES</div>
                <div className="doctor-title">NOOM'S CHIEF MEDICAL OFFICER</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalEndorsementSection;
