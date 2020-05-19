import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, TextField, Box } from '@material-ui/core';
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
    height: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow:'scroll'
  },
}));

const AddAnswerModal = ({ productName, question, getAnswers }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [displayModal, setDisplayModal] = useState(false);
  const [answerAsked, setAnswerAsked] = useState('');
  const [userDisplayName, setUserDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([])
  const [improperSubmission, setImproperSubmission] = useState(false);

  const postAnswer = () => {
    Axios.post(`http://18.224.200.47/qa/${question.question_id}/answers`, {
        body: answerAsked,
        name: userDisplayName,
        email: email,
        photos: photos
    })
    .then(res => getAnswers(question))
    .catch(err => console.log(err))
}

  const handleClick = () => {
    if (!displayModal) {
        setDisplayModal(true)
    } else if (answerAsked.length < 1 
        || userDisplayName.length < 1 
        || email.length < 1
        || !email.includes('@') 
        || !email.includes('.')) {
        setImproperSubmission(true)
    } else {
        postAnswer();
        setImproperSubmission(false)
        setDisplayModal(!displayModal);
    }
  };

  const handleOtherClick = () => {
      setDisplayModal(!displayModal)
  }

  const body = (
    <div title="QandA" style={modalStyle} className={classes.paper}>
      <h2 title="QandA" id='simple-modal-title'>Submit your Answer</h2>
      <h3 title="QandA">{productName}: {question.question_body}</h3>
      <Box title="QandA" component="div" display="block" >
        <TextField
        title="QandA"
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
        label="Your Answer"
        variant="outlined"
        value={answerAsked}
        onChange={(e) => setAnswerAsked(e.target.value)}
        />
        </Box>
        
        <Box title="QandA" component="div" display="inline">
            <TextField
            title="QandA" 
            mt={2}
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
        <Box title="QandA" display="inline">
        {
          improperSubmission ?
          <div title="QandA">
            <p title="QandA">You must enter the following:</p>
            <p title="QandA">Your Answer</p>
            <p title="QandA">Your Nickname</p>
            <p title="QandA">Your Email in the proper format</p>
            <p title="QandA">Images must be valid and able to be uploaded</p>
          </div>
      :
      null
      }

        </Box>
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
        <p title="QandA">For authentication reasons, you will not be emailed</p>
      <Button title="QandA" variant='contained' onClick={() => {handleClick()}}>
        Submit
      </Button>
      
    </div>
  );

  return (
    <div title="QandA">
      <p title="QandA" onClick={handleClick} style={{cursor: 'pointer'}}>Add Answer</p>
      <Modal
        title="QandA"
        open={displayModal}
        onClose={handleOtherClick}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
    
  );
};

export default AddAnswerModal;
