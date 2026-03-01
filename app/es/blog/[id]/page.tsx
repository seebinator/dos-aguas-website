import Link from 'next/link'

export function generateStaticParams() {
  return [
    { id: '2026-03-01-bienvenidos' },
  ]
}

export default function BlogPostES({ params }: { params: { id: string } }) {
  const { id } = params
  
  const postData = {
    '2026-03-01-bienvenidos': {
      title: 'Bienvenidos a Dos Aguas Consulting',
      date: '2026-03-01',
      author: 'Equipo Dos Aguas',
      category: 'Noticias',
      content: `
<p>Nos complace presentarle nuestro nuevo sitio web. Dos Aguas Consulting es su puente entre Alemania y México.</p>

<h2>Nuestra historia</h2>

<p>Dos Aguas fue fundada con la visión de apoyar a las empresas en sus actividades comerciales germano-mexicanas.</p>

<h2>Lo que ofrecemos</h2>

<ul>
<li><strong>Consultoría IA</strong> - Asesoramiento estratégico para implementación de IA</li>
<li><strong>Estrategias de precios de transferencia</strong> - Optimización de precios transfronterizos</li>
<li><strong>Implementación Odoo</strong> - Soluciones ERP a medida</li>
<li><strong>Transformación digital</strong> - Digitalización integral</li>
</ul>

<p>Detrás de Dos Aguas hay un equipo de 8 especialistas.</p>
      `
    }
  }
  
  const post = postData[id as keyof typeof postData]
  
  if (!post) {
    return <div>Post not found</div>
  }

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
        <article className="blog-post">
          <header className="blog-post-header">
            <div className="blog-post-meta">
              <span className="blog-post-category">{post.category}</span>
              <span className="blog-post-date">{post.date}</span>
            </div>
            <h1 className="blog-post-title">{post.title}</h1>
            <span className="blog-post-author">Por {post.author}</span>
          </header>
          
          <div 
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <footer className="blog-post-footer">
            <Link href="/es/blog/" className="btn-secondary">← Volver al blog</Link>
          </footer>
        </article>
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
