import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Post {
  id: string
  title: string
  date: string
  author: string
  category: string
  image: string
  excerpt: string
  slug: string
  content: string
}

function getPosts(lang: string): Post[] {
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
      const { data, content } = matter(fileContents)
      
      return {
        id,
        title: data.title,
        date: data.date,
        author: data.author,
        category: data.category,
        image: data.image || '/images/hero-bg.jpg',
        excerpt: data.excerpt,
        slug: data.slug || id,
        content,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export default function BlogDE() {
  const posts = getPosts('de')
  
  const content = {
    nav: { services: 'Services', team: 'Team', blog: 'Blog', docs: 'Docs', contact: 'Kontakt', dropbox: 'Dropbox' },
    page: { subtitle: 'Neuigkeiten & Insights', title: 'Blog', description: 'Aktuelle Informationen zu KI, Steuern, Odoo und digitaler Transformation.' },
    footer: { imprint: 'Impressum', privacy: 'Datenschutz', copyright: '© 2026 Dos Aguas Consulting' },
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-content">
          <Link href="/de/" className="nav-logo"><span className="nav-logo-icon">∞</span><span className="nav-logo-text"><span className="nav-logo-name">Dos Aguas</span><span className="nav-logo-tagline">Consulting</span></span></Link>
          <ul className="nav-links">
            <li><Link href="/de/services/">{content.nav.services}</Link></li>
            <li><Link href="/de/team/">{content.nav.team}</Link></li>
            <li><Link href="/de/blog/">{content.nav.blog}</Link></li>
            <li><Link href="/de/docs/">{content.nav.docs}</Link></li>
            <li><Link href="/de/kontakt/">{content.nav.contact}</Link></li>
          </ul>
          <div className="nav-actions">
            <Link href="/es/blog/" className="lang-btn">🇪🇸 ES</Link>
            <button className="btn-nav">{content.nav.dropbox}</button>
          </div>
        </div>
      </nav>

      <main className="page-content">
        <section className="page-header">
          <div className="page-header-content">
            <p className="page-pretitle">{content.page.subtitle}</p>
            <h1 className="page-title">{content.page.title}</h1>
            <p className="page-description">{content.page.description}</p>
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
                <p>Erstelle einen mit: ./scripts/new-blog-post.sh de "Titel"</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <Link href="/de/" className="footer-logo">Dos Aguas</Link>
          <ul className="footer-links">
            <li><Link href="/de/impressum/">{content.footer.imprint}</Link></li>
            <li><Link href="/de/datenschutz/">{content.footer.privacy}</Link></li>
            <li><Link href="/de/kontakt/">{content.nav.contact}</Link></li>
          </ul>
          <span className="footer-copy">{content.footer.copyright}</span>
        </div>
      </footer>
    </>
  )
}
