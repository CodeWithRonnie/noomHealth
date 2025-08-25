import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "We want to ensure our patients are living their healthiest lives and are supported clinically and beyond. By integrating the Noom platform into our care approach, we're enhancing the patient experience with digital tools that support their health goals.",
      author: "LAUREN LISHER",
      title: "SENIOR VICE PRESIDENT OF MOUNT SINAI SOLUTIONS"
    },
    {
      quote: "This partnership with Noom [empowers] the people we serve to take charge of their health through healthier habits and weight management to mitigate chronic conditions, and we're excited to see the benefits it brings to our members.",
      author: "MACK MCGEE",
      title: "VICE PRESIDENT AND CHIEF MARKETING OFFICER OF"
    },
    {
      quote: "I don't think people realize how much savings they get with this [Noom] being provided at work. It's incredible. It just shows the investment within the employee - that they're willing to go above and beyond.",
      author: "JOSHUA, 35",
      title: "NOOM BENEFIT USER THROUGH THEIR EMPLOYER"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Lasting results are worth celebrating.</h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-author">
                <div className="author-name">{testimonial.author}</div>
                <div className="author-title">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
