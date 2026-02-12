# CUMBÉ - Sitio Web Oficial

Sitio web multilingüe para CUMBÉ, grupo de música tradicional colombiana en Berlín.

## Tecnologías

- **Astro** - Framework web moderno
- **TypeScript** - Tipado estático
- **i18n** - Soporte multilingüe (ES, EN, DE)

## Colores

- Verde: `#C3F88C` - Marca CUMBÉ
- Azul: `#002D42` - Fondo principal
- Naranja: `#D96518` - Color complementario
- Blanco: `#FFFFFF` - Texto

## Tipografías

- **Montserrat Alternates** - Títulos y marca CUMBÉ
- **Inter** - Texto y párrafos

## Estructura

```
src/
├── components/      # Componentes reutilizables
│   ├── Hero.astro
│   ├── About.astro
│   ├── Members.astro
│   ├── Events.astro
│   ├── Contact.astro
│   ├── Footer.astro
│   └── LanguageSwitcher.astro
├── i18n/            # Traducciones
│   ├── es.json      # Español
│   ├── en.json      # English
│   ├── de.json      # Deutsch
│   └── utils.ts     # Utilidades i18n
├── layouts/         # Layouts base
│   └── BaseLayout.astro
└── pages/           # Páginas
    ├── index.astro  # Español (por defecto)
    ├── en/
    │   └── index.astro
    └── de/
        └── index.astro
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## URLs

- English (default): `http://localhost:4321/`
- Español: `http://localhost:4321/es/`
- Deutsch: `http://localhost:4321/de/`

## Agregar fotos

Para agregar fotos del grupo, coloca las imágenes en `public/images/` y actualiza el componente `About.astro` reemplazando `.image-placeholder` con:

```astro
<img src="/images/band-photo.jpg" alt="CUMBÉ" />
```

## Contacto

- Email: ftrianakast@gmail.com
- Instagram: [@cumbe_music](https://instagram.com/cumbe_music)
