import axios from 'axios';
import * as actionType from './actionsTypes';

export const saveItemToCompare = (results) => {
  return {
    type: actionType.getCompareItem,
    results: results,
  }
}

export const fetchItemToCompare = (id) => {
  return dispatch => {   
    return axios
      .get(`http://18.224.200.47/products/${id}`)
      .then((results) => {    
        dispatch(saveItemToCompare(results.data));
      })
  }
}