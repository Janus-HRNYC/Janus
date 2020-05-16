import React from 'react';
import ReactRouter from './utility/ReactRouter.jsx';
import RelatedItems from './redux/containers/RelatedProductsContainer';
import QuestionsAndAnswersContainer from './redux/containers/QuestionsAndAnswersContainer.js';
import ReviewContainer from './redux/containers/reviewContainer.js';
import OutfitContainter from './redux/containers/outfitContainer.js';
import Overview from './overview/index.jsx';

const App = () => {
  return (
    <div>
      Display App
      {/* <ReactRouter /> */}
      <Overview />
      <div>
        <h2>RELATED PRODUCTS</h2>
        <RelatedItems />
        <h2>YOUR OUTFIT</h2>
        <OutfitContainter />
      </div>
      <div>
        <QuestionsAndAnswersContainer />
      </div>
      <div>
        <ReviewContainer />
      </div>
    </div>
  );
};

export default App;
