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
  } = props;

  useEffect(() => {
    getReviews(28);
  }, []);

  console.log('Displaying Review Results; ', reviewResults);

  const clickStarRating = (rating) => {
    console.log('This has been clicked: ', rating);
    let filterByRatings = reviewResults.filter((review) => {
      return review.rating === rating;
    });
    displayBySort(productId);
  };

  // let displayList = !filterByRatings ? reviewResults : filterByRatings;
  // console.log('Filter Review Results; ', displayList);

  return (
    <Box className={classes.root}>
      <Container>
        <Typography variant='h5'>RATINGS & REVIEWS</Typography>
        <Grid container direction='row' justify='space-between'>
          <Grid item md={4}>
            <Ratings
              ratingsMeta={ratingsMeta}
              clickStarRating={clickStarRating}
            />
          </Grid>
          <Grid item md={8}>
            <ReviewList
              list={reviewResults}
              id={productId}
              displayBySort={displayBySort}
              ratingsMeta={ratingsMeta}
              postReview={postReview}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
