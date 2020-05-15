import React from 'react';
import { Box, Grid } from '@material-ui/core';
import StarRating from './StarRating.jsx';

const RatingBreakdown = ({ ratings, recommmended }) => {
  const renderStarRating = () => {
    let totalStars = 0,
      totalReviews = 0,
      averageRating = 0;

    for (let stars in ratings) {
      totalStars += stars * ratings[stars];
      totalReviews += ratings[stars];
    }

    if (totalReviews !== 0) {
      averageRating = totalStars / totalReviews;
      averageRating = Number(averageRating.toFixed(1));
    }

    return (
      <Grid container direction='row'>
        <h3>Ave: {averageRating}</h3>
        <StarRating star={averageRating} size={'large'} />
      </Grid>
    );
  };

  return <Box>{renderStarRating()}</Box>;
};

export default RatingBreakdown;
