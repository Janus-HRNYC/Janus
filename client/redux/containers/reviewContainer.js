import { connect } from 'react-redux';
import Review from '../../ratings_reviews/Reviews.jsx';
import { getReviews, postReview } from '../actions/reviewActions.js';

const mapStateToProps = (store) => ({
  id: store.id,
  reviewResults: store.reviewResults,
  ratingsMeta: store.ratingsMeta,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getReviews: (id, sort, count) => dispatch(getReviews(id, sort, count)),
    displayBySort: (id, sort) => dispatch(getReviews(id, sort)),
    postReview: (id, form) => dispatch(postReview(id, form)),
  };
};

const ReviewContainer = connect(mapStateToProps, mapDispatchToProps)(Review);

export default ReviewContainer;
