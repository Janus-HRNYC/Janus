import * as actionTypes from './actionsTypes.js';
import axios from 'axios';

export const saveRelatedProducts = (results) => {
  return {
    type: actionTypes.getRelatedItems,    
    results: results,    
  }
}
// default is id is being used for testing purposes
export const fetchRelatedProducts = (id = 2) => {
  return dispatch => {
    let promise = [];
    axios.get(`http://18.224.200.47/products/${id}/related`)
      .then((results) => {
        results.data.forEach((ele) => {
          // spacing for readablity
          promise.push(
            axios.get(`http://18.224.200.47/products/${ele}`)
              .then((results) => {
                return results.data;
              })
          )

        })
        // returns products once all promises are resolved
        return Promise.all(promise);
      })
      .then((data) => {      
        dispatch(saveRelatedProducts(data));
      })
  }
}