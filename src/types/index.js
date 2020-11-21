import PropTypes from 'prop-types';

export const coordType = PropTypes.arrayOf(PropTypes.number).isRequired;

export const reviewType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  offerId: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,

  text: PropTypes.string.isRequired,
});


export const offerType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  coord: coordType,
  description: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  adults: PropTypes.number.isRequired,
  cityId: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  goods: PropTypes.array.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(reviewType),
});

export const cityType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  coord: coordType,
  id: PropTypes.number.isRequired,

});

export const citiesTypeArray = PropTypes.arrayOf(cityType);
