import {extend, SORT_TYPES} from "../utils/functions";
import {createOffers, createComments} from "../adapters/offers";
import {createCity} from "../adapters/cities";
import {AuthorizationStatus} from "./user/user";

export const initialState = {
  activeCityId: undefined,
  activeOffer: null,
  offers: [],
  cities: [],
  hoveredOffer: null,
  activeSortingType: SORT_TYPES.POPULAR,
  isSortingListOpened: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,

};

const ActionType = {
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_CITIES: `SET_CITIES`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  SORT_OFFERS: `SORT_OFFERS`,
  TOGGLE_SORTING_LIST: `TOGGLE_SORTING_LIST`,
  GET_HOVERED_OFFER: `GET_HOVERED_OFFER`,
  // REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AUTH_STATUS: `SET_AUTH_STATUS`,
  SET_AUTH_INFO: `SET_AUTH_INFO`,
};

const ActionCreator = {
  setActiveCity: (id) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: id,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  setCities: (cities) => ({
    type: ActionType.SET_CITIES,
    payload: cities,
  }),
  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer,
  }),
  loadCommentsByOfferId: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  sortOffers: (sortType) => ({
    type: ActionType.SORT_OFFERS,
    payload: sortType,
  }),
  toggleSorting: (isOpened) => ({
    type: ActionType.TOGGLE_SORTING_LIST,
    payload: !isOpened
  }),
  getHoveredOffer: (offer) => ({
    type: ActionType.GET_HOVERED_OFFER,
    payload: offer,
  }),

  /*   requireAuthorization: (status) => ({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    }), */
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const loadedOffers = response.data.map((offer) => createOffers(offer));

        const cities = response.data.reduce((acc, offer) => {
          const city = createCity(offer);
          acc[city.id] = city;
          return acc;
        }, {});
        dispatch(ActionCreator.setActiveCity(1));
        dispatch(ActionCreator.loadOffers(loadedOffers));
        dispatch(ActionCreator.setCities(Object.values(cities)));
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(`[HOTELS ERROR]`, error.message);
      });

  },
  loadOfferById: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}`)
      .then((response) => {

        const adapterOffer = createOffers(response.data);

        dispatch(ActionCreator.setActiveOffer(adapterOffer));

      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(`[HOTELS ERROR]`, error.message);
      });
  },
  loadCommentsByOfferId: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {

        const adapterComments = response.data.map((comment) => createComments(comment));


        dispatch(ActionCreator.loadCommentsByOfferId(adapterComments));

      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error(`[HOTELS ERROR]`, error.message);
      });


  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {
        activeCityId: action.payload,
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.SET_CITIES:
      return extend(state, {
        cities: action.payload,
      });
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
    case ActionType.SORT_OFFERS:
      return extend(state, {
        activeSortingType: action.payload,
      });
    case ActionType.TOGGLE_SORTING_LIST:
      return extend(state, {
        isSortingListOpened: action.payload
      });
    case ActionType.GET_HOVERED_OFFER:
      return extend(state, {
        hoveredOffer: action.payload
      });
    case ActionType.SET_AUTH_INFO:

      if (action.payload) {
        return extend(state, {
          authorizationStatus: AuthorizationStatus.AUTH,
          authInfo: action.payload,
        });
      }
      return extend(state, {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: null,
      });


  }
  return state;
};

export {Operation, reducer, ActionType, ActionCreator};
