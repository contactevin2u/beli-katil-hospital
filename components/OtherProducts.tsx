import { waLink, telLink, site } from '@/lib/site';
import { ImagePlaceholder } from './ImagePlaceholder';
import {
  Wind,
  Droplet,
  Bed,
  Accessibility,
  Sparkles,
  Check,
  Moon,
  Activity,
  WhatsApp,
  Phone
} from './Icon';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const cpapFeatures = [
  'Mask, tubing & humidifier termasuk',
  'AutoCPAP & BiPAP tersedia',
  'Set-up + latihan guna PERCUMA di rumah',
  'Servis & sokongan teknikal 24/7',
  'Sewa dulu, beli kemudian — bayaran sewa ditolak'
];

const cpapSigns = [
  { Icon: Moon as IconType, label: 'Berdengkur kuat tiap malam' },
  { Icon: Activity as IconType, label: 'Tersedu / tercungap waktu tidur' },
  { Icon: Wind as IconType, label: 'Letih siang walaupun cukup tidur' }
];

type OtherItem = {
  Icon: IconType;
  title: string;
  desc: string;
  price: string;
  waMessage: string;
};

const otherItems: OtherItem[] = [
  {
    Icon: Droplet,
    title: 'Mesin Oksigen',
    desc: '5L/min & 10L/min — COPD, post-Covid, kanser',
    price: 'Sewa dari RM350/bulan',
    waMessage: 'Hai, saya nak tanya pasal mesin oksigen. Boleh terangkan lebih lanjut?'
  },
  {
    Icon: Bed,
    title: 'Tilam Anti-Lubang Baring',
    desc: 'Tilam udara + pump untuk pesakit terlantar',
    price: 'Sewa dari RM120/bulan',
    waMessage: 'Hai, saya nak tanya pasal tilam anti-lubang baring (air mattress). Boleh terangkan lebih lanjut?'
  },
  {
    Icon: Accessibility,
    title: 'Kerusi Roda & Walker',
    desc: 'Standard, electric & walker recovery',
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
          <h2 className="section-title mt-3">
            Bukan Sekadar Katil — Kami <span className="text-brand-700">Pakar CPAP</span> Juga
          </h2>
          <p className="section-sub">
            CPAP & BiPAP machine untuk pesakit sleep apnea, plus peralatan perubatan rumah lain.
            Pakej servis, penghantaran & sokongan yang sama dengan katil.
          </p>
        </div>

        <article className="mt-10 rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-soft grid lg:grid-cols-5">
          <div className="lg:col-span-3 p-6 sm:p-10 flex flex-col">
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                <Wind size={30} />
              </span>
              <div>
                <span className="inline-block bg-accent-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Baharu
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  CPAP / BiPAP Machine
                </h3>
              </div>
            </div>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Untuk pesakit <strong>Sleep Apnea (OSA)</strong> dan gangguan pernafasan ketika
              tidur. Mesin CPAP bantu pernafasan stabil sepanjang malam — kurangkan dengkur, naikkan
              kualiti tidur dan elak komplikasi jantung jangka panjang.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-5">
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Tanda-tanda anda perlukan CPAP
              </div>
              <div className="mt-3 grid sm:grid-cols-3 gap-3">
                {cpapSigns.map(({ Icon, label }) => (
                  <div key={label} className="flex items-start gap-2">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-brand-700 border border-slate-100">
                      <Icon size={16} />
                    </span>
                    <span className="text-xs text-slate-700 leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <ul className="mt-6 grid sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-700">
              {cpapFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent-500" /> {f}
                </li>
              ))}
            </ul>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-brand-50 p-4">
                <div className="text-xs text-slate-500">Sewa</div>
                <div className="text-xl font-extrabold text-brand-700">RM250/bulan</div>
                <div className="text-xs text-slate-500 mt-0.5">Termasuk mask & humidifier</div>
              </div>
              <div className="rounded-xl bg-emerald-50 p-4">
                <div className="text-xs text-slate-500">Beli</div>
                <div className="text-xl font-extrabold text-accent-600">Mulai RM2,499</div>
                <div className="text-xs text-slate-500 mt-0.5">Ansuran 0% sehingga 12 bulan</div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink('Hai, saya nak konsultasi percuma pasal CPAP / BiPAP machine. Boleh bantu?')}
                target="_blank"
                rel="noopener"
                className="btn-primary text-sm"
              >
                <WhatsApp size={18} />
                Konsultasi CPAP Percuma
              </a>
              <a href={telLink} className="btn-secondary text-sm">
                <Phone size={16} /> Tel: {site.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 relative bg-gradient-to-br from-brand-600 to-brand-800 text-white p-6 sm:p-10 flex flex-col justify-between">
            <ImagePlaceholder
              label="CPAP Machine"
              note="cpap-machine.jpg • 800x800"
              className="aspect-square rounded-2xl !bg-white/10 !border-white/20 !text-white/60 mb-6"
            />
            <div className="space-y-4">
              <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                <div className="text-xs uppercase tracking-wide text-brand-100">
                  Trial percuma
                </div>
                <div className="font-bold text-white mt-1">
                  Cuba CPAP 7 hari di rumah
                </div>
                <div className="text-xs text-brand-100 mt-1">
                  Tak selesa? Pulangkan, tiada penalti.
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                <div className="text-xs uppercase tracking-wide text-brand-100">
                  Brand yang kami bekal
                </div>
                <div className="font-bold text-white mt-1">
                  ResMed • Philips • BMC • Yuwell
                </div>
                <div className="text-xs text-brand-100 mt-1">
                  Semua unit asli & berdaftar MDA.
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12">
          <div className="flex items-end justify-between flex-wrap gap-2">
            <h3 className="text-lg font-bold text-slate-900">Kami juga sedia ada</h3>
            <a
              href={waLink('Hai, saya nak tanya pasal peralatan perubatan rumah selain katil. Boleh bantu?')}
              target="_blank"
              rel="noopener"
              className="text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Tanya peralatan lain →
            </a>
          </div>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            {otherItems.map(({ Icon, title, desc, price, waMessage }) => (
              <a
                key={title}
                href={waLink(waMessage)}
                target="_blank"
                rel="noopener"
                className="group rounded-2xl bg-white border border-slate-100 p-5 hover:border-brand-300 hover:shadow-soft transition flex items-start gap-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-100 transition">
                  <Icon size={20} />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-slate-900 text-sm">{title}</div>
                  <div className="text-xs text-slate-500 mt-0.5 line-clamp-2">{desc}</div>
                  <div className="text-xs font-semibold text-accent-600 mt-1.5">{price}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
