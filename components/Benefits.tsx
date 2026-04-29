import { ShieldCheck, Bandage, Bone, Dumbbell, Soup, Sparkles, Heart } from './Icon';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const benefits: { Icon: IconType; title: string; body: string }[] = [
  {
    Icon: ShieldCheck,
    title: 'Kurangkan Risiko Jangkitan Hospital (HAI)',
    body: 'Sehingga 21.6% pesakit di Asia Tenggara dijangkiti Hospital-Acquired Infections semasa rawatan. Penjagaan di rumah dengan katil hospital sendiri kurangkan pendedahan ini secara drastik.'
  },
  {
    Icon: Bandage,
    title: 'Cegah Lubang Baring (Pressure Ulcer)',
    body: '1 dari 7 pesakit terlantar lebih 2 minggu akan dapat lubang baring. Tilam udara + pelarasan posisi setiap 2 jam pada katil hospital kurangkan risiko ini sehingga 80%.'
  },
  {
    Icon: Bone,
    title: 'Cegah Jatuh dengan Pagar Sisi (Side Rail)',
    body: 'Side rail penuh pada katil hospital terbukti kurangkan kejadian jatuh dari katil sehingga 55% — kritikal untuk warga emas, pesakit strok dan pesakit nyanyuk (dementia).'
  },
  {
    Icon: Dumbbell,
    title: 'Selamatkan Belakang Penjaga (Caregiver)',
    body: 'Tinggi katil boleh dilaras = penjaga tak perlu membongkok untuk tukar lampin, mandi atau pemindahan. Elak slipped disc dan sakit pinggang kronik yang melanda 60% penjaga jangka panjang.'
  },
  {
    Icon: Soup,
    title: 'Suapan & Minum Lebih Selamat',
    body: 'Sandaran kepala 30°–45° elakkan tersedak dan aspirasi — punca utama radang paru-paru (aspiration pneumonia) dalam kalangan pesakit warga emas dan pesakit strok.'
  },
  {
    Icon: Sparkles,
    title: 'Permudahkan Rutin Penjagaan Harian',
    body: 'Mandi katil, tukar lampin pakai-buang, ganti cadar dan urut anggota — semua jadi 3× lebih cepat dengan permukaan yang boleh laras dan roda berkunci. Satu orang penjaga pun mampu.'
  }
];

export function Benefits() {
  return (
    <section id="kelebihan" className="py-16 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <Heart size={14} /> Kenapa Beli Katil Hospital
          </span>
          <h2 className="section-title mt-3">6 Sebab Katil Hospital Lebih Selamat Daripada Katil Biasa</h2>
          <p className="section-sub">
            Katil biasa tak direka untuk pesakit. Katil hospital di rumah elak komplikasi yang
            ramai keluarga tak sedar — daripada lubang baring sehingga sakit belakang penjaga.
            Berikut bukti kenapa ia satu pelaburan, bukan kos.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-100 bg-white p-6 hover:shadow-soft transition"
            >
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
