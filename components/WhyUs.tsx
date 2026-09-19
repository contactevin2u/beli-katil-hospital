import { Trophy, DollarSign, Bolt, Phone, Wrench, RefreshCw, StarOutline } from './Icon';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const reasons: { Icon: IconType; title: string; body: string }[] = [
  {
    Icon: Trophy,
    title: 'Fokus pada home care',
    body: 'AA Alive Sdn Bhd (berdaftar 2016) buat satu benda je: bantu family Malaysia jaga orang tersayang di rumah. Bukan kerja sambilan kedai perabot — rekod kami mencatat 12,000+ penghantaran peralatan perubatan yang selesai dari Mac 2023 hingga April 2026.'
  },
  {
    Icon: DollarSign,
    title: 'Sewa dulu, decide kemudian',
    body: 'Mula dari RM150/bulan, tiada deposit, boleh sewa sebulan sahaja. Kalau lepas tu rasa nak beli, tanya kami tentang pilihan tukar sewa kepada beli — sebahagian bayaran sewa boleh ditolak dari harga beli, ikut quotation.'
  },
  {
    Icon: Bolt,
    title: 'Bayar selepas katil siap dipasang',
    body: 'Crew kami yang setup, bukan family yang kena bertarung dengan skrew dan manual. Semua caj penghantaran dan pemasangan ditulis dalam quotation sebelum order, dan bayaran dikutip selepas katil sampai dan siap dipasang — no surprises.'
  },
  {
    Icon: Phone,
    title: 'Support selepas pemasangan',
    body: 'Ada masalah dengan katil? WhatsApp kami bila-bila masa — team kami akan susun servis atau penggantian ikut terma sewa atau waranti bertulis anda.'
  },
  {
    Icon: Wrench,
    title: 'Kami pasang. Kami tunjuk cara guna.',
    body: 'Crew kami datang, assemble katil, demo cara guna remote, dan walkthrough caregiver pasal tukar lampin, transfer pesakit, dan cara cegah lubang baring. Tak siapa balik dalam keadaan blur.'
  },
  {
    Icon: RefreshCw,
    title: 'Dah tak guna katil? Kami beli balik',
    body: 'Bila masa dah sampai untuk lepaskan katil tu, trade-in scheme kami beli balik dengan harga fair — atau tukar dengan equipment lain. Tak payah jual sendiri kat Mudah atau Carousell.'
  }
];

export function WhyUs() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <StarOutline size={14} /> Kenapa pilih kami
          </span>
          <h2 className="section-title mt-3">
            Apa yang beza kami dengan kedai medical equipment lain
          </h2>
          <p className="section-sub">
            Banyak tempat boleh jual katil hospital di Malaysia. Beza kami: home care ni memang
            fokus utama, bukan side hustle dari kedai perabot. Bila family anda dalam keadaan
            susah malam-malam — kami yang akan angkat phone.
          </p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ Icon, title, body }) => (
            <div key={title} className="rounded-2xl bg-white border border-slate-100 p-6 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
