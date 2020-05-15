import Overview from "./overview/index.jsx";
import React from "react";
import ReactRouter from "./utility/ReactRouter.jsx";
// import DisplayRelatedItems from './related_products/redux/containers/DisplayRelatedItems';
import ReviewContainer from "./redux/containers/reviewContainer.js";

const App = () => {
  return (
    <div>
      Display App
      {/* <ReactRouter /> */}
      <div>
        <Overview />
        {/* <DisplayRelatedItems /> */}
        <ReviewContainer />
      </div>
    </div>
  );
};

export default App;
