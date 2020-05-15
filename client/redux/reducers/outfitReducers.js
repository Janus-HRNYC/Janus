import Redux from 'redux';
import * as actionType from '../actions/actionsTypes'

const outfitReducer = { 
  changeOutfit: (state = {}, action) => {
    switch (action.type) {
      case actionType.addOutfit:
        return Object.assign({}, state, action.outfits)
      case actionType.removeOutfit:
        const key = action.id;
        const { [key]: value, ...newObj } = state;
        return {
          ...state,
          state: newObj,
        }
      default:
        return state
    }
  }
}

export default outfitReducer;