import React from 'react';
import { TextField } from '@material-ui/core';

const reference = {
  summary: {
    multiline: false,
    required: true,
    maxLength: 60,
    placeholder: `Example: Best purchase ever!`,
    helperText: ``,
  },
  body: {
    multiline: true,
    required: true,
    maxLength: 1000,
    placeholder: `Why did you like the product or not?`,
    helperText: ``,
  },
  name: {
    multiline: false,
    required: true,
    maxLength: 60,
    placeholder: `Example: jackson11!`,
    helperText: `For privacy reasons, do not use your full name or email address`,
  },
  email: {
    multiline: false,
    required: true,
    maxLength: 60,
    placeholder: `Example: jackson11@email.com`,
    helperText: `For authentication reasons, you will not be emailed`,
  },
};
const TextFieldForm = ({ type, value, setForm, error }) => {
  let attributes;
  if (type === 'summary') {
    attributes = reference.summary;
  } else if (type === 'body') {
    attributes = reference.body;
  } else if (type === 'name') {
    attributes = reference.name;
  } else {
    attributes = reference.email;
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
