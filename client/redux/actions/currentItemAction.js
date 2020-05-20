import * as actionType from './actionsTypes';
import axios from 'axios';

export const addCurrentAction = (current) => {
  return {
    type: actionsTypes.getCurrentItem,
    current: current
  }
}

export const fetchCurrentItem = (id) => {
  return dispatch => {
    axios.get(`http://18.224.200.47/products/${id}`)
      .then((results) => {
        console.log('Here ', results.data);
        return dispatch(addOutfitAction(results.data))
      })      
      .catch((err) => console.error(err));
  }
}