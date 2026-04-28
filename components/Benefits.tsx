const benefits = [
  {
    icon: '🛡️',
    title: 'Elak Jangkitan Hospital (HAI)',
    body: '21.6% pesakit di Asia Tenggara dijangkiti HAI semasa di hospital. Penjagaan di rumah kurangkan risiko ini dengan ketara.'
  },
  {
    icon: '🩹',
    title: 'Cegah Lubang Baring (Bedsores)',
    body: '1 dari 7 pesakit terlantar mengalami pressure ulcer. Tilam khas + pelarasan posisi mudahkan pencegahan.'
  },
  {
    icon: '🦴',
    title: 'Pagar Sisi Cegah Jatuh',
    body: 'Pagar sisi katil dapat kurangkan risiko jatuh sehingga 55% — sangat penting untuk warga emas & pesakit lemah.'
  },
  {
    icon: '💪',
    title: 'Lindungi Penjaga Daripada Sakit Belakang',
    body: 'Ketinggian katil yang boleh dilaras pastikan penjaga tak perlu membongkok — kurangkan risiko sakit pinggang.'
  },
  {
    icon: '🍲',
    title: 'Makan & Minum Selamat',
    body: 'Kepala dinaikkan 30°–45° kurangkan risiko tersedak dan masalah salur pernafasan (aspirasi).'
  },
  {
    icon: '🧼',
    title: 'Senang Mandi & Tukar Lampin',
    body: 'Permukaan boleh laras + roda berkunci memudahkan rutin penjagaan harian dengan satu orang penjaga.'
  }
];

export function Benefits() {
  return (
    <section id="kelebihan" className="py-16 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">💚 Kenapa Penting</span>
          <h2 className="section-title mt-3">Manfaat Katil Hospital di Rumah</h2>
          <p className="section-sub">
            Lebih daripada sekadar tempat tidur — katil hospital adalah pelaburan untuk
            keselamatan dan keselesaan orang tersayang.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 hover:shadow-soft transition"
            >
              <div className="text-3xl">{b.icon}</div>
              <h3 className="mt-3 text-lg font-bold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
