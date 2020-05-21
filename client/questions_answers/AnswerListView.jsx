import React, { useState } from 'react';
import Axios from 'axios';
import moment from 'moment';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import PictureModal from './PictureModal'


const AnswerListView = ({ answer, question, getAnswers }) => {

  const [displayPictureModal, setDisplayPictureModal] = useState(false);  
  const [photoURL, setPhotoURL] = useState('')
  
  const handlePictureClick = (e) => {
    setDisplayPictureModal(!displayPictureModal)
    console.log('e.target.value', e.target.title)
    setPhotoURL(e.target.title)
  }
  
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
          height: 'calc(auto + 5px)'
        },
        QAThumbnails: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          marginTop: theme.spacing(0),
          marginBottom: theme.spacing(0),
          padding: theme.spacing(0),
          width: '80px',
          height: '80px',
          objectFit: 'cover'
        },
        yesAnswerMargin: {
          margin: theme.spacing(1.5),
          
        },
        smallFont: {
          fontSize: '10px'
      }
      }));

      const classes = useStyles();

    return (
        <Box className={classes.root} title="QandA">
            <Typography variant="body1">
              <Grid title="QandA">
                  <b title="QandA">A:</b>{' '}
                  {answer.body}
              </Grid>

            </Typography>
            <Grid container
            >
            {answer.photos.length > 0 ?
            answer.photos.map((photo, i) => {
              return <Grid   title="QandA" key={i} item onClick={(e) => {handlePictureClick(e)}}><img title="QandA" title={photo.url} className={classes.QAThumbnails} src={photo.url} /></Grid>
            })
            : null
            }
            </Grid>
           
            <Grid 
            container
            direction='row'
            title="QandA"
            spacing={1}
            >
            <Typography variant="caption" gutterBottom>
            <Grid  className={classes.yesAnswerMargin} title="QandA" item >
            by{' '}
            {
            answer.answerer_name === "Seller" ?
            <b title="QandA">{answer.answerer_name}</b>
            :
            answer.answerer_name}{' '}
            -
            {' '}{moment(answer.date).format('MMMM DD, YYYY')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
            </Grid>
            </Typography>
            <Typography variant="caption" gutterBottom>
            <Grid className={classes.yesAnswerMargin} title="QandA" item onClick={handleHelpFullAnswerClick} style={{cursor:'pointer'}}>
            Helpful? Yes({answer.helpfulness})&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
            </Grid>
            </Typography>
            <Typography variant="caption" gutterBottom>
            <Grid  className={classes.yesAnswerMargin} title="QandA" item onClick={handleReportAnswerClick} style={{cursor:'pointer'}}>Report</Grid>
            </Typography >
            </Grid>
            <PictureModal photoURL={photoURL} setDisplayPictureModal={setDisplayPictureModal} displayPictureModal={displayPictureModal}/>
        </Box>
       
         
        
  )
};

export default AnswerListView;
