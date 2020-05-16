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
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarRating from './StarRating.jsx';

const formDefault = {
  rating: 0,
  recommend: false,
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
            <InputLabel required='true'>Overall Rating</InputLabel>
            <StarRating
              star={form.rating}
              size={'large'}
              update={true}
              setForm={setForm}
            />
          </Grid>
          <Grid>
            <InputLabel required='true'>
              Do you recommend this product?
            </InputLabel>
          </Grid>
          <Grid>
            <InputLabel required='true'>Characteristics</InputLabel>
          </Grid>
          <Grid>
            <InputLabel required='true'>Review Summary</InputLabel>
          </Grid>
          <Grid>
            <InputLabel required='true'>Review Body</InputLabel>
          </Grid>
          <Grid>
            <InputLabel>Upload Your Photos</InputLabel>
          </Grid>
          <Grid>
            <InputLabel required='true'>What is your nickname</InputLabel>
          </Grid>
          <Grid>
            <InputLabel required='true'>Your email</InputLabel>
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
