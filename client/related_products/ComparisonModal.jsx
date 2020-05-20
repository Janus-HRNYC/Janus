import React, { useState } from 'react';
import { 
  Modal, Button, TextField, Box, makeStyles, List, ListItem,
ListItemIcon,
ListItemSecondaryAction,
ListItemText,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
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
    width: 500,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'scroll'
  },
}));

const ComparisonModal = ({ currentItem }) => {
  console.log(currentItem);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [displayModal, setDisplayModal] = useState(false); 
   
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
    <List className={classes.paper}>
      <ListItem >
        <ListItemIcon>

        </ListItemIcon>
        <ListItemText primary={currentItem.name} />

      </ListItem>
    </List>
  );

  return (
    <div>
      <IconButton aria-label="settings" color="secondary" onClick={handleClick}>
        <StarBorderIcon />
      </IconButton>
      <Modal
        open={displayModal}
        onClose={handleOtherClick}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body()}
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
