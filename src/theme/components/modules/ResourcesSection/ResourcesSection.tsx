import React from 'react';
import './ResourcesSection.css';

const ResourcesSection: React.FC = () => {
  const resources = [
    {
      type: "BLOG",
      title: "Mind Over Matter: Navigate the Psychology of Weight Loss with Noom",
      imageTitle: "Mind over matter.",
      subtitle: "Navigate the psychology of rapid weight loss with Noom",
      className: "blog"
    },
    {
      type: "WEBINAR",
      title: "Discover What's New at Noom: H2 Product Update",
      imageTitle: "Discover What's New at Noom: H2 Product Update",
      subtitle: "",
      className: "webinar"
    },
    {
      type: "WHITE PAPER",
      title: "Why Fertility Benefits Aren't Enough for Women's Health",
      imageTitle: "Menopause isn't a dirty word.",
      subtitle: "It's the missing piece in women's health benefits.",
      className: "whitepaper"
    }
  ];

  return (
    <section className="resources-section">
      <div className="resources-container">
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <div className={`resource-image ${resource.className}`}>
                <div className="resource-image-content">
                  <div className="noom-logo">NOOM health</div>
                  <h3 className="resource-image-title">{resource.imageTitle}</h3>
                  {resource.subtitle && (
                    <p className="resource-subtitle">{resource.subtitle}</p>
                  )}
                </div>
              </div>
              <div className="resource-content">
                <div className="resource-type">{resource.type}</div>
                <h3 className="resource-title">{resource.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="resources-cta">
          <button className="view-resources-btn">View our resources</button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
