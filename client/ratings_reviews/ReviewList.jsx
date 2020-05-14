import React, { useState } from 'react';
import ReviewItem from './ReviewItem.jsx';

const ReviewList = ({ list }) => {
  console.log('List length-> ', list.length);
  const [limit, setLimit] = useState(2);

  const renderReviewItem = () => {
    let displayReviews = list.filter((item) => {
      return list.indexOf(item) < limit;
    });
    console.log('Display', displayReviews);
    return displayReviews ? (
      <div>
        {displayReviews.map((item) => (
          <ReviewItem item={item} key={item.review_id} />
        ))}
      </div>
    ) : null;
  };

  const addMoreReviews = (e) => {
    e.preventDefault();
    setLimit(limit + 2);
  };

  return (
    <div>
      <h4>
        {list.length} reviews, sorted by <strong>TODO: create dropdown</strong>
      </h4>
      {renderReviewItem()}
      <div>
        <br />
        <button onClick={addMoreReviews}>MORE REVIEWS</button>
        <button>ADD A REVIEW +</button>
      </div>
    </div>
  );
};

export default ReviewList;
