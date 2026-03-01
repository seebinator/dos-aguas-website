#!/bin/bash
# CMS - Blog Post Bild generieren via Pollinations.ai (kostenlos, kein API-Key)

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
EXCERPT=$(grep "^excerpt:" "$POST_FILE" | cut -d'"' -f2)
LANGUAGE=$(grep "^language:" "$POST_FILE" | cut -d'"' -f2)

echo "Generiere Bild für: $TITLE"
echo "Kategorie: $CATEGORY"
echo "Sprache: $LANGUAGE"

# Prompt basierend auf Kategorie und Sprache erstellen
if [ "$LANGUAGE" == "de" ]; then
    case "$CATEGORY" in
        "KI")
            PROMPT="Futuristic artificial intelligence, neural networks, digital transformation, modern, professional, dark blue background, technological, high quality, abstract, no text"
            ;;
        "Steuern")
            PROMPT="International finance, tax consulting, Germany Mexico business, professional, trustworthy, modern, dark blue background, corporate, no text"
            ;;
        "Odoo")
            PROMPT="ERP software, business management, digital processes, modern, professional, technological, dark blue background, no text"
            ;;
        "Marketing")
            PROMPT="Digital marketing, content creation, social media, modern, creative, professional, dark blue background, no text"
            ;;
        *)
            PROMPT="Business consulting, international company, Germany Mexico, professional, modern, dark blue background, high quality, no text"
            ;;
    esac
else
    case "$CATEGORY" in
        "IA")
            PROMPT="Inteligencia artificial futurista, redes neuronales, transformación digital, moderno, profesional, fondo azul oscuro, tecnológico, alta calidad, sin texto"
            ;;
        "Impuestos")
            PROMPT="Finanzas internacionales, consultoría fiscal, negocios Alemania México, profesional, confiable, moderno, fondo azul oscuro, sin texto"
            ;;
        "Odoo")
            PROMPT="Software ERP, gestión empresarial, procesos digitales, moderno, profesional, tecnológico, fondo azul oscuro, sin texto"
            ;;
        "Marketing")
            PROMPT="Marketing digital, creación de contenido, redes sociales, moderno, creativo, profesional, fondo azul oscuro, sin texto"
            ;;
        *)
            PROMPT="Consultoría empresarial, empresa internacional, Alemania México, profesional, moderno, fondo azul oscuro, alta calidad, sin texto"
            ;;
    esac
fi

echo "Prompt: $PROMPT"

# Bild-ID aus Post-Filename generieren
POST_ID=$(basename "$POST_FILE" .md)
IMAGE_FILENAME="${POST_ID}.png"
IMAGE_PATH="public/images/blog/$IMAGE_FILENAME"

# Verzeichnis erstellen
mkdir -p "public/images/blog"

# Bild über Pollinations.ai generieren (kostenlos, kein API-Key nötig)
echo "Generiere Bild via Pollinations.ai..."

# URL-kodiere den Prompt
ENCODED_PROMPT=$(echo "$PROMPT" | sed 's/ /%20/g; s/"/%22/g; s/,/%2C/g')

# Pollinations.ai URL
POLLINATIONS_URL="https://image.pollinations.ai/prompt/${ENCODED_PROMPT}?width=1024&height=1024&nologo=true&seed=${RANDOM}"

# Bild herunterladen
curl -s -L "$POLLINATIONS_URL" -o "$IMAGE_PATH" --max-time 60

if [ -f "$IMAGE_PATH" ] && [ -s "$IMAGE_PATH" ]; then
    echo "✓ Bild generiert: $IMAGE_PATH"
else
    echo "⚠️  Bildgenerierung fehlgeschlagen, verwende Fallback..."
    
    # Fallback: Unsplash Bild basierend auf Kategorie
    case "$CATEGORY" in
        "KI"|"IA")
            IMAGE_URL="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
            ;;
        "Steuern"|"Impuestos")
            IMAGE_URL="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
            ;;
        "Odoo")
            IMAGE_URL="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
            ;;
        "Marketing")
            IMAGE_URL="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80"
            ;;
        *)
            IMAGE_URL="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
            ;;
    esac
    
    # Bild herunterladen
    curl -s -L "$IMAGE_URL" -o "$IMAGE_PATH"
    echo "✓ Fallback-Bild gespeichert: $IMAGE_PATH"
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
