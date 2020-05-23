import React, { useEffect } from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { getDefaultImg } from '../utility/relatedUtility.js';
import ComparisonModal from './ComparisonModal';
import { salePrice, avgRatings } from './../utility/relatedUtility.js';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

// const useStyles = makeStyles({  
//   media: {
//     // paddingTop: '100%', // 16:9
//     height: 120,
//   // },
//   // title: {
//   //   fontSize: 14,
//   // },
//   // pos: {
//   //   marginBottom: 12,
//   // },
//   cardHeader: { 
//     height: 10,
//   },
//   card: {
//     width: 225
//   }

// });

const relatedItemsCard = (props) => {
  const {
    item,
    id,
    info,
  } = props;
  const classes = useStyles();
 
 useEffect(() => {
  displayComparison()
  }, [])
  
  const displayPhoto = () => {
    if (!item.styles) {
      return (
        null
      )
    } else {
      let photoSrc = '';
      photoSrc = getDefaultImg(item.styles);
      return (
        <CardMedia
          className={classes.cardMedia}
          image={photoSrc}
          title={item.name}
        />
      )
    }
  }
  let results = salePrice(item.styles);
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
          {`$${results}`}
        </Typography>
      )
    }
  }
  const displayComparison = () => {
    if (!info && !item) {
      return (
        null
      )
    } else {
      return (
        < ComparisonModal currentItem={item} info={info} />
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
  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings" color='secondary' size='small' >
            {displayComparison()}
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
      </CardContent>
    </Card>
  );
}
export default relatedItemsCard;
