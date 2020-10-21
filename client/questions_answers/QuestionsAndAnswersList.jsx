import React, { useState } from 'react';
import QuestionsAndAnswersListView from './QuestionsAndAnswersListView';
import AddQuestionModal from './AddQuestionModal';
import { Grid, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'

const QuestionsAndAnswersList = ({ searchTerm }) => {
  const [questionLimit, setQuestionLimit] = useState(2);

  const questions = useSelector(state => state.questions) 
    
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
          let copiedQuestion = {...question}
          const regex1 = new RegExp(searchTerm.replace(/\s/g, '').replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i')
          const found1 = regex1.test(copiedQuestion.question_body.replace(/\s/g, ''))
          
          let found2 = false;
          let count = 0;
          const searchArray = searchTerm.split(' ')

          searchArray.forEach((searchWord) => {
            const regex = new RegExp(searchWord.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i')
            if (regex.test(copiedQuestion.question_body) && searchWord.length > 2) count++
          })

          if (count > 0) {
            copiedQuestion.count = count
            found2 = true
          }
          found1 || found2 ? filteredQuestions.push(copiedQuestion) : null;
        }
        filteredQuestions.sort((a, b) => b.count - a.count)
        return filteredQuestions
      } else {
        return questions
      }
    };
    
    const renderQuestions = (question, i) => i <= (questionLimit - 1) ? 
      <QuestionsAndAnswersListView 
      key={question.question_id}
      question={question} 
      />
      : null
    
    const sortQuestionsByHelpful = (questions) => questions.slice().sort((a, b) => b.question_helpfulness - a.question_helpfulness)

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
          <AddQuestionModal />
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuestionsAndAnswersList;
