'use client'

import Navigation from '../../components/Navigation'

import Link from 'next/link'
import fs from 'fs'
import path from 'path'

interface Post {
  id: string
  title: string
  date: string
  author: string
  agent: string
  category: string
  image: string
  excerpt: string
}

function parseFrontmatter(content: string) {
  const lines = content.split('\n')
  const frontmatter: any = {}
  let inFrontmatter = false
  
  for (const line of lines) {
    if (line === '---') {
      if (!inFrontmatter) {
        inFrontmatter = true
        continue
      } else {
        break
      }
    }
    
    if (inFrontmatter) {
      const colonIndex = line.indexOf(':')
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim()
        let value = line.substring(colonIndex + 1).trim()
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1)
        }
        frontmatter[key] = value
      }
    }
  }
  
  return frontmatter
}

function getPosts(lang: string): Post[] {
  try {
    const postsDirectory = path.join(process.cwd(), 'content', 'blog', lang)
    
    if (!fs.existsSync(postsDirectory)) {
      return []
    }
    
    const files = fs.readdirSync(postsDirectory)
    
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const id = file.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, file)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const data = parseFrontmatter(fileContents)
        
        return {
          id,
          title: data.title || 'Untitled',
          date: data.date || '',
          author: data.author || 'Dos Aguas',
          agent: data.agent || 'all',
          category: data.category || 'News',
          image: data.image || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
          excerpt: data.excerpt || '',
        }
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    return []
  }
}

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

export default function BlogES() {
  const posts = getPosts('es')

  return (
    <>
      <Navigation lang="es" />

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
              <select name="agent" id="agent-filter">
                {agents.map((agent) => (
                  <option key={agent.id} value={agent.id}>{agent.name}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label>Categoría:</label>
              <select name="category" id="category-filter">
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="blog-section">
          <div className="blog-grid" id="blog-grid">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article 
                  key={post.id} 
                  className="blog-card"
                  data-agent={post.agent}
                  data-category={post.category}
                >
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
                <p>Aún no hay posts en el blog.</p>
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

      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function() {
          const agentFilter = document.getElementById('agent-filter');
          const categoryFilter = document.getElementById('category-filter');
          const posts = document.querySelectorAll('.blog-card');
          
          function filterPosts() {
            const selectedAgent = agentFilter.value;
            const selectedCategory = categoryFilter.value;
            
            posts.forEach(post => {
              const postAgent = post.dataset.agent;
              const postCategory = post.dataset.category;
              
              const agentMatch = selectedAgent === 'all' || postAgent === selectedAgent;
              const categoryMatch = selectedCategory === 'all' || postCategory === selectedCategory;
              
              if (agentMatch && categoryMatch) {
                post.style.display = 'block';
              } else {
                post.style.display = 'none';
              }
            });
          }
          
          agentFilter.addEventListener('change', filterPosts);
          categoryFilter.addEventListener('change', filterPosts);
        });
      `}} />
    </>
  )
}
