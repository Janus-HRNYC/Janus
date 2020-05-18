import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, TextField } from '@material-ui/core';
import Axios from 'axios';

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 800,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AddQuestionModal = ({ productName, productId, axiosQuestionRequest }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [displayModal, setDisplayModal] = useState(false);
  const [questionAsked, setQuestionAsked] = useState('');
  const [userDisplayName, setUserDisplayName] = useState('');
  const [email, setEmail] = useState('')

  const postQuestion = () => {
    Axios.post(`http://18.224.200.47/qa/${productId}`, {
      body: questionAsked,
      name: userDisplayName,
      email: email
    })
    .then(res => axiosQuestionRequest(productId))
    .catch(err => console.log(err))
  }

  const handleClick = () => {
    setDisplayModal(!displayModal);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Ask Your Question</h2>
      <h3>About the {productName}</h3>
      <form>
        <TextField 
        id="outlined-basic"
        label="Your Question*"
        variant="outlined"
        value={questionAsked}
        onChange={(e) => setQuestionAsked(e.target.value)}
        />
        <TextField 
        label='What is your nickname*'
        variant="outlined"
        value={userDisplayName}
        placeholder="Example: jackson11!"
        onChange={(e) => setUserDisplayName(e.target.value)}
        />
        <p>For privacy reasons, do not use your full name or email address</p>
        <TextField 
        label="Your email*"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <p>For authentication reasons, you will not be emailed</p>
      <Button variant='contained' onClick={() => {handleClick(); postQuestion()}}>
        Submit
      </Button>
    </div>
  );

  return (
    <div>
      <Button variant='contained' onClick={handleClick}>
        ADD QUESTION +
      </Button>
      <Modal
        open={displayModal}
        onClose={handleClick}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
};

export default AddQuestionModal;
