import * as actionType from '../../actions/actionsTypes'

const questionsAndAnswersReducer = {
  questionsReducer: (state = [], action) => {
    switch (action.type) {
      case actionType.getQuestions:
        return action.questions;     
      default:
        return state
    }
  },

  productNameReducer: (state = [], action) => {
    switch (action.type) {
      case actionType.getProductName:
        return action.productName
      default:
        return state
    }
  }
}

export default questionsAndAnswersReducer;