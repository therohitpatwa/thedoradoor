'use client';
import { useState } from 'react';

interface HeaderProps {
  activePage: 'transfer' | 'about' | 'faq';
  onNavigate: (page: 'transfer' | 'about' | 'faq') => void;
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'transfer' | 'about' | 'faq') => {
    onNavigate(page);
    setIsMobileMenuOpen(false); // Close menu on click
  };
  return (
    <header className="header" id="main-header">
      <div
        className="header-logo"
        onClick={() => onNavigate('transfer')}
        onKeyDown={(e) => e.key === 'Enter' && onNavigate('transfer')}
        id="logo"
        role="button"
        tabIndex={0}
        aria-label="Go to home transfer page"
      >
        {/* Replace '/logo.png' below with the actual name of your image in the public folder */}
        <img src="/logo.png" alt="AnywhereDoor logo" width={32} height={32} style={{ objectFit: 'contain', borderRadius: '4px', transform: 'scale(2.2)', margin: '0 0.8rem 0 0.5rem' }} />
        AnywhereDoor
      </div>

      <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`} id="main-nav">
        <button
          className={`nav-link ${activePage === 'transfer' ? 'active' : ''}`}
          onClick={() => handleNavClick('transfer')}
          id="nav-transfer"
        >
          Transfer
        </button>
        <button
          className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
          id="nav-about"
        >
          About Us
        </button>
        <button
          className={`nav-link ${activePage === 'faq' ? 'active' : ''}`}
          onClick={() => handleNavClick('faq')}
          id="nav-faq"
        >
          FAQ
        </button>
      </nav>

      {/* Hamburger button for mobile */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </header>
  );
}
