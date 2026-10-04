/**
 * Company facts as published on maxfix.nu. Keep this the single source of
 * truth for contact details so the header, footer, form and JSON-LD agree.
 */
export const company = {
  brand: 'MaxFix',
  legalName: 'MaxExperten AB',
  orgNumber: '559249-8637',
  vatNumber: 'SE559249863701',
  founded: '2018-05',
  experienceSince: 2008,
  address: {
    street: 'Bastuhagsvägen 30K',
    postalCode: '122 42',
    locality: 'Enskede',
    region: 'Stockholms län',
    country: 'SE',
  },
  phone: {
    display: '08 4002 08 08',
    href: 'tel:+46840020808',
    e164: '+46840020808',
  },
  email: 'info@maxfix.nu',
  url: 'https://www.maxfix.nu',
  social: {
    instagram: 'https://www.instagram.com/maxfixstockholm/',
    facebook: 'https://www.facebook.com/MaxFix.nu/',
  },
  reco: {
    horizontalQuote: 'https://widget.reco.se/v2/widget/4026499?mode=HORIZONTAL_QUOTE',
    small: 'https://widget.reco.se/v2/widget/4026499?mode=SMALL&inverted=false&border=true',
  },
} as const;
