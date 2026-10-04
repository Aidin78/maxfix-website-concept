import type { Lang } from '~/i18n';

/** "Tips och råd" from maxfix.nu, grouped by when they matter. */
export const tips: Record<Lang, { title: string; items: string[] }[]> = {
  sv: [
    {
      title: 'När du bokar',
      items: [
        'Skicka dina fakturauppgifter när du bokar tid om du önskar RUT- eller ROT-avdrag.',
        'Samla ihop småjobb för minst 2 timmar för att täcka startavgiften.',
        'Räkna ungefär hur mycket tid du behöver och lägg på en timme för säkerhets skull. Den faktureras självklart inte om den inte används.',
        'Beskriv dina önskemål och skicka bilder – det hjälper oss att förstå dina behov.',
        'Berätta gärna i förväg vilken typ av väggar du har: betong, dubbel- eller enkel gipsvägg, gammal betong (sand) eller tegel.',
        'Måttbeställda delar, till exempel hyllor som ska platsmonteras, behöver vi mäta upp innan – vi kan inte ansvara för felmätningar.',
      ],
    },
    {
      title: 'Innan vi kommer',
      items: [
        'Se till att du har allt material och att allt du köpt är korrekt, så att det inte är fel storlek eller färg.',
        'Tänk på att materialkostnad tillkommer.',
        'Svara om det ringer från skyddat nummer när du väntar på oss – våra specialister ringer när de är framme.',
      ],
    },
    {
      title: 'Kostnad och avbokning',
      items: [
        'Vi lämnar inte offert på mindre arbeten – vi jobbar per timme och alla besök faktureras.',
        'Efter startavgiften betalar du för varje påbörjad halvtimme. Är vi mer än 5 minuter över räknas det som en halvtimme.',
        'Avboka minst 48 timmar innan om du ändrat dig eller fått andra planer, för att undvika extra kostnader.',
        'Vi reserverar oss för fel information från vår hemsida eller från någon av våra hantverkare.',
      ],
    },
  ],
  en: [
    {
      title: 'When you book',
      items: [
        'Send your invoice details when you book if you want a RUT or ROT deduction.',
        'Gather small jobs for at least 2 hours to cover the start fee.',
        'Estimate roughly how much time you need and add an hour to be safe. Of course it is not invoiced if it is not used.',
        'Describe what you want and send pictures – it helps us understand your needs.',
        'Tell us in advance what type of walls you have: concrete, double or single plasterboard, old concrete (sand) or brick.',
        'Made-to-measure parts, such as shelves to be fitted on site, need to be measured by us first – we cannot be responsible for incorrect measurements.',
      ],
    },
    {
      title: 'Before we arrive',
      items: [
        'Make sure you have all the materials and that everything you bought is right – not the wrong size or colour.',
        'Remember that material costs are added.',
        'Answer calls from a hidden number while you wait for us – our specialists call when they arrive.',
      ],
    },
    {
      title: 'Costs and cancellation',
      items: [
        'We do not give quotes for smaller jobs – we work by the hour and all visits are invoiced.',
        'After the start fee you pay for every started half hour. More than 5 minutes over counts as a half hour.',
        'Cancel at least 48 hours ahead if you change your mind or your plans change, to avoid extra costs.',
        'We reserve the right for incorrect information on our website or from any of our craftsmen.',
      ],
    },
  ],
};
