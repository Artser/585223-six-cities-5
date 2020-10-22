export const ActionType = {
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
};

export const ActionCreator = {
  setActiveCity: (id) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: id,
  })
};

