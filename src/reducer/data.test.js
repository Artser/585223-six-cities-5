import {ActionType, reducer} from "./data";
import {SORT_TYPES} from "../utils/functions";
import {AuthorizationStatus} from '../utils/functions';


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    activeCityId: undefined,
    activeOffer: null,
    offers: [],
    cities: [],
    nearPlaces: [],
    reviews: [],
    favorites: [],
    hoveredOffer: null,
    activeSortingType: SORT_TYPES.POPULAR,
    isSortingListOpened: false,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: null,
  });

});
it(`Reducer sets active city correctly `, () => {
  expect(reducer({activeCityId: 1}, {
    type: ActionType.SET_ACTIVE_CITY,
    payload: 3,

  })).toEqual({
    activeCityId: 3,
  });

});
it(`Reducer sets loadOffers `, () => {
  expect(reducer({offers: 1}, {
    type: ActionType.LOAD_OFFERS,
    payload: [{
      adults: 3,
      avatar: `img/avatar-angelina.jpg`,
      bedrooms: 1,
      city: `Amsterdam`,
      cityId: 4,
      coordinate: [52.388540000000006, 4.899976],
      description: `A new spacious villa, one floor.`,
      id: 5,
      images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      imgLink: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      isFavorite: true,
      isPremium: false,
      name: `Angelina`,
      price: 134,
      type: `test`,
      rating: 2.2,
      goods: [`goods`],
      threeImages: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      title: `The house among olive`
    }]


  })).toEqual({
    offers: [{
      adults: 3,
      avatar: `img/avatar-angelina.jpg`,
      bedrooms: 1,
      city: `Amsterdam`,
      cityId: 4,
      coordinate: [52.388540000000006, 4.899976],
      description: `A new spacious villa, one floor.`,
      id: 5,
      images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      imgLink: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      isFavorite: true,
      isPremium: false,
      name: `Angelina`,
      price: 134,
      type: `test`,
      rating: 2.2,
      goods: [`goods`],
      threeImages: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      title: `The house among olive`
    }],
  });

});

it(`Reducer sets Cities `, () => {
  expect(reducer({cities: 1}, {
    type: ActionType.SET_CITIES,
    payload: [{
      id: 1,
      name: `Paris`,
      coordinate: [48, 52]
    }]


  })).toEqual({
    cities: [{
      id: 1,
      name: `Paris`,
      coordinate: [48, 52]
    }],
  });

});
it(`Reducer sets nearPlaces `, () => {
  expect(reducer({nearPlaces: 1}, {
    type: ActionType.LOAD_NEAR_PLACES,
    payload: [{
      adults: 3,
      avatar: `img/avatar-angelina.jpg`,
      bedrooms: 1,
      city: `Amsterdam`,
      cityId: 4,
      coordinate: [52.388540000000006, 4.899976],
      description: `A new spacious villa, one floor.`,
      id: 5,
      images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      imgLink: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      isFavorite: true,
      isPremium: false,
      name: `Angelina`,
      price: 134,
      type: `test`,
      rating: 2.2,
      goods: [`goods`],
      threeImages: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      title: `The house among olive`
    }]


  })).toEqual({
    nearPlaces: [{
      adults: 3,
      avatar: `img/avatar-angelina.jpg`,
      bedrooms: 1,
      city: `Amsterdam`,
      cityId: 4,
      coordinate: [52.388540000000006, 4.899976],
      description: `A new spacious villa, one floor.`,
      id: 5,
      images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      imgLink: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      isFavorite: true,
      isPremium: false,
      name: `Angelina`,
      price: 134,
      type: `test`,
      rating: 2.2,
      goods: [`goods`],
      threeImages: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      title: `The house among olive`
    }],
  });

});
it(`Reducer sets offer `, () => {
  expect(reducer({activeOffer: 3}, {
    type: ActionType.SET_ACTIVE_OFFER,
    payload: {
      adults: 3,
      avatar: `img/avatar-angelina.jpg`,
      bedrooms: 1,
      city: `Amsterdam`,
      cityId: 4,
      coordinate: [52.388540000000006, 4.899976],
      description: `A new spacious villa, one floor.`,
      id: 5,
      images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      imgLink: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      isFavorite: true,
      isPremium: false,
      name: `Angelina`,
      price: 134,
      type: `apartment`,
      rating: 2.2,
      goods: [`goods`],
      threeImages: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      title: `The house among olive`
    }


  })).toEqual({
    activeOffer: {
      adults: 3,
      avatar: `img/avatar-angelina.jpg`,
      bedrooms: 1,
      city: `Amsterdam`,
      cityId: 4,
      coordinate: [52.388540000000006, 4.899976],
      description: `A new spacious villa, one floor.`,
      id: 5,
      images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      imgLink: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      isFavorite: true,
      isPremium: false,
      name: `Angelina`,
      price: 134,
      type: `apartment`,
      rating: 2.2,
      goods: [`goods`],
      threeImages: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      title: `The house among olive`
    },
  });

});
it(`Reducer load comments `, () => {
  expect(reducer({comments: 0}, {
    type: ActionType.LOAD_COMMENTS,
    payload: [{
      id: 5,
      avatar: `img/avatar-angelina.jpg`,
      author: `Max`,
      rating: 3,
      date: new Date(2020, 10, 17, 2, 3, 4, 567),

      text: `text`,
    }]


  })).toEqual({
    comments: [{
      id: 5,
      avatar: `img/avatar-angelina.jpg`,
      author: `Max`,
      rating: 3,
      date: new Date(2020, 10, 17, 2, 3, 4, 567),

      text: `text`,
    }],
  });

});

