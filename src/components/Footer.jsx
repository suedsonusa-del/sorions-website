import { Link } from 'react-router-dom';

export default function Footer({ navItems, footerTexts }) {
  const routeMap = {
    home: '/',
    about: '/sobre',
    services: '/servicos',
    compliance: '/compliance',
    contact: '/contato'
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-info">
            <div className="footer-logo-row">
              <svg className="footer-logo" viewBox="0 0 100 100" width="24" height="24" fill="none">
                <rect width="100" height="100" rx="20" fill="transparent" />
                <path d="M 65 30 C 55 20, 35 20, 35 35 C 35 45, 65 45, 65 65 C 65 80, 45 80, 35 70" 
                      stroke="#C8B89A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="footer-brand-name">SORIONS<span>.</span></span>
            </div>
            <p className="footer-company-reg">SORIONS SERVICOS DIGITAIS LTDA • CNPJ 66.916.679/0001-71</p>
            <p className="footer-disclaimer">{footerTexts.disclaimer}</p>
          </div>

          <div className="footer-nav">
            <ul className="footer-menu">
              {Object.entries(navItems).map(([key, label]) => (
                <li key={key} className="footer-menu-item">
                  <Link to={routeMap[key]}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="footer-compliance-email">
              Compliance: <a href="mailto:compliance@sorions.com.br">compliance@sorions.com.br</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{footerTexts.copyright}</p>
          <div className="footer-socials">
            {/* Minimal SVG placeholders for legal compliance standard */}
            <a href="mailto:contato@sorions.com.br" className="footer-social-icon" aria-label="Email Us">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
