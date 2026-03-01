# HTML-Dateien Upload - Workflow

## Problem
HTML-Dateien aus dem `public` Ordner werden bei Next.js Static Export nicht korrekt verfügbar gemacht (404 Fehler).

## Lösung
HTML-Dateien als Next.js Pages behandeln:

### Schritt 1: HTML-Datei speichern
```
/public/docs/[dateiname].html
```

### Schritt 2: Next.js Page erstellen
Erstelle eine Page-Datei unter:
```
/app/docs/[dateiname]/page.tsx
```

Mit folgendem Inhalt:
```tsx
import fs from 'fs'
import path from 'path'

export default function HtmlPage() {
  const filePath = path.join(process.cwd(), 'public', 'docs', '[dateiname].html')
  const htmlContent = fs.readFileSync(filePath, 'utf8')
  
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: htmlContent }} 
      style={{ 
        width: '100%', 
        minHeight: '100vh',
        margin: 0,
        padding: 0
      }}
    />
  )
}

export const dynamic = 'force-static'
```

### Schritt 3: Link anpassen
In der Docs-Übersicht:
```tsx
{
  id: 'x',
  title: 'Titel',
  date: '2026-03-01',
  agent: 'agent',
  agentName: 'Agent',
  type: 'Kategorie',
  excerpt: 'Beschreibung',
  slug: 'dateiname',
  external: true,
  url: '/docs/dateiname',  // Ohne .html
}
```

### Schritt 4: Deploy
```bash
git add . && git commit -m "content: Add HTML document" && git push
```

## Ergebnis
- URL: `https://dos-aguas.consulting/docs/dateiname`
- HTML wird korrekt gerendert
- Kein 404 Fehler

## Beispiel
**Intranet-Konzept:**
- HTML: `/public/docs/intranet-konzept.html`
- Page: `/app/docs/intranet-konzept/page.tsx`
- URL: `/docs/intranet-konzept`
