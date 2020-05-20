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
  id: store.id,
  relatedStyles: store.relatedStyles,
});

const mapDispatcchToProps = (dispatch) => {
  return {
    onGetRelated: (id) => dispatch(actionCreator.fetchRelatedProducts(id)),
    onGetCurrent: (id) => dispatch(currentActionCreator.fetchItemToCompare(id)),
    onAddOutfit: () => dispatch(outfitActionCreator.addOutfitAction()),
    onGetRelatedStyle: (id) => dispatch(RelatedStyleActionCreator.fetchStyle(id)),
  }
}

const RelatedItemsContainer = connect(mapStateToProps, mapDispatcchToProps)(RelatedItems)

export default RelatedItemsContainer;