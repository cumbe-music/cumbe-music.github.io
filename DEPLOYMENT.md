# CUMBÉ Website - Deployment Guide

Este sitio se publica automáticamente en GitHub Pages usando GitHub Actions.

## URL Final
https://cumbe-music.github.io

## Pasos para el Deployment Inicial

### 1. Crear la Organización en GitHub

1. Ve a https://github.com/account/organizations/new
2. Nombre de la organización: `cumbe-music`
3. Email de contacto: (tu email)
4. Tipo: "My personal account" (gratis)
5. Click en "Next" y completa el proceso

### 2. Crear el Repositorio

1. Una vez creada la organización, ve a: https://github.com/organizations/cumbe-music/repositories/new
2. Nombre del repositorio: `cumbe-music.github.io`
3. Descripción: "CUMBÉ - Traditional Colombian Music in Berlin"
4. Público (Public)
5. **NO** inicializar con README, .gitignore o license
6. Click en "Create repository"

### 3. Configurar GitHub Pages

1. En el repositorio, ve a **Settings** → **Pages**
2. En "Build and deployment":
   - Source: **GitHub Actions**
3. Guarda los cambios

### 4. Subir el código

Desde el directorio del proyecto (`cumbe-website`), ejecuta:

```bash
# Inicializar git si no está inicializado
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: CUMBÉ website

- Multi-language support (EN, ES, DE)
- Responsive design
- Band members section
- Past events with images
- Next gigs coming soon
- Contact information

Co-Authored-By: Claude (claude-sonnet-4-5) <noreply@anthropic.com>"

# Cambiar a branch main
git branch -M main

# Agregar el remote (reemplaza con tu URL)
git remote add origin git@github.com:cumbe-music/cumbe-music.github.io.git

# Push al repositorio
git push -u origin main
```

### 5. Verificar el Deployment

1. Ve a la pestaña **Actions** en GitHub
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera a que termine (tarda ~2-3 minutos)
4. Una vez completado, visita: **https://cumbe-music.github.io**

## Actualizaciones Futuras

Cada vez que hagas cambios:

```bash
# 1. Hacer cambios en el código

# 2. Agregar los cambios
git add .

# 3. Commit
git commit -m "Descripción de los cambios"

# 4. Push
git push

# 5. GitHub Actions automáticamente desplegará el sitio
```

## Solución de Problemas

### El sitio no se actualiza
1. Ve a **Actions** en GitHub
2. Revisa si el workflow falló
3. Click en el workflow para ver los logs de error

### Error 404
1. Verifica que el repo se llame exactamente `cumbe-music.github.io`
2. Verifica que GitHub Pages esté configurado con "GitHub Actions" como source

### Imágenes no cargan
- Las imágenes deben estar en `public/images/`
- Asegúrate de que los archivos estén commiteados en git

## Dominio Personalizado (Opcional)

Si más adelante quieres usar un dominio como `cumbe.band`:

1. Compra el dominio
2. En GitHub Pages Settings, agrega el dominio custom
3. Configura los DNS records según las instrucciones de GitHub
4. Actualiza `astro.config.mjs`:
   ```js
   site: 'https://cumbe.band'
   ```

## Comandos Útiles

```bash
# Ver el sitio localmente antes de publicar
npm run dev

# Build para producción (probar que funciona)
npm run build

# Preview del build de producción
npm run preview

# Ver status de git
git status

# Ver historial de commits
git log --oneline

# Ver branches
git branch
```

## Agregar Colaboradores

Para que otros miembros de la banda puedan actualizar el sitio:

1. Ve a la organización: https://github.com/cumbe-music
2. Settings → Member privileges
3. Invita a los miembros de la banda
4. Dales permisos de "Write" en el repositorio

## Estructura del Proyecto

```
cumbe-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── images/
│   │   ├── band/              # Fotos de la banda
│   │   └── events/            # Fotos de eventos
│   └── favicon.svg            # Favicon con la "C"
├── src/
│   ├── components/            # Componentes reutilizables
│   ├── i18n/                  # Traducciones (ES, EN, DE)
│   ├── layouts/               # Layouts base
│   └── pages/                 # Páginas del sitio
├── astro.config.mjs           # Configuración de Astro
└── package.json               # Dependencias

```

## Soporte

Si tienes problemas:
- Revisa los logs en GitHub Actions
- Lee la documentación de Astro: https://docs.astro.build
- Documentación de GitHub Pages: https://pages.github.com
