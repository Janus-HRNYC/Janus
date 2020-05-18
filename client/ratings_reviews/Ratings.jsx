import React from 'react';
import { Box } from '@material-ui/core';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import REFERENCES from './references.js';

const Ratings = ({ ratingsMeta }) => {
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
          <RatingBreakdown rating={value} ratingValue={ratingValue} key={i} />
        );
      });
    }
  };

  const renderFit = () => {
    const marks = REFERENCES.RATINGS.fitMarks;
    if (characteristics) {
      let fitValue = !characteristics.Fit ? 0 : characteristics.Fit.value;
      fitValue = (fitValue / 5) * 100;
      return <ProductBreakdown label={'Fit'} value={fitValue} marks={marks} />;
    }
  };

  const renderComfort = () => {
    const marks = REFERENCES.RATINGS.comfortMarks;
    if (characteristics) {
      let comfortValue = !characteristics.Comfort
        ? 0
        : characteristics.Comfort.value;
      comfortValue = (comfortValue / 5) * 100;
      return (
        <ProductBreakdown
          label={'Comfort'}
          value={comfortValue}
          marks={marks}
        />
      );
    }
  };

  return (
    <Box>
      <RatingSummary ratings={ratings} recommended={recommended} />
      {renderRatingBreakdown()}
      <br />
      {renderFit()}
      {renderComfort()}
    </Box>
  );
};

export default Ratings;
