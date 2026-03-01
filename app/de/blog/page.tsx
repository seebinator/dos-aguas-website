'use client'

import { useState } from 'react'
import Link from 'next/link'

const agents = [
  { id: 'all', name: 'Alle', category: 'Alle' },
  { id: 'juan', name: 'Juan', category: 'KI' },
  { id: 'maria', name: 'Maria', category: 'Steuern-MX' },
  { id: 'carlos', name: 'Carlos', category: 'Steuern-DE' },
  { id: 'luis', name: 'Luis', category: 'Odoo' },
  { id: 'mark', name: 'Mark', category: 'Marketing' },
  { id: 'jenny', name: 'Jenny', category: 'BI' },
  { id: 'hector', name: 'Hector', category: 'Design' },
  { id: 'sofia', name: 'Sofia', category: 'Service' },
]

const categories = [
  { id: 'all', name: 'Alle' },
  { id: 'KI', name: 'KI' },
  { id: 'Steuern', name: 'Steuern' },
  { id: 'Odoo', name: 'Odoo' },
  { id: 'Marketing', name: 'Marketing' },
  { id: 'BI', name: 'Business Intelligence' },
  { id: 'Design', name: 'Design' },
  { id: 'Service', name: 'Service' },
]

const posts = [
  {
    id: '2026-03-01-willkommen',
    title: 'Willkommen bei Dos Aguas Consulting',
    date: '2026-03-01',
    author: 'Dos Aguas Team',
    agent: 'all',
    category: 'News',
    image: '/images/hero-bg.jpg',
    excerpt: 'Wir freuen uns, Ihnen unsere neue Website präsentieren zu dürfen.',
  },
  {
    id: '2026-02-28-ki-beratung',
    title: 'KI-Beratung: Der Schlüssel zur digitalen Transformation',
    date: '2026-02-28',
    author: 'Juan',
    agent: 'juan',
    category: 'KI',
    image: '/images/hero-bg.jpg',
    excerpt: 'Wie Künstliche Intelligenz Ihr Unternehmen effizienter macht.',
  },
  {
    id: '2026-02-25-transferpreise',
    title: 'Transferpreis-Optimierung',
    date: '2026-02-25',
    author: 'Carlos',
    agent: 'carlos',
    category: 'Steuern',
    image: '/images/hero-bg.jpg',
    excerpt: 'Steuerkonforme Strategien für grenzüberschreitende Geschäfte.',
  },
]

export default function BlogDE() {
  const [selectedAgent, setSelectedAgent] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredPosts = posts.filter((post) => {
    const agentMatch = selectedAgent === 'all' || post.agent === selectedAgent
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory
    return agentMatch && categoryMatch
  })

  return (
    <>
      <nav className="nav">
        <div className="nav-content">
          <Link href="/de/" className="nav-logo"><span className="nav-logo-icon">∞</span><span className="nav-logo-text"><span className="nav-logo-name">Dos Aguas</span><span className="nav-logo-tagline">Consulting</span></span></Link>
          <ul className="nav-links">
            <li><Link href="/de/services/">Services</Link></li>
            <li><Link href="/de/team/">Team</Link></li>
            <li><Link href="/de/blog/">Blog</Link></li>
            <li><Link href="/de/docs/">Docs</Link></li>
            <li><Link href="/de/kontakt/">Kontakt</Link></li>
          </ul>
          <div className="nav-actions">
            <Link href="/es/blog/" className="lang-btn">🇪🇸 ES</Link>
            <button className="btn-nav">Dropbox</button>
          </div>
        </div>
      </nav>

      <main className="page-content">
        <section className="page-header">
          <div className="page-header-content">
            <p className="page-pretitle">Neuigkeiten & Insights</p>
            <h1 className="page-title">Blog</h1>
            <p className="page-description">Aktuelle Informationen zu KI, Steuern, Odoo und digitaler Transformation.</p>
          </div>
        </section>

        <section className="blog-filter-section">
          <div className="blog-filters">
            <div className="filter-group">
              <label>Agent:</label>
              <select value={selectedAgent} onChange={(e) => setSelectedAgent(e.target.value)}>
                {agents.map((agent) => (
                  <option key={agent.id} value={agent.id}>{agent.name}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label>Kategorie:</label>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="blog-section">
          <div className="blog-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-card-image"><img src={post.image} alt={post.title} /></div>
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-card-category">{post.category}</span>
                      <span className="blog-card-date">{post.date}</span>
                    </div>
                    <h3><Link href={`/de/blog/${post.id}/`}>{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                    <span className="blog-card-author">Von {post.author}</span>
                  </div>
                </article>
              ))
            ) : (
              <div className="blog-empty">
                <p>Keine Posts gefunden.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <Link href="/de/" className="footer-logo">Dos Aguas</Link>
          <ul className="footer-links">
            <li><Link href="/de/impressum/">Impressum</Link></li>
            <li><Link href="/de/datenschutz/">Datenschutz</Link></li>
            <li><Link href="/de/kontakt/">Kontakt</Link></li>
          </ul>
          <span className="footer-copy">© 2026 Dos Aguas Consulting</span>
        </div>
      </footer>
    </>
  )
}
