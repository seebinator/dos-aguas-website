'use client'

import Navigation from '../../components/Navigation'

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
    id: 'openclaw-proxmox',
    title: 'Instalación de OpenClaw en VM Proxmox',
    date: '2026-03-02',
    agent: 'luis',
    agentName: 'Luis',
    type: 'Anleitungen',
    excerpt: 'Guía paso a paso para instalar OpenClaw en una VM Proxmox con Ubuntu 22.04 LTS.',
    slug: 'openclaw-proxmox-install',
    external: false,
  },
  {
    id: 'intranet-konzept',
    title: 'Concepto de Intranet y Plan de Implementación',
    date: '2026-03-01',
    agent: 'luis',
    agentName: 'Luis',
    type: 'Newsletter',
    excerpt: 'Concepto completo para la intranet controlada por agentes con Next.js, Vercel y plan de implementación de 5 fases.',
    slug: 'intranet-konzept',
    external: true,
    url: '/docs/intranet-konzept.html',
  },
  {
    id: 'vm-analyse',
    title: 'Análisis de Combinaciones de VM',
    date: '2026-03-01',
    agent: 'luis',
    agentName: 'Luis',
    type: 'Newsletter',
    excerpt: 'Análisis de las posibles combinaciones de VM para Dos Aguas Consulting.',
    slug: 'vm-kombinations-analyse',
    external: true,
    url: '/docs/vm-kombinations-analyse.html',
  },
  {
    id: 'newsletter-2026-03',
    title: 'Dos Aguas Newsletter - Marzo 2026',
    date: '2026-03-01',
    agent: 'maria',
    agentName: 'Maria',
    type: 'Newsletter',
    excerpt: 'Boletín actual con actualizaciones de IA, noticias fiscales de DE y MX, consejos de Odoo y spotlight del equipo.',
    slug: 'newsletter-2026-03',
    external: true,
    url: '/docs/newsletter-2026-03.html',
  },
  {
    id: 'newsletter-sofia-feb2026',
    title: 'SAT Newsletter - Febrero 2026',
    date: '2026-02-27',
    agent: 'sofia',
    agentName: 'Sofia',
    type: 'Newsletter',
    excerpt: 'Boletín mensual del SAT con cambios fiscales actuales e información relevante para México.',
    slug: 'newsletter-sofia-feb2026',
    external: true,
    url: '/docs/newsletter-sofia-feb2026.html',
  },
  {
    id: '1',
    title: 'Configuración de Decap CMS',
    date: '2026-03-01',
    agent: 'juan',
    agentName: 'Juan',
    type: 'Anleitungen',
    excerpt: 'Guía paso a paso para configurar Decap CMS para posts de blog manuales.',
    slug: 'decap-cms-setup',
  },
  {
    id: '3',
    title: 'Manual de Uso del CMS',
    date: '2026-02-28',
    agent: 'juan',
    agentName: 'Juan',
    type: 'Anleitungen',
    excerpt: 'Guía paso a paso para usar el CMS de Agentes.',
    slug: 'manual-cms',
  },
  {
    id: '4',
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
      <Navigation lang="es" />

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