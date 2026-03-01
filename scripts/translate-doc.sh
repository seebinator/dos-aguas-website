#!/bin/bash
# Docs Übersetzungs-Workflow (DE ↔ ES)
# Automatische Übersetzung von Dokumenten

SOURCE_FILE=$1

if [ -z "$SOURCE_FILE" ]; then
    echo "Usage: $0 <path/to/source.md>"
    exit 1
fi

if [ ! -f "$SOURCE_FILE" ]; then
    echo "Datei nicht gefunden: $SOURCE_FILE"
    exit 1
fi

# Sprache ermitteln
if [[ "$SOURCE_FILE" == *"/de/"* ]]; then
    SOURCE_LANG="de"
    TARGET_LANG="es"
    TARGET_DIR="content/docs/es"
    AGENT_DIR="content/agents"
elif [[ "$SOURCE_FILE" == *"/es/"* ]]; then
    SOURCE_LANG="es"
    TARGET_LANG="de"
    TARGET_DIR="content/docs/de"
    AGENT_DIR="content/agents"
else
    echo "Konnte Sprache nicht ermitteln (erwarte /de/ oder /es/ im Pfad)"
    exit 1
fi

# Frontmatter extrahieren
TITLE=$(grep "^title:" "$SOURCE_FILE" | cut -d'"' -f2)
DATE=$(grep "^date:" "$SOURCE_FILE" | cut -d'"' -f2)
AUTHOR=$(grep "^author:" "$SOURCE_FILE" | cut -d'"' -f2)
AGENT=$(grep "^agent:" "$SOURCE_FILE" | cut -d'"' -f2)
TYPE=$(grep "^type:" "$SOURCE_FILE" | cut -d'"' -f2)
EXCERPT=$(grep "^excerpt:" "$SOURCE_FILE" | cut -d'"' -f2)

# Titel übersetzen (einfache Mapping)
if [ "$SOURCE_LANG" == "de" ]; then
    # Deutsche Titel → Spanisch
    case "$TYPE" in
        "Konzepte")
            TYPE_ES="Conceptos"
            ;;
        "Anleitungen")
            TYPE_ES="Instructivos"
            ;;
        "Newsletter")
            TYPE_ES="Newsletter"
            ;;
        "Arbeitsdokumente")
            TYPE_ES="Documentos de Trabajo"
            ;;
        "Trainings")
            TYPE_ES="Capacitaciones"
            ;;
        "Videoskripte")
            TYPE_ES="Guiones de Video"
            ;;
        "Podcastskripte")
            TYPE_ES="Guiones de Podcast"
            ;;
        *)
            TYPE_ES="Documentos"
            ;;
    esac
    
    # Titel-Übersetzung (später durch API ersetzen)
    TITLE_ES="[ES] $TITLE"
    EXCERPT_ES="[ES] $EXCERPT"
    
    TARGET_FILE="$TARGET_DIR/$(basename $SOURCE_FILE)"
    
else
    # Spanische Titel → Deutsch
    case "$TYPE" in
        "Conceptos")
            TYPE_DE="Konzepte"
            ;;
        "Instructivos")
            TYPE_DE="Anleitungen"
            ;;
        "Newsletter")
            TYPE_DE="Newsletter"
            ;;
        "Documentos de Trabajo")
            TYPE_DE="Arbeitsdokumente"
            ;;
        "Capacitaciones")
            TYPE_DE="Trainings"
            ;;
        "Guiones de Video")
            TYPE_DE="Videoskripte"
            ;;
        "Guiones de Podcast")
            TYPE_DE="Podcastskripte"
            ;;
        *)
            TYPE_DE="Dokumente"
            ;;
    esac
    
    # Titel-Übersetzung
    TITLE_DE="[DE] $TITLE"
    EXCERPT_DE="[DE] $EXCERPT"
    
    TARGET_FILE="$TARGET_DIR/$(basename $SOURCE_FILE)"
fi

# Verzeichnis erstellen
mkdir -p "$TARGET_DIR"

# Übersetzung erstellen
echo "---" > "$TARGET_FILE"
echo "title: \"$(if [ "$SOURCE_LANG" == "de" ]; then echo "$TITLE_ES"; else echo "$TITLE_DE"; fi)\"" >> "$TARGET_FILE"
echo "date: \"$DATE\"" >> "$TARGET_FILE"
echo "author: \"$AUTHOR\"" >> "$TARGET_FILE"
echo "agent: \"$AGENT\"" >> "$TARGET_FILE"
echo "type: \"$(if [ "$SOURCE_LANG" == "de" ]; then echo "$TYPE_ES"; else echo "$TYPE_DE"; fi)\"" >> "$TARGET_FILE"
echo "excerpt: \"$(if [ "$SOURCE_LANG" == "de" ]; then echo "$EXCERPT_ES"; else echo "$EXCERPT_DE"; fi)\"" >> "$TARGET_FILE"
echo "language: \"$TARGET_LANG\"" >> "$TARGET_FILE"
echo "translated: true" >> "$TARGET_FILE"
echo "source: \"$(basename $SOURCE_FILE)\"" >> "$TARGET_FILE"
echo "---" >> "$TARGET_FILE"
echo "" >> "$TARGET_FILE"

# Body kopieren (mit Hinweis auf Übersetzung)
echo "> **Hinweis:** Dies ist eine automatische Übersetzung. Für die Originalversion siehe: [$(basename $SOURCE_FILE)]($(basename $SOURCE_FILE))" >> "$TARGET_FILE"
echo "" >> "$TARGET_FILE"
echo "$(tail -n +$(grep -n '^---$' "$SOURCE_FILE" | tail -1 | cut -d: -f1) "$SOURCE_FILE" | tail -n +2)" >> "$TARGET_FILE"

echo "✓ Übersetzung erstellt: $TARGET_FILE"
echo "  Sprache: $SOURCE_LANG → $TARGET_LANG"
echo "  Typ: $(if [ "$SOURCE_LANG" == "de" ]; then echo "$TYPE_ES"; else echo "$TYPE_DE"; fi)"
echo ""
echo "⚠️  Hinweis: Dies ist eine Vorlage. Manuelle Überprüfung empfohlen."
echo "Für produktive Übersetzungen DeepL API oder Google Translate API integrieren."
