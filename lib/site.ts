export const site = {
  brand: 'Beli Katil Hospital',
  tagline: 'Hospital bed Malaysia untuk jaga keluarga di rumah, sejak 2016',
  domain: 'https://belikatilhospital.my',
  phone: '011-1119 5175',
  phoneIntl: '+60111119 5175',
  whatsappNumber: '601111195175',
  whatsappText: 'Hai, saya nak tanya pasal katil hospital. Boleh bantu?',
  email: 'contact@evin2u.com',
  company: 'AA Alive Sdn Bhd (1204108-D)',
  hqAddress: 'Batu Caves, Selangor, Malaysia',
  branchAddress: 'Kota Kinabalu, Sabah',
  hours: {
    weekday: 'Isnin–Jumaat, 9 pagi – 6 petang',
    weekend: 'Sabtu–Ahad, 9 pagi – 4 petang',
    emergency: 'Talian kecemasan 24/7'
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
