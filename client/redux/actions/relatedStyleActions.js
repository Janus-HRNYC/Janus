import * as actionType from './actionsTypes';
import axios from 'axios';

export const addRelatedStyleAction = (results) => {
  return {
    type: actionType.getRelatedStyles,
    results: results,
  }
}

export const fetchStyle = (id) => {
  return dispatch => {
    let resultObj = {};
    axios.get(`http://18.224.200.47/products/${id}/styles`)
      .then((results) => {
        resultObj = {
          id: id,
          results: results.data
        };
        dispatch(addRelatedStyleAction(resultObj))
      })
      .catch((err) => console.error(err));
  }
}