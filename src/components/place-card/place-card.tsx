import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getRatingPercent } from '../../utils';
import { generatePath } from 'react-router';
import { Offer } from '../../types';

type PlaceCardProps = {
  offers: Offer;
  onActiveCardChange: React.Dispatch<React.SetStateAction<Offer | null>>;
};

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { offers, onActiveCardChange } = props;
  const ratingPercent = getRatingPercent(offers.rating);
  const id = offers.id;

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => onActiveCardChange({ ...offers })}
      onMouseLeave={() => onActiveCardChange(null)}
    >
      {offers.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offers.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offers.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={'place-card__bookmark-button button'.concat(
              offers.isFavorite ? ' place-card__bookmark-button--active' : ''
            )}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {offers.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingPercent}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id})}>
            {offers.title}
          </Link>
        </h2>
        <p className="place-card__type">{offers.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
