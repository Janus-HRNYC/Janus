import React, { useEffect } from 'react';
import { Box, Grid, Container } from '@material-ui/core';
import ReviewList from './ReviewList.jsx';

const Reviews = ({ reviewResults, getReviews }) => {
  useEffect(() => {
    getReviews(28, 'newest', 100);
  }, []);

  return (
    <Box>
      <Container>
        <h2>RATINGS & REVIEWS</h2>
        <Grid container direction='row' justify='space-between'>
          <Grid item md={4}>
            First Column
            <h4> TODO: This is where the Meta component</h4>
          </Grid>
          <Grid item md={8}>
            Second Column
            <ReviewList list={reviewResults} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
