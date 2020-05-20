import React, { useState } from 'react';
import Axios from 'axios';
import moment from 'moment';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const AnswerListView = ({ answer, question, getAnswers }) => {

    const handleHelpFullAnswerClick = () => {
        let check = localStorage.getItem(`${answer.answer_id}`)
        if (!check) {
        Axios.put(`http://18.224.200.47/qa/answer/${answer.answer_id}/helpful`)
        .then(res => getAnswers(question))
        .catch(err => console.log(err));
        localStorage.setItem(`${answer.answer_id}`, true)
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
        <Box title="QandA">
            <p title="QandA">
                <b title="QandA">A:</b>{' '}
                {answer.body}
            </p>
            <Grid container
            >
            {answer.photos.length > 0 ?
            answer.photos.map((photo, i) => {
              return <Grid  title="QandA" key={i} item xs={12 / answer.photos.length}><img title="QandA" className="QAthumnails" src={photo.url} /></Grid>
            })
            : null
            }
            </Grid>
           
            <Grid 
            container
            direction='row'
            title="QandA"
            spacing={2}
            >
            <Grid title="QandA" item xs={6}>
            by{' '}
            {
            answer.answerer_name === "Seller" ?
            <b title="QandA">{answer.answerer_name}</b>
            :
            answer.answerer_name}
            ,
            {' '}{moment(answer.date).format('MMMM DD, YYYY')}{'  '}
            </Grid>
            <Grid title="QandA" item xs={4} onClick={handleHelpFullAnswerClick} style={{cursor:'pointer'}}>
            Helpful? Yes({answer.helpfulness}) |  
            </Grid>
            <Grid title="QandA" item xs={2} onClick={handleReportAnswerClick} style={{cursor:'pointer'}}>Report</Grid>
            </Grid>
        </Box>
  )
};

export default AnswerListView;
