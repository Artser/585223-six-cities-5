import React, {PureComponent, createRef} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {coordsType, cityType, offerType} from "../../types";
import {connect} from "react-redux";
import {getActiveCity} from "../../reducer/reselect";


const ZOOM = 12;
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


class Map extends PureComponent {
  constructor(props) {

    super(props);
    this._map = null;
    this._mapRef = createRef();
  }

  _drawActivePin(coordinate) {
    leaflet
      .marker(coordinate, {icon: activeIcon, zIndexOffset: 1000})
      .addTo(this._map);
  }

  _addPinsAndCenter() {
    const {activeCity, activeOffer, coords} = this.props;
    coords.forEach((coordinate) => {
      leaflet
        .marker(coordinate, {icon})
        .addTo(this._map);
    });

    if (activeOffer) {
      this._drawActivePin(activeOffer);
    }
    this._map.setView(activeCity.coordinate, ZOOM);
  }

  _removePins() {
    this._map.eachLayer(function (layer) {
      if (layer instanceof leaflet.Marker) {
        layer.remove();
      }
    });
  }

  _resetMap() {
    this._map.remove();
  }

  _setMap() {

    const {activeCity, activeOffer} = this.props;
    this._map = leaflet.map(this._mapRef.current, {

      center: activeCity.coordinate,
      ZOOM,
      zoomControl: false,
      marker: true
    });
    this._map.setView(activeCity.coordinate, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);
    const {coords} = this.props;
    coords.forEach((coordinate) => {
      leaflet
        .marker(coordinate, {icon})
        .addTo(this._map);
    });

    if (activeOffer) {
      this._drawActivePin(activeOffer);
    }
  }


  componentDidUpdate() {
    this._removePins();
    this._addPinsAndCenter();
  }

  componentDidMount() {
    this._setMap();
  }

  render() {

    return (
      <div ref={this._mapRef} style={style}></div>

    );

  }
}
Map.propTypes = {
  coords: PropTypes.arrayOf(coordsType).isRequired,
  activeCity: cityType.isRequired,
  offer: offerType,
  activeOffer: PropTypes.array,

};

const mapStateToProps = (state) => {
  return {
    activeCity: getActiveCity(state),
  };
};
export {Map};
export default connect(mapStateToProps)(Map);


