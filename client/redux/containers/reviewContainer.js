import { connect } from 'react-redux';
import Review from '../../ratings_reviews/Reviews.jsx';
import { getReviews, postReview } from '../actions/reviewActions.js';

const mapStateToProps = (store) => ({
  productId: store.productId,
  reviewResults: store.reviewResults,
  ratingsMeta: store.ratingsMeta,
  successDisplay: store.successDisplay,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getReviews: (productId, sort, count) =>
      dispatch(getReviews(productId, sort, count)),
    displayBySort: (productId, sort) => dispatch(getReviews(productId, sort)),
    postReview: (productId, form) => dispatch(postReview(productId, form)),
  };
};

const ReviewContainer = connect(mapStateToProps, mapDispatchToProps)(Review);

export default ReviewContainer;
