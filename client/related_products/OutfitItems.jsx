import React from 'react';
import { Grid } from '@material-ui/core';
import OutfitCard from './Outfitcards'
import AddOutFitCard from './AddOutFitCard';


const OutfitItems = ({ outfit, onDeleteOutfit, ratingsMeta }) => {
  console.log(outfit);
  const getOutfits = () => {
    // TODO: REFACTOR
    const len = Object.values(outfit).length;
    if (!len) {
      return (
        null
      );
    } else {
        <Grid
          container
          direction={'row'}
          justify='space-between'
        >
          <AddOutFitCard />
          {Object.values(outfit).map((item, i) => {
            return (
              <OutfitCard key={i} item={item} removeOutfit={onDeleteOutfit} />
            )
          })}
        </Grid>
    }
  }
  return (
    <div>
      <Grid
        container
        direction={'row'}
        justify='space-between'
      >
      <AddOutFitCard />
      {getOutfits()}        
      </Grid>
    </div>
  )
}

export default OutfitItems;