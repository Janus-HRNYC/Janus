import Redux from 'redux';
import * as actionTypes from '../actions/actionsTypes.js';

const homeReducer = {
  setProductsReducer: (state = [], action) => {
    switch (action.type) {
      case actionTypes.setProducts:
        return action.results;
      default:
        return state;
    }
  },

  setProductIdReducer: (state = 0, action) => {
    switch (action.type) {
      case actionTypes.setProductId:
        return action.results;
      default:
        return state;
    }
  },
};

export default homeReducer;
