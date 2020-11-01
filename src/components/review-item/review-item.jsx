import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {reviewType} from "../../types";

class ReviewItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {autor, text} = this.props.reviewItem;
    // review.text
    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">{autor}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `80%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {text}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
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
