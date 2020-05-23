import React from 'react';
import { TextField } from '@material-ui/core';
import REFERENCES from '../references.js';
import { validation } from './validation.js';

const TextFieldForm = ({
  type,
  value,
  setForm,
  error,
  form,
  setErrors,
  char,
}) => {
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
    if (error) {
      const listOfErrors = validation(form, char);
      setErrors(listOfErrors);
      setForm((oldState) => {
        return { ...oldState, [type]: e.target.value };
      });
    }

    setForm((oldState) => {
      return { ...oldState, [type]: e.target.value };
    });
  };

  return (
    <>
      <TextField
        id='text-field-review'
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
    </>
  );
};

export default TextFieldForm;
