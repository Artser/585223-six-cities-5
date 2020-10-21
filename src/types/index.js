import PropTypes from 'prop-types';

export const coordType = PropTypes.arrayOf(PropTypes.number).isRequired;

export const reviewType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  offerId: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date),
  text: PropTypes.string.isRequired,
});


export const offerType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  coord: coordType,
  city: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(reviewType),
});

