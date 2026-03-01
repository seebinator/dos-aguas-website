# Docs Workflow - Vollständige Dokumentation

## Übersicht

Drei verschiedene Workflows für die Veröffentlichung von Dokumenten im Intranet:

---

## Workflow 1: Agent erstellt Markdown

**Für:** Textbasierte Inhalte, Berichte, Anleitungen, Konzepte

### Schritte:

1. **Agent erstellt Markdown**
   ```bash
   ./scripts/agent-new-doc.sh agent "Titel" de
   ```
   - Datei wird erstellt unter: `content/agents/{agent}/YYYY-MM-DD-titel.md`

2. **Automatische Konvertierung**
   - Markdown wird bei Build automatisch zu HTML konvertiert
   - Dos Aguas CI wird angewendet (Farben, Fonts, Layout)
   - Frontmatter wird ausgelesen (Titel, Datum, Agent, Kategorie)

3. **Verlinkung & Kategorisierung**
   - Dokument wird in `content/docs/de/` kopiert
   - Detailseite automatisch generiert unter `/de/docs/{slug}/`

4. **Zusammenfassung in Docs-Übersicht**
   - Titel, Excerpt, Agent, Datum, Kategorie werden angezeigt
   - Link zur Detailseite

### Beispiel:
- **Quelle:** `content/agents/luis/2026-03-01-vm-analyse.md`
- **Ziel:** `https://dos-aguas.consulting/de/docs/vm-analyse/`

---

## Workflow 2: Agent erstellt HTML

**Für:** Komplexe HTML-Dokumente mit eigenem Styling, interaktive Inhalte

### Schritte:

1. **Agent erstellt HTML**
   - HTML-Datei mit eigenem Styling erstellen
   - Upload nach: `public/docs/{dateiname}.html`

2. **CI Anpassung an Dos Aguas**
   - Hector passt das Corporate Design an
   - Farben, Fonts, Logo-Integration
   - Responsives Layout

3. **Verlinkung & Kategorisierung**
   - Next.js Page erstellen: `app/docs/{dateiname}/page.tsx`
   ```tsx
   import fs from 'fs'
   import path from 'path'
   
   export default function DocPage() {
     const filePath = path.join(process.cwd(), 'public', 'docs', 'dateiname.html')
     const htmlContent = fs.readFileSync(filePath, 'utf8')
     return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
   }
   export const dynamic = 'force-static'
   ```

4. **Zusammenfassung in Docs-Übersicht**
   - Eintrag in `app/de/docs/page.tsx` hinzufügen:
   ```tsx
   {
     id: 'x',
     title: 'Titel',
     date: '2026-03-01',
     agent: 'agent',
     agentName: 'Agent Name',
     type: 'Kategorie',
     excerpt: 'Kurzbeschreibung',
     slug: 'dateiname',
     external: true,
     url: '/docs/dateiname',
   }
   ```

### Beispiel:
- **Quelle:** `public/docs/vm-kombinations-analyse.html`
- **Page:** `app/docs/vm-kombinations-analyse/page.tsx`
- **Ziel:** `https://dos-aguas.consulting/docs/vm-kombinations-analyse`

---

## Workflow 3: User lädt HTML hoch

**Für:** Externe HTML-Dateien, die originalgetreu angezeigt werden sollen

### Schritte:

1. **User lädt HTML hoch**
   - Datei wird bereitgestellt (Upload, Email, etc.)
   - Speicherort: `public/docs/{dateiname}.html`

2. **Verlinkung & Kategorisierung**
   - Next.js Page erstellen: `app/docs/{dateiname}/page.tsx`
   - Gleicher Code wie Workflow 2

3. **Zusammenfassung in Docs-Übersicht**
   - Eintrag in `app/de/docs/page.tsx` mit `external: true`
   - Link öffnet im neuen Fenster (↗ Symbol)

### Besonderheit:
- HTML wird **originalgetreu** angezeigt
- Keine CI-Anpassung
- Externer Link im neuen Fenster

### Beispiel:
- **Quelle:** `public/docs/intranet-konzept.html`
- **Ziel:** `https://dos-aguas.consulting/docs/intranet-konzept`
- **Verhalten:** Öffnet im neuen Fenster, original HTML

---

## Kategorien

| Kategorie | Verwendung |
|-----------|------------|
| **Konzepte** | Strategiedokumente, Planungen, Konzepte |
| **Anleitungen** | How-To, Tutorials, Bedienungsanleitungen |
| **Newsletter** | Monatliche/periodische Updates |
| **Arbeitsdokumente** | Checklisten, Templates, Formulare |
| **Trainings** | Schulungsmaterialien, Kurse |
| **Videoskripte** | YouTube-Video-Skripte |
| **Podcastskripte** | Podcast-Episoden-Skripte |
| **Uploads** | Sonstige hochgeladene Dokumente |

---

## Technische Details

### Dateistruktur
```
website/
├── content/docs/de/          # Markdown-Dokumente
│   └── *.md
├── public/docs/              # HTML-Dokumente
│   └── *.html
├── app/docs/                 # Next.js Pages für HTML
│   └── [dateiname]/
│       └── page.tsx
└── app/de/docs/
    └── page.tsx              # Übersichtsseite
```

### Build-Prozess
1. Markdown → HTML (automatisch bei Build)
2. HTML aus `public/docs/` → statische Assets
3. Next.js Pages → Server-side rendering

### Deployment
```bash
git add .
git commit -m "content: Neues Dokument"
git push
```

---

## Zuständigkeiten

| Rolle | Aufgabe |
|-------|---------|
| **Agent** | Erstellt Markdown oder HTML Content |
| **Hector** | CI-Anpassung für HTML-Dokumente (Workflow 2) |
| **User** | Lädt HTML hoch (Workflow 3) |
| **Juan** | Technische Integration, Build, Deployment |

---

## Beispiele

### Workflow 1 (Markdown)
- `content/docs/de/newsletter-2026-03.md`
- `content/docs/de/anleitung-cms.md`

### Workflow 2 (HTML mit CI)
- `public/docs/vm-kombinations-analyse.html`
- `app/docs/vm-kombinations-analyse/page.tsx`

### Workflow 3 (HTML original)
- `public/docs/intranet-konzept.html`
- `app/docs/intranet-konzept/page.tsx`
