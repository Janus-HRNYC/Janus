import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';


const SearchForm = ({ searchTerm, setSearchTerm }) => {

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div title="QandA">
      {/* <form  title="QandA" onSubmit={(e) => {e.preventDefault()}}>
        <TextField id="outlined-basic" 
        fullWidth
        title="QandA"
        variant="outlined" 
        value={searchTerm} 
        placeholder="Have a question? Search for answers..." 
       
        onChange={handleSearchChange}/>
        
        </form> */}
        <FormControl fullWidth  variant="outlined">
          
          <OutlinedInput
            id="outlined-adornment-amount"
            value={searchTerm}
            placeholder="Have a question? Search for answers..." 
            endAdornment={<SearchIcon position="end"></SearchIcon>}
            labelWidth={0}
            onChange={handleSearchChange}
          />
        </FormControl>
    </div>
  );
};

export default SearchForm;
