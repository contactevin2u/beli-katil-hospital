import { waLink } from '@/lib/site';
import { ImagePlaceholder } from './ImagePlaceholder';

const personas = [
  { icon: '👴', label: 'Warga Emas' },
  { icon: '🧠', label: 'Pesakit Strok' },
  { icon: '🩺', label: 'Lepas Pembedahan' },
  { icon: '🦽', label: 'Pesakit Lumpuh' },
  { icon: '🏥', label: 'Baru Discaj Hospital' },
  { icon: '🎗️', label: 'Pesakit Kanser' },
  { icon: '🛌', label: 'Pesakit Terlantar' },
  { icon: '💊', label: 'Penyakit Kronik' }
];

export function WhoNeeds() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="pill">👨‍👩‍👧 Untuk Siapa</span>
          <h2 className="section-title mt-3">Siapa Yang Perlukan Katil Hospital?</h2>
          <p className="section-sub">
            Kalau anda atau ahli keluarga dalam keadaan ini, katil hospital boleh jadi penyelamat
            untuk penjagaan harian:
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {personas.map((p) => (
              <div
                key={p.label}
                className="rounded-2xl bg-white border border-slate-100 p-4 text-center hover:border-brand-300 transition"
              >
                <div className="text-3xl">{p.icon}</div>
                <div className="text-sm font-semibold mt-2 text-slate-700">{p.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-200 p-5">
            <div className="font-bold text-amber-900">⏰ Baru discaj dari hospital?</div>
            <p className="text-sm text-amber-800 mt-1">
              Order sebelum 2 petang untuk penghantaran <strong>hari yang sama</strong> di Lembah
              Klang. Pasukan kami sedia 7 hari seminggu termasuk cuti umum.
            </p>
            <a
              href={waLink('Hai, ahli keluarga saya baru discaj hospital. Saya nak tanya pasal katil yang sesuai.')}
              target="_blank"
              rel="noopener"
              className="btn-primary mt-4 text-sm"
            >
              Konsultasi Percuma di WhatsApp
            </a>
          </div>
        </div>

        <ImagePlaceholder
          label="Penjagaan Pesakit di Rumah"
          note="penjagaan-rumah.jpg • 1000x1100"
          className="aspect-[10/11] rounded-3xl"
        />
      </div>
    </section>
  );
}
