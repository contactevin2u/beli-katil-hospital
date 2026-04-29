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
  'Mask, tubing and humidifier — all included',
  'AutoCPAP and BiPAP options available',
  'Setup and how-to walkthrough at your home',
  'Servicing and tech support around the clock',
  'Rent first, buy later — rental payments count towards purchase'
];

const cpapSigns = [
  { Icon: Moon as IconType, label: 'Heavy snoring most nights' },
  { Icon: Activity as IconType, label: 'Choking or gasping while asleep' },
  { Icon: Wind as IconType, label: 'Tired all day even after a full night\'s sleep' }
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
    title: 'Home Oxygen Concentrator',
    desc: '5L/min and 10L/min units — for COPD, post-Covid, cancer patients',
    price: 'Rent from RM350/month',
    waMessage: 'Hi, I\'d like to ask about the oxygen machine. Can you share more details?'
  },
  {
    Icon: Bed,
    title: 'Anti-Bedsore Air Mattress',
    desc: 'Alternating-pressure air mattress and pump for long-term bed care',
    price: 'Rent from RM120/month',
    waMessage: 'Hi, I\'d like to ask about the anti-bedsore air mattress. Can you tell me more?'
  },
  {
    Icon: Accessibility,
    title: 'Wheelchairs & Walkers',
    desc: 'Manual or electric wheelchairs and walkers for post-surgery mobility',
    price: 'Rent from RM80/month',
    waMessage: 'Hi, I\'d like to ask about wheelchairs and walkers. Can you tell me more?'
  }
];

export function OtherProducts() {
  return (
    <section
      id="peralatan-lain"
      className="py-16 sm:py-24 bg-gradient-to-br from-brand-50 via-white to-orange-50"
    >
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <Sparkles size={14} /> Home medical equipment
          </span>
          <h2 className="section-title mt-3">
            Beyond Beds — <span className="text-brand-700">CPAP, Oxygen</span> & Other Home Care Gear
          </h2>
          <p className="section-sub">
            Most families need more than just the bed. We're a one-stop shop for home medical
            equipment in Malaysia: CPAP and BiPAP machines for sleep apnea, oxygen concentrators,
            air mattresses, wheelchairs and walkers — same delivery, same support, same standards.
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
                  New
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  CPAP & BiPAP Machines
                </h3>
              </div>
            </div>

            <p className="mt-5 text-slate-600 leading-relaxed">
              For people with <strong>Sleep Apnea (OSA)</strong> or trouble breathing during sleep.
              A CPAP gives you steady airflow through the night — it's not just about stopping the
              snoring, but lowering long-term risks like high blood pressure, heart disease and
              stroke.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-5">
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Signs you (or someone at home) might need a CPAP
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
                <div className="text-xs text-slate-500">Rent</div>
                <div className="text-xl font-extrabold text-brand-700">RM250/month</div>
                <div className="text-xs text-slate-500 mt-0.5">Mask and humidifier included</div>
              </div>
              <div className="rounded-xl bg-orange-50 p-4">
                <div className="text-xs text-slate-500">Buy</div>
                <div className="text-xl font-extrabold text-accent-600">From RM2,499</div>
                <div className="text-xs text-slate-500 mt-0.5">0% instalments up to 12 months</div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink('Hi, I\'d like a free CPAP/BiPAP consultation. Can you help?')}
                target="_blank"
                rel="noopener"
                className="btn-primary text-sm"
              >
                <WhatsApp size={18} />
                Free CPAP consultation
              </a>
              <a href={telLink} className="btn-secondary text-sm">
                <Phone size={16} /> Call {site.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 relative bg-gradient-to-br from-brand-600 to-brand-800 text-white p-6 sm:p-10 flex flex-col justify-between">
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-soft ring-1 ring-white/15">
              <Image
                src="/images/cpap-machine.png"
                alt="ResMed AirStart 10 CPAP machine on a bedside table"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                <div className="text-xs uppercase tracking-wide text-brand-100">
                  Free home trial
                </div>
                <div className="font-bold text-white mt-1">
                  Try CPAP at home for 7 days
                </div>
                <div className="text-xs text-brand-100 mt-1">
                  Doesn't suit you? Send it back. No penalty.
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                <div className="text-xs uppercase tracking-wide text-brand-100">
                  Brands we carry
                </div>
                <div className="font-bold text-white mt-1">
                  ResMed • Philips • BMC • Yuwell
                </div>
                <div className="text-xs text-brand-100 mt-1">
                  All units genuine and registered with MDA Malaysia.
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12">
          <div className="flex items-end justify-between flex-wrap gap-2">
            <h3 className="text-lg font-bold text-slate-900">Other home medical equipment</h3>
            <a
              href={waLink('Hi, I\'d like to ask about other home medical equipment besides the bed. Can you help?')}
              target="_blank"
              rel="noopener"
              className="text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Ask about other equipment →
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
