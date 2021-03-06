import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation} from "../../reducer/data";
const LetterQuantity = {
  MIN: 50,
  MAX: 299,
  EMPTY: 0,
};

const ERROR_MESSAGE = `Something went wrong. The comment was not sent.`;

const ReviewForm = ({onRatingChange, onReviewChange, review, setReviews, id, rating, onFormSubmit, setError, error}) => {
  const handlerSubmit = (evt) => {
    evt.preventDefault();
    setError(false);

    setReviews(id, review, rating)
    .then(() => {
      onFormSubmit();

    })
    .catch(() => {
      setError(true);
    });

  };
  return (

    <form onSubmit={handlerSubmit} className="reviews__form form" action="#" method="post" >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" onChange={onRatingChange} value="5" id="stars-5" type="radio" checked={rating === `5`} />
        <label htmlFor="stars-5" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" onChange={onRatingChange} value="4" id="stars-4" type="radio" checked={rating === `4`} />
        <label htmlFor="stars-4" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" onChange={onRatingChange} value="3" id="stars-3" type="radio" checked={rating === `3`} />
        <label htmlFor="stars-3" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" onChange={onRatingChange} value="2" id="stars-2" type="radio" checked={rating === `2`} />
        <label htmlFor="stars-2" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={onRatingChange} className="form__rating-input visually-hidden" name="rating" value="1" id="star-1" type="radio" checked={rating === `1`} />
        <label htmlFor="star-1" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea onChange={onReviewChange} className="reviews__textarea form__textarea" id="review" name="review" value={review} placeholder="Tell how was your stay, what you like and what can be improved"
      ></textarea>

      {error && ERROR_MESSAGE}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={review.length < LetterQuantity.MIN || review.length > LetterQuantity.MAX || rating.length === LetterQuantity.EMPTY}>Submit</button>
      </div>
    </form>
  );


};

ReviewForm.propTypes = {
  onRatingChange: PropTypes.func.isRequired,
  onReviewChange: PropTypes.func.isRequired,
  review: PropTypes.string.isRequired,
  setReviews: PropTypes.func,
  setError: PropTypes.func,
  error: PropTypes.bool,
  id: PropTypes.string,
  rating: PropTypes.string,
  onFormSubmit: PropTypes.func,
};

const mapStateToProps = () => {
  return {

  };
};


const mapDispatchToProps = (dispatch) => ({
  setReviews: (offerId, review, rating) => {
    return dispatch(Operation.postReview(offerId, review, rating)

    );
  }
});
export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
