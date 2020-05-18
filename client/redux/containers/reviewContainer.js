import { connect } from 'react-redux';
import Review from '../../ratings_reviews/Reviews.jsx';
import { getReviews, getRatings } from '../actions/reviewActions.js';

const mapStateToProps = (store) => ({
  productId: store.productId,
  reviewResults: store.reviewResults,
  ratingsMeta: store.ratingsMeta,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getReviews: (productId, sort, count) => {
      return dispatch(getReviews(productId, sort, count));
    },
    displayBySort: (productId, sort) => {
      return dispatch(getReviews(productId, sort));
    },
  };
};

const ReviewContainer = connect(mapStateToProps, mapDispatchToProps)(Review);

export default ReviewContainer;
