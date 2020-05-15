import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const StarRating = ({ star, size }) => {
  return (
<<<<<<< HEAD
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Rating name="read-only" value={star} readOnly precision={0.25} />
=======
    <Box component='fieldset' mb={3} borderColor='transparent'>
      <Rating
        name='rating'
        value={star}
        precision={0.25}
        size={size}
        readOnly
      />
>>>>>>> master
    </Box>
  );
};

export default StarRating;
