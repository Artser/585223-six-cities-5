export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
export const MAX_REVIEWS_LENGTH = 10;
export const FavoriteStatus = {
  PLUS: 1,
  MINUS: 0
};
export const getIdFromCityName = (cityName) => {
  switch (cityName) {
    case `Amsterdam`: return 4;
    case `Hamburg`: return 5;
    case `Paris`: return 1;
    case `Cologne`: return 2;
    case `Dusseldorf`: return 6;
    case `Brussels`: return 3;
    default:
      return 0;
  }

};
export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};
export const PagePath = {
  MAIN: `/`,
  FAVORITE: `/favorites`,
  LOGIN: `/login`,
  OFFER: `/offer/`
};
export const SORT_TYPES = {
  POPULAR: `Popular`,
  TO_HIGH_PRICE: `Price: low to high`,
  TO_LOW_PRICE: `Price: high to low`,
  TOP_RATED: `Top rated first`,
};

export const getSortedOffers = (offers, activeSort) => {
  switch (activeSort) {
    case SORT_TYPES.POPULAR:
      return offers.slice();
    case SORT_TYPES.TO_HIGH_PRICE:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SORT_TYPES.TO_LOW_PRICE:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SORT_TYPES.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers.slice();
  }
};
export const getRating = (rating) => {
  const roundRating = Math.round(rating);
  return roundRating > 0 && roundRating <= 5 ? `${roundRating * 20}%` : false;
};
