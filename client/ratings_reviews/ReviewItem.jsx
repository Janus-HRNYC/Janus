import React from 'react';
import StarRating from './StarRating.jsx';
import { Grid, Box } from '@material-ui/core';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';

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
        {item.recommend ? <CheckCircleOutlineRoundedIcon /> : null}
        <p>Reviewer: {item.reviewer_name}</p>
        <p>Date: {item.date}</p>
      </Grid>
      <p>Summary: {item.summary}</p>
      <p>Body: {item.body}</p>
      <p>Photos: {item.photos.length}</p>
      {renderRecommend(item.recommend)}
      <br />
      {renderResponse(item.response)}
      <p> Helpful ? Yes ({item.helpfulness}) | Report </p>
    </Box>
  );
};

export default ReviewItem;
