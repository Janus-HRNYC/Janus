import React from 'react';
import { Grid } from '@material-ui/core';
import OutfitCard from './Outfitcards'

const OutfitItems = ({ outfit, onDeleteOutfit, ratingsMeta }) => {
  console.log(outfit);
  const getOutfits = () => {
    // TODO: REFACTOR
    const len = outfit.length || 0;
    if (!len) {
      return (
        <p>NO ITEMS IN YOUR OUTFIT</p>
      );
    } else {
      return (
        <Grid
          container
          direction={'row'}
          justify='space-between'
        >
          {Object.values(outfit).map((item, i) => {
            return (
              <OutfitCard key={i} item={item} removeOutfit={onDeleteOutfit} />
            )
          })}
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