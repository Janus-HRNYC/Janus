import React from 'react';
import { LinearProgress, Grid, Typography, Button } from '@material-ui/core';
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
      backgroundColor: '#ff6c5c',
    },
  })(LinearProgress);

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1.5),
    },
    numberRating: {
      textDecoration: 'underline',
    },
    button: {
      textTransform: 'none',
      textAlign: 'left',
    },
  }));

  const classes = useStyles();

  return (
    <Grid container direction='row' className={classes.margin}>
      <Grid item sm={12} md={3}>
        <Button
          size='small'
          className={classes.button}
          onClick={() => clickStarRating(rating)}
        >
          <Typography variant='body2' className={classes.numberRating}>
            {rating} {rating === 1 ? 'star' : 'stars'}:{' '}
          </Typography>
        </Button>
      </Grid>
      <Grid item sm={12} md={8}>
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
