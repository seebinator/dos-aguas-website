'use client'

import Navigation from '../../components/Navigation'

import Link from 'next/link'

const content = {
  nav: { services: 'Servicios', team: 'Equipo', blog: 'Blog', docs: 'Docs', contact: 'Contacto', dropbox: 'Dropbox' },
  footer: { imprint: 'Aviso Legal', privacy: 'Privacidad', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function ImpressumES() {
  return (
    <>
      <Navigation lang="es" />

      <main className="page-content">
        <section className="page-header">
          <div className="page-header-content">
            <p className="page-pretitle">Información legal</p>
            <h1 className="page-title">Aviso Legal</h1>
          </div>
        </section>

        <section className="content-section">
          <div className="content-container">
            <h2>Datos del titular</h2>
            <p>
              <strong>Dos Aguas Consulting</strong><br />
              Musterstraße 123<br />
              12345 Berlin<br />
              Alemania
            </p>

            <h3>Representante</h3>
            <p>Christian Seebach (Director)</p>

            <h3>Contacto</h3>
            <p>
              Teléfono: +49 (0) 123 456789<br />
              Correo: contact@dos-aguas.info<br />
              Web: www.dos-aguas.com
            </p>

            <h3>Registro mercantil</h3>
            <p>
              Inscrita en el Registro Mercantil<br />
              Registro: Amtsgericht Berlin-Charlottenburg<br />
              Número: HRB 123456
            </p>

            <h3>Número de identificación fiscal</h3>
            <p>DE 123 456 789</p>

            <h3>Responsable del contenido</h3>
            <p>Christian Seebach<br />Musterstraße 123<br />12345 Berlin</p>

            <h2>Exención de responsabilidad</h2>
            
            <h3>Responsabilidad por el contenido</h3>
            <p>Como proveedor de servicios, somos responsables de nuestro propio contenido en estas páginas de acuerdo con las leyes generales. Sin embargo, no estamos obligados a supervisar información de terceros transmitida o almacenada.</p>

            <h3>Responsabilidad por enlaces</h3>
            <p>Nuestra oferta contiene enlaces a sitios web externos de terceros sobre cuyos contenidos no tenemos influencia. Por lo tanto, no podemos asumir ninguna responsabilidad por estos contenidos externos.</p>

            <h3>Derechos de autor</h3>
            <p>Los contenidos y obras creadas por los operadores de estas páginas están sujetos a la ley alemana de derechos de autor. La reproducción, edición, distribución y cualquier tipo de explotación fuera de los límites de la ley de derechos de autor requieren el consentimiento por escrito del autor respectivo.</p>

            <h2>Resolución de disputas</h2>
            <p>La Comisión Europea proporciona una plataforma para la resolución de disputas en línea (OS): https://ec.europa.eu/consumers/odr/</p>
            <p>No estamos dispuestos ni obligados a participar en procedimientos de resolución de disputas ante una junta de arbitraje de consumo.</p>
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
