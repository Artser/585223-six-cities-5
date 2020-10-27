import {getIdFromSityName} from '../utils/functions';

export const createOffers = (offer) => {
  return (
    {
      id: offer.id,
      title: offer.title,
      imgLink: offer.preview_image,
      price: offer.price,
      type: offer.type,
      isPremium: offer.is_premium,
      rating: offer.rating,
      coord: [offer.location.latitude, offer.location.longitude],
      city: offer.city.name,
      cityId: getIdFromSityName(offer.city.name),
      reviews:
        {
          id: 1,
          avatar: `img/avatar-max.jpg`,
          autor: `Max`,
          rating: 4,
          date: new Date(2019, 10),
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        },
    }
  );
};
