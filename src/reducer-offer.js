import {ActionCreator, ActionType} from "./action";
import {extend, SORT_TYPES} from './utils/functions';


export const initialState = {

  hoveredOffer: null,
  isSortingListOpened: false,
  activeSortingType: SORT_TYPES.POPULAR,

};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* case ActionType.SET_ACTIVE_CITY:
      return extend(state, {
        activeCityId: action.payload,
      });*/
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
    default: {
      return state;
    }
  }
};

export {reducer, ActionType, ActionCreator};
