import React from 'react';
import { Grid } from '@material-ui/core';
import Outfitcards from './Outfitcards'
import AddOutFitCard from './AddOutFitCard';


const OutfitItems = ({ outfit, onDeleteOutfit, ratingsMeta, onAddOutfit, productId }) => {
  console.log(outfit);
  const getOutfits = () => {
    // TODO: REFACTOR
    if (!outfit.length) {
      return (
        <AddOutFitCard addOutfit={onAddOutfit} productId={productId} />
      );
    } else {
      return (
      <Grid
        container
        direction={'row'}
        justify='space-between'
      >
        <AddOutFitCard addOutfit={onAddOutfit} productId={productId} />
        {outfit.map((item, i) => {
          return (            
            <Outfitcards key={i} item={item} removeOutfit={onDeleteOutfit} />
          )
        })}
      </Grid>
      )
    }
  }
  return (
    <div>
      <Grid
        container
        direction={'row'}
        justify='space-between'
      >
        {getOutfits()}
        

      </Grid>
    </div>
  )
}

export default OutfitItems;