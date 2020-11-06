import React from "react";
import ReactDOM from "react-dom";
import {composeWithDevTools} from "redux-devtools-extension";
import {ActionCreator as UserAction, Operation as UserOperation} from "./reducer/user/user";

import {Provider} from "react-redux";
import App from "./components/app/app";
import {createStore, applyMiddleware} from 'redux';
import {createAPI} from './api/api';
import thunk from "redux-thunk";
import {Operation as DataOperation, reducer} from "./reducer/data";


const api = createAPI(() => {
  store.dispatch(UserAction.setAuthInfo(null));
});

const store = createStore(
    reducer, /* preloadedState, */
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(DataOperation.loadOffers()),
  store.dispatch(UserOperation.checkAuthStatus())
])

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

