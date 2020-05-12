import * as actionTypes from './action'
import axios from 'axios';

export const testRandom = (data) => {
  return {
    type: actionTypes.TEST_RANDOM,
    payload: {
      data: data
    }
  }
}

export const testFetch = () => {
  return dispatch => {
    axios.get('http://18.224.200.47/products/list?page=6')
      .then((results) => {
        dispatch(testRandom(results.data))
      })
      .catch((err) => console.log(err));
  }
}
