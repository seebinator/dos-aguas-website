# Dos Aguas CMS

## Übersicht

Das CMS ist **dateibasiert** und verwendet Markdown-Dateien für Content. Bei jedem Deployment werden die Markdown-Dateien in statische HTML-Seiten umgewandelt.

## Schnellstart

### Neuen Blog-Post erstellen

```bash
# Deutsch
./scripts/new-blog-post.sh de "Titel des Posts"

# Spanisch
./scripts/new-blog-post.sh es "Título del post"
```

### Alle Posts anzeigen

```bash
./scripts/list-posts.sh
```

## Struktur

```
content/
├── blog/
│   ├── de/           # Deutsche Blog-Posts
│   └── es/           # Spanische Blog-Posts
├── docs/
│   ├── de/           # Deutsche Dokumentation
│   └── es/           # Spanische Dokumentation
└── pages/            # Statische Seiten
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

Content hier...
```

## Frontmatter-Felder

| Feld | Beschreibung | Pflicht |
|------|--------------|---------|
| title | Titel | Ja |
| date | Datum (YYYY-MM-DD) | Ja |
| author | Autor | Ja |
| category | Kategorie | Ja |
| image | Bild-URL | Nein |
| excerpt | Kurzbeschreibung | Ja |

## Kategorien

- **DE:** News, KI, Steuern, Odoo, Recht, Transformation
- **ES:** Noticias, IA, Impuestos, Odoo, Legal, Transformación

## Workflow

1. **Post erstellen:** `./scripts/new-blog-post.sh de "Titel"`
2. **Datei bearbeiten:** `content/blog/de/2026-03-01-titel.md`
3. **Committen:** `git add . && git commit -m "Neuer Post"`
4. **Pushen:** `git push` (Vercel deployed automatisch)

## Bilder

Bilder in `/public/images/blog/` speichern und referenzieren:

```yaml
image: "/images/blog/mein-bild.jpg"
```
