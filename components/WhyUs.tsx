import { Trophy, DollarSign, Bolt, Phone, Wrench, RefreshCw, StarOutline } from './Icon';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const reasons: { Icon: IconType; title: string; body: string }[] = [
  {
    Icon: Trophy,
    title: '10+ Tahun Khusus Katil Hospital',
    body: 'Sejak 2016 kami fokus 100% pada penjagaan pesakit di rumah — bukan kedai perabot yang jual sekali sekala. 5,000+ keluarga Malaysia dah percayakan kami untuk situasi yang paling kritikal.'
  },
  {
    Icon: DollarSign,
    title: 'Sewa Dulu, Beli Kemudian (Bayaran Ditolak)',
    body: 'Tak komited. Sewa dari RM150/bulan — kalau dah selesa nak beli, bayaran sewa ditolak 100% dari harga beli. Ansuran 0% sehingga 12 bulan untuk model elektrik. Tiada deposit, tiada hidden fee.'
  },
  {
    Icon: Bolt,
    title: 'Hantar 4 Jam Lembah Klang, 1–3 Hari Seluruh Malaysia',
    body: 'Tempah sebelum 2 petang — kami pasang siap di rumah dalam 4 jam untuk KL, Selangor, Putrajaya. Sabah, Sarawak, Labuan & Semenanjung lain dalam 1–3 hari, dengan penjejakan penghantaran.'
  },
  {
    Icon: Phone,
    title: 'Sokongan Teknikal 24/7 Walaupun Cuti Umum',
    body: 'Katil rosak pukul 2 pagi? Pesakit tersangkut posisi? Talian kecemasan kami buka 24 jam, 7 hari seminggu. Pasukan teknikal sedia datang ke rumah, walaupun Hari Raya atau Tahun Baru Cina.'
  },
  {
    Icon: Wrench,
    title: 'Pasang & Latih Penjaga di Rumah PERCUMA',
    body: 'Kami pasang sendiri, demo cara naik-turun pesakit, ajar tukar lampin tanpa sakit belakang, dan tunjuk cara cegah lubang baring. Penjaga keluar dari sesi ini lebih yakin — bukan blur.'
  },
  {
    Icon: RefreshCw,
    title: 'Program Trade-In: Kami Beli Balik',
    body: 'Bila katil tak diperlukan lagi, kami beli balik dengan harga berpatutan atau tukar dengan model lain. Tak buang sia-sia, tak perlu cari pembeli sendiri di Mudah/Carousell.'
  }
];

export function WhyUs() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <StarOutline size={14} /> Kenapa Pilih Kami
          </span>
          <h2 className="section-title mt-3">
            Kenapa 5,000+ Keluarga Pilih BeliKatilHospital.my Berbanding Kedai Lain
          </h2>
          <p className="section-sub">
            Banyak kedai jual katil hospital di Malaysia. Beza kami: kami fokus 100% pada
            penjagaan pesakit di rumah, bukan jual perabot sebagai sampingan. Bila keluarga anda
            paling perlukan bantuan — kami yang akan jawab telefon.
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
