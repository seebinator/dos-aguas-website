# Vollständiger Docs Workflow mit Übersetzung

## Ziel: Konsistente Zweisprachigkeit (DE + ES)

---

## Workflow 1: Agent erstellt Markdown (mit Auto-Übersetzung)

### Schritt 1: Agent erstellt Dokument
```bash
./scripts/agent-new-doc.sh luis "VM Analyse" de
```

### Schritt 2: Automatische Übersetzung
```bash
./scripts/translate-doc.sh content/agents/luis/2026-03-01-vm-analyse.md
```
- Erstellt automatisch `content/docs/es/2026-03-01-vm-analyse.md`
- Übersetzt Titel, Excerpt, Typ
- Markiert als `translated: true`

### Schritt 3: Manuelle Überprüfung (optional)
- Spanischer Muttersprachler prüft Übersetzung
- Korrekturen direkt in der Markdown-Datei

### Schritt 4: Veröffentlichung
```bash
./scripts/publish-docs.sh
```
- Kopiert DE-Version nach `content/docs/de/`
- Kopiert ES-Version nach `content/docs/es/`
- Beide Sprachen sind verfügbar

---

## Workflow 2: Agent erstellt HTML (mit Auto-Übersetzung)

### Schritt 1: Agent erstellt HTML (DE)
```bash
# HTML mit deutschem Content erstellen
public/docs/vm-analyse.html
```

### Schritt 2: CI Anpassung (Hector)
- Dos Aguas CI anwenden
- Farben, Fonts, Layout

### Schritt 3: Übersetzung erstellen
```bash
# Manuelle oder automatische Übersetzung
# Ergebnis: public/docs/es/vm-analyse.html
```

### Schritt 4: Next.js Pages erstellen
```bash
# DE-Version
app/docs/vm-analyse/page.tsx

# ES-Version  
app/es/docs/vm-analyse/page.tsx
```

### Schritt 5: Beide Sprachen in Übersicht
- `app/de/docs/page.tsx` → Link zu `/docs/vm-analyse`
- `app/es/docs/page.tsx` → Link zu `/es/docs/vm-analyse`

---

## Workflow 3: User lädt HTML hoch (mit Hinweis)

### Schritt 1: User lädt HTML hoch
```
public/docs/internes-dokument.html (DE)
```

### Schritt 2: Hinweis auf Übersetzung
- Automatischer Hinweis: "Übersetzung auf Anfrage verfügbar"
- Oder: User lädt beide Sprachen hoch

### Schritt 3: Verlinkung
- Primäre Sprache verlinken
- Hinweis: `[ES]` oder `[DE]` im Titel

---

## Übersetzungs-Kategorien

| Deutsch | Spanisch |
|---------|----------|
| Konzepte | Conceptos |
| Anleitungen | Instructivos |
| Newsletter | Newsletter |
| Arbeitsdokumente | Documentos de Trabajo |
| Trainings | Capacitaciones |
| Videoskripte | Guiones de Video |
| Podcastskripte | Guiones de Podcast |
| Uploads | Subidas |

---

## Automatisierung

### Script: `translate-doc.sh`
```bash
# DE → ES
./scripts/translate-doc.sh content/docs/de/dokument.md

# ES → DE  
./scripts/translate-doc.sh content/docs/es/documento.md
```

### Features:
- Automatische Spracherkennung
- Kategorie-Mapping
- Frontmatter-Übersetzung
- Hinweis auf Original

### Erweiterung mit API:
```bash
# DeepL API (empfohlen)
export DEEPL_API_KEY="xxx"
./scripts/translate-doc.sh --api content/docs/de/dokument.md

# Google Translate API
export GOOGLE_API_KEY="xxx"
./scripts/translate-doc.sh --api content/docs/de/dokument.md
```

---

## Dateistruktur (Zweisprachig)

```
website/
├── content/docs/
│   ├── de/                    # Deutsche Markdown-Dokumente
│   │   ├── vm-analyse.md
│   │   └── newsletter-2026-03.md
│   └── es/                    # Spanische Markdown-Dokumente
│       ├── vm-analisis.md
│       └── newsletter-2026-03.md
├── public/docs/
│   ├── de/                    # Deutsche HTML-Dokumente
│   │   └── vm-analyse.html
│   └── es/                    # Spanische HTML-Dokumente
│       └── vm-analisis.html
├── app/docs/
│   ├── vm-analyse/            # DE-Version
│   │   └── page.tsx
│   └── es/
│       └── vm-analisis/       # ES-Version
│           └── page.tsx
├── app/de/docs/
│   └── page.tsx               # DE-Übersicht (zeigt beide Sprachen)
└── app/es/docs/
    └── page.tsx               # ES-Übersicht (zeigt beide Sprachen)
```

---

## UI-Indikatoren

### In der Übersicht:
- 🇩🇪 = Deutsche Version verfügbar
- 🇪🇸 = Spanische Version verfügbar
- 🔄 = Übersetzung in Arbeit
- ✓ = Beide Sprachen verfügbar

### Beispiel:
```
[✓] VM Kombinationsanalyse
    Luis • 2026-03-01 • Konzepte
    [🇩🇪 DE] [🇪🇸 ES]
```

---

## Qualitätssicherung

### Automatisch:
- Spracherkennung
- Kategorie-Mapping
- Link-Konsistenz

### Manuell:
- Muttersprachler prüft Übersetzung
- Fachbegriffe kontrollieren
- Formatierung verifizieren

---

## Zuständigkeiten

| Rolle | Aufgabe |
|-------|---------|
| **Agent** | Erstellt Content in Primärsprache |
| **Übersetzungsscript** | Automatische Vorlage erstellen |
| **Muttersprachler** | Manuelle Überprüfung |
| **Hector** | CI-Anpassung für beide Sprachen |
| **Juan** | Technische Integration |

---

## Beispiel-Workflow (vollständig)

### Luis erstellt VM-Analyse:

1. **Erstellen (DE)**
   ```bash
   ./scripts/agent-new-doc.sh luis "VM Analyse" de
   ```

2. **Auto-Übersetzung (ES)**
   ```bash
   ./scripts/translate-doc.sh content/agents/luis/2026-03-01-vm-analyse.md
   ```

3. **Prüfung (Maria)**
   - Maria prüft spanische Übersetzung
   - Korrekturen in `content/docs/es/2026-03-01-vm-analisis.md`

4. **Veröffentlichung**
   ```bash
   ./scripts/publish-docs.sh
   ```

5. **Ergebnis**
   - DE: `https://dos-aguas.consulting/de/docs/vm-analyse/`
   - ES: `https://dos-aguas.consulting/es/docs/vm-analisis/`
   - Beide verlinkt in der jeweiligen Übersicht

---

## Ziel erreicht

✅ Konsistente Zweisprachigkeit  
✅ Automatisierte Übersetzungs-Vorlagen  
✅ Manuelle Qualitätskontrolle  
✅ Beide Sprachen in der Struktur verfügbar  
