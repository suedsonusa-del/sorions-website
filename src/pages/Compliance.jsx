export default function Compliance({ complianceTexts }) {
  const cnpj = complianceTexts.cnpjBlock;
  const docs = complianceTexts.documents;
  const wb = complianceTexts.whistleblowing;

  return (
    <div className="container animate-fade-in">
      <h2 className="section-title">{complianceTexts.heading}</h2>
      
      <p className="compliance-intro">{complianceTexts.intro}</p>

      {/* CNPJ Disclosure Section */}
      <section className="cnpj-disclosure-block" aria-label="Corporate Registration Disclosure">
        <h3 className="cnpj-disclosure-title">{cnpj.title}</h3>
        
        <div className="cnpj-meta-grid">
          <div className="cnpj-meta-item">
            <span className="cnpj-meta-label">{cnpj.legalNameLabel}</span>
            <span className="cnpj-meta-value">{cnpj.legalName}</span>
          </div>
          <div className="cnpj-meta-item">
            <span className="cnpj-meta-label">{cnpj.cnpjLabel}</span>
            <span className="cnpj-meta-value" style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>{cnpj.cnpj}</span>
          </div>
          <div className="cnpj-meta-item">
            <span className="cnpj-meta-label">{cnpj.statusLabel}</span>
            <span className="cnpj-meta-value active">{cnpj.status}</span>
          </div>
        </div>

        <div className="cnpj-note-box">
          <p className="cnpj-note-text">
            {cnpj.note}
          </p>
        </div>
      </section>

      <hr className="gold-divider" />

      {/* Corporate Documents Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h3 className="documents-section-title">{docs.title}</h3>
        <p className="documents-section-subtitle">{docs.subtitle}</p>

        <div className="documents-grid">
          {docs.list.map((doc, idx) => (
            <div key={idx} className="document-card">
              <div className="document-info">
                <svg className="document-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
                <span className="document-name">{doc.name}</span>
              </div>
              <a 
                href={`/docs/${doc.filename}`} 
                download={doc.filename}
                className="document-download-btn"
                aria-label={`Download ${doc.name}`}
                title={`Download ${doc.name}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Whistleblowing Channel */}
      <section className="whistleblowing-box">
        <h3 className="whistleblowing-title">{wb.label}</h3>
        <a href={`mailto:${wb.email}`} className="whistleblowing-email">
          {wb.email}
        </a>
      </section>
    </div>
  );
}
