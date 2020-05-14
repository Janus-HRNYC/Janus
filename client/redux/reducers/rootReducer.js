import { combineReducers } from 'redux';
import reviewReducer from './reviewReducer.js';

const rootReducer = combineReducers({
  productId: reviewReducer.setProductId,
  reviewResults: reviewReducer.setResultsReducer,
});

export default rootReducer;
