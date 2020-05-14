import React from 'react';
import ReactRouter from './utility/ReactRouter.jsx';
import DisplayRelatedItems from './related_products/redux/containers/DisplayRelatedItems';
import Reviews from './ratings_reviews/Reviews.jsx';

const App = () => {
  return (
    <div>
      Display App
      <ReactRouter />
      <div>
        <DisplayRelatedItems />
        <Reviews />
      </div>
    </div>
  );
};

export default App;