it(`Reducer sortOffers `, () => {
  expect(reducer({activeSortingType: 1}, {
    type: ActionType.SORT_OFFERS,
    payload: {
      activeSortingType: SORT_TYPES.POPULAR,
    }


  })).toEqual({
    activeSortingType: {
      activeSortingType: SORT_TYPES.POPULAR,

    },
  });

});
it(`Reducer sortOffers `, () => {
  expect(reducer({isSortingListOpened: 1}, {
    type: ActionType.TOGGLE_SORTING_LIST,
    payload: {
      isSortingListOpened: false,
    }


  })).toEqual({
    isSortingListOpened: {
      isSortingListOpened: false,

    },
  });

});
it(`Reducer hoveredOffer `, () => {
  expect(reducer({hoveredOffer: 1}, {
    type: ActionType.GET_HOVERED_OFFER,
    payload: {
      hoveredOffer: null,
    }


  })).toEqual({
    hoveredOffer: {
      hoveredOffer: null,

    },
  });

});


it(`Reducer favorites `, () => {
  expect(reducer({favorites: 1}, {
    type: ActionType.SET_FAVORITES,
    payload: [{
      adults: 3,
      avatar: `img/avatar-angelina.jpg`,
      bedrooms: 1,
      city: `Amsterdam`,
      cityId: 4,
      coordinate: [52.388540000000006, 4.899976],
      description: `A new spacious villa, one floor.`,
      id: 5,
      images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      imgLink: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      isFavorite: true,
      isPremium: false,
      name: `Angelina`,
      price: 134,
      type: `test`,
      rating: 2.2,
      goods: [`goods`],
      threeImages: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      title: `The house among olive`
    }]


  })).toEqual({
    favorites: [{
      adults: 3,
      avatar: `img/avatar-angelina.jpg`,
      bedrooms: 1,
      city: `Amsterdam`,
      cityId: 4,
      coordinate: [52.388540000000006, 4.899976],
      description: `A new spacious villa, one floor.`,
      id: 5,
      images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      imgLink: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      isFavorite: true,
      isPremium: false,
      name: `Angelina`,
      price: 134,
      type: `test`,
      rating: 2.2,
      goods: [`goods`],
      threeImages: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
      title: `The house among olive`
    }],
  });

});
it(`Reducer favorites `, () => {
  expect(reducer({comments: 1}, {
    type: ActionType.SET_REVIEWS,
    payload: [{
      id: 5,
      avatar: `img/avatar-angelina.jpg`,
      author: `Max`,
      rating: 3,
      date: new Date(2020, 10, 17, 2, 3, 4, 567),

      text: `text`,
    }]

  })).toEqual({
    comments: [{
      id: 5,
      avatar: `img/avatar-angelina.jpg`,
      author: `Max`,
      rating: 3,
      date: new Date(2020, 10, 17, 2, 3, 4, 567),

      text: `text`,
    }],
  });

});
it(`Reducer authInfoNoAuth `, () => {
  expect(reducer({authorizationStatus: AuthorizationStatus.NO_AUTH, authInfo: null}, {
    type: ActionType.SET_AUTH_INFO,
    payload: {
      'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
      'email': `artserlisa@mail.ru`,
      'id': 1,
      'is_pro': false,
      'name': `artserlisa`
    }

  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    authInfo: {
      'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
      'email': `artserlisa@mail.ru`,
      'id': 1,
      'is_pro': false,
      'name': `artserlisa`
    }

  });
});


it(`Reducer authInfoAuth `, () => {
  expect(reducer({authorizationStatus: AuthorizationStatus.AUTH, authInfo: {
    'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
    'email': `artserlisa@mail.ru`,
    'id': 1,
    'is_pro': false,
    'name': `artserlisa`
  }}, {
    type: ActionType.SET_AUTH_INFO,
    payload: null

  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: null

  });
});
