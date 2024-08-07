const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
] as const;

const Setting = {
  placeCardCount: 6,
} as const;

export { CITIES, Setting };
