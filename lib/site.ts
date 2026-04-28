export const site = {
  brand: 'Beli Katil Hospital',
  tagline: 'Pakar Katil Hospital Malaysia sejak 2016',
  domain: 'https://belikatilhospital.my',
  phone: '011-2879 9609',
  phoneIntl: '+60112879 9609',
  whatsappNumber: '60112879 9609',
  whatsappText: 'Hai, saya nak tanya pasal katil hospital. Boleh bantu?',
  email: 'contact@evin2u.com',
  company: 'AA Alive Sdn Bhd (1204108-D)',
  hqAddress: 'Batu Caves, Selangor, Malaysia',
  branchAddress: 'Kota Kinabalu, Sabah',
  hours: {
    weekday: 'Isnin–Jumaat 9:00 pagi – 6:00 petang',
    weekend: 'Sabtu–Ahad 9:00 pagi – 4:00 petang',
    emergency: '24 jam (talian kecemasan)'
  },
  mda: {
    registration: 'GA9817222-107721',
    advert: 'MDAMD 0127/2025'
  }
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsappNumber.replace(/\s/g, '')}?text=${encodeURIComponent(
    text ?? site.whatsappText
  )}`;

export const telLink = `tel:${site.phoneIntl.replace(/\s/g, '')}`;
