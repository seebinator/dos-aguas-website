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
  let i = 0
  
  for (const line of lines) {
    if (line === '---') {
      if (!inFrontmatter) {
        inFrontmatter = true
        i++
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
        // Entferne Anführungszeichen
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1)
        }
        frontmatter[key] = value
      }
    }
    i++
  }
  
  return frontmatter
}

function getPosts(lang: string): Post[] {
  try {
    const postsDirectory = path.join(process.cwd(), 'content', 'blog', lang)
    
    if (!fs.existsSync(postsDirectory)) {
      console.log('Directory not found:', postsDirectory)
      return []
    }
    
    const files = fs.readdirSync(postsDirectory)
    
    const posts = files
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
    
    console.log(`Found ${posts.length} posts for ${lang}`)
    return posts
  } catch (error) {
    console.error('Error loading posts:', error)
    return []
  }
}

export default function BlogDE() {
  const posts = getPosts('de')

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
                    <h3><Link href={`/de/blog/${post.slug}/`}>{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                    <span className="blog-card-author">Von {post.author}</span>
                  </div>
                </article>
              ))
            ) : (
              <div className="blog-empty">
                <p>Noch keine Blog-Posts vorhanden.</p>
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
