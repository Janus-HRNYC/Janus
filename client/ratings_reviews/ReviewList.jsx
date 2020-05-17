import React, { useState } from 'react';
import { FormControl, Select, MenuItem, Grid, Button } from '@material-ui/core';
import ReviewItem from './ReviewItem.jsx';
import AddReview from './AddReview.jsx';

const ReviewList = (props) => {
  const { list, id, displayBySort, ratingsMeta } = props;
  const [limit, setLimit] = useState(2);
  const [sort, setSort] = useState('relevant');
  let listLength = list.length;

  // console.log('List length-> ', listLength);
  // console.log('LIMIT-> ', limit);
  // console.log('LIMIT-> ', listLength > limit);
  // console.log('Product id-> ', id);

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

  const handleChange = (e) => {
    setSort(e.target.value);
    displayBySort(id, e.target.value);
    setLimit(2);
  };

  const renderMenu = () => (
    <FormControl>
      <Select value={sort} onChange={handleChange}>
        <MenuItem value={'relevant'}>Relevant</MenuItem>
        <MenuItem value={'helpful'}>Helpful</MenuItem>
        <MenuItem value={'newest'}>Newest</MenuItem>
      </Select>
    </FormControl>
  );

  const renderMoreReviewButton = () => {
    if (listLength > limit && listLength !== 0)
      return (
        <Button variant='contained' onClick={addMoreReviews}>
          MORE REVIEWS
        </Button>
      );
  };

  return (
    <div>
      <h4>
        {listLength} reviews, sorted by {renderMenu()}
      </h4>
      {renderReviewItem()}
      <div>
        <br />
        <Grid container direction='row'>
          {renderMoreReviewButton()}
          <AddReview ratingsMeta={ratingsMeta} />
        </Grid>
      </div>
    </div>
  );
};

export default ReviewList;
