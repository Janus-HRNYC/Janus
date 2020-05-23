import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Outfitcards from './Outfitcards'
import AddOutFitCard from './AddOutFitCard';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
import DummyCard from './DummyCard';

const OutfitItems = ({ onDeleteOutfit, styles, onAddOutfit, id, info, outfit, onUpdateOutfit }) => {
  console.log(`|OUTFIT|`, outfit);
  const [limit, setLimit] = useState(0);
  // const [outfits, setOutfits] = useState([]);
  useEffect(() => {
  // getStoredOutfits();
  onUpdateOutfit()
  }, []);
  
  const useStyles = makeStyles(() => ({
    dummyCard: {
      visibility: 'hidden',   
    }
  }));
  const classes = useStyles();
  /* const getStoredOutfits = () => {
    let results = JSON.parse(window.localStorage.getItem('outfits'));
    if (results === null) {lassName={classes.cardHeader} 
    console.log('Length: ', results.length);
    }
  */

 // controls the upper limit for the carousel
  const increase = () => {
    if (limit > outfit.length - 1) {
      setLimit(outfit.length - 1);
    } else {
      setLimit(limit + 1);
    }
    console.log('|INCREASE LIMIT|', limit);
  }
  // controls the lower limit for the carousel
  const decrease = () => {
    if (limit < 0) {
      setLimit(0);
    } else {
      setLimit(limit - 1);
    }
    console.log('|DECREASE LIMIT|', limit);
  }

  // function that controls whether the left arrow button will render or be hidden 
  const decreaseButtonAction = () => {
    if (limit === 0) {
      return (
          <ArrowBackIosIcon visibility='hidden' />     
      )
    } else {
      return (
        <IconButton aria-label={`setting`} onClick={decrease} >
          <ArrowBackIosIcon />
        </IconButton>

      )
    }
  }
  // function that controls whether the right arrow button will render or be hidden 
  const increaseButtonAction = () => {
    console.log('increase', outfit)
    if (limit === outfit.length - 2) {
      console.log('if', outfit)
      return (
        <ArrowForwardIosIcon visibility='hidden' />
      )
    } else if (outfit.length <= 2) {
      console.log('else if ', outfit)
      return (
        <ArrowForwardIosIcon visibility='hidden' />
      )
    } else if (!outfit.length) {
      console.log('else if !outfit.length', outfit)
      return (
         <ArrowForwardIosIcon visibility='hidden' /> 
      )
    } else {
      console.log('else', outfit)
      return (
        <IconButton aria-label={`setting`} onClick={increase} >
          <ArrowForwardIosIcon />
        </IconButton>
      )
    }
  }

  const getOutfits = () => {
    if (outfit === null) {
      return (
        <Grid
             container
            direction={'row'}
            justify="space-between"
            alignItems='center'
            spacing={3}
            margin= '16px 0px 12px 0px'
        >
          <AddOutFitCard addOutfit={onAddOutfit} id={id} styles={styles} visibility='hidden'/>
          <DummyCard  className={classes.dummyCard}/>
          <DummyCard  className={classes.dummyCard}/>
        </Grid >
      );
    } else if (outfit.length === 1) {
      return (
        <Grid
        container
        direction={'row'}
        justify="space-between"
        alignItems='center'
        spacing={3}
        margin= '16px 0px 12px 0px'
        >
          {decreaseButtonAction()}
          <AddOutFitCard addOutfit={onAddOutfit} id={id} styles={styles} />
          {outfit.slice(limit, limit + 2).map((item, i) => {
            return (
              <Outfitcards key={Math.random()} item={item} removeOutfit={onDeleteOutfit} info={info} styles={styles} onUpdateOutfit={onUpdateOutfit} />
            )
          })}          
           <DummyCard className={classes.dummyCard}/> 
          {increaseButtonAction()}
        </Grid >
      )
    } else {
      return (
        <Grid
        container
        direction={'row'}
        justify="space-between"
        alignItems='center'
        spacing={3}
        margin= '16px 0px 12px 0px'
        >
          {decreaseButtonAction()}
          <AddOutFitCard addOutfit={onAddOutfit} id={id} styles={styles} />
          {outfit.slice(limit, limit + 2).map((item, i) => {
            return (
              <Outfitcards key={Math.random()} item={item} removeOutfit={onDeleteOutfit} info={info} styles={styles} />
            )
          })}
          {increaseButtonAction()}
        </Grid>
      )
    }
  }

  return (
    <div>
      {getOutfits()}
    </div>
  )
}

export default OutfitItems;
