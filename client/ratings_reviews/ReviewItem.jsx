import React from 'react';
import StarRating from './StarRating.jsx';
import moment from 'moment';
import { Grid, Box, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const ReviewItem = ({ item }) => {
  const renderRecommend = (recommend) => {
    return recommend ? (
      <Grid container direction='row'>
        <CheckIcon fontSize='small' />
        <Typography variant='body2'> I recommend this product</Typography>
      </Grid>
    ) : (
      ''
    );
  };

  const renderResponse = (response) => {
    return response !== 'null' ? (
      <Box>
        <Typography variant='body2'>Response: </Typography>
        <Typography variant='body2'>{response}</Typography>
      </Box>
    ) : (
      ''
    );
  };

  return (
    <Box borderBottom={1}>
      <Grid container direct='row' justify='space-between'>
        <StarRating star={item.rating} size={'small'} />
        <Grid>
          {item.recommend ? <CheckCircleIcon fontSize='small' /> : null}{' '}
          <Typography variant='caption'>
            {item.reviewer_name}, {moment(item.date).format('MMMM DD, YYYY')}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant='h6'>{item.summary}</Typography>
      <Typography variant='body1'>{item.body}</Typography>
      {/* <p>Photos: {item.photos.length}</p> */}
      {renderRecommend(item.recommend)}
      <br />
      {renderResponse(item.response)}
      <Typography variant='caption'>
        Helpful ? <a href='#'>Yes</a> ({item.helpfulness}) |{' '}
        <a href='#'>Report</a>
      </Typography>
    </Box>
  );
};

export default ReviewItem;
