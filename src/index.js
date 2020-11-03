import React from "react";
import ReactDOM from "react-dom";
import {composeWithDevTools} from "redux-devtools-extension";

import {Provider} from "react-redux";
import App from "./components/app/app";
import {createStore, applyMiddleware} from 'redux';
import {createAPI} from './api/api';
import thunk from "redux-thunk";
import {Operation as DataOperation, reducer} from "./reducer/data";
// import {Operation as login, userReducer} from "./reducer/user/user";


const api = createAPI();
// const api = createAPI(() => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)));


const store = createStore(
    reducer, /* preloadedState, */
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadOffers())
    .then(() => {
    //  store.dispatch(ActionCreator.setActiveCity(1));
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

