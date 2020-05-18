import axios from 'axios';
import * as actionType from './actionsTypes';

export const saveItemToCompare = (results) => {
  return {
    type: actionType.getCompareItem,
    compare: results,
  }
}

export const fetchItemToCompare = (id = 2) => {
  return dispatch => {
    let compareItems = {};
    let promise = [];
    return axios
      .get(`http://18.224.200.47/products/${id}`)
      .then((results) => {
        promise.push(
        compareItems = {
          id: results.data.id,
          name: results.data.name,
          description: results.data.description,
          category: results.data.category,
          description: results.data.description,
          features: results.data.features,
          show: false,
        }
        )
        return Promise.all(promise)
      })
      .catch((err) => console.log(err))
      .then((obj) => {
        dispatch(saveItemToCompare(obj[0]));        
      })

  }
}