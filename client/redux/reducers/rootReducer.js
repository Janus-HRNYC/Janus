import { combineReducers } from 'redux';
import reviewReducer from './reviewReducer.js';
import relatedReducer from './/relatedProductsReducer.js';
import outfitReducer from './outfitReducers';

const rootReducer = combineReducers({
  reviewResults: reviewReducer.setResultsReducer,
  relatedProducts: relatedReducer.relatedProductsReducer,
  outfit: outfitReducer.changeOutfit,
});

export default rootReducer;
