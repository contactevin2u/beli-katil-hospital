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
    role: 'Anak pesakit strok • Shah Alam',
    rating: 5,
    body: 'Mak saya kena strok bulan lepas. Order pukul 10 pagi, pukul 2 petang dah sampai dan dah pasang. Crew tunjuk saya cara guna remote semua. Mak senang nak duduk untuk makan, dan saya pun tak penat angkat-angkat dia sampai sakit pinggang.'
  },
  {
    name: 'Encik Tan',
    role: 'Penjaga isteri • Petaling Jaya',
    rating: 5,
    body: 'Berbaloi sangat. Sewa katil elektrik untuk isteri yang tengah dalam rawatan kanser. Senang dia naik-turun, suap makan pun jadi cepat. Service quick, harga jujur — tak ada caj tersorok masuk bulan kedua.'
  },
  {
    name: 'Cikgu Faridah',
    role: 'Anak warga emas • Kajang',
    rating: 5,
    body: 'Ayah saya 82 tahun pernah jatuh dari katil biasa. Lepas tukar ke katil hospital ada side rail, alhamdulillah dia rasa lebih selamat dan tidur pun lena. Whole family sekarang dah lega sikit.'
  },
  {
    name: 'Mr. Arvind',
    role: 'Pesakit lepas operation • Klang',
    rating: 5,
    body: 'Recovery jadi lagi senang sebab boleh adjust katil ikut posisi yang selesa. Doktor pun puji bila datang follow-up. Crew sangat patient masa explain semua function. Highly recommended.'
  },
  {
    name: 'Puan Norliza',
    role: 'Penjaga ibu • Seremban',
    rating: 5,
    body: 'Mula-mula sewa untuk 2 bulan, lepas tu decide nak beli terus. Bayaran sewa tu memang ditolak dari harga beli — fair betul. Tilam pun dah dapat sekali, tak payah cari sendiri. Bersih, kemas, macam baru.'
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
            <MessageSquare size={14} /> Apa kata family
          </span>
          <h2 className="section-title mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1">
              4.9 <Star size={28} className="text-amber-500" />
            </span>
            <span>dari 500+ ulasan Google sebenar</span>
          </h2>
          <p className="section-sub">
            Family Malaysia sebenar, situasi sebenar — dari strok di Shah Alam, recovery lepas
            operation di Klang, sampai jaga warga emas di Kajang. Inilah pengalaman mereka:
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
