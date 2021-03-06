import React, {PureComponent} from "react";
import {Header} from "../header/header";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation} from "../../reducer/data";
import {FavoriteStatus} from "../../utils/functions";
import {getRating} from '../../utils/functions';
import {Link} from "react-router-dom";


class Favorites extends PureComponent {


  componentDidMount() {
    this.props.loadFavorites();
  }

  _prepareOffers() {
    const {favorites} = this.props;

    const offers = {};

    favorites.forEach((offer) => {
      if (!offers[offer.city]) {
        offers[offer.city] = [];
      }

      offers[offer.city].push(offer);
    });

    return offers;
  }

  render() {
    const {authorizationStatus, authInfo, updateFavorite, favorites} = this.props;

    const isEmpty = !favorites.length;
    const classNameForDiv = isEmpty ? `page--favorites-empty` : ``;
    const classNameForMain = isEmpty ? `page__main--favorites-empty` : ``;
    const classNameForFavoriteSection = isEmpty ? `favorites--empty` : ``;

    const offersByCities = this._prepareOffers();
    return (
      <div className={`page ${classNameForDiv}`}>
        <Header
          authorizationStatus={authorizationStatus}
          authInfo={authInfo}
        />

        <main className={`page__main page__main--favorites ${classNameForMain}`}>
          <div className="page__favorites-container container">
            <section className={`favorites ${classNameForFavoriteSection}`}>
              {isEmpty ?
                <React.Fragment>
                  <h1 className="visually-hidden">Favorites (empty)</h1>
                  <div className="favorites__status-wrapper">
                    <b className="favorites__status">Nothing yet saved.</b>
                    <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
                  </div>
                </React.Fragment>
                :
                <React.Fragment>
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">

                    {
                      Object.entries(offersByCities).map(([city, offers]) => {
                        return (
                          <li className="favorites__locations-items" key={city}>
                            <div className="favorites__locations locations locations--current">
                              <div className="locations__item">
                                <a className="locations__item-link" href="#">
                                  <span>{city}</span>
                                </a>
                              </div>
                            </div>
                            <div className="favorites__places">
                              {
                                offers.map((offer) => {
                                  return (
                                    <article className="favorites__card place-card" key={offer.id}>
                                      <div className="favorites__image-wrapper place-card__image-wrapper">
                                        <a href="#">
                                          <img className="place-card__image" src={offer.imgLink} width="150" height="110" alt="Place image" />
                                        </a>
                                      </div>
                                      <div className="favorites__card-info place-card__info">
                                        <div className="place-card__price-wrapper">
                                          <div className="place-card__price">
                                            <b className="place-card__price-value">&euro;{offer.price}</b>
                                            <span className="place-card__price-text">&#47;&nbsp;night</span>
                                          </div>
                                          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={() => updateFavorite(offer.id, FavoriteStatus.MINUS)}>
                                            <svg className="place-card__bookmark-icon" width="18" height="19">
                                              <use xlinkHref="#icon-bookmark"></use>
                                            </svg>
                                            <span className="visually-hidden">In bookmarks</span>
                                          </button>
                                        </div>
                                        <div className="place-card__rating rating">
                                          <div className="place-card__stars rating__stars">
                                            <span style={{width: getRating(offer.rating)}}></span>
                                            <span className="visually-hidden">Rating</span>
                                          </div>
                                        </div>
                                        <h2 className="place-card__name">
                                          <a href="#">{offer.title}</a>
                                        </h2>
                                        <p className="place-card__type">{offer.type}</p>
                                      </div>
                                    </article>
                                  );
                                })
                              }
                            </div>
                          </li>
                        );
                      })
                    }
                  </ul>
                </React.Fragment>
              }
            </section>
          </div >
        </main >
        <footer className="footer container">
          <Link to="/" className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      </div >
    );
  }
}

Favorites.propTypes = {
  favorites: PropTypes.array,
  authorizationStatus: PropTypes.string,
  authInfo: PropTypes.object,
  loadFavorites: PropTypes.func,
  updateFavorite: PropTypes.func
};

const mapStateToProps = (state) => {
  return ({
    favorites: state.favorites,
    authorizationStatus: state.authorizationStatus,
    authInfo: state.authInfo,
  });
};

const mapDispatchToProps = (dispatch) => ({
  updateFavorite: (offerId, status) => {
    dispatch(Operation.postFavorite(offerId, status));
  },

  loadFavorites: () => {
    dispatch(Operation.loadFavorites());
  }
});
export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
