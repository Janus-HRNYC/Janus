import { combineReducers } from 'redux';
import reviewReducer from './reviewReducer.js';
import relatedReducer from './/relatedProductsReducer.js';
import outfitReducer from './outfitReducers';
import productIdReducer from './overviewReducer';

const rootReducer = combineReducers({
  productId: productIdReducer.setProductId, //fixed to set the correct product id
  reviewResults: reviewReducer.setResultsReducer,
  relatedProducts: relatedReducer.relatedProductsReducer,
  outfit: outfitReducer.changeOutfit,
  ratingsMeta: reviewReducer.setRatingsMeta,
  selected_id: productIdReducer.setProductId,
  info: productIdReducer.getInfo,
  selected: productIdReducer.getSelected,
  styles: productIdReducer.getStyles,
});

export default rootReducer;
