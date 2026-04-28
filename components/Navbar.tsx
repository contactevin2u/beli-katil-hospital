import Link from 'next/link';
import { site, waLink, telLink } from '@/lib/site';
import { Phone, WhatsApp } from './Icon';

const navItems = [
  { href: '#produk', label: 'Produk' },
  { href: '#peralatan-lain', label: 'CPAP & Lain' },
  { href: '#sewa', label: 'Sewa' },
  { href: '#beli', label: 'Beli' },
  { href: '#kelebihan', label: 'Kelebihan' },
  { href: '#liputan', label: 'Liputan' },
  { href: '#faq', label: 'FAQ' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white font-black">
            B
          </span>
          <span className="font-extrabold tracking-tight text-slate-900">
            {site.brand}
            <span className="hidden sm:inline text-xs ml-1 font-medium text-slate-500">
              .my
            </span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-brand-700 transition">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={telLink} className="hidden sm:inline-flex btn-secondary !py-2 !px-4 text-sm">
            <Phone size={16} />
            {site.phone}
          </a>
          <a href={waLink()} target="_blank" rel="noopener" className="btn-primary !py-2 !px-4 text-sm">
            <WhatsApp size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
