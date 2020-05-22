import { connect } from 'react-redux';
import * as actionCreator from '../actions/outfitAction';
import OutfitItems from '../../related_products/OutfitItems.jsx';

const mapStateToProps = (store) => ({
  outfit: store.outfit,
  id: store.id,
  info: store.info,
  styles: store.styles,
});

const mapDispatcchToProps = (dispatch) => {
  return {
    onDeleteOutfit: (id) => dispatch(actionCreator.removeOutfitAction(id)),
    onAddOutfit: (productId, styles) => dispatch(actionCreator.fetchOutfit(productId, styles)),
    onUpdateOutfit: () => dispatch(actionCreator.updateOutfit())
  }
}

const OutfitContainter = connect(mapStateToProps, mapDispatcchToProps)(OutfitItems)

export default OutfitContainter;