import Link from 'next/link'
import fs from 'fs'
import path from 'path'

interface Post {
  id: string
  title: string
  date: string
  author: string
  category: string
  content: string
}

function parseFrontmatter(content: string) {
  const lines = content.split('\n')
  const frontmatter: any = {}
  let inFrontmatter = false
  let bodyStart = 0
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line === '---') {
      if (!inFrontmatter) {
        inFrontmatter = true
        continue
      } else {
        bodyStart = i + 1
        break
      }
    }
    
    if (inFrontmatter) {
      const colonIndex = line.indexOf(':')
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim()
        let value = line.substring(colonIndex + 1).trim()
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1)
        }
        frontmatter[key] = value
      }
    }
  }
  
  const body = lines.slice(bodyStart).join('\n')
  return { frontmatter, body }
}

function markdownToHtml(markdown: string): string {
  return markdown
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^---$/gm, '<hr/>')
}

function getPost(id: string, lang: string): Post | null {
  try {
    const filePath = path.join(process.cwd(), 'content', 'blog', lang, `${id}.md`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { frontmatter, body } = parseFrontmatter(fileContents)
    
    return {
      id,
      title: frontmatter.title || 'Untitled',
      date: frontmatter.date || '',
      author: frontmatter.author || 'Dos Aguas',
      category: frontmatter.category || 'News',
      content: markdownToHtml(body),
    }
  } catch (error) {
    return null
  }
}

export function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content', 'blog', 'es')
  
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const files = fs.readdirSync(postsDirectory)
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      id: file.replace(/\.md$/, ''),
    }))
}

export default function BlogPostES({ params }: { params: { id: string } }) {
  const { id } = params
  const post = getPost(id, 'es')
  
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
