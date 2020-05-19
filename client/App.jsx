import React from "react";
import ReactRouter from "./utility/ReactRouter.jsx";
import RelatedItems from "./redux/containers/RelatedProductsContainer";
import QuestionsAndAnswersContainer from "./redux/containers/QuestionsAndAnswersContainer.js";
import ReviewContainer from "./redux/containers/reviewContainer.js";
import OutfitContainter from "./redux/containers/outfitContainer.js";
import OverviewContainer from "./redux/containers/overviewContainer";

const App = () => {

  window.onclick = e => {
    console.log('e.target', e.target);
    console.log('e.target.value', e.target.value);
    console.log('e.target.parentNode', e.target.parentNode)
    console.log('e.target.parentElement', e.target.parentElement)
} 
  return (
    <div>
      Display App
      {/* <ReactRouter /> */}
      <OverviewContainer />
      <div>
        <h2>RELATED PRODUCTS</h2>
        <RelatedItems />
        <h2>YOUR OUTFIT</h2>
        <OutfitContainter />
        <div>
          <QuestionsAndAnswersContainer />
        </div>
        <div>
          <ReviewContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
