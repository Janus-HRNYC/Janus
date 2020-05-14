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
    for (let i = 0; i < answer.length; i++) {
      if (answer[i].answerer_name !== 'Seller') {
        removedSellerArray.push(answer[i]);
      }
      if (answer[i].answerer_name === 'Seller') {
        console.log('found seller with seller name', answer[i])
        setSeller([answer[i]]);
        foundSeller = true;
      }
    }
    if (foundSeller) {
      setAnswersWithSellers(removedSellerArray);
    }
  };


  const displayAnswersIfAny = () => {
    let finalAnswers;
    if (answersWithSellers.length > 0) {
      finalAnswers = answersWithSellers.slice();
    } else {
      finalAnswers = answers;
    }

    if (finalAnswers.length > 0) {
      let sortedAnswers = finalAnswers.sort((a, b) => b.helpfulness - a.helpfulness);
      if (seller !== '') {
        sortedAnswers.unshift(seller[0]);
      }
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

  return (
    <div>

      <p>
        Q:
        {question.question_body}
        , Helpful:
        {question.question_helpfulness}
      </p>
      {displayAnswersIfAny()}
      {seeMoreAnswersButton()}
    </div>
  );
};

export default QuestionsAndAnswersListView;
