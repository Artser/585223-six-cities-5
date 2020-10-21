import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardPlace from "./card-place";
import {offerType} from "../../types";
// import {connect} from "react-redux";

class PlaceList extends PureComponent {
  constructor(props) {

    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.state = {
      activePlaceIndex: -1,
    };
  }

  handleHover(placeIndex) {
    this.setState({
      activePlaceIndex: placeIndex
    });
  }

  render() {
    const {offers} = this.props;
    return (

      <div className="cities__places-list places__list tabs__content">

        {
          offers.map((offer) => (

            <CardPlace key={offer.id} offer={offer} handleHover={this.handleHover} />
          ))
        }

      </div>
    );

  }
}

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(offerType),
};
export default PlaceList;


/* const mapStateToProps = (state) => {
  const currentCityOffers = state.offers.filter((offer) => offer.cityId === state.activeCityId);
  return {
    offers: currentCityOffers,
  };
};
export default connect(mapStateToProps)(PlacesList); */
