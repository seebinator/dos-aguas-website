#!/bin/bash
# CMS - Blog Post Bild generieren via Unsplash (zuverlässig)

POST_FILE=$1

if [ -z "$POST_FILE" ]; then
    echo "Usage: $0 <path/to/post.md>"
    exit 1
fi

if [ ! -f "$POST_FILE" ]; then
    echo "Datei nicht gefunden: $POST_FILE"
    exit 1
fi

# Post-Daten extrahieren
TITLE=$(grep "^title:" "$POST_FILE" | cut -d'"' -f2)
CATEGORY=$(grep "^category:" "$POST_FILE" | cut -d'"' -f2)
LANGUAGE=$(grep "^language:" "$POST_FILE" | cut -d'"' -f2)

echo "Generiere Bild für: $TITLE"
echo "Kategorie: $CATEGORY"
echo "Sprache: $LANGUAGE"

# Bild-ID aus Post-Filename generieren
POST_ID=$(basename "$POST_FILE" .md)
IMAGE_FILENAME="${POST_ID}.png"
IMAGE_PATH="public/images/blog/$IMAGE_FILENAME"

# Verzeichnis erstellen
mkdir -p "public/images/blog"

# Unsplash Bild basierend auf Kategorie auswählen
echo "Lade Unsplash Bild..."

case "$CATEGORY" in
    "KI"|"IA")
        # AI, Technology, Neural Networks
        IMAGE_URL="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1024&q=80"
        ;;
    "Steuern"|"Impuestos")
        # Finance, Business, International
        IMAGE_URL="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1024&q=80"
        ;;
    "Odoo"|"ERP")
        # Business Software, Office
        IMAGE_URL="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1024&q=80"
        ;;
    "Marketing")
        # Marketing, Digital, Social Media
        IMAGE_URL="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1024&q=80"
        ;;
    "Design"|"Diseño")
        # Design, Creative
        IMAGE_URL="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1024&q=80"
        ;;
    "BI"|"Inteligencia")
        # Data, Analytics
        IMAGE_URL="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1024&q=80"
        ;;
    "Service"|"Servicio")
        # Customer Service, Support
        IMAGE_URL="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1024&q=80"
        ;;
    *)
        # Default: Business, Consulting
        IMAGE_URL="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1024&q=80"
        ;;
esac

# Bild herunterladen
curl -s -L "$IMAGE_URL" -o "$IMAGE_PATH" --max-time 30

if [ -f "$IMAGE_PATH" ] && [ -s "$IMAGE_PATH" ]; then
    echo "✓ Bild gespeichert: $IMAGE_PATH"
else
    echo "⚠️  Fehler beim Download, verwende Standard-Bild..."
    curl -s -L "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1024&q=80" -o "$IMAGE_PATH"
    echo "✓ Standard-Bild gespeichert"
fi

# Markdown-Datei aktualisieren
RELATIVE_PATH="/images/blog/$IMAGE_FILENAME"

# Ersetze das image: Feld im Frontmatter
if grep -q "^image:" "$POST_FILE"; then
    sed -i "s|^image: .*|image: \"$RELATIVE_PATH\"|" "$POST_FILE"
else
    # Füge image nach excerpt ein
    sed -i "/^excerpt:/a image: \"$RELATIVE_PATH\"" "$POST_FILE"
fi

echo "✓ Markdown aktualisiert: $POST_FILE"
echo ""
echo "Bild-Pfad: $RELATIVE_PATH"
