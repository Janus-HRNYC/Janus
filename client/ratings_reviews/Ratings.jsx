import React from 'react';
import { Box } from '@material-ui/core';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const Ratings = ({ ratingsMeta }) => {
  console.log('Ratings Meta records : ', ratingsMeta);

  const { ratings, recommended, characteristics } = ratingsMeta;

  // if (characteristics) {
  //   console.log('Here are the ratings: ', characteristics);
  //   console.log('Here is the array: ', characteristics.Comfort.value);
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

  const renderFit = () => {
    const marks = [
      {
        value: 0,
        label: 'Too Small',
      },
      {
        value: 50,
        label: 'Perfect',
      },
      {
        value: 100,
        label: 'Too Large',
      },
    ];
    if (characteristics) {
      let fitValue = !characteristics.Fit ? 0 : characteristics.Fit.value;
      fitValue = (fitValue / 5) * 100;
      return <ProductBreakdown label={'Fit'} value={fitValue} marks={marks} />;
    }
  };

  const renderComfort = (value) => {
    const marks = [
      {
        value: 0,
        label: 'Poor',
      },
      {
        value: 100,
        label: 'Perfect',
      },
    ];
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
