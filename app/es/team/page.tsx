import Link from 'next/link'

const agents = [
  { id: 'juan', name: 'Juan', role: 'IA & Estrategia', image: '/images/agent-juan.png' },
  { id: 'maria', name: 'Maria', role: 'Asesoría Fiscal México', image: '/images/agent-conny.png' },
  { id: 'carlos', name: 'Carlos', role: 'Asesoría Fiscal Alemania', image: '/images/agent-stefan.png' },
  { id: 'luis', name: 'Luis', role: 'Odoo & ERP', image: '/images/agent-scotty.png' },
  { id: 'mark', name: 'Mark', role: 'Marketing & Contenido', image: '/images/agent-mark.png' },
  { id: 'diego', name: 'Diego', role: 'Inteligencia de Negocios', image: '/images/agent-desire.png' },
  { id: 'design', name: 'Design', role: 'UI/UX & Identidad Corporativa', image: '/images/agent-spock.png' },
  { id: 'sofia', name: 'Sofia', role: 'Atención al Cliente', image: '/images/agent-uhura.png' },
]

const content = {
  nav: { services: 'Servicios', team: 'Equipo', blog: 'Blog', docs: 'Docs', contact: 'Contacto', dropbox: 'Dropbox' },
  page: { subtitle: '8 especialistas, un objetivo', title: 'Nuestro Equipo', description: 'Conozca a las personas detrás de Dos Aguas.' },
  cta: 'Contactar',
  footer: { imprint: 'Aviso Legal', privacy: 'Privacidad', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function TeamES() {
  return (
    <>
      <nav className="nav">
        <div className="nav-content">
          <Link href="/es/" className="nav-logo"><span className="nav-logo-icon">∞</span><span className="nav-logo-text"><span className="nav-logo-name">Dos Aguas</span><span className="nav-logo-tagline">Consulting</span></span></Link>
          <ul className="nav-links">
            <li><Link href="/es/services/">{content.nav.services}</Link></li>
            <li><Link href="/es/team/">{content.nav.team}</Link></li>
            <li><Link href="/es/blog/">{content.nav.blog}</Link></li>
            <li><Link href="/es/docs/">{content.nav.docs}</Link></li>
            <li><Link href="/es/kontakt/">{content.nav.contact}</Link></li>
          </ul>
          <div className="nav-actions">
            <Link href="/de/team/" className="lang-btn">🇩🇪 DE</Link>
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

        <section className="team-section">
          <div className="team-grid">
            {agents.map((agent) => (
              <div key={agent.id} className="team-card">
                <div className="team-card-image"><img src={agent.image} alt={agent.name} /></div>
                <div className="team-card-info"><h3>{agent.name}</h3><p>{agent.role}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="team-photo-section">
          <div className="team-photo-container"><img src="/images/team-photo.png" alt="Dos Aguas Team" /></div>
        </section>

        <section className="cta-section">
          <Link href="/es/kontakt/" className="btn-primary btn-large">{content.cta}</Link>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <Link href="/es/" className="footer-logo">Dos Aguas</Link>
          <ul className="footer-links">
            <li><Link href="/es/impressum/">{content.footer.imprint}</Link></li>
            <li><Link href="/es/datenschutz/">{content.footer.privacy}</Link></li>
            <li><Link href="/es/kontakt/">{content.nav.contact}</Link></li>
          </ul>
          <span className="footer-copy">{content.footer.copyright}</span>
        </div>
      </footer>
    </>
  )
}
