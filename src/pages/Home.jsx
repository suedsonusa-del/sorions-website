export default function Home({ homeTexts, servicesList, setCurrentPage }) {
  const handleCtaClick = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleComplianceClick = (e) => {
    e.preventDefault();
    setCurrentPage('compliance');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Pre-mapping of SVG icons for the 6 services
  const getServiceIcon = (id) => {
    switch (id) {
      case 'affiliate':
        return (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        );
      case 'performance':
        return (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 16 4-4 4 4 9-9" />
            <path d="M16 7h5v5" />
          </svg>
        );
      case 'seo':
        return (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
            <path d="M11 8v6" />
            <path d="M8 11h6" />
          </svg>
        );
      case 'traffic':
        return (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        );
      case 'bizdev':
        return (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'consulting':
        return (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 1.8 1 2.5.7.8 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        );
      case 'brandprotection':
        return (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v8" />
            <path d="M8 12h8" />
          </svg>
        );
      case 'crosschannel':
        return (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="m9 10.5 6-3.5" />
            <path d="m9 13.5 6 3.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container animate-fade-in">
      <section className="hero-section">
        <h1 className="hero-headline">{homeTexts.headline}</h1>
        <p className="hero-subheadline">{homeTexts.subheadline}</p>
        <button className="cta-button" onClick={handleCtaClick}>
          {homeTexts.ctaButton}
        </button>
      </section>

      <hr className="gold-divider" />

      <section className="overview-box">
        <p style={{ marginBottom: '3rem' }}>{homeTexts.overview}</p>
        
        <div className="markets-container">
          <span className="markets-label">{homeTexts.marketsTitle}</span>
          <span className="markets-badge">{homeTexts.marketsContent}</span>
        </div>
      </section>

      <hr className="gold-divider" />

      <section style={{ marginBottom: '4.5rem' }}>
        <h2 className="section-title">{homeTexts.servicesSummaryTitle}</h2>
        <div className="home-services-summary">
          {servicesList.map((service) => (
            <div key={service.id} className="service-summary-card">
              <div className="service-summary-icon">
                {getServiceIcon(service.id)}
              </div>
              <h3 className="service-summary-name">{service.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="compliance-cta-block">
        <h3 className="compliance-cta-title">{homeTexts.complianceTitle}</h3>
        <p className="compliance-cta-text">{homeTexts.complianceText}</p>
        <a href="#compliance" className="compliance-cta-btn" onClick={handleComplianceClick}>
          {setCurrentPage ? 'Conformidade e Governança / Compliance & Governance' : ''}
        </a>
      </section>
    </div>
  );
}
