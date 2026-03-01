#!/bin/bash
# Neuer Blog-Post erstellen

LANG=$1
TITLE=$2

if [ -z "$LANG" ] || [ -z "$TITLE" ]; then
  echo "Usage: $0 [de|es] 'Titel des Posts'"
  exit 1
fi

DATE=$(date +%Y-%m-%d)
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-')
FILENAME="content/blog/$LANG/${DATE}-${SLUG}.md"

if [ "$LANG" = "de" ]; then
  AUTHOR="Dos Aguas Team"
  EXCERPT="Kurze Beschreibung des Posts"
else
  AUTHOR="Equipo Dos Aguas"
  EXCERPT="Breve descripción del post"
fi

cat > "$FILENAME" << EOF
---
title: "$TITLE"
date: "$DATE"
author: "$AUTHOR"
category: "News"
image: "/images/hero-bg.jpg"
excerpt: "$EXCERPT"
slug: "$SLUG"
---

# $TITLE

Hier kommt der Content des Blog-Posts...

## Überschrift 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## Überschrift 3

- Punkt 1
- Punkt 2
- Punkt 3

**Fettgedruckter Text** und *kursiver Text*.

[Link Text](https://example.com)
EOF

echo "✓ Blog-Post erstellt: $FILENAME"
echo ""
echo "Nächste Schritte:"
echo "1. Datei bearbeiten: $FILENAME"
echo "2. Bilder nach /public/images/blog/ kopieren"
echo "3. Git commit & push"
