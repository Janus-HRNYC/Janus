import Redux from 'redux';
import * as actionType from '../actions/actionsTypes'


const outfitReducer = {
  changeOutfit: (state = [], action) => {
    switch (action.type) {
      case actionType.addOutfit:        
      return action.results;
      case actionType.removeOutfit:
        let newState = state.filter((ele) => {
          return ele.results.id !== action.id;
        }) 
        return newState
      case actionType.updateOutfit:
        return action.results
      default:
        return state;
    }
  }
}

export default outfitReducer;