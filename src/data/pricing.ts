import type { Lang } from '~/i18n';

/**
 * Prices and conditions exactly as published on maxfix.nu (Swedish version).
 * Do not edit numbers here without an updated source from MaxFix.
 */
export const rates = {
  fromPerHour: 300,
  minimumHours: 2,
  travelPerVisit: 600,
  materialMarkupPercent: 20,
  rutPercent: 50,
  rotPercent: 30,
} as const;

export interface RateRow {
  id: string;
  label: string;
  detail?: string;
  price: number;
}

interface PricingCopy {
  labourTitle: string;
  labour: RateRow[];
  extrasTitle: string;
  extras: { label: string; value: string; detail?: string }[];
  conditionsTitle: string;
  conditions: { title: string; text: string }[];
}

export const pricing: Record<Lang, PricingCopy> = {
  sv: {
    labourTitle: 'Arbetskostnad efter avdrag',
    labour: [
      { id: 'rut', label: 'RUT', detail: 't.ex. möblering', price: 300 },
      { id: 'rut-clean', label: 'RUT – städning', price: 240 },
      { id: 'rut-it', label: 'RUT – IT', price: 600 },
      { id: 'rot', label: 'ROT', price: 420 },
      { id: 'rot-el', label: 'ROT – el/VVS', price: 630 },
    ],
    extrasTitle: 'Tillkommer',
    extras: [
      {
        label: 'Framkörning inom Stockholms län',
        value: '600 kr/besök',
        detail: 'Ej avdragsgillt mot RUT eller ROT.',
      },
      {
        label: 'Andra orter',
        value: 'Extra timkostnad',
        detail: 'Vid besök i t.ex. Nynäshamn, Södertälje och Norrtälje.',
      },
      {
        label: 'Material',
        value: 'Ingår ej',
        detail:
          'Kunden handlar materialet – eller så gör vi det mot timpenning och självkostnadspris plus 20 %. Minimidebitering för att handla material är 1 timme.',
      },
      {
        label: 'Kvällar och helgdagar',
        value: 'Dubbeltaxa',
        detail: 'Gäller efter kl. 17 och på helgdagar.',
      },
    ],
    conditionsTitle: 'Bra att veta',
    conditions: [
      {
        title: 'Minst 2 timmar',
        text: 'Minimidebitering är 2 timmar. Därefter debiterar vi per påbörjad halvtimme efter startavgiften.',
      },
      {
        title: 'Löpande timpenning',
        text: 'Alla våra hantverkare debiterar löpande timpenning, ej fast pris. Undantag: platsbyggda möbler görs endast till fast pris.',
      },
      {
        title: 'Avbokning',
        text: 'Avbokning mindre än 48 timmar före debiteras med 50 %, mindre än 24 timmar före med fullt belopp.',
      },
      {
        title: 'Förskottsbetalning',
        text: 'Bor du i hyresrätt tar vi 50 % i förskott på jobb över två timmar. Är du inte skriven i Sverige tar vi 100 % i förskott.',
      },
      {
        title: 'Offert',
        text: 'Vi ger endast kostnadsfri offert på mer omfattande jobb. För mindre uppdrag kan du boka ett konsultationsbesök enligt ordinarie taxa för en uppskattad prisbild.',
      },
      {
        title: 'Ansvar',
        text: 'Vi ansvarar inte för eventuell flytt av lös eller fast utrustning.',
      },
    ],
  },
  en: {
    labourTitle: 'Labour cost after deduction',
    labour: [
      { id: 'rut', label: 'RUT', detail: 'e.g. furniture assembly', price: 300 },
      { id: 'rut-clean', label: 'RUT – cleaning', price: 240 },
      { id: 'rut-it', label: 'RUT – IT', price: 600 },
      { id: 'rot', label: 'ROT', price: 420 },
      { id: 'rot-el', label: 'ROT – electrical/plumbing', price: 630 },
    ],
    extrasTitle: 'Added costs',
    extras: [
      {
        label: 'Travel within Stockholm County',
        value: 'SEK 600/visit',
        detail: 'Not eligible for RUT or ROT deductions.',
      },
      {
        label: 'Other towns',
        value: 'Extra hourly cost',
        detail: 'For visits to e.g. Nynäshamn, Södertälje and Norrtälje.',
      },
      {
        label: 'Materials',
        value: 'Not included',
        detail:
          'The customer buys the materials – or we do it at our hourly rate plus cost price with a 20% surcharge. Minimum charge for buying materials is 1 hour.',
      },
      {
        label: 'Evenings and public holidays',
        value: 'Double rate',
        detail: 'Applies after 17:00 and on public holidays.',
      },
    ],
    conditionsTitle: 'Good to know',
    conditions: [
      {
        title: 'Minimum 2 hours',
        text: 'The minimum charge is 2 hours. After that we charge per started half hour after the start fee.',
      },
      {
        title: 'Hourly billing',
        text: 'All our craftsmen charge by the hour, not a fixed price. Exception: built-in furniture is fixed price only.',
      },
      {
        title: 'Cancellation',
        text: 'Cancellations less than 48 hours before are charged at 50%, less than 24 hours before at the full amount.',
      },
      {
        title: 'Payment in advance',
        text: 'If you live in a rented apartment we take 50% in advance for jobs over two hours. If you are not registered in Sweden we take 100% in advance.',
      },
      {
        title: 'Quotes',
        text: 'We only give free quotes for larger jobs. For smaller jobs you can book a consultation visit at the regular rate to get an estimated price.',
      },
      {
        title: 'Liability',
        text: 'We are not responsible for moving loose or fixed equipment.',
      },
    ],
  },
};

/** Rates offered in the price estimator (subset of the labour table). */
export const estimatorRates = ['rut', 'rot', 'rot-el', 'rut-clean'] as const;
