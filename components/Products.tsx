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
      'Tilam boleh ditambah secara berasingan (ikut quotation)'
    ],
    image: { src: '/images/katil-3-function.webp', width: 560, height: 560 }
  },
  {
    id: 'ultra-electric',
    name: 'Ultra Electric 6-Function',
    tagline: 'Full elektrik — sesuai untuk kes long-term & terlantar berat',
    rentPrice: 'Beli sahaja',
    buyPrice: 'RM5,500',
    features: [
      'Remote control — sorang caregiver pun boleh handle',
      '6 posisi yang boleh adjust ikut keselesaan pesakit',
      'Mod Trendelenburg untuk kes kecemasan',
      'Battery backup — masa blackout pun masih function',
      'Air mattress boleh ditambah secara berasingan (ikut quotation)'
    ],
    image: { src: '/images/katil-elektrik.webp', width: 420, height: 420 }
  }
];

export function Products() {
  return (
    <section id="produk" className="py-12 sm:py-16 bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <Bed size={14} /> Pilihan katil kami
          </span>
          <h2 className="section-title mt-3">Tiga katil — semua build untuk home care</h2>
          <p className="section-sub">
            Dari katil manual yang simple untuk recovery ringan, sampai katil elektrik full-motor
            untuk pesakit terlantar lama — semua model berdaftar dengan MDA (GA9817222-107721). Boleh{' '}
            <strong>sewa</strong> (model 2 &amp; 3 function) atau <strong>beli</strong>, dan team kami
            pasang di rumah sekali tunjuk cara guna kepada caregiver. Caj penghantaran &amp; pemasangan
            disahkan dalam quotation bertulis.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
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
                  <div className="rounded-xl bg-green-50 p-3">
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

        <div id="sewa" className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 text-white p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
                <Lightbulb size={20} />
              </span>
              <h3 className="text-2xl font-bold">Sewa dulu. Decide kemudian.</h3>
            </div>
            <p className="mt-3 text-brand-100">
              Tak sure berapa lama nak guna? Mula dengan sewa bulanan dulu — kalau lepas tu family
              rasa nak miliki, <strong className="text-white">tanya kami tentang pilihan tukar sewa
              kepada beli</strong> — sebahagian bayaran sewa boleh ditolak dari harga beli, ikut
              quotation. Tiada deposit, dan boleh sewa sebulan sahaja.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-brand-100">
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0" /> Pemasangan &amp; tunjuk cara guna kepada caregiver — caj disahkan dalam quotation</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0" /> Servis atau penggantian sepanjang sewa — ikut terma sewa bertulis</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0" /> Bayar selepas katil sampai dan siap dipasang</li>
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
              beli terus selalunya lagi berbaloi dari sewa. Pilihan ansuran boleh dibincang — ditandatangani
              selepas katil sampai, dan semua terma ditulis dalam quotation.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent-500" /> Waranti 1 tahun untuk katil baru — skop ikut invois</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent-500" /> Trade-in — kami beli balik bila dah tak guna</li>
              <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent-500" /> Ansuran ditandatangani selepas penghantaran, bukan sebelum</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
