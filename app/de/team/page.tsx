import Link from 'next/link'

const agents = [
  { id: 'juan', name: 'Juan', role: 'AI & Strategie', image: '/images/agent-juan.png' },
  { id: 'conny', name: 'Conny', role: 'Design & UI/UX', image: '/images/agent-conny.png' },
  { id: 'desire', name: 'Desire', role: 'Marketing & Content', image: '/images/agent-desire.png' },
  { id: 'mark', name: 'Mark', role: 'Business Intelligence', image: '/images/agent-mark.png' },
  { id: 'scotty', name: 'Scotty', role: 'Odoo & ERP', image: '/images/agent-scotty.png' },
  { id: 'spock', name: 'Spock', role: 'IT-Recht & Datenschutz', image: '/images/agent-spock.png' },
  { id: 'stefan', name: 'Stefan', role: 'Steuerberatung DE', image: '/images/agent-stefan.png' },
  { id: 'uhura', name: 'Uhura', role: 'Kundenbetreuung', image: '/images/agent-uhura.png' },
]

const content = {
  nav: { services: 'Services', team: 'Team', blog: 'Blog', docs: 'Docs', contact: 'Kontakt', dropbox: 'Dropbox' },
  page: { subtitle: '8 Spezialisten, ein Ziel', title: 'Unser Team', description: 'Lernen Sie die Menschen hinter Dos Aguas kennen.' },
  cta: 'Kontakt aufnehmen',
  footer: { imprint: 'Impressum', privacy: 'Datenschutz', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function TeamDE() {
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
            <Link href="/es/team/" className="lang-btn">🇪🇸 ES</Link>
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
          <Link href="/de/kontakt/" className="btn-primary btn-large">{content.cta}</Link>
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
