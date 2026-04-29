import { MessageSquare, Star, StarOutline } from './Icon';

type Review = {
  name: string;
  role: string;
  rating: number;
  body: string;
};

const reviews: Review[] = [
  {
    name: 'Puan Aishah',
    role: 'Daughter of stroke patient • Shah Alam',
    rating: 5,
    body: 'My mum had a stroke last month. Ordered at 10am, the bed was delivered and installed by 2pm. The crew showed me how to operate it. Mum can now sit up to eat properly, and I don\'t have to keep lifting her — saves my back too.'
  },
  {
    name: 'Encik Tan',
    role: 'Caring for his wife • Petaling Jaya',
    rating: 5,
    body: 'Worth every ringgit. Rented an electric bed for my wife who\'s going through cancer treatment. So much easier for her to sit up, and feeding her takes half the time. Quick service, honest pricing — no surprise charges later.'
  },
  {
    name: 'Cikgu Faridah',
    role: 'Daughter of elderly father • Kajang',
    rating: 5,
    body: 'My 82-year-old father once fell off a regular bed. After switching to a hospital bed with side rails, alhamdulillah he sleeps soundly and feels safer. The whole family is at ease now.'
  },
  {
    name: 'Mr. Arvind',
    role: 'Post-surgery patient • Klang',
    rating: 5,
    body: 'Recovery was so much smoother because I could adjust the bed to whatever position felt comfortable. Even my doctor was impressed. The team was patient and walked me through everything. Highly recommended!'
  },
  {
    name: 'Puan Norliza',
    role: 'Caring for her mother • Seremban',
    rating: 5,
    body: 'Started with a 2-month rental, then decided to just buy it. The rental I\'d already paid was deducted from the purchase price — so fair. The mattress came with it too, didn\'t need to hunt around. Clean, neat, looked brand new.'
  }
];

function Stars({ count }: { count: number }) {
  return (
    <span className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: 5 }, (_, i) =>
        i < count ? <Star key={i} size={16} /> : <StarOutline key={i} size={16} />
      )}
    </span>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <MessageSquare size={14} /> What families say
          </span>
          <h2 className="section-title mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1">
              4.9 <Star size={28} className="text-amber-500" />
            </span>
            <span>across 500+ genuine Google reviews</span>
          </h2>
          <p className="section-sub">
            Real Malaysian families, real situations — from strokes in Shah Alam, to post-surgery
            recovery in Klang, to looking after elderly parents in Kajang. Here&apos;s what they had
            to say:
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="rounded-2xl bg-white border border-slate-100 p-6 shadow-soft flex flex-col"
            >
              <Stars count={r.rating} />
              <p className="mt-3 text-slate-700 text-sm leading-relaxed flex-1">"{r.body}"</p>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900">{r.name}</div>
                <div className="text-xs text-slate-500">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
