import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const individualsItems = [
    { title: 'Weight Loss', href: '/weight-loss' },
    { title: 'Health Coaching', href: '/health-coaching' },
    { title: 'Psychology of Eating', href: '#' },
    { title: 'Nutrition Coaching', href: '#' },
    { title: 'Personal Trainer', href: '#' },
    { title: 'Diabetes Prevention', href: '/diabetes-prevention' },
  ];

  const organizationsItems = [
    { title: 'For Employers', href: '/for-employers' },
    { title: 'For Health Plans', href: '/for-health-plans' },
    { title: 'For Healthcare Providers', href: '#' },
    { title: 'Partner With Us', href: '#' },
    { title: 'Request Demo', href: '/request-demo' },
  ];

  const companyItems = [
    { title: 'About Us', href: '/about-us' },
    { title: 'Leadership', href: '#' },
    { title: 'Careers', href: '/careers' },
    { title: 'Press', href: '#' },
    { title: 'Research', href: '/research' },
    { title: 'Blog', href: '#' },
    { title: 'Support', href: '#' },
  ];

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        <a href="/" className="header-logo">
          <span className="logo-text">NOOM</span>
          <span className="logo-subtitle">health</span>
        </a>
        <nav className="header-nav">
          <div className="nav-item">
            <button
              className="nav-link dropdown-trigger"
              onClick={() => handleDropdownToggle('individuals')}
            >
              FOR INDIVIDUALS
              <ChevronDown size={16} className={`chevron ${activeDropdown === 'individuals' ? 'rotated' : ''}`} />
            </button>
            {activeDropdown === 'individuals' && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {individualsItems.map((item, index) => (
                    <a key={index} href={item.href} className="dropdown-item">
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="nav-item">
            <button
              className="nav-link dropdown-trigger"
              onClick={() => handleDropdownToggle('organizations')}
            >
              FOR ORGANIZATIONS
              <ChevronDown size={16} className={`chevron ${activeDropdown === 'organizations' ? 'rotated' : ''}`} />
            </button>
            {activeDropdown === 'organizations' && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {organizationsItems.map((item, index) => (
                    <a key={index} href={item.href} className="dropdown-item">
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="nav-item">
            <button
              className="nav-link dropdown-trigger"
              onClick={() => handleDropdownToggle('company')}
            >
              COMPANY
              <ChevronDown size={16} className={`chevron ${activeDropdown === 'company' ? 'rotated' : ''}`} />
            </button>
            {activeDropdown === 'company' && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {companyItems.map((item, index) => (
                    <a key={index} href={item.href} className="dropdown-item">
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#" className="nav-link">EN</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
