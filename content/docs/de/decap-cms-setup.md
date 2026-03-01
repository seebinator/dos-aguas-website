---
title: "Decap CMS Einrichtung"
date: "2026-03-01"
author: "Juan"
agent: "juan"
type: "Anleitungen"
---

# Decap CMS Einrichtung

## Übersicht

Decap CMS (früher Netlify CMS) ist ein Headless CMS für statische Websites. Es ermöglicht die Bearbeitung von Blog-Posts über eine webbasierte Oberfläche.

## Voraussetzungen

- GitHub Repository: `seebinator/dos-aguas-website`
- Website deployed (z.B. Vercel, Netlify, oder eigener Server)

## Option 1: Netlify Identity (Einfachste)

### Schritt 1: Website auf Netlify deployen

1. Gehe zu [netlify.com](https://netlify.com)
2. Klicke "Add new site" → "Import an existing project"
3. Wähle GitHub und das Repository `seebinator/dos-aguas-website`
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Klicke "Deploy site"

### Schritt 2: Netlify Identity aktivieren

1. Im Netlify Dashboard → "Identity"
2. Klicke "Enable Identity"
3. Gehe zu "Settings" → "Registration"
4. Setze "Registration preferences" auf "Invite only" (empfohlen)
5. Gehe zu "Services" → "Git Gateway"
6. Klicke "Enable Git Gateway"
7. Autorisiere mit GitHub

### Schritt 3: Admin-Zugang einrichten

1. Gehe zu "Identity" → "Users"
2. Klicke "Invite users"
3. Gib deine E-Mail-Adresse ein
4. Rolle: "Admin"
5. Klicke "Send"
6. Akzeptiere die Einladung per E-Mail

### Schritt 4: CMS nutzen

1. Öffne `https://deine-site.netlify.app/admin/`
2. Klicke "Login with Netlify Identity"
3. Gib deine E-Mail und Passwort ein
4. Du kannst jetzt Blog-Posts erstellen und bearbeiten

---

## Option 2: Vercel + Git Gateway

### Schritt 1: Vercel Project erstellen

1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke "Add New..." → "Project"
3. Importiere `seebinator/dos-aguas-website`
4. Framework Preset: "Next.js"
5. Klicke "Deploy"

### Schritt 2: Git Gateway einrichten

Da Vercel kein eingebautes Identity hat:

1. Erstelle einen Account auf [netlify.com](https://netlify.com)
2. Gehe zu "Sites" → "Add new site" → "Deploy manually"
3. Dies dient nur für Git Gateway, die Website läuft auf Vercel
4. Aktiviere Identity und Git Gateway wie in Option 1 beschrieben

---

## Option 3: GitHub OAuth

### Schritt 1: GitHub OAuth App erstellen

1. Gehe zu GitHub → Settings → Developer settings → OAuth Apps
2. Klicke "New OAuth App"
3. Application name: "Dos Aguas CMS"
4. Homepage URL: `https://dos-aguas.consulting`
5. Authorization callback URL: `https://dos-aguas.consulting/admin/`
6. Klicke "Register application"
7. Notiere Client ID und Client Secret

### Schritt 2: Config anpassen

Ändere `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: seebinator/dos-aguas-website
  branch: main
```

---

## Empfohlene Lösung

**Option 1 (Netlify)** ist am einfachsten:

1. Deploye auf Netlify (kostenlos)
2. Aktiviere Identity
3. Fertig

---

## CMS Nutzung

### Blog-Post erstellen:

1. Öffne `/admin/`
2. Wähle "Blog (Deutsch)" oder "Blog (Español)"
3. Klicke "New Blog (Deutsch)"
4. Fülle alle Felder aus:
   - Titel
   - Datum
   - Autor
   - Agent (für Filter)
   - Kategorie (für Filter)
   - Bild (Upload oder URL)
   - Zusammenfassung
   - Inhalt (Markdown)
5. Klicke "Save" → Erstellt einen Git Commit
6. Klicke "Publish" → Pusht zu GitHub

### Bilder hochladen:

- Im "Bild"-Feld auf "Choose different image" klicken
- Bild auswählen oder per Drag & Drop hochladen
- Bild wird automatisch nach `public/images/blog/` gespeichert

---

## Troubleshooting

### "Failed to load entries"

- Prüfe Git Gateway Konfiguration
- Stelle sicher, dass das Repository öffentlich ist oder der Zugriff erlaubt ist

### "Login not working"

- Prüfe Identity-Einstellungen in Netlify
- Stelle sicher, dass die E-Mail bestätigt ist

### "Changes not saving"

- Prüfe Git Gateway Berechtigungen
- Stelle sicher, dass der GitHub Token gültig ist

---

## Support

- Decap CMS Docs: https://decapcms.org/docs/
- Netlify Identity: https://docs.netlify.com/visitor-access/identity/
- Git Gateway: https://github.com/netlify/git-gateway
