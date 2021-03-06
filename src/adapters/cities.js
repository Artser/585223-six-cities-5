import {getIdFromCityName} from '../utils/functions';
export const createCity = (offer) => {
  return {
    id: getIdFromCityName(offer.city.name),
    name: offer.city.name,
    coordinate: [offer.city.location.latitude, offer.city.location.longitude]
  };
};
