import React from 'react';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

const Recommend = ({ value, setForm }) => {
  const handleChange = (e) => {
    setForm((oldState) => {
      return { ...oldState, recommend: e.target.value };
    });
  };

  return (
    <>
      <FormControl component='fieldset'>
        <RadioGroup row name='position' value={value} onChange={handleChange}>
          <FormControlLabel
            value='1'
            control={<Radio color='primary' />}
            label='Yes'
            labelPlacement='bottom'
          />
          <FormControlLabel
            value='0'
            control={<Radio color='primary' />}
            label='No'
            labelPlacement='bottom'
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};
export default Recommend;
