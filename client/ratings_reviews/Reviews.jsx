import React, { useEffect, useState } from 'react';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReviewList from './ReviewList.jsx';
import Ratings from './Ratings.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(12),
    margin: 'auto',
    maxWidth: '1100px',
  },
}));

const Reviews = (props) => {
  const classes = useStyles();
  const {
    id,
    reviewResults,
    getReviews,
    displayBySort,
    ratingsMeta,
    postReview,
  } = props;

  useEffect(() => {
    getReviews(id);
  }, []);

  console.log('Displaying Review Results; ', reviewResults);

  const clickStarRating = (rating) => {
    console.log('This has been clicked: ', rating);
    let filterByRatings = reviewResults.filter((review) => {
      return review.rating === rating;
    });
    displayBySort(id);
  };

  // let displayList = !filterByRatings ? reviewResults : filterByRatings;
  // console.log('Filter Review Results; ', displayList);

  return (
    <Box className={classes.root}>
      <Container>
        <Typography variant='subtitle1'>RATINGS & REVIEWS</Typography>
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
              id={id}
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
