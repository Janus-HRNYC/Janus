import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  productId: 2, // set to two to test Related Items
  reviewResults: [],
  relatedProducts: [],
  ratingsMeta: {},
  outfit: [],
  compareProducts: {},
};

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log(`|Middleware| Dispatching:`, action);
      const results = next(action);
      console.log('|Middleware| next state', store.getState());
      return results;
    };
  };
};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
