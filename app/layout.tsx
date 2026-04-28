import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'Beli & Sewa Katil Hospital Malaysia | Hantar 4 Jam, Harga Berpatutan',
    template: '%s | Beli Katil Hospital Malaysia'
  },
  description:
    'Beli & sewa katil hospital Malaysia mulai RM150/bulan. Tiada deposit, hantar 4 jam, pemasangan percuma. Pakar penjagaan pesakit di rumah sejak 2016. Berdaftar MDA.',
  keywords: [
    'beli katil hospital',
    'sewa katil hospital',
    'katil hospital Malaysia',
    'katil pesakit',
    'katil elektrik hospital',
    'katil hospital murah',
    'hospital bed Malaysia',
    'rent hospital bed',
    'katil hospital Selangor',
    'katil hospital KL',
    'penjagaan pesakit di rumah'
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
    title: 'Beli & Sewa Katil Hospital Malaysia | Mulai RM150/bulan',
    description:
      'Pakar katil hospital untuk pesakit di rumah. Hantar 4 jam ke seluruh Malaysia. Sewa dulu, beli kemudian. Berdaftar MDA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beli Katil Hospital Malaysia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beli & Sewa Katil Hospital Malaysia',
    description: 'Hantar 4 jam, mulai RM150/bulan. Tiada deposit. Berdaftar MDA.',
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
    <html lang="ms">
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
