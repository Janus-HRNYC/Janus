import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import SearchForm from './SearchForm';
import QuestionsAndAnswersList from './QuestionsAndAnswersList';
import { Box, Grid, Container, Input, TextField } from '@material-ui/core';

const QuestionsAndAnswers = ({ productId }) => {
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [productName, setProductName] = useState([]);
//   const productId = 1;


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
     <div >
        <Box >
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
