'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n-context'

export default function ContactPage() {
  const { locale, t, setLocale } = useI18n()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  
  const translations = {
    de: {
      title: 'Kontakt',
      subtitle: 'Lassen Sie uns sprechen',
      description: 'Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Wir sind für Sie da.',
      form: {
        name: 'Name',
        email: 'E-Mail',
        company: 'Unternehmen',
        service: 'Service',
        message: 'Nachricht',
        submit: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: 'Vielen Dank! Wir melden uns bald bei Ihnen.',
      },
      services: {
        tax: 'Steuerberatung',
        legal: 'IT-Recht & Datenschutz',
        odoo: 'Odoo Implementierung',
        digital: 'Digitale Transformation',
        other: 'Sonstiges',
      },
      info: {
        title: 'Kontaktinformationen',
        email: 'E-Mail',
        phone: 'Telefon',
        address: 'Adresse',
        hours: 'Erreichbarkeit',
        hoursValue: 'Mo–Fr: 9:00–18:00 Uhr',
      },
    },
    es: {
      title: 'Contacto',
      subtitle: 'Hablemos',
      description: '¿Tiene preguntas o desea discutir un proyecto? Estamos aquí para usted.',
      form: {
        name: 'Nombre',
        email: 'Correo electrónico',
        company: 'Empresa',
        service: 'Servicio',
        message: 'Mensaje',
        submit: 'Enviar mensaje',
        sending: 'Enviando...',
        success: '¡Gracias! Nos pondremos en contacto pronto.',
      },
      services: {
        tax: 'Asesoría Fiscal',
        legal: 'Derecho IT & Protección de Datos',
        odoo: 'Implementación Odoo',
        digital: 'Transformación Digital',
        other: 'Otros',
      },
      info: {
        title: 'Información de contacto',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        address: 'Dirección',
        hours: 'Disponibilidad',
        hoursValue: 'Lun–Vie: 9:00–18:00',
      },
    },
  }
  
  const tt = translations[locale]
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', service: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }
  
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <Link href="/" className="nav-logo">
            <span className="nav-logo-icon">∞</span>
            <span className="nav-logo-text">
              <span className="nav-logo-name">Dos Aguas</span>
              <span className="nav-logo-tagline">Consulting</span>
            </span>
          </Link>
          
          <ul className="nav-links">
            <li><Link href="/services">{t.nav.services}</Link></li>
            <li><Link href="/team">{t.nav.team}</Link></li>
            <li><Link href="/blog">{t.nav.blog}</Link></li>
            <li><Link href="/docs">{t.nav.docs}</Link></li>
            <li><Link href="/kontakt">{t.nav.contact}</Link></li>
          </ul>
          
          <div className="nav-actions">
            <div className="lang-switcher">
              <button 
                className={`lang-btn ${locale === 'de' ? 'active' : ''}`}
                onClick={() => setLocale('de')}
              >
                🇩🇪 DE
              </button>
              <button 
                className={`lang-btn ${locale === 'es' ? 'active' : ''}`}
                onClick={() => setLocale('es')}
              >
                🇪🇸 ES
              </button>
            </div>
            <button className="btn-nav">{t.nav.dropbox}</button>
          </div>
        </div>
      </nav>

      <main className="page-content">
        {/* Header */}
        <section className="page-header">
          <div className="page-header-content">
            <p className="page-pretitle">{tt.subtitle}</p>
            <h1 className="page-title">{tt.title}</h1>
            <p className="page-description">{tt.description}</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{tt.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{tt.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">{tt.form.company}</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">{tt.form.service}</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">--</option>
                    <option value="tax">{tt.services.tax}</option>
                    <option value="legal">{tt.services.legal}</option>
                    <option value="odoo">{tt.services.odoo}</option>
                    <option value="digital">{tt.services.digital}</option>
                    <option value="other">{tt.services.other}</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{tt.form.message}</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                
                <button type="submit" className="btn-primary btn-large" disabled={submitted}>
                  {submitted ? tt.form.sending : tt.form.submit}
                </button>
                
                {submitted && (
                  <p className="form-success">{tt.form.success}</p>
                )}
              </form>
            </div>
            
            {/* Info */}
            <div className="contact-info">
              <h3>{tt.info.title}</h3>
              
              <div className="info-item">
                <span className="info-label">{tt.info.email}</span>
                <a href="mailto:contact@dos-aguas.info" className="info-value">
                  contact@dos-aguas.info
                </a>
              </div>
              
              <div className="info-item">
                <span className="info-label">{tt.info.phone}</span>
                <span className="info-value">+49 (0) 123 456789</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">{tt.info.address}</span>
                <span className="info-value">
                  Dos Aguas Consulting
                  <br />
                  Musterstraße 123
                  <br />
                  12345 Berlin, Deutschland
                </span>
              </div>
              
              <div className="info-item">
                <span className="info-label">{tt.info.hours}</span>
                <span className="info-value">{tt.info.hoursValue}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <Link href="/" className="footer-logo">Dos Aguas</Link>
          
          <ul className="footer-links">
            <li><Link href="/impressum">{t.footer.imprint}</Link></li>
            <li><Link href="/datenschutz">{t.footer.privacy}</Link></li>
            <li><Link href="/kontakt">{t.nav.contact}</Link></li>
          </ul>
          
          <span className="footer-copy">{t.footer.copyright}</span>
        </div>
      </footer>
    </>
  )
}
