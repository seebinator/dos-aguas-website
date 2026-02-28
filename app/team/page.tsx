'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n-context'

const agents = [
  {
    id: 'juan',
    name: 'Juan',
    role: 'AI & Strategie',
    image: '/images/agent-juan.png',
  },
  {
    id: 'conny',
    name: 'Conny',
    role: 'Design & UI/UX',
    image: '/images/agent-conny.png',
  },
  {
    id: 'desire',
    name: 'Desire',
    role: 'Marketing & Content',
    image: '/images/agent-desire.png',
  },
  {
    id: 'mark',
    name: 'Mark',
    role: 'Business Intelligence',
    image: '/images/agent-mark.png',
  },
  {
    id: 'scotty',
    name: 'Scotty',
    role: 'Odoo & ERP',
    image: '/images/agent-scotty.png',
  },
  {
    id: 'spock',
    name: 'Spock',
    role: 'IT-Recht & Datenschutz',
    image: '/images/agent-spock.png',
  },
  {
    id: 'stefan',
    name: 'Stefan',
    role: 'Steuerberatung DE',
    image: '/images/agent-stefan.png',
  },
  {
    id: 'uhura',
    name: 'Uhura',
    role: 'Kundenbetreuung',
    image: '/images/agent-uhura.png',
  },
]

export default function TeamPage() {
  const { locale, t, setLocale } = useI18n()
  
  const translations = {
    de: {
      title: 'Unser Team',
      subtitle: '8 Spezialisten, ein Ziel',
      description: 'Lernen Sie die Menschen hinter Dos Aguas kennen. Jedes Mitglied bringt einzigartige Expertise für Ihren Erfolg.',
      cta: 'Kontakt aufnehmen',
    },
    es: {
      title: 'Nuestro Equipo',
      subtitle: '8 especialistas, un objetivo',
      description: 'Conozca a las personas detrás de Dos Aguas. Cada miembro aporta experiencia única para su éxito.',
      cta: 'Contactar',
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

        {/* Team Grid */}
        <section className="team-section">
          <div className="team-grid">
            {agents.map((agent) => (
              <div key={agent.id} className="team-card">
                <div className="team-card-image">
                  <img src={agent.image} alt={agent.name} />
                </div>
                <div className="team-card-info">
                  <h3>{agent.name}</h3>
                  <p>{agent.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Photo */}
        <section className="team-photo-section">
          <div className="team-photo-container">
            <img src="/images/team-photo.png" alt="Dos Aguas Team" />
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
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
