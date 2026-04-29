import Image from 'next/image';
import { waLink, telLink, site } from '@/lib/site';
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
  'Mask, tubing & humidifier — semua included',
  'Pilihan AutoCPAP & BiPAP',
  'Setup & demo cara guna terus di rumah',
  'Servis & support teknikal 24/7',
  'Sewa dulu, beli kemudian — bayaran sewa ditolak dari harga beli'
];

const cpapSigns = [
  { Icon: Moon as IconType, label: 'Berdengkur kuat hampir tiap malam' },
  { Icon: Activity as IconType, label: 'Tersedu atau tercungap masa tidur' },
  { Icon: Wind as IconType, label: 'Letih siang walaupun tidur cukup' }
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
    title: 'Mesin Oksigen Rumah',
    desc: 'Concentrator 5L/min & 10L/min — untuk COPD, post-Covid, pesakit kanser',
    price: 'Sewa mulai RM350/bulan',
    waMessage: 'Hai, saya nak tanya pasal mesin oksigen. Boleh terangkan lebih lanjut?'
  },
  {
    Icon: Bed,
    title: 'Air Mattress Anti-Bedsore',
    desc: 'Tilam udara + pump untuk pesakit terlantar lama',
    price: 'Sewa mulai RM120/bulan',
    waMessage: 'Hai, saya nak tanya pasal air mattress anti-bedsore. Boleh terangkan lebih lanjut?'
  },
  {
    Icon: Accessibility,
    title: 'Kerusi Roda & Walker',
    desc: 'Wheelchair manual/elektrik & walker untuk recovery lepas operation',
    price: 'Sewa mulai RM80/bulan',
    waMessage: 'Hai, saya nak tanya pasal kerusi roda & walker. Boleh terangkan lebih lanjut?'
  }
];

export function OtherProducts() {
  return (
    <section
      id="peralatan-lain"
      className="py-16 sm:py-24 bg-gradient-to-br from-brand-50 via-white to-green-50"
    >
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <Sparkles size={14} /> Peralatan jaga di rumah
          </span>
          <h2 className="section-title mt-3">
            Bukan setakat katil — <span className="text-brand-700">CPAP, oksigen</span> & lain-lain
          </h2>
          <p className="section-sub">
            Most family perlukan lebih daripada katil je. Kami satu tempat untuk peralatan jaga
            di rumah di Malaysia: mesin CPAP & BiPAP untuk sleep apnea, mesin oksigen, air
            mattress, kerusi roda, walker — sama level service, sama support, sama standard.
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
                  Mesin CPAP & BiPAP
                </h3>
              </div>
            </div>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Untuk pesakit <strong>Sleep Apnea (OSA)</strong> atau yang ada masalah pernafasan
              masa tidur. CPAP ni bagi airflow stable sepanjang malam — bukan setakat hentikan
              dengkur, tapi reduce risiko jangka panjang macam darah tinggi, sakit jantung dan
              strok.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-5">
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Tanda anda atau family perlukan CPAP
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
              <div className="rounded-xl bg-green-50 p-4">
                <div className="text-xs text-slate-500">Beli</div>
                <div className="text-xl font-extrabold text-accent-600">Mulai RM2,499</div>
                <div className="text-xs text-slate-500 mt-0.5">Ansuran 0% sampai 12 bulan</div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink('Hai, saya nak konsultasi free pasal mesin CPAP/BiPAP. Boleh bantu?')}
                target="_blank"
                rel="noopener"
                className="btn-primary text-sm"
              >
                <WhatsApp size={18} />
                Konsultasi CPAP free
              </a>
              <a href={telLink} className="btn-secondary text-sm">
                <Phone size={16} /> Tel: {site.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 relative bg-gradient-to-br from-brand-600 to-brand-800 text-white p-6 sm:p-10 flex flex-col justify-between">
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-soft ring-1 ring-white/15">
              <Image
                src="/images/cpap-machine.png"
                alt="Mesin CPAP ResMed AirStart 10 di atas meja sebelah katil"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                <div className="text-xs uppercase tracking-wide text-brand-100">
                  Trial free
                </div>
                <div className="font-bold text-white mt-1">
                  Cuba CPAP 7 hari di rumah
                </div>
                <div className="text-xs text-brand-100 mt-1">
                  Tak sesuai? Pulangkan, tiada penalti.
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
                  Semua unit asli & daftar MDA Malaysia.
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12">
          <div className="flex items-end justify-between flex-wrap gap-2">
            <h3 className="text-lg font-bold text-slate-900">Peralatan jaga di rumah lain</h3>
            <a
              href={waLink('Hai, saya nak tanya pasal peralatan jaga di rumah lain selain katil. Boleh bantu?')}
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
