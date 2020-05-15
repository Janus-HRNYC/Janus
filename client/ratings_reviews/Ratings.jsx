import React from 'react';
import { Box } from '@material-ui/core';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

const Ratings = ({ ratingsMeta }) => {
  console.log('Ratings Meta records : ', ratingsMeta);

  const { ratings, recommended, characteristics } = ratingsMeta;

  // if (ratings) {
  //   console.log('Here are the ratings: ', ratings);
  //   console.log('Here is the array: ', []);
  // }

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
          <RatingBreakdown rating={value} ratingValue={ratingValue} key={i} />
        );
      });
    }
  };

  return (
    <Box>
      <RatingSummary ratings={ratings} recommended={recommended} />
      {renderRatingBreakdown()}
    </Box>
  );
};

export default Ratings;
