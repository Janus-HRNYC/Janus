import Redux from 'redux';
import * as actionType from '../actions/actionsTypes'

const relatedStylesReducer = {
  addStyle: (state = [], action) => {
    switch (action.type) {
      case actionType.getRelatedStyles:
        // return Object.assign({}, state, action.outfit);
        return [...state].concat(action.results)
        
        default:
        return state || [];
    }
  }
}

export default relatedStylesReducer;

