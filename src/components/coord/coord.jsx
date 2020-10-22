import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {coordType} from "../../types";

const city = [52.38333, 4.9];
const zoom = 12;
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});
const style = {
  height: `100%`,
  width: `100%`,
};
class Coord extends PureComponent {


  componentDidMount() {


    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
    const {coords} = this.props;
    coords.forEach((coord) => {
      leaflet
        .marker(coord, {icon})
        .addTo(map);
    });

  }

  render() {

    return (
      <div id="map" style={style}></div>
    );

  }
}
Coord.propTypes = {
  coords: PropTypes.arrayOf(coordType),
};

export default Coord;

