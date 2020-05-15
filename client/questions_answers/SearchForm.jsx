import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';


const SearchForm = ({ searchTerm, setSearchTerm, questions, setTempQuestions }) => {
  

  const searchThroughQuestions = () => {
    let newSearchedQuestions = [];
    if (searchTerm.length > 2) {
      questions.map((question) => {
        let obj = { ...question };
        let lowerCaseQuestion = question.question_body.toLowerCase();
        let lowerCaseSearchTerm = searchTerm.toLowerCase();
        if (lowerCaseQuestion.includes(lowerCaseSearchTerm)) {
          newSearchedQuestions.push(obj);
        }
      });
      setTempQuestions(newSearchedQuestions);
    }
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    searchThroughQuestions();
  }, [searchTerm]);

  return (
    <div>
      <form>
        <TextField id="outlined-basic" 
        fullWidth
        variant="outlined" 
        value={searchTerm} 
        placeholder="Have a question? Search for answers..." 
        onChange={handleSearchChange}/>
        </form>
    </div>
  );
};

export default SearchForm;
