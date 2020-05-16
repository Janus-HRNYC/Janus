import { combineReducers } from "redux";
import reviewReducer from "./reviewReducer.js";
import relatedReducer from ".//relatedProductsReducer.js";
import outfitReducer from "./outfitReducers";
import productIdReducer from "./overviewReducer";

const rootReducer = combineReducers({
  productId: reviewReducer.setProductIdReducer,
  reviewResults: reviewReducer.setResultsReducer,
  relatedProducts: relatedReducer.relatedProductsReducer,
  outfit: outfitReducer.changeOutfit,
  ratingsMeta: reviewReducer.setRatingsMeta,
  info: productIdReducer.setInfo,
  selected: productIdReducer.setSelected,
  styles: productIdReducer.setStyles,
});

export default rootReducer;
