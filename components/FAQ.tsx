type QA = { q: string; a: string };

export const faqs: QA[] = [
  {
    q: 'Berapa harga sewa katil hospital sebulan?',
    a: 'Sewa bermula RM150/bulan untuk katil 2-function manual, RM250/bulan untuk 3-function (paling popular), dan RM715/bulan untuk katil elektrik premium. Tiada deposit, tiada caj tersembunyi.'
  },
  {
    q: 'Apa beza katil 2-function dengan 3-function?',
    a: 'Katil 2-function boleh laras sandaran kepala dan kaki sahaja. Katil 3-function tambah satu lagi fungsi — ketinggian katil boleh dilaras (naik turun). Ini sangat membantu penjaga elak sakit belakang dan memudahkan pemindahan pesakit.'
  },
  {
    q: 'Berapa lama untuk hantar katil ke rumah?',
    a: 'Untuk Lembah Klang, kami boleh hantar dalam 4 jam (kalau order sebelum 2 petang). Negeri lain biasanya 1–3 hari. Sabah, Sarawak & Labuan ambil masa lebih sedikit. Kami akan inform tarikh tepat selepas anda WhatsApp kami.'
  },
  {
    q: 'Adakah pemasangan dikenakan caj?',
    a: 'Tidak. Pemasangan, latihan penjaga, dan demo cara guna semuanya PERCUMA. Pasukan kami akan datang sendiri ke rumah anda dan pastikan semua berfungsi dengan baik sebelum kami balik.'
  },
  {
    q: 'Boleh sewa dulu, beli kemudian?',
    a: 'Boleh! Ini program "Sewa Dulu, Beli Kemudian" kami. Kalau lepas sewa anda decide nak beli, bayaran sewa akan ditolak dari harga beli. Tiada penalti, tiada syarat tersembunyi.'
  },
  {
    q: 'Ada pilihan ansuran untuk pembelian?',
    a: 'Ya. Untuk model elektrik, kami tawarkan ansuran 0% sehingga 12 bulan tanpa caj kewangan. Cuma WhatsApp kami untuk dapatkan keputusan dalam masa beberapa minit.'
  },
  {
    q: 'Apa jadi kalau tak nak guna lagi?',
    a: 'Kalau sewa, cukup batal dan kami akan datang ambil. Kalau beli, kami ada program trade-in — kami boleh beli balik atau tukar dengan model lain. Tak buang sia-sia.'
  },
  {
    q: 'Adakah katil kami selamat & berkualiti?',
    a: 'Semua katil kami berdaftar di bawah Akta Peranti Perubatan 2012 (Akta 737) oleh MDA Malaysia. Setiap unit diperiksa dan dibersihkan sepenuhnya sebelum dihantar. Termasuk waranti dan sokongan teknikal 24/7.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">❓ FAQ</span>
          <h2 className="section-title mt-3">Soalan Lazim</h2>
          <p className="section-sub">
            Soalan yang paling kerap ditanya oleh keluarga sebelum sewa atau beli katil hospital.
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto divide-y divide-slate-100 rounded-3xl bg-white border border-slate-100 shadow-soft">
          {faqs.map((qa, i) => (
            <details key={i} className="group p-6 open:bg-slate-50/50">
              <summary className="cursor-pointer flex items-start justify-between gap-4 font-semibold text-slate-900">
                <span>{qa.q}</span>
                <span className="text-brand-700 group-open:rotate-45 transition shrink-0 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">{qa.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
