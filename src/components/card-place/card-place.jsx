import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {offerType} from "../../types";
import {getRating} from '../../utils/functions';
import {FavoriteStatus} from "../../utils/functions";

const CardPlace = (props) => {
  const {offer, handleHover, updateFavorite} = props;
  const bookmark = offer.isFavorite ? `place-card__bookmark-button--active` : `place-card__bookmark-button`;
  const handleButton = (evt) => {
    evt.preventDefault();
    updateFavorite(offer.id, offer.isFavorite ? FavoriteStatus.MINUS : FavoriteStatus.PLUS);
  };

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => {
        handleHover(offer.id);
      }}
      onMouseLeave={() => {
        handleHover(-1);
      }}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${offer.id}`}>
          <img className="place-card__image" src={offer.imgLink} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={handleButton} className={`${bookmark} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRating(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div >
    </article >
  );
};

CardPlace.propTypes = {
  offer: offerType,
  handleHover: PropTypes.func.isRequired,
  updateFavorite: PropTypes.func,
};

export default CardPlace;
