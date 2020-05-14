import * as actionType from '../actions/relatedProductsActionsTypes'

const initalState = {
  data : [],
}

const relatedProductsReducer = (state = initalState, action) => {
  switch(action.type) {
    case actionType.getRelatedItems: 
      return {
        data: [...state.data].concat(action.payload.results),
      }
      default:
        return state    
  }
}

export default relatedProductsReducer;