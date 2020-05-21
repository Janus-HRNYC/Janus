import * as actionType from './actionsTypes';
import axios from 'axios';

export const addOutfitAction = (outfit) => {
  let results = JSON.parse(window.localStorage.getItem('outfits'));
  if (results === null) {
    console.log('|LOCAL STORAGE| |IF| ', results)
    results = [];
  }
  else {
    console.log('|LOCAL STORAGE| ', Array.isArray(results))
    results.filter((ele) => {
    return outfit.id !== ele.id
  })
}
  results.push(outfit);
  window.localStorage.setItem('outfits', JSON.stringify(results));
  return {
    type: actionType.addOutfit,
    outfit: results,
  }
}

export const removeOutfitAction = (id) => {
  let results = JSON.parse(window.localStorage.getItem('outfits'));
  results.filter((ele) => {
    return id !== ele.id
  })
  window.localStorage.removeItem('outfits');
  console.log('|After REMOVE ITEM|', window.localStorage.getItem('outfits'));
  window.localStorage.setItem('outfits', JSON.stringify(results));
  console.log(results);
  return {
    type: actionType.removeOutfit,
    id: results,
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