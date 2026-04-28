const reasons = [
  {
    icon: '🏆',
    title: '10+ Tahun Pengalaman',
    body: 'Sejak 2016, lebih 5,000 keluarga Malaysia mempercayakan kami untuk penjagaan orang tersayang.'
  },
  {
    icon: '💸',
    title: 'Pakej Sewa & Beli Fleksibel',
    body: 'Sewa dulu, beli kemudian. Ansuran 0% sehingga 12 bulan untuk pembelian. Tiada caj tersembunyi.'
  },
  {
    icon: '⚡',
    title: 'Hantar 4 Jam, Seluruh Malaysia',
    body: 'Lembah Klang dapat hantar dalam 4 jam. Penghantaran ke Sabah, Sarawak & Labuan juga tersedia.'
  },
  {
    icon: '📞',
    title: 'Sokongan Teknikal 24/7',
    body: 'Talian kecemasan 24 jam. Pasukan teknikal sedia bantu walaupun tengah malam atau cuti umum.'
  },
  {
    icon: '🛠️',
    title: 'Pemasangan & Latihan PERCUMA',
    body: 'Kami pasang sendiri di rumah anda dan ajar penjaga cara guna dengan selamat — semua percuma.'
  },
  {
    icon: '🔄',
    title: 'Program Trade-In',
    body: 'Tak perlu lagi katil? Kami beli balik atau tukar dengan harga berpatutan. Tak buang sia-sia.'
  }
];

export function WhyUs() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">⭐ Kenapa Pilih Kami</span>
          <h2 className="section-title mt-3">
            Kenapa 5,000+ Keluarga Malaysia Pilih Kami?
          </h2>
          <p className="section-sub">
            Bukan sekadar jual katil — kami rakan kongsi anda dalam penjagaan pesakit di rumah.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl bg-white border border-slate-100 p-6 shadow-soft">
              <div className="text-3xl">{r.icon}</div>
              <h3 className="mt-3 text-lg font-bold text-slate-900">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
