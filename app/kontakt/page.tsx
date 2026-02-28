import Link from 'next/link'

export default function ContactPage() {
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
            <p className="page-pretitle">Lassen Sie uns sprechen</p>
            <h1 className="page-title">Kontakt</h1>
            <p className="page-description">Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Wir sind für Sie da.</p>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <form className="contact-form" action="mailto:contact@dos-aguas.info" method="post" encType="text/plain">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-Mail</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Unternehmen</label>
                  <input type="text" id="company" name="company" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Nachricht</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                
                <button type="submit" className="btn-primary btn-large">
                  Nachricht senden
                </button>
              </form>
            </div>
            
            <div className="contact-info">
              <h3>Kontaktinformationen</h3>
              
              <div className="info-item">
                <span className="info-label">E-Mail</span>
                <a href="mailto:contact@dos-aguas.info" className="info-value">contact@dos-aguas.info</a>
              </div>
              
              <div className="info-item">
                <span className="info-label">Telefon</span>
                <span className="info-value">+49 (0) 123 456789</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">Adresse</span>
                <span className="info-value">
                  Dos Aguas Consulting
                  <br />Musterstraße 123
                  <br />12345 Berlin
                </span>
              </div>
              
              <div className="info-item">
                <span className="info-label">Erreichbarkeit</span>
                <span className="info-value">Mo–Fr: 9:00–18:00 Uhr</span>
              </div>
            </div>
          </div>
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
