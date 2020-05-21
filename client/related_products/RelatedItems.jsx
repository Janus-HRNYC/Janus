import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import RelatedItemsCard from './RelatedItemsCard'
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const RelatedItems = (props) => {
  const {
    relatedProducts,
    id,
    onGetRelated,
    info
  } = props;

  const [inital, setInital] = useState(0);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    onGetRelated(id);
  }, []);

  const cardsToDisplay = () => {
    let results = [...relatedProducts.state];
    setDisplay(results.slice(inital, inital+2));       
  }

  const getReleatedItems = () => {
    // TODO: REFACTOR
    if (!relatedProducts.state) {
      return null;
    } else {
      
      return (
        <div>
          <Grid
            container
            direction={'row'}
            justify='space-between'
          >
          <IconButton aria-label={`setting`}>
            <ArrowBackIosIcon />
          </IconButton>
            {relatedProducts.state.map((item, i) => {
              return (
                <RelatedItemsCard key={Math.random()} item={item} id={id} info={info} />
              )
            })}
          <IconButton aria-label={`setting`}>
            <ArrowForwardIosIcon />
          </IconButton>
          </Grid>
        </div>
      )
    }
  }
  return (
    <div>
      {getReleatedItems()}

    </div>

  )
}
export default RelatedItems;

