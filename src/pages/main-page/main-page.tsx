import { useState } from 'react';
import Header from '../../components/header/header';
import LocationList from '../../components/locations-list/locations-list';
import { AppProps, Offer } from '../../types';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';

function MainPage({ offers }: AppProps): JSX.Element {
  const [pointedOffer, setPointedOffer] = useState<Offer | null>(null);
  const points = offers.map((offer) => ({id: offer.id, location: offer.location}));

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
              Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CitiesList offers={offers} onActiveCardChange={setPointedOffer}/>
            </section>
            <Map city={offers[0].city} points={points} selectedPoint={{id: pointedOffer?.id, location: pointedOffer?.location}} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
