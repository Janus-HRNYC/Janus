import React, { useState } from 'react';
import StarRating from './StarRating.jsx';

const Ratings = ({ ratingsMeta }) => {
  console.log('Ratings Meta records : ', ratingsMeta);

  const { ratings, recommended, characteristics } = ratingsMeta;
  if (ratings && recommended) {
    console.log('Recommended : ', ratings[1], recommended[1]);
  }

  const renderStarRating = () => {
    let totalStars = 0,
      totalReviews = 0,
      averageRating = 0;
    if (ratings) {
      for (let stars in ratings) {
        totalStars += stars * ratings[stars];
        totalReviews += ratings[stars];
      }
    }
    if (totalReviews !== 0) {
      averageRating = totalStars / totalReviews;
      averageRating = Number(averageRating.toFixed(1));
    }

    return (
      <div>
        Average: {averageRating}
        <StarRating star={averageRating} size={'large'} />
      </div>
    );
  };

  return (
    <div>
      <h4> TODO: This is where the Meta component</h4>
      {renderStarRating()}
    </div>
  );
};

export default Ratings;
