import {getIdFromSityName} from '../utils/functions';

const sixImage = (images) => {
  let items = [];
  for (let i = 0; i < 6; i++) {
    items.push(images[i]);
  }
  return items;
};

const threeImages = (images) => {
  let items = [];
  for (let i = 0; i < 3; i++) {
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
      rating: offer.rating,
      coord: [offer.location.latitude, offer.location.longitude],
      city: offer.city.name,
      cityId: getIdFromSityName(offer.city.name),
      adults: offer.max_adults,
      bedrooms: offer.bedrooms,
      description: offer.description,
      images: sixImage(offer.images),
      goods: offer.goods,
      avatar: offer.host.avatar_url,
      name: offer.host.name,
      threeImages: threeImages(offer.images)
    }
  );
};


export const createComments = (comment) => {
  return (
    {
      id: comment.id,
      avatar: comment.user.avatar_url,
      autor: comment.user.name,
      rating: comment.rating,
      date: new Date(comment.date),
      text: comment.comment
    }
  );

};
