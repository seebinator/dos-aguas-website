import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'Bienvenidos a Dos Aguas Consulting',
    excerpt: 'Nos complace presentarle nuestro nuevo sitio web. Descubra nuestros servicios y experiencia.',
    date: '2026-03-01',
    author: 'Equipo Dos Aguas',
    category: 'Noticias',
    image: '/images/hero-bg.jpg',
  },
  {
    id: 2,
    title: 'Consultoría IA: La clave de la transformación digital',
    excerpt: 'Cómo la Inteligencia Artificial hace su empresa más eficiente y permite nuevos modelos de negocio.',
    date: '2026-02-28',
    author: 'Juan',
    category: 'IA',
    image: '/images/hero-bg.jpg',
  },
  {
    id: 3,
    title: 'Optimización de precios de transferencia entre Alemania y México',
    excerpt: 'Estrategias fiscalmente conformes para relaciones comerciales transfronterizas en el espacio germano-mexicano.',
    date: '2026-02-25',
    author: 'Carlos',
    category: 'Impuestos',
    image: '/images/hero-bg.jpg',
  },
]

const content = {
  nav: { services: 'Servicios', team: 'Equipo', blog: 'Blog', docs: 'Docs', contact: 'Contacto', dropbox: 'Dropbox' },
  page: { subtitle: 'Noticias & Insights', title: 'Blog', description: 'Información actual sobre IA, impuestos, Odoo y transformación digital.' },
  footer: { imprint: 'Aviso Legal', privacy: 'Privacidad', copyright: '© 2026 Dos Aguas Consulting' },
}

export default function BlogES() {
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
            {posts.map((post) => (
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
            ))}
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
