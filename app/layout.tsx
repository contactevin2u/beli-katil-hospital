import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'Hospital Bed Malaysia (Katil Hospital) — Buy or Rent for Home Care',
    template: '%s | Beli Katil Hospital Malaysia'
  },
  description:
    'Looking for a hospital bed in Malaysia for home care? Buy from RM799 or rent from RM150/month. Free delivery & setup, no deposit, MDA-registered. Trusted since 2016.',
  keywords: [
    'beli katil hospital',
    'beli katil hospital Malaysia',
    'sewa katil hospital',
    'sewa katil hospital Malaysia',
    'katil hospital Malaysia',
    'katil hospital harga',
    'katil hospital murah',
    'harga katil hospital',
    'katil hospital 2 fungsi',
    'katil hospital 3 fungsi',
    'katil hospital elektrik',
    'katil hospital manual',
    'katil pesakit',
    'katil pesakit terlantar',
    'katil pesakit di rumah',
    'katil warga emas',
    'katil orang sakit',
    'sewa katil pesakit',
    'penjagaan pesakit di rumah',
    'home nursing equipment Malaysia',
    'hospital bed Malaysia',
    'buy hospital bed Malaysia',
    'rent hospital bed Malaysia',
    'adjustable hospital bed',
    'electric hospital bed Malaysia',
    'katil hospital Selangor',
    'katil hospital Kuala Lumpur',
    'katil hospital Johor Bahru',
    'katil hospital Penang',
    'katil hospital Sabah',
    'katil hospital Sarawak'
  ],
  authors: [{ name: site.company }],
  creator: site.brand,
  publisher: site.company,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    alternateLocale: ['ms_MY', 'zh_CN'],
    url: site.domain,
    siteName: site.brand,
    title: 'Hospital Bed Malaysia | Try Renting First, Buy When You\'re Ready',
    description:
      'Hospital beds (katil hospital) made for real home care. Rent from RM150/month or buy from RM799 — same-day setup in Klang Valley, MDA-registered.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hospital Bed Malaysia — Buy or Rent for Home Care'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Bed Malaysia | Katil Hospital for Real Home Care',
    description: 'Rent from RM150/month or buy from RM799. Same-day delivery, free setup, MDA-registered.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' }
  },
  icons: { icon: '/favicon.ico' },
  category: 'Medical Equipment'
};

export const viewport: Viewport = {
  themeColor: '#1f73f0',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ldOrganization = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: site.brand,
    legalName: site.company,
    url: site.domain,
    logo: `${site.domain}/logo.png`,
    image: `${site.domain}/og-image.jpg`,
    telephone: site.phoneIntl,
    email: site.email,
    priceRange: 'RM150 - RM5,500',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Batu Caves',
        addressLocality: 'Selangor',
        addressCountry: 'MY'
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Kota Kinabalu',
        addressLocality: 'Sabah',
        addressCountry: 'MY'
      }
    ],
    areaServed: { '@type': 'Country', name: 'Malaysia' },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '09:00',
        closes: '16:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      `https://wa.me/${site.whatsappNumber.replace(/\s/g, '')}`
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500'
    }
  };

  return (
    <html lang="en-MY">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldOrganization) }}
        />
      </head>
      <body className="bg-white text-slate-800">{children}</body>
    </html>
  );
}
