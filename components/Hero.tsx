import Image from 'next/image';
import { site, waLink, telLink } from '@/lib/site';
import { Clock, CheckCircle, Wrench, Hospital, Phone, WhatsApp, Bolt, StarOutline, Star } from './Icon';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const badges: { Icon: IconType; label: string }[] = [
  { Icon: Clock, label: 'Same-day setup' },
  { Icon: CheckCircle, label: 'No deposit' },
  { Icon: Wrench, label: 'Free installation' },
  { Icon: Hospital, label: 'MDA-registered' }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="container-x py-12 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="pill">
            <StarOutline size={14} /> 5,000+ Malaysian families served since 2016
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
            <span className="text-brand-700">Hospital Bed Malaysia</span> — Made for Real Home Care
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl">
            Looking for a katil hospital for your parents, post-surgery recovery, or long-term home
            care? We help families across Malaysia find the right bed — without the showroom
            run-around. <strong>Rent from RM150/month</strong> or <strong>buy from RM799</strong>.
            Same-day setup in Klang Valley, no deposit, no hidden fees.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href={waLink()} target="_blank" rel="noopener" className="btn-primary text-base">
              <WhatsApp size={18} />
              Chat with us on WhatsApp
            </a>
            <a href={telLink} className="btn-secondary text-base">
              <Phone size={18} /> Call {site.phone}
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {badges.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-xl bg-white border border-slate-100 px-3 py-2 shadow-soft">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-semibold text-slate-700">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-300 to-brand-600 border-2 border-white" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={14} />
                ))}
                <span className="ml-1 text-slate-700 font-semibold">4.9/5</span>
              </div>
              <div className="text-xs">500+ Google reviews • Real Malaysian families</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] rounded-3xl shadow-soft overflow-hidden">
            <Image
              src="/images/hero-katil.png"
              alt="Adjustable hospital bed (katil hospital) set up in a Malaysian home bedroom, headrest raised for mealtime"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_65%]"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-soft p-4 border border-slate-100 hidden sm:block">
            <div className="text-xs text-slate-500">This month's bundle</div>
            <div className="font-bold text-slate-900">Rent from RM150/month</div>
            <div className="text-xs text-accent-600 font-semibold">IV pole + bed table thrown in free</div>
          </div>
          <div className="absolute -top-4 -right-2 bg-accent-500 text-white rounded-full px-4 py-2 text-sm font-bold shadow-soft hidden sm:flex items-center gap-1.5">
            Ready by tonight <Bolt size={14} />
          </div>
        </div>
      </div>
    </section>
  );
}
