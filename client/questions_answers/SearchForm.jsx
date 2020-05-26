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
        <FormControl fullWidth  variant="outlined">  
          <OutlinedInput
            id="outlined-adornment-amount"
            value={searchTerm}
            placeholder="Have a question? Search for answers..." 
            endAdornment={<SearchIcon position="end"></SearchIcon>}
            onChange={handleSearchChange}
          />
        </FormControl>
    </div>
  );
};

export default SearchForm;
