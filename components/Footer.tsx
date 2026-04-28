import { site, waLink } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-x py-14 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white font-black">B</span>
            <span className="font-extrabold text-white">{site.brand}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-md">
            {site.tagline}. Pakar sewa & beli katil hospital untuk penjagaan pesakit di rumah.
            Berdaftar di bawah Akta Peranti Perubatan 2012 oleh MDA Malaysia.
          </p>
          <div className="mt-5 text-sm">
            <div className="font-bold text-white">{site.company}</div>
            <div className="mt-1">📍 HQ: {site.hqAddress}</div>
            <div>📍 Cawangan: {site.branchAddress}</div>
          </div>
          <div className="mt-5 flex gap-3">
            <a href={waLink()} target="_blank" rel="noopener" className="rounded-full bg-accent-500 hover:bg-accent-600 px-4 py-2 text-sm font-semibold text-white">
              WhatsApp
            </a>
            <a href={`tel:${site.phoneIntl.replace(/\s/g, '')}`} className="rounded-full bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 text-sm font-semibold text-white">
              {site.phone}
            </a>
          </div>
        </div>

        <div>
          <div className="text-white font-bold text-sm uppercase tracking-wide">Pautan</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#produk" className="hover:text-white">Produk</a></li>
            <li><a href="#sewa" className="hover:text-white">Sewa Katil</a></li>
            <li><a href="#beli" className="hover:text-white">Beli Katil</a></li>
            <li><a href="#kelebihan" className="hover:text-white">Kelebihan</a></li>
            <li><a href="#liputan" className="hover:text-white">Liputan</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#hubungi" className="hover:text-white">Hubungi Kami</a></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-bold text-sm uppercase tracking-wide">Pendaftaran</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>MDA: {site.mda.registration}</li>
            <li>Iklan: {site.mda.advert}</li>
          </ul>
          <div className="text-white font-bold text-sm uppercase tracking-wide mt-6">Waktu</div>
          <ul className="mt-3 space-y-1 text-sm">
            <li>{site.hours.weekday}</li>
            <li>{site.hours.weekend}</li>
            <li className="text-accent-500">{site.hours.emergency}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs flex flex-col sm:flex-row gap-2 justify-between">
          <div>© {new Date().getFullYear()} {site.brand} — {site.company}. Hak cipta terpelihara.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privasi</a>
            <a href="#" className="hover:text-white">Terma & Syarat</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
