import React from "react";
import PropTypes from "prop-types";
import CardPlace from "./card-place";
import {offerType} from "../../types";

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
export default PLaceList;

