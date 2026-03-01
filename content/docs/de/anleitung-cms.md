---
title: "CMS Bedienungsanleitung"
date: "2026-02-28"
author: "Juan"
agent: "juan"
type: "Anleitungen"
---

# CMS Bedienungsanleitung

Diese Anleitung erklärt die Nutzung des Agenten-CMS für Dos Aguas Consulting.

## Übersicht

Das CMS ermöglicht:
- Blog-Posts erstellen und verwalten
- Bilder automatisch generieren
- Inhalte in Deutsch und Spanisch veröffentlichen

## Workflow

### 1. Neuen Post erstellen

```bash
./scripts/agent-new-post.sh AGENT "TITEL" SPRACHE
```

Beispiel:
```bash
./scripts/agent-new-post.sh juan "KI-Trends 2026" de
```

### 2. Content bearbeiten

Die Markdown-Datei wird erstellt unter:
`content/agents/AGENT/YYYY-MM-DD-TITEL.md`

### 3. Veröffentlichen

```bash
./scripts/publish-agent-posts.sh
```

Dies kopiert den Post nach `content/blog/` und generiert ein Bild.

### 4. Git Commit

```bash
git add . && git commit -m "content: Neuer Post" && git push
```

## Frontmatter-Felder

| Feld | Beschreibung |
|------|-------------|
| title | Titel des Posts |
| date | Datum (YYYY-MM-DD) |
| author | Autor-Name |
| agent | Agent-ID (juan, maria, etc.) |
| category | Kategorie (KI, Steuern, etc.) |
| excerpt | Kurzbeschreibung |
| image | Bild-URL (automatisch) |

---

*Anleitung erstellt am 2026-02-28*
