'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Doc {
  id: string
  title: string
  date: string
  author: string
  agent: string
  type: string
  excerpt: string
  slug: string
}

const agents = [
  { id: 'all', name: 'Alle Agents' },
  { id: 'juan', name: 'Juan' },
  { id: 'maria', name: 'Maria' },
  { id: 'carlos', name: 'Carlos' },
  { id: 'luis', name: 'Luis' },
  { id: 'mark', name: 'Mark' },
  { id: 'jenny', name: 'Jenny' },
  { id: 'hector', name: 'Hector' },
  { id: 'sofia', name: 'Sofia' },
]

const types = [
  { id: 'all', name: 'Alle Typen' },
  { id: 'Newsletter', name: 'Newsletter' },
  { id: 'Anleitungen', name: 'Anleitungen' },
  { id: 'Arbeitsdokumente', name: 'Arbeitsdokumente' },
  { id: 'Trainings', name: 'Trainings' },
  { id: 'Uploads', name: 'Uploads' },
  { id: 'Videoskripte', name: 'Videoskripte' },
  { id: 'Podcastskripte', name: 'Podcastskripte' },
]

const docs: Doc[] = [
  {
    id: 'newsletter-2026-03-01',
    title: 'Dos Aguas Newsletter - März 2026',
    date: '2026-03-01',
    author: 'Mark',
    agent: 'mark',
    type: 'Newsletter',
    excerpt: 'Monatlicher Newsletter mit Updates aus allen Bereichen.',
    slug: 'newsletter-2026-03-01',
  },
  {
    id: 'anleitung-cms',
    title: 'CMS Bedienungsanleitung',
    date: '2026-02-28',
    author: 'Juan',
    agent: 'juan',
    type: 'Anleitungen',
    excerpt: 'Schritt-für-Schritt Anleitung zur Nutzung des Agenten-CMS.',
    slug: 'anleitung-cms',
  },
  {
    id: 'training-odoo',
    title: 'Odoo Einführungstraining',
    date: '2026-02-25',
    author: 'Luis',
    agent: 'luis',
    type: 'Trainings',
    excerpt: 'Grundlagen und Best Practices für Odoo Implementierung.',
    slug: 'training-odoo',
  },
]

export default function DocsDE() {
  const [selectedAgent, setSelectedAgent] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const filteredDocs = docs.filter((doc) => {
    const agentMatch = selectedAgent === 'all' || doc.agent === selectedAgent
    const typeMatch = selectedType === 'all' || doc.type === selectedType
    return agentMatch && typeMatch
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
            <Link href="/es/docs/" className="lang-btn">🇪🇸 ES</Link>
            <button className="btn-nav">Dropbox</button>
          </div>
        </div>
      </nav>

      <main className="page-content">
        <section className="page-header">
          <div className="page-header-content">
            <p className="page-pretitle">Intranet</p>
            <h1 className="page-title">Dokumente</h1>
            <p className="page-description">Newsletter, Anleitungen, Trainings und Arbeitsdokumente.</p>
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
              <label>Typ:</label>
              <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                {types.map((type) => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="blog-section">
          <div className="docs-list">
            {filteredDocs.length > 0 ? (
              filteredDocs.map((doc) => (
                <article key={doc.id} className="doc-item">
                  <div className="doc-meta">
                    <span className="doc-type">{doc.type}</span>
                    <span className="doc-date">{doc.date}</span>
                  </div>
                  <h3 className="doc-title">
                    <Link href={`/de/docs/${doc.slug}/`}>{doc.title}</Link>
                  </h3>
                  <p className="doc-excerpt">{doc.excerpt}</p>
                  <div className="doc-footer">
                    <span className="doc-author">Von {doc.author}</span>
                  </div>
                </article>
              ))
            ) : (
              <div className="blog-empty">
                <p>Keine Dokumente gefunden.</p>
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
