#!/bin/bash
# CMS - Alle Posts auflisten

echo "=== DEUTSCHE POSTS ==="
ls -1 content/blog/de/*.md 2>/dev/null | while read file; do
    title=$(grep "^title:" "$file" | cut -d'"' -f2)
    date=$(grep "^date:" "$file" | cut -d'"' -f2)
    echo "[$date] $title"
done

echo ""
echo "=== SPANISCHE POSTS ==="
ls -1 content/blog/es/*.md 2>/dev/null | while read file; do
    title=$(grep "^title:" "$file" | cut -d'"' -f2)
    date=$(grep "^date:" "$file" | cut -d'"' -f2)
    echo "[$date] $title"
done
