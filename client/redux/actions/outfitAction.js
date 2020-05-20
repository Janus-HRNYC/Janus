import * as actionType from './actionsTypes';
import axios from 'axios';

export const addOutfitAction = (outfit) => {
  return {
    type: actionType.addOutfit,
    outfit: outfit,
  }
}

export const removeOutfitAction = (id) => {
  return {
    type: actionType.removeOutfit,
    id: id,
  }
}


export const fetchOutfit = (id) => {
  return dispatch => {
    axios.get(`http://18.224.200.47/products/${id}`)
      .then((results) => {
        dispatch(addOutfitAction(results.data))
      })
      .catch((err) => console.error(err));
  }
}