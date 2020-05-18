import { combineReducers } from 'redux';
import reviewReducer from './reviewReducer.js';
import relatedReducer from './/relatedProductsReducer.js';
import outfitReducer from './outfitReducers';
import comparisonReducer from './ComparisonReducer'

const rootReducer = combineReducers({
  productId: reviewReducer.setProductIdReducer,
  reviewResults: reviewReducer.setResultsReducer,
  relatedProducts: relatedReducer.relatedProductsReducer,
  outfit: outfitReducer.changeOutfit,
  ratingsMeta: reviewReducer.setRatingsMeta,
  compareProducts: comparisonReducer.updateReducer
});

export default rootReducer;
