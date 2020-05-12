import * as actionTypes from '../actions/action';

const initalState = {
  test: 0,
}

const testReducer = (state = initalState, action) => {
  switch(action.type) {
    case actionTypes.TEST_RANDOM:
      return {
        test: state.test + 1,
      }
      default: 
      return state;
  }
}

export default testReducer;