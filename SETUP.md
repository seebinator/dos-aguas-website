# Dos Aguas Website Setup

## ✅ Abgeschlossen

### Repository
- **URL:** https://github.com/seebinator/dos-aguas-website
- **Lokal:** `/root/.openclaw/workspace/website`
- **Branch:** main

### Technologie-Stack
- **Framework:** Next.js 14 mit Static Export
- **Styling:** CSS Custom Properties (Dark Theme)
- **Content:** Markdown mit Frontmatter
- **Deployment:** GitHub Actions → Strato

### Design-System
- Dark Theme im Dos Aguas CI
- Farben: Primary (#0A2540), Secondary (#00D4AA), Accent (#FF6B35)
- Responsive Layout
- Inter + JetBrains Mono Typography

### Content-Struktur
```
content/
├── blog/           # Blog Posts
├── newsletter/     # Newsletter Archiv
└── docs/           # Dokumentation
```

### Vorhandener Content
- **Blog:** Willkommens-Post
- **Newsletter:** Issue #1 (März 2026)
- **Docs:** Index mit Struktur

## 🔧 Nächste Schritte

### 1. Strato Deployment konfigurieren
In GitHub Repository Settings → Secrets:
- `STRATO_HOST` (FTP-Server)
- `STRATO_USER` (FTP-Benutzername)
- `STRATO_PASS` (FTP-Passwort)

### 2. Domain verbinden
- DNS-Einträge bei Strato prüfen
- SSL-Zertifikat einrichten

### 3. Usermanagement implementieren
- Auth-System für geschützte Bereiche
- Login-Seite erstellen
- Rollen (Kunde, Intern, Admin)

### 4. CMS-Zugriff für Agenten
- Content-API oder Git-basiertes CMS
- Schreibzugriff konfigurieren

## 📝 Wichtige Dateien

| Datei | Zweck |
|-------|-------|
| `app/globals.css` | Design Tokens & Styles |
| `app/page.tsx` | Startseite |
| `content/blog/*.md` | Blog Posts |
| `.github/workflows/deploy.yml` | Deployment |

## 🚀 Deployment

Automatisch bei Push auf `main`:
```bash
git push origin main
```

Manuell triggerbar via GitHub Actions UI.
