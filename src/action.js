export const ActionType = {
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SORT_OFFERS: `SORT_OFFERS`,
  TOGGLE_SORTING_LIST: `TOGGLE_SORTING_LIST`,
  GET_HOVERED_OFFER: `GET_HOVERED_OFFER`,
};

export const ActionCreator = {
  setActiveCity: (id) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: id,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
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
};

