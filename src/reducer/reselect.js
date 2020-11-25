import {createSelector} from "reselect";

export const getOffers = (state) => {
  return state.offers;
};

export const getActiveCityId = (state) => {
  return state.activeCityId;
};

export const getCities = (state) => {
  return state.cities;
};

export const getActiveCity = createSelector(
    getCities,
    getActiveCityId,
    (cities, activeCityId) => {
      return cities.find((city) => city.id === activeCityId);
    }
);

export const getFilteredOffers = createSelector(
    getOffers,
    getActiveCityId,
    (offers, activeCityId) => {
      return offers.filter((offer) => offer.cityId === activeCityId);
    }
);
