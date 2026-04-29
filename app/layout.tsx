import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'Beli Katil Hospital Malaysia | Sewa Mulai RM150/bulan',
    template: '%s | Beli Katil Hospital Malaysia'
  },
  description:
    'Cari katil hospital untuk jaga keluarga di rumah? Sewa mulai RM150/bulan atau beli mulai RM799. Hantar laju, pasang free, daftar MDA. Trusted sejak 2016.',
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
    locale: 'ms_MY',
    alternateLocale: ['en_MY', 'zh_CN'],
    url: site.domain,
    siteName: site.brand,
    title: 'Beli Katil Hospital Malaysia — Sewa Dulu, Beli Kemudian',
    description:
      'Katil hospital senang guna untuk jaga ibu ayah, lepas operation, atau pesakit terlantar. Sewa mulai RM150/bulan, beli mulai RM799. Hantar & pasang sendiri di rumah.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beli Katil Hospital Malaysia — Sewa atau Beli untuk Jaga di Rumah'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beli Katil Hospital Malaysia | Hospital Bed untuk Jaga di Rumah',
    description: 'Sewa mulai RM150/bulan atau beli mulai RM799. Hantar laju, pasang free, daftar MDA.',
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
    <html lang="ms-MY">
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
