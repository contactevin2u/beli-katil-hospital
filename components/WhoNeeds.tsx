import { waLink } from '@/lib/site';
import { ImagePlaceholder } from './ImagePlaceholder';
import { UserCircle, Brain, Stethoscope, Accessibility, Hospital, HeartPulse, Bed, Pill, Users, Clock } from './Icon';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const personas: { Icon: IconType; label: string }[] = [
  { Icon: UserCircle, label: 'Elderly parents' },
  { Icon: Brain, label: 'Stroke recovery' },
  { Icon: Stethoscope, label: 'Post-surgery' },
  { Icon: Accessibility, label: 'Paralysis or limited mobility' },
  { Icon: Hospital, label: 'Just discharged from hospital' },
  { Icon: HeartPulse, label: 'Cancer patients' },
  { Icon: Bed, label: 'Long-term bedridden' },
  { Icon: Pill, label: 'Chronic illness' }
];

export function WhoNeeds() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="pill">
            <Users size={14} /> Who this is for
          </span>
          <h2 className="section-title mt-3">Who actually needs a hospital bed at home?</h2>
          <p className="section-sub">
            If anyone in your family fits one of these situations, a proper bed at home turns
            daily care from a struggle into something manageable — for the patient and for whoever
            is looking after them:
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
              <Clock size={18} /> Patient getting discharged tomorrow?
            </div>
            <p className="text-sm text-amber-800 mt-1">
              Order by 2pm and we'll have the bed set up at your home <strong>the same day</strong>{' '}
              in Klang Valley — before the patient even arrives. We work seven days a week,
              including weekends and public holidays, sebab emergencies don't wait.
            </p>
            <a
              href={waLink('Hi, my family member is being discharged soon. Could you help me pick the right bed?')}
              target="_blank"
              rel="noopener"
              className="btn-primary mt-4 text-sm"
            >
              Free WhatsApp consultation
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
