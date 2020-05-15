import React from 'react';
import { Box, LinearProgress, Grid } from '@material-ui/core';
import { lighten, withStyles, makeStyles } from '@material-ui/core/styles';

const RatingBreakdown = (props) => {
  const { rating, ratingValue } = props;

  const BorderLinearProgress = withStyles({
    root: {
      height: 12,
      backgroundColor: lighten('#ff6c5c'),
      marginTop: '8px',
    },
    bar: {
      borderRadius: 10,
      backgroundColor: '#ff6c5c',
    },
  })(LinearProgress);

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <Grid container direction='row'>
      <Grid item sm={12} md={2}>
        {rating} {rating === 1 ? 'star' : 'stars'}:
      </Grid>
      <Grid item sm={12} md={7}>
        <BorderLinearProgress
          className={classes.margin}
          variant='determinate'
          color='primary'
          value={ratingValue}
        />
      </Grid>
    </Grid>
  );
};

export default RatingBreakdown;
