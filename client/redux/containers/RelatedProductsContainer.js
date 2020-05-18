import {connect} from 'react-redux';
import * as actionCreator from '../actions/relatedProductsActions.js';
import * as outfitActionCreator from '../actions/outfitAction';
import * as currentActionCreator from '../actions/comparisonAction';
import RelatedItems from '../../related_products/RelatedItems.jsx';

const mapStateToProps = (store) => ({
  relatedProducts: store.relatedProducts, 
  outfit: store.outfit,
  compareProducts: store.compareProducts,
  productId: store.productId,
});

const mapDispatcchToProps = (dispatch) => {
  return {
    onGetRelated: (productId) => dispatch(actionCreator.fetchRelatedProducts(productId)),
    onGetCurrent: () => dispatch(currentActionCreator.fetchItemToCompare()),
    onAddOutfit: (outfit) => dispatch(outfitActionCreator.addOutfitAction(outfit)),
  }
}

const RelatedItemsContainer = connect(mapStateToProps, mapDispatcchToProps)(RelatedItems)

export default RelatedItemsContainer;