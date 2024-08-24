import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getRatingPercent } from '../../utils';
import { generatePath } from 'react-router';
import { Offer } from '../../types';

type PlaceCardProps = {
  offers: Offer;
  options?: {
    classNamePrefix?: string;
    imageWidth?: number;
    imageHeight?: number;
  };
  onActiveCardChange?: React.Dispatch<React.SetStateAction<Offer | null>>;
};

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { offers, options = {}, onActiveCardChange } = props;
  const ratingPercent = getRatingPercent(offers.rating);
  const id = offers.id;
  const {
    classNamePrefix = 'cities',
    imageWidth = 260,
    imageHeight = 200
  } = options;

  return (
    <article
      className={`${classNamePrefix}__card place-card`}
      onMouseEnter={() => onActiveCardChange && onActiveCardChange(offers)}
      onMouseLeave={() => onActiveCardChange && onActiveCardChange(null)}
    >
      {offers.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${classNamePrefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer, {id})}>
          <img
            className="place-card__image"
            src={offers.previewImage}
            width={imageWidth}
            height={imageHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${classNamePrefix}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offers.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
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
