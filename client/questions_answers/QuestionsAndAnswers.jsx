import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import SearchForm from './SearchForm';
import QuestionsAndAnswersList from './QuestionsAndAnswersList';

// import janus from '../lib/axiosRequests';

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [tempQuestions, setTempQuestions] = useState([]);
  const productId = 1;


  useEffect(() => {
    Axios.get(`http://18.224.200.47/qa/${productId}?count=100`)
      .then((res) => setQuestions(res.data.results))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <h3>QUESTIONS AND ANSWERS</h3>
      <div>
        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} questions={questions} setQuestions={setQuestions} productId={productId} setTempQuestions={setTempQuestions} tempQuestions={tempQuestions}/>
        <QuestionsAndAnswersList questions={searchTerm.length > 2 ? tempQuestions : questions} />
      </div>
    </div>
  );
};


export default QuestionsAndAnswers;
