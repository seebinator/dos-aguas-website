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

export default function TeamPage() {
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
            <p className="page-pretitle">8 Spezialisten, ein Ziel</p>
            <h1 className="page-title">Unser Team</h1>
            <p className="page-description">Lernen Sie die Menschen hinter Dos Aguas kennen. Jedes Mitglied bringt einzigartige Expertise für Ihren Erfolg.</p>
          </div>
        </section>

        <section className="team-section">
          <div className="team-grid">
            {agents.map((agent) => (
              <div key={agent.id} className="team-card">
                <div className="team-card-image">
                  <img src={agent.image} alt={agent.name} />
                </div>
                <div className="team-card-info">
                  <h3>{agent.name}</h3>
                  <p>{agent.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="team-photo-section">
          <div className="team-photo-container">
            <img src="/images/team-photo.png" alt="Dos Aguas Team" />
          </div>
        </section>

        <section className="cta-section">
          <Link href="/kontakt/" className="btn-primary btn-large">
            Kontakt aufnehmen
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
