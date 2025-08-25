import React from 'react';
import './PathSection.css';

const PathSection: React.FC = () => {
  const cards = [
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Patient consultation"
    },
    {
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Family health"
    },
    {
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Healthcare professional"
    }
  ];

  return (
    <section className="path-section">
      <div className="path-container">
        <div className="path-header">
          <h2 className="path-title">A smarter path to lasting cardiometabolic health.</h2>
          <p className="path-subtitle">
            Noom developed a clinical solution with psychology to micronutrients intervention designed to address 
            heart health risks, while increasing your organization's costs.
          </p>
        </div>
        
        <div className="path-cards">
          {cards.map((card, index) => (
            <div key={index} className="path-card">
              <img src={card.image} alt={card.alt} className="path-card-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathSection;
