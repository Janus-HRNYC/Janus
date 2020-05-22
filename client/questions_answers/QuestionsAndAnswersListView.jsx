import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import AnswerListView from './AnswerListView';
import AddAnswerModal from './AddAnswerModal';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const QuestionsAndAnswersListView = ({ question, productId, axiosQuestionRequest, productName, searchTerm }) => {
  const [answers, setAnswers] = useState([]);
  const [answerLimit, setAnswerLimit] = useState(2);
  const [seeMoreAnswersClicked, setSeeMoreAnswersClicked] = useState(false);
  
  useEffect(() => {
    getAnswers(question)
  }, [question]);
  
  const getAnswers = (question) => {
    Axios.get(`http://18.224.200.47/qa/${question.question_id}/answers?count=100`)
    .then(res => setAnswers(res.data.results))
    .catch(err => console.log(err));
  }

  const handleHelpfulQuestionClick = () => {
      let check = localStorage.getItem(`${question.question_id}`)
    if (!check) {
        Axios.put(`http://18.224.200.47/qa/question/${question.question_id}/helpful`)
        .then((res) => axiosQuestionRequest(productId))
        .catch((err) => console.log(err));
        localStorage.setItem(`${question.question_id}`, true)
        }
    };
  
  const handleSeeMoreAnswersClicked = () => {
    if (answerLimit === 2) setAnswerLimit(answers.length + 1);
    else setAnswerLimit(2);
    setSeeMoreAnswersClicked(!seeMoreAnswersClicked);
  };

  const renderAnswers = (i, answer) => {
    if (i <= (answerLimit - 1)) {
      return <AnswerListView key={i} answer={answer} question={question} getAnswers={getAnswers} />
    }
  };

  const displayAnswersIfAny = () => {
      if (answers.length > 0) {
           return (answers.sort((a, b) => ((b.answerer_name === 'Seller') - (a.answerer_name === 'Seller') || (b.helpfulness - a.helpfulness)))
            .map((answer, i) => renderAnswers(i, answer)))
      }
  }

  const seeMoreAnswersButton = () => {
    if (answers.length > 2) {
      return <p title="QandA" style={{cursor:'pointer'}} onClick={handleSeeMoreAnswersClicked}><b>{answerButtonTextChange()}</b></p>;
    }
  };

  const answerButtonTextChange = () => {
    if (!seeMoreAnswersClicked) return 'See More Answers';
    return 'Collapse Answers';
  };

  
  const noOverFlow = () => {
    let picture = false
    answers.forEach(answer => {
      if (answer.photos.length > 0 && !seeMoreAnswersClicked) {
        console.log('hitting foeEach')
        picture = true
      }
    })
    if (picture) return 'hidden'
    else return 'auto'
    
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100px',
      maxHeight: '450px',
      overflowY: noOverFlow(),
      overflowX: 'hidden',
      width: '1100px',
      height: 'auto',
      margin: theme.spacing(0),
      padding: theme.spacing(0)
  
    },
    moreAnswersButton: {
      topMargin: theme.spacing(0)
    },
    textAlign: {
      textAlign: 'right',
      whiteSpace: 'nowrap',
      position: 'flex'
    }
  }));

  const classes = useStyles()
 

  return (
   
    <Grid title="QandA" container justify='space-between' direction='row'>
        <Grid title="QandA" item xs={6}
         >
        <Typography variant="body1">
          <p>
              <b>Q:</b>{' '}
              <b>{question.question_body}</b>
          </p>
        </Typography>
        </Grid >
        <Typography variant="caption" align="right">
          <Grid title="QandA" item xs={3} className={classes.textAlign}>
              <p title="QandA" onClick={handleHelpfulQuestionClick} 
              style={{cursor: 'pointer'}}>
              Helpful? Yes({question.question_helpfulness})
              </p>
          </Grid >
        </Typography>
        <Typography variant="caption" align="right">
          <Grid item xs={3} className={classes.textAlign}>
            <AddAnswerModal 
            getAnswers={getAnswers} 
            question={question} 
            productName={productName}/>

          </Grid>

        </Typography>
        
        
        {
          answers.length > 0 ?
          <Grid title="QandA" className={classes.root}>
            {displayAnswersIfAny()}
          </Grid>
          : null
        }
            
        <Grid className={classes.moreAnswersButton}>{seeMoreAnswersButton()}</Grid>
    </Grid>
  );
};

export default QuestionsAndAnswersListView;