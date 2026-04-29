import { Trophy, DollarSign, Bolt, Phone, Wrench, RefreshCw, StarOutline } from './Icon';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const reasons: { Icon: IconType; title: string; body: string }[] = [
  {
    Icon: Trophy,
    title: 'A decade of focusing on home care',
    body: 'Since 2016 we\'ve done one thing: helping Malaysian families care for their loved ones at home. Not a side hustle for a furniture shop — this is what we do every day, for over 5,000 families.'
  },
  {
    Icon: DollarSign,
    title: 'Rent now, decide later — payments count',
    body: 'Start from RM150/month with zero deposit. If you decide later that owning the bed makes more sense, every ringgit you\'ve paid goes towards the purchase. Plus 0% instalments up to 12 months on electric models.'
  },
  {
    Icon: Bolt,
    title: '4 hours in Klang Valley, 1–3 days nationwide',
    body: 'Order before 2pm and we\'ll set up the bed within four hours across KL, Selangor and Putrajaya. For Sabah, Sarawak, Labuan and the rest of the peninsula, expect 1–3 working days with live tracking.'
  },
  {
    Icon: Phone,
    title: 'Real support, even at 2am',
    body: 'Bed playing up in the middle of the night? Patient stuck in an awkward position? Our emergency line is open 24/7 — including Raya, Chinese New Year, Deepavali. We\'ll send someone out.'
  },
  {
    Icon: Wrench,
    title: 'We set it up. We show you the ropes.',
    body: 'Our crew assembles the bed, demonstrates the controls, and walks the caregiver through diaper changes, transfers and pressure-sore prevention. Nobody leaves the session feeling lost.'
  },
  {
    Icon: RefreshCw,
    title: 'Done with the bed? We\'ll take it back',
    body: 'When the time comes that you no longer need the bed, our trade-in scheme buys it back at a fair price — or swaps it for other equipment. No need to fight strangers on Mudah or Carousell.'
  }
];

export function WhyUs() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <StarOutline size={14} /> Why families choose us
          </span>
          <h2 className="section-title mt-3">
            What sets us apart from a regular medical equipment shop
          </h2>
          <p className="section-sub">
            Plenty of places in Malaysia will sell you a hospital bed. The difference: we live and
            breathe home care, not perabot. When your family needs help at the worst hour of the
            night — we're the ones picking up the phone.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ Icon, title, body }) => (
            <div key={title} className="rounded-2xl bg-white border border-slate-100 p-6 shadow-soft">
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
