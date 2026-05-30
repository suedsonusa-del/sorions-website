import { useState } from 'react';

export default function Navbar({ currentPage, setCurrentPage, locale, setLocale, navItems }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLocale(prev => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="brand-link" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          {/* Elegant vector logo mark */}
          <svg className="brand-logo" viewBox="0 0 100 100" width="32" height="32" fill="none">
            <rect width="100" height="100" rx="20" fill="transparent" />
            <path d="M 65 30 C 55 20, 35 20, 35 35 C 35 45, 65 45, 65 65 C 65 80, 45 80, 35 70" 
                  stroke="#C8B89A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="brand-name">SORIONS<span>.</span></span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {Object.entries(navItems).map(([key, label]) => (
            <li key={key} className={`nav-item ${currentPage === key ? 'active' : ''}`}>
              <a href={`#${key}`} onClick={(e) => { e.preventDefault(); handleNavClick(key); }}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">
              <span className={locale === 'pt' ? 'active' : ''}>PT-BR</span>
              <span className="separator">|</span>
              <span className={locale === 'en' ? 'active' : ''}>EN</span>
            </button>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button 
          className="menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {Object.entries(navItems).map(([key, label]) => (
            <li key={key} className={`mobile-nav-item ${currentPage === key ? 'active' : ''}`}>
              <a href={`#${key}`} onClick={(e) => { e.preventDefault(); handleNavClick(key); }}>
                {label}
              </a>
            </li>
          ))}
          <li style={{ marginTop: '1rem' }}>
            <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">
              <span className={locale === 'pt' ? 'active' : ''}>PT-BR</span>
              <span className="separator">|</span>
              <span className={locale === 'en' ? 'active' : ''}>EN</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
