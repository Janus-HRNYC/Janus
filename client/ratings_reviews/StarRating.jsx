import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const StarRating = ({ star, size }) => {
  return (
    <Box component='fieldset' mb={3} borderColor='transparent'>
      <Rating
        name='rating'
        value={star}
        precision={0.25}
        size={size}
        readOnly
      />
    </Box>
  );
};

export default StarRating;
