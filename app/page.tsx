import Link from 'next/link'

export default function Home() {
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
            <li><Link href="/de/services/">Services</Link></li>
            <li><Link href="/de/team/">Team</Link></li>
            <li><Link href="/de/blog/">Blog</Link></li>
            <li><Link href="/de/docs/">Docs</Link></li>
            <li><Link href="/de/kontakt/">Kontakt</Link></li>
          </ul>
          <div className="nav-actions">
            <Link href="/es/" className="lang-btn">🇪🇸 ES</Link>
            <button className="btn-nav">Dropbox</button>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" data-side-text="KI-BERATUNG • TRANSFERPREISE • MEXIKO">
          <div className="hero-content">
            <p className="hero-pretitle">Willkommen im internen Portal</p>
            <h1 className="hero-title">Dos Aguas Team Panel</h1>
            <Link href="/de/team/" className="hero-cta">Team entdecken →</Link>
          </div>
          
          <div className="stats-bar">
            <div className="stats-grid">
              <div className="stat-item"><div className="stat-value">8</div><div className="stat-label">Agenten</div></div>
              <div className="stat-item"><div className="stat-value">3</div><div className="stat-label">Sprachen</div></div>
              <div className="stat-item"><div className="stat-value">40%</div><div className="stat-label">Wachstum</div></div>
              <div className="stat-item"><div className="stat-value">/7</div><div className="stat-label">Support</div></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <p className="section-pretitle">Unsere Leistungen</p>
            <h2 className="section-title">Alles für Ihren Erfolg</h2>
            <p className="section-description">Von der Steuerberatung bis zur digitalen Transformation – wir begleiten Sie auf jedem Schritt.</p>
          </div>
          
          <div className="feature-grid">
            <div className="feature-card"><div className="feature-icon">🤖</div><h3>KI-Beratung</h3><p>Strategische Beratung für den Einsatz von Künstlicher Intelligenz in Ihrem Unternehmen.</p></div>
            <div className="feature-card"><div className="feature-icon">💱</div><h3>Transferpreis Strategien</h3><p>Optimierung Ihrer grenzüberschreitenden Preisgestaltung zwischen Deutschland und Mexiko.</p></div>
            <div className="feature-card"><div className="feature-icon">⚙️</div><h3>Odoo Implementierung</h3><p>Maßgeschneiderte ERP-Lösungen, die skalieren. Von der Beratung bis zum Go-live.</p></div>
            <div className="feature-card"><div className="feature-icon">⚖️</div><h3>IT-Recht & Datenschutz</h3><p>DSGVO, LFPDPPP und internationale Compliance. Rechtssichere digitale Prozesse.</p></div>
          </div>
        </section>

        <section className="cta-section">
          <p className="cta-pretitle">Bereit für den nächsten Schritt?</p>
          <h2 className="cta-title">Lassen Sie uns über Ihr Projekt sprechen</h2>
          <p className="cta-description">Kontaktieren Sie uns für ein unverbindliches Erstgespräch. Gemeinsam gestalten wir Ihre digitale Transformation.</p>
          <Link href="/de/kontakt/" className="btn-primary">Jetzt kontaktieren →</Link>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <Link href="/de/" className="footer-logo">Dos Aguas</Link>
          <ul className="footer-links">
            <li><Link href="/de/impressum/">Impressum</Link></li>
            <li><Link href="/de/datenschutz/">Datenschutz</Link></li>
            <li><Link href="/de/kontakt/">Kontakt</Link></li>
          </ul>
          <span className="footer-copy">© 2026 Dos Aguas Consulting</span>
        </div>
      </footer>
    </>
  )
}
