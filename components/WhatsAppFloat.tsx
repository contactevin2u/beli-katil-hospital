import { waLink } from '@/lib/site';
import { WhatsApp } from './Icon';

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp kami sekarang"
      className="fixed bottom-5 right-5 z-50 grid place-items-center h-14 w-14 rounded-full bg-accent-500 hover:bg-accent-600 text-white shadow-soft animate-pulse-slow"
    >
      <WhatsApp size={28} />
    </a>
  );
}
