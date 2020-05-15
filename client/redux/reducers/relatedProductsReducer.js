import Redux from 'redux';
import * as actionType from '../actions/actionsTypes'

const relatedReducer = {
  relatedProductsReducer: (state = [], action) => {
    switch (action.type) {
      case actionType.getRelatedItems:
        return {
          ...state,
          state: (action.results)
        }
        default:
           return state
    }
  },
}

export default relatedReducer;