import Link from 'next/link'

export function generateStaticParams() {
  return [
    { id: '2026-03-01-bienvenidos' },
    { id: '2026-03-01-ia-tendencias-2026-lo-que-empresas-deben-saber' },
    { id: '2026-02-28-consultoria-ia' },
    { id: '2026-02-25-precios-transferencia' },
  ]
}

export default function BlogPostES({ params }: { params: { id: string } }) {
  const { id } = params
  
  const postData: Record<string, any> = {
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
    },
    '2026-03-01-ia-tendencias-2026-lo-que-empresas-deben-saber': {
      title: 'Tendencias de IA 2026: Lo que las empresas deben saber',
      date: '2026-03-01',
      author: 'Juan',
      category: 'IA',
      content: `
<p>La inteligencia artificial está evolucionando rápidamente. Como experto en IA en Dos Aguas, veo diariamente cómo las empresas pueden beneficiarse de las nuevas tecnologías.</p>

<h2>1. Sistemas de IA basados en agentes</h2>
<p>En lugar de herramientas de IA individuales, vemos el surgimiento de sistemas de agentes que realizan tareas complejas de forma autónoma.</p>

<h2>2. IA multimodal</h2>
<p>Texto, imagen, audio y video se procesan en un solo modelo.</p>

<h2>3. IA en pymes</h2>
<p>Especialmente emocionante: las tecnologías de IA se vuelven accesibles para pequeñas y medianas empresas.</p>

<p>2026 será el año de la aplicación práctica de la IA.</p>
      `
    },
    '2026-02-28-consultoria-ia': {
      title: 'Consultoría IA: La clave de la transformación digital',
      date: '2026-02-28',
      author: 'Juan',
      category: 'IA',
      content: `
<p>La Inteligencia Artificial está revolucionando la forma en que las empresas trabajan.</p>

<h2>Por qué la consultoría de IA es importante</h2>

<p>La implementación de IA requiere planificación estratégica y conocimientos especializados.</p>

<h2>Nuestros servicios</h2>

<ul>
<li>Análisis de procesos</li>
<li>Desarrollo de estrategia de IA</li>
<li>Acompañamiento en la implementación</li>
<li>Formación y soporte</li>
</ul>
      `
    },
    '2026-02-25-precios-transferencia': {
      title: 'Optimización de precios de transferencia entre Alemania y México',
      date: '2026-02-25',
      author: 'Carlos',
      category: 'Impuestos',
      content: `
<p>Los precios de transferencia son un aspecto crucial para las empresas con operaciones transfronterizas.</p>

<h2>Desafíos fiscales</h2>

<p>Alemania y México tienen diferentes regímenes fiscales que deben considerarse cuidadosamente.</p>

<h2>Nuestra experiencia</h2>

<p>Ayudamos a empresas a optimizar sus estructuras de precios de transferencia de manera conforme.</p>
      `
    }
  }
  
  const post = postData[id]
  
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
