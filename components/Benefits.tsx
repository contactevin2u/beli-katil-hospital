import { ShieldCheck, Bandage, Bone, Dumbbell, Soup, Sparkles, Heart } from './Icon';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const benefits: { Icon: IconType; title: string; body: string }[] = [
  {
    Icon: ShieldCheck,
    title: 'Elak Jangkitan Hospital (HAI)',
    body: '21.6% pesakit di Asia Tenggara dijangkiti HAI semasa di hospital. Penjagaan di rumah kurangkan risiko ini dengan ketara.'
  },
  {
    Icon: Bandage,
    title: 'Cegah Lubang Baring (Bedsores)',
    body: '1 dari 7 pesakit terlantar mengalami pressure ulcer. Tilam khas + pelarasan posisi mudahkan pencegahan.'
  },
  {
    Icon: Bone,
    title: 'Pagar Sisi Cegah Jatuh',
    body: 'Pagar sisi katil dapat kurangkan risiko jatuh sehingga 55% — sangat penting untuk warga emas & pesakit lemah.'
  },
  {
    Icon: Dumbbell,
    title: 'Lindungi Penjaga Daripada Sakit Belakang',
    body: 'Ketinggian katil yang boleh dilaras pastikan penjaga tak perlu membongkok — kurangkan risiko sakit pinggang.'
  },
  {
    Icon: Soup,
    title: 'Makan & Minum Selamat',
    body: 'Kepala dinaikkan 30°–45° kurangkan risiko tersedak dan masalah salur pernafasan (aspirasi).'
  },
  {
    Icon: Sparkles,
    title: 'Senang Mandi & Tukar Lampin',
    body: 'Permukaan boleh laras + roda berkunci memudahkan rutin penjagaan harian dengan satu orang penjaga.'
  }
];

export function Benefits() {
  return (
    <section id="kelebihan" className="py-16 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <Heart size={14} /> Kenapa Penting
          </span>
          <h2 className="section-title mt-3">Manfaat Katil Hospital di Rumah</h2>
          <p className="section-sub">
            Lebih daripada sekadar tempat tidur — katil hospital adalah pelaburan untuk
            keselamatan dan keselesaan orang tersayang.
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
