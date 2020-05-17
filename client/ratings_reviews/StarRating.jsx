import React from 'react';
import { Rating } from '@material-ui/lab';
import { Box } from '@material-ui/core';

const StarRating = ({ star, size, update, setForm }) => {
  const handleChange = (e, newValue) => {
    setForm((oldState) => {
      return { ...oldState, rating: newValue };
    });
  };

  if (update) {
    return (
      <Box component='fieldset' mb={3} borderColor='transparent'>
        <Rating
          name='update-rating'
          value={star}
          precision={1}
          size={size}
          onChange={handleChange}
        />
      </Box>
    );
  } else {
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
  }
};

export default StarRating;
