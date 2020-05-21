import React from 'react';
import StarRating from './StarRating.jsx';
import moment from 'moment';
import { Grid, Box, Typography, Avatar } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    justifyContent: 'flex-start',
  },
  imageLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: theme.spacing(2),
  },
  response: {
    display: 'block',
    background: '#D7D7D7',
    margin: theme.spacing(0),
    padding: theme.spacing(2),
  },
  responseTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  ratingReviewer: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  reviewer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(1),
  },
  bttomMargin3: {
    marginBottom: theme.spacing(3),
  },
  bttomMargin2: {
    paddingBottom: theme.spacing(2),
  },
  bttomMargin1: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
}));

const ReviewItem = ({ item }) => {
  const classes = useStyles();

  const renderRecommend = (recommend) => {
    return recommend ? (
      <Grid container direction='row' className={classes.bttomMargin1}>
        <CheckIcon fontSize='small' />
        <Typography variant='body2'> I recommend this product</Typography>
      </Grid>
    ) : (
      ''
    );
  };

  const renderResponse = (response) => {
    console.log('Response', response);
    return response !== 'null' && response !== null && response !== '' ? (
      <Box className={classes.response}>
        <Typography variant='body2' className={classes.responseTitle}>
          Response:{' '}
        </Typography>
        <Typography variant='body2'>{response}</Typography>
      </Box>
    ) : (
      ''
    );
  };

  return (
    <Box borderBottom={1}>
      <Grid
        container
        direction='row'
        justify='space-between'
        className={classes.ratingReviewer}
      >
        <StarRating star={item.rating} size={'small'} />
        <Grid className={classes.ratingReviewer} className={classes.reviewer}>
          {item.recommend ? <CheckCircleIcon fontSize='small' /> : null}{' '}
          <Typography variant='caption'>
            {item.reviewer_name}, {moment(item.date).format('MMMM DD, YYYY')}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant='h6' className={classes.bttomMargin3}>
        {item.summary}
      </Typography>
      <Typography variant='body1' className={classes.bttomMargin2}>
        {item.body}
      </Typography>
      <Grid className={classes.image}>
        {item.photos.length > 0
          ? item.photos.map((photo, i) => {
              return (
                <Avatar
                  key={i}
                  variant='square'
                  src={photo.url}
                  className={classes.imageLarge}
                ></Avatar>
              );
            })
          : null}
      </Grid>
      {renderRecommend(item.recommend)}
      <br />
      {renderResponse(item.response)}
      <Grid className={classes.bttomMargin1}>
        <Typography variant='caption'>
          Helpful ? <a href='#'>Yes</a> ({item.helpfulness}) |{' '}
          <a href='#'>Report</a>
        </Typography>
      </Grid>
    </Box>
  );
};

export default ReviewItem;
