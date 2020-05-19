import React, { useEffect, useState } from 'react';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReviewList from './ReviewList.jsx';
import Ratings from './Ratings.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: '1100px',
  },
}));

const Reviews = (props) => {
  const classes = useStyles();
  const {
    productId,
    reviewResults,
    getReviews,
    displayBySort,
    ratingsMeta,
    postReview,
    successDisplay,
  } = props;

  useEffect(() => {
    getReviews(28);
  }, []);

  return (
    <Box className={classes.root}>
      <Container>
        <Typography variant='h5'>RATINGS & REVIEWS</Typography>
        <Grid container direction='row' justify='space-between'>
          <Grid item md={4}>
            <Ratings ratingsMeta={ratingsMeta} />
          </Grid>
          <Grid item md={8}>
            <ReviewList
              list={reviewResults}
              id={productId}
              displayBySort={displayBySort}
              ratingsMeta={ratingsMeta}
              postReview={postReview}
              successDisplay={successDisplay}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
