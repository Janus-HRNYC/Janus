import { connect } from 'react-redux';
import * as actionCreator from '../actions/outfitAction';
import OutfitItems from '../../related_products/OutfitItems.jsx';

const mapStateToProps = (store) => ({
  outfit: store.outfit,
  productId: store.productId,
});

const mapDispatcchToProps = (dispatch) => {
  return {
    onDeleteOutfit: (id) => dispatch(actionCreator.removeOutfitAction(id)),
    onAddOutfit: (productId) => dispatch(actionCreator.fetchOutfit(productId)),
  }
}

const OutfitContainter = connect(mapStateToProps, mapDispatcchToProps)(OutfitItems)

export default OutfitContainter;