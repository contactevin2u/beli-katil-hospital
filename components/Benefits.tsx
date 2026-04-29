import { ShieldCheck, Bandage, Bone, Dumbbell, Soup, Sparkles, Heart } from './Icon';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const benefits: { Icon: IconType; title: string; body: string }[] = [
  {
    Icon: ShieldCheck,
    title: 'Kurangkan risiko jangkitan hospital',
    body: 'Kajian tunjuk sampai 21.6% pesakit di Asia Tenggara dapat hospital infection masa rawatan. Recover di rumah — dalam katil yang bersih dan guna oleh sorang je — exposure tu turun banyak.'
  },
  {
    Icon: Bandage,
    title: 'Cegah lubang baring (pressure sore)',
    body: 'Pesakit yang terlantar lebih 2 minggu, 1 dari 7 akan kena lubang baring. Air mattress + ubah posisi tiap 2 jam boleh cut risiko sampai 80%.'
  },
  {
    Icon: Bone,
    title: 'Side rail elak pesakit jatuh',
    body: 'Pagar sisi penuh terbukti reduce kes jatuh dari katil sampai 55% — sangat penting untuk warga emas, pesakit strok, atau yang ada dementia.'
  },
  {
    Icon: Dumbbell,
    title: 'Selamatkan belakang caregiver',
    body: 'Tinggi katil boleh adjust = penjaga tak payah membongkok lama-lama untuk tukar lampin atau transfer pesakit. Sekitar 60% caregiver jangka panjang mengalami sakit pinggang — design ni bantu elak.'
  },
  {
    Icon: Soup,
    title: 'Makan & minum lebih selamat',
    body: 'Sandaran kepala 30°–45° elak tersedak dan aspiration — punca utama radang paru-paru kalangan warga emas dan pesakit strok.'
  },
  {
    Icon: Sparkles,
    title: 'Routine harian jadi lagi senang',
    body: 'Mandi katil, tukar lampin, ganti cadar, urut — semua jadi 3x lebih cepat dengan katil yang boleh adjust dan roda berkunci. Sorang caregiver pun mampu handle.'
  }
];

export function Benefits() {
  return (
    <section id="kelebihan" className="py-16 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <Heart size={14} /> Kenapa penting
          </span>
          <h2 className="section-title mt-3">Katil biasa memang tak built untuk situasi macam ni</h2>
          <p className="section-sub">
            Banyak family baru perasan benda ni lepas pesakit jatuh, dah ada lubang baring, atau
            caregiver pulak yang sakit pinggang. Hospital bed di rumah elak masalah-masalah small
            yang boleh jadi besar — dan mahal:
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
