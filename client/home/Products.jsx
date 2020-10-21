import React, { useEffect } from 'react';
import ReactRouter from '../utility/ReactRouter.jsx';
import { useParams } from 'react-router-dom';
import RelatedItems from '../redux/containers/RelatedProductsContainer';
import ReviewContainer from '../redux/containers/reviewContainer.js';
import OutfitContainter from '../redux/containers/outfitContainer.js';
import OverviewContainer from '../redux/containers/overviewContainer';
import QuestionsAndAnswers from '../questions_answers/QuestionsAndAnswers'

const Products = () => {
  return (
    <div>
      <div>
        <OverviewContainer />
      </div>
      <div>
        <h2>RELATED PRODUCTS</h2>
        <RelatedItems />
        <h2>YOUR OUTFIT</h2>
        <OutfitContainter />
      </div>
      <div title='QandA'>
        <QuestionsAndAnswers />
      </div>
      <div>
        <ReviewContainer />
      </div>
    </div>
  );
};

export default Products;
