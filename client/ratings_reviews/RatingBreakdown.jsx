import React from 'react';
import { LinearProgress, Grid, Typography } from '@material-ui/core';
import { lighten, withStyles, makeStyles } from '@material-ui/core/styles';

const RatingBreakdown = (props) => {
  const { rating, ratingValue, clickStarRating } = props;

  const BorderLinearProgress = withStyles({
    root: {
      height: 12,
      backgroundColor: lighten('#ff6c5c'),
      marginTop: '8px',
    },
    bar: {
      // borderRadius: 10,
      backgroundColor: '#ff6c5c',
    },
  })(LinearProgress);

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1.5),
    },
  }));

  const classes = useStyles();

  return (
    <Grid container direction='row' className={classes.margin}>
      <Grid item sm={12} md={3}>
        <a href='#' onClick={() => clickStarRating(rating)}>
          <Typography variant='body2'>
            {rating} {rating === 1 ? 'star' : 'stars'}:{' '}
          </Typography>
        </a>
      </Grid>
      <Grid item sm={12} md={9}>
        <BorderLinearProgress
          variant='determinate'
          color='primary'
          value={ratingValue}
        />
      </Grid>
    </Grid>
  );
};

export default RatingBreakdown;
