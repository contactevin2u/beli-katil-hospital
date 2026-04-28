import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Products } from '@/components/Products';
import { Benefits } from '@/components/Benefits';
import { WhoNeeds } from '@/components/WhoNeeds';
import { WhyUs } from '@/components/WhyUs';
import { MDA } from '@/components/MDA';
import { Testimonials } from '@/components/Testimonials';
import { Coverage } from '@/components/Coverage';
import { FAQ, FaqJsonLd } from '@/components/FAQ';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Benefits />
        <WhoNeeds />
        <WhyUs />
        <MDA />
        <Testimonials />
        <Coverage />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
