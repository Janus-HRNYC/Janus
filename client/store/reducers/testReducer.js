import * as actionTypes from '../actions/action';

const initalState = {
  test: [],
}

const testReducer = (state = initalState, action) => {
  switch(action.type) {
    case actionTypes.TEST_RANDOM:
      return {
        ...state,
        test: [...state.test].concat(action.payload.data),
      }
      default: 
      return state;
  }
}

export default testReducer;