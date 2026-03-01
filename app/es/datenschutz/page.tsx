'use client'

import Navigation from '../../components/Navigation'

import Link from 'next/link'

const content = {
  nav: { services: 'Servicios', team: 'Equipo', blog: 'Blog', docs: 'Docs', contact: 'Contacto', dropbox: 'Dropbox' },
  footer: { imprint: 'Aviso Legal', privacy: 'Privacidad', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function DatenschutzES() {
  return (
    <>
      <Navigation lang="es" />

      <main className="page-content">
        <section className="page-header">
          <div className="page-header-content">
            <p className="page-pretitle">Política de privacidad</p>
            <h1 className="page-title">Privacidad</h1>
          </div>
        </section>

        <section className="content-section">
          <div className="content-container">
            <h2>1. Protección de datos en resumen</h2>
            
            <h3>Información general</h3>
            <p>La siguiente información proporciona una visión general sencilla de lo que sucede con sus datos personales cuando visita este sitio web. Los datos personales son todos los datos con los que puede ser identificado personalmente.</p>

            <h3>Recopilación de datos en este sitio web</h3>
            <p><strong>¿Quién es responsable de la recopilación de datos en este sitio web?</strong></p>
            <p>El procesamiento de datos en este sitio web es realizado por el operador del sitio web. Puede encontrar sus datos de contacto en el aviso legal de este sitio web.</p>

            <p><strong>¿Cómo recopilamos sus datos?</strong></p>
            <p>Sus datos se recopilan por un lado cuando nos los proporciona. Esto puede ser, por ejemplo, datos que introduce en un formulario de contacto.</p>

            <p><strong>¿Para qué utilizamos sus datos?</strong></p>
            <p>Parte de los datos se recopila para garantizar el funcionamiento sin errores del sitio web. Otros datos pueden utilizarse para analizar su comportamiento de usuario.</p>

            <h2>2. Alojamiento</h2>
            <p>Este sitio web está alojado en un proveedor externo (Hoster). Los datos personales recopilados en este sitio web se almacenan en los servidores del Hoster.</p>

            <h2>3. Información general y obligatoria</h2>

            <h3>Protección de datos</h3>
            <p>Los operadores de estas páginas toman muy en serio la protección de sus datos personales. Tratamos sus datos personales de forma confidencial y de acuerdo con las regulaciones legales de protección de datos y esta política de privacidad.</p>

            <h3>Nota sobre la entidad responsable</h3>
            <p>La entidad responsable del procesamiento de datos en este sitio web es:</p>
            <p>
              Dos Aguas Consulting<br />
              Christian Seebach<br />
              Musterstraße 123<br />
              12345 Berlin<br />
              Alemania<br />
              Correo: contact@dos-aguas.info
            </p>

            <h3>Período de retención</h3>
            <p>A menos que se indique un período de retención más específico dentro de esta política de privacidad, sus datos personales permanecen con nosotros hasta que el propósito del procesamiento de datos ya no sea aplicable.</p>

            <h2>4. Recopilación de datos en este sitio web</h2>

            <h3>Formulario de contacto</h3>
            <p>Si nos envía consultas a través del formulario de contacto, sus datos del formulario de consulta, incluyendo los datos de contacto que proporcionó allí, serán almacenados por nosotros para procesar la consulta y en caso de preguntas de seguimiento. No compartimos estos datos sin su consentimiento.</p>

            <h3>Consulta por correo electrónico, teléfono o fax</h3>
            <p>Si nos contacta por correo electrónico, teléfono o fax, su consulta, incluyendo todos los datos personales resultantes, será almacenada y procesada por nosotros para procesar su solicitud.</p>

            <h2>5. Sus derechos</h2>
            <p>En cualquier momento tiene derecho a:</p>
            <ul>
              <li>Obtener información sobre sus datos almacenados con nosotros</li>
              <li>Solicitar la corrección de datos incorrectos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Solicitar la restricción del procesamiento</li>
              <li>Oponerse al procesamiento</li>
              <li>Solicitar la portabilidad de datos</li>
            </ul>

            <h2>6. Cifrado SSL o TLS</h2>
            <p>Este sitio utiliza cifrado SSL o TLS por razones de seguridad y para proteger la transmisión de contenido confidencial.</p>
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
