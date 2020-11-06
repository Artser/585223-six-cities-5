import React from "react";
import PropTypes from "prop-types";
// import {Operation } from "../../reducer/data";
// import {connect} from "react-redux";


const NearPlace = (props) => {
  const {type, title, price} = props;
  return (

    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg" width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
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
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};


NearPlace.propTypes = {
  title: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,

};

/* const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => ({


}); */

// export default connect(mapStateToProps, mapDispatchToProps)(NearPlace);
export default NearPlace;
