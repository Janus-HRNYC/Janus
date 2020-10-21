import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';


const SearchForm = ({ searchTerm, setSearchTerm }) => {

  return (
    <div title="QandA">
        <FormControl fullWidth  variant="outlined">  
          <OutlinedInput
            id="outlined-adornment-amount"
            value={searchTerm}
            placeholder="Have a question? Search for answers..." 
            endAdornment={<SearchIcon position="end"></SearchIcon>}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </FormControl>
    </div>
  );
};

export default SearchForm;
