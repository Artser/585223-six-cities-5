import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {coordType, cityType, offerType} from "../../types";
import {connect} from "react-redux";
import {getActiveCity} from "../../reducer/reselect";


const zoom = 12;
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const activeIcon = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30]
});

const style = {
  height: `100%`,
  width: `100%`,
};


class Coord extends PureComponent {
  constructor(props) {

    super(props);
    this._map = null;

  }

  _drawActivePin(coord) {
    leaflet
      .marker(coord, {icon: activeIcon, zIndexOffset: 1000})
      .addTo(this._map);
  }

  _resetMap() {
    this._map.remove();
  }

  _setMap() {

    const {activeCity, activeOffer} = this.props;
    this._map = leaflet.map(`map`, {
      center: activeCity.coord,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(activeCity.coord, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);
    const {coords} = this.props;
    coords.forEach((coord) => {
      leaflet
        .marker(coord, {icon})
        .addTo(this._map);
    });

    if (activeOffer) {
      this._drawActivePin(activeOffer);
    }
  }


  componentDidUpdate() {
    this._resetMap();
    this._setMap();
  }

  componentDidMount() {
    this._setMap();
  }

  render() {

    return (
      <div id="map" style={style}></div>
    );

  }
}
Coord.propTypes = {
  coords: PropTypes.arrayOf(coordType),
  activeCity: cityType,
  offer: offerType,
  activeOffer: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    activeCity: getActiveCity(state),
  };
};
export default connect(mapStateToProps)(Coord);


