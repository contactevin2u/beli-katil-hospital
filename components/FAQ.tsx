import { HelpCircle } from './Icon';

type QA = { q: string; a: string };

export const faqs: QA[] = [
  {
    q: 'Berapa harga katil hospital di Malaysia?',
    a: 'Harga depend pada function. Untuk beli: katil manual 2-function start dari RM799, katil 3-function (boleh laras tinggi) start dari RM1,349, dan katil elektrik 6-function full-motor start dari RM5,500. Untuk sewa: mulai RM150/bulan, no deposit. Semua harga ni dah termasuk hantar, pasang, dan demo cara guna untuk caregiver — semua free.'
  },
  {
    q: 'Berapa sewa katil hospital sebulan?',
    a: 'Sewa start dari RM150/bulan (manual 2-function), RM250/bulan (3-function — paling laris), dan RM715/bulan (elektrik 6-function). Tiada deposit, tiada lock-in panjang, tiada caj tersorok. Kalau lepas beberapa bulan family decide nak miliki katil tu, 100% bayaran sewa yang dah bayar ditolak dari harga beli.'
  },
  {
    q: 'Apa beza katil 2-function, 3-function, dan elektrik 6-function?',
    a: 'Katil 2-function (manual) boleh angkat sandaran kepala & kaki je — sesuai untuk pesakit yang masih boleh bergerak sendiri. Katil 3-function tambah satu fungsi lagi — tinggi katil boleh adjust naik-turun, dan ni betul-betul jimatkan belakang caregiver. Katil elektrik 6-function pula full remote control, ada Trendelenburg mode untuk kes kecemasan, ada battery backup masa blackout, dan biasanya datang sekali dengan air mattress untuk pesakit terlantar lama.'
  },
  {
    q: 'Katil mana paling sesuai untuk warga emas?',
    a: 'Kalau ibu ayah masih boleh bangun sendiri, katil 2-function atau 3-function dah cukup — yang penting ada side rail untuk elak jatuh. Tapi kalau warga emas yang dah strok, dementia teruk, atau terlantar lama, kami sarankan katil elektrik 6-function dengan air mattress — supaya tak kena lubang baring.'
  },
  {
    q: 'Berapa lama nak hantar katil ke rumah?',
    a: 'Untuk Klang Valley (KL, Selangor, Putrajaya), kami pasang siap di rumah dalam 4 jam selepas order confirm — asalkan order before 2 petang. Negeri Semenanjung lain biasanya 1–3 hari kerja. Sabah, Sarawak, dan W.P. Labuan ambil masa 2–5 hari kerja. Kami akan WhatsApp anda jadual tepat lepas semua dah confirm.'
  },
  {
    q: 'Pemasangan kena bayar tambahan tak?',
    a: 'Tak, semua atas kami. Team kami datang sendiri ke rumah, pasang setiap skrew, test semua function, dan tunjuk caregiver cara handle. Kami tak balik sampai family rasa yakin nak guna sendiri. Tiada caj tersorok, tiada "service fee" lain-lain — harga dalam quotation tu la harga sebenar.'
  },
  {
    q: 'Boleh sewa katil dulu, beli kemudian?',
    a: 'Boleh — ni susunan paling popular kami. Mula dengan sewa bulanan, no commitment. Kalau lepas beberapa bulan family rasa nak miliki katil tu, 100% bayaran sewa yang dah bayar akan ditolak dari harga beli. Tiada penalti untuk tukar plan, tiada syarat tersorok dalam fine print.'
  },
  {
    q: 'Ada ansuran 0% untuk beli ke?',
    a: 'Ada. Untuk katil elektrik, kami offer ansuran 0% sampai 12 bulan melalui kad kredit utama (Maybank, CIMB, Public Bank, dan lain-lain) — tiada caj processing. Approval biasanya keluar dalam beberapa minit, semua boleh urus terus dari WhatsApp.'
  },
  {
    q: 'Boleh ke saya beli katil hospital second-hand je?',
    a: 'Honestly, kami tak galakkan beli katil terpakai dari Mudah, Carousell, atau Facebook Marketplace — risiko kontaminasi, parts dah haus, dan tiada warranty kalau ada apa-apa rosak. Sewa dengan kami selalunya lagi murah pun, dan tiap unit kami inspect, sanitize dengan disinfektan gred hospital, dan covered penuh dengan warranty.'
  },
  {
    q: 'Kalau dah tak perlu katil tu, macam mana?',
    a: 'Kalau anda sewa, just WhatsApp je untuk cancel — kami akan jadualkan kutipan tanpa penalti (lepas bulan pertama). Kalau dah beli, gunakan trade-in scheme kami: kami beli balik dengan harga fair, atau tukar dengan equipment lain macam wheelchair, walker, atau mesin oksigen. Tak buang sia-sia.'
  },
  {
    q: 'Katil ni betul-betul selamat dan certified ke?',
    a: 'Ya. Setiap katil kami daftar di bawah Akta Peranti Perubatan 2012 (Akta 737) oleh MDA Malaysia — nombor pendaftaran GA9817222-107721, kelulusan iklan MDAMD 0127/2025. Setiap unit di-inspect dan disanitize before kami hantar, dan rangka katil ada warranty 2 tahun.'
  },
  {
    q: 'Boleh claim insurans atau medical card company tak?',
    a: 'Sesetengah polisi insurans kesihatan dan medical card company memang cover peralatan jaga di rumah — terutamanya lepas pembedahan atau wad lanjutan. Kami akan sediakan invois rasmi dengan nombor pendaftaran MDA, supaya anda boleh submit terus pada syarikat insurans atau HR company anda.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50">
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
