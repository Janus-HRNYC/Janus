import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import testReducer  from '../client/store/reducers/testReducer.js'

const rootReducer = combineReducers({
  tr: testReducer,
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

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(< Provider store={store}> <App /> </Provider>, document.getElementById("app"));
