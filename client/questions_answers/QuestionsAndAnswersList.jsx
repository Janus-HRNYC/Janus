import React, { useState } from 'react';
import QuestionsAndAnswersListView from './QuestionsAndAnswersListView';
import AddQuestionModal from './AddQuestionModal';
import { Grid, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const QuestionsAndAnswersList = ({ questions, axiosQuestionRequest, productId, productName, searchTerm }) => {
  const [questionLimit, setQuestionLimit] = useState(2);
    
  const handleMoreQuestionsClick = () => setQuestionLimit(questionLimit + 2);
  
  const moreQuestionsButton = () => questions.length > questionLimit ? 
  <Button title="QandA" variant='contained' onClick={handleMoreQuestionsClick}>
      MORE ANSWERED QUESTIONS
    </Button>
    : null
    
    const filterQuestionsBySearchTerm = () => {
      let filteredQuestions = [];
      if (searchTerm.length > 2) {
        for (const question of questions) {
          const lowerCaseSearchTerm = searchTerm.toLowerCase().split(' ').join('');
          const lowerCaseQuestion = question.question_body.toLowerCase().split(' ').join('');
          const found1 = lowerCaseQuestion.includes(lowerCaseSearchTerm)
          
          let found2 = false;
          const lowerCaseQuestionsForSecondCheck = question.question_body.toLowerCase();
          const searchArray = searchTerm.toLowerCase().split(' ')
          searchArray.forEach((indAnswer) => {
            lowerCaseQuestionsForSecondCheck.includes(indAnswer) && indAnswer.length > 2 ? found2 = true
            : null
          })
          
          found1 || found2 ? filteredQuestions.push(question) : null;
        }
        return filteredQuestions
      } else {
        return questions
      }
    };
    
    const renderQuestions = (question, i) => i <= (questionLimit - 1) ? 
      <QuestionsAndAnswersListView 
      key={i}
      question={question} 
      productId={productId} 
      axiosQuestionRequest={axiosQuestionRequest} 
      productName={productName}
      />
      : null
    
    const sortQuestionsByHelpful = (questions) => questions.sort((a, b) => b.question_helpfulness - a.question_helpfulness)

    const displaySortedQuestionsIfAny = () => sortQuestionsByHelpful(filterQuestionsBySearchTerm()).map((question, i) => renderQuestions(question, i))
    
    const useStyles = makeStyles((theme) => ({
      moreQuestionsMargin: {
        marginRight: theme.spacing(2)
      }
    }));
    
    const classes = useStyles();
    
    return (
    <Box title="QandA">
      {displaySortedQuestionsIfAny()}
      <Grid container>
        <Grid item className={classes.moreQuestionsMargin}>
          {moreQuestionsButton()}
        </Grid>
        <Grid item>
          <AddQuestionModal 
          productName={productName} 
          productId={productId} 
          axiosQuestionRequest={axiosQuestionRequest} 
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuestionsAndAnswersList;
