import Redux from 'redux';
import * as actionType from '../actions/actionsTypes'

const comparisonReducer = {
  updateReducer: (state = {}, action) => {
    switch (action.type) {
      case actionType.getCompareItem:
        return Object.assign({}, state, action.compare);
      case actionType.deleteCompareItem:
        let newState = Object.assign({}, state);
        delete newState[action.id];
        return Object.assign({}, state, newState);
      default:
        return state || {}
    }
  }
}
export default comparisonReducer;