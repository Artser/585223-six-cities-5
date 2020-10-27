import {getIdFromSityName} from '../utils/functions';
export const createCity = (offer) => {
  return {
    id: getIdFromSityName(offer.city.name),
    name: offer.city.name,
    coord: [offer.city.location.latitude, offer.city.location.longitude]
  };
};
