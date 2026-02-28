import Link from 'next/link'

const content = {
  nav: { services: 'Servicios', team: 'Equipo', blog: 'Blog', docs: 'Docs', contact: 'Contacto', dropbox: 'Dropbox' },
  page: { subtitle: 'Hablemos', title: 'Contacto', description: '¿Tiene preguntas o desea discutir un proyecto? Estamos aquí para usted.' },
  form: { name: 'Nombre', email: 'Correo electrónico', company: 'Empresa', message: 'Mensaje', submit: 'Enviar mensaje' },
  info: { title: 'Información de contacto', email: 'Correo electrónico', phone: 'Teléfono', address: 'Dirección', hours: 'Disponibilidad', hoursValue: 'Lun–Vie: 9:00–18:00' },
  footer: { imprint: 'Aviso Legal', privacy: 'Privacidad', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function KontaktES() {
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
            <Link href="/de/kontakt/" className="lang-btn">🇩🇪 DE</Link>
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

        <section className="contact-section">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <form className="contact-form" action="mailto:contact@dos-aguas.info" method="post" encType="text/plain">
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
