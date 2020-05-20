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
  },
}));

const ReviewItem = ({ item }) => {
  const classes = useStyles();

  const renderRecommend = (recommend) => {
    return recommend ? (
      <Grid container direction='row'>
        <CheckIcon fontSize='small' />
        <Typography variant='body2'> I recommend this product</Typography>
      </Grid>
    ) : (
      ''
    );
  };

  const renderResponse = (response) => {
    return response !== 'null' ? (
      <Box>
        <Typography variant='body2'>Response: </Typography>
        <Typography variant='body2'>{response}</Typography>
      </Box>
    ) : (
      ''
    );
  };

  return (
    <Box borderBottom={1}>
      <Grid container direct='row' justify='space-between'>
        <StarRating star={item.rating} size={'small'} />
        <Grid>
          {item.recommend ? <CheckCircleIcon fontSize='small' /> : null}{' '}
          <Typography variant='caption'>
            {item.reviewer_name}, {moment(item.date).format('MMMM DD, YYYY')}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant='h6'>{item.summary}</Typography>
      <Typography variant='body1'>{item.body}</Typography>
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
      <Typography variant='caption'>
        Helpful ? <a href='#'>Yes</a> ({item.helpfulness}) |{' '}
        <a href='#'>Report</a>
      </Typography>
    </Box>
  );
};

export default ReviewItem;
