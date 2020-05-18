import React, { useState, useEffect } from 'react';
import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  InputLabel,
} from '@material-ui/core';
import StarRating from './StarRating.jsx';
import Recommend from './form_components/Recommend.jsx';
import TextFieldForm from './form_components/TextFieldForm.jsx';
import Characteristics from './form_components/Characteristics.jsx';
import validation from './form_components/validation.js';
import REFERENCES from './references.js';

const formDefault = REFERENCES.ADDREVIEW.formDefault;

const AddReview = ({ ratingsMeta }) => {
  const [char, setChar] = useState({});
  const [form, setForm] = useState(formDefault);
  const [errors, setErrors] = useState(false);
  const [displayDialog, setDisplayDialog] = useState(false);

  useEffect(() => {
    if (ratingsMeta.characteristics) {
      setChar(ratingsMeta.characteristics);
    }
  });

  const handleClick = () => {
    setDisplayDialog(!displayDialog);
    setForm(formDefault);
    setErrors(false);
  };

  const handleSubmit = () => {
    const listOfErrors = validation(form, char);
    setErrors(listOfErrors);

    if (!errors) {
      console.log('Form Submitted: ', form);
    }
  };
  return (
    <>
      <Button variant='contained' onClick={handleClick}>
        ADD REVIEW +
      </Button>
      <Dialog
        open={displayDialog}
        onClose={handleClick}
        aria-labelledby='form-dialog-title'
        fullWidth
      >
        <DialogTitle id='form-dialog-title'>Write Your Review</DialogTitle>
        <DialogContent>
          <DialogContentText>About the Product Name</DialogContentText>
          <Grid>
            <InputLabel required={true} error={errors.hasOwnProperty('rating')}>
              Overall Rating
            </InputLabel>
            <StarRating
              star={form.rating}
              size={'large'}
              update={true}
              setForm={setForm}
            />
          </Grid>
          <Grid>
            <InputLabel
              required={true}
              error={errors.hasOwnProperty('recommend')}
            >
              Do you recommend this product?
            </InputLabel>
            <Recommend value={form.recommend} setForm={setForm} />
          </Grid>
          <Grid>
            <InputLabel
              required={true}
              error={errors.hasOwnProperty('characteristics')}
            >
              Characteristics
            </InputLabel>
            <Characteristics
              value={form.characteristics}
              setForm={setForm}
              char={char}
            />
          </Grid>
          <Grid>
            <InputLabel
              required={true}
              error={errors.hasOwnProperty('summary')}
            >
              Review Summary
            </InputLabel>
            <TextFieldForm
              type={'summary'}
              value={form.summary}
              setForm={setForm}
              error={errors.hasOwnProperty('summary')}
            />
          </Grid>
          <Grid>
            <InputLabel required={true} error={errors.hasOwnProperty('body')}>
              Review Body
            </InputLabel>
            <TextFieldForm
              type={'body'}
              value={form.body}
              setForm={setForm}
              error={errors.hasOwnProperty('body')}
            />
          </Grid>
          <Grid>
            <InputLabel>Upload Your Photos</InputLabel>
          </Grid>
          <Grid>
            <InputLabel required={true} error={errors.hasOwnProperty('name')}>
              What is your nickname
            </InputLabel>
            <TextFieldForm
              type={'name'}
              value={form.name}
              setForm={setForm}
              error={errors.hasOwnProperty('name')}
            />
          </Grid>
          <Grid>
            <InputLabel required={true} error={errors.hasOwnProperty('email')}>
              Your email
            </InputLabel>
            <TextFieldForm
              type={'email'}
              value={form.email}
              setForm={setForm}
              error={errors.hasOwnProperty('email')}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} color='secondary'>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddReview;
