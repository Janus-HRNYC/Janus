import axios from 'axios';
import * as actionTypes from './actionsTypes.js';

export const reviewActions = {
  setReviewResults: (data) => ({
    type: actionTypes.setReviewResults,
    results: data,
  }),

  setRatingsMeta: (data) => ({
    type: actionTypes.setRatingsMeta,
    results: data,
  }),
};

export const getReviews = (id, sort = 'relevant', count = 100) => {
  return (dispatch) => {
    let query = {
      params: {
        sort: sort,
        count: count,
      },
    };
    return axios
      .get(`http://18.224.200.47/reviews/${id}/list`, query)
      .then((res) => {
        console.log('Successful in GET: ', res.data);
        dispatch(reviewActions.setReviewResults(res.data.results));
        dispatch(getRatings(id));
      })
      .catch((err) => {
        console.log('Error in GET: ', err);
      });
  };
};

export const getRatings = (id) => {
  return (dispatch) => {
    return axios
      .get(`http://18.224.200.47/reviews/${id}/meta`)
      .then((res) => {
        console.log('Successful in GET meta: ', res);
        dispatch(reviewActions.setRatingsMeta(res.data));
      })
      .catch((err) => {
        console.log('Error in GET meta: ', err);
      });
  };
};

export const postReview = (id, form) => {
  return (dispatch) => {
    axios
      .post(`http://18.224.200.47/reviews/${id}`, form)
      .then((res) => {
        console.log('Successful in POST review: ', res);
        dispatch(getReviews(id, 'newest'));
      })
      .catch((err) => {
        console.log('Error in POST review: ', err);
      });
  };
};
