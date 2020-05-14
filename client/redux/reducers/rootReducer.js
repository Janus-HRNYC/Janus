import { combineReducers } from 'redux';
import reviewReducer from './reviewReducer.js';

const rootReducer = combineReducers({
  reviewResults: reviewReducer.setResultsReducer,
});

export default rootReducer;
