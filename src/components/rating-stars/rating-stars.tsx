import { getRatingPercent } from '../../utils';

type RatingStarsProps = {
  rating: number;
  classNamePrefix: string;
  children?: JSX.Element;
};
function RatingStars(props: RatingStarsProps): JSX.Element {
  const { rating, classNamePrefix, children } = props;
  const ratingPercent = getRatingPercent(rating);

  return (
    <div className={`${classNamePrefix}__rating rating`}>
      <div className={`${classNamePrefix}__stars rating__stars`}>
        <span style={{ width: `${ratingPercent}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
}

export default RatingStars;
