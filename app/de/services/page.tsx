import Link from 'next/link'

const services = [
  { icon: '💼', title: 'Steuerberatung', description: 'Kompetente Begleitung in Deutschland und Mexiko. Wir kennen beide Steuersysteme.' },
  { icon: '⚖️', title: 'IT-Recht & Datenschutz', description: 'DSGVO, LFPDPPP und internationale Compliance. Rechtssichere digitale Prozesse.' },
  { icon: '⚙️', title: 'Odoo Implementierung', description: 'Maßgeschneiderte ERP-Lösungen, die skalieren. Von der Beratung bis zum Go-live.' },
  { icon: '🚀', title: 'Digitale Transformation', description: 'Prozessoptimierung und Business Intelligence. Wir bringen Ihr Unternehmen in die digitale Zukunft.' },
]

const content = {
  nav: { services: 'Services', team: 'Team', blog: 'Blog', docs: 'Docs', contact: 'Kontakt', dropbox: 'Dropbox' },
  page: { subtitle: 'Maßgeschneiderte Lösungen', title: 'Unsere Services', description: 'Von der Steuerberatung bis zur digitalen Transformation – wir bieten alle Services aus einer Hand.' },
  cta: { title: 'Lassen Sie uns zusammenarbeiten', desc: 'Kontaktieren Sie uns für ein unverbindliches Erstgespräch.', button: 'Beratungstermin vereinbaren' },
  footer: { imprint: 'Impressum', privacy: 'Datenschutz', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function ServicesDE() {
  return (
    <>
      <nav className="nav">
        <div className="nav-content">
          <Link href="/de/" className="nav-logo"><span className="nav-logo-icon">∞</span><span className="nav-logo-text"><span className="nav-logo-name">Dos Aguas</span><span className="nav-logo-tagline">Consulting</span></span></Link>
          <ul className="nav-links">
            <li><Link href="/de/services/">{content.nav.services}</Link></li>
            <li><Link href="/de/team/">{content.nav.team}</Link></li>
            <li><Link href="/de/blog/">{content.nav.blog}</Link></li>
            <li><Link href="/de/docs/">{content.nav.docs}</Link></li>
            <li><Link href="/de/kontakt/">{content.nav.contact}</Link></li>
          </ul>
          <div className="nav-actions">
            <Link href="/es/services/" className="lang-btn">🇪🇸 ES</Link>
            <button className="btn-nav">{content.nav.dropbox}</button>
          </div>
        </div>
      </nav>

      <main className="page-content">
        <section className="page-header">
          <div className="page-header-content">
            <p className="page-pretitle">{content.page.subtitle}</p>
            <h1 className="page-title">{content.page.title}</h1>
            <p className="page-description">{content.page.description}</p>
          </div>
        </section>

        <section className="services-section">
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <p className="cta-pretitle">{content.cta.title}</p>
          <p className="cta-description">{content.cta.desc}</p>
          <Link href="/de/kontakt/" className="btn-primary btn-large">{content.cta.button}</Link>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <Link href="/de/" className="footer-logo">Dos Aguas</Link>
          <ul className="footer-links">
            <li><Link href="/de/impressum/">{content.footer.imprint}</Link></li>
            <li><Link href="/de/datenschutz/">{content.footer.privacy}</Link></li>
            <li><Link href="/de/kontakt/">{content.nav.contact}</Link></li>
          </ul>
          <span className="footer-copy">{content.footer.copyright}</span>
        </div>
      </footer>
    </>
  )
}
