import {connect} from 'react-redux';
import * as actionCreator from '../actions/relatedProductsActions.js';
import RelatedItems from '../../related_products/RelatedItems.jsx';

const mapStateToProps = (store) => ({
  relatedProducts: store.relatedProducts, 
});

const mapDispatcchToProps = (dispatch) => {
  return {
    onGetRelated: () => dispatch(actionCreator.fetchRelatedProducts()),
  }
}

const RelatedItemsContainer = connect(mapStateToProps, mapDispatcchToProps)(RelatedItems)

export default RelatedItemsContainer;