const stats = [
  { value: '5,000+', label: 'Pelanggan Berpuas Hati' },
  { value: '10+', label: 'Tahun Pengalaman' },
  { value: '4.9★', label: 'Rating Google' },
  { value: '24/7', label: 'Sokongan Pelanggan' }
];

export function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="container-x py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-brand-700">{s.value}</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
