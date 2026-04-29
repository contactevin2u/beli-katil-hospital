import { site } from '@/lib/site';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Landmark } from './Icon';

export function MDA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-700 to-brand-900 text-white">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="pill !bg-white/10 !text-white">
            <Landmark size={14} /> Officially registered
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 leading-tight">
            MDA-registered. The real deal, not a knock-off.
          </h2>
          <p className="mt-4 text-brand-100 max-w-xl">
            Every bed we rent or sell is registered under the{' '}
            <strong className="text-white">Medical Device Act 2012 (Act 737)</strong> by the
            Medical Device Authority (MDA) Malaysia. No counterfeit units, no shady second-hand
            stock from grey markets — you can verify our registration directly on the MDA portal.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
              <div className="text-xs text-brand-200">MDA Registration</div>
              <div className="font-bold text-white">{site.mda.registration}</div>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
              <div className="text-xs text-brand-200">Advertising Approval</div>
              <div className="font-bold text-white">{site.mda.advert}</div>
            </div>
          </div>

          <a
            href="https://www.mda.gov.my/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-white underline underline-offset-4 hover:text-brand-100"
          >
            Verify on the MDA portal →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <ImagePlaceholder
              key={i}
              label={`Delivery proof ${i}`}
              note={`delivery-${i}.jpg`}
              className="aspect-square rounded-2xl !bg-white/10 !border-white/20 !text-white/60"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
