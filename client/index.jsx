import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import relatedProductsReducer  from '../client/related_products/redux/store/reducers/relatedProductsReducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  relatedProductsReducer : relatedProductsReducer,
});

// custom middleware to print state before dispatching and print new states
const logger = store => {
  return next => {
    return action => {
      console.log(`|Logger| DISPATCHING: `, action);
      const results = next(action);
      console.log(`|Logger| next state`, store.getState());
      return results;
    }
  }
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(< Provider store={store}> <App /> </Provider>, document.getElementById("app"));
