export default function Contact({ contactTexts }) {
  return (
    <div className="container animate-fade-in">
      <h2 className="section-title">{contactTexts.heading}</h2>

      <div className="contact-container">
        <div className="contact-card">
          <h3 className="contact-company-title">SORIONS</h3>
          <p className="contact-company-cnpj">SORIONS SERVICOS DIGITAIS LTDA • CNPJ 66.916.679/0001-71</p>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-detail-content">
                <span className="contact-detail-label">{contactTexts.addressLabel}</span>
                <span className="contact-detail-value">{contactTexts.address}</span>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="contact-detail-content">
                <span className="contact-detail-label">{contactTexts.generalEmailLabel}</span>
                <span className="contact-detail-value">
                  <a href={`mailto:${contactTexts.generalEmail}`}>{contactTexts.generalEmail}</a>
                </span>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="contact-detail-content">
                <span className="contact-detail-label">{contactTexts.complianceEmailLabel}</span>
                <span className="contact-detail-value">
                  <a href={`mailto:${contactTexts.complianceEmail}`}>{contactTexts.complianceEmail}</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
