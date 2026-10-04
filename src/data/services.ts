import type { StaticImageData } from 'next/image';
import type { Lang } from '~/i18n';
import { serviceSlugs } from '~/i18n/routes';

import snickerierImg from '~/assets/images/services/snickerier.jpg';
import platsbyggtImg from '~/assets/images/services/platsbyggt.jpg';
import malerierImg from '~/assets/images/services/malerier.jpg';
import tapeterImg from '~/assets/images/services/tapeter.jpg';
import golvImg from '~/assets/images/services/golv.jpg';
import elImg from '~/assets/images/services/el.jpg';
import moblerImg from '~/assets/images/gallery/tavlor.jpg';
import gardinerImg from '~/assets/images/services/gardiner.jpg';
import utomhusImg from '~/assets/images/services/utomhussnickerier.jpg';
import fasadImg from '~/assets/images/services/fasadmalning.jpg';
import stadImg from '~/assets/images/services/stad.jpg';
import designImg from '~/assets/images/services/design.jpg';

type L<T> = Record<Lang, T>;

export type ServiceGroup = 'inside' | 'outside' | 'home' | 'featured';

export interface ServicePage {
  heading: string;
  intro: string[];
  list: string[];
  sections?: { title: string; text: string }[];
  tips?: { title: string; text: string }[];
  notes: string[];
  /** Conditions that must be shown prominently on the page. */
  conditions?: { title: string; text: string }[];
}

export interface Service {
  id: string;
  group: ServiceGroup;
  image: StaticImageData;
  imageAlt: L<string>;
  slug: L<string>;
  title: L<string>;
  short: L<string>;
  examples: L<string[]>;
  /** Service-specific price shown in listings, when the site states one. */
  priceNote?: L<string>;
  page: L<ServicePage>;
}

