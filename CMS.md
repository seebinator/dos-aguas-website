# Dos Aguas CMS

## Übersicht

Das CMS ist dateibasiert und verwendet Markdown-Dateien für Content. Bei jedem Deployment werden die Markdown-Dateien in statische HTML-Seiten umgewandelt.

## Struktur

```
content/
├── blog/
│   ├── de/
│   │   ├── 2026-03-01-willkommen.md
│   │   ├── 2026-02-28-ki-beratung.md
│   │   └── 2026-02-25-transferpreise.md
│   └── es/
│       ├── 2026-03-01-bienvenidos.md
│       ├── 2026-02-28-consultoria-ia.md
│       └── 2026-02-25-precios-transferencia.md
├── docs/
│   ├── de/
│   └── es/
└── pages/
    ├── de/
    └── es/
```

## Markdown-Format

```markdown
---
title: "Titel des Posts"
date: "2026-03-01"
author: "Name"
category: "KI"
image: "/images/hero-bg.jpg"
excerpt: "Kurze Beschreibung"
---

# Titel

Hier kommt der Content...
```

## Workflow

1. **Neuer Post erstellen:**
   - Markdown-Datei in `content/blog/de/` oder `content/blog/es/` erstellen
   - Frontmatter (title, date, author, category, image, excerpt) ausfüllen
   - Content in Markdown schreiben

2. **Deployment:**
   - `git add . && git commit -m "Neuer Blog-Post"`
   - `git push`
   - Vercel deployed automatisch

## Scripts

### Neuer Blog-Post erstellen

```bash
# Deutsch
./scripts/new-blog-post.sh de "Titel des Posts"

# Spanisch
./scripts/new-blog-post.sh es "Título del post"
```

### Alle Posts auflisten

```bash
./scripts/list-posts.sh
```

## Frontmatter-Felder

| Feld | Beschreibung | Pflicht |
|------|--------------|---------|
| title | Titel des Posts | Ja |
| date | Datum (YYYY-MM-DD) | Ja |
| author | Autor-Name | Ja |
| category | Kategorie | Ja |
| image | Bild-URL | Nein |
| excerpt | Kurzbeschreibung | Ja |
| slug | URL-Slug | Nein |

## Kategorien

- News / Noticias
- KI / IA
- Steuern / Impuestos
- Odoo
- Recht / Legal
- Transformation

## Bilder

Bilder werden in `/public/images/blog/` gespeichert und im Frontmatter referenziert:

```yaml
image: "/images/blog/mein-bild.jpg"
```
