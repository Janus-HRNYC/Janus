import Redux from 'redux';
import * as actionTypes from '../actions/actionsTypes.js';

const reviewReducer = {
  setResultsReducer: (state = [], action) => {
    switch (action.type) {
      case actionTypes.setReviewResults:
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

  setRatingsMeta: (state = {}, action) => {
    switch (action.type) {
      case actionTypes.setRatingsMeta:
        return action.results;
      default:
        return state;
    }
  },

  setSuccessDisplay: (state = false, action) => {
    switch (action.type) {
      case actionTypes.setSuccessDisplay:
        return action.results;
      default:
        return state;
    }
  },
};

export default reviewReducer;
