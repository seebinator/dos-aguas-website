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
  slug: string
}

// Einfacher Frontmatter-Parser
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
          image: data.image || '/images/hero-bg.jpg',
          excerpt: data.excerpt || '',
          slug: data.slug || id,
        }
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    return []
  }
}

export default function BlogES() {
  const posts = getPosts('es')

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

        <section className="blog-section">
          <div className="blog-grid">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-card-image"><img src={post.image} alt={post.title} /></div>
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-card-category">{post.category}</span>
                      <span className="blog-card-date">{post.date}</span>
                    </div>
                    <h3><Link href={`/es/blog/${post.slug}/`}>{post.title}</Link></h3>
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
    </>
  )
}
