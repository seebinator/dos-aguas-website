---
title: "Configuración de Decap CMS"
date: "2026-03-01"
author: "Juan"
agent: "juan"
type: "Anleitungen"
---

# Configuración de Decap CMS

## Descripción general

Decap CMS (anteriormente Netlify CMS) es un CMS headless para sitios web estáticos. Permite editar posts de blog a través de una interfaz web.

## Requisitos previos

- Repositorio GitHub: `seebinator/dos-aguas-website`
- Sitio web desplegado (Vercel, Netlify o servidor propio)

## Opción 1: Netlify Identity (La más simple)

### Paso 1: Desplegar en Netlify

1. Ve a [netlify.com](https://netlify.com)
2. Haz clic en "Add new site" → "Import an existing project"
3. Selecciona GitHub y el repositorio `seebinator/dos-aguas-website`
4. Configuración de build:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Haz clic en "Deploy site"

### Paso 2: Activar Netlify Identity

1. En el Dashboard de Netlify → "Identity"
2. Haz clic en "Enable Identity"
3. Ve a "Settings" → "Registration"
4. Establece "Registration preferences" en "Invite only" (recomendado)
5. Ve a "Services" → "Git Gateway"
6. Haz clic en "Enable Git Gateway"
7. Autoriza con GitHub

### Paso 3: Configurar acceso de administrador

1. Ve a "Identity" → "Users"
2. Haz clic en "Invite users"
3. Ingresa tu dirección de correo electrónico
4. Rol: "Admin"
5. Haz clic en "Send"
6. Acepta la invitación por correo electrónico

### Paso 4: Usar el CMS

1. Abre `https://tu-sitio.netlify.app/admin/`
2. Haz clic en "Login with Netlify Identity"
3. Ingresa tu correo electrónico y contraseña
4. ¡Ya puedes crear y editar posts de blog!

---

## Opción 2: Vercel + Git Gateway

### Paso 1: Crear proyecto en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Add New..." → "Project"
3. Importa `seebinator/dos-aguas-website`
4. Framework Preset: "Next.js"
5. Haz clic en "Deploy"

### Paso 2: Configurar Git Gateway

Como Vercel no tiene Identity integrado:

1. Crea una cuenta en [netlify.com](https://netlify.com)
2. Ve a "Sites" → "Add new site" → "Deploy manually"
3. Esto sirve solo para Git Gateway, el sitio web corre en Vercel
4. Activa Identity y Git Gateway como se describe en la Opción 1

---

## Opción 3: GitHub OAuth

### Paso 1: Crear aplicación OAuth en GitHub

1. Ve a GitHub → Settings → Developer settings → OAuth Apps
2. Haz clic en "New OAuth App"
3. Application name: "Dos Aguas CMS"
4. Homepage URL: `https://dos-aguas.consulting`
5. Authorization callback URL: `https://dos-aguas.consulting/admin/`
6. Haz clic en "Register application"
7. Anota el Client ID y Client Secret

### Paso 2: Ajustar configuración

Modifica `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: seebinator/dos-aguas-website
  branch: main
```

---

## Solución recomendada

**La Opción 1 (Netlify)** es la más simple:

1. Despliega en Netlify (gratis)
2. Activa Identity
3. ¡Listo!

---

## Uso del CMS

### Crear post de blog:

1. Abre `/admin/`
2. Selecciona "Blog (Deutsch)" o "Blog (Español)"
3. Haz clic en "New Blog (Deutsch)"
4. Completa todos los campos:
   - Título
   - Fecha
   - Autor
   - Agente (para filtros)
   - Categoría (para filtros)
   - Imagen (subir o URL)
   - Resumen
   - Contenido (Markdown)
5. Haz clic en "Save" → Crea un commit de Git
6. Haz clic en "Publish" → Empuja a GitHub

### Subir imágenes:

- Haz clic en "Choose different image" en el campo de imagen
- Selecciona una imagen o arrastra y suelta
- La imagen se guarda automáticamente en `public/images/blog/`

---

## Solución de problemas

### "Failed to load entries"

- Revisa la configuración de Git Gateway
- Asegúrate de que el repositorio sea público o que el acceso esté permitido

### "Login not working"

- Revisa la configuración de Identity en Netlify
- Asegúrate de que el correo electrónico esté confirmado

### "Changes not saving"

- Revisa los permisos de Git Gateway
- Asegúrate de que el token de GitHub sea válido

---

## Soporte

- Decap CMS Docs: https://decapcms.org/docs/
- Netlify Identity: https://docs.netlify.com/visitor-access/identity/
- Git Gateway: https://github.com/netlify/git-gateway
