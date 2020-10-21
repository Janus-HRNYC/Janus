import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import QuestionsAndAnswersList from './QuestionsAndAnswersList';
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import * as axiosMethods from '../redux/actions/Q&AActions/questionsAction'

const QuestionsAndAnswers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const id = useSelector(state => state.id)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(axiosMethods.axiosQuestionRequest(id))
    dispatch(axiosMethods.axiosProductInfoRequest(id))
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: 'auto',
      maxWidth: '1100px',
      marginTop: theme.spacing(8)
    },
  }));

  const classes = useStyles();

  return (
     <Box className={classes.root}>
      <Container>
        <Box title="QandA" className={classes.root} >
            <Typography variant='subtitle1'>QUESTIONS & ANSWERS</Typography>
            <SearchForm
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
            />
            <QuestionsAndAnswersList 
              searchTerm={searchTerm} 
            />
        </Box>
      </Container>
    </Box>
  );
};

export default QuestionsAndAnswers;

  // useEffect(() => {
  //   let array = []
  //   localStorage.setItem('counterArray', JSON.stringify(array))
  // }, [])

  // window.onclick = e => {
  //   let counterArray = JSON.parse(localStorage.getItem('counterArray'))
  //   let obj = {}
  //   obj.widget = e.target.title
  //   let element = e.target.tagName
  //   obj.element = element
  //   obj.timeOfClick = new Date()
  //   counterArray.push(obj)
  //   localStorage.setItem('counterArray', JSON.stringify(counterArray))
  // }