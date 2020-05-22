import * as actionType from './actionsTypes';
import axios from 'axios';

export const addOutfitAction = (outfit) => {
  console.log('| ADD OUTFIT ACITON | ', outfit);
  let results = JSON.parse(window.localStorage.getItem('outfits'));
  if (results === null) {
    console.log('|LOCAL STORAGE| |IF| ', results)
    results = [];
  }
  else {
    results = results.filter((ele) => {
      return outfit.resutls.id !== ele.results.id
    })
    console.log('|AFTER STORAGE| ', results);
  }
  results.push(outfit);
  window.localStorage.setItem('outfits', JSON.stringify(results));
  console.log('|AFTER SET| ', results);  
  return {
    type: actionType.addOutfit,
    results: results,
  }
}

export const removeOutfitAction = (id) => {
  let results = JSON.parse(window.localStorage.getItem('outfits'));
  results = results.filter((ele) => {
    return id !== ele.results.id
  })
  console.log('RESULTS ', results);
  console.log('|After REMOVE ITEM|', window.localStorage.getItem('outfits'));
  window.localStorage.setItem('outfits', JSON.stringify(results));
  console.log(results);
  return {
    type: actionType.removeOutfit,
    id: id,
  }
}
export const updateOutfit = () => {
  let results = JSON.parse(window.localStorage.getItem('outfits'));
  if (results === null) {
    console.log('|LOCAL STORAGE| |IF| ', results)
    results = [];
  }
  window.localStorage.setItem('outfits', JSON.stringify(results));
  return {
    type: actionType.updateOutfit,
    results: results,
  }
}


export const fetchOutfit = (id, styles) => {
  return dispatch => {
    axios.get(`http://18.224.200.47/products/${id}`)
      .then((results) => {
        let data = {
          results: results.data,
          styles: styles,
        }
        dispatch(addOutfitAction(data))
      })
      .catch((err) => console.error(err));
  }
}