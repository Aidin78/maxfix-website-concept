import type { Lang } from '~/i18n';

/**
 * General terms and privacy information, reproduced from maxfix.nu
 * (/allmanna-villkor/ and /en/terms-and-conditions/). Only typography and
 * obvious typos have been touched – the wording is MaxFix's own.
 */
export type TermsBlock = string | { list: string[] };

export interface TermsSection {
  heading: string;
  level?: 2 | 3;
  blocks: TermsBlock[];
}

export const terms: Record<Lang, { title: string; intro: string; sections: TermsSection[] }> = {
  sv: {
    title: 'Allmänna villkor',
    intro: 'Villkor för tjänsten och information om hur MaxFix behandlar dina personuppgifter.',
    sections: [
      {
        heading: 'Vad är ändamålen med personuppgiftsbehandlingen?',
        level: 2,
        blocks: [
          'MaxFix behandlar dina personuppgifter i syfte att hantera dina köp av vår tjänst och kundtjänstärenden samt för följande ändamål:',
          {
            list: [
              'För att administrera betalning.',
              'För att kunna fastställa din identitet och kontrollera din ålder.',
              'För att möjliggöra transport av hantverkare eller annan serviceutövare till din adress.',
              'För att en hantverkare eller annan serviceutövare ska kunna kontakta dig avseende en tjänst.',
              'För att skicka statusuppdateringar avseende våra tjänster.',
              'För övrig kommunikation med dig som kund där vi besvarar förfrågningar.',
              'För att uppdatera dina adressuppgifter.',
              'För att ansöka om RUT- eller ROT-avdrag.',
              'För att utföra profilering i enlighet med beskrivningen ovan.',
              'För att utreda klagomålsärenden.',
            ],
          },
        ],
      },
      {
        heading: 'Delar vi dina personuppgifter med andra parter?',
        level: 2,
        blocks: [
          'Vi delar dina personuppgifter med:',
          { list: ['Eventuella samarbetspartners som kommer att utföra en del av tjänsterna inom MaxFix tjänst.'] },
        ],
      },
      {
        heading: 'Vad har du för rättigheter?',
        level: 2,
        blocks: [
          'Du har rätt att begära en kopia av samtliga personuppgifter som vi behandlar om dig samt rätt att få ut dina personuppgifter. Du har även rätt att begära rättelse eller radering av personuppgifter samt begära begränsning av den personuppgiftsbehandling som rör dig. Om du tycker att vi har behandlat dina personuppgifter på ett felaktigt sätt har du rätt att inge klagomål till Datainspektionen (Integritetsskyddsmyndigheten).',
        ],
      },
      {
        heading: 'Kontaktuppgifter',
        level: 2,
        blocks: [
          'Har du frågor om vår behandling av dina personuppgifter kan du kontakta oss via mejl: info@maxfix.nu eller via telefon: 08-4002 08 08.',
        ],
      },
      {
        heading: 'MaxFix – Allmänna villkor för tjänsten',
        level: 2,
        blocks: [],
      },
      {
        heading: '1. Tillämplighet',
        blocks: [
          'Dessa allmänna villkor tillämpas för alla uppdrag som utförs, och ska utföras, av MaxFix hos dig som konsument och kund.',
        ],
      },
      {
        heading: '2. Informationshantering',
        blocks: [
          'För att vi ska kunna utföra Tjänsten behöver vi behandla dina personuppgifter. Vi behandlar då dina personuppgifter i egenskap av personuppgiftsansvarig för att bland annat kunna utföra Tjänsten åt dig som Kund, ge dig en kundanpassad upplevelse och information om tjänsten samt erbjudanden. För mer information om hur vi hanterar dina personuppgifter kan du nå oss via info@maxfix.nu.',
        ],
      },
      {
        heading: '3. Bokning av Tjänst',
        blocks: [
          'För att boka en Tjänst måste du ha fyllt 18 år. Beställning av Tjänst sker via webbplatsen eller e-post. Om något blivit fel eller om du vill ändra något, kontakta oss via info@maxfix.nu.',
        ],
      },
      {
        heading: '4. Betalning av Tjänst',
        blocks: [
          '4.1 Betalning sker mot e-postfaktura, 10 dagar netto räknat från när arbetet utförts. Om betalning inte sker inom förfallotiden kommer påminnelse, med påminnelseavgift, att skickas ut via brev.',
          '4.2 För Tjänst som medger skattereduktion betalar Kund 50 % av arbetskostnaden för RUT-arbeten och 70 % av arbetskostnaden för ROT-arbeten, förutsatt att kraven för sådan skattereduktion uppfyllts. Om skattereduktion nekas av Skatteverket skickas en faktura på mellanskillnaden.',
          '4.3 Prissättningen för Tjänst till Kund baseras på arbetad tid per fixare. Aktuella priser finns angivna på hemsidan www.maxfix.se.',
          '4.4 Prissättning för platsbyggda möbler och specialbeställningar: Vid bokning av platsbyggda möbler eller andra skräddarsydda uppdrag tillämpas den preliminära prisuppgift som kunden erhållit, förutsatt att ingen ny prisjustering har meddelats skriftligen efter genomfört platsbesök. Då varje uppdrag utgör ett unikt hantverksprojekt och finsnickeri tillämpas uteslutande fast pris. Arbetet kan därmed inte brytas ned eller avräknas i löpande timmar.',
        ],
      },
      {
        heading: '5. Ångerrätt, av- och ombokning',
        blocks: [
          '5.1 MaxFix ger alltid Kund möjlighet att av- eller omboka sin bokning av Tjänst upp till 48 timmar innan planerat utförande. För att utöva sin ångerrätt eller av- och omboka ska Kund skicka ett klart och tydligt meddelande om beslutet att frånträda avtalet (t.ex. ett telefonsamtal eller e-post). För en smidig hantering rekommenderar MaxFix att Kund skickar meddelandet till info@maxfix.nu. Vid av- eller ombokning av Kund mindre än 24 timmar före överenskommen tid, eller om Kund inte infinner sig enligt punkt 11.1 nedan, faktureras hela kostnaden för bokad Tjänst. Detta förutsätter att Kunds eventuella ångerrätt har löpt ut. Avbokning för måndag och tisdag behöver ske senast fredagen innan kl. 15.00.',
          '5.2 MaxFix och/eller enskild utförande fixare har rätt att när som helst avbryta eller avboka ett uppdrag, utan kostnad för MaxFix, om MaxFix och/eller fixaren bedömer att fixarens säkerhet vid utförande av Tjänsten inte kan garanteras och detta beror på Kund (exempelvis vid våld, hot om våld, övergrepp eller trakasserier). MaxFix har också rätt att avboka en Tjänst vid Kunds hets mot folkgrupp, diskriminering eller uppträdande som i övrigt strider mot lag eller god affärsetik. Kunden blir då fakturerad den angivna kostnaden för bokningen.',
          '5.3 MaxFix har rätt att avboka en bokad Tjänst om förutsättningarna för att korrekt kunna utföra sådan Tjänst inte föreligger.',
          '5.4 Kund och MaxFix ska avtala om när Tjänsten ska anses vara avslutad. MaxFix förbehåller sig rätten att uppge tidpunkt för Tjänstens avslutande till dess att aktuell fixare besökt Kund och haft möjlighet att på plats uppskatta Tjänstens omfattning.',
        ],
      },
      {
        heading: '6. Åtagande och ansvar',
        blocks: [
          '6.1 MaxFix ska vid utförandet av Tjänst använda sig av kompetent och lämplig, samt i de fall där det är relevant, auktoriserad fixare.',
          '6.2 MaxFix är ansvarigt för att utförandet av Tjänst sker på ett fackmannamässigt sätt. Önskar Kund att Tjänsten till dess innehåll eller omfattning, mot fixarens avrådan, ska utföras på ett sådant sätt att det innebär att den avviker från fackmannamässig standard ansvarar Kund själv för resultatet.',
          '6.3 MaxFix, samt dess underleverantör för utförande av Tjänst, är ansvarsförsäkrade.',
        ],
      },
      {
        heading: '7. Reklamationer',
        blocks: ['Om Kund anser att Tjänsten är felaktig ska Kund underrätta MaxFix om detta inom skälig tid.'],
      },
      {
        heading: '8. Tvister',
        blocks: [
          '8.1 Kund har rätt att få en tvist prövad utanför domstol hos Allmänna reklamationsnämnden (ARN), www.arn.se, postadress Allmänna reklamationsnämnden, Box 174, 101 23 Stockholm. MaxFix medverkar i ett eventuellt tvisteförfarande och följer ARN:s rekommendationer.',
        ],
      },
      {
        heading: '9. Force majeure',
        blocks: [
          'Arbetsinställelse, blockad eller annan händelse bortom MaxFix kontroll såsom krig, upplopp, eldsvåda, explosion eller explosionsfara, extrema vädersituationer samt ingripande från offentlig myndighet som medför att MaxFix inte, eller till onormalt höga kostnader, kan fullgöra sina skyldigheter enligt detta avtal, fritar MaxFix från fullgörandet av dessa skyldigheter under den tid förhållandet råder.',
        ],
      },
      {
        heading: '10. Ansvarsbegränsning',
        blocks: [
          '10.1 Kund ska vara på plats vid uppdragets början och slut samt vid behov däremellan för avstämning kring detaljer i arbetet om fixaren så uttrycker.',
          '10.2 Kunden ansvarar för att inga hinder, såsom möbler, tavlor eller kablar, stör installationen eller utförandet av Tjänsten.',
          '10.3 Kund ska vara behjälplig och tillhandahålla information till fixaren för att undvika att rör, kablar eller liknande, synliga eller ej, tar skada av installationen.',
          '10.4 MaxFix ansvarar inte för fel på installationsmaterial och/eller produkter tillhandahållna av tredje part eller annan återförsäljare.',
          '10.5 MaxFix ansvarar inte för fel uppkomna genom Kunds handhavande eller faktorer utanför MaxFix kontroll.',
          '10.6 MaxFix ansvarar inte för felaktiga uppgifter eller annars inkorrekta tjänsteval av kunden.',
          '10.7 MaxFix ansvarar inte för förlust i näringsverksamhet.',
          '10.8 Kund ska vidta skäliga åtgärder för att begränsa eventuell uppkommen skada orsakad av fixaren. Om Kund inte gör detta får denne själv ansvara för skada som hade kunnat undvikas om åtgärder vidtagits.',
        ],
      },
      {
        heading: '11. Utbyte av utförare',
        blocks: ['MaxFix har rätt att byta nämnd fixare utan att informera Kunden.'],
      },
      {
        heading: '12. Prisjustering och fel i information',
        blocks: [
          'MaxFix reserverar sig för eventuella fel i priser och information som presenteras på hemsidan samt i annan kommunikation, och förbehåller sig rätten att från tid till annan justera dessa och informera Kund genom publikation av korrigerad/justerad information.',
        ],
      },
      {
        heading: '13. Offert',
        blocks: [
          'Vi reserverar oss för slutpris på offerten samt eventuella prisfel som kan uppstå och förbehåller oss rätten att avslå offert.',
        ],
      },
      {
        heading: '14. Material',
        blocks: [
          'MaxFix ombesörjer med fördel försörjning av erforderligt material, som sedan faktureras med tillägg om 20 %. På så vis säkras tillgång på material under projekttiden, och eventuell väntetid behöver då inte debiteras som extratid.',
        ],
      },
      {
        heading: '15. Separata fakturor',
        blocks: [
          'Fakturor separeras beroende på typ av avdrag. Därför kommer två separata fakturor på t.ex. möblering (RUT) och el (ROT).',
        ],
      },
      {
        heading: '16. Pappersfaktura',
        blocks: ['Vid pappersfaktura tillkommer en avgift på 60 kr (tänk på miljön och lämna e-post för fakturering).'],
      },
      {
        heading: '17. Bomkörning',
        blocks: ['Bomkörning faktureras som startavgift (framkörning och 2 tim).'],
      },
      {
        heading: '18. Rådgivning',
        blocks: ['Rådgivning faktureras med samma taxa som möblering (framkörning och 2 tim, ej ROT/RUT).'],
      },
      {
        heading: '19. Villkor för RUT-avdrag',
        blocks: [
          'För att du ska ha rätt till RUT-avdrag ska följande villkor vara uppfyllda:',
          {
            list: [
              'Du ska bo i bostaden där tjänsten utförs.',
              'Du ska faktureras för tjänsten och/eller ha utgiften för tjänsten.',
              'Du ska ha rutavdrag kvar att utnyttja. Rotavdraget och rutavdraget är sammanlagt högst 75 000 kr per person och år. Högst 75 000 kronor får vara rotavdrag.',
              'Du ska vara bosatt i Sverige och betala skatt här (obegränsat skattskyldig) eller bo utomlands men välja att beskattas i Sverige enligt inkomstskattelagen, där minst 90 % av förvärvsinkomsterna är inkomster i Sverige (begränsat skattskyldig).',
              'Du ska ha fyllt 18 år senast vid årets slut.',
              'Ett dödsbo kan få rutavdrag, men enbart för tjänster som utförs före dödsfallet.',
            ],
          },
          'Om ni är två eller flera personer som gemensamt nyttjar bostaden kan ni dela på rutavdraget. Sammanlagt kan dock rutavdraget aldrig bli högre än 50 procent av den totala arbetskostnaden. För att få rutavdrag ska du faktureras eller betala för arbetet.',
        ],
      },
      {
        heading: '20. Debitering per halvtimme',
        blocks: [
          'Vi debiterar per påbörjad halvtimme efter startavgiften. Under denna tid måste vår anställde hinna packa sina verktyg innan han åker iväg, så att arbetstiden täcks av timpriset. Att leta efter parkeringsplats räknas som arbetstid (om du har en parkeringsplats, informera oss gärna i förväg).',
        ],
      },
      {
        heading: '21. Villkor för ROT-avdrag',
        blocks: [
          'För att du ska ha rätt till ROT-avdrag måste följande villkor vara uppfyllda:',
          {
            list: [
              'Du ska äga bostaden när arbetet utförs.',
              'Du, eller dina föräldrar, ska använda bostaden som permanentbostad, fritidsbostad eller liknande.',
              'Du ska faktureras för arbetet och/eller ha utgiften för arbetet.',
              'Du ska ha rotavdrag kvar att utnyttja. Rotavdraget och rutavdraget är sammanlagt högst 75 000 kronor per person och år. Högst 50 000 kronor får vara rotavdrag.',
              'Du ska vara bosatt i Sverige och betala skatt här (obegränsat skattskyldig) eller bo utomlands men välja att beskattas i Sverige enligt inkomstskattelagen, där minst 90 % av förvärvsinkomsterna är inkomster i Sverige (begränsat skattskyldig).',
              'Du ska ha fyllt 18 år senast vid årets slut.',
              'Ett dödsbo kan få rotavdrag för arbeten som utfördes före dödsfallet. En ensam dödsbodelägare kan få rotavdrag för arbeten som utförs och betalas efter att bouppteckningen har registrerats hos Skatteverket. Om det finns flera dödsbodelägare måste de upprätta ett arvskifte innan någon kan få rotavdrag. Tänk på att lagfart ska sökas inom tre månader.',
            ],
          },
          'Om ni är två eller flera ägare som nyttjar bostaden kan ni dela på rotavdraget. Sammanlagt kan dock rotavdraget aldrig bli högre än 30 procent av den totala arbetskostnaden. För att få rotavdrag ska du faktureras eller betala för arbetet. ROT-avdrag gäller ej på materialkostnad.',
        ],
      },
      {
        heading: 'Arbetskostnad',
        level: 3,
        blocks: [
          'Det är endast arbetskostnaden som ger rätt till rotavdrag, och företaget får dra av högst 30 procent av kostnaden för godkända arbeten i rotavdrag. Det är bara arbetad tid på plats hos dig som ger rätt till rotavdrag.',
        ],
      },
      {
        heading: 'Materialkostnader',
        level: 3,
        blocks: [
          'Materialkostnaden får inte ligga till grund för rotavdrag – den ska du betala i sin helhet till företaget. Företaget får inte ge dig ett lägre pris på materialet än vad de har betalat i inköpspris.',
          'Material som hyrs eller leasas ger inte heller rätt till rotavdrag.',
        ],
      },
      {
        heading: 'Övriga kostnader',
        level: 3,
        blocks: [
          'Övriga kostnader som utföraren har i samband med arbetet ger inte rätt till skattereduktion. Dessa kostnader ska du betala i sin helhet till företaget. Företaget kan till exempel ha övriga kostnader för:',
          {
            list: [
              'restid till och från dig samt vid materialinköp och bortforsling av avfall',
              'kostnad per mil för bilar och andra transportfordon, inklusive till exempel drivmedel, skatt och försäkring',
              'logi och traktamente',
              'maskiner, utrustning och avfallshantering',
              'administration.',
            ],
          },
          'Företaget får inte bjuda dig på exempelvis reskostnaden. Om företaget inte tar betalt för resorna anser Skatteverket att de ingår i kostnaden för arbete, och Skatteverket kan då betala ut ett lägre belopp än den begärda skattereduktionen.',
        ],
      },
      {
        heading: '22. Det finns inte stöd i ROT/RUT-tjänsten om du:',
        blocks: [
          {
            list: [
              'är näringsidkare med enskild verksamhet eller handelsbolagsdelägare',
              'har sjuk- eller aktivitetsersättning',
              'deklarerar i ett annat land än Sverige',
              'vill beräkna avdraget för en avliden person.',
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: 'Terms and conditions',
    intro: 'Terms for the service and information on how MaxFix processes your personal data.',
    sections: [
      {
        heading: 'Purposes of personal data processing',
        level: 2,
        blocks: [
          'MaxFix processes your personal data to manage your purchases of our service and customer service matters, as well as for the following purposes:',
          {
            list: [
              'To administer payment.',
              'To verify your identity and check your age.',
              'To enable the transport of craftsmen or other service providers to your address.',
              'To allow a craftsman or other service provider to contact you regarding a service.',
              'To send status updates regarding our services.',
              'For other communication with you as a customer, including responding to enquiries.',
              'To update your address details.',
              'To apply for RUT or ROT deductions.',
              'To conduct profiling as described above.',
              'To investigate complaints.',
            ],
          },
        ],
      },
      {
        heading: 'Do we share your personal data with other parties?',
        level: 2,
        blocks: [
          'We share your personal data with:',
          { list: ['Any partners who will perform part of the services within MaxFix’s service.'] },
        ],
      },
      {
        heading: 'What are your rights?',
        level: 2,
        blocks: [
          'You have the right to request a copy of all personal data that we process about you and the right to obtain your personal data. You also have the right to request correction or deletion of personal data and to request a restriction on the processing of personal data that concerns you.',
          'If you believe that we have processed your personal data incorrectly, you have the right to file a complaint with the Swedish Authority for Privacy Protection (Integritetsskyddsmyndigheten).',
        ],
      },
      {
        heading: 'Contact information',
        level: 2,
        blocks: [
          'If you have questions about our processing of your personal data, you can contact us via email at info@maxfix.nu or by phone at 08-4002 08 08.',
        ],
      },
      {
        heading: 'MaxFix – General terms and conditions for the service',
        level: 2,
        blocks: [],
      },
      {
        heading: '1. Applicability',
        blocks: [
          'These general terms and conditions apply to all assignments performed, and to be performed, by MaxFix for you as a consumer and customer.',
        ],
      },
      {
        heading: '2. Information management',
        blocks: [
          'To carry out the Service, we need to process your personal data. We process your personal data as the data controller, among other things, to be able to perform the Service for you as a Customer, provide you with a customised experience, and information about the service and offers. For more information on how we handle your personal data, you can contact us via info@maxfix.nu.',
        ],
      },
      {
        heading: '3. Booking the Service',
        blocks: [
          'To book a Service, you must be at least 18 years old. Service orders are made via the website, email or phone. If something has gone wrong or you wish to make changes, contact us via info@maxfix.nu or 08-4002 08 08.',
        ],
      },
      {
        heading: '4. Payment for the Service',
        blocks: [
          '4.1 Payment is made against an email invoice, 10 days net from the time the work is performed. If payment is not made by the due date, a reminder with a reminder fee will be sent by post.',
          '4.2 For services that qualify for tax deductions, the Customer pays 50% of the labour cost for RUT services and 70% of the labour cost for ROT services, provided the requirements for such tax deductions are met. If the tax deduction is denied by the Swedish Tax Agency, an invoice for the difference will be sent.',
          '4.3 Pricing for the Service to the Customer is based on the time worked per craftsman. Current prices are listed on the website www.maxfix.se.',
        ],
      },
      {
        heading: '5. Right of withdrawal, cancellation and rebooking',
        blocks: [
          '5.1 MaxFix always allows the Customer to cancel or rebook their Service booking up to 24 hours before the scheduled execution. To exercise the right of withdrawal or to cancel and rebook, the Customer must send a clear and explicit notice of the decision to withdraw from the agreement (e.g. a phone call or email). For smooth handling, MaxFix recommends that the Customer sends the notice to info@maxfix.nu.',
          'If the Customer cancels or rebooks less than 24 hours before the agreed time, or if the Customer does not appear according to point 11.1 below, the full cost of the booked Service will be invoiced. This assumes that the Customer’s right of withdrawal has expired.',
          '5.2 MaxFix and/or an individual executing craftsman have the right to terminate or cancel an assignment at any time, at no cost to MaxFix, if MaxFix and/or the craftsman assess that the craftsman’s safety during the execution of the Service cannot be guaranteed, and this is due to the Customer (e.g. in cases of violence, threats of violence, abuse or harassment). MaxFix also has the right to cancel a Service in case of the Customer’s incitement against an ethnic group, discrimination or behaviour that otherwise violates the law or good business ethics. The Customer will then be invoiced the stated cost of the booking.',
          '5.3 MaxFix has the right to cancel a booked Service if the conditions for correctly performing such Service are not met.',
          '5.4 The Customer and MaxFix shall agree on when the Service is considered completed. MaxFix reserves the right to specify the time for the completion of the Service until the current craftsman has visited the Customer and had the opportunity to estimate the scope of the Service on site.',
        ],
      },
      {
        heading: '6. Commitment and responsibility',
        blocks: [
          '6.1 MaxFix shall use competent and suitable, and where relevant, authorised craftsmen when performing the Service.',
          '6.2 MaxFix is responsible for ensuring that the Service is performed in a professional manner. If the Customer wishes the Service to be performed in a manner that deviates from professional standards against the craftsman’s advice, the Customer is responsible for the result.',
          '6.3 MaxFix, as well as its subcontractor performing the Service, are insured for liability.',
        ],
      },
      {
        heading: '7. Complaints',
        blocks: ['If the Customer believes that the Service is faulty, the Customer shall notify MaxFix of this within a reasonable time.'],
      },
      {
        heading: '8. Disputes',
        blocks: [
          'The Customer has the right to have a dispute examined outside of court by the National Board for Consumer Disputes (ARN), www.arn.se, postal address Allmänna reklamationsnämnden, Box 174, 101 23 Stockholm. MaxFix participates in any dispute procedure and follows ARN’s recommendations.',
        ],
      },
      {
        heading: '9. Force majeure',
        blocks: [
          'Strikes, blockades or other events beyond MaxFix’s control, such as war, riots, fires, explosions or explosion hazards, extreme weather conditions and interventions by public authorities, which mean that MaxFix cannot, or can only at abnormally high cost, fulfil its obligations under this agreement, release MaxFix from fulfilling these obligations for as long as the situation persists.',
        ],
      },
      {
        heading: '10. Limitation of liability',
        blocks: [
          '10.1 The Customer must be present at the beginning and end of the assignment, as well as when necessary in between, for a review of the work details if the craftsman so requests.',
          '10.2 The Customer is responsible for ensuring that no obstacles, such as furniture, paintings or cables, hinder the installation or execution of the Service.',
          '10.3 The Customer must assist and provide information to the craftsman to avoid damaging pipes, cables or similar, visible or not, during installation.',
          '10.4 MaxFix is not responsible for errors in installation materials and/or products provided by third parties or other retailers.',
          '10.5 MaxFix is not responsible for errors arising from the Customer’s handling or factors beyond MaxFix’s control.',
          '10.6 MaxFix is not responsible for incorrect information or otherwise incorrect service choices made by the Customer.',
          '10.7 MaxFix is not responsible for loss in business operations.',
          '10.8 The Customer must take reasonable measures to limit any damage caused by the craftsman. If the Customer fails to do so, they are responsible for damage that could have been avoided if measures had been taken.',
        ],
      },
      {
        heading: '11. Replacement of performer',
        blocks: ['MaxFix has the right to replace the designated craftsman without informing the Customer.'],
      },
      {
        heading: '12. Price adjustments and errors in information',
        blocks: [
          'MaxFix reserves the right for errors in prices and information presented on the website and in other communications, and reserves the right to adjust these from time to time and to inform the Customer through the publication of corrected/adjusted information.',
        ],
      },
      {
        heading: '13. Quotes',
        blocks: [
          'We reserve the right to adjust the final price of the quote and any pricing errors that may arise, and reserve the right to reject the quote.',
        ],
      },
      {
        heading: '14. Materials',
        blocks: [
          'MaxFix ensures the provision of necessary materials, which will then be invoiced with a 10% surcharge. This way, material availability during the project period is secured, and any waiting time does not need to be billed as extra time.',
        ],
      },
      {
        heading: '15. Separate invoices',
        blocks: [
          'Invoices are separated based on the type of deduction; therefore, two separate invoices will be issued for jobs such as furniture assembly (RUT) and electrical work (ROT).',
        ],
      },
      {
        heading: '16. Paper invoices',
        blocks: ['A fee of SEK 60 is charged for paper invoices (consider the environment and provide an email address for invoicing).'],
      },
      {
        heading: '17. Failed visits',
        blocks: ['A failed visit is invoiced as a start fee (travel and 2 hours).'],
      },
      {
        heading: '18. Consultation',
        blocks: ['Consultation is invoiced at the same rate as furniture assembly (travel and 2 hours, not eligible for ROT/RUT).'],
      },
      {
        heading: '19. Conditions for RUT and ROT deductions',
        blocks: [
          'To qualify for a RUT deduction, the following conditions must be met:',
          {
            list: [
              'You must live in the residence where the service is performed.',
              'You must be invoiced for the service and/or have the expense for the service.',
              'You must have RUT deduction left to use. The ROT and RUT deductions together are a maximum of SEK 75,000 per person per year. A maximum of SEK 50,000 may be a ROT deduction (from 2024, the ROT deduction will be increased to SEK 75,000 per year).',
              'You must be resident in Sweden and pay tax here (unlimited tax liability) or live abroad but choose to be taxed in Sweden according to the Income Tax Act, where at least 90% of earned income is income in Sweden (limited tax liability).',
              'You must have turned 18 by the end of the year at the latest.',
            ],
          },
          'An estate can receive ROT deductions for work carried out before the death. A sole co-owner of the estate can receive a ROT deduction for work carried out and paid for after the estate inventory has been registered with the Swedish Tax Agency. If there are several co-owners of the estate, the estate must be distributed before anyone can receive a ROT deduction. Keep in mind that title registration must be applied for within three months.',
          'If two or more owners use the home, you can share the ROT deduction. In total, however, the ROT deduction can never be higher than 30 percent of the total labour cost. To receive a ROT deduction, you must be invoiced for or pay for the work. The ROT deduction does not apply to material costs.',
        ],
      },
      {
        heading: 'Time estimates and billing',
        level: 3,
        blocks: [
          'All time estimates provided by us are estimates only and are not binding. Time estimates are given in good faith based on information available at the time of the estimate, but actual work efforts may vary. Therefore, we are not responsible for any deviations from the stated estimates, and no claims or lawsuits can be brought against us due to these deviations.',
          'Our services are invoiced on an ongoing basis according to actual time spent. This means that there are no predetermined work steps that are “included” in a fixed cost. The work effort is adapted to the specific needs and circumstances that arise during the course of the project, and we reserve the right to bill for all time and resources required to complete the work.',
        ],
      },
      {
        heading: 'Labour cost',
        level: 3,
        blocks: [
          'Only the labour cost gives the right to a tax deduction, and the company may deduct a maximum of 30 percent of the cost of approved work. Only time worked on site with you entitles you to a tax deduction.',
        ],
      },
      {
        heading: 'Material costs',
        level: 3,
        blocks: [
          'The material cost must not be the basis for tax deductions – you must pay it in full to the company. The company must not give you a lower price for the material than what they paid.',
          'Materials that are rented or leased also do not give the right to a ROT deduction.',
        ],
      },
      {
        heading: 'Other costs',
        level: 3,
        blocks: [
          'Other costs incurred by the contractor in connection with the work do not give the right to a tax reduction. You must pay these costs in full to the company. The company may, for example, have other costs for:',
          {
            list: [
              'travel time to and from you, as well as when purchasing materials and removing waste',
              'cost per mile for cars and other transport vehicles, including for example fuel, tax and insurance',
              'accommodation and allowances',
              'machinery, equipment and waste management',
              'administration.',
            ],
          },
          'The company may not, for example, waive travel costs. If the company does not charge for travel, the Swedish Tax Agency considers it included in the cost of work, and may then pay out a lower amount than the requested tax reduction.',
        ],
      },
      {
        heading: '21. ROT/RUT deductions are not available if you:',
        blocks: [
          {
            list: [
              'are a sole trader or a partner in a trading partnership',
              'receive sickness or activity compensation',
              'file your tax return in a country other than Sweden',
              'want to calculate the deduction for a deceased person.',
            ],
          },
        ],
      },
    ],
  },
};

export const skatteverketUrl =
  'https://skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete.4.2e56d4ba1202f95012080002966.html';