export const services: Service[] = [
  {
    id: 'snickerier',
    group: 'inside',
    image: snickerierImg,
    imageAlt: {
      sv: 'Nybyggd vägg med lister och ram runt en äldre dörr',
      en: 'Newly built wall with mouldings and a frame around an old door',
    },
    slug: serviceSlugs['snickerier'],
    title: { sv: 'Snickerier', en: 'Carpentry' },
    short: {
      sv: 'Små snickerijobb är vår specialitet – inget jobb är för litet.',
      en: 'Small carpentry jobs are our speciality – no job is too small.',
    },
    examples: {
      sv: ['Hyllor', 'Dörr- och fönsterfoder', 'Golvlister', 'Altangolv'],
      en: ['Shelves', 'Door and window casings', 'Skirting boards', 'Decking'],
    },
    page: {
      sv: {
        heading: 'Snickare i Stockholm för mindre jobb',
        intro: [
          'Har du något mindre snickeriarbete som måste fixas hemma, men alla byggföretag du kontaktar säger att de inte tar sig an så små jobb? Då kan våra erfarna snickare på MaxFix hjälpa dig med ditt hemmafix.',
          'Vi kan fixa allt som har med snickerier att göra i hemmet – det spelar ingen roll hur litet jobbet är. Det är just små snickerijobb vi är specialiserade på.',
        ],
        list: [
          'Bygga platsbyggda garderober',
          'Montera hyllor',
          'Montera dörrfoder och fönsterfoder',
          'Kapa och montera golvlister',
          'Montering av möbler',
          'Lägga altangolv',
        ],
        sections: [
          {
            title: 'Finsnickeri',
            text: 'Detaljerade, skräddarsydda lösningar för ditt hem – till exempel specialbyggda möbler, hyllor och garderober. Våra snickare skapar platsbyggda lösningar som kombinerar en snygg design med smart funktion.',
          },
          {
            title: 'Träsnickeri',
            text: 'Från grundläggande snickeri till mer avancerade konstruktioner, som en altan, en pergola eller nya trappor. Våra snickare har kunskap om olika träslag och behandlingsmetoder för hållbara och väderbeständiga lösningar, inomhus som utomhus.',
          },
          {
            title: 'Kök',
            text: 'Vi hjälper dig med köksmontering, att anpassa köksinredning och att skapa praktiska, skräddarsydda lösningar som maximerar utrymmet. Vid behov samarbetar vi med andra yrkesgrupper, som elektriker och rörmokare, för att leverera en helhetslösning.',
          },
          {
            title: 'Fönster',
            text: 'Vi hjälper dig med installation av nya fönster och renovering av gamla. Fönsterrenovering är tidskrävande och kräver noggrannhet så att fönstren inte går sönder – ta hjälp av någon som kan hantera fönster korrekt.',
          },
        ],
        notes: [
          'Vi hjälper dig med alla snickerier som rör golv, väggar och innertak. Berätta gärna vilken typ av väggar du har så vet vi vilka verktyg vi ska ta med oss.',
          'Du bestämmer själv vilka material vi ska använda – antingen köper du dem själv eller så köper vi dem åt dig mot en tilläggskostnad.',
          'Uppskatta själv hur lång tid arbetet tar. Vår minsta debitering är två timmar, så samla gärna ihop flera jobb till samma besök.',
        ],
      },
      en: {
        heading: 'Carpenters in Stockholm for smaller jobs',
        intro: [
          'Do you have a smaller carpentry job that needs fixing at home, but every building company you contact says the job is too small? Then our experienced carpenters at MaxFix can help.',
          'We fix everything carpentry-related in the home – it does not matter how small the job is. Small carpentry jobs are exactly what we specialise in.',
        ],
        list: [
          'Building fitted wardrobes',
          'Mounting shelves',
          'Fitting door and window casings',
          'Cutting and fitting skirting boards',
          'Furniture assembly',
          'Laying decking',
        ],
        sections: [
          {
            title: 'Fine joinery',
            text: 'Detailed, made-to-measure solutions for your home – such as custom furniture, shelving and wardrobes. Our carpenters build fitted solutions that combine good design with smart function.',
          },
          {
            title: 'Woodwork',
            text: 'From basic carpentry to more advanced constructions, such as a deck, a pergola or new stairs. Our carpenters know different timbers and treatments to deliver durable, weather-resistant results indoors and out.',
          },
          {
            title: 'Kitchens',
            text: 'We help with kitchen assembly, adapting kitchen fittings and building practical made-to-measure solutions that make the most of the space. When needed we work closely with electricians and plumbers to deliver a complete solution.',
          },
          {
            title: 'Windows',
            text: 'We help with installing new windows and restoring old ones. Window restoration is time-consuming and requires care so nothing breaks – get help from someone who knows how to handle windows properly.',
          },
        ],
        notes: [
          'We handle all carpentry related to floors, walls and ceilings. Let us know what type of walls you have so we bring the right tools.',
          'You decide which materials we use – either you buy them yourself, or we buy them for you at an additional cost.',
          'Estimate how long the work will take. Our minimum charge is two hours, so feel free to gather several jobs into one visit.',
        ],
      },
    },
  },
  {
    id: 'malerier',
    group: 'inside',
    image: malerierImg,
    imageAlt: { sv: 'Ljust vardagsrum med nymålad vägg', en: 'Bright living room with a freshly painted wall' },
    slug: serviceSlugs['malerier'],
    title: { sv: 'Målerier', en: 'Painting' },
    short: {
      sv: 'Ommålning av väggar och mindre rum – vi tar gärna de små uppdragen.',
      en: 'Repainting walls and smaller rooms – we gladly take the small jobs.',
    },
    examples: {
      sv: ['Grundmålning', 'Ommålning', 'Väggmålning', 'Ett mindre rum'],
      en: ['Priming', 'Repainting', 'Wall painting', 'A smaller room'],
    },
    page: {
      sv: {
        heading: 'Målare i Stockholm för småjobb',
        intro: [
          'Har du bett måleriföretag om offert för ett mindre arbete men alltid blivit nekad, för att de inte vill ta sig an småjobb? Då kan våra målare på MaxFix hjälpa dig – mindre måleriarbeten är en del av vår expertis.',
          'Vi kommer gärna ut och målar om hemma hos dig, och för oss spelar det ingen roll hur litet arbetet är. Våra skickliga hantverkare och målare har rätt kompetens för att göra ett hantverksmässigt jobb och ge dig ett snyggt slutresultat.',
        ],
        list: ['Grundmålning', 'Ommålning', 'Väggmålning', 'Ett mindre rum'],
        notes: [
          'Vi tar oss an alla måleriarbeten du behöver ha utförda – vårt enda krav är att det ska vara ett litet jobb. Vi bokar alltid in minst två timmar per besök.',
          'Du väljer och köper själv färg och material. Vi kan även hjälpa dig med det mot en tilläggskostnad.',
          'Berätta vilket projekt det gäller och hur dina väggar ser ut i dag. Har du fler småprojekt – el, golv eller snickerier – tar vi dem vid samma besök.',
        ],
      },
      en: {
        heading: 'Painters in Stockholm for small jobs',
        intro: [
          'Have you asked painting companies to quote for a smaller job, only to be turned down because they do not take small jobs? Then our painters at MaxFix can help – smaller painting jobs are part of our expertise.',
          'We are happy to come and repaint at your place, however small the job. Our skilled craftsmen and painters have the right skills to do a proper job and leave you with a neat result.',
        ],
        list: ['Priming', 'Repainting', 'Wall painting', 'A smaller room'],
        notes: [
          'We take on any painting job you need done – our only requirement is that it is a small job. We always book at least two hours per visit.',
          'You choose and buy the paint and materials yourself. We can also do this for you at an additional cost.',
          'Tell us about the project and what your walls look like today. Got more small jobs – electrical, flooring or carpentry? We can do them in the same visit.',
        ],
      },
    },
  },
  {
    id: 'tapeter',
    group: 'inside',
    image: tapeterImg,
    imageAlt: {
      sv: 'Mörk tapet med blommönster uppsatt på en lång vägg',
      en: 'Dark floral wallpaper hung along a long wall',
    },
    slug: serviceSlugs['tapeter'],
    title: { sv: 'Tapeter', en: 'Wallpapering' },
    short: {
      sv: 'Fondväggar och mindre rum, med noggrant underarbete.',
      en: 'Feature walls and smaller rooms, with careful preparation.',
    },
    examples: {
      sv: ['Fondvägg', 'Mindre rum, t.ex. en hall', 'Bredspackling'],
      en: ['Feature wall', 'Smaller rooms, e.g. a hallway', 'Skim coating'],
    },
    page: {
      sv: {
        heading: 'Tapetsering i Stockholm',
        intro: [
          'Vill du ha en fondvägg hemma, eller tapetsera om ett mindre rum? Vi hjälper dig med alla mindre tapetseringsuppdrag i Stockholm. Våra hantverkare och målare har lång erfarenhet av att sätta upp tapeter hemma hos privatpersoner.',
          'Att tapetsera är en konst i sig, särskilt om man vill ha ett hantverksmässigt resultat – väggarna ska förberedas på rätt sätt innan de nya tapeterna kommer upp. Självklart gör vi ett noggrant underarbete med bredspackling.',
        ],
        list: ['Tapetsering av fondvägg', 'Mindre rum, t.ex. en hall'],
        notes: [
          'Du väljer själv vilka tapeter vi ska sätta upp och köper hem materialet. Vi kan även göra det åt dig mot en tilläggskostnad.',
          'Vi skickar inte ut någon offert – du uppskattar själv hur lång tid projektet tar och bokar den tid som passar dig.',
          'Har du andra småjobb, som målning, gardinuppsättning eller el? Vi tar dem gärna i samband med tapetseringen.',
        ],
      },
      en: {
        heading: 'Wallpapering in Stockholm',
        intro: [
          'Would you like a feature wall at home, or new wallpaper in a smaller room? We help with all smaller wallpapering jobs in Stockholm. Our craftsmen and painters have long experience of hanging wallpaper in private homes.',
          'Wallpapering is an art in itself if you want a craftsman-like result – walls must be properly prepared before the new paper goes up. Of course we do careful preparation with skim coating.',
        ],
        list: ['Feature walls', 'Smaller rooms, e.g. a hallway'],
        notes: [
          'You choose the wallpaper and buy the materials. We can also do this for you at an additional cost.',
          'We do not send out quotes – you estimate how long the project will take and book a time that suits you.',
          'Other small jobs such as painting, curtains or electrical work? We are happy to do them at the same time.',
        ],
      },
    },
  },
  {
    id: 'golv',
    group: 'inside',
    image: golvImg,
    imageAlt: { sv: 'Kök med ljust trägolv', en: 'Kitchen with a light wooden floor' },
    slug: serviceSlugs['golv'],
    title: { sv: 'Golv', en: 'Flooring' },
    short: {
      sv: 'Golvläggning och slipning – även för riktigt små ytor.',
      en: 'Floor laying and sanding – even for really small areas.',
    },
    examples: {
      sv: ['Olika golvtyper', 'Slipning av parkett', 'Laminatgolv'],
      en: ['Different floor types', 'Parquet sanding', 'Laminate'],
    },
    page: {
      sv: {
        heading: 'Golvläggare i Stockholm',
        intro: [
          'Har golvet blivit gammalt och slitet? Om golvläggaren kommer med en alldeles för dyr offert – eller inte ens vill hjälpa dig för att ytan är för liten – kan du kontakta oss på MaxFix.',
          'Vi lägger ett nytt golv eller slipar ditt gamla. Det spelar ingen roll hur liten yta det gäller – allt från köket till en mindre toalett. Vi kan till exempel slipa ett gammalt parkettgolv så att det blir som nytt, eller lägga laminatgolv och andra golv.',
        ],
        list: ['Golvläggning av olika golvtyper', 'Slipning', 'Förarbete för golv (ej inräknat)'],
        notes: [
          'Berätta vilken typ av golvtjänst du behöver och vilka material du vill använda. Uppskatta ungefär hur lång tid det tar och boka en tid.',
          'Du köper in materialet – eller så köper vi in det åt dig mot en tilläggsavgift.',
          'Får vi tid över kan vi till exempel sätta upp gardiner eller montera möbler.',
        ],
      },
      en: {
        heading: 'Floor fitters in Stockholm',
        intro: [
          'Has your floor become old and worn? If the local floor fitter quotes far too much – or will not help at all because the area is too small – get in touch with us at MaxFix.',
          'We lay a new floor or sand your old one. It does not matter how small the area is – anything from your kitchen to a small toilet. For example, we can sand an old parquet floor so it looks like new, or lay laminate and other floor types.',
        ],
        list: ['Laying different floor types', 'Sanding', 'Floor preparation (not included)'],
        notes: [
          'Tell us which flooring service you need and which materials you want to use. Roughly estimate the time required and book a slot.',
          'You buy the materials – or we can buy them for you for an additional fee.',
          'If we have time to spare, we can also put up curtains or assemble furniture, for example.',
        ],
      },
    },
  },
  {
    id: 'el',
    group: 'inside',
    image: elImg,
    imageAlt: { sv: 'Hängande taklampor och glödlampor', en: 'Pendant lamps and light bulbs' },
    slug: serviceSlugs['el'],
    title: { sv: 'El', en: 'Electrical' },
    short: {
      sv: 'Strömbrytare, dimmer, väggkontakter och lampor.',
      en: 'Switches, dimmers, wall sockets and lamps.',
    },
    priceNote: { sv: '630 kr/tim efter ROT', en: 'SEK 630/h after ROT' },
    examples: {
      sv: ['Byta dimmer', 'Byta strömbrytare', 'Byta väggkontakter', 'Byta lampa'],
      en: ['Replace dimmers', 'Replace switches', 'Replace wall sockets', 'Replace lamps'],
    },
    page: {
      sv: {
        heading: 'Elektriker i Stockholm för småjobb',
        intro: [
          'Har du några mindre elarbeten som måste fixas hemma, men de stora elfirmorna vill inte hjälpa dig med små projekt? Kontakta oss på MaxFix så kommer vi ut och hjälper dig med alla småarbeten.',
          'Elprojekt är inget du själv bör hantera – det är riskfyllt att syssla med el och lampor. Våra duktiga hantverkare har rätt kunskap och erfarenhet för att hjälpa dig med dina mindre projekt.',
        ],
        list: [
          'Byta dimmer',
          'Byta strömbrytare',
          'Byta väggkontakter',
          'Byta lampa',
          'Byta lampkontakt',
          'Byta glödlampor',
          'Byta proppar',
        ],
        notes: [
          'Inget projekt är för litet – du bestämmer vad du behöver hjälp med. Vi tar betalt för minst två timmar, så samla ihop dina småprojekt i hemmet så hjälper vi dig med allihop vid samma besök.',
          'Vi bestämmer det datum och den tid som passar dig bäst och dyker upp med rätt verktyg. Du införskaffar själv det material som behövs så att vi kan sätta igång direkt.',
        ],
      },
      en: {
        heading: 'Electricians in Stockholm for small jobs',
        intro: [
          'Do you have some smaller electrical jobs that need fixing at home, but the big electrical firms will not take small projects? Contact us at MaxFix and we will come and help with all the small jobs.',
          'Electrical work is not something you should handle yourself – working with electricity and lamps is risky. Our skilled craftsmen have the right knowledge and experience to help with your smaller projects.',
        ],
        list: [
          'Replacing dimmers',
          'Replacing switches',
          'Replacing wall sockets',
          'Replacing lamps',
          'Replacing lamp connectors',
          'Replacing light bulbs',
          'Replacing fuses',
        ],
        notes: [
          'No project is too small – you decide what you need help with. We charge for a minimum of two hours, so gather your small jobs around the home and we will do them all in one visit.',
          'We agree on the date and time that suits you best and turn up with the right tools. You buy the materials needed in advance so we can get started straight away.',
        ],
      },
    },
  },
  {
    id: 'mobler',
    group: 'inside',
    image: moblerImg,
    imageAlt: {
      sv: 'Uppsatta tavlor och gardinstång i ett sovrum',
      en: 'Pictures and a curtain rod put up in a bedroom',
    },
    slug: serviceSlugs['mobler'],
    title: { sv: 'Möbler', en: 'Furniture' },
    short: {
      sv: 'Montering, IKEA-möbler, hyllor, tavlor och möbelflytt i hemmet.',
      en: 'Assembly, IKEA furniture, shelves, pictures and moving furniture at home.',
    },
    examples: {
      sv: ['Möbelmontering', 'IKEA-möbler', 'Hyllor och tavlor', 'Möbelförflyttning'],
      en: ['Furniture assembly', 'IKEA furniture', 'Shelves and pictures', 'Moving furniture'],
    },
    page: {
      sv: {
        heading: 'Möbelmontage i Stockholm',
        intro: [
          'Behöver du hjälp med montering av dina möbler? Kontakta oss på MaxFix så kommer vi snabbt ut och hjälper dig. Vi är specialiserade på små projekt i hemmet – boka två timmar så hjälper vi dig med allt tänkbart.',
          'Du väljer själv vilka projekt du vill ha hjälp med och kan kombinera dem som du vill. Kanske vill du både få golvlister fastspikade och möblera om vid samma besök.',
        ],
        list: [
          'Möbelmontering',
          'Demontering',
          'Upphängning av hyllor och tavlor',
          'Möbelförflyttning',
          'Möbelrenovering',
          'Montage av IKEA-möbler',
        ],
        notes: [
          'Har du köpt hem nya möbler dyker vi upp med rätt verktyg och skruvar ihop dem i ett nafs. Detsamma gäller hyllor på väggarna, upphängning av tavlor och gardinmontage.',
          'Vi hjälper dig också att flytta runt möbler i hemmet om du vill möblera om. Inga soffor eller sängar är för tunga och inga projekt är för små.',
        ],
      },
      en: {
        heading: 'Furniture assembly in Stockholm',
        intro: [
          'Need help assembling your furniture? Contact us at MaxFix and we will quickly come and help. We specialise in small projects in the home – book two hours and we will help with anything you can think of.',
          'You choose which jobs you want help with and combine them however you like – perhaps nailing down skirting boards and rearranging furniture in the same visit.',
        ],
        list: [
          'Furniture assembly',
          'Dismantling',
          'Hanging shelves and pictures',
          'Moving furniture',
          'Furniture restoration',
          'Assembling IKEA furniture',
        ],
        notes: [
          'Bought new furniture? We turn up with the right tools and put it together in no time. The same goes for wall shelves, hanging pictures and curtain fitting.',
          'We can also help you move furniture around at home. No sofa or bed is too heavy and no project is too small.',
        ],
      },
    },
  },
  {
    id: 'gardiner',
    group: 'inside',
    image: gardinerImg,
    imageAlt: { sv: 'Fönster med gardiner och en fönsterbänk', en: 'Window with curtains and a window seat' },
    slug: serviceSlugs['gardiner'],
    title: { sv: 'Gardiner', en: 'Curtains' },
    short: {
      sv: 'Gardinstänger, nedtagning och uppsättning av gardiner.',
      en: 'Curtain rods, taking down and putting up curtains.',
    },
    examples: {
      sv: ['Gardinstång', 'Ta ner gamla gardiner', 'Sätta upp nya'],
      en: ['Curtain rods', 'Taking down old curtains', 'Putting up new ones'],
    },
    page: {
      sv: {
        heading: 'Gardinmontering i Stockholm',
        intro: [
          'Ibland kan det vara svårt att sätta upp gardiner själv, och byggföretag tar sällan så små uppdrag. Bor du i Stockholm kan du alltid ringa oss på MaxFix, så kommer vi ut och hjälper dig med gardinbyte och gardinmontering.',
          'Kanske vill du montera en mer avancerad lösning – eller så har du helt enkelt inte tid i vardagen. För oss är inget projekt för litet.',
        ],
        list: ['Montera gardinstång', 'Ta ner gamla gardiner', 'Sätta upp nya gardiner'],
        notes: [
          'Vår minsta debitering är två timmar. Ska du bara byta gardiner i några fönster kan du passa på att kombinera det med andra småjobb i hemmet.',
          'Vill du ha nya gardiner köper du själv de du vill ha innan vi kommer – då kan vi sätta igång direkt.',
        ],
      },
      en: {
        heading: 'Curtain fitting in Stockholm',
        intro: [
          'Putting up curtains yourself can be tricky, and building companies rarely take such small jobs. If you live in Stockholm you can always call us at MaxFix and we will come and help you change and hang your curtains.',
          'Perhaps you want a more advanced set-up – or you simply do not have the time in everyday life. For us, no project is too small.',
        ],
        list: ['Fitting curtain rods', 'Taking down old curtains', 'Putting up new curtains'],
        notes: [
          'Our minimum charge is two hours. If you only need curtains changed in a few windows, combine it with other small jobs around the home.',
          'If you want new curtains, buy the ones you like before we arrive – then we can get started straight away.',
        ],
      },
    },
  },
  {
    id: 'utomhussnickerier',
    group: 'outside',
    image: utomhusImg,
    imageAlt: {
      sv: 'Nytillverkad trägrind i en trädgård',
      en: 'Newly built wooden gate in a garden',
    },
    slug: serviceSlugs['utomhussnickerier'],
    title: { sv: 'Utomhussnickerier', en: 'Outdoor carpentry' },
    short: {
      sv: 'Fasadplankor, altan, trappor, räcken och friggebodar.',
      en: 'Facade boards, decks, steps, railings and garden sheds.',
    },
    examples: {
      sv: ['Fasadplankor', 'Altangolv och altantrapp', 'Balkongräcken', 'Friggebod'],
      en: ['Facade boards', 'Decking and deck steps', 'Balcony railings', 'Garden shed'],
    },
    page: {
      sv: {
        heading: 'Snickerier utomhus i Stockholm',
        intro: [
          'Det är inte lätt att bo i hus om man inte är händig. Murkna plankor måste bytas, kärvande ytterdörrar måste oljas in och altantrappor måste byggas.',
          'Stora byggfirmor säger ofta nej till små projekt – men inte vi på MaxFix. Oavsett om du behöver hjälp med nya små byggprojekt eller med att renovera befintliga saker kan du kontakta oss.',
        ],
        list: [
          'Fönsterfoder',
          'Kärvande ytterdörr',
          'Byte av fasadplankor',
          'Balkongräcken',
          'Altangolv',
          'Altantrapp',
          'Friggebod',
        ],
        notes: [
          'Listan över utomhussnickerier vi kan hjälpa dig med är oändlig – du bestämmer vilka projekt du behöver hjälp med. Små projekt är snarare vår specialitet.',
          'Vi tar betalt för minst två timmar per besök, så samla ihop de småprojekt du behöver hjälp med.',
          'Material köper du själv innan vi kommer, eller så köper vi det åt dig mot en tilläggskostnad.',
        ],
      },
      en: {
        heading: 'Outdoor carpentry in Stockholm',
        intro: [
          'Living in a house is not easy if you are not handy. Rotten boards need replacing, sticking front doors need oiling and deck steps need building.',
          'Big building firms often say no to small projects – but we at MaxFix do not. Whether you need help with new small builds or with repairing what you already have, get in touch.',
        ],
        list: [
          'Window casings',
          'Sticking front doors',
          'Replacing facade boards',
          'Balcony railings',
          'Decking',
          'Deck steps',
          'Garden sheds (friggebod)',
        ],
        notes: [
          'The list of outdoor carpentry we can help with is endless – you decide which projects you need help with. Small projects are, if anything, our speciality.',
          'We charge for a minimum of two hours per visit, so gather the small jobs you need help with.',
          'Buy the materials yourself before we arrive, or we can buy them for you at an additional cost.',
        ],
      },
    },
  },
  {
    id: 'fasadmalning',
    group: 'outside',
    image: fasadImg,
    imageAlt: {
      sv: 'Rött trähus på klippor vid havet',
      en: 'Red wooden house on the rocks by the sea',
    },
    slug: serviceSlugs['fasadmalning'],
    title: { sv: 'Fasadmålning', en: 'Facade painting' },
    short: {
      sv: 'Utomhusmålning, altantvätt och inoljning, staket och bodar.',
      en: 'Exterior painting, deck washing and oiling, fences and sheds.',
    },
    examples: {
      sv: ['Fasadmålning', 'Altantvätt och inoljning', 'Staket och spaljéer', 'Knutfoder'],
      en: ['Facade painting', 'Deck washing and oiling', 'Fences and trellises', 'Corner boards'],
    },
    page: {
      sv: {
        heading: 'Fasadmålning och utomhusmålning i Stockholm',
        intro: [
          'Renodlade målerifirmor är oftast bara intresserade av stora projekt, som att måla hela fasaden. Vill du ha mindre utomhusmålning utförd kan du kontakta oss på MaxFix.',
          'Vi kan givetvis måla om hela ditt hus – men det är framförallt mindre projekt vi specialiserar oss på. Vi gör ett hantverksmässigt arbete med rätt grundarbete: vi slipar och målar, och du väljer färgen.',
        ],
        list: [
          'Fasadmålning',
          'Altantvätt',
          'Inoljning av altan',
          'Bättra på knutfoder',
          'Måla trädgårdsboden',
          'Måla staket eller spaljéer',
        ],
        notes: [
          'Du som kund står själv för materialet, men vi kan hjälpa dig att införskaffa det mot en tilläggskostnad.',
          'Boka via formuläret eller ring oss – berätta vilka projekt du behöver hjälp med.',
        ],
      },
      en: {
        heading: 'Facade and exterior painting in Stockholm',
        intro: [
          'Dedicated painting firms are usually only interested in large projects, such as painting a whole facade. If you want smaller exterior painting jobs done, get in touch with us at MaxFix.',
          'We can of course repaint your entire house – but smaller projects are our speciality. We do craftsman-like work with proper preparation: we sand and paint, and you choose the colour.',
        ],
        list: [
          'Facade painting',
          'Deck washing',
          'Oiling your deck',
          'Touching up corner boards',
          'Painting the garden shed',
          'Painting fences or trellises',
        ],
        notes: [
          'As the customer you provide the materials, but we can help you buy them at an additional cost.',
          'Book via the form or call us – tell us which projects you need help with.',
        ],
      },
    },
  },
  {
    id: 'stad',
    group: 'home',
    image: stadImg,
    imageAlt: { sv: 'Ljust och städat kök med köksö', en: 'Bright, clean kitchen with an island' },
    slug: serviceSlugs['stad'],
    title: { sv: 'Städ', en: 'Cleaning' },
    short: {
      sv: 'Hemstädning i lägenhet eller villa – efter behov eller regelbundet.',
      en: 'Home cleaning in apartments and houses – as needed or regularly.',
    },
    priceNote: { sv: '240 kr/tim efter RUT', en: 'SEK 240/h after RUT' },
    examples: {
      sv: ['Hemstädning', 'Efter behov', 'Utan bindningstid'],
      en: ['Home cleaning', 'As needed', 'No lock-in period'],
    },
    page: {
      sv: {
        heading: 'Städhjälp i Stockholm',
        intro: [
          'Behöver du städhjälp i lägenhet eller villa i Stockholm? Få mer tid över för annat och kom hem till ett nystädat och fräscht hem. Vi bryr oss om ditt hem och anpassar städningen efter dina önskemål och behov.',
          'Anlita oss efter behov eller abonnera på städhjälp mer regelbundet – utan bindningstid. Vi hjälper kunder med hemstädning över hela Stockholm.',
        ],
        list: [
          'Hemstädning i lägenhet och villa',
          'Städning efter behov',
          'Regelbunden städning utan bindningstid',
        ],
        notes: ['Ordinarie pris är 480 kr/tim – 240 kr/tim efter RUT.', 'Vi erbjuder inte flyttstädning.'],
      },
      en: {
        heading: 'Cleaning help in Stockholm',
        intro: [
          'Need cleaning help in an apartment or house in Stockholm? Get more time for other things and come home to a freshly cleaned home. We care about your home and adapt the cleaning to your wishes and needs.',
          'Hire us when needed or subscribe to regular cleaning – with no lock-in period. We help customers with home cleaning all over Stockholm.',
        ],
        list: [
          'Home cleaning in apartments and houses',
          'Cleaning as needed',
          'Regular cleaning with no lock-in period',
        ],
        notes: ['The regular price is SEK 480/h – SEK 240/h after RUT.', 'We do not offer move-out cleaning.'],
      },
    },
  },
  {
    id: 'design',
    group: 'home',
    image: designImg,
    imageAlt: { sv: 'Inrett vardagsrum med mörkgrön vägg', en: 'Furnished living room with a dark green wall' },
    slug: serviceSlugs['design'],
    title: { sv: 'Design services', en: 'Design services' },
    short: {
      sv: 'Hjälp att planera och möblera – med förslag, inköpslista och 3D.',
      en: 'Help planning and furnishing – with ideas, a shopping list and 3D.',
    },
    examples: {
      sv: ['3D (enkel)', 'Inköpslista', 'Installation och montage'],
      en: ['3D (simple)', 'Shopping list', 'Installation and assembly'],
    },
    page: {
      sv: {
        heading: 'Design och heminredning i Stockholm',
        intro: [
          'Ska du flytta till en ny bostad och vet inte var du ska börja? Vi hjälper dig inte bara med målning och montering, utan också med att hitta en smart lösning för ditt boende – hur du kan möblera så att det är bekvämt att leva i.',
          'Berätta hur du vill att ditt hem ska se ut – vilka färger du tycker om och vilken känsla du vill skapa. Vi kommer med förslag och bilder, och kan till och med rita upp det i 3D så att du ser hur det blir i slutändan.',
        ],
        list: ['3D (enkel)', 'Inköpslista', 'Installation och montage'],
        tips: [
          { title: 'Planering', text: 'Planera utrymmet noggrant. Ta hänsyn till rumsstorlekar, möblering och hur rummen ska användas.' },
          { title: 'Funktion', text: 'Tänk på hur du och din familj använder hemmet och skapa funktionella utrymmen som underlättar vardagen.' },
          { title: 'Stil och personlighet', text: 'Välj en stil som passar dig och din livsstil – minimalistisk, modern, traditionell eller något annat.' },
          { title: 'Färgval', text: 'Färger påverkar stämningen. Välj färger som harmoniserar och tänk på hur de påverkar rummets storlek och ljus.' },
          { title: 'Belysning', text: 'Variera mellan allmänbelysning, punktbelysning och stämningsbelysning för en bra balans.' },
          { title: 'Möblering', text: 'Välj möbler som passar rummets storlek och funktion, med tillräckligt med förvaring.' },
          { title: 'Textilier', text: 'Gardiner, mattor och kuddar gör stor skillnad för hur ett rum upplevs.' },
          { title: 'Dekoration', text: 'Använd konst, växter och personliga föremål för att göra ditt hem unikt.' },
          { title: 'Hållbarhet', text: 'Välj hållbara och energieffektiva material och produkter så mycket som möjligt.' },
          { title: 'Budget', text: 'Ha en realistisk budget och prioritera det som är viktigast – investera i kvalitet där det räknas.' },
        ],
        notes: [
          'Det viktigaste är att ditt hem känns som en plats där du trivs och kan koppla av. Det finns inga rätt eller fel när det gäller inredning.',
        ],
      },
      en: {
        heading: 'Design and interior styling in Stockholm',
        intro: [
          'Moving to a new home and not sure where to start? We help not only with painting and assembly, but also with finding a smart solution for your home – how to furnish it so it is comfortable to live in.',
          'Tell us how you want your home to look – which colours you like and what feeling you want to create. We come up with suggestions and images, and can even draw it in 3D so you can see the end result.',
        ],
        list: ['3D (simple)', 'Shopping list', 'Installation and assembly'],
        tips: [
          { title: 'Planning', text: 'Plan the space carefully. Consider room sizes, furniture and how each room will be used.' },
          { title: 'Function', text: 'Think about how you and your family use the home and create functional spaces that make everyday life easier.' },
          { title: 'Style and personality', text: 'Choose a style that suits you and your lifestyle – minimalist, modern, traditional or something else.' },
          { title: 'Colour', text: 'Colours set the mood. Choose colours that work together and consider how they affect the size and light of a room.' },
          { title: 'Lighting', text: 'Mix general, task and mood lighting to get a good balance.' },
          { title: 'Furniture', text: 'Choose furniture that suits the size and purpose of the room, with enough storage.' },
          { title: 'Textiles', text: 'Curtains, rugs and cushions make a big difference to how a room feels.' },
          { title: 'Decoration', text: 'Use art, plants and personal items to make your home your own.' },
          { title: 'Sustainability', text: 'Choose sustainable and energy-efficient materials and products where you can.' },
          { title: 'Budget', text: 'Set a realistic budget and prioritise what matters most – invest in quality where it counts.' },
        ],
        notes: [
          'Most importantly, your home should feel like a place where you are happy and can relax. There is no right or wrong in interior design.',
        ],
      },
    },
  },
  {
    id: 'platsbyggt',
    group: 'featured',
    image: platsbyggtImg,
    imageAlt: {
      sv: 'Vit platsbyggd bokhylla med skåp och TV-nisch',
      en: 'White built-in bookcase with cabinets and a TV niche',
    },
    slug: serviceSlugs['platsbyggt'],
    title: { sv: 'Platsbyggt', en: 'Built-in storage' },
    short: {
      sv: 'Platsbyggda bokhyllor och garderober – endast till fast pris.',
      en: 'Built-in bookcases and wardrobes – fixed price only.',
    },
    priceNote: { sv: 'Fast pris', en: 'Fixed price' },
    examples: {
      sv: ['IKEA Billy, PAX och METOD', '3D-visualisering', 'Målning i valfri färg'],
      en: ['IKEA Billy, PAX and METOD', '3D visualisation', 'Painted in any colour'],
    },
    page: {
      sv: {
        heading: 'Platsbyggda bokhyllor och garderober',
        intro: [
          'Drömmer du om en platsbyggd bokhylla eller garderob som inte bara maximerar förvaringen utan också smälter in perfekt i ditt hem? Vi skapar smarta och stilrena lösningar som är helt anpassade efter dina behov, ditt utrymme och din personliga stil.',
          'Vi utgår från Stockholm och hjälper dig runt hela stan. Vi har även målare och elektriker som hjälper dig med helheten.',
        ],
        list: [
          'Bokhyllor med IKEA Billy som stomme',
          'Garderober med IKEA PAX-system',
          'Lösningar med IKEA METOD',
          'Lösningar byggda från grunden, med fronter från andra leverantörer',
          'Målning i valfri färg – eller måla själv och spara pengar',
          '3D-modellering av ditt projekt (betald tjänst)',
        ],
        sections: [
          {
            title: 'Stomme från IKEA',
            text: 'Vi bygger med IKEA-stommar och fronter för att kombinera kvalitet och prisvärdhet – till exempel Billy-hyllor för bokhyllor och PAX-system för garderober. Vill du ha något helt unikt kan vi även bygga från grunden och beställa fronter från andra leverantörer.',
          },
          {
            title: 'Design och visualisering i 3D',
            text: 'För att hjälpa dig visualisera projektet erbjuder vi 3D-modellering av din bokhylla eller garderob. Modellen ger en tydlig bild av slutresultatet och underlättar planeringen. Observera att detta är en betald tjänst. Du kan alltid begära en offert innan vi sätter igång.',
          },
          {
            title: 'Offert och projektplanering',
            text: 'Vi erbjuder en kostnadsfri offert, men vi gör inte gratis hembesök (vanliga taxor gäller, ej ROT/RUT-avdrag). Vi lägger stor omsorg på att ta fram genomtänkta och användbara lösningar som du kan nyttja oavsett om du anlitar oss eller någon annan.',
          },
        ],
        conditions: [
          {
            title: 'Giltigt pris',
            text: 'Den uppskattade prisuppgift du får vid bokning är bindande, såvida inte priset korrigeras och meddelas efter vårt platsbesök.',
          },
          {
            title: 'Ej löpande timme',
            text: 'Eftersom varje projekt är ett unikt finsnickeri och hantverk arbetar vi endast till fast pris. Projekten kan inte bokas eller räknas om till löpande timmar.',
          },
        ],
        notes: [
          'Kontakta oss för att diskutera ditt projekt och få en offert på din platsbyggda bokhylla eller garderob – med IKEA Billy, PAX eller METOD.',
        ],
      },
      en: {
        heading: 'Built-in bookcases and wardrobes',
        intro: [
          'Dreaming of a built-in bookcase or wardrobe that not only maximises storage but blends perfectly into your home? We create smart, clean-lined solutions tailored to your needs, your space and your personal style.',
          'We are based in Stockholm and work all over the city. We also have painters and electricians to help with the whole project.',
        ],
        list: [
          'Bookcases built on IKEA Billy',
          'Wardrobes built on IKEA PAX',
          'Solutions built on IKEA METOD',
          'Built from scratch, with fronts from other suppliers',
          'Painted in any colour – or paint it yourself and save money',
          '3D modelling of your project (paid service)',
        ],
        sections: [
          {
            title: 'IKEA carcasses',
            text: 'We build with IKEA carcasses and fronts to combine quality and value – for example Billy for bookcases and PAX for wardrobes. Want something completely unique? We can also build from scratch and order fronts from other suppliers.',
          },
          {
            title: 'Design and 3D visualisation',
            text: 'To help you picture the project, we offer 3D modelling of your bookcase or wardrobe. The model gives a clear picture of the result and makes planning easier. Please note that this is a paid service. You can always ask for a quote before we start.',
          },
          {
            title: 'Quotes and planning',
            text: 'We offer a free quote, but we do not make free home visits (regular rates apply, no ROT/RUT deduction). We put real care into thoughtful, usable solutions that you can use whether you hire us or someone else.',
          },
        ],
        conditions: [
          {
            title: 'Valid price',
            text: 'The estimated price you receive when booking is binding, unless it is corrected and communicated after our site visit.',
          },
          {
            title: 'No hourly billing',
            text: 'As every project is unique fine joinery, we work at a fixed price only. Projects cannot be booked or converted to hourly billing.',
          },
        ],
        notes: [
          'Contact us to discuss your project and get a quote for your built-in bookcase or wardrobe – with IKEA Billy, PAX or METOD.',
        ],
      },
    },
  },
];

export const serviceGroups: { id: Exclude<ServiceGroup, 'featured'>; label: L<string> }[] = [
  { id: 'inside', label: { sv: 'Inomhus', en: 'Indoors' } },
  { id: 'outside', label: { sv: 'Utomhus', en: 'Outdoors' } },
  { id: 'home', label: { sv: 'Hem & vardag', en: 'Home & everyday' } },
];

export function getService(id: string): Service {
  const service = services.find((s) => s.id === id);
  if (!service) throw new Error(`Unknown service: ${id}`);
  return service;
}
