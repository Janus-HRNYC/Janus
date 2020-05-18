import React from 'react';
import { Grid } from '@material-ui/core';
import RelatedItemsCard from './RelatedItemsCard'
import ComparisonModal from './ComparisonModal';


const RelatedItems = ({ relatedProducts, onGetRelated, productId, onGetCurrent, compareProducts,  onAddOutfit}) => {
  console.log(productId);
  
  
  // let previousState;
  // console.log('previousState', previousState4);
  // const renderCurrentProduct = () => {
  //   if (previousState !== productId) {  
  //   console.log('should render');
  //   onGetRelated(productId);
  //   previousState = productId;
  //   }
  // }

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
              <RelatedItemsCard key={i} item={item} addOutfit={onAddOutfit} currentItem={compareProducts} compareItem={item} />
            )
          })}
        </Grid>
      )
    }
  }

  return (
    <div>

      {/* {renderCurrentProduct()} */}

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

