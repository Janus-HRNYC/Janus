import React from 'react';
import { Box, LinearProgress, Grid } from '@material-ui/core';
import { lighten, withStyles, makeStyles } from '@material-ui/core/styles';

const RatingBreakdown = ({ ratings }) => {
  if (ratings) {
    console.log('Here are the ratings: ', ratings);
  }
  const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: lighten('#ff6c5c', 0.5),
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#ff6c5c',
    },
  })(LinearProgress);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  let val1 = (1 / 10) * 100;
  let val2 = (2 / 10) * 100;
  let val3 = (2 / 10) * 100;

  return (
    <div>
      1:{' '}
      <BorderLinearProgress
        className={classes.margin}
        variant='determinate'
        color='primary'
        value={val1}
      />
      <br />
      2:{' '}
      <BorderLinearProgress
        className={classes.margin}
        variant='determinate'
        color='primary'
        value={val2}
      />
      <br />
      3:{' '}
      <BorderLinearProgress
        className={classes.margin}
        variant='determinate'
        color='primary'
        value={val3}
      />
      <br />
    </div>
  );
};

export default RatingBreakdown;
