import React from 'react';
import { Rating } from '@material-ui/lab';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  space: { marginTop: theme.spacing(1) },
}));

const StarRating = ({ star, size, update, setForm }) => {
  const classes = useStyles();
  const handleChange = (e, newValue) => {
    setForm((oldState) => {
      return { ...oldState, rating: newValue };
    });
  };

  if (update) {
    return (
      <Box mb={3} borderColor='transparent' className={classes.space}>
        <Rating
          name='update-rating'
          value={star}
          precision={1}
          size={size}
          onChange={handleChange}
        />
      </Box>
    );
  } else if (update === false) {
    return (
      <Box
        component='fieldset'
        borderColor='transparent'
        className={classes.root}
      >
        <Rating
          name='rating'
          value={star}
          precision={0.25}
          size={size}
          readOnly
        />
      </Box>
    );
  } else {
    return (
      <Box borderColor='transparent' className={classes.root}>
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
