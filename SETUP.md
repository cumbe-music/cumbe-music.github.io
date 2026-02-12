# CUMBÉ Website - Setup Guide

## Current Status ✓
Your website is **LIVE** and running at: http://localhost:4321

## Available Pages
- 🇪🇸 Spanish (default): http://localhost:4321/
- 🇬🇧 English: http://localhost:4321/en/
- 🇩🇪 Deutsch: http://localhost:4321/de/

## Project Structure
```
cumbe-website/
├── public/
│   └── images/          # Place band photos here
├── src/
│   ├── components/      # Website sections
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Members.astro
│   │   ├── Events.astro
│   │   ├── Contact.astro
│   │   └── LanguageSwitcher.astro
│   ├── i18n/           # Translations
│   │   ├── es.json     # Spanish
│   │   ├── en.json     # English
│   │   ├── de.json     # German
│   │   └── utils.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro      # Spanish homepage
│       ├── en/index.astro   # English homepage
│       └── de/index.astro   # German homepage
└── astro.config.mjs
```

## How to Add Band Photos

### 1. Add images to the project
Place your band photos in `public/images/`:
```bash
public/images/band-photo.jpg
public/images/performance.jpg
```

### 2. Update the About section
Edit `src/components/About.astro` and replace:
```astro
<div class="image-placeholder">
  <span>{t('about.addPhoto')}</span>
</div>
```

With:
```astro
<img
  src="/images/band-photo.jpg"
  alt="CUMBÉ band"
  style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;"
/>
```

### 3. Optional: Add more images
You can add images to other sections by following the same pattern.

## Editing Content

### Change text/translations
Edit the JSON files in `src/i18n/`:
- `es.json` - Spanish text
- `en.json` - English text
- `de.json` - German text

Example:
```json
{
  "about": {
    "p1": "Your new Spanish text here",
    "p2": "Another paragraph"
  }
}
```

### Add a new member
Edit `src/components/Members.astro`:
1. Add member data to the `members` array
2. Add translations to each `src/i18n/*.json` file

### Add a new event
Edit `src/components/Events.astro` and add translations to JSON files.

## Commands

```bash
# Start development server (already running)
npm run dev

# Stop the server
# Press Ctrl+C in the terminal

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

When ready to deploy:
1. Run `npm run build` - creates `dist/` folder
2. Upload `dist/` folder to any web hosting service:
   - Netlify (drag & drop)
   - Vercel
   - GitHub Pages
   - Any static hosting

## Customization

### Colors
Edit CSS variables in `src/layouts/BaseLayout.astro`:
```css
:root {
  --verde: #C3F88C;
  --azul: #002D42;
  --naranja: #D96518;
  --blanco: #ffffff;
}
```

### Fonts
Already using:
- **Montserrat Alternates** - CUMBÉ logo and titles
- **Inter** - Body text

To change fonts, edit `BaseLayout.astro` Google Fonts link.

## Need Help?

- Astro Documentation: https://docs.astro.build
- Project files are well-commented
- Each component is self-contained and easy to modify

## Quick Tips

- Hot reload is enabled - changes appear automatically
- All files are TypeScript (.astro, .ts) for better error checking
- Language switcher appears in top-right corner
- Mobile-responsive by default

---

**Your website is ready!** Visit http://localhost:4321 to see it in action.
