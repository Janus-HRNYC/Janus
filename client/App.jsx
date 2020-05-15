import React from "react";
import ReactRouter from "./utility/ReactRouter.jsx";
import QuestionsAndAnswersContainer from './redux/containers/QuestionsAndAnswersContainer.js'
import ReviewContainer from './redux/containers/reviewContainer.js';


const App = () => {
  return (
    <div>
      Display App
      
      
      <ReactRouter />
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
