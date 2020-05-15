import React from 'react';
import { Box } from '@material-ui/core';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

const Ratings = ({ ratingsMeta }) => {
  console.log('Ratings Meta records : ', ratingsMeta);

  const { ratings, recommended, characteristics } = ratingsMeta;

  return (
    <Box>
      <RatingSummary ratings={ratings} recommended={recommended} />
      <RatingBreakdown />
    </Box>
  );
};

export default Ratings;
