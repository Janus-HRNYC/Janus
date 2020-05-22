import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Outfitcards from './Outfitcards'
import AddOutFitCard from './AddOutFitCard';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';

const OutfitItems = ({ onDeleteOutfit, styles, onAddOutfit, id, info, outfit, onUpdateOutfit }) => {
  console.log(`|OUTFIT|`, outfit);
  const [limit, setLimit] = useState(0);
  const [outfits, setOutfits] = useState([]);
  useEffect(() => {
    getStoredOutfits();
    onUpdateOutfit()
  }, []);

  const getStoredOutfits = () => {
    let results = JSON.parse(window.localStorage.getItem('outfits'));
    if (results === null) {
      results = [];
    }
    setOutfits(results);
    console.log('Length: ', results.length);
  }

  const increase = () => {
    if (limit >= outfit.length - 1) {
      setLimit(outfit.length - 1);
    } else {
      setLimit(limit + 1);
    }
    console.log('|INCREASE LIMIT|', limit);
  }

  const decrease = () => {
    if (limit === 0) {
      setLimit(0);
    } else {
      setLimit(limit - 1);
    }
    console.log('|DECREASE LIMIT|', limit);
  }
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
  const increaseButtonAction = () => {
    if (limit === outfit.length - 1 ) {
      return (
        <IconButton aria-label={`setting`} onClick={increase} visibility='hidden' >
          <ArrowForwardIosIcon />
        </IconButton>
      )
    } else {
      return (
        <IconButton aria-label={`setting`} onClick={increase} >
          <ArrowForwardIosIcon />
        </IconButton>
      )
    }
  }

  const getOutfits = () => {
    // TODO: REFACTOR
    if (outfit === null) {
      return (
        <Grid
          container
          direction={'row'}
          justify='space-between'
        >
          <AddOutFitCard addOutfit={onAddOutfit} id={id} styles={styles} />
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
          margin='16px 0px 12px 0px'
        >
          {decreaseButtonAction()}
          <AddOutFitCard addOutfit={onAddOutfit} id={id} styles={styles} />
          {outfit.slice(limit, limit + 2).map((item, i) => {
            return (
              <Outfitcards key={Math.random()} item={item} removeOutfit={onDeleteOutfit} info={info} styles={styles} onUpdateOutfit={onUpdateOutfit} />
            )
          })}
          {increaseButtonAction()}
        </Grid >
      )
    } else {
      return (
        <Grid
          container
          direction={'row'}
          justify='space-between'
        >
          {decreaseButtonAction()}
          <AddOutFitCard addOutfit={onAddOutfit} id={id} styles={styles} />
          {outfit.slice(limit, limit + 1).map((item, i) => {
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