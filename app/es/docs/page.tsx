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
  { id: 'all', name: 'Todos los Agents' },
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
  { id: 'all', name: 'Todos los Tipos' },
  { id: 'Newsletter', name: 'Newsletter' },
  { id: 'Anleitungen', name: 'Instructivos' },
  { id: 'Arbeitsdokumente', name: 'Documentos de Trabajo' },
  { id: 'Trainings', name: 'Capacitaciones' },
  { id: 'Uploads', name: 'Subidas' },
  { id: 'Videoskripte', name: 'Guiones de Video' },
  { id: 'Podcastskripte', name: 'Guiones de Podcast' },
]

const docs: Doc[] = [
  {
    id: 'newsletter-2026-03-01',
    title: 'Dos Aguas Newsletter - Marzo 2026',
    date: '2026-03-01',
    author: 'Mark',
    agent: 'mark',
    type: 'Newsletter',
    excerpt: 'Newsletter mensual con actualizaciones de todas las áreas.',
    slug: 'newsletter-2026-03-01',
  },
  {
    id: 'anleitung-cms',
    title: 'Guía de Uso del CMS',
    date: '2026-02-28',
    author: 'Juan',
    agent: 'juan',
    type: 'Anleitungen',
    excerpt: 'Guía paso a paso para usar el CMS de Agentes.',
    slug: 'anleitung-cms',
  },
  {
    id: 'training-odoo',
    title: 'Capacitación Introductoria de Odoo',
    date: '2026-02-25',
    author: 'Luis',
    agent: 'luis',
    type: 'Trainings',
    excerpt: 'Fundamentos y mejores prácticas para implementación de Odoo.',
    slug: 'training-odoo',
  },
]

export default function DocsES() {
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
          <Link href="/es/" className="nav-logo"><span className="nav-logo-icon">∞</span><span className="nav-logo-text"><span className="nav-logo-name">Dos Aguas</span><span className="nav-logo-tagline">Consulting</span></span></Link>
          <ul className="nav-links">
            <li><Link href="/es/services/">Servicios</Link></li>
            <li><Link href="/es/team/">Equipo</Link></li>
            <li><Link href="/es/blog/">Blog</Link></li>
            <li><Link href="/es/docs/">Docs</Link></li>
            <li><Link href="/es/kontakt/">Contacto</Link></li>
          </ul>
          <div className="nav-actions">
            <Link href="/de/docs/" className="lang-btn">🇩🇪 DE</Link>
            <button className="btn-nav">Dropbox</button>
          </div>
        </div>
      </nav>

      <main className="page-content">
        <section className="page-header">
          <div className="page-header-content">
            <p className="page-pretitle">Intranet</p>
            <h1 className="page-title">Documentos</h1>
            <p className="page-description">Newsletters, instructivos, capacitaciones y documentos de trabajo del equipo.</p>
          </div>
        </section>

        <section className="blog-filter-section">
          <div className="blog-filters">
            <div className="filter-group">
              <label>Agente:</label>
              <select value={selectedAgent} onChange={(e) => setSelectedAgent(e.target.value)}>
                {agents.map((agent) => (
                  <option key={agent.id} value={agent.id}>{agent.name}</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label>Tipo:</label>
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
                    <Link href={`/es/docs/${doc.slug}/`}>{doc.title}</Link>
                  </h3>
                  <p className="doc-excerpt">{doc.excerpt}</p>
                  <div className="doc-footer">
                    <span className="doc-author">Por {doc.author}</span>
                  </div>
                </article>
              ))
            ) : (
              <div className="blog-empty">
                <p>No se encontraron documentos.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <Link href="/es/" className="footer-logo">Dos Aguas</Link>
          <ul className="footer-links">
            <li><Link href="/es/impressum/">Aviso Legal</Link></li>
            <li><Link href="/es/datenschutz/">Privacidad</Link></li>
            <li><Link href="/es/kontakt/">Contacto</Link></li>
          </ul>
          <span className="footer-copy">© 2026 Dos Aguas Consulting</span>
        </div>
      </footer>
    </>
  )
}
