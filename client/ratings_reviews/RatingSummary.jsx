import React from 'react';
import { Box, Grid } from '@material-ui/core';
import StarRating from './StarRating.jsx';

const RatingSummary = ({ ratings, recommended }) => {
  // if (recommended) {
  //   console.log(
  //     'This is the RECOMMENDED values: ',
  //     recommended['0'],
  //     recommended['1']
  //   );
  // }

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
        <h4>{averageRecommend}% of reviews recommend this product</h4>
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
