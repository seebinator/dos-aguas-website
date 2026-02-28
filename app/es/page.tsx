import Link from 'next/link'

const nav = {
  services: 'Servicios',
  team: 'Equipo',
  blog: 'Blog',
  docs: 'Docs',
  contact: 'Contacto',
  dropbox: 'Dropbox',
}

const content = {
  hero: {
    pretitle: 'Bienvenido al portal interno',
    title: 'Dos Aguas Panel de Equipo',
    cta: 'Descubrir equipo →',
  },
  stats: {
    agents: 'Agentes',
    languages: 'Idiomas',
    growth: 'Crecimiento',
    support: 'Soporte',
  },
  services: {
    pretitle: 'Nuestros servicios',
    title: 'Todo para su éxito',
    description: 'De consultoría IA a implementación Odoo – le acompañamos en cada paso.',
    ai: { title: 'Consultoría IA', description: 'Asesoramiento estratégico para la implementación de Inteligencia Artificial en su empresa.' },
    transfer: { title: 'Estrategias de Precios de Transferencia', description: 'Optimización de su fijación de precios transfronteriza entre Alemania y México.' },
    odoo: { title: 'Implementación Odoo', description: 'Soluciones ERP a medida que escalan. Desde la consulta hasta el go-live.' },
    legal: { title: 'Derecho IT & Protección de Datos', description: 'GDPR, LFPDPPP y cumplimiento internacional. Procesos digitales seguros.' },
  },
  cta: {
    pretitle: '¿Listo para el siguiente paso?',
    title: 'Hablemos de su proyecto',
    description: 'Contáctenos para una consulta inicial sin compromiso. Juntos daremos forma a su transformación digital.',
    button: 'Contactar ahora →',
  },
  footer: {
    imprint: 'Aviso Legal',
    privacy: 'Privacidad',
    copyright: '© 2026 Dos Aguas Consulting',
  },
  sideText: 'CONSULTORÍA IA • PRECIOS DE TRANSFERENCIA • MÉXICO',
}

export default function HomeES() {
  return (
    <>
      <nav className="nav">
        <div className="nav-content">
          <Link href="/es/" className="nav-logo">
            <span className="nav-logo-icon">∞</span>
            <span className="nav-logo-text">
              <span className="nav-logo-name">Dos Aguas</span>
              <span className="nav-logo-tagline">Consulting</span>
            </span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/es/services/">{nav.services}</Link></li>
            <li><Link href="/es/team/">{nav.team}</Link></li>
            <li><Link href="/es/blog/">{nav.blog}</Link></li>
            <li><Link href="/es/docs/">{nav.docs}</Link></li>
            <li><Link href="/es/kontakt/">{nav.contact}</Link></li>
          </ul>
          <div className="nav-actions">
            <Link href="/de/" className="lang-btn">🇩🇪 DE</Link>
            <button className="btn-nav">{nav.dropbox}</button>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" data-side-text={content.sideText}>
          <div className="hero-content">
            <p className="hero-pretitle">{content.hero.pretitle}</p>
            <h1 className="hero-title">{content.hero.title}</h1>
            <Link href="/es/team/" className="hero-cta">{content.hero.cta}</Link>
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
            <div className="feature-card"><div className="feature-icon">🤖</div><h3>{content.services.ai.title}</h3><p>{content.services.ai.description}</p></div>
            <div className="feature-card"><div className="feature-icon">💱</div><h3>{content.services.transfer.title}</h3><p>{content.services.transfer.description}</p></div>
            <div className="feature-card"><div className="feature-icon">⚙️</div><h3>{content.services.odoo.title}</h3><p>{content.services.odoo.description}</p></div>
            <div className="feature-card"><div className="feature-icon">⚖️</div><h3>{content.services.legal.title}</h3><p>{content.services.legal.description}</p></div>
          </div>
        </section>

        <section className="cta-section">
          <p className="cta-pretitle">{content.cta.pretitle}</p>
          <h2 className="cta-title">{content.cta.title}</h2>
          <p className="cta-description">{content.cta.description}</p>
          <Link href="/es/kontakt/" className="btn-primary">{content.cta.button}</Link>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <Link href="/es/" className="footer-logo">Dos Aguas</Link>
          <ul className="footer-links">
            <li><Link href="/es/impressum/">{content.footer.imprint}</Link></li>
            <li><Link href="/es/datenschutz/">{content.footer.privacy}</Link></li>
            <li><Link href="/es/kontakt/">{nav.contact}</Link></li>
          </ul>
          <span className="footer-copy">{content.footer.copyright}</span>
        </div>
      </footer>
    </>
  )
}
