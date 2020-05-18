import React, { useState } from 'react';
import Axios from 'axios';
import moment from 'moment';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const AnswerListView = ({ answer, question, getAnswers }) => {
  
    const [numHelpfulAnswerClicks, setNumHelpfulAnswerClicks] = useState(0)

    const handleHelpFullAnswerClick = () => {
        if (numHelpfulAnswerClicks === 0) {
        Axios.put(`http://18.224.200.47/qa/answer/${answer.answer_id}/helpful`)
        .then(res => getAnswers(question))
        .catch(err => console.log(err));
        setNumHelpfulAnswerClicks(numHelpfulAnswerClicks + 1)
        }
    }

    const handleReportAnswerClick = () => {
        Axios.put(`http://18.224.200.47/qa/answer/${answer.answer_id}/report`)
        .then(res => getAnswers(question))
        .catch(err => console.log(err));
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        control: {
          padding: theme.spacing(2),
        },
      }));

      const classes = useStyles();
  
    return (
        <Grid >
            <Grid >
            <b>A:</b>{' '}
            {answer.body}
            </Grid>
            <Grid 
            container
            direction='row'
            justify='flex-start'
            className={classes.root} spacing={2}
            >
            <Grid item xs={4}>
            by{' '}
            {
            answer.answerer_name === "Seller" ?
            <b>{answer.answerer_name}</b>
            :
            answer.answerer_name}
            ,
            {' '}{moment(answer.date).format('MMMM DD, YYYY')}{'  '}
            </Grid>
            <Grid item xs={4} onClick={handleHelpFullAnswerClick} style={{cursor:'pointer'}}>
            Helpful? Yes({answer.helpfulness}){' | '}
            </Grid>
            <Grid item xs={4} onClick={handleReportAnswerClick} style={{cursor:'pointer'}}>
                Report
            </Grid>
            </Grid>
        </Grid>
  )

};

export default AnswerListView;
