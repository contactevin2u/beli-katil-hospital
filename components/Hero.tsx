import { site, waLink, telLink } from '@/lib/site';
import { ImagePlaceholder } from './ImagePlaceholder';

const badges = [
  { icon: '⏱️', label: 'Hantar 4 Jam' },
  { icon: '✅', label: 'Tiada Deposit' },
  { icon: '🛠️', label: 'Pasang Percuma' },
  { icon: '🏥', label: 'Berdaftar MDA' }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="container-x py-12 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="pill">⭐ #1 Pilihan 5,000+ Keluarga Malaysia</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
            Beli & Sewa <span className="text-brand-700">Katil Hospital</span> Malaysia
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl">
            Jaga pesakit di rumah lebih mudah dan selesa. <strong>Sewa mulai RM150/bulan</strong> atau{' '}
            <strong>beli mulai RM799</strong>. Hantar dalam 4 jam ke seluruh Malaysia. Tiada deposit, pemasangan percuma.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href={waLink()} target="_blank" rel="noopener" className="btn-primary text-base">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.81 11.81 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.99 5.92L3.5 19.18l3.154-1.987z"/></svg>
              WhatsApp Sekarang
            </a>
            <a href={telLink} className="btn-secondary text-base">
              📞 Tel: {site.phone}
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 rounded-xl bg-white border border-slate-100 px-3 py-2 shadow-soft">
                <span className="text-xl">{b.icon}</span>
                <span className="text-sm font-semibold text-slate-700">{b.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-300 to-brand-600 border-2 border-white" />
              ))}
            </div>
            <div>
              <div className="text-amber-500">★★★★★ <span className="text-slate-700 font-semibold">4.9/5</span></div>
              <div className="text-xs">500+ ulasan Google • 5,000+ pelanggan</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <ImagePlaceholder
            label="Gambar Katil Hospital (Hero)"
            note="hero-katil.jpg • 1200x900"
            className="aspect-[4/3] rounded-3xl shadow-soft"
          />
          <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-soft p-4 border border-slate-100 hidden sm:block">
            <div className="text-xs text-slate-500">Promosi Bulan Ini</div>
            <div className="font-bold text-slate-900">Sewa dari RM150/bulan</div>
            <div className="text-xs text-accent-600 font-semibold">+ Tiang IV & meja makan PERCUMA</div>
          </div>
          <div className="absolute -top-4 -right-2 bg-accent-500 text-white rounded-full px-4 py-2 text-sm font-bold shadow-soft hidden sm:block">
            Hantar Hari Ini ⚡
          </div>
        </div>
      </div>
    </section>
  );
}
