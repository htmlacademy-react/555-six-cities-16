import { useState } from 'react';
import { Offer } from '../../types';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  offers: Offer[];
  onActiveCardChange: React.Dispatch<React.SetStateAction<Offer | null>>;
};

function PlaceCardList(props: PlaceCardListProps): JSX.Element {
  const { offers, onActiveCardChange } = props;
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  onActiveCardChange(activeOffer);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
        <PlaceCard
          offers={offer}
          key={offer.id}
          onActiveCardChange={setActiveOffer}
        />
      ))}
    </div>
  );
}

export default PlaceCardList;
