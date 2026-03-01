#!/bin/bash
# CMS - Agent-Post übersetzen (DE <-> ES)

FILE=$1

if [ -z "$FILE" ]; then
    echo "Usage: $0 <path/to/post.md>"
    exit 1
fi

if [ ! -f "$FILE" ]; then
    echo "Datei nicht gefunden: $FILE"
    exit 1
fi

# Sprache und Pfade ermitteln
if [[ "$FILE" == *"/de/"* ]]; then
    SOURCE_LANG="de"
    TARGET_LANG="es"
    TARGET_FILE="${FILE//\/de\//\/es\/}"
    TARGET_FILE="${TARGET_FILE//-de-/-es-}"
elif [[ "$FILE" == *"/es/"* ]]; then
    SOURCE_LANG="es"
    TARGET_LANG="de"
    TARGET_FILE="${FILE//\/es\//\/de\/}"
    TARGET_FILE="${TARGET_FILE//-es-/-de-}"
else
    # Aus content/agents/ - beide Sprachen erstellen
    SOURCE_LANG=$(grep "^language:" "$FILE" | cut -d'"' -f2)
    if [ "$SOURCE_LANG" == "de" ]; then
        TARGET_LANG="es"
    else
        TARGET_LANG="de"
    fi
fi

echo "Übersetzung: $SOURCE_LANG -> $TARGET_LANG"
echo "Quelle: $FILE"
echo "Ziel: $TARGET_FILE"

# Verzeichnis erstellen
mkdir -p "$(dirname "$TARGET_FILE")"

# Einfache Übersetzung (Platzhalter - in Produktion API nutzen)
# Hier könnte DeepL API, Google Translate API etc. integriert werden

echo ""
echo "⚠️  Automatische Übersetzung erfordert API-Integration"
echo ""
echo "Optionen:"
echo "1. DeepL API (empfohlen): https://www.deepl.com/pro-api"
echo "2. Google Cloud Translation API"
echo "3. Manuelle Übersetzung"
echo ""
echo "Temporäre Lösung: Kopiere die Datei und übersetze manuell"

# Kopie erstellen als Vorlage
cp "$FILE" "$TARGET_FILE"

# Platzhalter-Markierungen hinzufügen
sed -i "s/language: \"$SOURCE_LANG\"/language: \"$TARGET_LANG\"/" "$TARGET_FILE"
sed -i "s/^status: \"draft\"/status: \"translation_pending\"/" "$TARGET_FILE"

echo ""
echo "✓ Vorlage erstellt: $TARGET_FILE"
echo "Status: Übersetzung ausstehend"
echo ""
echo "Nächste Schritte:"
echo "1. Datei öffnen: $TARGET_FILE"
echo "2. Content übersetzen"
echo "3. Status auf 'published' setzen"
