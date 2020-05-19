import { combineReducers } from "redux";
import reviewReducer from "./reviewReducer.js";
import relatedReducer from ".//relatedProductsReducer.js";
import outfitReducer from "./outfitReducers";
import productIdReducer from "./overviewReducer";
import comparisonReducer from './ComparisonReducer';
import relatedStylesReducer from './relatedStylesReducer'

const rootReducer = combineReducers({
  productId: reviewReducer.setProductIdReducer,
  reviewResults: reviewReducer.setResultsReducer,
  relatedProducts: relatedReducer.relatedProductsReducer,
  outfit: outfitReducer.changeOutfit,
  ratingsMeta: reviewReducer.setRatingsMeta,
  // selected_id: productIdReducer.setProductId,
  info: productIdReducer.getInfo,
  selected_id: productIdReducer.getSelected,
  styles: productIdReducer.getStyles,
  compareProducts: comparisonReducer.updateReducer,
  relatedStyles: relatedStylesReducer.addStyle,
});

export default rootReducer;
