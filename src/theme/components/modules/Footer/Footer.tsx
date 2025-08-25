import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-text">NOOM</span>
              <span className="footer-logo-subtitle">health</span>
            </div>
            <p className="footer-description">
              The science-based solution to reduce weight and cardiometabolic risk with behavioral change for lasting results.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-column-title">Products</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="#" className="footer-link">Weight Management</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Diabetes Prevention</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Stress & Sleep</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Noom Mood</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Med</a>
              </li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-column-title">Solutions</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="#" className="footer-link">For Individuals</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">For Organizations</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Healthcare Providers</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Employers</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Health Plans</a>
              </li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-column-title">Company</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="#" className="footer-link">About Us</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Careers</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Press</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Research</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Blog</a>
              </li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-column-title">Support</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="#" className="footer-link">Help Center</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Contact Us</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Safety</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Community</a>
              </li>
            </ul>
            
            <div className="newsletter-signup">
              <h4 className="footer-column-title" style={{ marginBottom: '16px', marginTop: '32px' }}>Newsletter</h4>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2024 NoomCare. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Service</a>
            <a href="#" className="footer-legal-link">Cookie Policy</a>
            <a href="#" className="footer-legal-link">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
