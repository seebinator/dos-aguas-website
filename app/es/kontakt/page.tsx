'use client'

import Navigation from '../../components/Navigation'

import Link from 'next/link'

const content = {
  nav: { services: 'Servicios', team: 'Equipo', blog: 'Blog', docs: 'Docs', contact: 'Contacto', dropbox: 'Dropbox' },
  page: { subtitle: 'Hablemos', title: 'Contacto', description: '¿Tiene preguntas o desea discutir un proyecto? Estamos aquí para usted.' },
  form: { name: 'Nombre', email: 'Correo electrónico', company: 'Empresa', message: 'Mensaje', submit: 'Enviar mensaje', sending: 'Enviando...', success: '¡Gracias! Nos pondremos en contacto pronto.' },
  info: { title: 'Información de contacto', email: 'Correo electrónico', phone: 'Teléfono', address: 'Dirección', hours: 'Disponibilidad', hoursValue: 'Lun–Vie: 9:00–18:00' },
  footer: { imprint: 'Aviso Legal', privacy: 'Privacidad', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function KontaktES() {
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

        <section className="contact-section">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <form className="contact-form" action="https://formspree.io/f/mjgedgjq" method="POST">
                <input type="hidden" name="_language" value="es" />
                <input type="hidden" name="_next" value="https://dos-aguas.consulting/es/success/" />
                
                <div className="form-group"><label htmlFor="name">{content.form.name}</label><input type="text" id="name" name="name" required /></div>
                
                <div className="form-group"><label htmlFor="email">{content.form.email}</label><input type="email" id="email" name="email" required /></div>
                
                <div className="form-group"><label htmlFor="company">{content.form.company}</label><input type="text" id="company" name="company" /></div>
                
                <div className="form-group"><label htmlFor="message">{content.form.message}</label><textarea id="message" name="message" rows={5} required></textarea></div>
                
                <button type="submit" className="btn-primary btn-large">{content.form.submit}</button>
              </form>
            </div>
            
            <div className="contact-info">
              <h3>{content.info.title}</h3>
              
              <div className="info-item"><span className="info-label">{content.info.email}</span><a href="mailto:contact@dos-aguas.info" className="info-value">contact@dos-aguas.info</a></div>
              <div className="info-item"><span className="info-label">{content.info.phone}</span><span className="info-value">+49 (0) 123 456789</span></div>
              <div className="info-item"><span className="info-label">{content.info.address}</span><span className="info-value">Dos Aguas Consulting<br/>Musterstraße 123<br/>12345 Berlin</span></div>
              <div className="info-item"><span className="info-label">{content.info.hours}</span><span className="info-value">{content.info.hoursValue}</span></div>
            </div>
          </div>
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
