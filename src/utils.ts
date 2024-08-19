export const getRatingPercent = (rating: number, total: number = 5): number =>
  Math.floor(rating) / total * 100;
