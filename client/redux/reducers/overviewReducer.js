import Redux from 'redux';
import * as actionType from '../actions/actionsTypes';

const productIdReducer = {
  setProductId: (state = [], action) => {
    switch (action.type) {
      case actionType.setProductId:
        return action.results;
      default:
        return state;
    }
  },
  getStyles: (state = [], action) => {
    switch (action.type) {
      case actionType.getStyles:
        return [...state].concat(action.results);
      default:
        return state;
    }
  },
  getSelected: (state = [], action) => {
    switch (action.type) {
      case actionType.getSelected:
        return action.results;
      default:
        return state;
    }
  },
  getInfo: (state = [], action) => {
    switch (action.type) {
      case actionType.getInfo:
        return action.results.payload;
      default:
        return state;
    }
  },
};

export default productIdReducer;
