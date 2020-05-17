import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import AnswerListView from './AnswerListView';
import AddAnswerModal from './AddAnswerModal';

const QuestionsAndAnswersListView = ({ question, productId, axiosQuestionRequest, productName }) => {
  const [answers, setAnswers] = useState([]);
  const [answerLimit, setAnswerLimit] = useState(2);
  const [seeMoreAnswersClicked, setSeeMoreAnswersClicked] = useState(false);
  const [numHelpfulClicks, setNumHelpfulClicks] = useState(0);
  
  const getAnswers = (question) => {
    Axios.get(`http://18.224.200.47/qa/${question.question_id}/answers`)
    .then((res) => setAnswers(res.data.results))
    .catch((err) => console.log(err));
  }

  const handleHelpfulQuestionClick = () => {
      if (numHelpfulClicks === 0) {
        Axios.put(`http://18.224.200.47/qa/question/${question.question_id}/helpful`)
        .then((res) => axiosQuestionRequest(productId))
        .catch((err) => console.log(err));
        setNumHelpfulClicks(numHelpfulClicks + 1)
        }
    }

  useEffect(() => {
    getAnswers(question)
  }, [question]);

  useEffect(() => {
      if (seeMoreAnswersClicked) {
        setAnswerLimit(answers.length)
      }
  }, [answers])
  
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
           return (answers.sort((a, b) => ((b.answerer_name === 'Seller') - (a.answerer_name === 'Seller') || (b.helpfulness - a.helpfulness))
      ).map((answer, i) => renderAnswers(i, answer)))
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
            <p onClick={handleHelpfulQuestionClick} style={{cursor: 'pointer'}}>Helpful? Yes({question.question_helpfulness})</p>
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


//   const [seller, setSeller] = useState('');
//   const [answersWithSellers, setAnswersWithSellers] = useState([]);

//   const displayAnswersIfAny = () => {
//     let finalAnswers;
//     answersWithSellers.length > 0 ? finalAnswers = answersWithSellers.slice()
//     : finalAnswers = answers.slice();
  
//     if (finalAnswers.length > 0) {
//       let sortedAnswers = finalAnswers.sort((a, b) => b.helpfulness - a.helpfulness);
//       if (seller !== '') sortedAnswers.unshift(seller);
      
//       return sortedAnswers.map((answer, i) => renderAnswers(i, answer));
//     }
//   };

//   const checkForSeller = (answer) => {
//     const removedSellerArray = [];
//     let foundSeller = false;
//     let ele;
//     for (ele of answer) {
//       if (ele.answerer_name !== 'Seller') {
//         removedSellerArray.push(ele);
//       }
//       if (ele.answerer_name === 'Seller') {
//         setSeller(ele);
//         foundSeller = true;
//       }
//     }
//     if (foundSeller) {
//       setAnswersWithSellers(removedSellerArray);
//     }
//   };

//   useEffect(() => {
//     if (answers.length > 0) {
//       checkForSeller(answers);
//     }
//   }, [answers]);
//   useEffect(()=> {
//       if (searchTerm.length === 2) {
//         axiosQuestionRequest(productId)
//       }
//   }, [searchTerm])