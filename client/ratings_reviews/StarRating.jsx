import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const StarRating = ({ star }) => {
  return (
    <Box component='fieldset' mb={3} borderColor='transparent'>
      <Rating name='read-only' value={star} readOnly />
    </Box>
  );
};

export default StarRating;
