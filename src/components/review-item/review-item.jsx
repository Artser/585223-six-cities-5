import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {reviewType} from "../../types";
import {getRating} from '../../utils/functions';

class ReviewItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {author, text, avatar, date, rating} = this.props.reviewItem;
    const editingDate = date.toLocaleString(`en-US`, {year: `numeric`, month: `long`});
    const dateTime = `${date.toISOString().substr(0, 10)}`;

    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">{author}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: getRating(rating)}}></span>

              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {text}
          </p>
          <time className="reviews__time" dateTime={dateTime}>{editingDate}</time>

        </div>
      </li>

    );

  }
}
ReviewItem.propTypes = {
  reviewItem: PropTypes.object.isRequired,
  review: reviewType
};

export default ReviewItem;
