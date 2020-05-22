import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { getDefaultImg } from '../utility/relatedUtility.js';
import CardMedia from '@material-ui/core/CardMedia';
import { salePrice, avgRatings } from './../utility/relatedUtility.js';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    paddingTop: '100%', // 16:9
  },
});

const Outfitcards = ({ onUpdateOutfit, removeOutfit, styles, item }) => {
  const classes = useStyles();

  const displayPhoto = () => {
    const defaultPhoto = {
      id: 1,
      src: '../../public/No_Default.jpg',
      title: 'default',
      description: 'default'
    }
    if (!styles) {
      return (
        null
      )
    } else {
      let photoSrc = '';
      photoSrc = getDefaultImg(styles);
      return (
        <CardMedia
          className={classes.media}
          image={photoSrc || defaultPhoto.src}
          title={item.name}
        />
      )
    }
  }
  let results = salePrice(styles);
  const stylePrice = () => {
    if (!results) {
      return (
        <Typography variant="body2" component="p">
          {item.name}
          <br />
          {`$${item.price}`}
        </Typography>
      )
    } else if (results[0] !== 'S') {
      return (
        <Typography variant="body2" component="p">
          {item.name}
          <br />
          {`$${results}`}
        </Typography>
      )
    } else {
      return (
        <Typography variant="body2" component="p" color='red'>
          {item.name}
          <br />
          {`$${results}SALE`}
        </Typography>
      )
    }
  }
  const showRating = () => {
    let rating = avgRatings(item.ratings);
    if (rating === 0) {
      return (
        <Box component='fieldset' mb={3} borderColor='transparent' visibility='hidden'>
          <Rating name='read-only' value={0} readOnly />
        </Box>
      )
    } else {
      return (
        <Box component='fieldset' mb={3} borderColor='transparent'>
          <Rating name='read-only' value={(rating)} readOnly />
        </Box>
      )
    }
  }
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={() => { removeOutfit(item.id) }}>
            <HighlightOffIcon />
          </IconButton>
        }
      />
      {displayPhoto()}
      <CardContent>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {item.category}
        </Typography>
        {stylePrice()}
        {showRating()}
        <Box component='fieldset' mb={3} borderColor='transparent'>
          <Rating name='read-only' value={5} readOnly />
        </Box>
      </CardContent>
    </Card>
  );
}

export default Outfitcards
