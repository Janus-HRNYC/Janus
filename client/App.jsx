import React from "react";
import ReactRouter from "./utility/ReactRouter.jsx";


const App = () => {
  return (
    <div>
      Display App
      <Placeholder />
      
      <ReactRouter />
      <div>
        {/* <DisplayRelatedItems /> */}
        <ReviewContainer />
      </div>
    </div>
  );
};

export default App;
