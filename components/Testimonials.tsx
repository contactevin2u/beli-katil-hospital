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
    body: 'Mak saya kena strok bulan lepas. Order pukul 10 pagi, pukul 2 petang dah sampai dan dipasang. Penjaga ajar saya cara guna. Mak senang nak duduk untuk makan dan saya pun tak penat angkat-angkat dia.'
  },
  {
    name: 'Encik Tan',
    role: 'Penjaga isteri • Petaling Jaya',
    rating: 5,
    body: 'Sangat berbaloi. Sewa katil elektrik untuk isteri yang sedang rawatan kanser. Senang dia naik turun, saya pun senang nak suap makan. Servis cepat, harga jujur — tiada caj tersembunyi.'
  },
  {
    name: 'Cikgu Faridah',
    role: 'Anak warga emas • Kajang',
    rating: 5,
    body: 'Ayah saya 82 tahun pernah jatuh dari katil biasa. Lepas tukar ke katil hospital ada side rail, alhamdulillah dia rasa lebih selamat dan tidur pun lena. Family kami sangat puas hati.'
  },
  {
    name: 'Mr. Arvind',
    role: 'Post-surgery patient • Klang',
    rating: 5,
    body: 'Recovery jadi lagi senang sebab boleh adjust katil ikut posisi yang selesa. Doktor pun puji. The team was very patient explaining everything. Highly recommended!'
  },
  {
    name: 'Puan Norliza',
    role: 'Penjaga ibu • Seremban',
    rating: 5,
    body: 'Mula-mula sewa untuk 2 bulan, then decide nak beli terus. Bayaran sewa tu ditolak dari harga beli. Fair betul! Tilam pun dah dapat — tak payah cari sendiri. Bersih, kemas, macam baru.'
  }
];

function Stars({ count }: { count: number }) {
  return <span className="text-amber-500">{'★'.repeat(count)}{'☆'.repeat(5 - count)}</span>;
}

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">💬 Kata Pelanggan</span>
          <h2 className="section-title mt-3">4.9★ daripada 500+ Ulasan Google</h2>
          <p className="section-sub">
            Apa kata keluarga yang pernah guna katil hospital daripada kami:
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
