import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Compliance from './pages/Compliance';
import Contact from './pages/Contact';
import { translations } from './utils/translations';

// Helper component to handle page title updates and scroll resets on navigation
function RouteWrapper({ children, locale, pageKey }) {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll to top
    window.scrollTo({ top: 0 });

    // Page name titles mapping
    const titleMap = {
      pt: {
        home: 'Crescimento Digital com Inteligência e Resultado',
        about: 'Sobre a Sorions',
        services: 'Nossos Serviços de Marketing de Performance',
        compliance: 'Conformidade, CNPJ e Governança',
        contact: 'Entre em Contato - Escritório Sorions'
      },
      en: {
        home: 'Digital Growth Through Performance & Intelligence',
        about: 'About Sorions - Corporate Overview',
        services: 'Our Performance Marketing Services',
        compliance: 'Compliance, Registration & Governance',
        contact: 'Contact - Sorions Offices'
      }
    };

    // Update document title
    const pageTitle = titleMap[locale]?.[pageKey] || 'Sorions';
    document.title = `Sorions | ${pageTitle}`;

    // Update meta description
    const metaDesc = document.getElementById('meta-description');
    if (metaDesc) {
      if (locale === 'pt') {
        metaDesc.setAttribute(
          'content',
          'Sorions Servicos Digitais Ltda é uma empresa brasileira de marketing digital e aquisição de performance para mercados regulados e entretenimento.'
        );
      } else {
        metaDesc.setAttribute(
          'content',
          'Sorions Servicos Digitais Ltda is a Brazilian digital marketing and performance acquisition agency for regulated industries.'
        );
      }
    }

    // Set html lang attribute
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  }, [locale, location.pathname, pageKey]);

  return children;
}

function MainLayout() {
  const [locale, setLocale] = useState('pt');
  const t = translations[locale];

  return (
    <>
      <Navbar
        locale={locale}
        setLocale={setLocale}
        navItems={t.nav}
      />
      
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <RouteWrapper locale={locale} pageKey="home">
                <Home homeTexts={t.home} servicesList={t.services.list} />
              </RouteWrapper>
            }
          />
          <Route
            path="/sobre"
            element={
              <RouteWrapper locale={locale} pageKey="about">
                <About aboutTexts={t.about} />
              </RouteWrapper>
            }
          />
          <Route
            path="/servicos"
            element={
              <RouteWrapper locale={locale} pageKey="services">
                <Services servicesTexts={t.services} servicesList={t.services.list} />
              </RouteWrapper>
            }
          />
          <Route
            path="/compliance"
            element={
              <RouteWrapper locale={locale} pageKey="compliance">
                <Compliance complianceTexts={t.compliance} />
              </RouteWrapper>
            }
          />
          <Route
            path="/contato"
            element={
              <RouteWrapper locale={locale} pageKey="contact">
                <Contact contactTexts={t.contact} />
              </RouteWrapper>
            }
          />
          {/* Catch-all fallback redirect to home */}
          <Route
            path="*"
            element={
              <RouteWrapper locale={locale} pageKey="home">
                <Home homeTexts={t.home} servicesList={t.services.list} />
              </RouteWrapper>
            }
          />
        </Routes>
      </main>

      <Footer
        navItems={t.nav}
        footerTexts={t.footer}
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
