import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import AnswerListView from './AnswerListView';
import AddAnswerModal from './AddAnswerModal';

const QuestionsAndAnswersListView = ({ question, productId, axiosQuestionRequest, productName }) => {
  const [answers, setAnswers] = useState([]);
  const [answerLimit, setAnswerLimit] = useState(2);
  const [seeMoreAnswersClicked, setSeeMoreAnswersClicked] = useState(false);
  const [numHelpfulClicks, setNumHelpfulClicks] = useState(0);
  
  useEffect(() => {
    getAnswers(question)
  }, [question]);
  
  const getAnswers = (question) => {
    Axios.get(`http://18.224.200.47/qa/${question.question_id}/answers?count=100`)
    .then(res => setAnswers(res.data.results))
    .catch(err => console.log(err));
  }

  const handleHelpfulQuestionClick = () => {
      if (numHelpfulClicks === 0) {
        Axios.put(`http://18.224.200.47/qa/question/${question.question_id}/helpful`)
        .then((res) => axiosQuestionRequest(productId))
        .catch((err) => console.log(err));
        setNumHelpfulClicks(numHelpfulClicks + 1)
        }
    };
  
  const handleSeeMoreAnswersClicked = () => {
    if (answerLimit === 2) setAnswerLimit(answers.length);
    else setAnswerLimit(2);
    setSeeMoreAnswersClicked(!seeMoreAnswersClicked);
  };

  const renderAnswers = (i, answer) => {
    if (i <= (answerLimit - 1)) {
      return <AnswerListView key={i} answer={answer} question={question} getAnswers={getAnswers} />
    }
  };

  const displayAnswersIfAny = () => {
      if (answers.length > 0) {
           return (answers.sort((a, b) => ((b.answerer_name === 'Seller') - (a.answerer_name === 'Seller') || (b.helpfulness - a.helpfulness)))
            .map((answer, i) => renderAnswers(i, answer)))
      }
  }

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
        <div>
        <p>
            Q:
            {question.question_body}
        </p>
        </div>
        <div>
            <p onClick={handleHelpfulQuestionClick} 
            style={{cursor: 'pointer'}}>
            Helpful? Yes({question.question_helpfulness})
            </p>
            <AddAnswerModal 
            getAnswers={getAnswers} 
            question={question} 
            productName={productName}/>
            {displayAnswersIfAny()}
            {seeMoreAnswersButton()}
        </div>
    </div>
  );
};

export default QuestionsAndAnswersListView;