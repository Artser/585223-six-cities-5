import React from "react";
import ReactDOM from "react-dom";
import OfferMock from "./mock/offers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer-offer";
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

