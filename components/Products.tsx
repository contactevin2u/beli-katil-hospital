import Image from 'next/image';
import { waLink } from '@/lib/site';
import { Bed, Lightbulb, Tag, Check } from './Icon';

type Product = {
  id: string;
  name: string;
  tagline: string;
  rentPrice: string;
  buyPrice: string;
  features: string[];
  badge?: string;
  image: { src: string; width: number; height: number };
};

const products: Product[] = [
  {
    id: 'standard-2f',
    name: 'Standard 2-Function',
    tagline: 'Manual hospital bed — simple, solid, reliable',
    rentPrice: 'RM150/month',
    buyPrice: 'RM799',
    features: [
      'Headrest tilts up — easy for meals and reading',
      'Footrest lifts — takes pressure off the knees',
      'Full-length side rails to prevent falls',
      'Lockable wheels — move it, then keep it steady',
      'Holds up to 200kg, sturdy steel frame'
    ],
    image: { src: '/images/katil-2-function.webp', width: 420, height: 420 }
  },
  {
    id: 'flexi-3f',
    name: 'Flexi 3-Function',
    tagline: 'Most popular — adjustable height saves the caregiver\'s back',
    rentPrice: 'RM250/month',
    buyPrice: 'RM1,349',
    badge: 'Top pick',
    features: [
      'Tilts at head and feet, plus the whole bed goes up and down',
      'Caregivers can change diapers without bending — back saver',
      'Easier patient transfers (wheelchair to bed and back)',
      'Full safety side rails',
      'Orthopaedic anti-bedsore mattress included free'
    ],
    image: { src: '/images/katil-3-function.webp', width: 560, height: 560 }
  },
  {
    id: 'ultra-electric',
    name: 'Ultra Electric 6-Function',
    tagline: 'Fully motorised — for serious long-term bed care',
    rentPrice: 'RM715/month (instalment)',
    buyPrice: 'RM5,500',
    features: [
      'Remote control — one button, one caregiver, no struggle',
      'Six positions you can fine-tune for comfort',
      'Trendelenburg mode for medical emergencies',
      'Battery backup — keeps working through power cuts',
      'Comes with air mattress to prevent pressure ulcers'
    ],
    image: { src: '/images/katil-elektrik.webp', width: 420, height: 420 }
  }
];

export function Products() {
  return (
    <section id="produk" className="py-16 sm:py-24 bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <Bed size={14} /> Our beds
          </span>
          <h2 className="section-title mt-3">Three Beds. One Promise: Built for Home Care.</h2>
          <p className="section-sub">
            From a basic manual bed for light recovery, to a full electric bed for long-term
            patients — every model meets MDA medical-device standards. <strong>Rent</strong> or{' '}
            <strong>buy</strong>, with installation and caregiver training included on the house.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.id}
              className="relative bg-white rounded-3xl border border-slate-100 shadow-soft overflow-hidden flex flex-col"
            >
              {p.badge && (
                <div className="absolute top-4 right-4 z-10 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {p.badge}
                </div>
              )}
              <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 grid place-items-center p-6">
                <Image
                  src={p.image.src}
                  alt={p.name}
                  width={p.image.width}
                  height={p.image.height}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-brand-700 uppercase tracking-wide">
                  {p.tagline}
                </div>
                <h3 className="text-xl font-bold mt-1 text-slate-900">{p.name}</h3>

                <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                  <div className="rounded-xl bg-brand-50 p-3">
                    <div className="text-xs text-slate-500">Rent</div>
                    <div className="font-bold text-brand-700">{p.rentPrice}</div>
                  </div>
                  <div className="rounded-xl bg-orange-50 p-3">
                    <div className="text-xs text-slate-500">Buy</div>
                    <div className="font-bold text-accent-600">{p.buyPrice}</div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-600 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent-500" /> {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Hi, I'm keen on the ${p.name} bed. Could you tell me more?`)}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary mt-6 w-full !px-4 text-sm"
                >
                  Ask about this bed
                </a>
              </div>
            </article>
          ))}
        </div>

        <div id="sewa" className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 text-white p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
                <Lightbulb size={20} />
              </span>
              <h3 className="text-2xl font-bold">Try renting first. Buy when you're sure.</h3>
            </div>
            <p className="mt-3 text-brand-100">
              Not sure how long you'll need the bed? Start with a monthly rental — if your family
              decides to keep it later, <strong className="text-white">every ringgit you've paid in
              rent goes towards the purchase price</strong>. No deposit, no lock-in, no awkward
              cancellation charges.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-brand-100">
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0" /> Delivery, setup and caregiver walkthrough — included</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0" /> Servicing and replacement parts during rental — covered</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0" /> Cancel anytime after the first month, no penalty</li>
            </ul>
          </div>
          <div id="beli" className="rounded-3xl bg-white border border-slate-100 p-8 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 text-accent-600">
                <Tag size={20} />
              </span>
              <h3 className="text-2xl font-bold text-slate-900">Buy outright. Save more long-term.</h3>
            </div>
            <p className="mt-3 text-slate-600">
              For long-term cases — say six months or more, or full-time elderly care — owning the
              bed works out cheaper than renting. Spread the cost with 0% instalments up to 12
              months on electric models, approved in minutes over WhatsApp.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent-500" /> 2-year warranty on the frame, 1 year on the motor</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent-500" /> Trade-in scheme — we buy it back when you're done</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent-500" /> 0% instalments up to 12 months (electric models)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
