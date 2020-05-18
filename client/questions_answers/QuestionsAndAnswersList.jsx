import React, { useState } from 'react';
import QuestionsAndAnswersListView from './QuestionsAndAnswersListView';
import AddQuestionModal from './AddQuestionModal';

const QuestionsAndAnswersList = ({ questions, axiosQuestionRequest, productId, productName }) => {
  const [questionLimit, setQuestionLimit] = useState(2);
  
  const handleMoreQuestionsClick = () => {
    setQuestionLimit(questionLimit + 2);
  };

  const renderQuestions = (question, i) => {
    if (i <= (questionLimit - 1)) {
      return <QuestionsAndAnswersListView 
      productId={productId} 
      axiosQuestionRequest={axiosQuestionRequest} 
      question={question} 
      key={i}
      productName={productName} />;
    }
  };

  const moreQuestionsButton = () => {
    if (questions.length >= questionLimit) {
      return <button onClick={handleMoreQuestionsClick}>More Answered Questions</button>;
    }
  };


  return (
    <div>
      <div>
        {questions.sort((a, b) => (b.question_helpfulness - a.question_helpfulness))
          .map((question, i) => renderQuestions(question, i))}
      </div>
      {moreQuestionsButton()}
      <AddQuestionModal 
      productName={productName} 
      productId={productId} 
      axiosQuestionRequest={axiosQuestionRequest} />
    </div>
  );
};

export default QuestionsAndAnswersList;
