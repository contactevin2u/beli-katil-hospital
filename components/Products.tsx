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
    tagline: 'Katil Hospital Manual 2-Fungsi',
    rentPrice: 'RM150/bulan',
    buyPrice: 'RM799',
    features: [
      'Sandaran kepala boleh laras (untuk makan & baca)',
      'Sandaran kaki boleh laras (lega untuk lutut)',
      'Pagar sisi penuh — cegah pesakit jatuh',
      'Roda berkunci — selamat & senang gerak',
      'Tahan beban sehingga 200kg'
    ],
    image: { src: '/images/katil-2-function.webp', width: 420, height: 420 }
  },
  {
    id: 'flexi-3f',
    name: 'Flexi 3-Function',
    tagline: 'Pilihan #1 — Katil Hospital 3-Fungsi Boleh Laras Tinggi',
    rentPrice: 'RM250/bulan',
    buyPrice: 'RM1,349',
    badge: 'Paling Laris',
    features: [
      'Sandaran kepala + kaki boleh laras',
      'Tinggi katil naik-turun (lindungi belakang penjaga)',
      'Pemindahan pesakit lebih mudah & selamat',
      'Pagar sisi keselamatan penuh',
      'PERCUMA tilam ortopedik anti-lubang baring'
    ],
    image: { src: '/images/katil-3-function.webp', width: 560, height: 560 }
  },
  {
    id: 'ultra-electric',
    name: 'Ultra Electric 6-Function',
    tagline: 'Katil Hospital Elektrik 6-Fungsi (Gred ICU)',
    rentPrice: 'RM715/bulan (ansuran)',
    buyPrice: 'RM5,500',
    features: [
      'Kawalan jauh — 1 butang, satu orang penjaga cukup',
      '6 fungsi pelarasan automatik',
      'Mod Trendelenburg (untuk kes kritikal)',
      'Bateri sandaran — tetap berfungsi waktu blackout',
      'Tilam udara anti-lubang baring (bedsore) disertakan'
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
            <Bed size={14} /> Pakej Katil Hospital
          </span>
          <h2 className="section-title mt-3">Harga Katil Hospital Malaysia — Pilih Ikut Tahap Penjagaan</h2>
          <p className="section-sub">
            Tiga pakej katil hospital, satu standard kualiti — gred hospital, berdaftar MDA.
            Daripada katil manual asas untuk pesakit ringan, sehingga katil elektrik 6-fungsi untuk
            pesakit terlantar berat. <strong>Sewa</strong> atau <strong>beli</strong> — pemasangan
            & latihan penjaga termasuk PERCUMA.
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
                    <div className="text-xs text-slate-500">Sewa</div>
                    <div className="font-bold text-brand-700">{p.rentPrice}</div>
                  </div>
                  <div className="rounded-xl bg-orange-50 p-3">
                    <div className="text-xs text-slate-500">Beli</div>
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
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
                <Lightbulb size={20} />
              </span>
              <h3 className="text-2xl font-bold">Sewa Katil Hospital Dulu, Beli Kemudian</h3>
            </div>
            <p className="mt-3 text-brand-100">
              Tak pasti pesakit perlu katil berapa lama? Sewa dulu — kalau lepas beberapa bulan
              keluarga rasa berbaloi nak miliki, <strong className="text-white">100% bayaran sewa
              ditolak dari harga beli</strong>. Tiada deposit, tiada caj tersembunyi, tiada lock-in.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-brand-100">
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0" /> Pemasangan + latihan penjaga di rumah PERCUMA</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0" /> Servis, baiki & tukar parts PERCUMA sepanjang sewa</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0" /> Boleh batal bila-bila masa lepas bulan pertama</li>
            </ul>
          </div>
          <div id="beli" className="rounded-3xl bg-white border border-slate-100 p-8 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 text-accent-600">
                <Tag size={20} />
              </span>
              <h3 className="text-2xl font-bold text-slate-900">Beli Katil Hospital Terus & Jimat Lebih</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Untuk kes jangka panjang (lebih 6 bulan) atau penjagaan kekal warga emas — beli terus
              lebih jimat berbanding sewa. Bayaran ansuran 0% sehingga 12 bulan untuk model elektrik,
              kelulusan dalam beberapa minit.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent-500" /> Waranti rangka 2 tahun, motor 1 tahun</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent-500" /> Program trade-in — kami beli balik bila tak guna</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent-500" /> Ansuran 0% sehingga 12 bulan (model elektrik)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
