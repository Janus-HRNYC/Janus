import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import SearchForm from './SearchForm';
import QuestionsAndAnswersList from './QuestionsAndAnswersList';
import { Box, Grid, Container, Input, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const QuestionsAndAnswers = ({ id }) => {
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [productName, setProductName] = useState([]);

  useEffect(() => {
    let array = []
    localStorage.setItem('counterArray', JSON.stringify(array))
  }, [])

  window.onclick = e => {
    let counterArray = JSON.parse(localStorage.getItem('counterArray'))
    let obj = {}
    obj.widget = e.target.title
    console.log('e.target', e)
    let element = e.target.tagName
    obj.element = element
    obj.timeOfClick = new Date()
    counterArray.push(obj)
    localStorage.setItem('counterArray', JSON.stringify(counterArray))
    console.log('localStorage', localStorage)
  }

  useEffect(() => {
    
    axiosQuestionRequest(id)
    axiosProductInfoRequest(id)
  }, []);

  const axiosQuestionRequest = (prodId) => {
    Axios.get(`http://18.224.200.47/qa/${prodId}?count=100`)
    .then((res) => {
      console.log('productId', id)
      setQuestions(res.data.results)})
    .catch((err) => console.log(err));
  }

  const axiosProductInfoRequest = (prodId) => {
      Axios.get(`http://18.224.200.47/products/${prodId}`)
      .then(res => setProductName(res.data.name))
      .catch(err => console.log(err))
  }

 
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: 'auto',
      maxWidth: '1100px'
    },
  }));

  const classes = useStyles();

  return (
     <div title="QandA">
        <Box title="QandA" className={classes.root} id='QAbottomMargin'>
            <Container >
            <h3 title="QandA">QUESTIONS AND ANSWERS</h3>
            
            <SearchForm
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            />
        
            <QuestionsAndAnswersList 
            productName={productName} 
            productId={id} 
            axiosQuestionRequest={axiosQuestionRequest} 
            searchTerm={searchTerm} 
            questions={questions}
            />
            
            </Container>
        </Box>
     </div> 
  );
};


export default QuestionsAndAnswers;
