import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.domain, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.domain}#produk`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${site.domain}#sewa`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${site.domain}#beli`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${site.domain}#kelebihan`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${site.domain}#liputan`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${site.domain}#faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 }
  ];
}
