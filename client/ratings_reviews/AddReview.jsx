import React, { useState } from 'react';
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

const formDefault = {
  rating: 0,
  recommend: '',
  characteristics: {},
  summary: '',
  body: '',
  email: '',
  name: '',
  phots: [],
};

const ReviewForm = () => {
  const [form, setForm] = useState(formDefault);
  const [displayDialog, setDisplayDialog] = useState(false);

  const handleClick = () => {
    setDisplayDialog(!displayDialog);
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
            <InputLabel required={true}>Overall Rating</InputLabel>
            <StarRating
              star={form.rating}
              size={'large'}
              update={true}
              setForm={setForm}
            />
          </Grid>
          <Grid>
            <InputLabel required={true}>
              Do you recommend this product?
            </InputLabel>
            <Recommend value={form.recommend} setForm={setForm} />
          </Grid>
          <Grid>
            <InputLabel required={true}>Characteristics</InputLabel>
          </Grid>
          <Grid>
            <InputLabel required={true}>Review Summary</InputLabel>
            <TextFieldForm
              type={'summary'}
              value={form.summary}
              setForm={setForm}
            />
          </Grid>
          <Grid>
            <InputLabel required={true}>Review Body</InputLabel>
            <TextFieldForm type={'body'} value={form.body} setForm={setForm} />
          </Grid>
          <Grid>
            <InputLabel>Upload Your Photos</InputLabel>
          </Grid>
          <Grid>
            <InputLabel required={true}>What is your nickname</InputLabel>
            <TextFieldForm type={'name'} value={form.name} setForm={setForm} />
          </Grid>
          <Grid>
            <InputLabel required={true}>Your email</InputLabel>
            <TextFieldForm
              type={'email'}
              value={form.email}
              setForm={setForm}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} color='secondary'>
            Cancel
          </Button>
          <Button onClick={handleClick} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ReviewForm;
