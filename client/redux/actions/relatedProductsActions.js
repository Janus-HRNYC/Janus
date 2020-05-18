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
          let relatedProducts = {};
          // spacing for readablity
          promise.push(
            axios.get(`http://18.224.200.47/products/${ele}`)
              .then((results) => {
                relatedProducts = {
                  id: results.data.id,
                  name: results.data.name,
                  category: results.data.category,
                  price: results.data.default_price,
                  outfit: false,
                  description: results.data.description,
                  slogan: results.data.slogan
                }
                return relatedProducts;
              })
              .then(() => {
                return axios.get(`http://18.224.200.47/products/${ele}/styles`)
              })
              .then((results) => {
                relatedProducts.styles = results.data.results;
                return relatedProducts;
              })
              .then((results) => {
                return axios.get(`http://18.224.200.47/reviews/${ele}/meta`)
              })
              .then((results) => {
                relatedProducts.ratings = results.data.ratings;
                return relatedProducts;
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