import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import AnswerListView from './AnswerListView';
import AddAnswerModal from './AddAnswerModal';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import { axiosQuestionRequest } from '../redux/actions/Q&AActions/questionsAction'

const QuestionsAndAnswersListView = ({ question }) => {
  const [answers, setAnswers] = useState([]);
  const [answerLimit, setAnswerLimit] = useState(2);
  const [seeMoreAnswersClicked, setSeeMoreAnswersClicked] = useState(false);

  const dispatch = useDispatch()
  const productId = useSelector(state => state.id)

  useEffect(() => {
    setAnswers(Object.values(question.answers))
  }, [question])

  useEffect(() => {
      seeMoreAnswersClicked ? setAnswerLimit(answers.length) : null;
  }, [answers])

  
  const getAnswers = (question) => {
    Axios.get(`http://18.224.200.47/qa/${question.question_id}/answers?count=100`)
    .then(res => {
      setAnswers(res.data.results)
    })
    .catch(err => console.log(err));
  }

  const handleHelpfulQuestionClick = () => {
      const checkIfUserClickedHelpfulQuestion = localStorage.getItem(`${question.question_id}`)
      !checkIfUserClickedHelpfulQuestion ?
        Axios.put(`http://18.224.200.47/qa/question/${question.question_id}/helpful`)
        .then(res => dispatch(axiosQuestionRequest(productId)))
        .then(localStorage.setItem(`${question.question_id}`, true))
        .catch(err => console.log(err))
      : null
    };
  
  const handleSeeMoreAnswersClicked = () => {
    !seeMoreAnswersClicked ? setAnswerLimit(answers.length)
    : setAnswerLimit(2);
    setSeeMoreAnswersClicked(!seeMoreAnswersClicked);
  };

  const displayAnswers = () => answers.sort((a, b) => ((b.answerer_name === 'Seller') - (a.answerer_name === 'Seller') || (b.helpfulness - a.helpfulness)))
  .map((answer, i) => renderAnswers(i, answer))

  const renderAnswers = (i, answer) => i <= (answerLimit - 1) ? 
    <AnswerListView key={answer.id || answer.answer_id} answer={answer} question={question} getAnswers={getAnswers} /> 
  : null

  const displayAnswersIfAny = () => answers.length > 0 ? 
      (answers.sort((a, b) => ((b.answerer_name === 'Seller') - (a.answerer_name === 'Seller') || (b.helpfulness - a.helpfulness)))
      .map((answer, i) => renderAnswers(i, answer)))
      : null
  

  const seeMoreAnswersButton = () => answers.length > 2 ?
      <p title="QandA" style={{cursor:'pointer'}} onClick={handleSeeMoreAnswersClicked} className={classes.seeMoreAnswersFontWeight}>{answerButtonTextChange()}</p>
      : null

  const answerButtonTextChange = () => !seeMoreAnswersClicked ? 'See More Answers' : 'Collapse Answers'
  


  const useStyles = makeStyles((theme) => ({
    root: {
      
      maxHeight: '450px',
      overflowY: 'auto',
      overflowX: 'hidden',
      width: '1100px',
      
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
    },
    questionText: {
      
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    borderLeft: {
      borderLeft: "thin solid black"
    },
    underLineText: {
      textDecoration: 'underline',
      cursor: 'pointer'
    },
    helpFulAddAnswerText: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    seeMoreAnswersFontWeight: {
      fontWeight: 600
    }
  }));

  const classes = useStyles()
  
 

  return (
    <Grid>
      <Grid title="QandA" container justify='space-between' direction='row'>
        <Grid title="QandA" item className={classes.questionText}>
        <Typography variant="h6">
          Q: {question.question_body}
        </Typography>
        </Grid >
        <Typography variant="caption" align="right">
          <Grid item  className={classes.helpFulAddAnswerText}>
            Helpful?&nbsp;&nbsp;
            <span title="QandA" onClick={handleHelpfulQuestionClick}  className={classes.underLineText}>
              Yes
            </span>&nbsp;
            ({question.question_helpfulness})
            &nbsp;&nbsp;&nbsp;<span className={classes.borderLeft}></span>&nbsp;&nbsp;&nbsp;
            <AddAnswerModal
            getAnswers={getAnswers} 
            question={question}/>
          </Grid>
          </Typography>
        </Grid>
        <Grid>
          {
            answers.length > 0 ?
            <Grid title="QandA" className={classes.root}>
              {answers ? displayAnswersIfAny() : null}
            </Grid>
            : null
          }
        </Grid>
            
        <Grid className={classes.moreAnswersButton}>{seeMoreAnswersButton()}</Grid>
    </Grid>
  );
};

export default QuestionsAndAnswersListView;