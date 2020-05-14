import Redux from 'redux';

const reviewReducer = {
  setResultsReducer: (state = [], action) => {
    switch (action.type) {
      case 'SET_REVIEW_RESULTS':
        return action.results;
      default:
        return state;
    }
  },

  setProductId: (state = 0, action) => {
    switch (action.type) {
      case 'SET_PRODUCT_ID':
        return action.results;
      default:
        return state;
    }
  },
};

export default reviewReducer;
