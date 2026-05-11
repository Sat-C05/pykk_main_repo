# Client Setup Guide

## How to customise this template for a new client

### Step 1 — Update company information
Open `data/siteContent.ts` and update the `company` object:
- name, tagline, phone, email, address, whatsapp
- foundedYear, location, mapEmbedUrl

### Step 2 — Update content
In the same file, update:
- stats — years, projects, custom work numbers
- products — names, descriptions, images
- team — member names, roles, bios
- testimonials — quotes, client names
- certifications — names, issuing bodies
- blogPosts — titles, content, dates
- upcomingEvents / pastEvents
- faqs — questions and answers
- values — titles and descriptions

### Step 3 — Update images
Replace all image URLs in siteContent.ts with:
- Client's actual photos if available
- Relevant Unsplash URLs if not

### Step 4 — Update metadata
In app/layout.tsx, update metadataBase URL to
the client's actual domain.

### Step 5 — Activate Google Analytics
In siteContent.ts, set:
analytics: {
  googleAnalyticsId: 'G-XXXXXXXXXX'
}

### Step 6 — Deploy
Run: vercel --prod
Connect client domain in Vercel dashboard.

## File structure reference
- All client data: data/siteContent.ts
- All types: types/index.ts
- Global styles: styles/globals.css
- Components: components/

## Never edit these files for client customisation
- Any file in components/
- Any file in app/ except page-level metadata
- styles/globals.css CSS variables (use siteContent instead)
