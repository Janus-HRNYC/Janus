import axios from 'axios';
import * as actionTypes from './actionsTypes.js';

export const homeActions = {
  setProductId: (id) => ({
    type: actionTypes.setProductId,
    results: id,
  }),

  setProducts: (data) => ({
    type: actionTypes.setProducts,
    results: data,
  }),
};

export const getProducts = () => {
  return (dispatch) => {
    return axios
      .get('http://18.224.200.47/products/list?count=100')
      .then((results) => {
        console.log('Successful in GET: ', results.data);
        dispatch(homeActions.setProducts(results.data));
      })
      .catch((err) => console.log('Error in GET products: ', err));
  };
};
