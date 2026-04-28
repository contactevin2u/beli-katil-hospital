import { waLink } from '@/lib/site';
import { Wind, Droplet, Bed, Accessibility, Sparkles } from './Icon';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

type Item = {
  Icon: IconType;
  title: string;
  desc: string;
  price: string;
  badge?: string;
  waMessage: string;
};

const items: Item[] = [
  {
    Icon: Wind,
    title: 'CPAP / BiPAP Machine',
    desc: 'Untuk pesakit sleep apnea & gangguan pernafasan ketika tidur. Termasuk mask, tubing & humidifier.',
    price: 'Sewa dari RM250/bulan',
    badge: 'Baharu',
    waMessage: 'Hai, saya nak tanya pasal CPAP / BiPAP machine. Boleh terangkan lebih lanjut?'
  },
  {
    Icon: Droplet,
    title: 'Mesin Oksigen (Oxygen Concentrator)',
    desc: '5L/min & 10L/min — sesuai untuk pesakit COPD, post-Covid, kanser dan pernafasan kronik.',
    price: 'Sewa dari RM350/bulan',
    waMessage: 'Hai, saya nak tanya pasal mesin oksigen. Boleh terangkan lebih lanjut?'
  },
  {
    Icon: Bed,
    title: 'Tilam Anti-Lubang Baring',
    desc: 'Tilam udara dengan pump elektrik untuk cegah pressure ulcer pada pesakit terlantar lama.',
    price: 'Sewa dari RM120/bulan',
    waMessage: 'Hai, saya nak tanya pasal tilam anti-lubang baring (air mattress). Boleh terangkan lebih lanjut?'
  },
  {
    Icon: Accessibility,
    title: 'Kerusi Roda & Walker',
    desc: 'Kerusi roda standard, electric, dan walker untuk recovery atau mobiliti harian.',
    price: 'Sewa dari RM80/bulan',
    waMessage: 'Hai, saya nak tanya pasal kerusi roda / walker. Boleh terangkan lebih lanjut?'
  }
];

export function OtherProducts() {
  return (
    <section
      id="peralatan-lain"
      className="py-16 sm:py-24 bg-gradient-to-br from-brand-50 via-white to-emerald-50"
    >
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <Sparkles size={14} /> Peralatan Tambahan
          </span>
          <h2 className="section-title mt-3">Bukan Sekadar Katil Hospital</h2>
          <p className="section-sub">
            Kami juga bekalkan <strong>CPAP, mesin oksigen, tilam khas, kerusi roda</strong> dan
            peralatan perubatan rumah yang lain — pakej servis, penghantaran & sokongan teknikal
            yang sama dengan katil.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ Icon, title, desc, price, badge, waMessage }) => (
            <article
              key={title}
              className="relative rounded-2xl bg-white border border-slate-100 p-6 shadow-soft hover:border-brand-300 transition flex flex-col"
            >
              {badge && (
                <span className="absolute top-4 right-4 bg-accent-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                  {badge}
                </span>
              )}
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{desc}</p>
              <div className="mt-4 text-sm font-bold text-accent-600">{price}</div>
              <a
                href={waLink(waMessage)}
                target="_blank"
                rel="noopener"
                className="mt-3 inline-flex items-center justify-center rounded-full border border-slate-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 text-slate-700 font-semibold px-4 py-2 text-xs transition"
              >
                Tanya di WhatsApp
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-white border border-slate-100 p-6 sm:p-8 shadow-soft flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900">
              Tak nampak yang anda perlukan?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              WhatsApp kami untuk tanya peralatan perubatan rumah yang lain — suction machine,
              nebulizer, hospital walker, commode chair dan banyak lagi. Kami boleh source untuk anda.
            </p>
          </div>
          <a
            href={waLink('Hai, saya nak tanya pasal peralatan perubatan rumah selain katil. Boleh bantu?')}
            target="_blank"
            rel="noopener"
            className="btn-primary text-sm shrink-0"
          >
            Tanya Peralatan Lain
          </a>
        </div>
      </div>
    </section>
  );
}
