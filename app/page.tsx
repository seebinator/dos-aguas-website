import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Dos Aguas Consulting
          </h1>
          <p className="hero-subtitle">
            Ihre Brücke zwischen Deutschland und Mexiko
          </p>
          <p className="hero-description">
            Steuerberatung · IT-Recht · Odoo · Digitale Transformation
          </p>
          <div className="hero-cta">
            <Link href="/kontakt" className="btn-primary">
              Kontakt aufnehmen
            </Link>
            <Link href="/services" className="btn-secondary">
              Unsere Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Unsere Expertise</h2>
          <div className="grid">
            <div className="card">
              <h3>Steuerberatung</h3>
              <p>Deutschland & Mexiko - kompetente Begleitung in beiden Rechtsordnungen</p>
            </div>
            <div className="card">
              <h3>IT-Recht & Datenschutz</h3>
              <p>DSGVO, LFPDPPP und internationale Compliance</p>
            </div>
            <div className="card">
              <h3>Odoo Implementierung</h3>
              <p>Maßgeschneiderte ERP-Lösungen für Ihr Unternehmen</p>
            </div>
            <div className="card">
              <h3>Digitale Transformation</h3>
              <p>Prozessoptimierung und Business Intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Aktuelles aus dem Blog</h2>
          <div className="grid">
            <article className="card card-hover">
              <span className="tag">Blog</span>
              <h3>Willkommen bei Dos Aguas</h3>
              <p>Unsere neue Website ist online - entdecken Sie unsere Services und Expertise.</p>
              <Link href="/blog/willkommen" className="link">Weiterlesen →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Bereit für den nächsten Schritt?</h2>
          <p className="mb-8">Lassen Sie uns gemeinsam Ihre digitale Transformation gestalten.</p>
          <Link href="/kontakt" className="btn-primary btn-large">
            Projekt besprechen
          </Link>
        </div>
      </section>
    </main>
  )
}
