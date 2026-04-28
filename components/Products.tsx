import { waLink } from '@/lib/site';
import { ImagePlaceholder } from './ImagePlaceholder';

type Product = {
  id: string;
  name: string;
  tagline: string;
  rentPrice: string;
  buyPrice: string;
  features: string[];
  badge?: string;
  imageNote: string;
};

const products: Product[] = [
  {
    id: 'standard-2f',
    name: 'Standard 2-Function',
    tagline: 'Katil Manual untuk Penjagaan Asas',
    rentPrice: 'RM150/bulan',
    buyPrice: 'RM799',
    features: [
      'Sandaran kepala boleh laras',
      'Sandaran kaki boleh laras',
      'Pagar sisi keselamatan',
      'Roda berkunci',
      'Berat tanggungan: 200kg'
    ],
    imageNote: 'katil-2function.jpg • 800x600'
  },
  {
    id: 'flexi-3f',
    name: 'Flexi 3-Function',
    tagline: 'Paling Popular — Tinggi Boleh Laras',
    rentPrice: 'RM250/bulan',
    buyPrice: 'RM1,349',
    badge: 'Pilihan Terbaik',
    features: [
      'Sandaran kepala + kaki',
      'Ketinggian katil boleh laras',
      'Senang untuk penjaga',
      'Pagar sisi keselamatan',
      'Termasuk tilam ortopedik'
    ],
    imageNote: 'katil-3function.jpg • 800x600'
  },
  {
    id: 'ultra-electric',
    name: 'Ultra Electric 6-Function',
    tagline: 'Katil Elektrik Premium',
    rentPrice: 'RM715/bulan (ansuran)',
    buyPrice: 'RM5,500',
    features: [
      'Kawalan jauh elektrik penuh',
      '6 fungsi pelarasan',
      'Mod Trendelenburg',
      'Bateri sandaran kuasa',
      'Tilam pembendung lubang baring'
    ],
    imageNote: 'katil-elektrik.jpg • 800x600'
  }
];

export function Products() {
  return (
    <section id="produk" className="py-16 sm:py-24 bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">🛏️ Produk Kami</span>
          <h2 className="section-title mt-3">Pilih Katil Hospital yang Sesuai</h2>
          <p className="section-sub">
            Semua katil kami berkualiti gred hospital, lulus piawaian MDA. Pilihan untuk{' '}
            <strong>sewa</strong> atau <strong>beli</strong> — termasuk pemasangan & latihan
            penjaga PERCUMA.
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
              <ImagePlaceholder
                label={p.name}
                note={p.imageNote}
                className="aspect-[4/3]"
              />
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-brand-700 uppercase tracking-wide">
                  {p.tagline}
                </div>
                <h3 className="text-xl font-bold mt-1 text-slate-900">{p.name}</h3>

                <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                  <div className="rounded-xl bg-brand-50 p-3">
                    <div className="text-xs text-slate-500">Sewa</div>
                    <div className="font-bold text-brand-700">{p.rentPrice}</div>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-3">
                    <div className="text-xs text-slate-500">Beli</div>
                    <div className="font-bold text-accent-600">{p.buyPrice}</div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-600 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-accent-500">✓</span> {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Hai, saya berminat dengan katil ${p.name}. Boleh terangkan lebih lanjut?`)}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary mt-6 w-full !px-4 text-sm"
                >
                  Tanya di WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        <div id="sewa" className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 text-white p-8">
            <h3 className="text-2xl font-bold">💡 Sewa Dulu, Beli Kemudian</h3>
            <p className="mt-3 text-brand-100">
              Tak pasti perlu berapa lama? Sewa dulu — kalau dah selesa, bayaran sewa boleh ditolak
              dari harga beli. Tiada deposit, tiada caj tersembunyi.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-brand-100">
              <li>✓ Pemasangan & latihan penjaga PERCUMA</li>
              <li>✓ Servis & repair PERCUMA</li>
              <li>✓ Boleh batal bila-bila masa selepas 1 bulan</li>
            </ul>
          </div>
          <div id="beli" className="rounded-3xl bg-white border border-slate-100 p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-slate-900">🏷️ Beli Terus & Jimat Lebih</h3>
            <p className="mt-3 text-slate-600">
              Kalau kes panjang (lebih 6 bulan), beli terus lebih jimat. Kami tawarkan ansuran 0%
              sehingga 12 bulan untuk model elektrik.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-slate-700">
              <li>✓ Waranti 2 tahun</li>
              <li>✓ Program trade-in (kami beli balik)</li>
              <li>✓ Ansuran 0% sehingga 12 bulan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
