import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import SearchForm from './SearchForm';
import QuestionsAndAnswersList from './QuestionsAndAnswersList';
import { Box, Grid, Container, Input, TextField } from '@material-ui/core';

const QuestionsAndAnswers = (props) => {
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [productName, setProductName] = useState([]);
  const productId = 1;



  useEffect(() => {
    let array = []
    localStorage.setItem('counterArray', JSON.stringify(array))
  }, [])

  window.onclick = e => {
    let counterArray = JSON.parse(localStorage.getItem('counterArray'))
    console.log('this is counter array', counterArray)
    let obj = {}
    obj.widget = e.target.id
    console.log('e.target', e.target)
    let element = '<' + e.target + '>'
    obj.element = element
    obj.timeOfClick = new Date()
    console.log('obj', obj)
    counterArray.push(obj)
    console.log('new counter Array', counterArray)
    console.log(JSON.stringify(counterArray))
    localStorage.setItem('counterArray', JSON.stringify(counterArray))

    console.log('localstorage', localStorage)

    // obj.widget = e.target.id
    // // obj.element = e.target
    // let click = e.target
    // console.log('click', click.id)
    // console.log('type of click', typeof(click))
    // console.log('widget', click.id)
    // console.log('e.target', e.target);
    // console.log('e.target.value', e.target.value);
    // console.log('e.target.parentNode', e.target.parentNode)
    // console.log('e.target.parentElement', e.target.parentElement)
} 

  // const clicks = window.onclick = e => {
  //   let obj = {}
  //   obj.widget = e.target.id
  //   obj.element = e.target
  //   return obj
  // }

  

  useEffect(() => {
    axiosQuestionRequest(productId)
    axiosProductInfoRequest(productId)
  }, []);

  const axiosQuestionRequest = (prodId) => {
    Axios.get(`http://18.224.200.47/qa/${prodId}?count=100`)
    .then((res) => {setQuestions(res.data.results)
    console.log('these are the props', productId)})
    .catch((err) => console.log(err));
  }

  const axiosProductInfoRequest = (prodId) => {
      Axios.get(`http://18.224.200.47/products/${prodId}`)
      .then(res => setProductName(res.data.name))
      .catch(err => console.log(err))
  }

  return (
     <div id="QandA">
        <Box id="qasdf">
            <Container >
            <h3>QUESTIONS AND ANSWERS</h3>
            
            
            <SearchForm
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            />
        
            
            <QuestionsAndAnswersList 
            productName={productName} 
            productId={productId} 
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
