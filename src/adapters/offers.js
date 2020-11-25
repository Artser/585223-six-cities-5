import {getIdFromCityName} from '../utils/functions';
const IMAGE_COUNT = 6;
const getImages = (images, count) => {
  let items = [];
  for (let i = 0; i < count; i++) {
    items.push(images[i]);
  }
  return items;
};

export const createOffers = (offer) => {
  return (
    {
      id: offer.id,
      title: offer.title,
      imgLink: offer.preview_image,
      price: offer.price,
      type: offer.type,
      isPremium: offer.is_premium,
      isFavorite: offer.is_favorite,
      rating: offer.rating,
      coordinate: [offer.location.latitude, offer.location.longitude],
      city: offer.city.name,
      cityId: getIdFromCityName(offer.city.name),
      adults: offer.max_adults,
      bedrooms: offer.bedrooms,
      description: offer.description,
      images: getImages(offer.images, IMAGE_COUNT),
      goods: offer.goods,
      avatar: offer.host.avatar_url,
      name: offer.host.name,
    }
  );
};


export const createComments = (comment) => {
  return (
    {
      id: comment.id,
      avatar: comment.user.avatar_url,
      author: comment.user.name,
      rating: comment.rating,
      date: new Date(comment.date),
      text: comment.comment
    }
  );

};
