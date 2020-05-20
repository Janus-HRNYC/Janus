import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import StarRating from './StarRating.jsx';

const RatingSummary = ({ ratings, recommended }) => {
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
        <Typography variant='h3'>{averageRating}</Typography>
        <StarRating star={averageRating} size={'small'} />
      </Grid>
    );
  };

  const renderPercentRecommend = () => {
    let totalRecommend = 0,
      averageRecommend = 0;

    for (let reco in recommended) {
      totalRecommend += recommended[reco];
    }
    if (totalRecommend !== 0) {
      let recoValue = recommended[1] ? recommended[1] : 0;
      averageRecommend = (recoValue / totalRecommend) * 100;
      averageRecommend = Number(averageRecommend.toFixed(1));
    }
    return (
      <Grid>
        <Typography variant='body1'>
          {averageRecommend}% of reviews recommend this product
        </Typography>
      </Grid>
    );
  };

  return (
    <Box>
      {renderStarRating()}
      {renderPercentRecommend()}
    </Box>
  );
};

export default RatingSummary;
