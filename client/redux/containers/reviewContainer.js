import { connect } from 'react-redux';
import Review from '../../ratings_reviews/Reviews.jsx';
import reviewActions from '../actions/reviewActions.js';

const mapStateToProps = (store) => ({
  productId: store.productId,
  reviewResults: store.reviewResults,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getReviews: (productId, sort, count) => {
      return dispatch(reviewActions.getReviews(productId, sort, count));
    },
  };
};

const ReviewContainer = connect(mapStateToProps, mapDispatchToProps)(Review);

export default ReviewContainer;
