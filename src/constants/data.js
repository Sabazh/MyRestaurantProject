import images from './images';

const wines = [
  {
    title: 'SAPERAVI',
    price: '$46',
    tags: 'GE | Bottle',
  },
  {
    title: 'USAKHELAURI',
    price: '$140',
    tags: 'GE | Bottle',
  },
  {
    title: 'KINDZMARAULI',
    price: '$30',
    tags: 'GE | Bottle',
  },
  {
    title: 'RKATSITELI',
    price: '$28',
    tags: 'GE | Bottle',
  },
  {
    title: 'KISI',
    price: '$40',
    tags: 'GE | Bottle',
  },
  {
    title: 'TVISHI',
    price: '$27',
    tags: 'GE | Bottle',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
