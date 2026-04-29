import Image from 'next/image';
import { site, waLink, telLink } from '@/lib/site';
import { Clock, CheckCircle, Wrench, Hospital, Phone, WhatsApp, Bolt, StarOutline, Star } from './Icon';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const badges: { Icon: IconType; label: string }[] = [
  { Icon: Clock, label: 'Hantar & pasang hari sama' },
  { Icon: CheckCircle, label: 'Tiada deposit' },
  { Icon: Wrench, label: 'Pasang free' },
  { Icon: Hospital, label: 'Daftar MDA' }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent-100 via-accent-50 to-white">
      <div className="container-x py-12 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="pill">
            <StarOutline size={14} /> Dipercayai 5,000+ keluarga Malaysia sejak 2016
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
            <span className="text-brand-700">Katil Hospital Malaysia</span>, Berkualiti & Berpatutan
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl">
            Cari hospital bed yang betul-betul sesuai untuk jaga ibu ayah, recovery lepas
            operation, atau pesakit terlantar? Kami bantu families seluruh Malaysia pilih katil
            yang berbaloi — <strong>sewa mulai RM150/bulan</strong> atau{' '}
            <strong>beli mulai RM799</strong>. Hantar laju, pasang sendiri di rumah, no deposit.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href={waLink()} target="_blank" rel="noopener" className="btn-primary text-base">
              <WhatsApp size={18} />
              WhatsApp kami
            </a>
            <a href={telLink} className="btn-secondary text-base">
              <Phone size={18} /> Tel: {site.phone}
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
              <div className="text-xs">500+ ulasan Google • Family Malaysia sebenar</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] rounded-3xl shadow-soft overflow-hidden">
            <Image
              src="/images/hero-katil.png"
              alt="Katil hospital boleh laras dipasang di bilik tidur rumah — sandaran kepala dinaikkan untuk waktu makan"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_65%]"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-soft p-4 border border-slate-100 hidden sm:block">
            <div className="text-xs text-slate-500">Pakej bulan ni</div>
            <div className="font-bold text-slate-900">Sewa mulai RM150/bulan</div>
            <div className="text-xs text-accent-600 font-semibold">+ tiang IV & meja makan FREE</div>
          </div>
          <div className="absolute -top-4 -right-2 bg-accent-500 text-white rounded-full px-4 py-2 text-sm font-bold shadow-soft hidden sm:flex items-center gap-1.5">
            Siap hari ni <Bolt size={14} />
          </div>
        </div>
      </div>
    </section>
  );
}
