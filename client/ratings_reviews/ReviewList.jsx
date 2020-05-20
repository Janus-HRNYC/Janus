import React, { useState } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Grid,
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReviewItem from './ReviewItem.jsx';
import AddReview from './AddReview.jsx';

const useStyles = makeStyles((theme) => ({
  list: {
    maxHeight: '700px',
    overflow: 'auto',
    paddingBottom: theme.spacing(2),
  },

  selected: {
    fontWeight: 'bold',
    letterSpacing: '0.0075em',
    fontSize: '1.2rem',
  },
  sort: {
    marginRight: theme.spacing(1),
  },
  more: {
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const ReviewList = (props) => {
  const classes = useStyles();
  const {
    list,
    id,
    displayBySort,
    ratingsMeta,
    postReview,
    limit,
    setLimit,
    setFilterList,
  } = props;
  const [sort, setSort] = useState('relevant');
  const listLength = list.length;

  const renderReviewItem = () => {
    let displayReviews = list.filter((item) => {
      return list.indexOf(item) < limit;
    });
    console.log('Display', displayReviews);
    return displayReviews ? (
      <div>
        {displayReviews.map((item) => (
          <ReviewItem item={item} key={item.review_id} />
        ))}
      </div>
    ) : null;
  };

  const addMoreReviews = (e) => {
    e.preventDefault();
    setLimit(limit + 2);
  };

  const handleChange = (e) => {
    setSort(e.target.value);
    displayBySort(id, e.target.value);
    setLimit(2);
    setFilterList([]);
  };

  const renderMenu = () => (
    <FormControl>
      <Select value={sort} onChange={handleChange} className={classes.selected}>
        <MenuItem value={'relevant'}>Relevant</MenuItem>
        <MenuItem value={'helpful'}>Helpful</MenuItem>
        <MenuItem value={'newest'}>Newest</MenuItem>
      </Select>
    </FormControl>
  );

  const renderMoreReviewButton = () => {
    if (listLength > limit && listLength !== 0)
      return (
        <Button
          variant='outlined'
          className={classes.more}
          onClick={addMoreReviews}
        >
          MORE REVIEWS
        </Button>
      );
  };

  return (
    <>
      <Grid container direction='row'>
        <Typography variant='h6' className={classes.sort}>
          {listLength} reviews, sorted by
        </Typography>
        {renderMenu()}
      </Grid>
      <Grid className={classes.list}>{renderReviewItem()}</Grid>
      <Grid container direction='row'>
        {renderMoreReviewButton()}
        <AddReview ratingsMeta={ratingsMeta} postReview={postReview} id={id} />
      </Grid>
    </>
  );
};

export default ReviewList;
