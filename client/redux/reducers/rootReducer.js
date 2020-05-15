import { combineReducers } from 'redux';
import reviewReducer from './reviewReducer.js';

const rootReducer = combineReducers({
  productId: reviewReducer.setProductIdReducer,
  reviewResults: reviewReducer.setResultsReducer,
  ratingsMeta: reviewReducer.setRatingsMeta,
});

export default rootReducer;
