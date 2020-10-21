import React from "react";
import ReactDOM from "react-dom";
import OfferMock from "./mock/offers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer-offer";
import {ActionCreator} from "./action";
import App from "./components/app/app";

const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
      <App
        offers={OfferMock}
      />
    </Provider>,
    document.querySelector(`#root`)
);

const getOffers = (evt) =>{
  evt.preventDefault();
  store.dispatch({type: ActionCreator.change, city: evt.currentTarget.href.split(`/`).pop()});
};

const location = document.querySelectorAll(`.locations__item-link`);


for (let i = 0; i < location.length; i++) {
  location[i].addEventListener(`click`, getOffers);
}


