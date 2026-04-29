import { HelpCircle } from './Icon';

type QA = { q: string; a: string };

export const faqs: QA[] = [
  {
    q: 'Berapa harga katil hospital di Malaysia?',
    a: 'Harga katil hospital di Malaysia berbeza ikut fungsi. Untuk beli: katil manual 2-fungsi mulai RM799, katil 3-fungsi (boleh laras tinggi) mulai RM1,349, dan katil elektrik 6-fungsi mulai RM5,500. Untuk sewa: bermula RM150/bulan tanpa deposit. Semua harga sudah termasuk pemasangan + latihan penjaga PERCUMA.'
  },
  {
    q: 'Berapa harga sewa katil hospital sebulan?',
    a: 'Sewa katil hospital bermula RM150/bulan (manual 2-fungsi), RM250/bulan (3-fungsi — paling popular) dan RM715/bulan (elektrik 6-fungsi). Tiada deposit, tiada lock-in jangka panjang, dan tiada caj tersembunyi. Bayaran sewa boleh ditolak 100% dari harga beli kalau anda decide nak miliki kemudian.'
  },
  {
    q: 'Apa beza katil hospital 2-fungsi, 3-fungsi dan 6-fungsi elektrik?',
    a: 'Katil 2-fungsi (manual) boleh laras sandaran kepala dan kaki sahaja — sesuai untuk pesakit ringan. Katil 3-fungsi tambah pelarasan tinggi katil (naik-turun) — kritikal untuk lindungi belakang penjaga. Katil elektrik 6-fungsi pula dikawal remote, ada mod Trendelenburg, bateri sandaran waktu blackout, dan biasanya disertakan tilam udara anti-lubang baring untuk pesakit terlantar berat.'
  },
  {
    q: 'Katil hospital mana paling sesuai untuk warga emas?',
    a: 'Untuk warga emas yang masih boleh bergerak sendiri, katil 2-fungsi atau 3-fungsi sudah memadai — yang penting ada side rail untuk cegah jatuh. Untuk warga emas yang dah strok, nyanyuk berat atau terlantar lama, kami sarankan katil elektrik 6-fungsi dengan tilam udara untuk elak lubang baring.'
  },
  {
    q: 'Berapa lama untuk hantar katil hospital ke rumah?',
    a: 'Untuk Lembah Klang (KL, Selangor, Putrajaya), kami pasang siap di rumah dalam 4 jam selepas tempahan disahkan, asalkan order sebelum 2 petang. Negeri Semenanjung lain biasanya 1–3 hari. Untuk Sabah, Sarawak dan W.P. Labuan, biasanya 2–5 hari kerja. Kami akan SMS atau WhatsApp anda dengan jadual tepat selepas pengesahan.'
  },
  {
    q: 'Adakah pemasangan katil hospital dikenakan bayaran?',
    a: 'Tidak. Pemasangan di rumah, demo cara guna, dan latihan teknik penjagaan untuk caregiver — semua PERCUMA. Pasukan kami akan datang sendiri, pasang setiap skru, uji semua fungsi, dan pastikan penjaga keluarga anda yakin guna sebelum kami balik. Tiada caj tersembunyi.'
  },
  {
    q: 'Boleh sewa katil hospital dulu, kemudian beli?',
    a: 'Boleh — ini program "Sewa Dulu, Beli Kemudian" eksklusif kami. Mulakan dengan sewa bulanan tanpa komitmen. Kalau selepas beberapa bulan keluarga rasa berbaloi nak miliki katil tersebut, 100% bayaran sewa yang dah dibayar akan ditolak dari harga beli. Tiada penalti tukar pelan, tiada syarat tersembunyi.'
  },
  {
    q: 'Ada pilihan ansuran 0% untuk beli katil hospital?',
    a: 'Ya. Untuk pembelian katil hospital elektrik, kami tawarkan ansuran 0% sehingga 12 bulan melalui kad kredit utama (Maybank, CIMB, Public Bank, dan lain-lain) — tiada caj pemprosesan. Kelulusan dalam beberapa minit terus dari WhatsApp kami.'
  },
  {
    q: 'Boleh ke beli katil hospital second-hand atau terpakai?',
    a: 'Kami tidak galak beli katil hospital second-hand dari sumber tidak rasmi (Mudah, Carousell, Facebook Marketplace) sebab risiko kontaminasi, parts haus dan tiada waranti. Sebagai alternatif, sewa dengan kami lebih jimat — semua katil sewa kami diperiksa, dibersihkan dengan disinfektan gred hospital, dan dilindungi waranti penuh.'
  },
  {
    q: 'Apa jadi kalau pesakit dah tak perlu katil lagi?',
    a: 'Kalau anda menyewa, cukup WhatsApp untuk batal — kami akan jadualkan kutipan tanpa penalti (selepas bulan pertama). Kalau anda dah beli, gunakan program trade-in kami: kami beli balik dengan harga berpatutan atau anda boleh tukar dengan peralatan lain (kerusi roda, walker, mesin oksigen). Tak buang sia-sia.'
  },
  {
    q: 'Adakah katil hospital ini berdaftar dan selamat?',
    a: 'Ya. Semua katil hospital kami berdaftar di bawah Akta Peranti Perubatan 2012 (Akta 737) oleh MDA Malaysia, nombor pendaftaran GA9817222-107721. Kelulusan iklan: MDAMD 0127/2025. Setiap unit diperiksa dan disanitasi sepenuhnya sebelum hantar, dan dilindungi waranti rangka 2 tahun.'
  },
  {
    q: 'Boleh tuntut insurans atau panel hospital untuk katil hospital?',
    a: 'Sesetengah polisi insurans kesihatan dan pelan medical card panel meliputi sewaan/pembelian peralatan perubatan rumah, terutamanya selepas pembedahan atau wad lanjutan. Kami akan sediakan invois rasmi dengan pendaftaran MDA untuk anda kemukakan tuntutan kepada syarikat insurans atau majikan.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <HelpCircle size={14} /> Soalan Lazim
          </span>
          <h2 className="section-title mt-3">Soalan Lazim Beli & Sewa Katil Hospital di Malaysia</h2>
          <p className="section-sub">
            Daripada harga sehingga proses pulangan, berikut jawapan jujur untuk soalan yang
            paling kerap kami terima sebelum keluarga buat keputusan.
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
