import { waLink } from '@/lib/site';
import { ImagePlaceholder } from './ImagePlaceholder';
import { UserCircle, Brain, Stethoscope, Accessibility, Hospital, HeartPulse, Bed, Pill, Users, Clock } from './Icon';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const personas: { Icon: IconType; label: string }[] = [
  { Icon: UserCircle, label: 'Warga emas' },
  { Icon: Brain, label: 'Pesakit strok' },
  { Icon: Stethoscope, label: 'Lepas operation' },
  { Icon: Accessibility, label: 'Lumpuh / limited mobility' },
  { Icon: Hospital, label: 'Baru discharge dari hospital' },
  { Icon: HeartPulse, label: 'Pesakit kanser' },
  { Icon: Bed, label: 'Terlantar jangka panjang' },
  { Icon: Pill, label: 'Penyakit kronik' }
];

export function WhoNeeds() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="pill">
            <Users size={14} /> Sesuai untuk siapa
          </span>
          <h2 className="section-title mt-3">Siapa sebenarnya perlukan katil hospital di rumah?</h2>
          <p className="section-sub">
            Kalau ahli family anda dalam mana-mana keadaan ni, katil hospital di rumah boleh ubah
            penjagaan harian — dari penat & susah, jadi terurus. Untuk pesakit, dan untuk yang
            jaga mereka:
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {personas.map(({ Icon, label }) => (
              <div
                key={label}
                className="rounded-2xl bg-white border border-slate-100 p-4 text-center hover:border-brand-300 transition"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon size={24} />
                </div>
                <div className="text-sm font-semibold mt-3 text-slate-700">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-200 p-5">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <Clock size={18} /> Pesakit nak discharge esok?
            </div>
            <p className="text-sm text-amber-800 mt-1">
              Order before 2 petang, kami pasang siap di rumah <strong>hari yang sama</strong>{' '}
              untuk Klang Valley — sebelum pesakit sampai lagi. Team kami stand by 7 hari
              seminggu, termasuk weekend dan cuti umum, sebab kecemasan tak tunggu hari kerja.
            </p>
            <a
              href={waLink('Hai, ahli keluarga saya nak discharge dari hospital. Boleh tolong saya pilih katil yang sesuai?')}
              target="_blank"
              rel="noopener"
              className="btn-primary mt-4 text-sm"
            >
              Konsultasi free di WhatsApp
            </a>
          </div>
        </div>

        <ImagePlaceholder
          label="Penjagaan Pesakit di Rumah"
          note="penjagaan-rumah.jpg • 1000x1100"
          className="aspect-[10/11] rounded-3xl"
        />
      </div>
    </section>
  );
}
