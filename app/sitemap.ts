import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

// One-page site: the #produk/#sewa/... sections are fragments of the same URL,
// which Google ignores in sitemaps, so only the page itself is listed.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.domain}/`, lastModified: new Date('2026-09-19'), changeFrequency: 'weekly', priority: 1 }
  ];
}
