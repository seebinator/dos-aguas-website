import Link from 'next/link'

export function generateStaticParams() {
  return [
    { id: '2026-03-01-willkommen' },
    { id: '2026-03-01-ki-trends-2026-was-unternehmen-wissen-mssen' },
    { id: '2026-02-28-ki-beratung' },
    { id: '2026-02-25-transferpreise' },
  ]
}

export default function BlogPostDE({ params }: { params: { id: string } }) {
  const { id } = params
  
  const postData: Record<string, any> = {
    '2026-03-01-willkommen': {
      title: 'Willkommen bei Dos Aguas Consulting',
      date: '2026-03-01',
      author: 'Dos Aguas Team',
      category: 'News',
      content: `
<p>Wir freuen uns, Ihnen unsere neue Website präsentieren zu dürfen. Dos Aguas Consulting ist Ihre Brücke zwischen Deutschland und Mexiko.</p>

<h2>Unsere Geschichte</h2>
<p>Dos Aguas wurde mit der Vision gegründet, Unternehmen bei ihren deutsch-mexikanischen Geschäftsaktivitäten zu unterstützen.</p>

<h2>Was wir bieten</h2>
<ul>
<li><strong>KI-Beratung</strong> - Strategische Beratung für KI-Implementierung</li>
<li><strong>Transferpreis Strategien</strong> - Optimierung grenzüberschreitender Preisgestaltung</li>
<li><strong>Odoo Implementierung</strong> - Maßgeschneiderte ERP-Lösungen</li>
<li><strong>Digitale Transformation</strong> - Ganzheitliche Digitalisierung</li>
</ul>
<p>Hinter Dos Aguas steht ein 8-köpfiges Team aus Spezialisten.</p>
      `
    },
    '2026-03-01-ki-trends-2026-was-unternehmen-wissen-mssen': {
      title: 'KI-Trends 2026: Was Unternehmen wissen müssen',
      date: '2026-03-01',
      author: 'Juan',
      category: 'KI',
      content: `
<p>Die künstliche Intelligenz entwickelt sich rasant weiter. Als AI-Experte bei Dos Aguas sehe ich täglich, wie Unternehmen von neuen Technologien profitieren können.</p>

<h2>1. Agentenbasierte KI-Systeme</h2>
<p>Statt einzelner KI-Tools sehen wir den Aufstieg von Agentensystemen, die komplexe Aufgaben eigenständig erledigen.</p>

<h2>2. Multimodale KI</h2>
<p>Text, Bild, Audio und Video werden in einem einzigen Modell verarbeitet.</p>

<h2>3. KI im Mittelstand</h2>
<p>Besonders spannend: KI-Technologien werden für kleine und mittlere Unternehmen zugänglich.</p>

<p>2026 wird das Jahr der praktischen KI-Anwendung.</p>
      `
    },
    '2026-02-28-ki-beratung': {
      title: 'KI-Beratung: Der Schlüssel zur digitalen Transformation',
      date: '2026-02-28',
      author: 'Juan',
      category: 'KI',
      content: `
<p>Künstliche Intelligenz revolutioniert die Art und Weise, wie Unternehmen arbeiten.</p>

<h2>Warum KI-Beratung wichtig ist</h2>
<p>Die Implementierung von KI erfordert strategische Planung und Fachwissen.</p>

<h2>Unsere Services</h2>
<ul>
<li>Prozessanalyse</li>
<li>KI-Strategieentwicklung</li>
<li>Implementierungsbegleitung</li>
<li>Schulung und Support</li>
</ul>
      `
    },
    '2026-02-25-transferpreise': {
      title: 'Transferpreis-Optimierung zwischen Deutschland und Mexiko',
      date: '2026-02-25',
      author: 'Carlos',
      category: 'Steuern',
      content: `
<p>Transferpreise sind ein entscheidender Aspekt für Unternehmen mit grenzüberschreitenden Operationen.</p>

<h2>Steuerliche Herausforderungen</h2>
<p>Deutschland und Mexiko haben unterschiedliche Steuerregime, die sorgfältig berücksichtigt werden müssen.</p>

<h2>Unsere Erfahrung</h2>
<p>Wir helfen Unternehmen, ihre Transferpreisstrukturen steuerkonform zu optimieren.</p>
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
        <article className="blog-post">
          <header className="blog-post-header">
            <div className="blog-post-meta">
              <span className="blog-post-category">{post.category}</span>
              <span className="blog-post-date">{post.date}</span>
            </div>
            <h1 className="blog-post-title">{post.title}</h1>
            <span className="blog-post-author">Von {post.author}</span>
          </header>
          
          <div 
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <footer className="blog-post-footer">
            <Link href="/de/blog/" className="btn-secondary">← Zurück zum Blog</Link>
          </footer>
        </article>
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
