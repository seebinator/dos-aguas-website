#!/bin/bash
# CMS - Neuer Blog Post erstellen

LANG=$1
TITLE=$2
DATE=$(date +%Y-%m-%d)
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-')

if [ -z "$LANG" ] || [ -z "$TITLE" ]; then
    echo "Usage: $0 <de|es> 'Titel des Posts'"
    exit 1
fi

FILE="content/blog/$LANG/${DATE}-${SLUG}.md"

mkdir -p "content/blog/$LANG"

cat > "$FILE" << EOF
---
title: "$TITLE"
date: "$DATE"
author: "Dos Aguas Team"
category: "News"
image: "/images/hero-bg.jpg"
excerpt: "Kurze Beschreibung des Posts..."
---

# $TITLE

Hier kommt der Content des Blog-Posts...

## Überschrift 2

Text...

## Überschrift 3

Mehr Text...

---

*Veröffentlicht am $DATE*
EOF

echo "✓ Blog-Post erstellt: $FILE"
echo ""
echo "Nächste Schritte:"
echo "1. Datei bearbeiten: $FILE"
echo "2. Frontmatter anpassen (author, category, excerpt)"
echo "3. Content schreiben"
echo "4. Git commit & push"
