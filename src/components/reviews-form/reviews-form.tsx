import { FormEvent, useState } from 'react';
import ReviewRatingStars from '../review-raiting-stars/review-raiting-stars';
import { Review } from '../../const';

function ReviewForm(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const onChangeForm = (evt: FormEvent): void => {
    const { name, value } = evt.target as HTMLFormElement;
    if (name === 'rating') {
      setRating(+value);
    } else if (name === 'review') {
      setReview(String(value));
    }
  };

  const isSubmitButtonDisabled =
    !rating ||
    review.length < Review.minLength ||
    review.length > Review.maxLength;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onChange={ onChangeForm }
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <ReviewRatingStars />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={ isSubmitButtonDisabled }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
