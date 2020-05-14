import axios from 'axios';

const reviewActions = {
  setReviewResults: (data) => ({
    type: 'SET_REVIEW_RESULTS',
    results: data,
  }),

  getReviews: (productId, sort, count = 50) => {
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
        })
        .catch((err) => {
          console.log('Error in GET: ', err);
        });
    };
  },
};

export default reviewActions;
