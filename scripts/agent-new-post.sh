#!/bin/bash
# CMS - Agent erstellt neuen Blog Post

AGENT=$1
TITLE=$2
LANG=${3:-de}
DATE=$(date +%Y-%m-%d)
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-' | cut -c1-50)

if [ -z "$AGENT" ] || [ -z "$TITLE" ]; then
    echo "Usage: $0 <agent> 'Titel' [de|es]"
    echo ""
    echo "Agenten: juan, maria, carlos, luis, mark, jenny, hector, sofia"
    exit 1
fi

# Agent-Kategorien zuordnen
declare -A CATEGORIES
declare -A CATEGORIES_ES

CATEGORIES=(
    [juan]="KI"
    [maria]="Steuern-MX"
    [carlos]="Steuern-DE"
    [luis]="Odoo"
    [mark]="Marketing"
    [jenny]="BI"
    [hector]="Design"
    [sofia]="Service"
)

CATEGORIES_ES=(
    [juan]="IA"
    [maria]="Impuestos-MX"
    [carlos]="Impuestos-DE"
    [luis]="Odoo"
    [mark]="Marketing"
    [jenny]="Inteligencia"
    [hector]="Diseño"
    [sofia]="Servicio"
)

CATEGORY=${CATEGORIES[$AGENT]}
CATEGORY_ES=${CATEGORIES_ES[$AGENT]}

if [ -z "$CATEGORY" ]; then
    echo "Unbekannter Agent: $AGENT"
    echo "Verfügbare Agenten: ${!CATEGORIES[@]}"
    exit 1
fi

# Agent-Ordner erstellen
mkdir -p "content/agents/$AGENT"

FILE="content/agents/$AGENT/${DATE}-${SLUG}.md"

cat > "$FILE" << EOF
---
title: "$TITLE"
date: "$DATE"
author: "${AGENT^}"
agent: "$AGENT"
category: "$CATEGORY"
category_es: "$CATEGORY_ES"
tags: []
tags_es: []
image: "/images/hero-bg.jpg"
excerpt: "Kurze Beschreibung..."
excerpt_es: "Breve descripción..."
language: "$LANG"
translated: false
status: "draft"
---

# $TITLE

Content hier...

## Abschnitt 1

Text...

## Abschnitt 2

Mehr Text...

---

*Veröffentlicht am $DATE von ${AGENT^}*
EOF

echo "✓ Agent-Post erstellt: $FILE"
echo ""
echo "Agent: $AGENT"
echo "Kategorie: $CATEGORY (DE) / $CATEGORY_ES (ES)"
echo ""
echo "Nächste Schritte:"
echo "1. Datei bearbeiten: $FILE"
echo "2. Content schreiben (DE)"
echo "3. Übersetzung erstellen: ./scripts/translate-post.sh $FILE"
echo "4. Status auf 'published' setzen"
echo "5. Veröffentlichen: ./scripts/publish-agent-posts.sh"
