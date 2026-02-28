import Link from 'next/link'

const services = [
  { id: 'tax', icon: '💼', title: 'Steuerberatung', description: 'Kompetente Begleitung in Deutschland und Mexiko. Wir kennen beide Steuersysteme.' },
  { id: 'legal', icon: '⚖️', title: 'IT-Recht & Datenschutz', description: 'DSGVO, LFPDPPP und internationale Compliance. Rechtssichere digitale Prozesse.' },
  { id: 'odoo', icon: '⚙️', title: 'Odoo Implementierung', description: 'Maßgeschneiderte ERP-Lösungen, die skalieren. Von der Beratung bis zum Go-live.' },
  { id: 'digital', icon: '🚀', title: 'Digitale Transformation', description: 'Prozessoptimierung und Business Intelligence. Wir bringen Ihr Unternehmen in die digitale Zukunft.' },
]

export default function ServicesPage() {
  return (
    <>
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
            <li><Link href="/services/">Services</Link></li>
            <li><Link href="/team/">Team</Link></li>
            <li><Link href="/blog/">Blog</Link></li>
            <li><Link href="/docs/">Docs</Link></li>
            <li><Link href="/kontakt/">Kontakt</Link></li>
          </ul>
          <div className="nav-actions">
            <button className="btn-nav">Dropbox</button>
          </div>
        </div>
      </nav>

      <main className="page-content">
        <section className="page-header">
          <div className="page-header-content">
            <p className="page-pretitle">Maßgeschneiderte Lösungen</p>
            <h1 className="page-title">Unsere Services</h1>
            <p className="page-description">Von der Steuerberatung bis zur digitalen Transformation – wir bieten alle Services aus einer Hand.</p>
          </div>
        </section>

        <section className="services-section">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <p className="cta-pretitle">Lassen Sie uns zusammenarbeiten</p>
          <p className="cta-description">Kontaktieren Sie uns für ein unverbindliches Erstgespräch.</p>
          <Link href="/kontakt/" className="btn-primary btn-large">
            Beratungstermin vereinbaren
          </Link>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <Link href="/" className="footer-logo">Dos Aguas</Link>
          <ul className="footer-links">
            <li><Link href="/impressum/">Impressum</Link></li>
            <li><Link href="/datenschutz/">Datenschutz</Link></li>
            <li><Link href="/kontakt/">Kontakt</Link></li>
          </ul>
          <span className="footer-copy">© 2026 Dos Aguas Consulting</span>
        </div>
      </footer>
    </>
  )
}
