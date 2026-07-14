# Meow Manor Hosting Guide

This website is a static frontend. After building, you only need to upload the generated files. No Node.js server, database, or backend is required on GoDaddy shared hosting.

---

## Local Development

```bash
npm install
npm run dev
```

Use this while editing content, styles, or components.

---

## Production Build

```bash
npm run build
```

Vite creates a `dist` folder containing:

- `index.html`
- `assets/` (bundled JS/CSS/images)
- favicon and social preview images

Optional local preview:

```bash
npm run preview
```

---

## GoDaddy Hosting Deployment

1. Run `npm run build` on your computer.
2. Open the generated `dist` folder.
3. Upload **all files and folders inside** `dist` into GoDaddy’s `public_html` folder using File Manager or FTP.
4. Do **not** upload the outer `dist` folder itself unless your host specifically asks you to. The contents of `dist` should become the contents of `public_html`.
5. Confirm that `index.html` is directly inside `public_html`.
6. Connect your GoDaddy domain to the hosting account (domain DNS / hosting setup).
7. Enable SSL (HTTPS) in your GoDaddy hosting panel.
8. Test both:
   - `https://yourdomain.com`
   - `https://www.yourdomain.com`

### Important hosting notes

- Vite is configured with `base: './'` so asset paths work well on shared hosting.
- If a page refresh on a future multi-page setup causes issues, this current site is a single-page app served from `index.html`, so root hosting is enough.
- Clear browser cache after uploading if you still see an older version.

---

## Other Static Hosts

The same `dist` folder works on:

- cPanel file manager uploads
- Netlify drag-and-drop or Git deploy
- Vercel static deploy
- Any host that serves static HTML/CSS/JS

---

## How to Update Business Details

Edit:

```text
src/config/businessConfig.js
```

Then rebuild and re-upload `dist`.

| Setting | What to change |
| --- | --- |
| WhatsApp number | `whatsappNumber` — use digits only with country code, e.g. `919876543210` |
| Phone number | `phoneNumber` |
| Email | `email` |
| Instagram URL | `instagramUrl` |
| Location text | `locationText` |
| Business hours | `businessHours` |

---

## How to Update Prices and Website Text

Edit:

```text
src/data/siteData.js
```

Update stay plans, meal plans, offer text, benefits, story content, notices, and navigation labels there.

Then run:

```bash
npm run build
```

and upload the new `dist` contents.

---

## How to Update Images

### Logo

Replace:

```text
src/assets/meow-manor-logo.png
```

Also replace public copies for browser tab / social sharing:

```text
public/favicon.png
public/og-image.png
```

### Loki and Veera

Add photos as:

```text
src/assets/loki.jpg
src/assets/veera.jpg
```

If missing, placeholders are shown automatically.

After changing images:

```bash
npm run build
```

Upload the refreshed `dist` files.

---

## How to Update Domain Metadata

Edit `index.html` and replace placeholders:

- Canonical URL
- Open Graph URL
- Any remaining `yourdomain.com` references

Recommended live values:

```html
<link rel="canonical" href="https://www.yourdomain.com/" />
<meta property="og:url" content="https://www.yourdomain.com/" />
```

Rebuild after changing metadata.

---

## Post-Deploy Checklist

- [ ] Homepage loads over HTTPS
- [ ] Logo and favicon appear correctly
- [ ] Navigation smooth-scrolls to each section
- [ ] Mobile menu opens/closes correctly
- [ ] Stay plan / meal plan / special care buttons update the booking form
- [ ] WhatsApp booking button opens with the correct number and message
- [ ] Phone, email, and Instagram links work
- [ ] No exact residential address is shown publicly
