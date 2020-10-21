import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, TextField, Box, Grid } from '@material-ui/core';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { axiosQuestionRequest } from '../redux/actions/Q&AActions/questionsAction'


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
    height: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow:'scroll'
  },
  inputMargin: {
    marginTop: theme.spacing(2)
  },
  warnings: {
    marginLeft: theme.spacing(3),
  }
}));

const AddQuestionModal = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [displayModal, setDisplayModal] = useState(false);
  const [questionAsked, setQuestionAsked] = useState('');
  const [userDisplayName, setUserDisplayName] = useState('');
  const [email, setEmail] = useState('')
  const [improperSubmission, setImproperSubmission] = useState(false);

  const dispatch = useDispatch()
  const productName = useSelector(state => state.productName)
  const productId = useSelector(state => state.id)

  const postQuestion = () => {
    Axios.post(`http://18.224.200.47/qa/${productId}`, {
      body: questionAsked,
      name: userDisplayName,
      email: email
    })
    .then(() => dispatch(axiosQuestionRequest(productId)))
    .catch(err => console.log(err))
  }

  const handleClick = () => {
    if (!displayModal) {
        setDisplayModal(true)
    } else if (questionAsked.length < 1 
        || userDisplayName.length < 1 
        || email.length < 1
        || !email.includes('@' || '.')) {
        setImproperSubmission(true)
    } else {
        postQuestion();
        setImproperSubmission(false)
        setDisplayModal(!displayModal);
        setUserDisplayName('')
        setEmail('')
        setQuestionAsked('')
    }
  };

  const handleOutsideModalClick = () => {
    setDisplayModal(!displayModal)
    setImproperSubmission(false)
    setUserDisplayName('')
    setEmail('')
    setQuestionAsked('')
}

  const body = (
    <div title="QandA" style={modalStyle} className={classes.paper}>
      <h2 title="QandA" id='simple-modal-title'>Ask Your Question</h2>
      <h3 title="QandA">About the {productName}</h3>
        <Grid container>
          <Grid item>
            <Box title="QandA" component="div" display="block">
            <TextField
            title="QandA" 
            id="outlined-basic"
            fullWidth
            id="outlined-basic"
            multiline={true}
            rows={6}
            id="standard-required"
            required
            inputProps={{
                maxLength: 1000,
                minLength: 1,
                classes: {
                    height: 300
              }}}
            label="Your Question"
            variant="outlined"
            value={questionAsked}
            onChange={(e) => setQuestionAsked(e.target.value)}
            />
            </Box>
            <Box className={classes.inputMargin} title="QandA" >
              <TextField
                  title="QandA"
                  required
                  label='What is your nickname'
                  variant="outlined"
                  inputProps={{
                      maxLength: 60
                  }}
                  value={userDisplayName}
                  placeholder="Example: jackson11!"
                  onChange={(e) => setUserDisplayName(e.target.value)}
                  />
                  <p>For privacy reasons, do not use your full name or email address</p>
            </Box>
            <Box>
              <TextField
              title="QandA"
              display="block"
              required
              label="Your email"
              variant="outlined"
              placeholder="Example: jack@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <p>For authentication reasons, you will not be emailed</p>
            </Box>
            </Grid>
            
            <Grid item title="QandA" className={classes.warnings} id="warningText">
            {
              improperSubmission ?
              <div title="QandA">
                <p title="QandA" id="warningTextBold">You must enter the following:</p>
                <p title="QandA">Your Question</p>
                <p title="QandA">Your Nickname</p>
                <p title="QandA">Your Email in the proper format</p>
              </div>
          :
          null
          }
          </Grid>
        </Grid>
     
      <Button title="QandA" variant='contained' onClick={handleClick}>
        Submit
      </Button>
    </div>
  );

  return (
    <div title="QandA">
      <Button title="QandA" variant='contained' onClick={handleClick}>
        ADD QUESTION +
      </Button>
      <Modal
        title="QandA"
        open={displayModal}
        onClose={handleOutsideModalClick}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
};

export default AddQuestionModal;
