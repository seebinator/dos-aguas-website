import Link from 'next/link'

const content = {
  nav: { services: 'Servicios', team: 'Equipo', blog: 'Blog', docs: 'Docs', contact: 'Contacto', dropbox: 'Dropbox' },
  page: {
    title: '¡Gracias!',
    subtitle: 'Mensaje enviado',
    description: 'Hemos recibido su mensaje y nos pondremos en contacto con usted dentro de 24 horas.',
    cta: 'Volver al inicio',
    contact: 'O contáctenos directamente:',
    email: 'Correo: contact@dos-aguas.info',
    phone: 'Tel: +49 (0) 123 456789',
  },
  footer: { imprint: 'Aviso Legal', privacy: 'Privacidad', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function SuccessES() {
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
            <Link href="/de/success/" className="lang-btn">🇩🇪 DE</Link>
            <button className="btn-nav">{content.nav.dropbox}</button>
          </div>
        </div>
      </nav>

      <main className="page-content">
        <section className="success-section">
          <div className="success-content">
            <div className="success-icon">✓</div>
            <p className="page-pretitle">{content.page.subtitle}</p>
            <h1 className="page-title">{content.page.title}</h1>
            <p className="success-description">{content.page.description}</p>
            
            <div className="success-contact">
              <p>{content.page.contact}</p>
              <p className="success-contact-item">{content.page.email}</p>
              <p className="success-contact-item">{content.page.phone}</p>
            </div>
            
            <Link href="/es/" className="btn-primary btn-large">{content.page.cta}</Link>
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
