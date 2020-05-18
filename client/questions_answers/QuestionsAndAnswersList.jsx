import React, { useState } from 'react';
import QuestionsAndAnswersListView from './QuestionsAndAnswersListView';
import AddQuestionModal from './AddQuestionModal';
import { Grid, Box } from '@material-ui/core';

const QuestionsAndAnswersList = ({ questions, axiosQuestionRequest, productId, productName, searchTerm }) => {
  const [questionLimit, setQuestionLimit] = useState(2);
    
  const handleMoreQuestionsClick = () => {
    setQuestionLimit(questionLimit + 2);
  };

  const renderQuestions = (question, i) => {
    if (i <= (questionLimit - 1)) {
      return (
    <QuestionsAndAnswersListView 
    productId={productId} 
    axiosQuestionRequest={axiosQuestionRequest} 
    question={question} 
    key={i}
    productName={productName} />)
    }
  };

  const moreQuestionsButton = () => {
        if (questions.length > questionLimit) return <button onClick={handleMoreQuestionsClick}>More Answered Questions</button>;
  };

  const searchFilter = () => {
      let filteredQuestions = [];
      if (searchTerm.length > 2) {
          for (const question of questions) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase().split(' ').join('');
            const lowerCaseQuestion = question.question_body.toLowerCase().split(' ').join('');
            lowerCaseQuestion.includes(lowerCaseSearchTerm) ? filteredQuestions.push(question) : null;
          }
          return filteredQuestions
      } else {
          return questions
      }
  };

  return (
    <Box>
      
        {searchFilter().sort((a, b) => (b.question_helpfulness - a.question_helpfulness))
          .map((question, i) => renderQuestions(question, i))}
      
      {moreQuestionsButton()}
      <AddQuestionModal 
      productName={productName} 
      productId={productId} 
      axiosQuestionRequest={axiosQuestionRequest} />
    </Box>
  );
};

export default QuestionsAndAnswersList;
