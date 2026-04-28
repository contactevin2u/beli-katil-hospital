import { site, waLink, telLink } from '@/lib/site';

export function ContactCTA() {
  return (
    <section id="hubungi" className="py-16 sm:py-24 bg-gradient-to-br from-accent-500 to-emerald-700 text-white">
      <div className="container-x text-center max-w-3xl mx-auto">
        <span className="pill !bg-white/15 !text-white">⚡ Sedia Untuk Bantu Anda</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 leading-tight">
          Perlukan Katil Hospital Hari Ini?
        </h2>
        <p className="mt-5 text-emerald-50 text-lg">
          WhatsApp kami sekarang — kami balas dalam 5 minit. Konsultasi percuma, tiada paksaan.
          Kami bantu anda pilih katil yang paling sesuai untuk keluarga.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-accent-600 hover:bg-emerald-50 font-bold px-8 py-4 shadow-soft text-base"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.81 11.81 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.99 5.92L3.5 19.18l3.154-1.987z"/></svg>
            WhatsApp Kami
          </a>
          <a
            href={telLink}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 text-base"
          >
            📞 {site.phone}
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm text-emerald-50">
          <div className="rounded-xl bg-white/10 border border-white/15 p-3">
            <div className="font-bold text-white">⏰ Waktu Pejabat</div>
            <div>{site.hours.weekday}</div>
            <div>{site.hours.weekend}</div>
          </div>
          <div className="rounded-xl bg-white/10 border border-white/15 p-3">
            <div className="font-bold text-white">🚨 Kecemasan</div>
            <div>{site.hours.emergency}</div>
          </div>
          <div className="rounded-xl bg-white/10 border border-white/15 p-3">
            <div className="font-bold text-white">📧 Emel</div>
            <div className="break-all">{site.email}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
