'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n-context'

const services = [
  {
    id: 'tax',
    icon: '💼',
    features: ['de', 'mx'],
  },
  {
    id: 'legal',
    icon: '⚖️',
    features: ['gdpr', 'lfpdpp'],
  },
  {
    id: 'odoo',
    icon: '⚙️',
    features: ['erp', 'crm', 'accounting'],
  },
  {
    id: 'digital',
    icon: '🚀',
    features: ['automation', 'bi', 'ai'],
  },
]

export default function ServicesPage() {
  const { locale, t, setLocale } = useI18n()
  
  const translations = {
    de: {
      title: 'Unsere Services',
      subtitle: 'Maßgeschneiderte Lösungen',
      description: 'Von der Steuerberatung bis zur digitalen Transformation – wir bieten alle Services aus einer Hand.',
      cta: 'Beratungstermin vereinbaren',
      contactTitle: 'Lassen Sie uns zusammenarbeiten',
      contactDesc: 'Kontaktieren Sie uns für ein unverbindliches Erstgespräch.',
    },
    es: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones a medida',
      description: 'De la consultoría fiscal a la transformación digital – ofrecemos todos los servicios de una sola mano.',
      cta: 'Cita de consultoría',
      contactTitle: 'Trabajemos juntos',
      contactDesc: 'Contáctenos para una consulta inicial sin compromiso.',
    },
  }
  
  const tt = translations[locale]
  
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <Link href="/" className="nav-logo">
            <span className="nav-logo-icon">∞</span>
            <span className="nav-logo-text">
              <span className="nav-logo-name">Dos Aguas</span>
              <span className="nav-logo-tagline">Consulting</span>
            </span>
          </Link>
          
          <ul className="nav-links">
            <li><Link href="/services">{t.nav.services}</Link></li>
            <li><Link href="/team">{t.nav.team}</Link></li>
            <li><Link href="/blog">{t.nav.blog}</Link></li>
            <li><Link href="/docs">{t.nav.docs}</Link></li>
            <li><Link href="/kontakt">{t.nav.contact}</Link></li>
          </ul>
          
          <div className="nav-actions">
            <div className="lang-switcher">
              <button 
                className={`lang-btn ${locale === 'de' ? 'active' : ''}`}
                onClick={() => setLocale('de')}
              >
                🇩🇪 DE
              </button>
              <button 
                className={`lang-btn ${locale === 'es' ? 'active' : ''}`}
                onClick={() => setLocale('es')}
              >
                🇪🇸 ES
              </button>
            </div>
            <button className="btn-nav">{t.nav.dropbox}</button>
          </div>
        </div>
      </nav>

      <main className="page-content">
        {/* Header */}
        <section className="page-header">
          <div className="page-header-content">
            <p className="page-pretitle">{tt.subtitle}</p>
            <h1 className="page-title">{tt.title}</h1>
            <p className="page-description">{tt.description}</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-section">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{t.services[service.id as keyof typeof t.services].title}</h3>
                <p>{t.services[service.id as keyof typeof t.services].description}</p>
                
                <div className="service-features">
                  {service.features.map((feature) => (
                    <span key={feature} className="service-tag">
                      {feature.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <p className="cta-pretitle">{tt.contactTitle}</p>
          <p className="cta-description">{tt.contactDesc}</p>
          <Link href="/kontakt" className="btn-primary btn-large">
            {tt.cta}
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <Link href="/" className="footer-logo">Dos Aguas</Link>
          
          <ul className="footer-links">
            <li><Link href="/impressum">{t.footer.imprint}</Link></li>
            <li><Link href="/datenschutz">{t.footer.privacy}</Link></li>
            <li><Link href="/kontakt">{t.nav.contact}</Link></li>
          </ul>
          
          <span className="footer-copy">{t.footer.copyright}</span>
        </div>
      </footer>
    </>
  )
}
