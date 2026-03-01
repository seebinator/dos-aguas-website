'use client'

import Navigation from '../../components/Navigation'

import Link from 'next/link'

const content = {
  nav: { services: 'Services', team: 'Team', blog: 'Blog', docs: 'Docs', contact: 'Kontakt', dropbox: 'Dropbox' },
  footer: { imprint: 'Impressum', privacy: 'Datenschutz', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function DatenschutzDE() {
  return (
    <>
      <Navigation lang="de" />

      <main className="page-content">
        <section className="page-header">
          <div className="page-header-content">
            <p className="page-pretitle">Datenschutzerklärung</p>
            <h1 className="page-title">Datenschutz</h1>
          </div>
        </section>

        <section className="content-section">
          <div className="content-container">
            <h2>1. Datenschutz auf einen Blick</h2>
            
            <h3>Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>

            <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
            <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>

            <p><strong>Wofür nutzen wir Ihre Daten?</strong></p>
            <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>

            <h2>2. Hosting</h2>
            <p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3>Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              Dos Aguas Consulting<br />
              Christian Seebach<br />
              Musterstraße 123<br />
              12345 Berlin<br />
              Deutschland<br />
              E-Mail: contact@dos-aguas.info
            </p>

            <h3>Speicherdauer</h3>
            <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.</p>

            <h2>4. Datenerfassung auf dieser Website</h2>

            <h3>Kontaktformular</h3>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

            <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.</p>

            <h2>5. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul>
              <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten</li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Löschung Ihrer Daten zu verlangen</li>
              <li>Einschränkung der Verarbeitung zu verlangen</li>
              <li>Widerspruch gegen die Verarbeitung einzulegen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>

            <h2>6. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.</p>
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
