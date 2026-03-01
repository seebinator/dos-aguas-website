#!/bin/bash
# Blog-Posts aus Markdown in Next.js Pages generieren

echo "=== Dos Aguas Blog Generator ==="
echo ""

# Funktion zum Generieren einer Blog-Post-Seite
generate_post() {
    local file=$1
    local lang=$2
    local slug=$3
    
    # Frontmatter extrahieren
    title=$(grep "^title:" "$file" | sed 's/title: "//;s/"$//')
    date=$(grep "^date:" "$file" | sed 's/date: "//;s/"$//')
    author=$(grep "^author:" "$file" | sed 's/author: "//;s/"$//')
    category=$(grep "^category:" "$file" | sed 's/category: "//;s/"$//')
    image=$(grep "^image:" "$file" | sed 's/image: "//;s/"$//')
    
    # Content extrahieren (nach dem Frontmatter)
    content=$(sed '1,/^---$/d' "$file" | tail -n +2)
    
    # Markdown zu HTML konvertieren (einfache Version)
    html_content=$(echo "$content" | sed 's/^# /\u003ch1\u003e/;s/$/\u003c\/h1\u003e/' | sed 's/^## /\u003ch2\u003e/;s/$/\u003c\/h2\u003e/' | sed 's/^### /\u003ch3\u003e/;s/$/\u003c\/h3\u003e/' | sed 's/^- /\u003cli\u003e/;s/$/\u003c\/li\u003e/' | sed 's/\*\*\([^*]*\)\*\*/\u003cstrong\u003e\1\u003c\/strong\u003e/g')
    
    echo "Generiere: $lang/blog/$slug"
}

# Alle Markdown-Dateien durchlaufen
for file in content/blog/de/*.md; do
    [ -f "$file" ] || continue
    slug=$(basename "$file" .md)
    generate_post "$file" "de" "$slug"
done

for file in content/blog/es/*.md; do
    [ -f "$file" ] || continue
    slug=$(basename "$file" .md)
    generate_post "$file" "es" "$slug"
done

echo ""
echo "✓ Blog-Posts generiert"
