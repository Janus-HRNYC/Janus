import { connect } from 'react-redux';
import * as actionCreator from '../actions/outfitAction';
import OutfitItems from '../../related_products/OutfitItems.jsx';

const mapStateToProps = (store) => ({
  outfit: store.outfit,
});

const mapDispatcchToProps = (dispatch) => {
  return {
    onDeleteOutfit: (id) => dispatch(actionCreator.removeOutfitAction(id)),
  }
}

const OutfitContainter = connect(mapStateToProps, mapDispatcchToProps)(OutfitItems)

export default OutfitContainter;