import React, { useEffect } from 'react';
import { Box, Grid, Container } from '@material-ui/core';
import ReviewList from './ReviewList.jsx';
import Ratings from './Ratings.jsx';

const Reviews = (props) => {
  const {
    productId,
    reviewResults,
    getReviews,
    displayBySort,
    ratingsMeta,
  } = props;

  useEffect(() => {
    getReviews(1);
  }, []);

  return (
    <Box>
      <Container>
        <h2>RATINGS & REVIEWS</h2>
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
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
