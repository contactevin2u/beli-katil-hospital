import { site, waLink, telLink } from '@/lib/site';
import { Bolt, Phone, WhatsApp, Clock, Siren, Mail } from './Icon';

export function ContactCTA() {
  return (
    <section id="hubungi" className="py-16 sm:py-24 bg-gradient-to-br from-accent-500 to-orange-700 text-white">
      <div className="container-x text-center max-w-3xl mx-auto">
        <span className="pill !bg-white/15 !text-white">
          <Bolt size={14} /> Buka 7 hari seminggu
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 leading-tight">
          Perlukan katil hospital hari ni? Kami boleh setup dalam 4 jam.
        </h2>
        <p className="mt-5 text-orange-50 text-lg">
          WhatsApp kami — biasanya kami reply dalam 5 minit. Cerita sikit pasal keadaan pesakit
          dan keadaan rumah, dan kami suggest katil yang betul-betul sesuai untuk family anda.
          Tiada hard sell, tiada paksaan.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-accent-600 hover:bg-orange-50 font-bold px-8 py-4 shadow-soft text-base"
          >
            <WhatsApp size={20} />
            Chat di WhatsApp
          </a>
          <a
            href={telLink}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 text-base"
          >
            <Phone size={18} /> {site.phone}
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm text-orange-50">
          <div className="rounded-xl bg-white/10 border border-white/15 p-3">
            <div className="flex items-center justify-center gap-1.5 font-bold text-white">
              <Clock size={16} /> Waktu pejabat
            </div>
            <div className="mt-1">{site.hours.weekday}</div>
            <div>{site.hours.weekend}</div>
          </div>
          <div className="rounded-xl bg-white/10 border border-white/15 p-3">
            <div className="flex items-center justify-center gap-1.5 font-bold text-white">
              <Siren size={16} /> Kecemasan
            </div>
            <div className="mt-1">{site.hours.emergency}</div>
          </div>
          <div className="rounded-xl bg-white/10 border border-white/15 p-3">
            <div className="flex items-center justify-center gap-1.5 font-bold text-white">
              <Mail size={16} /> Emel
            </div>
            <div className="mt-1 break-all">{site.email}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
