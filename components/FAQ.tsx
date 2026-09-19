import { HelpCircle } from './Icon';

type QA = { q: string; a: string };

export const faqs: QA[] = [
  {
    q: 'Berapa harga katil hospital di Malaysia?',
    a: 'Harga depend pada function. Untuk beli: katil manual 2-function start dari RM799, katil 3-function (boleh laras tinggi) start dari RM1,349, dan katil elektrik 6-function full-motor start dari RM5,500. Untuk sewa: mulai RM150/bulan, tiada deposit. Caj penghantaran dan pemasangan (jika ada) disahkan dalam quotation bertulis sebelum order — penghantaran sehala dalam Malaysia paling tinggi RM280.'
  },
  {
    q: 'Berapa sewa katil hospital sebulan?',
    a: 'Sewa start dari RM150/bulan (manual 2-function) dan RM250/bulan (3-function — paling laris). Katil elektrik 6-function (Ultra) dijual sahaja pada RM5,500 — tiada pilihan sewa untuk model ni. Tiada deposit, dan boleh sewa sebulan sahaja. Kalau family nak miliki katil tu kemudian, boleh bincang tolak sebahagian bayaran sewa jika beli kemudian — ikut sebut harga bertulis.'
  },
  {
    q: 'Apa beza katil 2-function, 3-function, dan elektrik 6-function?',
    a: 'Katil 2-function (manual) boleh angkat sandaran kepala & kaki je — sesuai untuk pesakit yang masih boleh bergerak sendiri. Katil 3-function tambah satu fungsi lagi — tinggi katil boleh adjust naik-turun, dan ni betul-betul jimatkan belakang caregiver. Katil elektrik 6-function pula full remote control, ada Trendelenburg mode untuk kes kecemasan, ada battery backup masa blackout, dan air mattress boleh ditambah secara berasingan (ikut quotation) untuk pesakit terlantar lama.'
  },
  {
    q: 'Katil mana paling sesuai untuk warga emas?',
    a: 'Kalau ibu ayah masih boleh bangun sendiri, katil 2-function atau 3-function dah cukup — yang penting ada side rail untuk elak jatuh. Tapi kalau warga emas yang dah strok, dementia teruk, atau terlantar lama, kami sarankan katil elektrik 6-function dengan air mattress — supaya tak kena lubang baring.'
  },
  {
    q: 'Pemasangan kena bayar tambahan tak?',
    a: 'Caj penghantaran dan pemasangan bergantung pada alamat, akses rumah dan order anda — semua disahkan dalam quotation bertulis sebelum order, jadi tiada caj tersorok. Team kami pasang katil, test semua function, dan tunjuk caregiver cara handle. Bayaran dikutip selepas katil sampai dan siap dipasang.'
  },
  {
    q: 'Boleh sewa katil dulu, beli kemudian?',
    a: 'Boleh. Mula dengan sewa bulanan — boleh sewa sebulan sahaja. Kalau lepas beberapa bulan family rasa nak miliki katil tu, boleh bincang tolak sebahagian bayaran sewa jika beli kemudian — ikut sebut harga bertulis.'
  },
  {
    q: 'Ada ansuran untuk beli ke?',
    a: 'Pilihan ansuran boleh dibincang untuk pembelian — kaedah dan jadual bayaran ditulis dalam quotation atau invois. Bayaran dikutip selepas katil sampai dan siap dipasang, dan ansuran pun ditandatangani selepas penghantaran, bukan sebelum.'
  },
  {
    q: 'Boleh ke saya beli katil hospital second-hand je?',
    a: 'Honestly, kami tak galakkan beli katil terpakai dari Mudah, Carousell, atau Facebook Marketplace — risiko kontaminasi, parts dah haus, dan tiada warranty kalau ada apa-apa rosak. Sewa dengan kami selalunya lagi murah pun, dan tiap unit kami inspect dan sanitize sebelum dihantar. Katil baru yang dibeli ada waranti 1 tahun (skop ikut invois).'
  },
  {
    q: 'Kalau dah tak perlu katil tu, macam mana?',
    a: 'Kalau anda sewa, just WhatsApp je — kami akan jadualkan kutipan ikut terma sewa dalam quotation anda. Kalau dah beli, gunakan trade-in scheme kami: kami beli balik dengan harga fair, atau tukar dengan equipment lain macam wheelchair, walker, atau mesin oksigen. Tak buang sia-sia.'
  },
  {
    q: 'Katil ni berdaftar dengan MDA ke?',
    a: 'Ya. Semua model katil kami berdaftar dengan MDA (Pihak Berkuasa Peranti Perubatan) di bawah Akta Peranti Perubatan 2012 (Akta 737) — nombor pendaftaran GA9817222-107721, kelulusan iklan MDAMD 0127/2025. Kod model pada quotation atau invois boleh dipadankan dengan rekod MDA. Setiap unit di-inspect dan disanitize sebelum sampai ke rumah anda, dan katil baru yang dibeli ada waranti 1 tahun (skop ikut invois).'
  },
  {
    q: 'Boleh claim insurans atau medical card company tak?',
    a: 'Sesetengah polisi insurans kesihatan dan medical card company memang cover peralatan jaga di rumah — terutamanya lepas pembedahan atau wad lanjutan. Kami akan sediakan invois rasmi dengan nombor pendaftaran MDA, supaya anda boleh submit terus pada syarikat insurans atau HR company anda.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-12 sm:py-16 bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <HelpCircle size={14} /> Soalan lazim
          </span>
          <h2 className="section-title mt-3">Soalan yang paling kerap kami terima</h2>
          <p className="section-sub">
            Dari harga sampai cara return — jawapan jujur untuk benda yang biasanya family
            Malaysia tanya before decide nak sewa atau beli katil hospital.
          </p>
        </div>

        <div className="mt-8 max-w-3xl mx-auto divide-y divide-slate-100 rounded-3xl bg-white border border-slate-100 shadow-soft">
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
