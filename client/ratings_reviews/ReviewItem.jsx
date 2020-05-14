import React from 'react';
import StarRating from './StarRating.jsx';
import { Grid, Box } from '@material-ui/core';

const ReviewItem = ({ item }) => {
  const renderRecommend = (recommend) => {
    return recommend ? <div>I recommend this product</div> : '';
  };

  const renderResponse = (response) => {
    return response !== 'null' ? <div>Response: {response}</div> : '';
  };

  return (
    <Box borderBottom={1}>
      <Grid container direct='row' justify='space-between'>
        <StarRating star={item.rating} />
        <p>Reviewer: {item.reviewer_name}</p>
        <p>Date: {item.date}</p>
      </Grid>
      <p>Summary: {item.summary}</p>
      <p>Body: {item.body}</p>
      {renderRecommend(item.recommend)}
      {renderResponse(item.response)}
      <p> Helpful ? Yes() </p>
    </Box>
  );
};

export default ReviewItem;
