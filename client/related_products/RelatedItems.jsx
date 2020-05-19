import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import RelatedItemsCard from './RelatedItemsCard'
import ComparisonModal from './ComparisonModal';


const RelatedItems = (props) => {
  const {
    productId,
    relatedProducts,
    onGetRelated,
    onGetRelatedStyle,
    onGetCurrent,
    relatedStyles,
  } = props;
  
  console.log(productId);
  useEffect(() => {
    onGetRelated(productId);    
  }, []);


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
                <RelatedItemsCard key={i} item={item} getRelatedStyles={onGetRelatedStyle} productId={productId} styles={relatedStyles}/>
              )
          })}
        </Grid>
      )
    }
  }

  return (
    <div>
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

