import type { StaticImageData } from 'next/image';
import type { Lang } from '~/i18n';

import bokhylla from '~/assets/images/services/platsbyggt.jpg';
import bokhylla3d from '~/assets/images/gallery/bokhylla-3d.jpg';
import hallGarderob from '~/assets/images/gallery/hall-garderob.jpg';
import garderob from '~/assets/images/gallery/garderob.jpg';
import garderobGardin from '~/assets/images/gallery/garderob-gardin.jpg';
import sitthorna from '~/assets/images/gallery/sitthorna.jpg';
import spjalvagg from '~/assets/images/gallery/spjalvagg.jpg';
import spjalpanel from '~/assets/images/gallery/spjalpanel.jpg';
import elementskydd from '~/assets/images/gallery/elementskydd.jpg';
import grind from '~/assets/images/services/utomhussnickerier.jpg';
import balkongtrall from '~/assets/images/gallery/balkongtrall.jpg';
import trappAltan from '~/assets/images/gallery/trapp-altan.jpg';
import vaggDorr from '~/assets/images/services/snickerier.jpg';
import fonster from '~/assets/images/gallery/fonster.jpg';
import gipsvagg from '~/assets/images/gallery/gipsvagg.jpg';
import tapetNordiska from '~/assets/images/services/tapeter.jpg';
import tapetBlommor from '~/assets/images/gallery/tapet-blommor.jpg';
import barnrum from '~/assets/images/gallery/barnrum.jpg';
import tavlor from '~/assets/images/gallery/tavlor.jpg';

export type WorkCategory = 'built-in' | 'carpentry' | 'outdoor' | 'walls' | 'interior';

export interface WorkItem {
  id: string;
  image: StaticImageData;
  category: WorkCategory;
  /** Caption as written on maxfix.nu where one exists. */
  caption: Record<Lang, string>;
  date?: string;
}

export const categories: { id: WorkCategory; label: Record<Lang, string> }[] = [
  { id: 'built-in', label: { sv: 'Platsbyggt', en: 'Built-in' } },
  { id: 'carpentry', label: { sv: 'Snickeri', en: 'Carpentry' } },
  { id: 'outdoor', label: { sv: 'Utomhus', en: 'Outdoors' } },
  { id: 'walls', label: { sv: 'Tapet & väggar', en: 'Walls & wallpaper' } },
  { id: 'interior', label: { sv: 'Inredning', en: 'Interiors' } },
];

export const work: WorkItem[] = [
  {
    id: 'bokhylla',
    image: bokhylla,
    category: 'built-in',
    caption: { sv: 'Klart byggd bokhylla', en: 'Finished built-in bookcase' },
  },
  {
    id: 'hall-garderob',
    image: hallGarderob,
    category: 'built-in',
    caption: {
      sv: 'Integrerad platsbyggd garderob och skohylla som smälter in i hallens design',
      en: 'Integrated built-in wardrobe and shoe rack that blends into the hallway',
    },
  },
  {
    id: 'bokhylla-3d',
    image: bokhylla3d,
    category: 'built-in',
    caption: {
      sv: '3D-modellering av bokhylla, B 360 cm × H 280 cm',
      en: '3D model of a bookcase, W 360 cm × H 280 cm',
    },
  },
  {
    id: 'garderob',
    image: garderob,
    category: 'built-in',
    caption: { sv: 'Garderob', en: 'Wardrobe' },
    date: '2024-06-17',
  },
  {
    id: 'tapet-nordiska',
    image: tapetNordiska,
    category: 'walls',
    caption: { sv: 'Nordiska museet', en: 'Nordiska museet' },
  },
  {
    id: 'vagg-dorr',
    image: vaggDorr,
    category: 'carpentry',
    caption: {
      sv: 'Bygga vägg, montera lister samt tillverka och installera ram för gammal dörr',
      en: 'Building a wall, fitting mouldings and making a frame for an old door',
    },
  },
  {
    id: 'grind',
    image: grind,
    category: 'outdoor',
    caption: { sv: 'Tillverkning samt montering av grind', en: 'Making and installing a gate' },
    date: '2025-04-04',
  },
  {
    id: 'sitthorna',
    image: sitthorna,
    category: 'built-in',
    caption: { sv: 'Platsbyggd sitthörna', en: 'Built-in seating corner' },
    date: '2022-08-02',
  },
  {
    id: 'spjalvagg',
    image: spjalvagg,
    category: 'carpentry',
    caption: { sv: 'Tillverkning samt montering av spjälvägg', en: 'Making and installing a slatted wall' },
    date: '2022-08-26',
  },
  {
    id: 'fonster',
    image: fonster,
    category: 'carpentry',
    caption: {
      sv: 'Förkortning av originalfönster i sekelskifteshus för ny dörröppning',
      en: 'Shortening an original window in a turn-of-the-century house for a new doorway',
    },
    date: '2024-01-10',
  },
  {
    id: 'balkongtrall',
    image: balkongtrall,
    category: 'outdoor',
    caption: { sv: 'Installation av balkongtrall', en: 'Installing balcony decking' },
    date: '2023-05-16',
  },
  {
    id: 'garderob-gardin',
    image: garderobGardin,
    category: 'built-in',
    caption: { sv: 'Platsbyggd garderob', en: 'Built-in wardrobe' },
  },
  {
    id: 'gipsvagg',
    image: gipsvagg,
    category: 'carpentry',
    caption: {
      sv: 'Ny gipsvägg monterad för att skapa en separat yta',
      en: 'New plasterboard wall to create a separate space',
    },
  },
  {
    id: 'tapet-blommor',
    image: tapetBlommor,
    category: 'walls',
    caption: { sv: 'Tapetsering', en: 'Wallpapering' },
  },
  {
    id: 'trapp-altan',
    image: trappAltan,
    category: 'outdoor',
    caption: { sv: 'Renovera trapp samt altan – före och efter', en: 'Restoring steps and deck – before and after' },
  },
  {
    id: 'spjalpanel',
    image: spjalpanel,
    category: 'carpentry',
    caption: { sv: 'Spjälpanel i sovrum', en: 'Slatted panel in a bedroom' },
  },
  {
    id: 'elementskydd',
    image: elementskydd,
    category: 'built-in',
    caption: { sv: 'Elementskydd', en: 'Radiator cover' },
  },
  {
    id: 'barnrum',
    image: barnrum,
    category: 'interior',
    caption: { sv: 'Barnrum: säng, sänghimmel, gardiner', en: "Children's room: bed, canopy, curtains" },
  },
  {
    id: 'tavlor',
    image: tavlor,
    category: 'interior',
    caption: { sv: 'Monterat gardinstång, hängt upp tavlor', en: 'Fitted a curtain rod, hung pictures' },
  },
];

/** A curated subset for the home page. */
export const featuredWork = ['bokhylla', 'hall-garderob', 'tapet-nordiska', 'vagg-dorr', 'elementskydd', 'grind'];
