import axios from 'axios';
import * as actionType from '../actionsTypes';

const setQuestions = (questions) => {
  return {
    type: actionType.getQuestions,
    questions: questions,
  }
}

export const axiosQuestionRequest = (prodId) => {
  return dispatch => {   
    return axios
      .get(`http://18.224.200.47/qa/${prodId}?count=100`)
      .then((results) => dispatch(setQuestions(results.data.results)))
      .catch(err => console.log(err));
  }
}

const setProductName = (productName) => {
    return {
        type: actionType.getProductName,
        productName: productName
    }
}

export const axiosProductInfoRequest = (prodId) => {
    return dispatch => {
        return axios
            .get(`http://18.224.200.47/products/${prodId}`)
            .then(res => {
                dispatch(setProductName(res.data.name))
            })
            .catch(err => console.log(err))
    }
}