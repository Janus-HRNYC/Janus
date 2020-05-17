import React from 'react';
import { TextField } from '@material-ui/core';
import REFERENCES from '../references.js';

const TextFieldForm = ({ type, value, setForm, error }) => {
  let attributes;
  if (type === 'summary') {
    attributes = REFERENCES.TEXTFIELDFORM.summary;
  } else if (type === 'body') {
    attributes = REFERENCES.TEXTFIELDFORM.body;
  } else if (type === 'name') {
    attributes = REFERENCES.TEXTFIELDFORM.name;
  } else {
    attributes = REFERENCES.TEXTFIELDFORM.email;
  }

  const handleChange = (e) => {
    e.persist();
    setForm((oldState) => {
      return { ...oldState, [type]: e.target.value };
    });
  };

  return (
    <>
      <TextField
        margin='dense'
        name={type}
        required={attributes.required}
        inputProps={{ maxLength: attributes.maxLength }}
        placeholder={attributes.placeholder}
        multiline={attributes.multiline}
        onChange={handleChange}
        value={value}
        helperText={attributes.helperText}
        error={error}
        fullWidth
      />
      <br />
      <br />
    </>
  );
};

export default TextFieldForm;
