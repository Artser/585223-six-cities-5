import React from "react";
import PropTypes from "prop-types";
import CardPlace from "./card-place";
import {offerType} from "../../types";
import {connect} from "react-redux";
import {getSortedOffers} from "../../utils/functions";

const PLaceList = ({offers, handleHover}) => {

  return (
    <div className="cities__places-list places__list tabs__content">

      {
        offers.map((offer) => (
          <CardPlace key={offer.id} offer={offer} handleHover={handleHover} />
        ))
      }

    </div>
  );

};


PLaceList.propTypes = {
  offers: PropTypes.arrayOf(offerType),
  activePlaceIndex: PropTypes.number.isRequired,
  handleHover: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => {
  const currentCityOffers = getSortedOffers(state.offers.filter((offer) => offer.cityId === state.activeCityId), state.activeSortingType);
  return {
    offers: currentCityOffers,
  };
};
export default connect(mapStateToProps)(PLaceList);

