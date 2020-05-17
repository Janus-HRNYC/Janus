import React from 'react';
import Axios from 'axios';

const AnswerListView = ({ answer, question, getAnswers }) => {
  
    const handleHelpFullAnswerClick = () => {
        Axios.put(`http://18.224.200.47/qa/answer/${answer.answer_id}/helpful`)
        .then(res => getAnswers(question))
        .catch(err => console.log(err))
    }

    const handleReportAnswerClick = () => {
        Axios.put(`http://18.224.200.47/qa/answer/${answer.answer_id}/report`)
        .then(res => getAnswers(question))
        .catch(err => console.log(err))
    }
  
    return (

  <div>
    <p>
      A:
      {answer.body}
    </p>
    <p>
      by
      {answer.answerer_name}
      ,
      {answer.date}
    </p>
    <p onClick={handleHelpFullAnswerClick} style={{cursor:'pointer'}}>
      Helpful? Yes({answer.helpfulness}) |
    </p>
    <p onClick={handleReportAnswerClick} style={{cursor:'pointer'}}>Report</p>

  </div>
  )

};

export default AnswerListView;
