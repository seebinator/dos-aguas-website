# Dos Aguas CMS - Agenten-Workflow

## Ordnerstruktur

```
content/
├── agents/                    # Agenten-Arbeitsergebnisse
│   ├── juan/                 # KI & Strategie
│   │   ├── 2026-03-01-ki-trends.md
│   │   └── 2026-02-28-automatisierung.md
│   ├── maria/                # Steuerberatung MX
│   │   └── 2026-03-01-mexikanische-steuern.md
│   ├── carlos/               # Steuerberatung DE
│   │   └── 2026-02-28-deutsche-steuern.md
│   ├── luis/                 # Odoo & ERP
│   ├── mark/                 # Marketing
│   ├── jenny/                # Business Intelligence
│   ├── hector/               # Design
│   └── sofia/                # Kundenbetreuung
│
├── blog/                     # Veröffentlichte Posts
│   ├── de/
│   └── es/
│
└── translations/             # Auto-Übersetzungen
    └── pending/
```

## Agenten-Kategorien

| Agent | Kategorie | Themen |
|-------|-----------|--------|
| Juan | KI / IA | Künstliche Intelligenz, Automation, Strategie |
| Maria | Steuern-MX / Impuestos-MX | Mexikanische Steuerberatung |
| Carlos | Steuern-DE / Impuestos-DE | Deutsche Steuerberatung |
| Luis | Odoo | ERP, Odoo Implementierung |
| Mark | Marketing | Content, Social Media |
| Jenny | BI / Inteligencia | Business Intelligence, Daten |
| Hector | Design | UI/UX, Corporate Identity |
| Sofia | Service / Servicio | Kundenbetreuung |

## Workflow

### 1. Agent erstellt Content

```bash
# Agent erstellt Markdown-Datei
./scripts/agent-new-post.sh juan "KI-Trends 2026"
```

### 2. Auto-Übersetzung

- System übersetzt automatisch DE → ES oder ES → DE
- Übersetzung wird in `content/translations/pending/` gespeichert
- Agent kann Übersetzung reviewen

### 3. Veröffentlichung

```bash
# Alle validierten Posts veröffentlichen
./scripts/publish-posts.sh
```

## Markdown-Format für Agenten

```markdown
---
title: "KI-Trends 2026"
date: "2026-03-01"
author: "Juan"
agent: "juan"
category: "KI"
category_es: "IA"
tags: ["KI", "Trends", "Automation"]
tags_es: ["IA", "Tendencias", "Automatización"]
image: "/images/blog/ki-trends.jpg"
excerpt: "Die wichtigsten KI-Trends für 2026"
excerpt_es: "Las tendencias más importantes de IA para 2026"
language: "de"  # Original-Sprache
translated: true  # Auto-Übersetzung erstellt
---

# KI-Trends 2026

Content hier...
```

## Blog-Filter

Auf der Blog-Seite können Besucher filtern nach:
- **Kategorie**: KI, Steuern, Odoo, Marketing, BI, Design, Service
- **Agent**: Juan, Maria, Carlos, Luis, Mark, Jenny, Hector, Sofia
- **Datum**: Neueste zuerst, älteste zuerst
- **Sprache**: DE, ES
