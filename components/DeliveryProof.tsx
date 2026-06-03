import Image from 'next/image';
import { Truck, CheckCircle, MapPin } from './Icon';

// Gambar penghantaran & pemasangan sebenar di rumah pelanggan.
const photos = Array.from({ length: 12 }, (_, i) => `/images/delivery-${String(i + 1).padStart(2, '0')}.webp`);

function Row({ items, reverse = false, duration }: { items: string[]; reverse?: boolean; duration: string }) {
  return (
    <div className="marquee overflow-hidden">
      <div
        className={`marquee-track gap-3 sm:gap-4 ${reverse ? 'reverse' : ''}`}
        style={{ '--marquee-duration': duration } as React.CSSProperties}
      >
        {/* Senarai digandakan dua kali untuk loop tanpa sambungan */}
        {[...items, ...items].map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-40 w-40 sm:h-52 sm:w-52 shrink-0 overflow-hidden rounded-2xl border border-slate-200 shadow-soft"
          >
            <Image
              src={src}
              alt="Katil hospital dihantar dan dipasang di rumah pelanggan"
              fill
              sizes="(max-width: 640px) 160px, 208px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function DeliveryProof() {
  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="pill">
            <Truck size={14} /> Bukti penghantaran
          </span>
          <h2 className="section-title mt-3">Ratusan katil dah sampai ke rumah family Malaysia</h2>
          <p className="section-sub">
            Ini bukan stock photo — semua gambar di bawah adalah penghantaran &amp; pemasangan
            sebenar oleh team kami di rumah pelanggan, dari Klang Valley sampai Sabah.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle size={16} className="text-accent-600" /> Pasang siap di rumah
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={16} className="text-accent-600" /> Seluruh Semenanjung &amp; Sabah
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Truck size={16} className="text-accent-600" /> Hantar hari sama (Klang Valley)
            </span>
          </div>
        </div>
      </div>

      <div className="marquee-mask mt-8 space-y-3 sm:space-y-4">
        <Row items={photos.slice(0, 6)} duration="46s" />
        <Row items={photos.slice(6, 12)} reverse duration="52s" />
      </div>
    </section>
  );
}
