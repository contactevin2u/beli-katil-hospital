import { Star } from './Icon';

const stats: { value: string; label: string; star?: boolean }[] = [
  { value: '12,000+', label: 'Penghantaran peralatan perubatan selesai (Mac 2023 – Apr 2026)' },
  { value: '2016', label: 'AA Alive Sdn Bhd berdaftar' },
  { value: 'MDA', label: 'Semua model katil berdaftar (GA9817222-107721)' },
  { value: 'RM0', label: 'Deposit sewa katil hospital' }
];

export function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="container-x py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-brand-700 inline-flex items-center gap-1.5">
              {s.value}
              {s.star && <Star size={28} className="text-amber-500" />}
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
