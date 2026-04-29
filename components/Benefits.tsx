import { ShieldCheck, Bandage, Bone, Dumbbell, Soup, Sparkles, Heart } from './Icon';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const benefits: { Icon: IconType; title: string; body: string }[] = [
  {
    Icon: ShieldCheck,
    title: 'Lower risk of hospital-acquired infections',
    body: 'Studies put hospital-acquired infection rates in Southeast Asia at around 21.6%. Recovering at home — in a clean bed used only by your loved one — keeps that exposure right down.'
  },
  {
    Icon: Bandage,
    title: 'Prevent painful pressure sores',
    body: 'About 1 in 7 patients who stay in bed for more than two weeks develop bedsores. An air mattress and being repositioned every couple of hours can cut that risk by up to 80%.'
  },
  {
    Icon: Bone,
    title: 'Side rails to keep them from falling',
    body: 'Full-length safety rails are shown to reduce in-bed falls by up to 55% — a big deal for elderly parents, stroke patients and anyone with dementia.'
  },
  {
    Icon: Dumbbell,
    title: 'Easier on the caregiver\'s back',
    body: 'Adjustable bed height means no more bending over to change diapers, sponge-bathe or transfer. About 60% of long-term caregivers end up with back pain — this design helps prevent it.'
  },
  {
    Icon: Soup,
    title: 'Safer mealtimes',
    body: 'Tilting the headrest to 30–45° helps the patient swallow safely and reduces choking. That matters a lot for elderly and stroke patients, who are prone to aspiration pneumonia.'
  },
  {
    Icon: Sparkles,
    title: 'Daily care, made simpler',
    body: 'Bed baths, diaper changes, fresh sheets, gentle massages — all of it goes faster on a height-adjustable bed with locking wheels. One caregiver can handle it without breaking a sweat.'
  }
];

export function Benefits() {
  return (
    <section id="kelebihan" className="py-16 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <Heart size={14} /> Why it matters
          </span>
          <h2 className="section-title mt-3">A regular bed isn't really built for this</h2>
          <p className="section-sub">
            Most families only realise this after a fall, a bad bedsore, or a caregiver throwing
            out their back. A proper hospital bed (katil pesakit) at home prevents the small
            problems that quietly turn into big hospital bills:
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
