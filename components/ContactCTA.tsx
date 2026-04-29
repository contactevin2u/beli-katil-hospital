import { site, waLink, telLink } from '@/lib/site';
import { Bolt, Phone, WhatsApp, Clock, Siren, Mail } from './Icon';

export function ContactCTA() {
  return (
    <section id="hubungi" className="py-16 sm:py-24 bg-gradient-to-br from-accent-500 to-orange-700 text-white">
      <div className="container-x text-center max-w-3xl mx-auto">
        <span className="pill !bg-white/15 !text-white">
          <Bolt size={14} /> Open seven days a week
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 leading-tight">
          Need a hospital bed today? We can have it set up in four hours.
        </h2>
        <p className="mt-5 text-orange-50 text-lg">
          Drop us a WhatsApp — we usually reply within five minutes. Tell us a bit about the
          patient and the home setup, and we&apos;ll suggest the bed that actually makes sense for
          your family. No pressure, no hard sell.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-accent-600 hover:bg-orange-50 font-bold px-8 py-4 shadow-soft text-base"
          >
            <WhatsApp size={20} />
            Chat on WhatsApp
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
              <Clock size={16} /> Office hours
            </div>
            <div className="mt-1">{site.hours.weekday}</div>
            <div>{site.hours.weekend}</div>
          </div>
          <div className="rounded-xl bg-white/10 border border-white/15 p-3">
            <div className="flex items-center justify-center gap-1.5 font-bold text-white">
              <Siren size={16} /> Emergency
            </div>
            <div className="mt-1">{site.hours.emergency}</div>
          </div>
          <div className="rounded-xl bg-white/10 border border-white/15 p-3">
            <div className="flex items-center justify-center gap-1.5 font-bold text-white">
              <Mail size={16} /> Email
            </div>
            <div className="mt-1 break-all">{site.email}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
