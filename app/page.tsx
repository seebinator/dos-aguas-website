'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n-context'

export default function Home() {
  const { locale, t, setLocale } = useI18n()
  
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
            <li><Link href="/services">{t.nav.services} ▾</Link></li>
            <li><Link href="/team">{t.nav.team} ▾</Link></li>
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

      <main>
        {/* Hero Section */}
        <section className="hero" data-side-text={t.sideText}>
          <div className="hero-content">
            <p className="hero-pretitle">{t.hero.pretitle}</p>
            <h1 className="hero-title">
              {t.hero.title}
            </h1>
            <Link href="/team" className="hero-cta">
              {t.hero.cta}
            </Link>
          </div>
          
          {/* Stats Bar */}
          <div className="stats-bar">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">8</div>
                <div className="stat-label">{t.stats.agents}</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">3</div>
                <div className="stat-label">{t.stats.languages}</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">40%</div>
                <div className="stat-label">{t.stats.growth}</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">/7</div>
                <div className="stat-label">{t.stats.support}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="section-header">
            <p className="section-pretitle">{t.services.pretitle}</p>
            <h2 className="section-title">{t.services.title}</h2>
            <p className="section-description">{t.services.description}</p>
          </div>
          
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>{t.services.tax.title}</h3>
              <p>{t.services.tax.description}</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚖️</div>
              <h3>{t.services.legal.title}</h3>
              <p>{t.services.legal.description}</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>{t.services.odoo.title}</h3>
              <p>{t.services.odoo.description}</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>{t.services.digital.title}</h3>
              <p>{t.services.digital.description}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <p className="cta-pretitle">{t.cta.pretitle}</p>
          <h2 className="cta-title">{t.cta.title}</h2>
          <p className="cta-description">{t.cta.description}</p>
          <Link href="/kontakt" className="btn-primary">
            {t.cta.button}
          </Link>
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
