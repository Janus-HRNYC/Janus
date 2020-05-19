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

      const displayPhotosIfAny = () => {
        if (answer.photos.length > 0) {
          console.log('photos', answer.photos)
          answer.photos.map((photo, i) => {
            console.log('url', photo.url)
            return (<img src={photo.url} />)
          })
        }
      }
  
    return (
        <Box >
            <p>
                <b>A:</b>{' '}
                {answer.body}
            </p>
            <Grid container>
            {answer.photos.length > 0 ?
            answer.photos.map((photo, i) => {
              return <Grid key={i} item xs={12 / answer.photos.length}><img width="150px" height="150px" src={photo.url} /></Grid>
            })
            : null
            }
            
            </Grid>
           
            <Grid 
            container
            direction='row'
            
            spacing={2}
            >
            <Grid item xs={6}>
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
            Helpful? Yes({answer.helpfulness}) |  
            </Grid>
            <Grid item xs={2} onClick={handleReportAnswerClick} style={{cursor:'pointer'}}>Report</Grid>
            </Grid>
            
        </Box>
  )

};

export default AnswerListView;
