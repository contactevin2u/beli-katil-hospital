# Beli Katil Hospital — Website

Website Next.js 14 untuk **Beli Katil Hospital Malaysia** — pakar sewa & beli katil hospital untuk penjagaan pesakit di rumah.

## Tech stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** untuk styling
- **Vercel** untuk hosting (auto-deploy on push)

## Local development

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Deploy ke Vercel

1. Push ke GitHub (sudah linked ke `github.com/contactevin2u/beli-katil-hospital`).
2. Pergi ke https://vercel.com → New Project → Import `beli-katil-hospital`.
3. Vercel auto-detect Next.js — klik **Deploy**.
4. Setiap kali push ke `main`, Vercel auto-rebuild & deploy.

## Update gambar

Semua section guna `<ImagePlaceholder>` buat masa ni.

1. Letak gambar dalam `public/images/` ikut nama yang dicadangkan dalam `public/images/.gitkeep`.
2. Buka komponen yang berkaitan (cth. `components/Hero.tsx`, `components/Products.tsx`).
3. Tukar:
   ```tsx
   <ImagePlaceholder label="..." note="..." className="..." />
   ```
   kepada:
   ```tsx
   import Image from 'next/image';
   <Image src="/images/hero-katil.jpg" alt="Katil hospital Malaysia" width={1200} height={900} className="..." />
   ```

## Update info / harga / kandungan

- **Maklumat syarikat, telefon, email, MDA**: edit `lib/site.ts`
- **Produk & harga**: edit `components/Products.tsx` (array `products`)
- **FAQ**: edit `components/FAQ.tsx` (array `faqs`)
- **Testimoni**: edit `components/Testimonials.tsx` (array `reviews`)
- **Liputan kawasan**: edit `components/Coverage.tsx` (array `coverage`)
- **SEO metadata**: edit `app/layout.tsx` (`metadata` export)

## SEO

- Metadata + OpenGraph dalam `app/layout.tsx`
- JSON-LD `MedicalBusiness` (organisasi) dalam `app/layout.tsx`
- JSON-LD `FAQPage` dalam `components/FAQ.tsx`
- `sitemap.xml` auto dari `app/sitemap.ts`
- `robots.txt` auto dari `app/robots.ts`
- Bahasa: `lang="ms"` + `og:locale="ms_MY"`

## Struktur folder

```
app/
├── layout.tsx        # Root layout + SEO metadata + JSON-LD
├── page.tsx          # Landing page (susun semua section)
├── globals.css       # Tailwind + custom classes
├── sitemap.ts        # Auto sitemap
└── robots.ts         # Auto robots.txt
components/
├── Navbar.tsx
├── Hero.tsx
├── TrustBar.tsx
├── Products.tsx
├── Benefits.tsx
├── WhoNeeds.tsx
├── WhyUs.tsx
├── MDA.tsx
├── Testimonials.tsx
├── Coverage.tsx
├── FAQ.tsx
├── ContactCTA.tsx
├── Footer.tsx
├── WhatsAppFloat.tsx
└── ImagePlaceholder.tsx
lib/
└── site.ts           # Maklumat syarikat (sumber tunggal)
public/
└── images/           # Letak gambar produk di sini
```
