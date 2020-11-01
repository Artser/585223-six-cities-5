import {extend} from "../utils/functions";
import {createOffers, createComments} from "../adapters/offers";
import {createCity} from "../adapters/cities";

export const initialState = {
  activeCityId: undefined,
  activeOffer: null,
  offers: [],
  cities: [],
};

const ActionType = {
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_CITIES: `SET_CITIES`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
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
  })

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
        dispatch(ActionCreator.setActiveCity(loadedOffers[0].cityId));
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
    .then((response)=>{

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
  }
  return state;
};

export {Operation, reducer, ActionType, ActionCreator};
