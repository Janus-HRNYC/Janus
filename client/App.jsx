import React from "react";
import ReactRouter from "./utility/ReactRouter.jsx";
import Placeholder from "./containers/placeholder.jsx";
import QuestionsAndAnswers from './questions_answers/QuestionsAndAnswers'
const App = () => {
  return (
    <div>
      Display App
      <Placeholder />
      <QuestionsAndAnswers />
      <ReactRouter />
    </div>
  );
};

export default App;
