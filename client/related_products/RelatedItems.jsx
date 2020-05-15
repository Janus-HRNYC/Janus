import React from 'react';
import { Grid } from '@material-ui/core';
import RelatedItemsCard from './RelatedItemsCard'
import InformationModal from './informationModal';

const RelatedItems = ({ relatedProducts, onGetRelated }) => {
  console.log(relatedProducts.state);

  const getReleatedItems = () => {
    // TODO: REFACTOR
    if (!relatedProducts.state) {
      return null;
    } else {
      return (
        <Grid
          container
          direction={'row'}
          justify='space-between'
        >
          {relatedProducts.state.map((item, i) => {
            return (
              <RelatedItemsCard key={i} item={item} />
            )
          })}
        </Grid>
      )
    }
  }

  return (
    <div>
      <button onClick={onGetRelated}>TEST_Display_Related_Items_ID_2</button>
      <Grid
        container direction='row'
        justify='space-between'
      >
        {getReleatedItems()}   
      </Grid>
    </div>

  )
}
export default RelatedItems;