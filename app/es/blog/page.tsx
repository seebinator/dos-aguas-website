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
      const { data } = matter(fileContents)
      
      return {
        id,
        title: data.title,
        date: data.date,
        author: data.author,
        category: data.category,
        image: data.image || '/images/hero-bg.jpg',
        excerpt: data.excerpt,
        slug: data.slug || id,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export default function BlogES() {
  const posts = getPosts('es')
  
  const content = {
    nav: { services: 'Servicios', team: 'Equipo', blog: 'Blog', docs: 'Docs', contact: 'Contacto', dropbox: 'Dropbox' },
    page: { subtitle: 'Noticias & Insights', title: 'Blog', description: 'Información actual sobre IA, impuestos, Odoo y transformación digital.' },
    footer: { imprint: 'Aviso Legal', privacy: 'Privacidad', copyright: '© 2026 Dos Aguas Consulting' },
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-content">
          <Link href="/es/" className="nav-logo"><span className="nav-logo-icon">∞</span><span className="nav-logo-text"><span className="nav-logo-name">Dos Aguas</span><span className="nav-logo-tagline">Consulting</span></span></Link>
          <ul className="nav-links">
            <li><Link href="/es/services/">{content.nav.services}</Link></li>
            <li><Link href="/es/team/">{content.nav.team}</Link></li>
            <li><Link href="/es/blog/">{content.nav.blog}</Link></li>
            <li><Link href="/es/docs/">{content.nav.docs}</Link></li>
            <li><Link href="/es/kontakt/">{content.nav.contact}</Link></li>
          </ul>
          <div className="nav-actions">
            <Link href="/de/blog/" className="lang-btn">🇩🇪 DE</Link>
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
                    <h3><Link href={`/es/blog/${post.slug}/`}>{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                    <span className="blog-card-author">Por {post.author}</span>
                  </div>
                </article>
              ))
            ) : (
              <div className="blog-empty">
                <p>Aún no hay posts en el blog.</p>
                <p>Crea uno con: ./scripts/new-blog-post.sh es "Título"</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <Link href="/es/" className="footer-logo">Dos Aguas</Link>
          <ul className="footer-links">
            <li><Link href="/es/impressum/">{content.footer.imprint}</Link></li>
            <li><Link href="/es/datenschutz/">{content.footer.privacy}</Link></li>
            <li><Link href="/es/kontakt/">{content.nav.contact}</Link></li>
          </ul>
          <span className="footer-copy">{content.footer.copyright}</span>
        </div>
      </footer>
    </>
  )
}
