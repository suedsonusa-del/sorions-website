import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Compliance from './pages/Compliance';
import Contact from './pages/Contact';
import { translations } from './utils/translations';

function App() {
  const [locale, setLocale] = useState('pt');
  const [currentPage, setCurrentPage] = useState('home');

  const t = translations[locale];

  // Dynamically update document title and meta description tag for SEO
  useEffect(() => {
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

    // Update title
    const pageTitle = titleMap[locale]?.[currentPage] || 'Sorions';
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
  }, [locale, currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            homeTexts={t.home}
            servicesList={t.services.list}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'about':
        return <About aboutTexts={t.about} />;
      case 'services':
        return <Services servicesTexts={t.services} servicesList={t.services.list} />;
      case 'compliance':
        return <Compliance complianceTexts={t.compliance} />;
      case 'contact':
        return <Contact contactTexts={t.contact} />;
      default:
        return (
          <Home
            homeTexts={t.home}
            servicesList={t.services.list}
            setCurrentPage={setCurrentPage}
          />
        );
    }
  };

  return (
    <>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        locale={locale}
        setLocale={setLocale}
        navItems={t.nav}
      />
      
      <main>
        {renderPage()}
      </main>

      <Footer
        setCurrentPage={setCurrentPage}
        navItems={t.nav}
        footerTexts={t.footer}
      />
    </>
  );
}

export default App;
