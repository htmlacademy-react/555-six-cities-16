export type AppProps = {
  placeCardCount: number;
  offers: Offer[];
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type PlaceCardProps = {
  offer: Offer;
  key: string;
  onActiveCardChange: React.Dispatch<React.SetStateAction<Offer>>;
};
