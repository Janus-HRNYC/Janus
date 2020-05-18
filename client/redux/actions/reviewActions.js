import axios from 'axios';

const reviewActions = {
  setReviewResults: (data) => ({
    type: 'SET_REVIEW_RESULTS',
    results: data,
  }),

  // setProductID: (id) => ({
  //   type: 'SET_PRODUCT_ID',
  //   results: id,
  // }),

  setRatingsMeta: (data) => ({
    type: 'SET_RATINGS_META',
    results: data,
  }),

  getReviews: (productId, sort = 'relevant', count = 100) => {
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
          // dispatch(reviewActions.setProductID(productId));
          dispatch(reviewActions.getRatings(productId));
        })
        .catch((err) => {
          console.log('Error in GET: ', err);
        });
    };
  },

  getRatings: (productId) => {
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
  },
};

export default reviewActions;
