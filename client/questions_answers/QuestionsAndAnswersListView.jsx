import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import AnswerListView from './AnswerListView';

const QuestionsAndAnswersListView = ({ question }) => {
  const [answers, setAnswers] = useState([]);
  const [answerLimit, setAnswerLimit] = useState(2);
  const [seeMoreAnswersClicked, setSeeMoreAnswersClicked] = useState(false);
  const [seller, setSeller] = useState('');
  const [answersWithSellers, setAnswersWithSellers] = useState([]);

  useEffect(() => {
    Axios.get(`http://18.224.200.47/qa/${question.question_id}/answers`)
      .then((res) => setAnswers(res.data.results))
      .catch((err) => console.log(err));
  }, [question]);

  useEffect(() => {
    if (answers.length > 0) {
      checkForSeller(answers);
    }
  }, [answers]);


  const handleSeeMoreAnswersClicked = () => {
    if (answerLimit === 2) setAnswerLimit(answers.length);
    else setAnswerLimit(2);
    setSeeMoreAnswersClicked(!seeMoreAnswersClicked);
  };

  const renderAnswers = (i, answer) => {
    if (i <= (answerLimit - 1)) {
      return <AnswerListView key={i} answer={answer} />;
    }
  };

  const checkForSeller = (answer) => {
    const removedSellerArray = [];
    let foundSeller = false;
    let ele;
    for (ele of answer) {
      if (ele.answerer_name !== 'Seller') {
        removedSellerArray.push(ele);
      }
      if (ele.answerer_name === 'Seller') {
        setSeller(ele);
        foundSeller = true;
      }
    }
    if (foundSeller) {
      setAnswersWithSellers(removedSellerArray);
    }
  };


  const displayAnswersIfAny = () => {
    let finalAnswers;
    answersWithSellers.length > 0 ? finalAnswers = answersWithSellers.slice()
    : finalAnswers = answers.slice();
  
    if (finalAnswers.length > 0) {
      let sortedAnswers = finalAnswers.sort((a, b) => b.helpfulness - a.helpfulness);
      if (seller !== '') sortedAnswers.unshift(seller);
      
      return sortedAnswers.map((answer, i) => renderAnswers(i, answer));
    }
  };

  const seeMoreAnswersButton = () => {
    if (answers.length > 2) {
      return <button onClick={handleSeeMoreAnswersClicked}>{answerButtonTextChange()}</button>;
    }
  };

  const answerButtonTextChange = () => {
    if (!seeMoreAnswersClicked) return 'See More Answers';
    return 'Collapse Answers';
  };

//   const handleHelpfulQuestionClick = () => {
//     Axios.put(`http://18.224.200.47/qa/question/${question_id}/helpful`)
//     .then(() => {
        
//     })
//   }

  return (
    <div>

      <p>
        Q:
        {question.question_body}
      </p>
      <p>Helpful? </p>
      <p> ({question.question_helpfulness})</p>
      {displayAnswersIfAny()}
      {seeMoreAnswersButton()}
    </div>
  );
};

export default QuestionsAndAnswersListView;
