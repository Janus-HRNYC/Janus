import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, TextField, Box, Grid } from '@material-ui/core';

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
      width: 600,
      height: 600,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      overflow:'scroll'
    },
    picSize: {
    objectFit: "cover",
    width: "500px",
    height: "500px"
    },
    smallFont: {
        fontSize: '12px'
    }

}));

const PictureModal = ( { photoURL, setDisplayPictureModal, displayPictureModal } ) => {
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();
    const body = (
        <div title="QandA" style={modalStyle} className={classes.paper}>
          <img className={classes.picSize} src={photoURL}/>
          <Button title="QandA" variant='contained' onClick={() => setDisplayPictureModal(!displayPictureModal)}>
            X
          </Button>
        </div>
      );

      return (
        <div title="QandA">
          <Modal
            title="QandA"
            open={displayPictureModal}
            onClose={() => setDisplayPictureModal(!displayPictureModal)}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'
          >
            {body}
          </Modal>
        </div>
      );
}

export default PictureModal;