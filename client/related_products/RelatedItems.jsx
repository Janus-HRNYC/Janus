import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import RelatedItemsCard from './RelatedItemsCard'

const RelatedItems = (props) => {
  const {
    relatedProducts,
    compareProducts,
    id,
    onGetRelated,  
    onGetCurrent,
    info
  } = props;
  
  console.log(info);
  useEffect(() => {
    onGetRelated(id); 
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
                <RelatedItemsCard key={Math.random()} item={item} id={id} onGetCurrent={onGetCurrent} info={info}/>
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

