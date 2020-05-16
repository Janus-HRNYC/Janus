import Redux from "redux";
import * as actionType from "../actions/actionsTypes";

const productIdReducer = {
  setProductId: (state = {}, action) => {
    switch (action.type) {
      case actionType.setProductId:
        return {
          ...state,
          state: action.result,
        };
      default:
        return state;
    }
  },
  setStyles: (state = [], action) => {
    switch (action.type) {
      case actionType.setStyles:
        return {
          ...state,
          state: [...state].concat(action.results),
        };
      default:
        return state;
    }
  },
  setSelected: (state = [], action) => {
    switch (action.type) {
      case actionType.setSelected:
        return {
          ...state,
          state: [...state].concat(action.results),
        };
      default:
        return state;
    }
  },
  setInfo: (state = {}, action) => {
    switch (action.type) {
      case actionType.setInfo:
        return {
          ...state,
          state: action.results.payload,
        };
      default:
        return state;
    }
  },
};

export default productIdReducer;
