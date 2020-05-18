import React from 'react';
import StarRating from './StarRating.jsx';
import moment from 'moment';
import { Grid, Box } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const ReviewItem = ({ item }) => {
  const renderRecommend = (recommend) => {
    return recommend ? (
      <div>
        <CheckIcon />I recommend this product
      </div>
    ) : (
      ''
    );
  };

  const renderResponse = (response) => {
    return response !== 'null' ? <div>Response: {response}</div> : '';
  };

  return (
    <Box borderBottom={1}>
      <Grid container direct='row' justify='space-between'>
        <StarRating star={item.rating} size={'small'} />
        <Grid>
          {item.recommend ? <CheckCircleIcon fontSize='small' /> : null}{' '}
          {item.reviewer_name}, {moment(item.date).format('MMMM DD, YYYY')}
        </Grid>
      </Grid>
      <p>Summary: {item.summary}</p>
      <p>Body: {item.body}</p>
      {/* <p>Photos: {item.photos.length}</p> */}
      {renderRecommend(item.recommend)}
      <br />
      {renderResponse(item.response)}
      <p>
        Helpful ? <a href='#'>Yes</a> ({item.helpfulness}) |{' '}
        <a href='#'>Report</a>
      </p>
    </Box>
  );
};

export default ReviewItem;
