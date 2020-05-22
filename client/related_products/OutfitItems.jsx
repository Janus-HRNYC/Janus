import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';
import Outfitcards from './Outfitcards'
import AddOutFitCard from './AddOutFitCard';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const OutfitItems = ({ onDeleteOutfit, ratingsMeta, onAddOutfit, id, info }) => {

  const [limit, setLimit] = useState(0);
  const [outfits, setOutfits] = useState([]);

  useEffect(() => {
    getStoredOutfits();
  }, []);

  const getStoredOutfits = () => {
    let results = JSON.parse(window.localStorage.getItem('outfits'));
    if (results === null) {
      console.log('|LOCAL STORAGE| |IF| ', results)
      results = [];
    }
    setOutfits(results);
  }

  const increase = () => {
    if (limit >= outfits.length - 1) {
      setLimit(outfits.length - 1);
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
    if (limit === outfits.length - 3) {
      return (
        <ArrowForwardIosIcon visibility='hidden' />
      )
    } else {
      return (
        <IconButton aria-label={`setting`} onClick={increase} visibility='hidden' >
          <ArrowForwardIosIcon />
        </IconButton>
      )
    }
  }

  const getOutfits = () => {
    // TODO: REFACTOR
    if (outfits === null) {
      return (
        <Grid
          container
          direction={'row'}
          justify='space-between'
          >
          <AddOutFitCard addOutfit={onAddOutfit} id={id} />
          <AddOutFitCard addOutfit={onAddOutfit} id={id} visibility='hidden'/>
          <AddOutFitCard addOutfit={onAddOutfit} id={id} visibility='hidden'/>
        </Grid >
      );
    } else {
      console.log(outfits)
      return (
        <Grid
          container
          direction={'row'}
          justify='space-between'
        >
          {decreaseButtonAction()}
          <AddOutFitCard addOutfit={onAddOutfit} id={id} />
          {outfits.slice(limit, limit + 2).map((item, i) => {
            return (
              <Outfitcards key={Math.random()} item={item} removeOutfit={onDeleteOutfit} info={info} />
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