import { Offer } from '../../types';
import PlaceCard from '../place-card/place-card';

type CitiesListProps = {
  offers: Offer[];
  onActiveCardChange: React.Dispatch<React.SetStateAction<Offer | null>>;
};

function CitiesList(props: CitiesListProps): JSX.Element {
  const { offers, onActiveCardChange } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
        <PlaceCard
          offers={offer}
          key={offer.id}
          onActiveCardChange={onActiveCardChange}
        />
      ))}
    </div>
  );
}

export default CitiesList;
