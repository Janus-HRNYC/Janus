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

  const [limit, setLimit] = useState(0);

  useEffect(() => {
    onGetRelated(id);
  }, []);

  const increase = () => {
    if (limit >= relatedProducts.state.length - 1) {
      setLimit(relatedProducts.state.length - 1);
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
    } else if (limit.length === 0) {
      return (
        <IconButton aria-label={`setting`} onClick={decrease} >
          <ArrowBackIosIcon />
        </IconButton>
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
    if (limit === relatedProducts.state.length - 3) {
      return (
        <ArrowForwardIosIcon visibility='hidden' />
      )
    } else if (limit.length === 0) {
      return (
        <IconButton aria-label={`setting`} onClick={increase} visibility='hidden' >
          <ArrowForwardIosIcon />
        </IconButton>
      )
    } else {
      return (
        <IconButton aria-label={`setting`} onClick={increase} visibility='hidden' >
          <ArrowForwardIosIcon />
        </IconButton>
      )
    }
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
            {decreaseButtonAction()}
            {relatedProducts.state.slice(limit, limit + 3).map((item, i) => {
              if ((i === limit) || (i < (limit + 4))) {
                return (
                  <RelatedItemsCard key={Math.random()} item={item} id={id} info={info} />
                )
              } else {
                return null
              }
            })}
            {increaseButtonAction()}
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

