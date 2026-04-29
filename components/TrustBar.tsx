import { Star } from './Icon';

const stats = [
  { value: '5,000+', label: 'Keluarga Malaysia dah guna' },
  { value: '10+', label: 'Tahun fokus jaga di rumah' },
  { value: '4.9', label: 'Rating Google (500+ ulasan)', star: true },
  { value: '24/7', label: 'Talian sokongan kecemasan' }
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
