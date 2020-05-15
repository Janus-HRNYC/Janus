/* import * as actionTypes from '../actions/action';

const initalState = {
  test: [],
  load: true,
}

const testReducer = (state = initalState, action) => {
  switch(action.type) {
    case actionTypes.TEST_RANDOM:
      return {
        ...state,
        test: [...state.test].concat(action.payload.data),
        load: false,
      }
      default: 
      return state;
  }
}

export default testReducer; */