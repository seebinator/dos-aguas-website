import Link from 'next/link'

const nav = {
  services: 'Services',
  team: 'Team',
  blog: 'Blog',
  docs: 'Docs',
  contact: 'Kontakt',
  dropbox: 'Dropbox',
}

const content = {
  hero: {
    pretitle: 'Willkommen im internen Portal',
    title: 'Dos Aguas Team Panel',
    cta: 'Team entdecken →',
  },
  stats: {
    agents: 'Agenten',
    languages: 'Sprachen',
    growth: 'Wachstum',
    support: 'Support',
  },
  services: {
    pretitle: 'Unsere Leistungen',
    title: 'Alles für Ihren Erfolg',
    description: 'Von der Steuerberatung bis zur digitalen Transformation – wir begleiten Sie auf jedem Schritt.',
    tax: { title: 'Steuerberatung', description: 'Kompetente Begleitung in Deutschland und Mexiko. Wir kennen beide Steuersysteme.' },
    legal: { title: 'IT-Recht & Datenschutz', description: 'DSGVO, LFPDPPP und internationale Compliance. Rechtssichere digitale Prozesse.' },
    odoo: { title: 'Odoo Implementierung', description: 'Maßgeschneiderte ERP-Lösungen, die skalieren. Von der Beratung bis zum Go-live.' },
    digital: { title: 'Digitale Transformation', description: 'Prozessoptimierung und Business Intelligence. Wir bringen Ihr Unternehmen in die digitale Zukunft.' },
  },
  cta: {
    pretitle: 'Bereit für den nächsten Schritt?',
    title: 'Lassen Sie uns über Ihr Projekt sprechen',
    description: 'Kontaktieren Sie uns für ein unverbindliches Erstgespräch. Gemeinsam gestalten wir Ihre digitale Transformation.',
    button: 'Jetzt kontaktieren →',
  },
  footer: {
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    copyright: '© 2026 Dos Aguas Consulting',
  },
  sideText: 'KI-BERATUNG • TRANSFERPREISE • MEXIKO',
}

export default function HomeDE() {
  return (
    <>
      <nav className="nav">
        <div className="nav-content">
          <Link href="/de/" className="nav-logo">
            <span className="nav-logo-icon">∞</span>
            <span className="nav-logo-text">
              <span className="nav-logo-name">Dos Aguas</span>
              <span className="nav-logo-tagline">Consulting</span>
            </span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/de/services/">{nav.services}</Link></li>
            <li><Link href="/de/team/">{nav.team}</Link></li>
            <li><Link href="/de/blog/">{nav.blog}</Link></li>
            <li><Link href="/de/docs/">{nav.docs}</Link></li>
            <li><Link href="/de/kontakt/">{nav.contact}</Link></li>
          </ul>
          <div className="nav-actions">
            <Link href="/es/" className="lang-btn">🇪🇸 ES</Link>
            <button className="btn-nav">{nav.dropbox}</button>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" data-side-text={content.sideText}>
          <div className="hero-content">
            <p className="hero-pretitle">{content.hero.pretitle}</p>
            <h1 className="hero-title">{content.hero.title}</h1>
            <Link href="/de/team/" className="hero-cta">{content.hero.cta}</Link>
          </div>
          
          <div className="stats-bar">
            <div className="stats-grid">
              <div className="stat-item"><div className="stat-value">8</div><div className="stat-label">{content.stats.agents}</div></div>
              <div className="stat-item"><div className="stat-value">3</div><div className="stat-label">{content.stats.languages}</div></div>
              <div className="stat-item"><div className="stat-value">40%</div><div className="stat-label">{content.stats.growth}</div></div>
              <div className="stat-item"><div className="stat-value">/7</div><div className="stat-label">{content.stats.support}</div></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <p className="section-pretitle">{content.services.pretitle}</p>
            <h2 className="section-title">{content.services.title}</h2>
            <p className="section-description">{content.services.description}</p>
          </div>
          
          <div className="feature-grid">
            <div className="feature-card"><div className="feature-icon">💼</div><h3>{content.services.tax.title}</h3><p>{content.services.tax.description}</p></div>
            <div className="feature-card"><div className="feature-icon">⚖️</div><h3>{content.services.legal.title}</h3><p>{content.services.legal.description}</p></div>
            <div className="feature-card"><div className="feature-icon">⚙️</div><h3>{content.services.odoo.title}</h3><p>{content.services.odoo.description}</p></div>
            <div className="feature-card"><div className="feature-icon">🚀</div><h3>{content.services.digital.title}</h3><p>{content.services.digital.description}</p></div>
          </div>
        </section>

        <section className="cta-section">
          <p className="cta-pretitle">{content.cta.pretitle}</p>
          <h2 className="cta-title">{content.cta.title}</h2>
          <p className="cta-description">{content.cta.description}</p>
          <Link href="/de/kontakt/" className="btn-primary">{content.cta.button}</Link>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <Link href="/de/" className="footer-logo">Dos Aguas</Link>
          <ul className="footer-links">
            <li><Link href="/de/impressum/">{content.footer.imprint}</Link></li>
            <li><Link href="/de/datenschutz/">{content.footer.privacy}</Link></li>
            <li><Link href="/de/kontakt/">{nav.contact}</Link></li>
          </ul>
          <span className="footer-copy">{content.footer.copyright}</span>
        </div>
      </footer>
    </>
  )
}
