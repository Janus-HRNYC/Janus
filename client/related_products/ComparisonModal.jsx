import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, TextField, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import CommentIcon from '@material-ui/icons/Comment';


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
    overflow: 'scroll'
  },
}));

const ComparisonModal = () => {
 

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [displayModal, setDisplayModal] = useState(false);  
  const [checked, setChecked] = React.useState([0]);

  const handleClick = () => {
    if (!displayModal) {
      setDisplayModal(true)
    } else {   
      setDisplayModal(!displayModal);
    }
  };

  const handleOtherClick = () => {
    setDisplayModal(!displayModal)
  }

  const body = () => (
    <div style={modalStyle} className={classes.paper}>       
      <Box component="div" display="block" >

        <List className={classes.root}>
              <ListItem >
                <ListItemIcon>
                  
                </ListItemIcon>
                <ListItemText  />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
           
        </List>   

      </Box>      

    </div>
  );

  return (
    <div>
      <IconButton aria-label="settings" color="primary" onClick={handleClick}>
        <StarBorderIcon />
      </IconButton>
     
      <Modal
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

export default ComparisonModal;

    
{/* <Box component="div" display="block" >

      
        {currentItem.features.map((feat) => {
          return ({feat})
        })}

      </Box>
      <Box component="div" display="inline">    
      

      </Box>       */}
