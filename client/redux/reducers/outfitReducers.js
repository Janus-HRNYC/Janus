import Redux from 'redux';
import * as actionType from '../actions/actionsTypes'


const outfitReducer = {
  changeOutfit: (state = [], action) => {
    switch (action.type) {
      case actionType.addOutfit: {
      // return Object.assign({}, state, action.outfit);
        return [(action.outfit)];
      }
      case actionType.removeOutfit:
        // newState = Object.assign({}, state);
        // delete newState[action.id];
        // return Object.assign({}, state, newState);
        // returns a new array without the element to be removed
        const newState = state.filter((ele) => ele.id !== action.results)
        return newState;
      default:
        return state;
    }
  }
}

export default outfitReducer;