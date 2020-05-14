import React, { useState } from 'react';
import QuestionsAndAnswersListView from './QuestionsAndAnswersListView';

const QuestionsAndAnswersList = ({ questions }) => {
  const [questionLimit, setQuestionLimit] = useState(4);
  const [moreQuestionsButtonClicked, setMoreQuestionsButtonClicked] = useState(false);

  const originalQuestionLimit = 4;

  const handleMoreQuestionsClick = () => {
    if (questionLimit === 4) {
      setQuestionLimit(questions.length);
    } else {
      setQuestionLimit(4);
    }
    setMoreQuestionsButtonClicked(!moreQuestionsButtonClicked);
  };

  const renderQuestions = (question, i) => {
    if (i <= (questionLimit - 1)) {
      return <QuestionsAndAnswersListView question={question} key={i} />;
    }
  };

  const moreQuestionsButton = () => {
    if (questions.length > originalQuestionLimit) {
      return <button onClick={handleMoreQuestionsClick}>{questionButtonTextChange()}</button>;
    }
  };

  const questionButtonTextChange = () => {
    if (!moreQuestionsButtonClicked) return 'More Answered Questions';
    return 'Collapse Questions';
  };

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
