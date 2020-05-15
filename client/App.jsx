import React from 'react';
import ReactRouter from './utility/ReactRouter.jsx';
import RelatedItems from './redux/containers/RelatedProductsContainer';
import ReviewContainer from './redux/containers/reviewContainer.js';
import OutfitContainter from './redux/containers/outfitContainer.js'

const App = () => {
  return (
    <div>
      Display App
      {/* <ReactRouter /> */}
      <div>
        <h2>RELATED PRODUCTS</h2>
        <RelatedItems />
        <h2>YOUR OUTFIT</h2>
        <OutfitContainter />
      </div>
      <div>
        <ReviewContainer />
      </div>
    </div>
  );
};

export default App;
