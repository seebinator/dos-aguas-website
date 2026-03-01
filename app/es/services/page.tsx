'use client'

import Navigation from '../../components/Navigation'

import Link from 'next/link'

const services = [
  { icon: '🤖', title: 'Consultoría IA', description: 'Asesoramiento estratégico para la implementación de Inteligencia Artificial en su empresa. Desde el análisis de procesos hasta la implementación.' },
  { icon: '💱', title: 'Estrategias de Precios de Transferencia', description: 'Optimización de su fijación de precios transfronteriza entre Alemania y México. Conforme fiscal y económicamente eficiente.' },
  { icon: '⚙️', title: 'Implementación Odoo', description: 'Soluciones ERP a medida que escalan. Desde la consulta hasta el go-live a su lado.' },
  { icon: '⚖️', title: 'Derecho IT & Protección de Datos', description: 'GDPR, LFPDPPP y cumplimiento internacional. Procesos digitales seguros para su empresa.' },
  { icon: '🚀', title: 'Transformación Digital', description: 'Transformación digital integral de su empresa. Desde la estrategia hasta la implementación de nuevas tecnologías.' },
  { icon: '💼', title: 'Asesoría Fiscal', description: 'Asesoramiento fiscal competente en Alemania y México. Conocemos ambos sistemas fiscales y optimizamos su situación tributaria.' },
]

const content = {
  nav: { services: 'Servicios', team: 'Equipo', blog: 'Blog', docs: 'Docs', contact: 'Contacto', dropbox: 'Dropbox' },
  page: { subtitle: 'Soluciones a medida', title: 'Nuestros Servicios', description: 'De consultoría IA a asesoría fiscal – ofrecemos todos los servicios de una sola mano.' },
  cta: { title: 'Trabajemos juntos', desc: 'Contáctenos para una consulta inicial sin compromiso.', button: 'Cita de consultoría' },
  footer: { imprint: 'Aviso Legal', privacy: 'Privacidad', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function ServicesES() {
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

        <section className="services-section">
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <p className="cta-pretitle">{content.cta.title}</p>
          <p className="cta-description">{content.cta.desc}</p>
          <Link href="/es/kontakt/" className="btn-primary btn-large">{content.cta.button}</Link>
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
