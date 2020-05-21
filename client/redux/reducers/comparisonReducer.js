import Redux from 'redux';
import * as actionType from '../actions/actionsTypes'

const comparisonReducer = {
  updateReducer: (state = {}, action) => {
    switch (action.type) {
      case actionType.getCompareItem:
        return Object.assign({}, state, action.results);     
      default:
        return state || {}
    }
  }
}
export default comparisonReducer;