import {connect} from 'react-redux';
import * as actionCreator from '../actions/relatedProductsActions.js';
import * as outfitActionCreator from '../actions/outfitAction';
import * as currentActionCreator from '../actions/comparisonAction';
import * as RelatedStyleActionCreator from '../actions/relatedStyleActions';
import RelatedItems from '../../related_products/RelatedItems.jsx';

const mapStateToProps = (store) => ({
  relatedProducts: store.relatedProducts, 
  outfit: store.outfit,
  compareProducts: store.compareProducts,
  productId: store.productId,
  relatedStyles: store.relatedStyles,
});

const mapDispatcchToProps = (dispatch) => {
  return {
    onGetRelated: (productId) => dispatch(actionCreator.fetchRelatedProducts(productId)),
    onGetCurrent: (productId) => dispatch(currentActionCreator.fetchItemToCompare(productId)),
    onAddOutfit: () => dispatch(outfitActionCreator.addOutfitAction()),
    onGetRelatedStyle: (id) => dispatch(RelatedStyleActionCreator.fetchStyle(id)),
  }
}

const RelatedItemsContainer = connect(mapStateToProps, mapDispatcchToProps)(RelatedItems)

export default RelatedItemsContainer;