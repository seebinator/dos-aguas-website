#!/bin/bash
# CMS - Agent-Posts veröffentlichen (mit Bildgenerierung)

echo "=== Dos Aguas CMS - Veröffentlichung ==="
echo ""

# Funktion: Post veröffentlichen
publish_post() {
    local file=$1
    local lang=$2
    
    # Frontmatter prüfen
    status=$(grep "^status:" "$file" | cut -d'"' -f2)
    
    if [ "$status" != "published" ]; then
        echo "  ⏭️  Übersprungen (Status: $status): $(basename $file)"
        return
    fi
    
    # Prüfe ob Bild bereits existiert
    has_image=$(grep "^image:" "$file" | grep -v "hero-bg" || true)
    
    # Wenn kein Bild vorhanden, generiere eines
    if [ -z "$has_image" ]; then
        echo "  🎨 Generiere Bild..."
        ./scripts/generate-blog-image.sh "$file" >/dev/null 2>&1 || echo "  ⚠️  Bildgenerierung fehlgeschlagen, verwende Fallback"
    fi
    
    # Zielpfad bestimmen
    filename=$(basename "$file")
    target="content/blog/$lang/$filename"
    
    # Kopieren
    cp "$file" "$target"
    echo "  ✅ Veröffentlicht: $target"
}

# Alle Agent-Posts durchgehen
echo "Agent-Posts prüfen..."
for agent_dir in content/agents/*/; do
    agent=$(basename "$agent_dir")
    echo ""
    echo "Agent: $agent"
    
    for file in "$agent_dir"*.md; do
        [ -e "$file" ] || continue
        
        # Sprache ermitteln
        lang=$(grep "^language:" "$file" | cut -d'"' -f2)
        
        publish_post "$file" "$lang"
    done
done

echo ""
echo "=== Veröffentlichung abgeschlossen ==="
echo ""
echo "Nächster Schritt:"
echo "git add . && git commit -m 'Neue Blog-Posts mit Bildern' && git push"
