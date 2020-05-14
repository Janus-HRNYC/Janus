import React from 'react';
import ReactRouter from './utility/ReactRouter.jsx';
// import DisplayRelatedItems from './related_products/redux/containers/DisplayRelatedItems';
import ReviewContainer from './redux/containers/reviewContainer.js';

const App = () => {
  return (
    <div>
      Display App
      {/* <ReactRouter /> */}
      <div>
        {/* <DisplayRelatedItems /> */}
        <ReviewContainer />
      </div>
    </div>
  );
};

export default App;
