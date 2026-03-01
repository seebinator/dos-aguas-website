'use client'

import Navigation from '../../components/Navigation'

import Link from 'next/link'

const content = {
  nav: { services: 'Services', team: 'Team', blog: 'Blog', docs: 'Docs', contact: 'Kontakt', dropbox: 'Dropbox' },
  page: {
    title: 'Vielen Dank!',
    subtitle: 'Nachricht gesendet',
    description: 'Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.',
    cta: 'Zurück zur Startseite',
    contact: 'Oder kontaktieren Sie uns direkt:',
    email: 'E-Mail: contact@dos-aguas.info',
    phone: 'Tel: +49 (0) 123 456789',
  },
  footer: { imprint: 'Impressum', privacy: 'Datenschutz', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function SuccessDE() {
  return (
    <>
      <Navigation lang="de" />

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
            
            <Link href="/de/" className="btn-primary btn-large">{content.page.cta}</Link>
          </div>
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
