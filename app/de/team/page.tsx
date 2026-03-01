'use client'

import Navigation from '../../components/Navigation'
import Link from 'next/link'

const agents = [
  { id: 'juan', name: 'Juan', role: 'AI & Strategie', image: '/images/agent-juan.png' },
  { id: 'maria', name: 'Maria', role: 'Steuerberatung Mexiko', image: '/images/agent-conny.png' },
  { id: 'carlos', name: 'Carlos', role: 'Steuerberatung Deutschland', image: '/images/agent-stefan.png' },
  { id: 'luis', name: 'Luis', role: 'Odoo & ERP', image: '/images/agent-scotty.png' },
  { id: 'mark', name: 'Mark', role: 'Marketing & Content', image: '/images/agent-mark.png' },
  { id: 'jenny', name: 'Jenny', role: 'Business Intelligence', image: '/images/agent-desire.png' },
  { id: 'hector', name: 'Hector', role: 'UI/UX & Corporate Identity', image: '/images/agent-spock.png' },
  { id: 'sofia', name: 'Sofia', role: 'Kundenbetreuung', image: '/images/agent-uhura.png' },
]

const content = {
  page: { subtitle: '8 KI-Spezialisten, ein Ziel', title: 'Unsere KI-Agenten', description: 'Lernen Sie unsere KI-Agenten hinter Dos Aguas kennen.' },
  cta: 'Kontakt aufnehmen',
  footer: { imprint: 'Impressum', privacy: 'Datenschutz', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function TeamDE() {
  return (
    <>
      <Navigation lang="de" />

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
                <div className="team-card-content">
                  <h3>{agent.name}</h3>
                  <p className="team-card-role">{agent.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <Link href="/de/kontakt/" className="btn-primary">{content.cta}</Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <Link href="/de/" className="footer-logo">Dos Aguas</Link>
          <ul className="footer-links">
            <li><Link href="/de/impressum/">{content.footer.imprint}</Link></li>
            <li><Link href="/de/datenschutz/">{content.footer.privacy}</Link></li>
          </ul>
          <span className="footer-copy">{content.footer.copyright}</span>
        </div>
      </footer>
    </>
  )
}
