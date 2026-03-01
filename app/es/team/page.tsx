'use client'

import Navigation from '../../components/Navigation'

import Link from 'next/link'

const agents = [
  { id: 'juan', name: 'Juan', role: 'IA & Estrategia', image: '/images/agent-juan.png' },
  { id: 'maria', name: 'Maria', role: 'Asesoría Fiscal México', image: '/images/agent-conny.png' },
  { id: 'carlos', name: 'Carlos', role: 'Asesoría Fiscal Alemania', image: '/images/agent-stefan.png' },
  { id: 'luis', name: 'Luis', role: 'Odoo & ERP', image: '/images/agent-scotty.png' },
  { id: 'mark', name: 'Mark', role: 'Marketing & Contenido', image: '/images/agent-mark.png' },
  { id: 'jenny', name: 'Jenny', role: 'Inteligencia de Negocios', image: '/images/agent-desire.png' },
  { id: 'hector', name: 'Hector', role: 'UI/UX & Identidad Corporativa', image: '/images/agent-spock.png' },
  { id: 'sofia', name: 'Sofia', role: 'Atención al Cliente', image: '/images/agent-uhura.png' },
]

const content = {
  nav: { services: 'Servicios', team: 'Equipo', blog: 'Blog', docs: 'Docs', contact: 'Contacto', dropbox: 'Dropbox' },
  page: { subtitle: '8 especialistas de IA, un objetivo', title: 'Nuestro equipo de Agentes IA', description: 'Conozca a nuestros agentes de IA detrás de Dos Aguas.' },
  cta: 'Contactar',
  footer: { imprint: 'Aviso Legal', privacy: 'Privacidad', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function TeamES() {
  return (
    <>
      <Navigation lang="es" />

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
