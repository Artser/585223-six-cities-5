import React from "react";
import PropTypes from "prop-types";
import CardPlace from "../card-place/card-place";
import {offerType} from "../../types";
import {connect} from "react-redux";
import {getSortedOffers} from "../../utils/functions";
import {getActiveSortingType} from '../../reducer/app-selectors';
import {getFilteredOffers} from "../../reducer/reselect";
import {Operation} from "../../reducer/data";

const PLaceList = ({offers, handleHover, updateFavorite}) => {

  return (
    <div className="cities__places-list places__list tabs__content">

      {
        offers.map((offer) => (
          <CardPlace key={offer.id} offer={offer} handleHover={handleHover} updateFavorite={updateFavorite}/>
        ))
      }

    </div>
  );

};


PLaceList.propTypes = {
  offers: PropTypes.arrayOf(offerType),
  activePlaceIndex: PropTypes.number.isRequired,
  handleHover: PropTypes.func.isRequired,
  updateFavorite: PropTypes.func,

};

const mapStateToProps = (state) => {
  const currentCityOffers = getSortedOffers(getFilteredOffers(state), getActiveSortingType(state));

  return {
    offers: currentCityOffers,

  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFavorite: (offerId, status) => {
    dispatch(Operation.postFavorite(offerId, status));
  }

});
export {PLaceList};
export default connect(mapStateToProps, mapDispatchToProps)(PLaceList);

