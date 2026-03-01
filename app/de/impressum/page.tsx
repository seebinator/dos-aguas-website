import Link from 'next/link'

const content = {
  nav: { services: 'Services', team: 'Team', blog: 'Blog', docs: 'Docs', contact: 'Kontakt', dropbox: 'Dropbox' },
  footer: { imprint: 'Impressum', privacy: 'Datenschutz', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function ImpressumDE() {
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
            <Link href="/es/impressum/" className="lang-btn">🇪🇸 ES</Link>
            <button className="btn-nav">{content.nav.dropbox}</button>
          </div>
        </div>
      </nav>

      <main className="page-content">
        <section className="page-header">
          <div className="page-header-content">
            <p className="page-pretitle">Rechtliche Informationen</p>
            <h1 className="page-title">Impressum</h1>
          </div>
        </section>

        <section className="content-section">
          <div className="content-container">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>Dos Aguas Consulting</strong><br />
              Musterstraße 123<br />
              12345 Berlin<br />
              Deutschland
            </p>

            <h3>Vertreten durch</h3>
            <p>Christian Seebach (Geschäftsführer)</p>

            <h3>Kontakt</h3>
            <p>
              Telefon: +49 (0) 123 456789<br />
              E-Mail: contact@dos-aguas.info<br />
              Web: www.dos-aguas.com
            </p>

            <h3>Registereintrag</h3>
            <p>
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Berlin-Charlottenburg<br />
              Handelsregister-Nummer: HRB 123456
            </p>

            <h3>Umsatzsteuer-ID</h3>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />DE 123 456 789</p>

            <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>Christian Seebach<br />Musterstraße 123<br />12345 Berlin</p>

            <h2>Haftungsausschluss</h2>
            
            <h3>Haftung für Inhalte</h3>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

            <h3>Haftung für Links</h3>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

            <h3>Urheberrecht</h3>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>

            <h2>Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/</p>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
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
