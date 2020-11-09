import React from "react";
import PropTypes from "prop-types";
import Coord from "../coord/coord";
import {cityType, offerType} from "../../types";
import {connect} from "react-redux";
import CitiesList from "../city-list/city-list";
import withPlaceList from "../../hocs/with-place-list";
import PLaceList from "../place-list/place-list";
import NoOffers from '../no-offers/no-offers';
import Sorting from "../sorting/sorting";
import {getActiveCity, getFilteredOffers} from "../../reducer/reselect";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user";

export const PlaceListWrapped = withPlaceList(PLaceList);

const Main = (props) => {
  const {offers, activeCity, authorizationStatus, authInfo, handleOfferChange, activeOfferIndex} = props;
  // константы для проверки пустоты ниже
  const isMainPageEmpty = offers.length ? false : true;
  const classNameForMainTag = isMainPageEmpty ? `page__main--index-empty` : ``;
  const classNameForPlaceContainer = isMainPageEmpty ? `cities__places-container--empty` : ``;
  const classNameForSection = isMainPageEmpty ? `cities__no-places` : `cities__places places`;
  const activeOffer = offers.find((offer) => offer.id === activeOfferIndex);


  return <div className="page page--gray page--main">

    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to="/login" className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">{authorizationStatus === AuthorizationStatus.AUTH ? authInfo.email : `Sign In`}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className={`page__main page__main--index ${classNameForMainTag}`}>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList />
      <div className="cities">
        <div className={`cities__places-container ${classNameForPlaceContainer} container`}>
          <section className={`${classNameForSection}`}>
            {isMainPageEmpty
              ? <NoOffers city={activeCity.name} />
              : <React.Fragment>
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
                <Sorting />


                <PlaceListWrapped
                  offers={offers}
                  onHover={handleOfferChange}
                />
              </React.Fragment>
            }
          </section>
          <div className="cities__right-section">

            {isMainPageEmpty
              ? ``
              : <Coord
                coords={offers.map(({coord}) => coord)}
                activeCity={activeCity}
                activeOffer={activeOffer && activeOffer.coord}
              />}

          </div>
        </div>
      </div>
    </main>
  </div>;
};
Main.propTypes = {
  offers: PropTypes.arrayOf(offerType),
  activeCity: cityType,
  authorizationStatus: PropTypes.string,
  authInfo: PropTypes.object,
  handleOfferChange: PropTypes.func,
  activeOfferIndex: PropTypes.number,

};

const mapStateToProps = (state) => {


  return {
    authorizationStatus: state.authorizationStatus,
    authInfo: state.authInfo,
    offers: getFilteredOffers(state),
    activeCity: getActiveCity(state),
  };
};
export {Main};
export default connect(mapStateToProps)(Main);
