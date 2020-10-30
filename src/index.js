import React from "react";
import ReactDOM from "react-dom";
import {composeWithDevTools} from "redux-devtools-extension";

import {Provider} from "react-redux";
import App from "./components/app/app";
import {createStore, applyMiddleware} from 'redux';
import {createAPI} from './api/api';
import thunk from "redux-thunk";
import {ActionCreator, Operation as DataOperation, reducer} from "./reducer/data";

const onLoadOffers = () => {
  store.dispatch(ActionCreator.setActiveCity());
};

const api = createAPI(onLoadOffers);


const store = createStore(
    reducer, /* preloadedState, */
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadOffers())
    .then(() => {

      ReactDOM.render(
          <Provider store={store}>
            <App />
          </Provider>,
          document.querySelector(`#root`)
      );
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(`[APP ERROR]`, error.message);
    });

