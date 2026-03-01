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
        // Entferne Anführungszeichen
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
          image: data.image || 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
          excerpt: data.excerpt || '',
        }
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error('Error loading posts:', error)
    return []
  }
}

const agents = [
  { id: 'all', name: 'Alle' },
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
  { id: 'all', name: 'Alle' },
  { id: 'KI', name: 'KI' },
  { id: 'Steuern', name: 'Steuern' },
  { id: 'Odoo', name: 'Odoo' },
  { id: 'Marketing', name: 'Marketing' },
  { id: 'BI', name: 'Business Intelligence' },
  { id: 'Design', name: 'Design' },
  { id: 'Service', name: 'Service' },
]

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

        <section className="blog-filter-section">
          <div className="blog-filters">
            <div className="filter-group">
              <label>Agent:</label>
              <select name="agent" id="agent-filter">
                {agents.map((agent) => (
                  <option key={agent.id} value={agent.id}>{agent.name}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label>Kategorie:</label>
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
                    <h3><Link href={`/de/blog/${post.id}/`}>{post.title}</Link></h3>
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
