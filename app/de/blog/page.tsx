import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'Willkommen bei Dos Aguas Consulting',
    excerpt: 'Wir freuen uns, Ihnen unsere neue Website präsentieren zu dürfen. Entdecken Sie unsere Services und Expertise.',
    date: '2026-03-01',
    author: 'Dos Aguas Team',
    category: 'News',
    image: '/images/hero-bg.jpg',
  },
  {
    id: 2,
    title: 'KI-Beratung: Der Schlüssel zur digitalen Transformation',
    excerpt: 'Wie Künstliche Intelligenz Ihr Unternehmen effizienter macht und neue Geschäftsmodelle ermöglicht.',
    date: '2026-02-28',
    author: 'Juan',
    category: 'KI',
    image: '/images/hero-bg.jpg',
  },
  {
    id: 3,
    title: 'Transferpreis-Optimierung zwischen Deutschland und Mexiko',
    excerpt: 'Steuerkonforme Strategien für grenzüberschreitende Geschäftsbeziehungen im deutsch-mexikanischen Raum.',
    date: '2026-02-25',
    author: 'Carlos',
    category: 'Steuern',
    image: '/images/hero-bg.jpg',
  },
]

const content = {
  nav: { services: 'Services', team: 'Team', blog: 'Blog', docs: 'Docs', contact: 'Kontakt', dropbox: 'Dropbox' },
  page: { subtitle: 'Neuigkeiten & Insights', title: 'Blog', description: 'Aktuelle Informationen zu KI, Steuern, Odoo und digitaler Transformation.' },
  footer: { imprint: 'Impressum', privacy: 'Datenschutz', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function BlogDE() {
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
            {posts.map((post) => (
              <article key={post.id} className="blog-card">
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
            ))}
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
