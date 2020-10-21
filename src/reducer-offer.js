import offers from "./mock/offers";
import cities from "./mocks/cities";
import ActionType from "./action";
import ActionCreator from "./action";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
export const initialState = {
  activeCityId: 10,
  cities,
  offers,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {
        activeCityId: action.payload,
      });

    default: {
      return state;
    }
  }
};

export {reducer, ActionType, ActionCreator};
