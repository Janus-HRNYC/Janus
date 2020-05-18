import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';


const SearchForm = ({ searchTerm, setSearchTerm }) => {

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault()}}>
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
