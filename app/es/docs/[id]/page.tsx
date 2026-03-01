import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

interface Doc {
  id: string
  title: string
  date: string
  author: string
  agent: string
  type: string
  content: string
}

async function getDoc(id: string, lang: string): Promise<Doc | null> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'docs', lang, `${id}.md`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()
    
    return {
      id,
      title: data.title || 'Untitled',
      date: data.date || '',
      author: data.author || 'Dos Aguas',
      agent: data.agent || 'all',
      type: data.type || 'Document',
      content: contentHtml,
    }
  } catch (error) {
    return null
  }
}

export function generateStaticParams() {
  const docsDirectory = path.join(process.cwd(), 'content', 'docs', 'es')
  
  if (!fs.existsSync(docsDirectory)) {
    return []
  }
  
  const files = fs.readdirSync(docsDirectory)
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      id: file.replace(/\.md$/, ''),
    }))
}

export default async function DocDetailES({ params }: { params: { id: string } }) {
  const { id } = params
  const doc = await getDoc(id, 'es')
  
  if (!doc) {
    return (
      <>
        <nav className="nav">
          <div className="nav-content">
            <Link href="/es/" className="nav-logo">
              <span className="nav-logo-icon">∞</span>
              <span className="nav-logo-text">
                <span className="nav-logo-name">Dos Aguas</span>
                <span className="nav-logo-tagline">Consulting</span>
              </span>
            </Link>
            <ul className="nav-links">
              <li><Link href="/es/services/">Servicios</Link></li>
              <li><Link href="/es/team/">Equipo</Link></li>
              <li><Link href="/es/blog/">Blog</Link></li>
              <li><Link href="/es/docs/">Docs</Link></li>
              <li><Link href="/es/kontakt/">Contacto</Link></li>
            </ul>
          </div>
        </nav>
        <main className="page-content">
          <div className="page-header">
            <h1>Documento no encontrado</h1>
            <Link href="/es/docs/">← Volver a Docs</Link>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-content">
          <Link href="/es/" className="nav-logo">
            <span className="nav-logo-icon">∞</span>
            <span className="nav-logo-text">
              <span className="nav-logo-name">Dos Aguas</span>
              <span className="nav-logo-tagline">Consulting</span>
            </span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/es/services/">Servicios</Link></li>
            <li><Link href="/es/team/">Equipo</Link></li>
            <li><Link href="/es/blog/">Blog</Link></li>
            <li><Link href="/es/docs/">Docs</Link></li>
            <li><Link href="/es/kontakt/">Contacto</Link></li>
          </ul>
        </div>
      </nav>

      <main className="page-content">
        <article className="doc-detail">
          <header className="doc-header">
            <div className="doc-meta">
              <span className="doc-type">{doc.type}</span>
              <span className="doc-date">{doc.date}</span>
            </div>
            <h1 className="doc-title">{doc.title}</h1>
            <span className="doc-author">Por {doc.author}</span>
          </header>
          
          <div 
            className="doc-content"
            dangerouslySetInnerHTML={{ __html: doc.content }}
          />
          
          <footer className="doc-footer">
            <Link href="/es/docs/" className="btn-secondary">← Volver a Docs</Link>
          </footer>
        </article>
      </main>
    </>
  )
}