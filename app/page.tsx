import Link from 'next/link'

export default function Home() {
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
            <li><Link href="/services">Services ▾</Link></li>
            <li><Link href="/team">Team ▾</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/docs">Docs</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
          
          <div className="nav-actions">
            <div className="lang-switcher">
              <button className="lang-btn">🇩🇪 DE</button>
              <button className="lang-btn active">🇪🇸 ES</button>
            </div>
            <button className="btn-nav">Dropbox</button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-pretitle">Bienvenido al portal interno</p>
            <h1 className="hero-title">
              Dos Aguas Panel de Equipo
            </h1>
            <Link href="/team" className="hero-cta">
              Descubrir equipo →
            </Link>
          </div>
          
          {/* Stats Bar */}
          <div className="stats-bar">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">8</div>
                <div className="stat-label">Agentes</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">3</div>
                <div className="stat-label">Idiomas</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">40%</div>
                <div className="stat-label">Crecimiento</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">/7</div>
                <div className="stat-label">Soporte</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="section-header">
            <p className="section-pretitle">Nuestros servicios</p>
            <h2 className="section-title">Todo para su éxito</h2>
            <p className="section-description">
              De la consultoría fiscal a la transformación digital – 
              le acompañamos en cada paso.
            </p>
          </div>
          
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Asesoría Fiscal</h3>
              <p>
                Acompañamiento competente en Alemania y México. 
                Conocemos ambos sistemas fiscales.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚖️</div>
              <h3>Derecho IT & Protección de Datos</h3>
              <p>
                GDPR, LFPDPPP y cumplimiento internacional. 
                Procesos digitales seguros.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>Implementación Odoo</h3>
              <p>
                Soluciones ERP a medida que escalan. 
                Desde la consulta hasta el go-live.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Transformación Digital</h3>
              <p>
                Optimización de procesos e inteligencia de negocios. 
                Llevamos su empresa al futuro digital.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <p className="cta-pretitle">¿Listo para el siguiente paso?</p>
          <h2 className="cta-title">Hablemos de su proyecto</h2>
          <p className="cta-description">
            Contáctenos para una consulta inicial sin compromiso. 
            Juntos daremos forma a su transformación digital.
          </p>
          <Link href="/kontakt" className="btn-primary">
            Contactar ahora →
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <Link href="/" className="footer-logo">Dos Aguas</Link>
          
          <ul className="footer-links">
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
          
          <span className="footer-copy">© 2026 Dos Aguas Consulting</span>
        </div>
      </footer>
    </>
  )
}
