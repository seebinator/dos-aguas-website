import Link from 'next/link'
import { readFileSync } from 'fs'
import { join } from 'path'

// Diese Funktion wird zur Build-Zeit ausgeführt
export function generateStaticParams() {
  const posts = [
    { id: '2026-03-01-willkommen' },
    { id: '2026-02-28-ki-beratung' },
  ]
  return posts
}

// Markdown-Parser (einfache Version)
function parseMarkdown(content: string) {
  const lines = content.split('\n')
  const frontmatter: any = {}
  let body = ''
  let inFrontmatter = false
  let frontmatterDone = false

  for (const line of lines) {
    if (line === '---') {
      if (!inFrontmatter && !frontmatterDone) {
        inFrontmatter = true
        continue
      }
      if (inFrontmatter) {
        inFrontmatter = false
        frontmatterDone = true
        continue
      }
    }

    if (inFrontmatter) {
      const match = line.match(/^(.+?):\s*"?(.+?)"?$/)
      if (match) {
        frontmatter[match[1]] = match[2].replace(/"$/, '')
      }
    } else {
      body += line + '\n'
    }
  }

  return { frontmatter, body }
}

// Einfache Markdown-zu-HTML Konvertierung
function markdownToHtml(markdown: string) {
  return markdown
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/---/g, '<hr/>')
}

export default function BlogPostDE({ params }: { params: { id: string } }) {
  const { id } = params
  
  // In einer echten Implementierung würden wir die Datei laden
  // Für Static Export laden wir die Daten hier
  const postData = {
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
