import React from 'react';
import './PlatformSection.css';

const PlatformSection: React.FC = () => {
  const features = [
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Digital health coaching"
    },
    {
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Personalized nutrition"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Medical monitoring"
    },
    {
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Lifestyle tracking"
    },
    {
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Clinical support"
    }
  ];

  return (
    <section className="platform-section">
      <div className="platform-container">
        <h2 className="platform-title">One platform for total population health.</h2>
        
        <div className="platform-features">
          {features.map((feature, index) => (
            <div key={index} className="platform-feature">
              <div className="feature-image-container">
                <img src={feature.image} alt={feature.title} className="feature-image" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
