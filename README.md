# Meow Manor

A complete, modern, responsive static website for **Meow Manor** — a warm, home-based cat boarding business.

Built with React and Vite so it is easy to develop locally and deploy as plain static files to GoDaddy, cPanel, Netlify, Vercel, or any static host. No backend or database is required.

---

## Project Overview

Meow Manor helps pet parents enquire about:

- Standard, private, daycare, and hourly stay plans
- Optional meal plans
- Special breed care add-on
- WhatsApp-based booking enquiries

The booking form validates required details, then opens WhatsApp with a pre-filled enquiry message.

---

## Technology Used

- React (JavaScript)
- Vite
- Standard CSS
- React Icons (navigation and contact icons only)

Not used: TypeScript, Tailwind, Bootstrap, Material UI, Next.js, backend services, or databases.

---

## Installation

```bash
npm install
```

---

## Development

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

---

## Production Build

```bash
npm run build
```

This creates a deployable `dist` folder.

Preview the production build locally:

```bash
npm run preview
```

---

## Folder Structure

```text
src/
  assets/
    meow-manor-logo.png
    loki.jpg          (optional — add later)
    veera.jpg         (optional — add later)
  components/
    Header.jsx
    Hero.jsx
    BookingOffer.jsx
    StayPlans.jsx
    Benefits.jsx
    OurStory.jsx
    MealPlans.jsx
    MealPricingInfo.jsx
    SpecialBreedCare.jsx
    ImportantNotice.jsx
    BookingForm.jsx
    ContactSection.jsx
    Footer.jsx
    SectionHeading.jsx
    PricingCard.jsx
  config/
    businessConfig.js
  data/
    siteData.js
  styles/
    global.css
    responsive.css
  App.jsx
  main.jsx
public/
  favicon.png
  og-image.png
HOSTING_GUIDE.md
README.md
```

---

## Business Configuration

Edit contact details in:

```text
src/config/businessConfig.js
```

Update these values before going live:

- `whatsappNumber` — digits only with country code, e.g. `919876543210`
- `phoneNumber`
- `email`
- `instagramUrl`
- `locationText`
- `businessHours`

---

## Content Configuration

Prices, plan names, benefits, story text, notices, and navigation labels live in:

```text
src/data/siteData.js
```

Update content there so you do not need to edit multiple components.

---

## Asset Replacement Instructions

### Logo

Replace:

```text
src/assets/meow-manor-logo.png
```

Also update the public copies used for browser/social previews:

```text
public/favicon.png
public/og-image.png
```

### Loki and Veera photos

Add optional photos as:

```text
src/assets/loki.jpg
src/assets/veera.jpg
```

If these files are missing, the site shows styled placeholders automatically.

---

## Colour Palette

Only these colours are used:

- Main: `#D99B77`
- Text and borders: `#3B1E13`
- Background: `#FFF9F2`
- Black: `#000000`

CSS variables are defined in `src/styles/global.css`.

---

## SEO Metadata

Page title, description, theme colour, Open Graph tags, Twitter card tags, canonical URL placeholder, and favicon are set in `index.html`.

Replace `https://www.yourdomain.com/` with your real domain before launch.

---

## GoDaddy Deployment Summary

1. Run `npm run build`
2. Open the `dist` folder
3. Upload **everything inside** `dist` into GoDaddy `public_html`
4. Make sure `index.html` sits directly inside `public_html`
5. Point your domain to the hosting account and enable SSL
6. Test `https://yourdomain.com` and `https://www.yourdomain.com`

Full step-by-step instructions are in [`HOSTING_GUIDE.md`](./HOSTING_GUIDE.md).

---

## Licence / Notes

This project is a static marketing and enquiry website for Meow Manor. Booking confirmation happens through WhatsApp conversation with the business owner, not through an automated online checkout.
