# Dos Aguas Website

Deutsch-mexikanische Beratungsgesellschaft – Website Repository.

## 🚀 Quick Start

```bash
# Dependencies installieren
npm install

# Development Server
npm run dev

# Production Build
npm run build

# Static Export
npm run export
```

## 📁 Struktur

```
├── app/              # Next.js App Router
├── content/          # Markdown Content
│   ├── blog/        # Blog Posts
│   ├── newsletter/  # Newsletter Archiv
│   └── docs/        # Dokumentation
├── public/          # Statische Assets
└── .github/         # GitHub Actions
```

## 🎨 Design System

- **Primary:** `#0A2540`
- **Secondary:** `#00D4AA`
- **Accent:** `#FF6B35`
- **Background:** `#0D1117`

Siehe `app/globals.css` für alle Design Tokens.

## 📝 Content erstellen

### Blog Post
```bash
./scripts/new-post.sh "Titel des Posts"
```

### Review einreichen
```bash
./scripts/submit-for-review.sh "Titel"
```

## 🔒 Zugriff

- **Öffentlich:** Startseite, Blog, Docs
- **Geschützt:** Interne Dokumente (Login erforderlich)

## 🚀 Deployment

**Vercel** (empfohlen):
- Automatisches Deployment bei Push auf `main`
- Globales CDN, HTTPS, Preview-Deployments
- Siehe [VERCEL.md](./VERCEL.md) für Details

~~Strato~~ (deprecated): Wir haben zu Vercel migriert für bessere Performance.

## 📧 Kontakt

contact@dos-aguas.info
