import React from 'react';
import { Box } from '@material-ui/core';
import RatingBreakdown from './RatingBreakdown.jsx';

const Ratings = ({ ratingsMeta }) => {
  console.log('Ratings Meta records : ', ratingsMeta);

  const { ratings, recommended, characteristics } = ratingsMeta;

  return (
    <Box>
      <RatingBreakdown ratings={ratings} recommended={recommended} />
    </Box>
  );
};

export default Ratings;
