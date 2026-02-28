import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-content">
          <Link href="/" className="nav-logo">
            Dos Aguas
          </Link>
          <ul className="nav-links">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/docs">Docs</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div className="container">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Jetzt verfügbar: Odoo 17 Integration
            </div>
            <h1 className="hero-title">
              <span className="hero-title-gradient">Ihre Brücke</span>
              <br />
              Deutschland–Mexiko
            </h1>
            <p className="hero-description">
              Steuerberatung, IT-Recht und digitale Transformation – 
              alles aus einer Hand für Ihr grenzüberschreitendes Geschäft.
            </p>
            <div className="hero-cta">
              <Link href="/kontakt" className="btn btn-primary btn-large">
                Projekt starten
              </Link>
              <Link href="/services" className="btn btn-secondary btn-large">
                Services entdecken
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">8</div>
                <div className="stat-label">Spezialisten im Team</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">2</div>
                <div className="stat-label">Länder, ein Team</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">50+</div>
                <div className="stat-label">Erfolgreiche Projekte</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Support verfügbar</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Unsere Expertise</span>
              <h2 className="section-title">Alles für Ihren Erfolg</h2>
              <p className="section-description">
                Von der Steuerberatung bis zur digitalen Transformation – 
                wir begleiten Sie auf jedem Schritt.
              </p>
            </div>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">💼</div>
                <h3>Steuerberatung</h3>
                <p>
                  Kompetente Begleitung in Deutschland und Mexiko. 
                  Wir kennen beide Steuersysteme und optimieren Ihre steuerliche Situation.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚖️</div>
                <h3>IT-Recht & Datenschutz</h3>
                <p>
                  DSGVO, LFPDPPP und internationale Compliance. 
                  Rechtssichere digitale Prozesse für Ihr Unternehmen.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚙️</div>
                <h3>Odoo Implementierung</h3>
                <p>
                  Maßgeschneiderte ERP-Lösungen, die skalieren. 
                  Von der Beratung bis zum Go-live an Ihrer Seite.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>Digitale Transformation</h3>
                <p>
                  Prozessoptimierung und Business Intelligence. 
                  Wir bringen Ihr Unternehmen in die digitale Zukunft.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal Section */}
        <section className="section">
          <div className="container-narrow">
            <div className="section-header">
              <span className="section-label">Developer First</span>
              <h2 className="section-title">Modernste Technologie</h2>
              <p className="section-description">
                Wir setzen auf bewährte und innovative Technologien 
                für maximale Effizienz und Skalierbarkeit.
              </p>
            </div>
            <div className="terminal">
              <div className="terminal-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
              </div>
              <div className="terminal-body">
                <div><span className="prompt">$</span> dos-aguas init projekt</div>
                <div style={{ marginTop: '0.5rem', color: '#00d4aa' }}>✓ Projekt initialisiert</div>
                <div style={{ color: '#00d4aa' }}>✓ Team zugewiesen</div>
                <div style={{ color: '#00d4aa' }}>✓ Timeline erstellt</div>
                <div style={{ marginTop: '0.5rem' }}><span className="prompt">$</span> _</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title">Bereit für den nächsten Schritt?</h2>
            <p className="cta-description">
              Lassen Sie uns gemeinsam Ihre digitale Transformation gestalten. 
              Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
            </p>
            <Link href="/kontakt" className="btn btn-primary btn-large">
              Termin vereinbaren
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <Link href="/" className="footer-logo">
            Dos Aguas
          </Link>
          <ul className="footer-links">
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
          <span className="footer-copy">
            © 2026 Dos Aguas Consulting
          </span>
        </div>
      </footer>
    </>
  )
}
