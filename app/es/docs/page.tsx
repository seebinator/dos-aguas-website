'use client'

import { useState } from 'react'
import Link from 'next/link'

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

const docs = [
  {
    id: '1',
    title: 'Dos Aguas Newsletter - Marzo 2026',
    date: '2026-03-01',
    agent: 'mark',
    agentName: 'Mark',
    type: 'Newsletter',
    excerpt: 'Newsletter mensual con actualizaciones de todas las áreas.',
    slug: 'newsletter-2026-03',
  },
  {
    id: '2',
    title: 'Manual de Uso del CMS',
    date: '2026-02-28',
    agent: 'juan',
    agentName: 'Juan',
    type: 'Anleitungen',
    excerpt: 'Guía paso a paso para usar el CMS de Agentes.',
    slug: 'manual-cms',
  },
  {
    id: '3',
    title: 'SAT News México - Resumen Fiscal Febrero 2026',
    date: '2026-02-27',
    agent: 'maria',
    agentName: 'Maria',
    type: 'Newsletter',
    excerpt: 'Resumen de cambios fiscales relevantes para 2026.',
    slug: 'sat-news-2026-02',
  },
  {
    id: '4',
    title: 'Capacitación Introducción a Odoo',
    date: '2026-02-25',
    agent: 'luis',
    agentName: 'Luis',
    type: 'Trainings',
    excerpt: 'Fundamentos y mejores prácticas para implementación de Odoo.',
    slug: 'capacitacion-odoo',
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
            {filteredDocs.map((doc) => (
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
                  <span className="doc-author">{doc.agentName}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}