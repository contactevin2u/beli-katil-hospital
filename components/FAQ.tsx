import { HelpCircle } from './Icon';

type QA = { q: string; a: string };

export const faqs: QA[] = [
  {
    q: 'How much does a hospital bed cost in Malaysia?',
    a: 'Prices depend on what the bed can do. To buy: a manual 2-function bed starts at RM799, a 3-function bed (with adjustable height) starts at RM1,349, and a fully electric 6-function bed starts at RM5,500. To rent: from RM150/month with no deposit. All prices include free home delivery, setup, and a walkthrough for whoever will be using the bed.'
  },
  {
    q: 'How much is monthly rental for a hospital bed?',
    a: 'Monthly rental starts at RM150 (manual 2-function), RM250 (3-function — our most popular pick), and RM715 (electric 6-function). No deposit, no long lock-in, no surprise charges. If your family decides later to keep the bed, every ringgit you\'ve paid in rent goes towards the purchase price.'
  },
  {
    q: 'What\'s the difference between 2-function, 3-function and electric 6-function beds?',
    a: 'A 2-function manual bed lets you tilt the head and feet — fine for lighter recovery. A 3-function bed adds height adjustment, which honestly makes a huge difference for the caregiver\'s back. The electric 6-function bed is fully motorised with a remote, has a Trendelenburg setting for emergencies, comes with a battery backup for power cuts, and usually ships with an air mattress for long-term bed care.'
  },
  {
    q: 'Which bed is best for elderly parents?',
    a: 'If your parents can still get up and move around on their own, a 2-function or 3-function bed is enough — the key thing is having proper side rails to prevent falls. For elderly with stroke, advanced dementia, or anyone bedridden long-term, we usually recommend the electric 6-function with an air mattress to keep pressure sores from forming.'
  },
  {
    q: 'How fast can you deliver to my home?',
    a: 'Across Klang Valley (KL, Selangor, Putrajaya), we set up at your home within 4 hours of confirming the order — as long as you book before 2pm. Other states in Peninsular Malaysia are usually 1–3 working days. Sabah, Sarawak and W.P. Labuan take about 2–5 working days. We\'ll WhatsApp you the exact slot once everything\'s confirmed.'
  },
  {
    q: 'Do you charge extra for installation?',
    a: 'Nope, installation is on us. Our team comes to your home, assembles the bed, tests every function, and walks the caregiver through how to use it. Nobody leaves until the family feels confident. No hidden surcharges, no separate "service fee" — what you see in the quote is what you pay.'
  },
  {
    q: 'Can I rent first and buy later?',
    a: 'Absolutely — that\'s our most popular arrangement. Start with a monthly rental, no commitment. If after a few months you decide the bed is worth keeping, 100% of the rent you\'ve already paid is deducted from the purchase price. No fee to switch, no fine print.'
  },
  {
    q: 'Are 0% instalments available for buying?',
    a: 'Yes. For electric beds, we offer 0% instalments up to 12 months through major Malaysian credit cards (Maybank, CIMB, Public Bank and others) — no processing fees. Approval usually comes through in minutes, all over WhatsApp.'
  },
  {
    q: 'Can I just buy a second-hand hospital bed instead?',
    a: 'We\'d gently steer you away from buying used beds off Mudah, Carousell or Facebook Marketplace — there\'s no way to verify what\'s been on it, parts wear out, and there\'s no warranty if something fails. Renting from us is often cheaper anyway, and every bed is inspected, deep-cleaned with hospital-grade disinfectant, and fully covered.'
  },
  {
    q: 'What happens when we don\'t need the bed anymore?',
    a: 'If you\'re renting, just WhatsApp us to cancel — we\'ll arrange collection with no penalty (after the first month). If you bought it, we\'ll buy it back through our trade-in scheme at a fair price, or swap it for other equipment like a wheelchair, walker or oxygen machine. Nothing goes to waste.'
  },
  {
    q: 'Are these beds actually safe and certified?',
    a: 'Yes. Every bed is registered under the Medical Device Act 2012 (Act 737) by MDA Malaysia — registration number GA9817222-107721, advertising approval MDAMD 0127/2025. Each unit is inspected and sanitised before it leaves our warehouse, and the frame is covered by a 2-year warranty.'
  },
  {
    q: 'Can I claim this from insurance or my company medical card?',
    a: 'Some health insurance policies and corporate medical cards do cover home medical equipment — particularly after surgery or extended hospital stays. We\'ll provide an official invoice with our MDA registration number so you can submit it to your insurer or HR department.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <HelpCircle size={14} /> Frequently asked
          </span>
          <h2 className="section-title mt-3">The questions we get asked the most</h2>
          <p className="section-sub">
            From pricing to returns — straight, honest answers to the things Malaysian families
            usually ask before they decide to buy or rent a hospital bed.
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto divide-y divide-slate-100 rounded-3xl bg-white border border-slate-100 shadow-soft">
          {faqs.map((qa, i) => (
            <details key={i} className="group p-6 open:bg-slate-50/50">
              <summary className="cursor-pointer flex items-start justify-between gap-4 font-semibold text-slate-900">
                <span>{qa.q}</span>
                <span className="text-brand-700 group-open:rotate-45 transition shrink-0 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">{qa.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
