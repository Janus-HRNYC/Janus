import React, { useState } from 'react';
import QuestionsAndAnswersListView from './QuestionsAndAnswersListView';

const QuestionsAndAnswersList = ({ questions }) => {
  const [questionLimit, setQuestionLimit] = useState(2);
  const [moreQuestionsButtonClicked, setMoreQuestionsButtonClicked] = useState(false);

  const handleMoreQuestionsClick = () => {
    setQuestionLimit(questionLimit + 2);
  };

  const renderQuestions = (question, i) => {
    if (i <= (questionLimit - 1)) {
      return <QuestionsAndAnswersListView question={question} key={i} />;
    }
  };

  const moreQuestionsButton = () => {
    if (questions.length >= questionLimit) {
      return <button onClick={handleMoreQuestionsClick}>More Answered Questions</button>;
    }
  };

//   const questionButtonTextChange = () => {
//     if (!moreQuestionsButtonClicked) return 'More Answered Questions';
//     return 'Collapse Questions';
//   };

  return (
    <div>
      <div>
        {questions.sort((a, b) => (b.question_helpfulness - a.question_helpfulness))
          .map((question, i) => renderQuestions(question, i))}
      </div>
      {moreQuestionsButton()}
    </div>
  );
};

export default QuestionsAndAnswersList;
