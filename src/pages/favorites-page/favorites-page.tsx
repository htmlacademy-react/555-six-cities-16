import { Offer } from '../../types';
import PlaceCard from '../../components/place-card/place-card';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

type FavoritesPageProps = {
  offers: Offer[];
};

type OfferByGroup = {
  [city: string]: Offer[];
};

function FavoritesPage(props: FavoritesPageProps): JSX.Element {
  const favoriteOffers = props.offers.filter((offer) => offer.isFavorite);

  const favoriteOffersByGroup = Object.groupBy(
    favoriteOffers,
    (offer: Offer) => offer.city.name
  ) as OfferByGroup;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(favoriteOffersByGroup).map((city) => (
                <li className="favorites__locations-items" key={`fav-${city}`}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoriteOffersByGroup[city].map((offer) => (
                      <PlaceCard
                        offers={offer}
                        key={offer.id}
                        options={{
                          classNamePrefix: 'favorites',
                          imageWidth: 150,
                          imageHeight: 110
                        }}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
