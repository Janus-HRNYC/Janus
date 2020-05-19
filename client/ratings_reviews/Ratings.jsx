import React from 'react';
import { Grid } from '@material-ui/core';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

const Ratings = (props) => {
  const { ratingsMeta, clickStarRating } = props;
  console.log('Ratings Meta records : ', ratingsMeta);

  const { ratings, recommended, characteristics } = ratingsMeta;

  const renderRatingBreakdown = () => {
    if (ratings) {
      let totalRating = Object.values(ratings).reduce((sum, num) => {
        return sum + num;
      }, 0);
      console.log('Total Rating: ', totalRating);

      return [5, 4, 3, 2, 1].map((value, i) => {
        let ratingValue = ratings[value] ? ratings[value] : 0;
        ratingValue = (ratingValue / totalRating) * 100;
        console.log(`Rating Value for ${value}: `, ratingValue);
        return (
          <RatingBreakdown
            rating={value}
            ratingValue={ratingValue}
            key={i}
            clickStarRating={clickStarRating}
          />
        );
      });
    }
  };

  return (
    <Grid container direction='column'>
      <Grid item md={10}>
        <RatingSummary ratings={ratings} recommended={recommended} />
      </Grid>
      <Grid item md={10}>
        {renderRatingBreakdown()}
      </Grid>
    </Grid>
  );
};

export default Ratings;
