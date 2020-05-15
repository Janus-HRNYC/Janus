import React from 'react';

const AnswerListView = ({ answer }) => (
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
    <p>
      Helpful:
      {answer.helpfulness}
    </p>

  </div>
);

export default AnswerListView;
