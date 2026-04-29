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
    tagline: 'Katil manual — simple, kemas, tahan lasak',
    rentPrice: 'RM150/bulan',
    buyPrice: 'RM799',
    features: [
      'Sandaran kepala boleh angkat — senang nak makan, baca, atau sembang',
      'Sandaran kaki boleh laras — lega untuk lutut bengkak',
      'Side rail penuh — elak pesakit jatuh',
      'Roda boleh kunci — gerak senang, dah letak diam',
      'Tahan beban sampai 200kg, rangka besi kukuh'
    ],
    image: { src: '/images/katil-2-function.webp', width: 420, height: 420 }
  },
  {
    id: 'flexi-3f',
    name: 'Flexi 3-Function',
    tagline: 'Paling laris — tinggi katil boleh adjust, jimatkan belakang caregiver',
    rentPrice: 'RM250/bulan',
    buyPrice: 'RM1,349',
    badge: 'Paling Laris',
    features: [
      'Sandaran kepala + kaki boleh angkat',
      'Tinggi katil naik-turun — penjaga tak payah membongkok',
      'Tukar lampin & transfer pesakit jadi senang',
      'Side rail keselamatan penuh',
      'FREE tilam ortopedik anti-bedsore'
    ],
    image: { src: '/images/katil-3-function.webp', width: 560, height: 560 }
  },
  {
    id: 'ultra-electric',
    name: 'Ultra Electric 6-Function',
    tagline: 'Full elektrik — sesuai untuk kes long-term & terlantar berat',
    rentPrice: 'RM715/bulan (ansuran)',
    buyPrice: 'RM5,500',
    features: [
      'Remote control — sorang caregiver pun boleh handle',
      '6 posisi yang boleh adjust ikut keselesaan pesakit',
      'Mod Trendelenburg untuk kes kecemasan',
      'Battery backup — masa blackout pun masih function',
      'Termasuk air mattress untuk elak lubang baring'
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
            <Bed size={14} /> Pilihan katil kami
          </span>
          <h2 className="section-title mt-3">Tiga katil — semua build untuk home care</h2>
          <p className="section-sub">
            Dari katil manual yang simple untuk recovery ringan, sampai katil elektrik full-motor
            untuk pesakit terlantar lama — semua model lulus standard MDA. Boleh <strong>sewa</strong>{' '}
            atau <strong>beli</strong>, dan kami pasang sendiri di rumah, sekali demo cara guna
            untuk caregiver. Semua free.
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
                  Tanya pasal katil ni
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
              <h3 className="text-2xl font-bold">Sewa dulu. Decide kemudian.</h3>
            </div>
            <p className="mt-3 text-brand-100">
              Tak sure berapa lama nak guna? Mula dengan sewa bulanan dulu — kalau lepas tu family
              rasa nak miliki, <strong className="text-white">100% bayaran sewa yang dah dibayar
              ditolak terus dari harga beli</strong>. Tiada deposit, tiada lock-in, tiada caj
              cancel yang menyusahkan.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-brand-100">
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0" /> Hantar, pasang & training caregiver — included</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0" /> Servis & tukar parts sepanjang sewa — covered</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0" /> Boleh batal lepas bulan pertama, no penalty</li>
            </ul>
          </div>
          <div id="beli" className="rounded-3xl bg-white border border-slate-100 p-8 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 text-accent-600">
                <Tag size={20} />
              </span>
              <h3 className="text-2xl font-bold text-slate-900">Beli terus. Lagi jimat for long-term.</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Untuk kes panjang — macam jaga ibu ayah jangka lama atau recovery 6 bulan ke atas —
              beli terus selalunya lagi berbaloi dari sewa. Boleh ansuran 0% sampai 12 bulan untuk
              model elektrik, approval keluar dalam beberapa minit terus dari WhatsApp.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent-500" /> Waranti rangka 2 tahun, motor 1 tahun</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent-500" /> Trade-in — kami beli balik bila dah tak guna</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent-500" /> Ansuran 0% sampai 12 bulan (model elektrik)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
