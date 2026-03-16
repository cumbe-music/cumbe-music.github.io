# Cumbé Music Website - Development Guide

This document contains instructions for maintaining and updating the Cumbé Music website.

## Project Overview

- **Framework**: Astro
- **Languages**: Multilingual (English, Spanish, German)
- **Deployment**: GitHub Pages
- **Repository**: cumbe-music.github.io

## Managing Upcoming Events (Next Gigs Section)

The "Next Gigs" section has two modes:

### 1. **Active Events Mode** (showing upcoming events)
### 2. **Coming Soon Mode** (placeholder when no events scheduled)

### How to Toggle Between Modes

**File**: `src/components/NextGigs.astro`

Change this line at the top of the component:

```javascript
// Toggle this to switch between showing upcoming events or "coming soon"
const hasUpcomingEvents = true;  // Set to false for "Coming Soon" mode
```

- **`hasUpcomingEvents = true`**: Displays actual upcoming events
- **`hasUpcomingEvents = false`**: Shows the "Coming Soon" placeholder

### Adding a New Event

When you have a new event to add:

1. **Add the event image** to `/public/images/events/`
   - Use descriptive filename (e.g., `un-llamado-al-corazon.png`)
   - Recommended format: PNG or JPG
   - Optimal size: 1200x800px or similar aspect ratio

2. **Update translation files** (`src/i18n/en.json`, `src/i18n/es.json`, `src/i18n/de.json`)

   Add event details in the `nextGigs` section:
   ```json
   "nextGigs": {
     "title": "Next Gigs",
     "event1": {
       "name": "Event Name",
       "description": "Event description with details",
       "date": "Day, Month Date, Year • Time",
       "location": "Location • Venue Name"
     }
   }
   ```

3. **Update the event card** in `src/components/NextGigs.astro`

   Replace the existing event card HTML (around line 18-27):
   ```astro
   <a href="YOUR_EVENT_URL" target="_blank" rel="noopener noreferrer" class="event-card event-link">
     <div class="event-image-container">
       <img src="/images/events/your-image.png" alt="Event Name" class="event-image" />
     </div>
     <div class="event-content">
       <h3 class="event-name">{t('nextGigs.event1.name')}</h3>
       <p class="event-date">{t('nextGigs.event1.date')}</p>
       <p class="event-description">{t('nextGigs.event1.description')}</p>
       <p class="event-location">{t('nextGigs.event1.location')}</p>
     </div>
   </a>
   ```

4. **Set mode to active**: Ensure `const hasUpcomingEvents = true;` in `NextGigs.astro`

### After an Event Has Passed

1. **Archive the event** (optional): Move past event details to the "Past Events" section if desired
2. **Switch to Coming Soon mode**: Set `const hasUpcomingEvents = false;` in `NextGigs.astro`
3. Or **add the next event** following the steps above

### Example: Current Event (March 22, 2026)

**Event**: Un Llamado al Corazón - International Day of Water
- **Date**: Sunday, March 22, 2026 • 10:30 - 13:30
- **Location**: Berlin Plänterwald • Spreepark Art Space
- **Image**: `un-llamado-al-corazon.png`
- **URL**: https://www.instagram.com/p/DFf1CvwI_Ip/

After March 22, 2026:
- Set `hasUpcomingEvents = false` to show "Coming Soon"
- OR add the next scheduled event

## Translation Files Structure

All text content is managed through JSON files in `src/i18n/`:

- `en.json` - English translations
- `es.json` - Spanish translations
- `de.json` - German translations

Always update all three files when adding new content to maintain consistency across languages.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

## Contact

For questions or issues, contact the band through the website's contact section.
