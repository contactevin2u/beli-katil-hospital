import { Trophy, DollarSign, Bolt, Phone, Wrench, RefreshCw, StarOutline } from './Icon';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const reasons: { Icon: IconType; title: string; body: string }[] = [
  {
    Icon: Trophy,
    title: '10+ tahun fokus pada home care',
    body: 'Sejak 2016 kami buat satu benda je: bantu family Malaysia jaga orang tersayang di rumah. Bukan kerja sambilan kedai perabot — ni la kerja harian kami, untuk lebih 5,000 family setakat ni.'
  },
  {
    Icon: DollarSign,
    title: 'Sewa dulu, decide kemudian',
    body: 'Mula dari RM150/bulan, no deposit. Kalau lepas tu rasa nak beli, semua bayaran sewa yang dah bayar tu kami tolak dari harga beli. Plus ansuran 0% sampai 12 bulan untuk model elektrik.'
  },
  {
    Icon: Bolt,
    title: 'Hantar laju seluruh Malaysia',
    body: 'Order before 2 petang, kami setup dalam 4 jam untuk KL, Selangor, Putrajaya. Sabah, Sarawak, Labuan dan negeri lain — biasanya 1–3 hari kerja, dengan tracking penghantaran.'
  },
  {
    Icon: Phone,
    title: 'Support sebenar, walaupun pukul 2 pagi',
    body: 'Katil rosak tengah malam? Pesakit tersangkut posisi awkward? Talian kecemasan kami buka 24/7 — termasuk Raya, CNY, Deepavali. Kami akan hantar orang sampai ke rumah.'
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
    <section className="py-16 sm:py-24">
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

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
