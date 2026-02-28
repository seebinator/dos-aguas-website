# Vercel Deployment Guide

## 🚀 Schnellstart

### 1. Vercel Account erstellen
- Auf [vercel.com](https://vercel.com) registrieren
- Mit GitHub verbinden

### 2. Projekt importieren
- "Add New Project"
- GitHub-Repo "dos-aguas-website" auswählen
- Framework: Next.js
- Deploy

### 3. Domain verbinden
- In Project Settings → Domains
- "dos-aguas.consulting" hinzufügen
- DNS-Einträge bei Strato aktualisieren

## 🔧 DNS-Konfiguration (Strato)

### Option A: Nameserver-Wechsel (empfohlen)
1. Strato Domain-Verwaltung öffnen
2. Nameserver auf Vercel ändern:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

### Option B: A-Record + CNAME
- A-Record: `76.76.21.21` (Vercel IP)
- CNAME: `cname.vercel-dns.com`

## 🔒 Environment Variables

Falls benötigt, in Vercel Dashboard → Settings → Environment Variables:
- `NEXT_TELEMETRY_DISABLED`: `1`

## 📊 Vorteile Vercel vs Strato

| Feature | Strato | Vercel |
|---------|--------|--------|
| CDN | ❌ | ✅ Global |
| HTTPS | Manuel | Auto |
| Deploy | FTP | Git |
| Preview | ❌ | ✅ |
| Edge Functions | ❌ | ✅ |
| Analytics | ❌ | ✅ |

## 🔄 Workflow

1. Push zu GitHub → Auto-Deploy
2. Preview-URL für jeden PR
3. Production-Deploy bei Merge

## 📝 Wichtig

- SSL-Zertifikat wird automatisch erstellt
- Keine manuelle Konfiguration nötig
- Domain-Transfer kann 24-48h dauern
