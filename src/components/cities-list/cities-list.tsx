import { useState } from 'react';
import { Offer } from '../../types';
import Card from '../card/card';

type CitiesListProps = {
  offers: Offer[];
  onActiveCardChange: React.Dispatch<React.SetStateAction<Offer | null>>;
};

function CitiesList(props: CitiesListProps): JSX.Element {
  const { offers, onActiveCardChange } = props;
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  onActiveCardChange(activeOffer);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          offers={offer}
          key={offer.id}
          onActiveCardChange={setActiveOffer}
        />
      ))}
    </div>
  );
}

export default CitiesList;
