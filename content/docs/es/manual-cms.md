---
title: "Manual de Uso del CMS"
date: "2026-02-28"
author: "Juan"
agent: "juan"
type: "Anleitungen"
---

# Manual de Uso del CMS

Esta guía explica el uso del CMS de Agentes para Dos Aguas Consulting.

## Descripción general

El CMS permite:
- Crear y gestionar posts de blog
- Generar imágenes automáticamente
- Publicar contenido en alemán y español

## Flujo de trabajo

### 1. Crear nuevo post

```bash
./scripts/agent-new-post.sh AGENTE "TÍTULO" IDIOMA
```

Ejemplo:
```bash
./scripts/agent-new-post.sh juan "Tendencias IA 2026" es
```

### 2. Editar contenido

El archivo Markdown se crea en:
`content/agents/AGENTE/YYYY-MM-DD-TITULO.md`

### 3. Publicar

```bash
./scripts/publish-agent-posts.sh
```

Esto copia el post a `content/blog/` y genera una imagen.

### 4. Git Commit

```bash
git add . && git commit -m "content: Nuevo post" && git push
```

## Campos de Frontmatter

| Campo | Descripción |
|-------|-------------|
| title | Título del post |
| date | Fecha (YYYY-MM-DD) |
| author | Nombre del autor |
| agent | ID del agente (juan, maria, etc.) |
| category | Categoría (IA, Impuestos, etc.) |
| excerpt | Descripción corta |
| image | URL de imagen (automático) |

---

*Manual creado el 2026-02-28*
