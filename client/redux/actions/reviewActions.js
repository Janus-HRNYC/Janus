import axios from 'axios';
import * as actionTypes from './actionsTypes.js';

export const reviewActions = {
  setReviewResults: (data) => ({
    type: actionTypes.setReviewResults,
    results: data,
  }),

  setProductID: (id) => ({
    type: actionTypes.setProductId,
    results: id,
  }),

  setRatingsMeta: (data) => ({
    type: actionTypes.setRatingsMeta,
    results: data,
  }),
};

export const getReviews = (productId, sort = 'relevant', count = 100) => {
  return (dispatch) => {
    let query = {
      params: {
        sort: sort,
        count: count,
      },
    };
    return axios
      .get(`http://18.224.200.47/reviews/${productId}/list`, query)
      .then((res) => {
        console.log('Successful in GET: ', res.data);
        dispatch(reviewActions.setReviewResults(res.data.results));
        dispatch(reviewActions.setProductID(productId));
        dispatch(getRatings(productId));
      })
      .catch((err) => {
        console.log('Error in GET: ', err);
      });
  };
};

export const getRatings = (productId) => {
  return (dispatch) => {
    return axios
      .get(`http://18.224.200.47/reviews/${productId}/meta`)
      .then((res) => {
        console.log('Successful in GET meta: ', res);
        dispatch(reviewActions.setRatingsMeta(res.data));
      })
      .catch((err) => {
        console.log('Error in GET meta: ', err);
      });
  };
};
