'use client'

import { useState } from 'react'
import Link from 'next/link'

const agents = [
  { id: 'all', name: 'Todos' },
  { id: 'juan', name: 'Juan' },
  { id: 'maria', name: 'Maria' },
  { id: 'carlos', name: 'Carlos' },
  { id: 'luis', name: 'Luis' },
  { id: 'mark', name: 'Mark' },
  { id: 'jenny', name: 'Jenny' },
  { id: 'hector', name: 'Hector' },
  { id: 'sofia', name: 'Sofia' },
]

const categories = [
  { id: 'all', name: 'Todas' },
  { id: 'IA', name: 'IA' },
  { id: 'Impuestos', name: 'Impuestos' },
  { id: 'Odoo', name: 'Odoo' },
  { id: 'Marketing', name: 'Marketing' },
  { id: 'Inteligencia', name: 'Inteligencia de Negocios' },
  { id: 'Diseño', name: 'Diseño' },
  { id: 'Servicio', name: 'Servicio' },
]

const posts = [
  {
    id: '2026-03-01-bienvenidos',
    title: 'Bienvenidos a Dos Aguas Consulting',
    date: '2026-03-01',
    author: 'Equipo Dos Aguas',
    agent: 'all',
    category: 'Noticias',
    image: '/images/hero-bg.jpg',
    excerpt: 'Nos complace presentarle nuestro nuevo sitio web.',
  },
  {
    id: '2026-02-28-consultoria-ia',
    title: 'Consultoría IA: La clave de la transformación digital',
    date: '2026-02-28',
    author: 'Juan',
    agent: 'juan',
    category: 'IA',
    image: '/images/hero-bg.jpg',
    excerpt: 'Cómo la Inteligencia Artificial hace su empresa más eficiente.',
  },
  {
    id: '2026-02-25-precios-transferencia',
    title: 'Optimización de precios de transferencia',
    date: '2026-02-25',
    author: 'Carlos',
    agent: 'carlos',
    category: 'Impuestos',
    image: '/images/hero-bg.jpg',
    excerpt: 'Estrategias fiscalmente conformes para negocios transfronterizos.',
  },
]

export default function BlogES() {
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
          <Link href="/es/" className="nav-logo"><span className="nav-logo-icon">∞</span><span className="nav-logo-text"><span className="nav-logo-name">Dos Aguas</span><span className="nav-logo-tagline">Consulting</span></span></Link>
          <ul className="nav-links">
            <li><Link href="/es/services/">Servicios</Link></li>
            <li><Link href="/es/team/">Equipo</Link></li>
            <li><Link href="/es/blog/">Blog</Link></li>
            <li><Link href="/es/docs/">Docs</Link></li>
            <li><Link href="/es/kontakt/">Contacto</Link></li>
          </ul>
          <div className="nav-actions">
            <Link href="/de/blog/" className="lang-btn">🇩🇪 DE</Link>
            <button className="btn-nav">Dropbox</button>
          </div>
        </div>
      </nav>

      <main className="page-content">
        <section className="page-header">
          <div className="page-header-content">
            <p className="page-pretitle">Noticias & Insights</p>
            <h1 className="page-title">Blog</h1>
            <p className="page-description">Información actual sobre IA, impuestos, Odoo y transformación digital.</p>
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
              <label>Categoría:</label>
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
                    <h3><Link href={`/es/blog/${post.id}/`}>{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                    <span className="blog-card-author">Por {post.author}</span>
                  </div>
                </article>
              ))
            ) : (
              <div className="blog-empty">
                <p>No se encontraron posts.</p>
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
